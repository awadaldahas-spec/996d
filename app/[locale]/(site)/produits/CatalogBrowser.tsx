"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Category, Product } from "@/lib/products";
import PlaceholderMedia from "@/components/PlaceholderMedia";

export default function CatalogBrowser({
  locale,
  typedLocale,
  categories,
  products,
}: {
  locale: string;
  typedLocale: "fr" | "en";
  categories: Category[];
  products: Product[];
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    // Deferred so restoring the category from the URL hash does not trigger a
    // cascading render (react-hooks/set-state-in-effect).
    const raf = requestAnimationFrame(() => {
      const hash = window.location.hash.replace("#", "");
      if (hash && categories.some((c) => c.key === hash)) {
        setActiveKey(hash);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [categories]);

  function selectCategory(key: string) {
    setActiveKey(key);
    window.history.replaceState(null, "", `#${key}`);
  }

  function backToCategories() {
    setActiveKey(null);
    window.history.replaceState(null, "", window.location.pathname);
  }

  const activeCategory = categories.find((c) => c.key === activeKey);

  if (activeCategory) {
    const items = products.filter((p) => p.category === activeCategory.key);

    return (
      <div>
        <button
          onClick={backToCategories}
          className="inline-flex items-center gap-2 text-sm text-bn-forest-dark/70 hover:text-bn-gold transition-colors mb-8"
        >
          <span aria-hidden>←</span>
          {typedLocale === "fr" ? "Toutes les catégories" : "All categories"}
        </button>

        <div className="flex items-center gap-4 mb-2">
          <h2 className="font-serif text-2xl sm:text-3xl text-bn-forest-dark">
            {typedLocale === "fr" ? activeCategory.labelFr : activeCategory.labelEn}
          </h2>
          <span className="text-xs text-bn-forest/50 tracking-wide">
            {items.length} {typedLocale === "fr" ? "produits" : "products"}
          </span>
        </div>
        <p className="text-bn-forest-dark/70 mb-8 max-w-2xl">
          {typedLocale === "fr" ? activeCategory.noteFr : activeCategory.noteEn}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <Link
              key={product.sku}
              href={`/${locale}/produits/${product.sku}`}
              className="group rounded-lg overflow-hidden border border-bn-forest/10 bg-white hover:shadow-lg transition-shadow"
            >
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.image}
                  alt={typedLocale === "fr" ? product.name : product.nameEn}
                  className="h-40 w-full object-cover"
                />
              ) : (
                <PlaceholderMedia label={product.sku} className="h-40" />
              )}
              <div className="p-4">
                <p className="text-[10px] tracking-widest text-bn-gold uppercase mb-1">
                  {product.sku}
                </p>
                <h3 className="font-serif text-base text-bn-forest-dark group-hover:text-bn-forest transition-colors leading-snug">
                  {typedLocale === "fr" ? product.name : product.nameEn}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat) => {
        const count = products.filter((p) => p.category === cat.key).length;
        return (
          <button
            key={cat.key}
            onClick={() => selectCategory(cat.key)}
            className="group text-left rounded-lg overflow-hidden border border-bn-forest/10 bg-white hover:shadow-lg transition-shadow"
          >
            {cat.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cat.image}
                alt={typedLocale === "fr" ? cat.labelFr : cat.labelEn}
                className="h-44 w-full object-cover"
              />
            ) : (
              <PlaceholderMedia label={typedLocale === "fr" ? cat.labelFr : cat.labelEn} className="h-44" />
            )}
            <div className="p-5">
              <h3 className="font-serif text-lg text-bn-forest-dark group-hover:text-bn-forest transition-colors mb-1">
                {typedLocale === "fr" ? cat.labelFr : cat.labelEn}
              </h3>
              <p className="text-xs text-bn-forest-dark/50 tracking-wide">
                {count} {typedLocale === "fr" ? "produits" : "products"}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
