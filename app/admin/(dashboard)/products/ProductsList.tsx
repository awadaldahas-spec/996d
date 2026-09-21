"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product, Category } from "@/lib/products";

export default function ProductsList({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [items, setItems] = useState(products);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const categoryLabel = (key: string) =>
    categories.find((c) => c.key === key)?.labelFr || key;

  async function handleDelete(sku: string) {
    if (!confirm(`Supprimer le produit ${sku} ?`)) return;
    const res = await fetch(`/api/admin/products?sku=${encodeURIComponent(sku)}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      alert(data.error || "Erreur");
      return;
    }
    setItems((prev) => prev.filter((p) => p.sku !== sku));
  }

  const byCategory = filter === "all" ? items : items.filter((p) => p.category === filter);
  const rawQuery = search.trim().toLowerCase();
  const STOP_WORDS = ["code", "sku", "de", "du", "des", "la", "le", "les", "et", "the", "of"];
  let cleanedQuery = rawQuery;
  for (const stop of STOP_WORDS) {
    cleanedQuery = cleanedQuery.split(stop).join(" ");
  }
  const terms = cleanedQuery.split(" ").map((t) => t.trim()).filter((t) => t.length >= 2);

  function matches(product: Product) {
    const haystack = [product.sku, product.name, product.nameEn, product.subtitleFr, product.subtitleEn]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (rawQuery && haystack.indexOf(rawQuery) !== -1) return true;
    for (const term of terms) {
      if (haystack.indexOf(term) !== -1) return true;
    }
    return false;
  }

  const visible = rawQuery.length > 0 ? byCategory.filter(matches) : byCategory;

  return (
    <div>
      <div className="relative mb-4 max-w-sm">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-bn-forest-dark/40"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher par SKU ou nom..."
          className="w-full border border-bn-forest-dark/20 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bn-gold bg-white"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`text-xs px-3 py-1.5 rounded-full ${
            filter === "all" ? "bg-bn-forest-dark text-bn-cream" : "bg-white text-bn-forest-dark/70"
          }`}
        >
          Tous ({items.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`text-xs px-3 py-1.5 rounded-full ${
              filter === cat.key
                ? "bg-bn-forest-dark text-bn-cream"
                : "bg-white text-bn-forest-dark/70"
            }`}
          >
            {cat.labelFr} ({items.filter((p) => p.category === cat.key).length})
          </button>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-sm text-bn-forest-dark/50 mb-4">Aucun produit trouvé.</p>
      )}

      <div className="bg-white border border-bn-forest/10 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-bn-forest-dark/5 text-bn-forest-dark/60 text-xs uppercase tracking-wide">
            <tr>
              <th className="text-left px-4 py-3">SKU</th>
              <th className="text-left px-4 py-3">Nom</th>
              <th className="text-left px-4 py-3">Catégorie</th>
              <th className="text-right px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((p) => (
              <tr key={p.sku} className="border-t border-bn-forest/5">
                <td className="px-4 py-3 text-bn-gold font-medium">{p.sku}</td>
                <td className="px-4 py-3 text-bn-forest-dark">{p.name}</td>
                <td className="px-4 py-3 text-bn-forest-dark/70">{categoryLabel(p.category)}</td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link
                    href={`/admin/products/${p.sku}`}
                    className="text-bn-forest-dark/70 hover:text-bn-gold text-xs"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => handleDelete(p.sku)}
                    className="text-red-600/70 hover:text-red-600 text-xs"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
