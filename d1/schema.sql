CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT NOT NULL UNIQUE,
  label_fr TEXT NOT NULL,
  label_en TEXT NOT NULL,
  note_fr TEXT NOT NULL,
  note_en TEXT NOT NULL,
  image TEXT,
  hidden INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sku TEXT NOT NULL UNIQUE,
  category_key TEXT NOT NULL REFERENCES categories(key),
  name_fr TEXT NOT NULL,
  name_en TEXT NOT NULL,
  subtitle_fr TEXT,
  subtitle_en TEXT,
  inci TEXT NOT NULL,
  cas TEXT,
  origin TEXT NOT NULL,
  extraction_method_fr TEXT,
  extraction_method_en TEXT,
  short_description_fr TEXT,
  short_description_en TEXT,
  image TEXT,
  images TEXT NOT NULL DEFAULT '[]',
  description_fr TEXT NOT NULL DEFAULT '',
  specifications_fr TEXT NOT NULL DEFAULT '[]',
  organoleptic_fr TEXT NOT NULL DEFAULT '[]',
  regulatory_fr TEXT NOT NULL DEFAULT '',
  quality_fr TEXT NOT NULL DEFAULT '',
  confidentiality_fr TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_key);
