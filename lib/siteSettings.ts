import { getDb } from "@/lib/db";

export const SITE_SETTINGS_KEYS = {
  contactOfficeTitle: "contact_office_title",
  contactAddress: "contact_address",
  contactCrNumber: "contact_cr_number",
  contactEmail: "contact_email",
  contactPhone: "contact_phone",
  contactMapEmbedUrl: "contact_map_embed_url",
  contactSocialNote: "contact_social_note",
} as const;

export async function getSiteSettings(): Promise<Record<string, string>> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT key, value FROM site_settings")
    .all<{ key: string; value: string | null }>();

  const map: Record<string, string> = {};
  for (const row of results) {
    map[row.key] = row.value || "";
  }
  return map;
}
