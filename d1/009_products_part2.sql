-- 009_products_part2.sql
-- Orders 33-36 (edit2 — Les Absolues Précieuses): full content replacement for
-- BNABS001-004. Design, images and section order are unchanged; only copy is replaced.
-- Idempotent: straight assignments, safe to re-run.

-- BNABS001
UPDATE products SET
  subtitle_fr = 'L''Énigme Florale Cuirée',
  subtitle_en = 'The Leathery Floral Enigma',
  description_fr = 'Mûrie sous le soleil d''hiver des plaines d''Égypte, notre Absolue de Cassie de Bostan Naturals est une matière première naturelle précieuse, recherchée pour la richesse de son profil olfactif.

Extraite des fleurs d''Acacia farnesiana, elle dévoile une signature complexe, florale, chaleureuse et miellée, enrichie de facettes poudrées, vertes, épicées et légèrement cuirées.

Son caractère profond et nuancé apporte du relief, du corps et une belle présence aux compositions de parfumerie fine, notamment dans les accords floraux, orientaux, poudrés et cuirés.',
  short_description_fr = 'Mûrie sous le soleil d''hiver des plaines d''Égypte, notre Absolue de Cassie de Bostan Naturals est une matière première naturelle précieuse, recherchée pour la richesse de son profil olfactif.',
  specifications_fr = '["Nom INCI : Acacia Farnesiana Flower Extract","Numéro CAS : 8023-82-3","Code SKU : BNABS001","Source Botanique : Acacia farnesiana (L.) Willd. (Fabaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Extraction secondaire à l''éthanol à partir de la concrète de première extraction"]',
  organoleptic_fr = '["Aspect : Liquide visqueux fluide à semi-liquide selon température","Couleur : Jaune ambré foncé à brun verdâtre profond","Odeur : Florale dense, poudrée, intensément miellée, avec des facettes boisées et cuirées et un sillage animal persistant","Indice de Réfraction @ 20°C : 1.4950–1.5200","Densité Relative @ 20°C : 0.9500–0.9900","Solubilité : Soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Cassie fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Les données relatives aux constituants et substances réglementées sont évaluées sur la base des données analytiques disponibles pour le produit et, lorsque nécessaire, du lot concerné, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Cassie d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des solvants résiduels :
Des analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d''extraction.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique de l''Absolue (TDS) – BNABS001
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Acacia Farnesiana Flower Extract',
  cas = '8023-82-3',
  origin = 'Égypte'
WHERE sku = 'BNABS001';

-- BNABS002
UPDATE products SET
  subtitle_fr = 'L''Opulence Florale Blanche Indolique',
  subtitle_en = 'The Indolic White Floral Opulence',
  description_fr = 'Récoltée à l''aube dans les champs de jasmin du delta du Nil, notre Absolue de Jasmin Grandiflorum de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Issue des fleurs de Jasminum grandiflorum, elle dévoile une signature florale blanche intense, douce et fruitée, enrichie de facettes miellées, vertes et légèrement épicées.

Son cœur révèle la richesse indolique caractéristique du jasmin, avec des nuances animales et balsamiques qui apportent profondeur, chaleur et sensualité à la composition.

Une matière de caractère destinée à apporter éclat, volume, rondeur et profondeur aux créations de parfumerie fine, notamment dans les accords floraux, orientaux et chyprés.',
  short_description_fr = 'Récoltée à l''aube dans les champs de jasmin du delta du Nil, notre Absolue de Jasmin Grandiflorum de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Jasminum Grandiflorum Flower Extract","Numéro CAS : 8022-96-6 / 84776-64-7","Code SKU : BNABS002","Source Botanique : Jasminum grandiflorum L. (Oleaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Extraction secondaire à l''éthanol à partir de la concrète de jasmin"]',
  organoleptic_fr = '["Aspect : Liquide mobile à fluide, limpide à légèrement trouble selon les conditions de conservation","Couleur : Brun orangé à rouge ambré profond","Odeur : Intensément florale, chaude et riche, avec des facettes fruitées, miellées, indoliques et légèrement animales caractéristiques du jasmin égyptien","Indice de Réfraction @ 20°C : 1.4880 – 1.5150","Densité Relative @ 20°C : 0.9500 – 0.9850","Solubilité : Soluble dans l''éthanol et les huiles fixes appropriées"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Jasmin Grandiflorum fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Jasmin Grandiflorum d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des solvants résiduels :
