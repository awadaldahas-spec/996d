import Link from "next/link";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";
import Reveal from "@/components/Reveal";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const t = getDictionary(typedLocale);

  const services = [
    { eyebrow: t.services.service1Eyebrow, title: t.services.service1Title, text: t.services.service1Text },
    { eyebrow: t.services.service2Eyebrow, title: t.services.service2Title, text: t.services.service2Text },
    { eyebrow: t.services.service3Eyebrow, title: t.services.service3Title, text: t.services.service3Text },
    { eyebrow: t.services.service4Eyebrow, title: t.services.service4Title, text: t.services.service4Text },
  ];

  return (
    <div className="px-6 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl sm:text-5xl text-bn-forest-dark gold-underline mx-auto w-fit mb-6">
          {t.services.title}
        </h1>
        <p className="text-bn-forest-dark/70 text-lg">{t.services.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 mb-16">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 100} className="bg-white rounded-lg p-8 border border-bn-forest/10">
            <p className="text-bn-gold font-serif text-4xl mb-4">{service.eyebrow}</p>
            <h2 className="font-serif text-xl text-bn-forest-dark mb-3">{service.title}</h2>
            <p className="text-bn-forest-dark/70 leading-relaxed">{service.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="text-center">
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 px-8 py-3 bg-bn-gold text-bn-forest-dark font-medium rounded hover:bg-bn-forest-dark hover:text-bn-cream transition-colors"
        >
          {t.services.cta}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
