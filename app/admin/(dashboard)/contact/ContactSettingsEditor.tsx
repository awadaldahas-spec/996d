"use client";

import { useState } from "react";

const fields: { key: string; label: string; hint?: string; type?: "input" | "textarea" }[] = [
  { key: "contact_office_title", label: "Titre du bloc (ex: Siège Social)" },
  { key: "contact_address", label: "Adresse complète", type: "textarea" },
  { key: "contact_cr_number", label: "Numéro d'enregistrement (CR / SIRET)" },
  { key: "contact_email", label: "Email de contact" },
  { key: "contact_phone", label: "Téléphone (ou texte, ex: Available on request)" },
  {
    key: "contact_map_embed_url",
    label: "URL d'intégration Google Maps (embed src)",
    hint: "Collez l'URL depuis Google Maps → Partager → Intégrer une carte → copier uniquement la valeur src=\"...\".",
  },
  { key: "contact_social_note", label: "Texte de la section Réseaux Sociaux" },
];

export default function ContactSettingsEditor({
  initialValues,
}: {
  initialValues: Record<string, string>;
}) {
  const [values, setValues] = useState(initialValues);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function set(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/site-settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Erreur");
      setMessage("Enregistré ✓");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-white border border-bn-forest/10 rounded-lg p-6 space-y-5 max-w-2xl">
      {fields.map((field) => (
        <div key={field.key}>
          <label className="block text-xs font-medium tracking-wide uppercase text-bn-forest-dark/60 mb-1.5">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              value={values[field.key] || ""}
              onChange={(e) => set(field.key, e.target.value)}
              rows={3}
              className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm"
            />
          ) : (
            <input
              value={values[field.key] || ""}
              onChange={(e) => set(field.key, e.target.value)}
              className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm"
            />
          )}
          {field.hint && <p className="text-xs text-bn-forest-dark/40 mt-1">{field.hint}</p>}
        </div>
      ))}

      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-bn-gold text-bn-forest-dark font-medium px-6 py-2.5 rounded text-sm disabled:opacity-50"
      >
        {saving ? "Enregistrement..." : "Enregistrer"}
      </button>

      {message && <p className="text-sm text-bn-forest-dark/70">{message}</p>}
    </div>
  );
}
