"use client";

import { useState } from "react";
import type { SiteMediaItem } from "@/lib/siteMedia";

const sections: { key: string; title: string; accept: string; hint: string }[] = [
  {
    key: "home_hero_video",
    title: "Hero — Accueil (Vidéo)",
    accept: "video/*",
    hint: "Vidéo affichée à droite du Hero sur la page d'accueil (sans son).",
  },
  {
    key: "home_producers_image",
    title: "Notre rôle : votre filtre qualité — Image",
    accept: "image/*",
    hint: "Image affichée dans la section « Notre rôle : votre filtre qualité » avec le badge de sélection.",
  },
  {
    key: "home_quality_image",
    title: "Contrôle & Analyse en France — Image",
    accept: "image/*",
    hint: "Image du laboratoire dans la section qualité (fond vert foncé).",
  },
  {
    key: "about_hero_image",
    title: "À Propos — Image d'en-tête (Hero)",
    accept: "image/*",
    hint: "Image plein écran en haut de la page « À Propos ».",
  },
  {
    key: "about_producers_image",
    title: "À Propos — Image « Notre rôle : votre filtre qualité »",
    accept: "image/*",
    hint: "Image du site/installation, à côté du texte « Notre rôle : votre filtre qualité ».",
  },
  {
    key: "about_secondary_image",
    title: "À Propos — Image secondaire (Vision)",
    accept: "image/*",
    hint: "Image thématique affichée avant la galerie photo, sous la section Vision.",
  },
];

function MediaCard({
  section,
  item,
  onSaved,
}: {
  section: (typeof sections)[number];
  item: SiteMediaItem | undefined;
  onSaved: (url: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(item?.url || null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const isVideo = section.accept.startsWith("video");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    setFile(f);
    if (f) setPreview(URL.createObjectURL(f));
  }

  async function handleSave() {
    if (!file) return;
    setSaving(true);
    setMessage(null);
    try {
      const fd = new FormData();
      fd.set("key", section.key);
      fd.set("file", file);
      const res = await fetch("/api/admin/site-media", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok) throw new Error(data.error || "Erreur");
      setMessage("Enregistré ✓");
      if (data.url) onSaved(data.url);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
      <div>
        <h2 className="font-serif text-lg text-bn-forest-dark">{section.title}</h2>
        <p className="text-xs text-bn-forest-dark/50 mt-1">{section.hint}</p>
      </div>

      <div className="aspect-video bg-bn-forest-dark/10 rounded overflow-hidden flex items-center justify-center">
        {preview ? (
          isVideo ? (
            <video src={preview} className="w-full h-full object-cover" muted autoPlay loop playsInline />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="" className="w-full h-full object-cover" />
          )
        ) : (
          <span className="text-bn-forest-dark/40 text-sm">Aucun fichier</span>
        )}
      </div>

      <input type="file" accept={section.accept} onChange={handleFileChange} />

      <button
        onClick={handleSave}
        disabled={saving || !file}
        className="bg-bn-gold text-bn-forest-dark font-medium py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {saving ? "..." : "Enregistrer / Save"}
      </button>

      {message && <p className="text-sm text-bn-forest-dark/70">{message}</p>}
    </div>
  );
}

export default function SiteMediaEditor({
  initialMedia,
}: {
  initialMedia: Record<string, SiteMediaItem>;
}) {
  const [media, setMedia] = useState(initialMedia);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {sections.map((section) => (
        <MediaCard
          key={section.key}
          section={section}
          item={media[section.key]}
          onSaved={(url) =>
            setMedia((prev) => ({
              ...prev,
              [section.key]: {
                key: section.key,
                mediaType: section.accept.startsWith("video") ? "video" : "image",
                url,
                caption: prev[section.key]?.caption ?? null,
              },
            }))
          }
        />
      ))}
    </div>
  );
}
