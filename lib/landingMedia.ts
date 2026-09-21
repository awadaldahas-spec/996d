import { getDb } from "@/lib/db";

export interface LandingMediaItem {
  id: number;
  side: "left" | "right";
  url: string;
  captionFr: string | null;
  captionEn: string | null;
  sortOrder: number;
}

interface LandingMediaItemRow {
  id: number;
  side: string;
  url: string;
  caption_fr: string | null;
  caption_en: string | null;
  sort_order: number;
}

export async function getLandingMediaItems(): Promise<LandingMediaItem[]> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT id, side, url, caption_fr, caption_en, sort_order FROM landing_media_items ORDER BY side ASC, sort_order ASC, id ASC")
    .all<LandingMediaItemRow>();
  return results.map((row) => ({
    id: row.id,
    side: row.side as "left" | "right",
    url: row.url,
    captionFr: row.caption_fr,
    captionEn: row.caption_en,
    sortOrder: row.sort_order,
  }));
}
