"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Category, Product } from "@/lib/products";

interface FormState {
  sku: string;
  category: string;
  name: string;
  nameEn: string;
  subtitleFr: string;
  subtitleEn: string;
  inci: string;
  cas: string;
  origin: string;
  extractionMethodFr: string;
  extractionMethodEn: string;
  shortDescriptionFr: string;
  shortDescriptionEn: string;
  description: string;
  specifications: string;
  organoleptic: string;
  regulatory: string;
  quality: string;
  confidentiality: string;
}

function productToForm(p?: Product): FormState {
  return {
    sku: p?.sku || "",
    category: p?.category || "",
    name: p?.name || "",
    nameEn: p?.nameEn || "",
    subtitleFr: p?.subtitleFr || "",
    subtitleEn: p?.subtitleEn || "",
    inci: p?.inci || "",
    cas: p?.cas || "",
    origin: p?.origin || "",
    extractionMethodFr: p?.extractionMethodFr || "",
    extractionMethodEn: p?.extractionMethodEn || "",
    shortDescriptionFr: p?.shortDescriptionFr || "",
    shortDescriptionEn: p?.shortDescriptionEn || "",
    description: p?.tabs.description || "",
    specifications: (p?.tabs.specifications || []).join("\n"),
    organoleptic: (p?.tabs.organoleptic || []).join("\n"),
    regulatory: p?.tabs.regulatory || "",
    quality: p?.tabs.quality || "",
    confidentiality: p?.tabs.confidentiality || "",
  };
}

const fieldClass = "w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm";
const labelClass = "block text-xs text-bn-forest-dark/60 mb-1";

