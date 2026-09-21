import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getDb } from "@/lib/db";
import { uploadImageToCloudinary } from "@/lib/cloudinary";

const ALLOWED_SIDES = ["left", "right"] as const;
type Side = (typeof ALLOWED_SIDES)[number];

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const db = await getDb();
  const { results } = await db
    .prepare(
      "SELECT id, side, url, caption_fr, caption_en, sort_order FROM landing_media_items ORDER BY side ASC, sort_order ASC, id ASC"
    )
    .all();
  return NextResponse.json({ items: results });
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const side = formData.get("side");
  const captionFr = formData.get("captionFr");
  const captionEn = formData.get("captionEn");
  const file = formData.get("file");

  if (typeof side !== "string" || !ALLOWED_SIDES.includes(side as Side)) {
    return NextResponse.json({ error: "Invalid side" }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "File must be an image" }, { status: 400 });
  }
  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
  }

  try {
    const result = await uploadImageToCloudinary(file, {
      folder: "bostan-naturals/landing",
      publicId: `${side}-${Date.now()}`,
    });

    const db = await getDb();
    const { results: maxRows } = await db
      .prepare("SELECT COALESCE(MAX(sort_order), -1) as maxOrder FROM landing_media_items WHERE side = ?")
      .bind(side)
      .all<{ maxOrder: number }>();
    const nextOrder = (maxRows[0]?.maxOrder ?? -1) + 1;

    const inserted = await db
      .prepare(
        "INSERT INTO landing_media_items (side, url, caption_fr, caption_en, sort_order) VALUES (?, ?, ?, ?, ?) RETURNING id, side, url, caption_fr, caption_en, sort_order"
      )
      .bind(
        side,
        result.secure_url,
        typeof captionFr === "string" && captionFr ? captionFr : null,
        typeof captionEn === "string" && captionEn ? captionEn : null,
        nextOrder
      )
      .first();

    return NextResponse.json({ ok: true, item: inserted });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Upload failed" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as {
    id?: number;
    captionFr?: string;
    captionEn?: string;
    sortOrder?: number;
  };

  if (!body.id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const db = await getDb();

  if (typeof body.sortOrder === "number") {
    await db
      .prepare("UPDATE landing_media_items SET sort_order = ? WHERE id = ?")
      .bind(body.sortOrder, body.id)
      .run();
  }
  if (typeof body.captionFr === "string" || typeof body.captionEn === "string") {
    await db
      .prepare("UPDATE landing_media_items SET caption_fr = ?, caption_en = ? WHERE id = ?")
      .bind(body.captionFr ?? null, body.captionEn ?? null, body.id)
      .run();
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const db = await getDb();
  await db.prepare("DELETE FROM landing_media_items WHERE id = ?").bind(Number(id)).run();
  return NextResponse.json({ ok: true });
}
