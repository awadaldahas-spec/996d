import { notFound } from "next/navigation";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";
import { getProductBySku, getAllCategories } from "@/lib/products";
import ProductGallery from "@/components/ProductGallery";
import ProductTabs from "@/components/ProductTabs";
import RFQForm from "@/components/RFQForm";

export const revalidate = 0;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; sku: string }>;
}) {
  const { locale, sku } = await params;
  const typedLocale = locale as Locale;
  const t = getDictionary(typedLocale);
  const [product, categories] = await Promise.all([getProductBySku(sku), getAllCategories()]);

  if (!product) notFound();

  const isFr = typedLocale === "fr";
  const name = isFr ? product.name : product.nameEn;
  const subtitle = isFr ? product.subtitleFr : product.subtitleEn;
  const shortDescription = isFr ? product.shortDescriptionFr : product.shortDescriptionEn;
  const extractionMethod = isFr ? product.extractionMethodFr : product.extractionMethodEn;
  const category = categories.find((c) => c.key === product.category);
  const categoryLabel = category ? (isFr ? category.labelFr : category.labelEn) : "";

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <ProductGallery images={product.images || []} label={name} />

        <div>
          <p className="text-xs tracking-widest text-bn-forest uppercase mb-3 font-medium">
            {[categoryLabel, extractionMethod].filter(Boolean).join(" · ")}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-bn-forest-dark mb-1">
            {name}
          </h1>
          {subtitle && (
            <p className="text-bn-forest-dark/60 italic text-lg mb-6">{subtitle}</p>
          )}

          <dl className="grid sm:grid-cols-2 gap-4 text-sm text-bn-forest-dark/85 mb-6">
            <div>
              <dt className="text-xs font-medium tracking-wide uppercase text-bn-forest-dark/50 mb-1">
                {t.product.inci}
              </dt>
              <dd className="italic">{product.inci}</dd>
            </div>
            {product.cas && (
              <div>
                <dt className="text-xs font-medium tracking-wide uppercase text-bn-forest-dark/50 mb-1">
                  {t.product.cas}
                </dt>
                <dd>{product.cas}</dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-medium tracking-wide uppercase text-bn-forest-dark/50 mb-1">
                {t.product.origin}
              </dt>
              <dd>{product.origin}</dd>
            </div>
            {extractionMethod && (
              <div>
                <dt className="text-xs font-medium tracking-wide uppercase text-bn-forest-dark/50 mb-1">
                  {t.product.extractionMethod}
                </dt>
                <dd>{extractionMethod}</dd>
              </div>
            )}
          </dl>

          {shortDescription && (
            <p className="text-bn-forest-dark/80 leading-relaxed mb-6">
              {shortDescription}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {[t.product.badgeCertified, t.product.badgePure, t.product.badgeOrigin, t.product.badgeCoa].map(
              (badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-bn-forest-dark bg-bn-gold/15 px-3 py-1.5 rounded-full"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="9" r="5" />
                    <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {badge}
                </span>
              )
            )}
          </div>

          <a
            href="#rfq"
            className="inline-flex items-center gap-2 px-8 py-3 bg-bn-gold text-bn-forest-dark font-medium uppercase tracking-wide rounded hover:bg-bn-forest-dark hover:text-bn-cream transition-colors"
          >
            {t.product.requestQuoteCta}
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>

      {/* 6-tab technical accordion */}
      <div className="mb-16 bg-white border border-bn-forest/10 rounded-lg p-6 sm:p-8">
        <ProductTabs tabs={product.tabs} locale={typedLocale} />
      </div>

      {/* RFQ Form */}
      <div id="rfq" className="max-w-2xl">
        <RFQForm locale={typedLocale} productSku={product.sku} productName={name} />
      </div>
    </div>
  );
}
