import type { MetadataRoute } from "next";
import { getAllProducts, getAllCategories } from "@/lib/products";

const BASE_URL = "https://bostannaturals.996d.workers.dev";
const LOCALES = ["fr", "en"] as const;

const STATIC_PATHS = [
  "/home",
  "/produits",
  "/services",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/politique-des-cookies",
];

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    });

    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "/produits" ? "weekly" : "monthly",
        priority: path === "/home" ? 0.9 : 0.6,
      });
    }
  }

  // Product and category pages are data-driven; a failure here must not break
  // the whole sitemap, so fall back to the static entries above.
  try {
    const [products, categories] = await Promise.all([getAllProducts(), getAllCategories()]);

    for (const locale of LOCALES) {
      for (const category of categories) {
        entries.push({
          url: `${BASE_URL}/${locale}/produits#${category.key}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }

      for (const product of products) {
        entries.push({
          url: `${BASE_URL}/${locale}/produits/${product.sku}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }
  } catch (error) {
    console.error("Sitemap product lookup failed:", error);
  }

  return entries;
}