export default function ProductForm({
  categories,
  product,
}: {
  categories: Category[];
  product?: Product;
}) {
  const router = useRouter();
  const isEdit = !!product;
  const [form, setForm] = useState<FormState>(productToForm(product));
  const [images, setImages] = useState<string[]>(product?.images || []);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function removeImage(url: string) {
    setImages((prev) => prev.filter((i) => i !== url));
  }

  function makeMainImage(url: string) {
    setImages((prev) => [url, ...prev.filter((i) => i !== url)]);
  }

  function moveImage(index: number, direction: -1 | 1) {
    setImages((prev) => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function removeNewFile(index: number) {
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function addFiles(fileList: FileList | null) {
    if (!fileList) return;
    setNewFiles((prev) => [...prev, ...Array.from(fileList)]);
  }

  async function handleSubmit() {
    setSaving(true);
    setError(null);
    try {
      const uploadedUrls: string[] = [];
      for (const file of newFiles) {
        const fd = new FormData();
        fd.set("file", file);
        fd.set("folder", `bostan-naturals/products/${form.sku}`);
        const res = await fetch("/api/admin/upload-image", { method: "POST", body: fd });
        const data: { url?: string; error?: string } = await res.json();
        if (!res.ok) throw new Error(data.error || `Échec de l'envoi de "${file.name}"`);
        uploadedUrls.push(data.url as string);
      }

      const allImages = [...images, ...uploadedUrls];

      const payload = {
        sku: form.sku,
        category: form.category,
        name: form.name,
        nameEn: form.nameEn,
        subtitleFr: form.subtitleFr,
        subtitleEn: form.subtitleEn,
        inci: form.inci,
        cas: form.cas,
        origin: form.origin,
        extractionMethodFr: form.extractionMethodFr,
        extractionMethodEn: form.extractionMethodEn,
        shortDescriptionFr: form.shortDescriptionFr,
        shortDescriptionEn: form.shortDescriptionEn,
        image: allImages[0] || undefined,
        images: allImages,
        tabs: {
          description: form.description,
          specifications: form.specifications.split("\n").map((s) => s.trim()).filter(Boolean),
          organoleptic: form.organoleptic.split("\n").map((s) => s.trim()).filter(Boolean),
          regulatory: form.regulatory,
          quality: form.quality,
          confidentiality: form.confidentiality,
        },
      };

      const res = await fetch("/api/admin/products", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: { error?: string } = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");

      router.push("/admin/products");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-white border border-bn-forest/10 rounded-lg p-6 space-y-8">
      {/* Identification */}
      <section>
        <h2 className="font-serif text-lg text-bn-forest-dark mb-4">Identification</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Code SKU</label>
            <input
              value={form.sku}
              disabled={isEdit}
              onChange={(e) => set("sku", e.target.value.toUpperCase())}
              className={`${fieldClass} disabled:bg-bn-forest-dark/5`}
              placeholder="BNABS030"
            />
          </div>
          <div>
            <label className={labelClass}>Catégorie</label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              className={fieldClass}
            >
              <option value="">— Choisir —</option>
              {categories.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.labelFr}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Nom (FR)</label>
            <input value={form.name} onChange={(e) => set("name", e.target.value)} className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Name (EN)</label>
            <input value={form.nameEn} onChange={(e) => set("nameEn", e.target.value)} className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Sous-titre (FR)</label>
            <input value={form.subtitleFr} onChange={(e) => set("subtitleFr", e.target.value)} className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Subtitle (EN)</label>
            <input value={form.subtitleEn} onChange={(e) => set("subtitleEn", e.target.value)} className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Nom INCI</label>
            <input value={form.inci} onChange={(e) => set("inci", e.target.value)} className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Numéro CAS</label>
            <input value={form.cas} onChange={(e) => set("cas", e.target.value)} className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Origine</label>
            <input value={form.origin} onChange={(e) => set("origin", e.target.value)} className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Méthode d&apos;Extraction (FR)</label>
            <input
              value={form.extractionMethodFr}
              onChange={(e) => set("extractionMethodFr", e.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass}>Extraction Method (EN)</label>
            <input
              value={form.extractionMethodEn}
              onChange={(e) => set("extractionMethodEn", e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>
      </section>

      {/* Short description */}
      <section>
        <h2 className="font-serif text-lg text-bn-forest-dark mb-4">Description Courte (fiche produit)</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Description courte (FR)</label>
            <textarea
              value={form.shortDescriptionFr}
              onChange={(e) => set("shortDescriptionFr", e.target.value)}
              className={fieldClass}
              rows={4}
            />
          </div>
          <div>
            <label className={labelClass}>Short description (EN)</label>
            <textarea
              value={form.shortDescriptionEn}
              onChange={(e) => set("shortDescriptionEn", e.target.value)}
              className={fieldClass}
              rows={4}
            />
          </div>
        </div>
      </section>

      {/* Images */}
      <section>
        <h2 className="font-serif text-lg text-bn-forest-dark mb-1">Galerie de Photos</h2>
        <p className="text-xs text-bn-forest-dark/50 mb-4">
          La première image de la galerie sera utilisée comme image principale du produit.
        </p>

        {(images.length > 0 || newFiles.length > 0) && (
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
            {images.map((url, index) => (
              <div
                key={url}
                className={`relative aspect-square rounded-lg overflow-hidden group border-2 ${
                  index === 0 ? "border-bn-gold" : "border-bn-forest-dark/10"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" className="w-full h-full object-cover" />
                {index === 0 && (
                  <span className="absolute top-1 left-1 bg-bn-gold text-bn-forest-dark text-[10px] font-medium px-1.5 py-0.5 rounded">
                    Principale
                  </span>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1 transition-opacity">
                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => makeMainImage(url)}
                      className="text-white text-xs font-medium underline underline-offset-2"
                    >
                      Définir comme principale
                    </button>
                  )}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => moveImage(index, -1)}
                      className="text-white text-xs font-medium disabled:opacity-30"
                      title="Déplacer vers la gauche"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      disabled={index === images.length - 1}
                      onClick={() => moveImage(index, 1)}
                      className="text-white text-xs font-medium disabled:opacity-30"
                      title="Déplacer vers la droite"
                    >
                      →
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(url)}
                    className="text-white text-xs font-medium"
                  >
                    Retirer
                  </button>
                </div>
              </div>
            ))}
            {newFiles.map((file, i) => (
              <div
                key={file.name + i}
                className="relative aspect-square rounded-lg overflow-hidden group border-2 border-dashed border-bn-gold/60"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                <span className="absolute top-1 left-1 bg-bn-gold text-bn-forest-dark text-[10px] font-medium px-1.5 py-0.5 rounded">
                  Nouveau
                </span>
                <button
                  type="button"
                  onClick={() => removeNewFile(i)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-medium transition-opacity"
                >
                  Retirer
                </button>
              </div>
            ))}
          </div>
        )}

        <label
          htmlFor="product-images-input"
          className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-bn-forest-dark/25 rounded-lg py-8 px-4 cursor-pointer hover:border-bn-gold hover:bg-bn-gold/5 transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bn-forest-dark/50">
            <path d="M12 16V4M12 4l-4 4M12 4l4 4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm text-bn-forest-dark/70 font-medium">
            Cliquez pour ajouter des photos
          </span>
          <span className="text-xs text-bn-forest-dark/40">PNG, JPG — plusieurs fichiers possibles</span>
          <input
            id="product-images-input"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </label>
      </section>

      {/* Technical tabs content */}
      <section>
        <h2 className="font-serif text-lg text-bn-forest-dark mb-4">
          Onglets Techniques (Fiche Technique)
        </h2>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Description & Storytelling</label>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              className={fieldClass}
              rows={5}
            />
          </div>
          <div>
            <label className={labelClass}>Spécifications Techniques (une ligne par point)</label>
            <textarea
              value={form.specifications}
              onChange={(e) => set("specifications", e.target.value)}
              className={fieldClass}
              rows={4}
            />
          </div>
          <div>
            <label className={labelClass}>
              Propriétés Organoleptiques & Physiques (une ligne par point)
            </label>
            <textarea
              value={form.organoleptic}
              onChange={(e) => set("organoleptic", e.target.value)}
              className={fieldClass}
              rows={4}
            />
          </div>
          <div>
            <label className={labelClass}>Conformité Réglementaire & REACH</label>
            <textarea
              value={form.regulatory}
              onChange={(e) => set("regulatory", e.target.value)}
              className={fieldClass}
              rows={4}
            />
          </div>
          <div>
            <label className={labelClass}>Assurance Qualité & Logistique</label>
            <textarea
              value={form.quality}
              onChange={(e) => set("quality", e.target.value)}
              className={fieldClass}
              rows={4}
            />
          </div>
          <div>
            <label className={labelClass}>Confidentialité & Dossier Technique</label>
            <textarea
              value={form.confidentiality}
              onChange={(e) => set("confidentiality", e.target.value)}
              className={fieldClass}
              rows={4}
            />
          </div>
        </div>
      </section>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          disabled={saving || !form.sku || !form.category || !form.name}
          className="bg-bn-gold text-bn-forest-dark font-medium px-6 py-2.5 rounded text-sm disabled:opacity-50"
        >
          {saving ? "Enregistrement..." : isEdit ? "Enregistrer les modifications" : "Créer le produit"}
        </button>
      </div>
    </div>
  );
}
