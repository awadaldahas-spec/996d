import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getDb } from "@/lib/db";
import { uploadImageToCloudinary } from "@/lib/cloudinary";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const db = await getDb();
  const { results } = await db.prepare("SELECT * FROM site_media").all();
  return NextResponse.json({ items: results });
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const key = formData.get("key");
  const file = formData.get("file");
  const caption = formData.get("caption");

  if (typeof key !== "string" || !key) {
    return NextResponse.json({ error: "Missing key" }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const isVideo = file.type.startsWith("video/");
  const isImage = file.type.startsWith("image/");
  if (!isVideo && !isImage) {
    return NextResponse.json({ error: "File must be an image or video" }, { status: 400 });
  }

  const maxSize = isVideo ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return NextResponse.json({ error: "File too large" }, { status: 400 });
  }

  try {
    const result = await uploadImageToCloudinary(file, {
      folder: "bostan-naturals/site-media",
      publicId: `${key}-${Date.now()}`,
      resourceType: isVideo ? "video" : "image",
    });

    const captionValue = typeof caption === "string" ? caption : null;

    const db = await getDb();
    await db
      .prepare(
        "INSERT INTO site_media (key, media_type, url, caption, updated_at) VALUES (?, ?, ?, ?, datetime('now')) ON CONFLICT (key) DO UPDATE SET media_type = ?, url = ?, caption = ?, updated_at = datetime('now')"
      )
      .bind(
        key,
        isVideo ? "video" : "image",
        result.secure_url,
        captionValue,
        isVideo ? "video" : "image",
        result.secure_url,
        captionValue
      )
      .run();

    return NextResponse.json({ ok: true, url: result.secure_url });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as { key?: string; caption?: string };
  if (!body.key) {
    return NextResponse.json({ error: "Missing key" }, { status: 400 });
  }

  const db = await getDb();
  await db
    .prepare(
      "UPDATE site_media SET caption = ?, updated_at = datetime('now') WHERE key = ?"
    )
    .bind(body.caption ?? null, body.key)
    .run();

  return NextResponse.json({ ok: true });
}
