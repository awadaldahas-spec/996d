-- Bostan Naturals: RFQ (sample/quote request) submissions
-- Run this in Supabase Dashboard -> SQL Editor

create table if not exists public.rfq_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  product_sku text not null,
  product_name text not null,
  request_type text not null check (request_type in ('sample', 'quote')),
  contact_name text not null,
  company_name text not null,
  siret text,
  quantity text,
  country text,
  email text not null,
  message text,
  locale text not null default 'fr',
  status text not null default 'new' check (status in ('new', 'in_progress', 'closed')),
  email_sent boolean not null default false
);

create index if not exists rfq_submissions_created_at_idx on public.rfq_submissions (created_at desc);
create index if not exists rfq_submissions_product_sku_idx on public.rfq_submissions (product_sku);

alter table public.rfq_submissions enable row level security;

-- No public select/insert/update/delete policies are defined:
-- all access goes through the server using the service_role key
-- (see app/api/rfq/route.ts), which bypasses RLS by design.
