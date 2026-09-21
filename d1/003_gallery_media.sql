INSERT INTO site_media (key, media_type, url) VALUES
  ('gallery_image_1', 'image', NULL),
  ('gallery_image_2', 'image', NULL),
  ('gallery_image_3', 'image', NULL),
  ('gallery_image_4', 'image', NULL),
  ('gallery_image_5', 'image', NULL),
  ('gallery_image_6', 'image', NULL)
ON CONFLICT (key) DO NOTHING;
