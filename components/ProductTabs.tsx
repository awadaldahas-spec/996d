"use client";

import { useState } from "react";
import type { ProductTabs as ProductTabsData } from "@/lib/products";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";

const tabKeys = [
  "description",
  "specifications",
  "organoleptic",
  "regulatory",
  "quality",
  "confidentiality",
] as const;
type TabKey = (typeof tabKeys)[number];

export default function ProductTabs({
  tabs,
  locale,
}: {
  tabs: ProductTabsData;
  locale: Locale;
}) {
  const t = getDictionary(locale);
  const [active, setActive] = useState<TabKey>("description");

  function renderContent(key: TabKey) {
    switch (key) {
      case "description":
        return (
          <p className="whitespace-pre-line leading-relaxed text-bn-forest-dark/85">
            {tabs.description}
          </p>
        );
      case "specifications":
        return (
          <ul className="space-y-2 text-bn-forest-dark/85">
            {tabs.specifications.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-bn-gold">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        );
      case "organoleptic":
        return (
          <ul className="space-y-2 text-bn-forest-dark/85">
            {tabs.organoleptic.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-bn-gold">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        );
      case "regulatory":
        return (
          <p className="whitespace-pre-line leading-relaxed text-bn-forest-dark/85">
            {tabs.regulatory}
          </p>
        );
      case "quality":
        return (
          <p className="whitespace-pre-line leading-relaxed text-bn-forest-dark/85">
            {tabs.quality}
          </p>
        );
      case "confidentiality":
        return (
          <p className="whitespace-pre-line leading-relaxed text-bn-forest-dark/85">
            {tabs.confidentiality}
          </p>
        );
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-bn-forest/15 mb-6">
        {tabKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-3 text-sm tracking-wide transition-colors border-b-2 -mb-px ${
              active === key
                ? "border-bn-gold text-bn-forest-dark font-medium"
                : "border-transparent text-bn-forest-dark/50 hover:text-bn-forest-dark"
            }`}
          >
            {t.product.tabsShort[key]}
          </button>
        ))}
      </div>
      <div className="min-h-[160px]">{renderContent(active)}</div>
    </div>
  );
}
