import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getAllCategories } from "@/lib/products";
import ProductForm from "../ProductForm";

export default async function NewProductPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const categories = await getAllCategories();

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl text-bn-forest-dark mb-8">Nouveau Produit</h1>
      <ProductForm categories={categories} />
    </main>
  );
}
