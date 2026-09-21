"use client";

import { useState } from "react";
import type { GalleryImage } from "@/lib/gallery";

function ImageCard({
  image,
  onDeleted,
  onCaptionSaved,
}: {
  image: GalleryImage;
  onDeleted: (id: number) => void;
  onCaptionSaved: (id: number, caption: string) => void;
}) {
  const [caption, setCaption] = useState(image.caption || "");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSaveCaption() {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/gallery", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: image.id, caption }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Erreur");
      setMessage("Enregistré ✓");
      onCaptionSaved(image.id, caption);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Supprimer cette photo de la galerie ?")) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/gallery?id=${image.id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        alert(data.error || "Erreur");
        setDeleting(false);
        return;
      }
      onDeleted(image.id);
    } catch {
      setDeleting(false);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3">
      <div className="aspect-video bg-bn-forest-dark/10 rounded overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.url} alt={image.caption || ""} className="w-full h-full object-cover" />
      </div>

      <input
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Légende (français)"
        className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-bn-gold"
      />

      <div className="flex gap-2">
        <button
          onClick={handleSaveCaption}
          disabled={saving}
          className="flex-1 bg-bn-gold text-bn-forest-dark font-medium py-1.5 rounded text-sm hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "..." : "Enregistrer"}
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="px-3 py-1.5 rounded text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
        >
          {deleting ? "..." : "Supprimer"}
        </button>
      </div>

      {message && <p className="text-xs text-bn-forest-dark/60">{message}</p>}
    </div>
  );
}

export default function GalleryEditor({
  initialImages,
}: {
  initialImages: GalleryImage[];
}) {
  const [images, setImages] = useState(initialImages);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [newCaption, setNewCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleFileChange(f: File | null) {
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  }

  async function handleUpload() {
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.set("file", file);
      fd.set("caption", newCaption);
      const res = await fetch("/api/admin/gallery", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as {
        id?: number;
        url?: string;
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "Erreur");

      setImages((prev) => [
        ...prev,
        { id: data.id as number, url: data.url as string, caption: newCaption || null, sortOrder: prev.length },
      ]);
      setFile(null);
      setPreview(null);
      setNewCaption("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {/* Add new photo */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-serif text-lg text-bn-forest-dark mb-4">Ajouter une Photo</h2>
        <div className="grid sm:grid-cols-2 gap-4 items-start">
          <div>
            {preview ? (
              <div className="aspect-video bg-bn-forest-dark/10 rounded overflow-hidden mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={preview} alt="" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="aspect-video bg-bn-forest-dark/5 rounded flex items-center justify-center mb-3">
                <span className="text-bn-forest-dark/40 text-sm">Aucune photo sélectionnée</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-xs text-bn-forest-dark/60 mb-1">
                Légende (français)
              </label>
              <input
                value={newCaption}
                onChange={(e) => setNewCaption(e.target.value)}
                placeholder="ex : Récolte de roses au lever du soleil"
                className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-bn-gold"
              />
            </div>
            <button
              onClick={handleUpload}
              disabled={uploading || !file}
              className="bg-bn-forest-dark text-bn-cream font-medium py-2 rounded text-sm disabled:opacity-50"
            >
              {uploading ? "Envoi..." : "Ajouter à la Galerie"}
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
        </div>
      </div>

      {/* Existing photos */}
      <h2 className="font-serif text-lg text-bn-forest-dark mb-4">
        Photos Actuelles ({images.length})
      </h2>
      {images.length === 0 ? (
        <p className="text-sm text-bn-forest-dark/50">
          Aucune photo pour l&apos;instant. La section « Du Champ au Flacon » restera masquée
          sur le site jusqu&apos;à l&apos;ajout d&apos;au moins une photo.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onDeleted={(id) => setImages((prev) => prev.filter((i) => i.id !== id))}
              onCaptionSaved={(id, caption) =>
                setImages((prev) => prev.map((i) => (i.id === id ? { ...i, caption } : i)))
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
