import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getDb } from "@/lib/db";
import { uploadImageToCloudinary } from "@/lib/cloudinary";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT id, url, caption, sort_order FROM gallery_images ORDER BY sort_order ASC, id ASC")
    .all();
  return NextResponse.json({ items: results });
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const caption = formData.get("caption");

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
      folder: "bostan-naturals/gallery",
      publicId: crypto.randomUUID(),
    });

    const db = await getDb();
    const { results: maxRows } = await db
      .prepare("SELECT COALESCE(MAX(sort_order), -1) as maxOrder FROM gallery_images")
      .all<{ maxOrder: number }>();
    const nextOrder = (maxRows[0]?.maxOrder ?? -1) + 1;

    const inserted = await db
      .prepare(
        "INSERT INTO gallery_images (url, caption, sort_order) VALUES (?, ?, ?) RETURNING id"
      )
      .bind(result.secure_url, typeof caption === "string" && caption ? caption : null, nextOrder)
      .first<{ id: number }>();

    return NextResponse.json({ ok: true, id: inserted?.id, url: result.secure_url });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 }
    );
  }
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
  await db.prepare("DELETE FROM gallery_images WHERE id = ?").bind(Number(id)).run();
  return NextResponse.json({ ok: true });
}

export async function PATCH(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as { id?: number; caption?: string };
  if (!body.id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const db = await getDb();
  await db
    .prepare("UPDATE gallery_images SET caption = ? WHERE id = ?")
    .bind(body.caption ?? null, body.id)
    .run();

  return NextResponse.json({ ok: true });
}
