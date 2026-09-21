import { getDb } from "@/lib/db";

export interface GalleryImage {
  id: number;
  url: string;
  caption: string | null;
  sortOrder: number;
}

interface GalleryImageRow {
  id: number;
  url: string;
  caption: string | null;
  sort_order: number;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT id, url, caption, sort_order FROM gallery_images ORDER BY sort_order ASC, id ASC")
    .all<GalleryImageRow>();
  return results.map((row) => ({
    id: row.id,
    url: row.url,
    caption: row.caption,
    sortOrder: row.sort_order,
  }));
}
