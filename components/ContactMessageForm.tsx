"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/data/dictionary";

type Status = "idle" | "submitting" | "success" | "error";

const COUNTRIES = [
  "France", "Belgique", "Suisse", "Allemagne", "Espagne", "Italie", "Royaume-Uni",
  "Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Koweït", "Égypte", "Maroc",
  "États-Unis", "Canada", "Autre",
];

export default function ContactMessageForm({
  locale,
  labels,
}: {
  locale: Locale;
  labels: {
    formTitle: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    countryPlaceholder: string;
    products: string;
    productsPlaceholder: string;
    quantity: string;
    quantityPlaceholder: string;
    message: string;
    privacyNotice: string;
    privacyLink: string;
    submit: string;
    success: string;
    error: string;
  };
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          company: form.get("company"),
          email: form.get("email"),
          phone: form.get("phone"),
          country: form.get("country"),
          products: form.get("products"),
          quantity: form.get("quantity"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white border border-bn-forest/10 rounded-lg p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-bn-forest-dark mb-6">{labels.formTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
            {labels.name}
          </label>
          <input
            name="name"
            required
            className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
          />
        </div>

        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
            {labels.company}
          </label>
          <input
            name="company"
            required
            className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
              {labels.email}
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
            />
          </div>
          <div>
            <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
              {labels.phone}
            </label>
            <input
              name="phone"
              type="tel"
              className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
            {labels.country}
          </label>
          <select
            name="country"
            defaultValue=""
            className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
          >
            <option value="" disabled>
              {labels.countryPlaceholder}
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
            {labels.products}
          </label>
          <input
            name="products"
            placeholder={labels.productsPlaceholder}
            className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
          />
        </div>

        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
            {labels.quantity}
          </label>
          <input
            name="quantity"
            placeholder={labels.quantityPlaceholder}
            className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
          />
        </div>

        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
            {labels.message}
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
          />
        </div>

        <p className="text-xs text-bn-forest-dark/60">
          {labels.privacyNotice}{" "}
          <Link
            href={`/${locale}/politique-de-confidentialite`}
            className="text-bn-gold underline"
          >
            {labels.privacyLink}
          </Link>
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full px-8 py-3 bg-bn-forest-dark text-bn-cream font-medium rounded hover:bg-bn-forest transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "..." : labels.submit}
        </button>
        {status === "success" && <p className="text-green-700 text-sm">{labels.success}</p>}
        {status === "error" && <p className="text-red-600 text-sm">{labels.error}</p>}
      </form>
    </div>
  );
}
