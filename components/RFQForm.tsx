"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";

type Status = "idle" | "submitting" | "success" | "error";

const COUNTRIES = [
  "France", "Belgique", "Suisse", "Allemagne", "Espagne", "Italie", "Royaume-Uni",
  "Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Koweït", "Égypte", "Maroc",
  "États-Unis", "Canada", "Autre",
];

export default function RFQForm({
  locale,
  productSku,
  productName,
}: {
  locale: Locale;
  productSku: string;
  productName: string;
}) {
  const t = getDictionary(locale);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = new FormData(e.currentTarget);
    const payload = {
      productSku,
      productName,
      requestType: form.get("requestType"),
      contactName: form.get("contactName"),
      companyName: form.get("companyName"),
      siret: form.get("siret"),
      quantity: form.get("quantity"),
      country: form.get("country"),
      email: form.get("email"),
      message: form.get("message"),
      locale,
    };

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      <h2 className="font-serif text-2xl sm:text-3xl text-bn-forest-dark mb-2">
        {t.rfq.titleFor} {productName}
      </h2>
      <p className="text-bn-forest-dark/60 text-sm mb-8">{t.rfq.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
            {t.rfq.requestType}
          </label>
          <select
            name="requestType"
            required
            defaultValue=""
            className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
          >
            <option value="" disabled>
              {t.rfq.requestType}
            </option>
            <option value="sample">{t.rfq.requestTypeSample}</option>
            <option value="quote">{t.rfq.requestTypeQuote}</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field name="contactName" label={t.rfq.contactName} />
          <Field name="companyName" label={t.rfq.companyName} required />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field name="siret" label={t.rfq.siret} />
          <Field name="quantity" label={t.rfq.quantity} placeholder={t.rfq.quantityPlaceholder} />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
              {t.rfq.country}
            </label>
            <select
              name="country"
              className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
            >
              <option value="">{t.rfq.countryPlaceholder}</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <Field name="email" label={t.rfq.email} type="email" required />
        </div>

        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
            {t.rfq.message}
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
          />
        </div>

        <p className="text-xs text-bn-forest-dark/60">
          {t.rfq.privacyNotice}{" "}
          <Link href={`/${locale}/politique-de-confidentialite`} className="text-bn-gold underline">
            {t.rfq.privacyLink}
          </Link>
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full px-8 py-3 bg-bn-forest-dark text-bn-cream font-medium rounded hover:bg-bn-forest transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "..." : t.rfq.submit}
        </button>

        {status === "success" && (
          <p className="text-green-700 text-sm">{t.rfq.success}</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">{t.rfq.error}</p>
        )}
      </form>
    </div>
  );
}

function Field({
  name,
  label,
  required,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-bn-forest/20 rounded px-3 py-2.5 bg-white focus:outline-none focus:border-bn-gold"
      />
    </div>
  );
}
