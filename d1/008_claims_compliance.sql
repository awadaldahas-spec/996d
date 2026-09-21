-- 008_claims_compliance.sql
-- Aligns product copy in D1 with the approved claim wording (edit 1 — orders 03, 11, 13, 14, 15, 18, 22).
-- Removes unsubstantiated certification / absolute-purity claims and the "producteur" positioning.
-- Idempotent: every statement is a targeted REPLACE, safe to re-run.

-- ---------------------------------------------------------------------------
-- Order 13 — "100% Pure ..." origin claims -> "Matière première naturelle"
-- ---------------------------------------------------------------------------
UPDATE products SET origin = REPLACE(origin, 'Égypte (100% Pure & Naturelle)', 'Égypte (Matière première naturelle)');
UPDATE products SET origin = REPLACE(origin, 'Égypte (100% Pure, Naturelle & Intègre)', 'Égypte (Matière première naturelle)');
UPDATE products SET origin = REPLACE(origin, 'Égypte (100% Pure, Naturelle & Non altérée)', 'Égypte (Matière première naturelle)');
UPDATE products SET origin = REPLACE(origin, 'Égypte (100% Pure, Naturelle & Pure Souche)', 'Égypte (Matière première naturelle)');
UPDATE products SET origin = REPLACE(origin, 'Égypte (100% Pure, Naturelle, Première Pression à Froid mécanique, Non Raffinée)', 'Égypte (Matière première naturelle, Première Pression à Froid mécanique, Non Raffinée)');
UPDATE products SET origin = REPLACE(origin, 'Égypte (100% Pure, Naturelle, Première Pression à Froid mécanique)', 'Égypte (Matière première naturelle, Première Pression à Froid mécanique)');
UPDATE products SET origin = REPLACE(origin, 'Égypte (100% Pure, Naturelle, Première Pression à Froid, Non Raffinée)', 'Égypte (Matière première naturelle, Première Pression à Froid, Non Raffinée)');
UPDATE products SET origin = REPLACE(origin, 'Égypte (100% Pure, Première Pression à Froid, Ultra-Filtrée)', 'Égypte (Matière première naturelle, Première Pression à Froid, Ultra-Filtrée)');

-- The same "Origine : ..." line is also stored inside the specifications_fr JSON array.
UPDATE products SET specifications_fr = REPLACE(specifications_fr, 'Égypte (100% Pure & Naturelle)', 'Égypte (Matière première naturelle)');
UPDATE products SET specifications_fr = REPLACE(specifications_fr, 'Égypte (100% Pure, Naturelle & Intègre)', 'Égypte (Matière première naturelle)');
UPDATE products SET specifications_fr = REPLACE(specifications_fr, 'Égypte (100% Pure, Naturelle & Non altérée)', 'Égypte (Matière première naturelle)');
UPDATE products SET specifications_fr = REPLACE(specifications_fr, 'Égypte (100% Pure, Naturelle & Pure Souche)', 'Égypte (Matière première naturelle)');
UPDATE products SET specifications_fr = REPLACE(specifications_fr, 'Égypte (100% Pure, Naturelle, Première Pression à Froid mécanique, Non Raffinée)', 'Égypte (Matière première naturelle, Première Pression à Froid mécanique, Non Raffinée)');
UPDATE products SET specifications_fr = REPLACE(specifications_fr, 'Égypte (100% Pure, Naturelle, Première Pression à Froid mécanique)', 'Égypte (Matière première naturelle, Première Pression à Froid mécanique)');
UPDATE products SET specifications_fr = REPLACE(specifications_fr, 'Égypte (100% Pure, Naturelle, Première Pression à Froid, Non Raffinée)', 'Égypte (Matière première naturelle, Première Pression à Froid, Non Raffinée)');
UPDATE products SET specifications_fr = REPLACE(specifications_fr, 'Égypte (100% Pure, Première Pression à Froid, Ultra-Filtrée)', 'Égypte (Matière première naturelle, Première Pression à Froid, Ultra-Filtrée)');

-- ---------------------------------------------------------------------------
-- Orders 03 / 11 / 14 / 15 — drop the word "certifié" from quality headings
-- ---------------------------------------------------------------------------
UPDATE products SET quality_fr = REPLACE(quality_fr, 'Qualité Botanique Certifiée :', 'Qualité Botanique Documentée :');
UPDATE products SET quality_fr = REPLACE(quality_fr, 'Certification d''Origine Géographique :', 'Origine Géographique Documentée :');
UPDATE products SET quality_fr = REPLACE(quality_fr, 'Origine Égyptienne 100% Traçable :', 'Origine Égyptienne Traçable :');

