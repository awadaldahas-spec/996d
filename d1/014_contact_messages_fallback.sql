-- 014_contact_messages_fallback.sql
-- Durable storage for contact / RFQ submissions inside D1.
-- The site previously relied on Supabase + SMTP only; when either was
-- unconfigured the submission was lost and the visitor saw an error.
-- D1 is already bound to the Worker, so this guarantees nothing is dropped.

CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  kind TEXT NOT NULL DEFAULT 'contact',   -- 'contact' | 'rfq'
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  products TEXT,
  quantity TEXT,
  sku TEXT,
  message TEXT NOT NULL,
  emailed INTEGER NOT NULL DEFAULT 0,     -- 1 once the notification mail went out
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created
  ON contact_messages(created_at DESC);
