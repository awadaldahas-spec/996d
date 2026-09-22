-- 015_regulatory_unified.sql
-- Replaces the "Conformité" tab content (regulatory_fr) for ALL products
-- with a single unified text, as requested. Only regulatory_fr is touched;
-- description_fr, specifications_fr, organoleptic_fr, quality_fr,
-- confidentiality_fr, images, names, etc. are NOT modified.
-- Idempotent: straight assignment, safe to re-run.

UPDATE products SET
  regulatory_fr = 'Conformité Réglementaire & Sécurité

La matière est destinée à un usage professionnel et fait l''objet de contrôles qualité et d''analyses adaptés à sa nature et à son utilisation prévue.

Les exigences applicables de la réglementation européenne REACH sont évaluées selon la nature de la matière et son utilisation prévue.

Lorsque cela est applicable, les exigences et restrictions de l''IFRA sont prises en compte selon l''utilisation prévue de la matière.

Les données techniques et analytiques disponibles sont documentées dans le dossier technique du produit et du lot concernés.

Pour toute demande spécifique concernant la conformité, la documentation technique ou l''utilisation prévue, les informations et documents disponibles peuvent être fournis sur demande.';
