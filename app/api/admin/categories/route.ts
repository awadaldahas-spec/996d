import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getDb } from "@/lib/db";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const db = await getDb();
  const { results } = await db.prepare("SELECT * FROM categories ORDER BY sort_order ASC").all();
  return NextResponse.json({ items: results });
}

interface CategoryPayload {
  key: string;
  labelFr: string;
  labelEn: string;
  noteFr?: string;
  noteEn?: string;
  image?: string;
  hidden?: boolean;
  sortOrder?: number;
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: CategoryPayload = await request.json();
  const { key, labelFr, labelEn, noteFr, noteEn, image, hidden, sortOrder } = body;

  if (!key || !labelFr || !labelEn) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const db = await getDb();
  try {
    await db
      .prepare(
        "INSERT INTO categories (key, label_fr, label_en, note_fr, note_en, image, hidden, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
      )
      .bind(key, labelFr, labelEn, noteFr || "", noteEn || "", image || null, hidden ? 1 : 0, sortOrder || 0)
      .run();
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Insert failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

export async function PUT(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: CategoryPayload = await request.json();
  const { key, labelFr, labelEn, noteFr, noteEn, image, hidden, sortOrder } = body;

  if (!key) {
    return NextResponse.json({ error: "Missing key" }, { status: 400 });
  }

  const db = await getDb();
  await db
    .prepare(
      "UPDATE categories SET label_fr = ?, label_en = ?, note_fr = ?, note_en = ?, image = ?, hidden = ?, sort_order = ? WHERE key = ?"
    )
    .bind(labelFr, labelEn, noteFr || "", noteEn || "", image || null, hidden ? 1 : 0, sortOrder || 0, key)
    .run();

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  if (!key) {
    return NextResponse.json({ error: "Missing key" }, { status: 400 });
  }

  const db = await getDb();
  const { results } = await db
    .prepare("SELECT COUNT(*) as count FROM products WHERE category_key = ?")
    .bind(key)
    .all<{ count: number }>();

  if ((results[0]?.count || 0) > 0) {
    return NextResponse.json(
      { error: "Cannot delete category with existing products" },
      { status: 400 }
    );
  }

  await db.prepare("DELETE FROM categories WHERE key = ?").bind(key).run();
  return NextResponse.json({ ok: true });
}
