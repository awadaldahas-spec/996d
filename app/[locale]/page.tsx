import ImmersiveLanding from "@/components/ImmersiveLanding";
import type { Locale } from "@/data/dictionary";
import { getLandingMediaItems } from "@/lib/landingMedia";

export const dynamic = "force-dynamic";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const items = await getLandingMediaItems();

  const media = {
    left: [] as { imageUrl: string; captionFr: string | null; captionEn: string | null }[],
    right: [] as { imageUrl: string; captionFr: string | null; captionEn: string | null }[],
  };

  for (const item of items) {
    const entry = { imageUrl: item.url, captionFr: item.captionFr, captionEn: item.captionEn };
    if (item.side === "left") media.left.push(entry);
    if (item.side === "right") media.right.push(entry);
  }

  return <ImmersiveLanding locale={locale as Locale} media={media} />;
}
