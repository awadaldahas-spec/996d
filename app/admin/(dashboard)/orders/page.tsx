import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getSupabaseAdminClient } from "@/lib/supabase";

interface RfqSubmission {
  id: string;
  created_at: string;
  product_sku: string;
  product_name: string;
  request_type: string | null;
  contact_name: string | null;
  company_name: string;
  siret: string | null;
  quantity: string | null;
  country: string | null;
  email: string;
  message: string | null;
}

export default async function AdminOrdersPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const supabase = getSupabaseAdminClient();
  const { data } = await supabase
    .from("rfq_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  const orders = (data || []) as RfqSubmission[];

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl text-bn-forest-dark mb-1">Demandes de Devis</h1>
      <p className="text-bn-forest-dark/60 text-sm mb-8">
        Demandes d&apos;échantillon et de devis reçues via les fiches produits.
      </p>

      {orders.length === 0 ? (
        <p className="text-bn-forest-dark/50 text-sm">Aucune demande pour le moment.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border border-bn-forest/10 rounded-lg p-5">
              <div className="flex justify-between items-start gap-3 mb-3">
                <div>
                  <p className="font-serif text-bn-forest-dark">
                    {order.company_name}{" "}
                    {order.request_type && (
                      <span className="ml-2 text-[10px] font-medium uppercase tracking-wide bg-bn-gold/15 text-bn-forest-dark px-2 py-0.5 rounded-full">
                        {order.request_type === "sample" ? "Échantillon" : "Devis"}
                      </span>
                    )}
                  </p>
                  <a href={`mailto:${order.email}`} className="text-sm text-bn-gold hover:underline">
                    {order.email}
                  </a>
                </div>
                <span className="text-xs text-bn-forest-dark/40 shrink-0">
                  {new Date(order.created_at).toLocaleString("fr-FR")}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 text-sm text-bn-forest-dark/80 mb-2">
                <p>
                  <span className="text-bn-forest-dark/50">Produit :</span> {order.product_name} (
                  {order.product_sku})
                </p>
                {order.contact_name && (
                  <p>
                    <span className="text-bn-forest-dark/50">Contact :</span> {order.contact_name}
                  </p>
                )}
                {order.siret && (
                  <p>
                    <span className="text-bn-forest-dark/50">SIRET / TVA :</span> {order.siret}
                  </p>
                )}
                {order.quantity && (
                  <p>
                    <span className="text-bn-forest-dark/50">Quantité :</span> {order.quantity}
                  </p>
                )}
                {order.country && (
                  <p>
                    <span className="text-bn-forest-dark/50">Pays :</span> {order.country}
                  </p>
                )}
              </div>

              {order.message && (
                <p className="text-sm text-bn-forest-dark/70 whitespace-pre-line border-t border-bn-forest/10 pt-2 mt-2">
                  {order.message}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
