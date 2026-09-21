import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";
import { getSiteMedia, SITE_MEDIA_KEYS } from "@/lib/siteMedia";
import { getGalleryImages } from "@/lib/gallery";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import Reveal from "@/components/Reveal";

export const revalidate = 0;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const t = getDictionary(typedLocale);
  const [siteMedia, galleryItems] = await Promise.all([getSiteMedia(), getGalleryImages()]);

  const heroImage = siteMedia[SITE_MEDIA_KEYS.aboutHeroImage]?.url;
  const producersImage = siteMedia[SITE_MEDIA_KEYS.aboutProducersImage]?.url;
  const secondaryImage = siteMedia[SITE_MEDIA_KEYS.aboutSecondaryImage]?.url;

  const lines = [
    { eyebrow: t.about.lineEyebrow1, title: t.about.lineTitle1, text: t.about.lineText1 },
    { eyebrow: t.about.lineEyebrow2, title: t.about.lineTitle2, text: t.about.lineText2 },
    { eyebrow: t.about.lineEyebrow3, title: t.about.lineTitle3, text: t.about.lineText3 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        {heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={heroImage} alt={t.about.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <PlaceholderMedia label="Bostan Naturals — Notre Histoire" className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <h1 className="font-serif text-3xl sm:text-5xl text-bn-cream">{t.about.title}</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <Reveal>
          <p className="text-bn-forest-dark/85 leading-relaxed text-lg">{t.about.intro}</p>
        </Reveal>
      </section>

      {/* We Are Producers */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl text-bn-forest-dark mb-6 gold-underline">
            {t.about.producersTitle}
          </h2>
          <p className="text-bn-forest-dark/70 leading-relaxed text-lg">{t.about.producersText}</p>
        </Reveal>
        <Reveal delay={150} className="relative">
          {producersImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={producersImage}
              alt={t.about.producersTitle}
              className="w-full h-64 sm:h-80 md:h-[380px] object-cover rounded-2xl shadow-xl"
            />
          ) : (
            <PlaceholderMedia label={t.about.producersTitle} className="h-64 sm:h-80 md:h-[380px] rounded-2xl" />
          )}
          <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-64 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-bn-gold/20 flex items-center justify-center text-bn-gold shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="9" r="5" />
                <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-serif text-bn-forest-dark leading-tight text-sm">
                {t.home.sourcingBadgeTitle}
              </p>
              <p className="text-[10px] tracking-[0.15em] text-bn-forest-dark/60 uppercase">
                {t.home.sourcingBadgeSubtitle}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Story / Philosophy / Terroir */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <Reveal>
          <h2 className="font-serif text-2xl sm:text-3xl text-bn-forest-dark mb-8 text-center">
            {t.about.storyTitle}
          </h2>
          <div className="space-y-10">
          <div>
            <h3 className="font-serif text-xl text-bn-forest-dark gold-underline mb-4">
              {t.about.philosophyTitle}
            </h3>
            <p className="text-bn-forest-dark/80 leading-relaxed">{t.about.philosophyText}</p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-bn-forest-dark gold-underline mb-4">
              {t.about.terroirTitle}
            </h3>
            <p className="text-bn-forest-dark/80 leading-relaxed">{t.about.terroirText}</p>
          </div>
          </div>
        </Reveal>
      </section>

      {/* Three Production Lines */}
      <section className="bg-bn-cream/60 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-bn-forest-dark mb-3">
              {t.about.linesTitle}
            </h2>
            <p className="text-bn-forest-dark/70">{t.about.linesSubtitle}</p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {lines.map((line, i) => (
              <Reveal key={line.title} delay={i * 100} className="bg-white rounded-lg p-6 border border-bn-forest/10">
                <p className="text-bn-gold font-serif text-3xl mb-3">{line.eyebrow}</p>
                <h3 className="font-serif text-lg text-bn-forest-dark mb-3">{line.title}</h3>
                <p className="text-bn-forest-dark/70 text-sm leading-relaxed">{line.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality / Rigor */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <Reveal>
          <h3 className="font-serif text-xl text-bn-forest-dark gold-underline mb-4">
            {t.about.rigorTitle}
          </h3>
          <p className="text-bn-forest-dark/80 leading-relaxed mb-4">{t.about.rigorIntro}</p>
          <ul className="space-y-3">
            {t.about.rigorPoints.map((point, i) => (
              <li key={i} className="flex gap-3 text-bn-forest-dark/80 leading-relaxed">
                <span className="text-bn-gold shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Vision */}
      {t.about.visionText && (
        <section className="bg-bn-forest-dark px-6 py-16">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-bn-cream gold-underline mx-auto w-fit mb-6">
              {t.about.visionTitle}
            </h2>
            <p className="text-bn-cream/80 leading-relaxed">{t.about.visionText}</p>
          </Reveal>
        </section>
      )}

      {/* Secondary image */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <Reveal>
          {secondaryImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={secondaryImage} alt={t.about.title} className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl" />
          ) : (
            <PlaceholderMedia label={t.about.title} className="h-64 sm:h-80 rounded-2xl" />
          )}
        </Reveal>
      </section>

      {/* Gallery */}
      {galleryItems.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <Reveal className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-bn-forest-dark mb-3">
              {t.about.galleryTitle}
            </h2>
            <p className="text-bn-forest-dark/70">{t.about.gallerySubtitle}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <Reveal key={item.id} delay={(i % 4) * 80} className="relative rounded-lg overflow-hidden group h-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.url}
                  alt={item.caption || ""}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.caption && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <p className="absolute bottom-2 left-2 right-2 text-bn-cream text-xs font-medium">
                      {item.caption}
                    </p>
                  </>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Closing */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <Reveal>
          <p className="text-center font-serif text-xl text-bn-forest-dark italic">{t.about.closing}</p>
        </Reveal>
      </section>
    </div>
  );
}
