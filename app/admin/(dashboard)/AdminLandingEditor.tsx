"use client";

import { useState } from "react";

interface LandingMediaItem {
  id: number;
  side: "left" | "right";
  url: string;
  caption_fr: string | null;
  caption_en: string | null;
  sort_order: number;
}

function ImageCard({
  item,
  onRemove,
  onCaptionChange,
  onMove,
  canMoveLeft,
  canMoveRight,
}: {
  item: LandingMediaItem;
  onRemove: () => void;
  onCaptionChange: (captionFr: string, captionEn: string) => void;
  onMove: (direction: -1 | 1) => void;
  canMoveLeft: boolean;
  canMoveRight: boolean;
}) {
  const [captionFr, setCaptionFr] = useState(item.caption_fr || "");
  const [captionEn, setCaptionEn] = useState(item.caption_en || "");
  const [saving, setSaving] = useState(false);

  async function saveCaptions() {
    setSaving(true);
    try {
      await fetch("/api/admin/landing-media", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id, captionFr, captionEn }),
      });
      onCaptionChange(captionFr, captionEn);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-bn-forest-dark/5 rounded-lg p-4 flex flex-col gap-3">
      <div className="relative aspect-video rounded overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.url} alt="" className="w-full h-full object-cover" />
        <button
          type="button"
          onClick={onRemove}
          className="absolute top-1.5 right-1.5 bg-black/60 text-white text-xs px-2 py-1 rounded"
        >
          Retirer
        </button>
      </div>
      <div className="flex items-center justify-between text-xs text-bn-forest-dark/50">
        <button
          type="button"
          disabled={!canMoveLeft}
          onClick={() => onMove(-1)}
          className="disabled:opacity-30"
        >
          ← Précédente
        </button>
        <button
          type="button"
          disabled={!canMoveRight}
          onClick={() => onMove(1)}
          className="disabled:opacity-30"
        >
          Suivante →
        </button>
      </div>
      <input
        value={captionFr}
        onChange={(e) => setCaptionFr(e.target.value)}
        placeholder="Titre (FR)"
        className="w-full border border-bn-forest-dark/20 rounded px-2 py-1.5 text-xs"
      />
      <input
        value={captionEn}
        onChange={(e) => setCaptionEn(e.target.value)}
        placeholder="Title (EN)"
        className="w-full border border-bn-forest-dark/20 rounded px-2 py-1.5 text-xs"
      />
      <button
        type="button"
        onClick={saveCaptions}
        disabled={saving}
        className="text-xs bg-bn-gold text-bn-forest-dark font-medium py-1.5 rounded disabled:opacity-60"
      >
        {saving ? "..." : "Enregistrer le titre"}
      </button>
    </div>
  );
}

function SideColumn({
  side,
  title,
  items,
  onItemsChange,
}: {
  side: "left" | "right";
  title: string;
  items: LandingMediaItem[];
  onItemsChange: (items: LandingMediaItem[]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleUpload(file: File) {
    setUploading(true);
    setMessage(null);
    try {
      const fd = new FormData();
      fd.set("side", side);
      fd.set("file", file);
      const res = await fetch("/api/admin/landing-media", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as {
        item?: LandingMediaItem;
        error?: string;
      };
      if (!res.ok || !data.item) throw new Error(data.error || "Erreur");
      onItemsChange([...items, data.item]);
      setMessage("Ajoutée ✓");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Erreur");
    } finally {
      setUploading(false);
    }
  }

  async function handleRemove(id: number) {
    await fetch(`/api/admin/landing-media?id=${id}`, { method: "DELETE" });
    onItemsChange(items.filter((i) => i.id !== id));
  }

  function handleMove(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    onItemsChange(next);
    next.forEach((item, i) => {
      fetch("/api/admin/landing-media", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id, sortOrder: i }),
      });
    });
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
      <h2 className="font-serif text-xl text-bn-forest-dark">{title}</h2>
      <p className="text-xs text-bn-forest-dark/50">
        Plusieurs images possibles — elles défilent automatiquement en diaporama.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <ImageCard
            key={item.id}
            item={item}
            onRemove={() => handleRemove(item.id)}
            onCaptionChange={(captionFr, captionEn) =>
              onItemsChange(
                items.map((it) =>
                  it.id === item.id ? { ...it, caption_fr: captionFr, caption_en: captionEn } : it
                )
              )
            }
            onMove={(direction) => handleMove(i, direction)}
            canMoveLeft={i > 0}
            canMoveRight={i < items.length - 1}
          />
        ))}
      </div>

      <label
        htmlFor={`landing-upload-${side}`}
        className="flex flex-col items-center justify-center gap-1 border-2 border-dashed border-bn-forest-dark/25 rounded-lg py-6 cursor-pointer hover:border-bn-gold hover:bg-bn-gold/5 transition-colors"
      >
        <span className="text-sm text-bn-forest-dark/70 font-medium">
          {uploading ? "Envoi en cours..." : "Ajouter une image"}
        </span>
        <input
          id={`landing-upload-${side}`}
          type="file"
          accept="image/*"
          className="hidden"
          disabled={uploading}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleUpload(file);
            e.target.value = "";
          }}
        />
      </label>

      {message && <p className="text-sm text-bn-forest-dark/70">{message}</p>}
    </div>
  );
}

export default function AdminLandingEditor({
  initialItems,
}: {
  initialItems: LandingMediaItem[];
}) {
  const [items, setItems] = useState(initialItems);
  const leftItems = items.filter((i) => i.side === "left").sort((a, b) => a.sort_order - b.sort_order);
  const rightItems = items.filter((i) => i.side === "right").sort((a, b) => a.sort_order - b.sort_order);

  function updateSide(side: "left" | "right", updated: LandingMediaItem[]) {
    setItems([...items.filter((i) => i.side !== side), ...updated]);
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <h1 className="font-serif text-2xl text-bn-forest-dark">Page d&apos;Immersion (Landing)</h1>
        <p className="text-bn-forest-dark/60 text-sm mt-1">
          Gérez les visuels gauche/droite affichés à l&apos;arrivée sur le site. Chaque côté peut
          contenir plusieurs images en diaporama.
        </p>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        <SideColumn
          side="left"
          title="Côté Gauche / Left Side"
          items={leftItems}
          onItemsChange={(updated) => updateSide("left", updated)}
        />
        <SideColumn
          side="right"
          title="Côté Droit / Right Side"
          items={rightItems}
          onItemsChange={(updated) => updateSide("right", updated)}
        />
      </main>
    </>
  );
}
