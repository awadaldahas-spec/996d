import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getSupabaseAdminClient } from "@/lib/supabase";

interface ContactMessage {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
  status: string;
}

export default async function AdminMessagesPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const supabase = getSupabaseAdminClient();
  const { data } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  const messages = (data || []) as ContactMessage[];

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl text-bn-forest-dark mb-1">Messages</h1>
      <p className="text-bn-forest-dark/60 text-sm mb-8">
        Messages reçus via le formulaire de la page Contact.
      </p>

      {messages.length === 0 ? (
        <p className="text-bn-forest-dark/50 text-sm">Aucun message pour le moment.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white border border-bn-forest/10 rounded-lg p-5">
              <div className="flex justify-between items-start gap-3 mb-2">
                <div>
                  <p className="font-serif text-bn-forest-dark">{msg.name}</p>
                  <a href={`mailto:${msg.email}`} className="text-sm text-bn-gold hover:underline">
                    {msg.email}
                  </a>
                </div>
                <span className="text-xs text-bn-forest-dark/40 shrink-0">
                  {new Date(msg.created_at).toLocaleString("fr-FR")}
                </span>
              </div>
              <p className="text-sm text-bn-forest-dark/80 whitespace-pre-line">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
