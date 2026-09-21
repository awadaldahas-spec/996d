import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";
import { getAllCategories } from "@/lib/products";
import { getSiteMedia, SITE_MEDIA_KEYS } from "@/lib/siteMedia";
import { getGalleryImages } from "@/lib/gallery";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import Reveal from "@/components/Reveal";

export const revalidate = 0;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const t = getDictionary(typedLocale);
  const [categories, siteMedia, galleryItems] = await Promise.all([
    getAllCategories(),
    getSiteMedia(),
    getGalleryImages(),
  ]);
  const visibleCategories = categories.filter((c) => !c.hidden);
  const heroVideoRaw = siteMedia[SITE_MEDIA_KEYS.homeHeroVideo]?.url;
  const heroVideo = heroVideoRaw?.includes("/video/upload/")
    ? heroVideoRaw.replace(
        "/video/upload/",
        "/video/upload/q_auto:eco,f_auto,w_800,c_limit/"
      )
    : heroVideoRaw;
  const producersImage = siteMedia[SITE_MEDIA_KEYS.homeProducersImage]?.url;
  const qualityImage = siteMedia[SITE_MEDIA_KEYS.homeQualityImage]?.url;

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[560px] md:h-[70vh] md:min-h-[480px] flex flex-col md:flex-row">
        <div className="flex-1 flex items-center bg-bn-cream px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-bn-forest-dark mb-6">
              {t.home.heroTitle}
            </h1>
            <p className="text-bn-forest-dark/70 text-lg sm:text-xl leading-relaxed">
              {t.home.heroSubtitle}
            </p>
            <Link
              href={`/${locale}/produits`}
              className="inline-block mt-8 px-8 py-3 bg-bn-gold text-bn-forest-dark font-medium rounded hover:bg-bn-forest-dark hover:text-bn-cream transition-colors"
            >
              {t.home.exploreCatalog}
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-bn-cream px-6 py-10 md:py-16 md:px-12 lg:px-16">
          <div className="relative w-full max-w-lg">
            {heroVideo && (
              <video
                className="w-full h-[480px] sm:h-[560px] md:h-[420px] object-cover rounded-2xl shadow-xl bg-bn-forest-dark/10"
                src={heroVideo}
                poster={heroVideo.replace("/video/upload/", "/video/upload/so_0/").replace(/\.\w+$/, ".jpg")}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            )}
            <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-72 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-bn-gold/20 flex items-center justify-center text-bn-gold shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="9" r="5" />
                  <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-bn-forest-dark leading-tight">
                  {t.home.sourcingBadgeTitle}
                </p>
                <p className="text-[10px] tracking-[0.15em] text-bn-forest-dark/60 uppercase">
                  {t.home.sourcingBadgeSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Card */}
      <section className="bg-gradient-to-br from-bn-cream via-bn-cream to-bn-forest/10 px-6 py-20 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <span className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-white shadow-xl mb-8 overflow-hidden">
            <Image
              src="/images/logo.jpeg"
              alt="Bostan Naturals"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-bn-forest-dark mb-2">
            {t.home.heroTitle}
          </h2>
          <p className="text-xs tracking-[0.2em] text-bn-forest-dark/50 uppercase mb-6">
            {t.home.identitySubtitle}
          </p>

          <p className="font-medium text-bn-forest-dark mb-3">{t.home.identityLegal}</p>
          <p className="text-bn-forest-dark/70 leading-relaxed">{t.home.identityText}</p>
          <p className="text-bn-forest-dark/70 leading-relaxed mt-4">{t.home.identityActivity}</p>
          <p className="italic text-sm text-bn-forest-dark/50 mt-4">{t.home.identityNote}</p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-bn-forest-dark bg-bn-gold/15 px-3 py-1.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="9" r="5" />
                <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.product.badgeCertified}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-bn-forest-dark bg-bn-gold/15 px-3 py-1.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="9" r="5" />
                <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.product.badgePure}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-bn-forest-dark bg-bn-gold/15 px-3 py-1.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="9" r="5" />
                <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.product.badgeOrigin}
            </span>
          </div>
        </Reveal>
      </section>

      {/* Stats bar */}
      <section className="bg-gradient-to-br from-bn-forest-dark via-bn-forest-dark to-bn-forest px-6 py-16">
        <Reveal className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <p className="font-serif text-4xl sm:text-5xl text-bn-gold">{t.home.statProductsValue}</p>
            <p className="text-xs tracking-[0.15em] text-bn-cream/70 uppercase mt-2">
              {t.home.statProductsLabel}
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl sm:text-5xl text-bn-gold">{t.home.statCertValue}</p>
            <p className="text-xs tracking-[0.15em] text-bn-cream/70 uppercase mt-2">
              {t.home.statCertLabel}
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl sm:text-5xl text-bn-gold">{t.home.statPurityValue}</p>
            <p className="text-xs tracking-[0.15em] text-bn-cream/70 uppercase mt-2">
              {t.home.statPurityLabel}
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl sm:text-5xl text-bn-gold">{t.home.statDeliveryValue}</p>
            <p className="text-xs tracking-[0.15em] text-bn-cream/70 uppercase mt-2">
              {t.home.statDeliveryLabel}
            </p>
          </div>
        </Reveal>
      </section>

      {/* We Are Producers */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <p className="text-bn-gold text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3">
            {t.home.sourcingEyebrow}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-bn-forest-dark mb-6">
            {t.home.sourcingTitle}
          </h2>
          <p className="text-bn-forest-dark/70 leading-relaxed text-lg">
            {t.home.sourcingText}
          </p>

          <div className="flex gap-8 mt-10">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-14 h-14 rounded-xl bg-bn-forest-dark/5 flex items-center justify-center text-bn-forest-dark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm text-bn-forest-dark/70">{t.home.sourcingFeatureQuality}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-14 h-14 rounded-xl bg-bn-forest-dark/5 flex items-center justify-center text-bn-forest-dark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z" />
                </svg>
              </div>
              <span className="text-sm text-bn-forest-dark/70">{t.home.sourcingFeatureExport}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-14 h-14 rounded-xl bg-bn-forest-dark/5 flex items-center justify-center text-bn-forest-dark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="9" r="5" />
                  <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm text-bn-forest-dark/70">{t.home.sourcingFeatureCertified}</span>
            </div>
          </div>

          <Link
            href={`/${locale}/a-propos`}
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-bn-forest-dark text-bn-cream font-medium rounded hover:bg-bn-forest transition-colors"
          >
            {t.home.sourcingReadMore}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal delay={150} className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={producersImage || "/images/producers-hero.jpg"}
            alt={t.home.sourcingTitle}
            className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-72 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-bn-gold/20 flex items-center justify-center text-bn-gold shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="9" r="5" />
                <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-serif text-bn-forest-dark leading-tight">
                {t.home.sourcingBadgeTitle}
              </p>
              <p className="text-[10px] tracking-[0.15em] text-bn-forest-dark/60 uppercase">
                {t.home.sourcingBadgeSubtitle}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Quick links to catalog sections */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-bn-forest-dark gold-underline mx-auto w-fit mb-6">
            {t.categories.title}
          </h2>
          <p className="text-bn-forest-dark/70 leading-relaxed mb-3">{t.categories.intro}</p>
          <p className="text-bn-forest-dark/70 leading-relaxed mb-3">{t.categories.description}</p>
          <p className="text-bn-forest-dark/70 leading-relaxed">{t.categories.closing}</p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCategories.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 80}>
              <Link
                href={`/${locale}/produits#${cat.key}`}
                className="group rounded-lg overflow-hidden border border-bn-forest/10 hover:shadow-lg transition-shadow block"
              >
                {cat.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cat.image}
                    alt={typedLocale === "fr" ? cat.labelFr : cat.labelEn}
                    className="h-40 w-full object-cover"
                  />
                ) : (
                  <PlaceholderMedia label={typedLocale === "fr" ? cat.labelFr : cat.labelEn} className="h-40" />
                )}
                <div className="p-4 bg-white">
                  <h3 className="font-serif text-lg text-bn-forest-dark group-hover:text-bn-forest transition-colors">
                    {typedLocale === "fr" ? cat.labelFr : cat.labelEn}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quality & Analysis */}
      <section className="bg-bn-forest-dark">
        <Reveal className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {qualityImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qualityImage}
              alt="Laboratoire — France"
              className="h-64 w-full object-cover rounded-lg order-2 md:order-1"
            />
          ) : (
            <PlaceholderMedia label="Laboratoire — France" className="h-64 rounded-lg order-2 md:order-1" />
          )}
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-3xl text-bn-cream gold-underline">
              {t.home.qualityTitle}
            </h2>
            <p className="mt-6 text-bn-cream/80 leading-relaxed">
              {t.home.qualityText}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Quality Assurance & Vision */}
      <section className="bg-bn-cream px-6 py-20">
        <Reveal className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-serif text-3xl text-bn-forest-dark mb-4">
              {t.home.assuranceTitle}
            </h2>
            <p className="text-bn-forest-dark/70 leading-relaxed">{t.home.assuranceText}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-bn-forest-dark mb-4">
              {t.home.visionTitle}
            </h2>
            <p className="text-bn-forest-dark/70 leading-relaxed">{t.home.visionText}</p>
          </div>
        </Reveal>
      </section>

      {/* Gallery: Field to Bottle */}
      {galleryItems.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal className="text-center mb-12">
            <p className="text-bn-gold text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3">
              {t.home.galleryEyebrow}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-bn-forest-dark mb-3">
              {t.home.galleryTitle}
            </h2>
            <p className="text-bn-forest-dark/70">{t.home.gallerySubtitle}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <Reveal
                key={item.id}
                delay={(i % 6) * 80}
                className={`relative rounded-lg overflow-hidden group ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 h-64 lg:h-full" : "h-64"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.url}
                  alt={item.caption || ""}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.caption && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-bn-cream text-sm font-medium">
                      {item.caption}
                    </p>
                  </>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Quote / CTA */}
      <section className="bg-bn-forest-dark px-6 py-20">
        <Reveal className="max-w-3xl mx-auto text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bn-gold mx-auto mb-6">
            <path d="M7 11c0-2.5 1.5-4 3.5-4M7 11c0 2 1 3.5 2.5 4M7 11H5.5C4.5 11 4 10.5 4 9.5V8c0-1.5 1-2.5 2.5-2.5M17 11c0-2.5 1.5-4 3.5-4M17 11c0 2 1 3.5 2.5 4M17 11h-1.5c-1 0-1.5-.5-1.5-1.5V8c0-1.5 1-2.5 2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-serif text-2xl sm:text-3xl text-bn-cream italic leading-relaxed mb-6">
            {t.home.quoteText}
          </p>
          <p className="text-bn-gold text-xs sm:text-sm tracking-[0.2em] uppercase mb-10">
            {t.home.quoteAttribution}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-bn-gold text-bn-forest-dark font-medium rounded hover:bg-bn-cream transition-colors"
            >
              {t.services.cta}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={`/${locale}/produits`}
              className="inline-flex items-center gap-2 px-8 py-3 border border-bn-cream/40 text-bn-cream font-medium rounded hover:border-bn-gold hover:text-bn-gold transition-colors"
            >
              {t.home.viewProducts}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