-- ---------------------------------------------------------------------------
-- Orders 13 / 18 — absolute origin & purity claims in quality text
-- ---------------------------------------------------------------------------
UPDATE products SET quality_fr = REPLACE(quality_fr, '100% Caroube d''Égypte issue de cultures locales contrôlées.', 'Caroube d''Égypte issue de cultures locales contrôlées.');
UPDATE products SET quality_fr = REPLACE(quality_fr, '100% Cassie d''Égypte issue de cultures locales rigoureusement contrôlées.', 'Cassie d''Égypte issue de cultures locales rigoureusement contrôlées.');
UPDATE products SET quality_fr = REPLACE(quality_fr, '100% Géranium d''Égypte issu de cultures locales contrôlées.', 'Géranium d''Égypte issu de cultures locales contrôlées.');
UPDATE products SET quality_fr = REPLACE(quality_fr, '100% Jasmin d''Égypte récolté à la main par des filières durables.', 'Jasmin d''Égypte récolté à la main par des filières durables.');
UPDATE products SET quality_fr = REPLACE(quality_fr, '100% Jasmin d''Égypte issu de récoltes écoresponsables tracées.', 'Jasmin d''Égypte issu de récoltes écoresponsables tracées.');
UPDATE products SET quality_fr = REPLACE(quality_fr, 'Basilic cultivé et récolté localement, certifié 100% égyptien.', 'Basilic cultivé et récolté localement en Égypte.');

-- Arabic text that leaked into the French copy (BNABS009 / BNCON009)
UPDATE products SET quality_fr = REPLACE(quality_fr, 'Fleurs de فل égyptien à 100% issues de nos filières contrôlées.', 'Fleurs de jasmin Sambac égyptien issues de nos filières contrôlées.');

-- ---------------------------------------------------------------------------
-- Order 18 — absolute purity claims in regulatory text
-- ---------------------------------------------------------------------------
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Produit 100% naturel et tracé par lot dans nos laboratoires', 'Matière première naturelle, tracée par lot');
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Produit 100% naturel et tracé,', 'Matière première naturelle et tracée,');
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Produit 100% naturel et tracé', 'Matière première naturelle et tracée');
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Chez Bostan Naturals, la pureté est certifiée.', 'Chez Bostan Naturals, la pureté est documentée.');
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Notre Huile de Jojoba Dorée est exempte de tout additif, conservateur ou solvant chimique.', 'Notre Huile de Jojoba Dorée est produite sans ajout d''additif, de conservateur ni de solvant chimique.');

-- ---------------------------------------------------------------------------
-- Order 22 — "homologation" -> approved evaluation wording
-- ---------------------------------------------------------------------------
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'de faciliter l''homologation de vos parfums finis', 'de faciliter l''évaluation réglementaire et la formulation de vos parfums finis');

-- ---------------------------------------------------------------------------
-- Orders 14 / 15 / 18 — documents must not claim to "certify" purity
-- ---------------------------------------------------------------------------
UPDATE products SET confidentiality_fr = REPLACE(confidentiality_fr, 'Empreinte chromatographique certifiant la pureté à 100%', 'Empreinte chromatographique documentant la pureté');
UPDATE products SET confidentiality_fr = REPLACE(confidentiality_fr, 'Analyse chromatographique d''authenticité 100%', 'Analyse chromatographique d''authenticité');
UPDATE products SET confidentiality_fr = REPLACE(confidentiality_fr, 'Analyse GC certifiant l''authenticité et la pureté', 'Analyse GC documentant l''authenticité et la pureté');
UPDATE products SET confidentiality_fr = REPLACE(confidentiality_fr, 'Analyse par chromatographie certifiant la pureté', 'Analyse par chromatographie documentant la pureté');
UPDATE products SET confidentiality_fr = REPLACE(confidentiality_fr, 'Analyse par chromatographie certifiant le taux d''Oméga-5', 'Analyse par chromatographie documentant le taux d''Oméga-5');
UPDATE products SET confidentiality_fr = REPLACE(confidentiality_fr, 'Certificat de pureté moléculaire', 'Rapport de pureté moléculaire');
UPDATE products SET confidentiality_fr = REPLACE(confidentiality_fr, 'Certificat de pureté des Cires Spécifique au Lot', 'Rapport de pureté des Cires Spécifique au Lot');

-- ---------------------------------------------------------------------------
-- Orders 14 / 15 / 18 — residual certification & absolute claims found in D1
-- (these variants exist only in the seeded database, not in data/products.ts)
-- ---------------------------------------------------------------------------
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Certifiée 100% pure et sans altération, elle', 'Matière première naturelle dont l''authenticité est documentée par lot, elle');
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'La Concrète de Caroube Bostan Naturals garantit l''absence totale d''additifs ou de cires de remplissage synthétiques. Produit 100% tracé et conforme, il', 'La Concrète de Caroube Bostan Naturals est produite sans ajout d''additif ni de cire de remplissage synthétique. Matière première tracée et conforme, elle');
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Sécurité Moléculaire & Certification IFRA', 'Sécurité Moléculaire & Conformité IFRA');
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Sécurité Dermatologique Certifiée & REACH', 'Sécurité Dermatologique & Conformité REACH');
UPDATE products SET regulatory_fr = REPLACE(regulatory_fr, 'Chez Bostan Naturals, la pureté est indiscutable.', 'Chez Bostan Naturals, la pureté est documentée.');

-- ---------------------------------------------------------------------------
-- Untranslated Arabic word left in customer-facing copy (jasmin Sambac)
-- ---------------------------------------------------------------------------
UPDATE products SET short_description_fr = REPLACE(short_description_fr, 'la fleur de فل', 'la fleur de jasmin Sambac');
UPDATE products SET description_fr       = REPLACE(description_fr,       'la fleur de فل', 'la fleur de jasmin Sambac');
UPDATE products SET short_description_en = REPLACE(short_description_en, 'the flower of فل', 'the Sambac jasmine flower');
