"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";

interface MediaEntry {
  imageUrl: string;
  captionFr: string | null;
  captionEn: string | null;
}

interface ImmersiveLandingProps {
  locale: Locale;
  media: {
    left: MediaEntry[];
    right: MediaEntry[];
  };
}

const SLIDE_INTERVAL_MS = 3000;

function Panel({
  side,
  items,
  locale,
  hovered,
  onHover,
  onLeave,
  onClick,
}: {
  side: "left" | "right";
  items: MediaEntry[];
  locale: Locale;
  hovered: "left" | "right" | null;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % items.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [items.length]);

  const fallbackCaption =
    side === "left"
      ? locale === "fr"
        ? "Nos Fleurs d'Origine"
        : "Our Source Flowers"
      : locale === "fr"
        ? "Huiles Essentielles, Absolues & Concrètes"
        : "Essential Oils, Absolutes & Concretes";

  const current = items[slide];
  const caption = (locale === "fr" ? current?.captionFr : current?.captionEn) || fallbackCaption;

  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative flex-1 flex flex-col items-center justify-end pb-12 md:pb-20 transition-all duration-700 ease-out text-center overflow-hidden"
      style={{
        flexBasis: hovered === side ? "65%" : hovered ? "35%" : "50%",
        backgroundColor: "#1c2b1c",
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.imageUrl + i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === slide ? 1 : 0,
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
      <div className="relative z-10 px-6 max-w-xs sm:max-w-sm mx-auto">
        <p className="font-serif text-base sm:text-lg text-bn-cream tracking-wide leading-snug">
          {caption}
        </p>
      </div>
      {items.length > 1 && (
        <div className="relative z-10 flex items-center gap-1.5 mt-3">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === slide ? "w-5 bg-bn-gold" : "w-1.5 bg-bn-cream/40"
              }`}
            />
          ))}
        </div>
      )}
    </button>
  );
}

export default function ImmersiveLanding({ locale, media }: ImmersiveLandingProps) {
  const t = getDictionary(locale);
  const router = useRouter();
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const navigated = useRef(false);
  const targetHref = `/${locale}/produits`;

  useEffect(() => {
    router.prefetch(targetHref);
  }, [router, targetHref]);

  function enterCatalog() {
    if (navigated.current) return;
    navigated.current = true;
    router.push(targetHref);
  }

  return (
    <div className="fixed inset-0 flex flex-col md:flex-row overflow-hidden">
      <Panel
        side="left"
        items={media.left}
        locale={locale}
        hovered={hovered}
        onHover={() => setHovered("left")}
        onLeave={() => setHovered(null)}
        onClick={enterCatalog}
      />

      <div className="hidden md:block w-px bg-bn-gold/30" />
      <div className="md:hidden h-px bg-bn-gold/30" />

      <Panel
        side="right"
        items={media.right}
        locale={locale}
        hovered={hovered}
        onHover={() => setHovered("right")}
        onLeave={() => setHovered(null)}
        onClick={enterCatalog}
      />

      <div className="absolute top-6 inset-x-0 flex justify-center pointer-events-none">
        <p className="font-serif text-bn-cream/90 text-lg tracking-[0.3em] uppercase bg-bn-forest-dark/40 px-4 py-1 rounded-full backdrop-blur">
          Bostan Naturals
        </p>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center pointer-events-none">
        <span className="text-bn-cream/60 text-xs tracking-[0.2em] uppercase animate-pulse">
          {t.landing.enter} →
        </span>
      </div>
    </div>
  );
}
