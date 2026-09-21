import { getDb } from "@/lib/db";

export interface SiteMediaItem {
  key: string;
  mediaType: "image" | "video";
  url: string | null;
  caption: string | null;
}

export const SITE_MEDIA_KEYS = {
  homeHeroVideo: "home_hero_video",
  homeProducersImage: "home_producers_image",
  homeQualityImage: "home_quality_image",
  aboutHeroImage: "about_hero_image",
  aboutProducersImage: "about_producers_image",
  aboutSecondaryImage: "about_secondary_image",
} as const;

export async function getSiteMedia(): Promise<Record<string, SiteMediaItem>> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT key, media_type, url, caption FROM site_media")
    .all<{ key: string; media_type: string; url: string | null; caption: string | null }>();

  const map: Record<string, SiteMediaItem> = {};
  for (const row of results) {
    map[row.key] = {
      key: row.key,
      mediaType: row.media_type === "video" ? "video" : "image",
      url: row.url,
      caption: row.caption,
    };
  }
  return map;
}
