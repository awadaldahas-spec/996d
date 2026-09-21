import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getSiteSettings } from "@/lib/siteSettings";
import ContactSettingsEditor from "./ContactSettingsEditor";

export default async function AdminContactPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const settings = await getSiteSettings();

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl text-bn-forest-dark mb-1">Page Contact</h1>
      <p className="text-bn-forest-dark/60 text-sm mb-8">
        Gérez les coordonnées affichées sur la page « Contact » du site.
      </p>
      <ContactSettingsEditor initialValues={settings} />
    </main>
  );
}
