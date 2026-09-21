import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getAllProducts, getAllCategories } from "@/lib/products";
import ProductsList from "./ProductsList";

export default async function AdminProductsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const [products, categories] = await Promise.all([getAllProducts(), getAllCategories()]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-2xl text-bn-forest-dark mb-1">Produits</h1>
          <p className="text-bn-forest-dark/60 text-sm">
            {products.length} produits au catalogue.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="bg-bn-gold text-bn-forest-dark font-medium px-4 py-2 rounded text-sm hover:opacity-90"
        >
          + Nouveau Produit
        </Link>
      </div>

      <ProductsList products={products} categories={categories} />
    </main>
  );
}
