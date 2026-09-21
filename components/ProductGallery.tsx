"use client";

import { useEffect, useRef, useState } from "react";
import PlaceholderMedia from "@/components/PlaceholderMedia";

export default function ProductGallery({
  images,
  label,
}: {
  images: string[];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, paused]);

  function handleThumbnailClick(i: number) {
    setActive(i);
  }

  function parseSize(src: string): string | null {
    const match = src.toLowerCase().match(/(\d+(?:\.\d+)?)\s*(kg|kgs|g|ml|l)\b/);
    if (!match) return null;
    const unit = match[2];
    return `${match[1]} ${unit === "kgs" ? "Kgs" : unit === "kg" ? "Kg" : unit.toUpperCase()}`;
  }

  if (images.length === 0) {
    return <PlaceholderMedia label={label} className="h-80 sm:h-96 rounded-lg" />;
  }

  const activeSize = parseSize(images[active]);

  return (
    <div>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden"
      >
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src + i}
            src={src}
            alt={label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {activeSize && (
          <span className="absolute top-5 left-5 z-10 w-24 h-24 rounded-full bg-bn-gold text-bn-forest-dark font-serif font-bold flex items-center justify-center text-center text-xl shadow-lg ring-2 ring-bn-forest-dark/20">
            {activeSize}
          </span>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => handleThumbnailClick(i)}
              className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                i === active ? "border-bn-gold" : "border-transparent hover:border-bn-forest-dark/20"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${label} ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
