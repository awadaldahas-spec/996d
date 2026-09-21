CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO site_settings (key, value) VALUES
  ('contact_office_title', 'Siège Social'),
  ('contact_address', 'Marseille, France'),
  ('contact_cr_number', ''),
  ('contact_email', 'bostancom@gmail.com'),
  ('contact_phone', '+20 106 930 4477'),
  ('contact_map_embed_url', ''),
  ('contact_social_note', 'Bientôt disponible')
ON CONFLICT (key) DO NOTHING;
