import { redirect, notFound } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getAllCategories, getProductBySku } from "@/lib/products";
import ProductForm from "../ProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const { sku } = await params;
  const [categories, product] = await Promise.all([getAllCategories(), getProductBySku(sku)]);

  if (!product) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl text-bn-forest-dark mb-8">
        Modifier : {product.name}
      </h1>
      <ProductForm categories={categories} product={product} />
    </main>
  );
}
