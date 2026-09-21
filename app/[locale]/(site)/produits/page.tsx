import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";
import { getAllCategories, getAllProducts } from "@/lib/products";
import CatalogBrowser from "./CatalogBrowser";

export const revalidate = 0;

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const t = getDictionary(typedLocale);
  const [categories, allProducts] = await Promise.all([getAllCategories(), getAllProducts()]);
  const visibleCategories = categories.filter((c) => !c.hidden);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl text-bn-forest-dark text-center gold-underline mx-auto w-fit mb-16">
        {t.categories.title}
      </h1>

      <CatalogBrowser
        locale={locale}
        typedLocale={typedLocale}
        categories={visibleCategories}
        products={allProducts}
      />
    </div>
  );
}
