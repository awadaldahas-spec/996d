import nodemailer from "nodemailer";

export function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration is missing (SMTP_HOST, SMTP_USER, SMTP_PASSWORD).");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

// Product-specific request form (per-product page)
export const PRODUCT_REQUEST_EMAIL = "demandes@bostannaturals.fr";
// General order/contact form (Contact page)
export const ORDER_REQUEST_EMAIL = "commandes@bostannaturals.fr";
export const FROM_EMAIL = process.env.SMTP_FROM || "no-reply@bostannaturals.com";
