-- Bostan Naturals: immersive landing left/right images + captions
create table if not exists public.landing_media (
  id text primary key check (id in ('left', 'right')),
  image_path text,
  caption_fr text,
  caption_en text,
  updated_at timestamptz not null default now()
);

insert into public.landing_media (id, caption_fr, caption_en)
values
  ('left', 'Nos Fleurs d''Origine', 'Our Source Flowers'),
  ('right', 'Huiles Essentielles, Absolues & Concrètes', 'Essential Oils, Absolutes & Concretes')
on conflict (id) do nothing;

alter table public.landing_media enable row level security;

create policy "Public can read landing media"
  on public.landing_media for select
  using (true);
