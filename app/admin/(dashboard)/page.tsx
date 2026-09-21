import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/adminAuth";

const cards = [
  {
    href: "/admin/products",
    title: "Produits",
    description: "Ajouter, modifier ou supprimer des produits du catalogue.",
  },
  {
    href: "/admin/categories",
    title: "Catégories",
    description: "Gérer les catégories de produits et leurs images.",
  },
  {
    href: "/admin/landing",
    title: "Page d'Immersion",
    description: "Visuels gauche/droite affichés à l'arrivée sur le site.",
  },
  {
    href: "/admin/pages",
    title: "Contenu des Pages",
    description: "Accueil, À Propos, Contact — textes et images.",
  },
  {
    href: "/admin/messages",
    title: "Messages",
    description: "Messages reçus via le formulaire de la page Contact.",
  },
  {
    href: "/admin/orders",
    title: "Demandes de Devis",
    description: "Demandes d'échantillon et de devis reçues via les fiches produits.",
  },
];

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl text-bn-forest-dark mb-8">Tableau de Bord</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-white border border-bn-forest/10 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="font-serif text-xl text-bn-forest-dark mb-2">{card.title}</h2>
            <p className="text-sm text-bn-forest-dark/70">{card.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
