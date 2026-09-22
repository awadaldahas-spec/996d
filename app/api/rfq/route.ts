import { NextRequest, NextResponse } from "next/server";
import { getTransporter, PRODUCT_REQUEST_EMAIL, FROM_EMAIL } from "@/lib/mailer";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getDb } from "@/lib/db";

interface RfqPayload {
  productSku: string;
  productName: string;
  requestType: "sample" | "quote";
  contactName?: string;
  companyName: string;
  siret?: string;
  quantity?: string;
  country?: string;
  email: string;
  message?: string;
  locale: "fr" | "en";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildInternalEmail(data: RfqPayload) {
  const requestLabel =
    data.requestType === "sample"
      ? "Demande d'échantillon"
      : "Demande de devis (Vente en gros)";

  const rows: [string, string | undefined][] = [
    ["Produit", `${data.productName} (${data.productSku})`],
    ["Type de demande", requestLabel],
    ["Nom du contact", data.contactName],
    ["Nom de l'entreprise", data.companyName],
    ["SIRET / TVA", data.siret],
    ["Quantité souhaitée", data.quantity],
    ["Pays de destination", data.country],
    ["Email", data.email],
    ["Message", data.message],
  ];

  const htmlRows = rows
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;">${escapeHtml(
          label
        )}</td><td style="padding:6px 12px;">${escapeHtml(String(value))}</td></tr>`
    )
    .join("");

  return `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">${htmlRows}</table>`;
}

function buildAutoReply(data: RfqPayload) {
  if (data.locale === "en") {
    return {
      subject: "Bostan Naturals - Your request has been received",
      text: `Hello,

Thank you for your interest in Bostan Naturals.

Your request has been successfully registered by our sales department. Our aromatic and natural raw materials undergo rigorous tracking from every field in Egypt, combined with quality controls and analyses adapted to the nature of the product; where necessary, complementary analyses may be carried out by specialised laboratories in France or in Europe.

A member of our sales team (demandes@bostannaturals.fr) is currently reviewing your file and will get back to you within 24 hours to arrange the shipment of your samples or provide our best wholesale offer.

In the meantime, you can explore our full range by visiting our online catalog: bostannaturals.com.

Best regards,

The Bostan Naturals Team
Marseille, France`,
    };
  }

  return {
    subject: "Bostan Naturals - Votre demande a bien été reçue",
    text: `Bonjour,

Nous vous remercions pour l'intérêt que vous portez à Bostan Naturals.

Votre demande a bien été enregistrée par notre service commerciale. Nos matières premières aromatiques et naturelles font l'objet d'un suivi rigoureux depuis chaque champ en Égypte, associé à des contrôles qualité et analyses adaptés à la nature du produit ; lorsque nécessaire, des analyses complémentaires peuvent être réalisées auprès de laboratoires spécialisés en France ou en Europe.

Un conseiller de notre équipe commerciale (demandes@bostannaturals.fr) étudie actuellement votre dossier et reviendra vers vous sous 24 heures pour finaliser l'envoi de vos échantillons ou vous transmettre notre meilleure offre de prix de gros.

En attendant, vous pouvez découvrir l'ensemble de notre gamme en visitant notre catalogue en ligne : bostannaturals.com.

Cordialement,

L'équipe Bostan Naturals
Marseille, France`,
  };
}

export async function POST(request: NextRequest) {
  let data: RfqPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (!data.companyName || !data.email || !data.productSku || !data.requestType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Persist to D1 first — it is always bound to the Worker, so an RFQ is never
  // lost when Supabase or SMTP happen to be unconfigured.
  let stored = false;
  try {
    const db = await getDb();
    await db
      .prepare(
        `INSERT INTO contact_messages
           (kind, name, company, email, phone, country, products, quantity, sku, message)
         VALUES ('rfq', ?, ?, ?, NULL, ?, ?, ?, ?, ?)`
      )
      .bind(
        data.contactName || data.companyName,
        data.companyName,
        data.email,
        data.country || null,
        data.productName || data.productSku,
        data.quantity || null,
        data.productSku,
        data.message || `${data.requestType} — ${data.productSku}`
      )
      .run();
    stored = true;
  } catch (error) {
    console.error("RFQ D1 insert error:", error);
  }

  let submissionId: string | undefined;
  try {
    const supabase = getSupabaseAdminClient();
    const { data: inserted, error } = await supabase
      .from("rfq_submissions")
      .insert({
        product_sku: data.productSku,
        product_name: data.productName,
        request_type: data.requestType,
        contact_name: data.contactName || null,
        company_name: data.companyName,
        siret: data.siret || null,
        quantity: data.quantity || null,
        country: data.country || null,
        email: data.email,
        message: data.message || null,
        locale: data.locale,
      })
      .select("id")
      .single();

    if (error) throw error;
    submissionId = inserted?.id;
  } catch (error) {
    console.error("RFQ Supabase insert error:", error);
    // Already stored in D1 — do not fail the visitor's submission.
    if (!stored) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: PRODUCT_REQUEST_EMAIL,
      replyTo: data.email,
      subject: `[RFQ] ${data.productSku} - ${data.companyName}`,
      html: buildInternalEmail(data),
    });

    const autoReply = buildAutoReply(data);
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: data.email,
      subject: autoReply.subject,
      text: autoReply.text,
    });

    if (submissionId) {
      const supabase = getSupabaseAdminClient();
      await supabase
        .from("rfq_submissions")
        .update({ email_sent: true })
        .eq("id", submissionId);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("RFQ email error:", error);
    // Stored safely; the sales team can read it from the dashboard.
    if (stored) return NextResponse.json({ ok: true, saved: true });
    return NextResponse.json(
      { error: "Email delivery failed", saved: true },
      { status: 500 }
    );
  }
}
