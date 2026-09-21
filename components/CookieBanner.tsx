"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";

const STORAGE_KEY = "bn_cookie_consent";
const REOPEN_EVENT = "bn-open-cookie-preferences";

export function openCookiePreferences() {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}

export default function CookieBanner({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Defer out of the effect body so the consent check does not trigger a
    // cascading render (react-hooks/set-state-in-effect).
    const raf = requestAnimationFrame(() => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
      } catch {
        setVisible(true);
      }
    });

    function handleReopen() {
      setShowPreferences(true);
    }
    window.addEventListener(REOPEN_EVENT, handleReopen);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener(REOPEN_EVENT, handleReopen);
    };
  }, []);

  function respond(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
    setShowPreferences(false);
  }

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-bn-forest-dark text-bn-cream border-t border-bn-gold/30 px-6 py-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between text-sm">
            <div className="flex items-center gap-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-bn-gold shrink-0"
              >
                <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c-.6 1.6.4 3.4 2 3.9M9 7a1 1 0 100 2 1 1 0 000-2zm7 3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM9.5 13a1 1 0 100 2 1 1 0 000-2zM14 15a.8.8 0 100 1.6.8.8 0 000-1.6z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-bn-cream/85">{t.footer.cookiesText}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href={`/${locale}/politique-de-confidentialite`}
                className="text-bn-cream/60 underline underline-offset-2 hover:text-bn-gold transition-colors"
              >
                {t.footer.cookiesConfidentiality}
              </Link>
              <button
                onClick={() => setShowPreferences(true)}
                className="text-bn-cream/60 underline underline-offset-2 hover:text-bn-gold transition-colors"
              >
                {t.footer.cookiesPreferences}
              </button>
              <button
                onClick={() => respond("declined")}
                className="px-4 py-2 rounded border border-bn-cream/30 hover:border-bn-gold transition-colors"
              >
                {t.footer.cookiesDecline}
              </button>
              <button
                onClick={() => respond("accepted")}
                className="px-4 py-2 rounded bg-bn-gold text-bn-forest-dark font-medium hover:bg-bn-gold/90 transition-colors"
              >
                {t.footer.cookiesAccept}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowPreferences(false)}
        >
          <div
            className="bg-bn-cream text-bn-forest-dark max-w-md w-full rounded-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-serif text-xl mb-3 flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-bn-gold shrink-0"
              >
                <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c-.6 1.6.4 3.4 2 3.9M9 7a1 1 0 100 2 1 1 0 000-2zm7 3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM9.5 13a1 1 0 100 2 1 1 0 000-2zM14 15a.8.8 0 100 1.6.8.8 0 000-1.6z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t.footer.cookiesPreferencesTitle}
            </h2>
            <p className="text-sm text-bn-forest-dark/80 mb-6">{t.footer.cookiesPreferencesText}</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => respond("declined")}
                className="px-4 py-2 rounded border border-bn-forest-dark/20 text-sm hover:border-bn-gold transition-colors"
              >
                {t.footer.cookiesDecline}
              </button>
              <button
                onClick={() => respond("accepted")}
                className="px-4 py-2 rounded bg-bn-gold text-bn-forest-dark font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {t.footer.cookiesSave}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
