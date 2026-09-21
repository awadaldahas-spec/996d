import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getGalleryImages } from "@/lib/gallery";
import GalleryEditor from "./GalleryEditor";

export default async function AdminGalleryPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const images = await getGalleryImages();

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl text-bn-forest-dark mb-1">Galerie de Photos</h1>
      <p className="text-bn-forest-dark/60 text-sm mb-8">
        Photos affichées dans la section « Du Champ au Flacon » sur la page d&apos;accueil.
        Ajoutez, supprimez ou modifiez la légende de chaque photo.
      </p>
      <GalleryEditor initialImages={images} />
    </main>
  );
}
