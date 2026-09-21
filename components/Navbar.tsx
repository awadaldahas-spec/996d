"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}/home`, label: t.nav.home },
    { href: `/${locale}/produits`, label: t.nav.products },
    { href: `/${locale}/a-propos`, label: t.nav.about },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-bn-forest-dark border-b border-bn-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between gap-2">
        <Link
          href={`/${locale}/home`}
          className="flex items-center gap-4 min-w-0"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shrink-0 overflow-hidden">
            <Image
              src="/images/logo.jpeg"
              alt="Bostan Naturals"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </span>
          <span className="font-serif text-2xl tracking-wide text-bn-cream hidden sm:inline">
            BOSTAN <span className="text-bn-gold">NATURALS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-bn-cream/85">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-bn-gold transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-bn-cream hover:text-bn-gold transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-bn-gold/20 bg-bn-forest-dark px-6 py-4 flex flex-col gap-4 text-bn-cream/85">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base tracking-wide hover:text-bn-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
