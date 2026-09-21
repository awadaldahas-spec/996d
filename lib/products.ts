import { getDb } from "@/lib/db";

export type ProductCategory = string;

export interface ProductTabs {
  description: string;
  specifications: string[];
  organoleptic: string[];
  regulatory: string;
  quality: string;
  confidentiality: string;
}

export interface Product {
  id: number;
  sku: string;
  category: ProductCategory;
  name: string;
  nameEn: string;
  subtitleFr?: string | null;
  subtitleEn?: string | null;
  inci: string;
  cas?: string | null;
  origin: string;
  extractionMethodFr?: string | null;
  extractionMethodEn?: string | null;
  shortDescriptionFr?: string | null;
  shortDescriptionEn?: string | null;
  image: string | null;
  images: string[];
  tabs: ProductTabs;
}

export interface Category {
  key: string;
  labelFr: string;
  labelEn: string;
  noteFr: string;
  noteEn: string;
  image: string | null;
  hidden: boolean;
}

interface ProductRow {
  id: number;
  sku: string;
  category_key: string;
  name_fr: string;
  name_en: string;
  subtitle_fr: string | null;
  subtitle_en: string | null;
  inci: string;
  cas: string | null;
  origin: string;
  extraction_method_fr: string | null;
  extraction_method_en: string | null;
  short_description_fr: string | null;
  short_description_en: string | null;
  image: string | null;
  images: string;
  description_fr: string;
  specifications_fr: string;
  organoleptic_fr: string;
  regulatory_fr: string;
  quality_fr: string;
  confidentiality_fr: string;
}

interface CategoryRow {
  key: string;
  label_fr: string;
  label_en: string;
  note_fr: string;
  note_en: string;
  image: string | null;
  hidden: number;
}

function rowToProduct(row: ProductRow): Product {
  return {
    id: row.id,
    sku: row.sku,
    category: row.category_key,
    name: row.name_fr,
    nameEn: row.name_en,
    subtitleFr: row.subtitle_fr,
    subtitleEn: row.subtitle_en,
    inci: row.inci,
    cas: row.cas,
    origin: row.origin,
    extractionMethodFr: row.extraction_method_fr,
    extractionMethodEn: row.extraction_method_en,
    shortDescriptionFr: row.short_description_fr,
    shortDescriptionEn: row.short_description_en,
    image: row.image,
    images: JSON.parse(row.images || "[]"),
    tabs: {
      description: row.description_fr,
      specifications: JSON.parse(row.specifications_fr || "[]"),
      organoleptic: JSON.parse(row.organoleptic_fr || "[]"),
      regulatory: row.regulatory_fr,
      quality: row.quality_fr,
      confidentiality: row.confidentiality_fr,
    },
  };
}

function rowToCategory(row: CategoryRow): Category {
  return {
    key: row.key,
    labelFr: row.label_fr,
    labelEn: row.label_en,
    noteFr: row.note_fr,
    noteEn: row.note_en,
    image: row.image,
    hidden: row.hidden === 1,
  };
}

export async function getAllCategories(): Promise<Category[]> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT * FROM categories ORDER BY sort_order ASC")
    .all<CategoryRow>();
  return results.map(rowToCategory);
}

export async function getAllProducts(): Promise<Product[]> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT * FROM products ORDER BY sku ASC")
    .all<ProductRow>();
  return results.map(rowToProduct);
}

export async function getProductBySku(sku: string): Promise<Product | undefined> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT * FROM products WHERE sku = ?")
    .bind(sku)
    .first<ProductRow>();
  return row ? rowToProduct(row) : undefined;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT * FROM products WHERE category_key = ? ORDER BY sku ASC")
    .bind(category)
    .all<ProductRow>();
  return results.map(rowToProduct);
}
