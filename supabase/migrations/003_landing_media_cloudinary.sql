-- Switch landing_media images to Cloudinary URLs
alter table public.landing_media add column if not exists image_url text;
