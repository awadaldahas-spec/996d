"use client";

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";
import { openCookiePreferences } from "./CookieBanner";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <footer className="bg-bn-forest-dark text-bn-cream/70 border-t border-bn-gold/20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-wide">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0 overflow-hidden">
            <Image
              src="/images/logo.jpeg"
              alt="Bostan Naturals"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/mentions-legales`}
            className="underline underline-offset-4 hover:text-bn-gold transition-colors"
          >
            Mentions Légales
          </Link>
          <Link
            href={`/${locale}/politique-de-confidentialite`}
            className="underline underline-offset-4 hover:text-bn-gold transition-colors"
          >
            Politique de Confidentialité
          </Link>
          <Link
            href={`/${locale}/politique-des-cookies`}
            className="underline underline-offset-4 hover:text-bn-gold transition-colors"
          >
            Politique des Cookies
          </Link>
          <button
            onClick={() => openCookiePreferences()}
            className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-bn-gold transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="shrink-0"
            >
              <path
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c-.6 1.6.4 3.4 2 3.9M9 7a1 1 0 100 2 1 1 0 000-2zm7 3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM9.5 13a1 1 0 100 2 1 1 0 000-2zM14 15a.8.8 0 100 1.6.8.8 0 000-1.6z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.footer.cookiesManage}
          </button>
          <span>© {new Date().getFullYear()} Bostan Naturals</span>
        </div>
      </div>

      <div className="border-t border-bn-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-xs tracking-wide text-bn-cream/80">
          © created by{" "}
          <a
            href="https://digitfans.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bn-gold underline underline-offset-4 hover:text-bn-cream transition-colors"
          >
            Digitfans
          </a>{" "}
          2026
        </div>
      </div>
    </footer>
  );
}