Des analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d''extraction.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique de l''Absolue (TDS) – BNABS002
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Jasminum Grandiflorum Flower Extract',
  cas = '8022-96-6 / 84776-64-7',
  origin = 'Égypte'
WHERE sku = 'BNABS002';

-- BNABS003
UPDATE products SET
  subtitle_fr = 'La Profondeur Florale de la Fleur d''Oranger',
  subtitle_en = 'The Floral Depth of Orange Blossom',
  description_fr = 'Extraite des fleurs de Citrus aurantium var. amara récoltées en Égypte, notre Absolue de Fleur d''Oranger de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la profondeur de son profil olfactif.

Contrairement au Néroli, obtenu par distillation des mêmes fleurs, l''Absolue révèle une expression plus dense, chaude et profonde de la fleur d''oranger.

Elle déploie une signature florale intense, douce et miellée, enrichie de facettes fruitées, vertes et indoliques, avec des nuances chaleureuses et légèrement animales.

Une matière de caractère destinée à apporter profondeur, rondeur, sensualité et persistance aux créations de parfumerie fine, notamment dans les accords floraux, orientaux et ambrés.',
  short_description_fr = 'Extraite des fleurs de Citrus aurantium var. amara récoltées en Égypte, notre Absolue de Fleur d''Oranger de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la profondeur de son profil olfactif.',
  specifications_fr = '["Nom INCI : Citrus Aurantium Amara Flower Extract","Numéro CAS : 8030-28-2 / 72968-50-4","Code SKU : BNABS003","Source Botanique : Citrus aurantium var. amara L. (Rutaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Extraction secondaire à l''éthanol à partir de la concrète de fleur d''oranger"]',
  organoleptic_fr = '["Aspect : Liquide visqueux, mobile à pâteux selon la température","Couleur : Brun ambré foncé à rouge orangé profond","Odeur : Puissante, florale et orangée, chaude et riche, avec des facettes miellées, vertes, indoliques et légèrement animales","Indice de Réfraction @ 20°C : 1.4900 – 1.5200","Densité Relative @ 20°C : 0.9500 – 0.9930","Solubilité : Soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Fleur d''Oranger fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Fleur d''Oranger d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des solvants résiduels :
Des analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d''extraction.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique de l''Absolue (TDS) – BNABS003
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Citrus Aurantium Amara Flower Extract',
  cas = '8030-28-2 / 72968-50-4',
  origin = 'Égypte'
WHERE sku = 'BNABS003';

-- BNABS004
UPDATE products SET
  subtitle_fr = 'La Richesse Gourmande et Ambrée',
  subtitle_en = 'The Gourmand and Amber Richness',
  description_fr = 'Issue des gousses mûres de Ceratonia siliqua cultivées en Égypte, notre Absolue de Caroube de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et l''originalité de son profil olfactif.

Elle dévoile une signature chaleureuse et gourmande, marquée par des facettes de caramel, de cacao, de fruits secs et de vanille, accompagnées de nuances boisées et balsamiques.

Son caractère dense et enveloppant apporte texture, profondeur, rondeur et une belle persistance aux compositions de parfumerie fine, notamment dans les accords ambrés, boisés, gourmands et cuirés.',
  short_description_fr = 'Issue des gousses mûres de Ceratonia siliqua cultivées en Égypte, notre Absolue de Caroube de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et l''originalité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Ceratonia Siliqua Fruit Extract","Numéro CAS : 84961-45-5 / 9000-40-2","Code SKU : BNABS004","Source Botanique : Ceratonia siliqua L. (Fabaceae)","Origine : Égypte","Partie de la Plante : Gousses / fruits","Procédé : Extraction secondaire à l''éthanol à partir de la concrète de caroube"]',
  organoleptic_fr = '["Aspect : Liquide visqueux épais à semi-solide selon la température","Couleur : Brun chocolat très foncé à brun ambré profond","Odeur : Chaleureuse, balsamique et gourmande, avec des facettes de caramel, cacao, fruits secs, vanille et nuances boisées","Indice de Réfraction @ 20°C : Valeurs typiques selon la nature et la concentration de la matière","Solubilité : Insoluble ou faiblement soluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Caroube fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil chromatographique et les caractéristiques pertinentes du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Caroube d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des solvants résiduels :
Des analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d''extraction.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique de l''Absolue (TDS) – BNABS004
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Ceratonia Siliqua Fruit Extract',
  cas = '84961-45-5 / 9000-40-2',
  origin = 'Égypte'
WHERE sku = 'BNABS004';

