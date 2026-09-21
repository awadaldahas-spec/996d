"use client";

import { useState } from "react";
import type { Category } from "@/lib/products";

const emptyForm = {
  key: "",
  labelFr: "",
  labelEn: "",
  noteFr: "",
  noteEn: "",
  hidden: false,
};

export default function CategoriesEditor({
  initialCategories,
}: {
  initialCategories: Category[];
}) {
  const [categories, setCategories] = useState(initialCategories);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  function startEdit(cat: Category) {
    setEditingKey(cat.key);
    setForm({
      key: cat.key,
      labelFr: cat.labelFr,
      labelEn: cat.labelEn,
      noteFr: cat.noteFr,
      noteEn: cat.noteEn,
      hidden: cat.hidden,
    });
    setFile(null);
    setPreview(cat.image || null);
    setShowForm(true);
  }

  function startNew() {
    setEditingKey(null);
    setForm(emptyForm);
    setFile(null);
    setPreview(null);
    setShowForm(true);
  }

  function handleFileChange(f: File | null) {
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  }

  async function handleSave() {
    setSaving(true);
    setMessage(null);
    try {
      let image: string | undefined;
      if (file) {
        const fd = new FormData();
        fd.set("file", file);
        fd.set("folder", "bostan-naturals/categories");
        const res = await fetch("/api/admin/upload-image", { method: "POST", body: fd });
        const data: { url?: string; error?: string } = await res.json();
        if (!res.ok) throw new Error(data.error || "Upload failed");
        image = data.url;
      }

      const payload = { ...form, image };
      const method = editingKey ? "PUT" : "POST";
      const res = await fetch("/api/admin/categories", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: { error?: string } = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");

      if (editingKey) {
        setCategories((prev) =>
          prev.map((c) =>
            c.key === editingKey
              ? { ...c, ...form, image: image ?? c.image }
              : c
          )
        );
      } else {
        setCategories((prev) => [
          ...prev,
          { ...form, image: image ?? null },
        ]);
      }
      setMessage("Enregistré ✓");
      setShowForm(false);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(key: string) {
    if (!confirm("Supprimer cette catégorie ?")) return;
    const res = await fetch(`/api/admin/categories?key=${encodeURIComponent(key)}`, {
      method: "DELETE",
    });
    const data: { error?: string } = await res.json();
    if (!res.ok) {
      alert(data.error || "Erreur");
      return;
    }
    setCategories((prev) => prev.filter((c) => c.key !== key));
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={startNew}
          className="bg-bn-gold text-bn-forest-dark font-medium px-4 py-2 rounded text-sm hover:opacity-90"
        >
          + Nouvelle Catégorie
        </button>
        {message && <span className="text-sm text-bn-forest-dark/70">{message}</span>}
      </div>

      {showForm && (
        <div className="bg-white border border-bn-forest/10 rounded-lg p-6 mb-6">
          <h2 className="font-serif text-lg text-bn-forest-dark mb-4">
            {editingKey ? `Modifier : ${editingKey}` : "Nouvelle catégorie"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs text-bn-forest-dark/60 mb-1">
                Clé (key) {editingKey && "(non modifiable)"}
              </label>
              <input
                value={form.key}
                disabled={!!editingKey}
                onChange={(e) => setForm({ ...form, key: e.target.value })}
                className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm disabled:bg-bn-forest-dark/5"
                placeholder="ex: huiles-vegetales"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                checked={form.hidden}
                onChange={(e) => setForm({ ...form, hidden: e.target.checked })}
                id="hidden"
              />
              <label htmlFor="hidden" className="text-sm text-bn-forest-dark/80">
                Masquée sur le site
              </label>
            </div>
            <div>
              <label className="block text-xs text-bn-forest-dark/60 mb-1">Titre (FR)</label>
              <input
                value={form.labelFr}
                onChange={(e) => setForm({ ...form, labelFr: e.target.value })}
                className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-bn-forest-dark/60 mb-1">Title (EN)</label>
              <input
                value={form.labelEn}
                onChange={(e) => setForm({ ...form, labelEn: e.target.value })}
                className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-bn-forest-dark/60 mb-1">Note (FR)</label>
              <textarea
                value={form.noteFr}
                onChange={(e) => setForm({ ...form, noteFr: e.target.value })}
                className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-xs text-bn-forest-dark/60 mb-1">Note (EN)</label>
              <textarea
                value={form.noteEn}
                onChange={(e) => setForm({ ...form, noteEn: e.target.value })}
                className="w-full border border-bn-forest-dark/20 rounded px-3 py-2 text-sm"
                rows={2}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-bn-forest-dark/60 mb-1">Image</label>
              {preview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={preview}
                  alt=""
                  className="w-full max-w-xs h-32 object-cover rounded-lg border border-bn-forest-dark/10 mb-2"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving || !form.key || !form.labelFr || !form.labelEn}
              className="bg-bn-forest-dark text-bn-cream px-5 py-2 rounded text-sm font-medium disabled:opacity-50"
            >
              {saving ? "..." : "Enregistrer"}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-5 py-2 rounded text-sm text-bn-forest-dark/60 hover:text-bn-forest-dark"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="bg-white border border-bn-forest/10 rounded-lg p-4 flex justify-between items-start gap-3"
          >
            <div className="flex items-center gap-3">
              {cat.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cat.image}
                  alt=""
                  className="w-14 h-14 rounded-lg object-cover border border-bn-forest-dark/10 shrink-0"
                />
              ) : (
                <div className="w-14 h-14 rounded-lg bg-bn-forest-dark/5 flex items-center justify-center text-bn-forest-dark/30 text-[10px] shrink-0">
                  Aucune
                </div>
              )}
              <div>
                <p className="font-serif text-bn-forest-dark">{cat.labelFr}</p>
                <p className="text-xs text-bn-forest-dark/50">{cat.key}</p>
                {cat.hidden && (
                  <span className="inline-block mt-1 text-[10px] bg-bn-forest-dark/10 text-bn-forest-dark/60 px-2 py-0.5 rounded">
                    Masquée
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => startEdit(cat)}
                className="text-xs text-bn-forest-dark/70 hover:text-bn-gold"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(cat.key)}
                className="text-xs text-red-600/70 hover:text-red-600"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
