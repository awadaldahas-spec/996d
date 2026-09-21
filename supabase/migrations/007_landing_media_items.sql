create table if not exists public.landing_media_items (
  id uuid primary key default gen_random_uuid(),
  side text not null check (side in ('left', 'right')),
  image_url text not null,
  caption_fr text,
  caption_en text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists landing_media_items_side_idx on public.landing_media_items (side, sort_order);

alter table public.landing_media_items enable row level security;

create policy "Public can read landing media items"
  on public.landing_media_items for select
  using (true);

insert into public.landing_media_items (side, image_url, caption_fr, caption_en, sort_order)
select id, image_url, caption_fr, caption_en, 0
from public.landing_media
where image_url is not null
on conflict do nothing;
