CREATE TABLE IF NOT EXISTS landing_media_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  side TEXT NOT NULL CHECK (side IN ('left', 'right')),
  url TEXT NOT NULL,
  caption_fr TEXT,
  caption_en TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO landing_media_items (side, url, caption_fr, caption_en, sort_order) VALUES
  ('left', 'https://res.cloudinary.com/inrjbmhz/image/upload/v1789547798/bostan-naturals/landing/left-1789547797758.jpg', 'L''OR LIQUIDE DU DÉSERT L''Huile de Jojoba Dorée Pure, une Matrice Végétale Impériale, Neutre, Hydrofuge et Inaltérable.', 'LIQUID GOLD OF THE DESERT Pure Golden Jojoba Oil, an Imperial Plant Matrix, Neutral, Water-repellent and Unalterable.', 0),
  ('right', 'https://res.cloudinary.com/inrjbmhz/image/upload/v1789547800/bostan-naturals/landing/right-1789547799995.jpg', 'L''ÉCLAT DE CRISTAL L''Huile Essentielle de Néroli Pur, un Souffle Floral Blanc, Zesté et Solaire.', 'THE CRYSTAL SHINE The Pure Neroli Essential Oil, a White, Zesty and Solar Floral Breath.', 0);
