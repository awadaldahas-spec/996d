import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getDb } from "@/lib/db";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const db = await getDb();
  const { results } = await db.prepare("SELECT key, value FROM site_settings").all();
  return NextResponse.json({ items: results });
}

export async function PATCH(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const entries = Object.entries(body).filter(([, v]) => typeof v === "string") as [string, string][];
  if (entries.length === 0) {
    return NextResponse.json({ error: "No valid fields" }, { status: 400 });
  }

  const db = await getDb();
  const stmt = db.prepare(
    "INSERT INTO site_settings (key, value, updated_at) VALUES (?, ?, datetime('now')) ON CONFLICT (key) DO UPDATE SET value = ?, updated_at = datetime('now')"
  );
  await db.batch(entries.map(([key, value]) => stmt.bind(key, value, value)));

  return NextResponse.json({ ok: true });
}
