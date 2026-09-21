import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getSiteMedia } from "@/lib/siteMedia";
import SiteMediaEditor from "./SiteMediaEditor";

export default async function AdminPagesPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const siteMedia = await getSiteMedia();

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl text-bn-forest-dark mb-1">Contenu des Pages</h1>
      <p className="text-bn-forest-dark/60 text-sm mb-8">
        Gérez les visuels des sections de la page d&apos;accueil.
      </p>
      <SiteMediaEditor initialMedia={siteMedia} />
    </main>
  );
}
