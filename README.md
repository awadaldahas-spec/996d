# 996d — Bostan Naturals

B2B website for **Bostan Naturals**, a Marseille-based supplier of natural and
aromatic raw materials (essential oils, absolutes, concretes and cold-pressed
carrier oils) sourced from qualified partners in Egypt.

Live: https://bostannaturals.996d.workers.dev

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Styling | Tailwind CSS 4 |
| Hosting | Cloudflare Workers via OpenNext |
| Database | Cloudflare D1 (catalogue, settings, messages) |
| Also used | Supabase (legacy RFQ store), Cloudinary (images), SMTP (mail) |

## Features

- Bilingual catalogue (French / English) with 30 products in four categories
- Category-first product browsing with six technical tabs per product
- RFQ and contact forms, persisted to D1 and emailed to the sales address
- Admin dashboard: products, categories, gallery, landing media, site
  settings, orders and messages
- GDPR pages, cookie banner with consent preferences, sitemap and robots

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

To run locally with the Cloudflare bindings (D1) attached:

```bash
CF_DEV=1 npm run dev
```

## Deploying

```bash
npm run cf:deploy
```

> **Deploying somewhere other than Cloudflare?** Read [DEPLOYMENT.md](DEPLOYMENT.md)
> first. All site content lives in Cloudflare D1, which only exists inside the
> Workers runtime, so the app needs a database migration before it will run on
> Hostinger or any plain Node host.

## Database migrations

```bash
npx wrangler d1 execute bostannaturals-db --remote --file d1/<file>.sql
```

`d1/schema.sql` and `d1/seed.sql` bootstrap the catalogue. Files `008` onward
contain the approved content revisions and the `contact_messages` table.

## Environment variables

See [.env.example](.env.example). On Cloudflare these are Worker secrets — see
[DEPLOYMENT.md](DEPLOYMENT.md) for the commands.
