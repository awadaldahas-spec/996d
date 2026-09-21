CREATE TABLE IF NOT EXISTS site_media (
  key TEXT PRIMARY KEY,
  media_type TEXT NOT NULL DEFAULT 'image',
  url TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO site_media (key, media_type, url) VALUES
  ('home_hero_video', 'video', 'https://res.cloudinary.com/inrjbmhz/video/upload/q_auto:best,f_auto/v1789369991/bostan-naturals/hero/hero-oil-seeping-landscape.mp4'),
  ('home_producers_image', 'image', '/images/producers-hero.jpg'),
  ('home_quality_image', 'image', NULL)
ON CONFLICT (key) DO NOTHING;
