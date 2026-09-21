import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getAllCategories } from "@/lib/products";
import CategoriesEditor from "./CategoriesEditor";

export default async function AdminCategoriesPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const categories = await getAllCategories();

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl text-bn-forest-dark mb-1">Catégories</h1>
      <p className="text-bn-forest-dark/60 text-sm mb-8">
        Gérez les catégories de produits affichées sur le site.
      </p>
      <CategoriesEditor initialCategories={categories} />
    </main>
  );
}
