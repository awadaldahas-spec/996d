"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/data/dictionary";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div className="flex items-center gap-1 text-xs font-medium tracking-wide">
      <button
        onClick={() => switchTo("fr")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "fr" ? "text-bn-gold" : "text-bn-cream/60 hover:text-bn-cream"
        }`}
      >
        FR
      </button>
      <span className="text-bn-cream/30">/</span>
      <button
        onClick={() => switchTo("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en" ? "text-bn-gold" : "text-bn-cream/60 hover:text-bn-cream"
        }`}
      >
        EN
      </button>
    </div>
  );
}
