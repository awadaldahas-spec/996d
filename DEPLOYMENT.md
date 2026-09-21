# Deployment notes

## Current production target: Cloudflare Workers

The site runs on Cloudflare Workers via OpenNext:

```bash
npm install
npm run cf:deploy
```

Live URL: https://bostannaturals.996d.workers.dev

---

## Local development

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

To develop with the real Cloudflare bindings (D1) attached:

```bash
CF_DEV=1 npm run dev
```

---

## ⚠️ Before deploying to Hostinger / any plain Node host

`next build` now succeeds on generic Node hosting, but **the application will
not function there without a database migration first.**

All site content lives in **Cloudflare D1**, which only exists inside the
Cloudflare Workers runtime. `lib/db.ts` calls `getCloudflareContext()`, which
throws on a normal Node server.

These pages read from D1 and will fail outside Cloudflare:

- `/[locale]/home`
- `/[locale]/produits` and `/[locale]/produits/[sku]`
- `/[locale]/a-propos`
- `/[locale]/contact`
- the entire `/admin` dashboard

To host on Hostinger, you must first:

1. Choose a replacement database (Hostinger MySQL, or the existing Supabase
   project).
2. Rewrite `lib/db.ts` against that database.
3. Migrate the data currently in D1 (30 products, categories, gallery,
   `site_settings`, `contact_messages`) — see `d1/*.sql`.
4. Set every variable from `.env.example` in the host's environment panel.

### Hostinger specifics already handled

- `next.config.ts` no longer imports `@opennextjs/cloudflare` unconditionally
  (this was the `Failed to load next.config.ts` build error).
- `images.unoptimized` is set, because Cloudflare's image optimizer is absent.
- `start` honours `$PORT`.
- `engines.node` is `>=20.9.0` — select that (or newer) in the Hostinger panel.

The `GLIBC_2.29 not found` message for `@next/swc-linux-x64-gnu` is a warning,
not an error: Next.js falls back to the WASM compiler and the build completes,
just more slowly.

---

## Required environment variables

See `.env.example`. On Cloudflare these are Worker secrets:

```bash
npx wrangler secret put SMTP_HOST --name bostannaturals
npx wrangler secret put SMTP_USER --name bostannaturals
npx wrangler secret put SMTP_PASSWORD --name bostannaturals
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY --name bostannaturals
npx wrangler secret put NEXT_PUBLIC_SUPABASE_ANON_KEY --name bostannaturals
```

`ADMIN_EMAIL` and `ADMIN_PASSWORD` are already set.

Without the SMTP secrets, contact/RFQ submissions are still **saved** to the
`contact_messages` table in D1 — they are never lost — but no notification
email is sent.

---

## Database migrations

Apply in order with:

```bash
npx wrangler d1 execute bostannaturals-db --remote --file d1/<file>.sql
```

`d1/schema.sql` and `d1/seed.sql` bootstrap the catalogue; `d1/008` onwards
contain the approved content revisions and the `contact_messages` table.
