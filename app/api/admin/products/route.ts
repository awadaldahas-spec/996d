import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getDb } from "@/lib/db";

interface ProductPayload {
  sku: string;
  category: string;
  name: string;
  nameEn: string;
  subtitleFr?: string;
  subtitleEn?: string;
  inci: string;
  cas?: string;
  origin: string;
  extractionMethodFr?: string;
  extractionMethodEn?: string;
  shortDescriptionFr?: string;
  shortDescriptionEn?: string;
  image?: string;
  images?: string[];
  tabs: {
    description: string;
    specifications: string[];
    organoleptic: string[];
    regulatory: string;
    quality: string;
    confidentiality: string;
  };
  sortOrder?: number;
}

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const sku = searchParams.get("sku");
  const db = await getDb();

  if (sku) {
    const row = await db.prepare("SELECT * FROM products WHERE sku = ?").bind(sku).first();
    if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ item: row });
  }

  const { results } = await db.prepare("SELECT * FROM products ORDER BY sku ASC").all();
  return NextResponse.json({ items: results });
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: ProductPayload = await request.json();

  if (!body.sku || !body.category || !body.name || !body.nameEn || !body.inci || !body.origin) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const db = await getDb();
  try {
    await db
      .prepare(
        `INSERT INTO products (
          sku, category_key, name_fr, name_en, subtitle_fr, subtitle_en, inci, cas, origin,
          extraction_method_fr, extraction_method_en, short_description_fr, short_description_en,
          image, images, description_fr, specifications_fr, organoleptic_fr, regulatory_fr,
          quality_fr, confidentiality_fr, sort_order
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        body.sku,
        body.category,
        body.name,
        body.nameEn,
        body.subtitleFr || null,
        body.subtitleEn || null,
        body.inci,
        body.cas || null,
        body.origin,
        body.extractionMethodFr || null,
        body.extractionMethodEn || null,
        body.shortDescriptionFr || null,
        body.shortDescriptionEn || null,
        body.image || null,
        JSON.stringify(body.images || []),
        body.tabs?.description || "",
        JSON.stringify(body.tabs?.specifications || []),
        JSON.stringify(body.tabs?.organoleptic || []),
        body.tabs?.regulatory || "",
        body.tabs?.quality || "",
        body.tabs?.confidentiality || "",
        body.sortOrder || 0
      )
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

  const body: ProductPayload = await request.json();

  if (!body.sku) {
    return NextResponse.json({ error: "Missing sku" }, { status: 400 });
  }

  const db = await getDb();
  await db
    .prepare(
      `UPDATE products SET
        category_key = ?, name_fr = ?, name_en = ?, subtitle_fr = ?, subtitle_en = ?,
        inci = ?, cas = ?, origin = ?, extraction_method_fr = ?, extraction_method_en = ?,
        short_description_fr = ?, short_description_en = ?, image = ?, images = ?,
        description_fr = ?, specifications_fr = ?, organoleptic_fr = ?, regulatory_fr = ?,
        quality_fr = ?, confidentiality_fr = ?, sort_order = ?
      WHERE sku = ?`
    )
    .bind(
      body.category,
      body.name,
      body.nameEn,
      body.subtitleFr || null,
      body.subtitleEn || null,
      body.inci,
      body.cas || null,
      body.origin,
      body.extractionMethodFr || null,
      body.extractionMethodEn || null,
      body.shortDescriptionFr || null,
      body.shortDescriptionEn || null,
      body.image || null,
      JSON.stringify(body.images || []),
      body.tabs?.description || "",
      JSON.stringify(body.tabs?.specifications || []),
      JSON.stringify(body.tabs?.organoleptic || []),
      body.tabs?.regulatory || "",
      body.tabs?.quality || "",
      body.tabs?.confidentiality || "",
      body.sortOrder || 0,
      body.sku
    )
    .run();

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const sku = searchParams.get("sku");
  if (!sku) {
    return NextResponse.json({ error: "Missing sku" }, { status: 400 });
  }

  const db = await getDb();
  await db.prepare("DELETE FROM products WHERE sku = ?").bind(sku).run();
  return NextResponse.json({ ok: true });
}
