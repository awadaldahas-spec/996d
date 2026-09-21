import { writeFileSync } from "fs";
import { categories, products } from "../data/products";

function esc(value: string | undefined | null) {
  if (value === undefined || value === null) return "NULL";
  return `'${value.replace(/'/g, "''")}'`;
}

function escJson(value: unknown) {
  return esc(JSON.stringify(value ?? []));
}

const lines: string[] = [];

lines.push("DELETE FROM products;");
lines.push("DELETE FROM categories;");

categories.forEach((cat, i) => {
  lines.push(
    `INSERT INTO categories (key, label_fr, label_en, note_fr, note_en, image, hidden, sort_order) VALUES (${esc(cat.key)}, ${esc(cat.labelFr)}, ${esc(cat.labelEn)}, ${esc(cat.noteFr)}, ${esc(cat.noteEn)}, ${esc(cat.image)}, ${cat.hidden ? 1 : 0}, ${i});`
  );
});

products.forEach((p, i) => {
  lines.push(
    `INSERT INTO products (sku, category_key, name_fr, name_en, subtitle_fr, subtitle_en, inci, cas, origin, extraction_method_fr, extraction_method_en, short_description_fr, short_description_en, image, images, description_fr, specifications_fr, organoleptic_fr, regulatory_fr, quality_fr, confidentiality_fr, sort_order) VALUES (${esc(
      p.sku
    )}, ${esc(p.category)}, ${esc(p.name)}, ${esc(p.nameEn)}, ${esc(p.subtitleFr)}, ${esc(
      p.subtitleEn
    )}, ${esc(p.inci)}, ${esc(p.cas)}, ${esc(p.origin)}, ${esc(p.extractionMethodFr)}, ${esc(
      p.extractionMethodEn
    )}, ${esc(p.shortDescriptionFr)}, ${esc(p.shortDescriptionEn)}, ${esc(p.image)}, ${escJson(
      p.images
    )}, ${esc(p.tabs.description)}, ${escJson(p.tabs.specifications)}, ${escJson(
      p.tabs.organoleptic
    )}, ${esc(p.tabs.regulatory)}, ${esc(p.tabs.quality)}, ${esc(p.tabs.confidentiality)}, ${i});`
  );
});

writeFileSync("d1/seed.sql", lines.join("\n"), "utf-8");
console.log(`Wrote ${lines.length} statements to d1/seed.sql`);
console.log(`Categories: ${categories.length}, Products: ${products.length}`);
