alter table public.rfq_submissions add column if not exists address text;
alter table public.rfq_submissions add column if not exists volume text;
alter table public.rfq_submissions add column if not exists rgpd_consent boolean not null default false;

alter table public.rfq_submissions alter column contact_name drop not null;
alter table public.rfq_submissions alter column request_type drop not null;
