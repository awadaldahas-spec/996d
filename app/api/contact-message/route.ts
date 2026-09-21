import { NextRequest, NextResponse } from "next/server";
import { getTransporter, COMMERCIAL_EMAIL, FROM_EMAIL } from "@/lib/mailer";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getDb } from "@/lib/db";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    country?: string;
    products?: string;
    quantity?: string;
    message?: string;
  };

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const rows: [string, string | undefined][] = [
    ["Société", body.company],
    ["Téléphone", body.phone],
    ["Pays", body.country],
    ["Produits / références souhaités", body.products],
    ["Quantité / volume", body.quantity],
    ["Message", body.message],
  ];

  const storedMessage = rows
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `${label} : ${value}`)
    .join("\n");

  // Persist first, and treat persistence as the thing that must succeed:
  // D1 is always bound to the Worker, so a submission is never lost even when
  // SMTP or Supabase are unconfigured.
  let stored = false;
  try {
    const db = await getDb();
    await db
      .prepare(
        `INSERT INTO contact_messages
           (kind, name, company, email, phone, country, products, quantity, message)
         VALUES ('contact', ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        body.name,
        body.company ?? null,
        body.email,
        body.phone ?? null,
        body.country ?? null,
        body.products ?? null,
        body.quantity ?? null,
        storedMessage
      )
      .run();
    stored = true;
  } catch (error) {
    console.error("Contact message D1 insert error:", error);
  }

  // Best-effort mirror to Supabase (legacy store); never fails the request.
  try {
    const supabase = getSupabaseAdminClient();
    await supabase.from("contact_messages").insert({
      name: body.name,
      email: body.email,
      message: storedMessage,
    });
  } catch (error) {
    console.error("Contact message Supabase insert error:", error);
  }

  try {
    const transporter = getTransporter();
    const htmlRows = [["Nom/prénom", body.name], ...rows]
      .filter(([, value]) => Boolean(value))
      .map(
        ([label, value]) =>
          `<tr><td style="padding:6px 12px;font-weight:600;">${escapeHtml(
            label as string
          )}</td><td style="padding:6px 12px;">${escapeHtml(String(value)).replace(/\n/g, "<br/>")}</td></tr>`
      )
      .join("");

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: COMMERCIAL_EMAIL,
      replyTo: body.email,
      subject: `[Contact] Demande de ${body.name}`,
      html: `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">${htmlRows}</table>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact message email error:", error);
    // The message is already saved, so the visitor's submission was not lost.
    // Only report failure if persistence ALSO failed.
    if (stored) return NextResponse.json({ ok: true });
    return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
  }
}
