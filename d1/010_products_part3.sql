-- 010_products_part3.sql
-- Orders 37-41 (edit3 — Absolues Précieuses, suite): full content replacement for
-- BNABS005-009. Design, images and section order are unchanged; only copy is replaced.
-- Idempotent: straight assignments, safe to re-run.

-- BNABS005
UPDATE products SET
  subtitle_fr = 'La Vibration Rosée Herbacée',
  subtitle_en = 'The Herbaceous Rosy Vibration',
  description_fr = 'Issue des parties aériennes de Pelargonium graveolens cultivé en Égypte, notre Absolue de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Contrairement à l''huile essentielle obtenue par distillation, l''Absolue offre une expression plus riche et plus profonde de la matière végétale, avec des facettes vertes, herbacées et florales.

Elle déploie une signature olfactive intensément verte et herbacée, soutenue par un cœur floral rosé et velouté, avec des nuances légèrement menthées, terreuses et balsamiques.

Une matière de caractère destinée à apporter relief, texture, naturel et tenue aux créations de parfumerie fine, notamment dans les accords floraux, fougères et chyprés.',
  short_description_fr = 'Issue des parties aériennes de Pelargonium graveolens cultivé en Égypte, notre Absolue de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Pelargonium Graveolens Extract","Numéro CAS : 90082-51-2 / 8000-46-2","Code SKU : BNABS005","Source Botanique : Pelargonium graveolens L''Hér. (Geraniaceae)","Origine : Égypte","Partie de la Plante : Feuilles et parties aériennes","Procédé : Extraction par solvants suivie d''une purification à l''éthanol à partir de la concrète de Géranium"]',
  organoleptic_fr = '["Aspect : Liquide mobile à légèrement visqueux","Couleur : Vert olive foncé à vert profond","Odeur : Puissante, florale et rosée, fortement herbacée, avec des facettes vertes, terreuses et légèrement menthées caractéristiques du Géranium égyptien","Indice de Réfraction @ 20°C : 1.4650 – 1.4950","Densité Relative @ 20°C : 0.9200 – 0.9550","Solubilité : Soluble dans l''éthanol et les huiles fixes appropriées"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Géranium fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Géranium d''Égypte – origine et traçabilité documentées.
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

1. Fiche Technique de l''Absolue (TDS) – BNABS005
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Pelargonium Graveolens Extract',
  cas = '90082-51-2 / 8000-46-2',
  origin = 'Égypte'
WHERE sku = 'BNABS005';

-- BNABS006
UPDATE products SET
  subtitle_fr = 'La Signature Anisée et Herbacée',
  subtitle_en = 'The Anise and Herbaceous Signature',
  description_fr = 'Issue des feuilles et sommités fleuries d''Ocimum basilicum cultivé en Égypte, notre Absolue de Basilic de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Elle dévoile une signature fraîche, verte et herbacée, enrichie de facettes épicées, anisées et légèrement réglissées.

Son caractère aromatique apporte de la vibration, de la fraîcheur, du relief et de la tension aux compositions de parfumerie fine, notamment dans les accords aromatiques, fougères et les colognes modernes.',
  short_description_fr = 'Issue des feuilles et sommités fleuries d''Ocimum basilicum cultivé en Égypte, notre Absolue de Basilic de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Ocimum Basilicum Extract","Numéro CAS : 84775-71-3 / 8015-73-4","Code SKU : BNABS006","Source Botanique : Ocimum basilicum L. (Lamiaceae)","Origine : Égypte","Partie de la Plante : Feuilles et sommités fleuries","Procédé : Extraction secondaire à l''éthanol à partir de la concrète de basilic"]',
  organoleptic_fr = '["Aspect : Liquide mobile à légèrement visqueux","Couleur : Vert foncé à brun verdâtre profond","Odeur : Fraîche, intensément herbacée et épicée, avec des facettes anisées, vertes et légèrement réglissées caractéristiques du basilic","Indice de Réfraction @ 20°C : 1.4800 – 1.5100","Densité Relative @ 20°C : 0.9300 – 0.9650","Solubilité : Insoluble ou faiblement soluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Basilic fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Basilic d''Égypte – origine et traçabilité documentées.
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

1. Fiche Technique de l''Absolue (TDS) – BNABS006
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Ocimum Basilicum Extract',
  cas = '84775-71-3 / 8015-73-4',
  origin = 'Égypte'
WHERE sku = 'BNABS006';

-- BNABS007
UPDATE products SET
  subtitle_fr = 'La Tension Ligneuse et Florale',
  subtitle_en = 'The Woody and Floral Tension',
  description_fr = 'Obtenue à partir de la concrète de Petitgrain Bigarade produite en Égypte, notre Absolue de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Elle révèle une expression profonde et texturée du bigaradier, associant des facettes vertes, fraîches et boisées à des nuances florales, herbacées et légèrement amères.

Son caractère apporte relief, tension, profondeur et tenue aux créations de parfumerie fine, notamment dans les accords fougères, boisés et les colognes modernes.',
  short_description_fr = 'Obtenue à partir de la concrète de Petitgrain Bigarade produite en Égypte, notre Absolue de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Citrus Aurantium Amara Leaf/Twig Extract","Numéro CAS : 8014-17-3 / 72968-50-4","Code SKU : BNABS007","Source Botanique : Citrus aurantium var. amara L. (Rutaceae)","Origine : Égypte","Partie de la Plante : Feuilles et jeunes rameaux","Procédé : Extraction secondaire à l''éthanol à partir de la concrète de Petitgrain Bigarade"]',
  organoleptic_fr = '["Aspect : Liquide mobile à légèrement visqueux","Couleur : Vert olive foncé à brun verdâtre","Odeur : Verte, fraîche et boisée, avec des facettes herbacées, florales et légèrement amères","Indice de Réfraction @ 20°C : 1.4850 – 1.5100","Densité Relative @ 20°C : 0.9400 – 0.9750","Solubilité : Insoluble ou faiblement soluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Petitgrain Bigarade fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Petitgrain Bigarade d''Égypte – origine et traçabilité documentées.
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

1. Fiche Technique de l''Absolue (TDS) – BNABS007
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Citrus Aurantium Amara Leaf/Twig Extract',
  cas = '8014-17-3 / 72968-50-4',
  origin = 'Égypte'
WHERE sku = 'BNABS007';

-- BNABS008
UPDATE products SET
  subtitle_fr = 'L''Opulence Florale Fruité-verte',
  subtitle_en = 'The Fruity-Green Floral Opulence',
  description_fr = 'Issue des fleurs de Jasminum sambac cultivées en Égypte, notre Absolue de Jasmin Sambac de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Elle dévoile une signature florale blanche intense, accompagnée de facettes fruitées, vertes et miellées, puis révèle progressivement un cœur indolique et sensuel aux nuances chaleureuses et légèrement animales.

Son caractère riche et expressif apporte vibration, profondeur, mystère et contraste aux créations de parfumerie fine, notamment dans les accords floraux, orientaux et les compositions modernes de niche.',
  short_description_fr = 'Issue des fleurs de Jasminum sambac cultivées en Égypte, notre Absolue de Jasmin Sambac de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Jasminum Sambac Flower Extract","Numéro CAS : 91770-14-8 / 1034798-23-6","Code SKU : BNABS008","Source Botanique : Jasminum sambac (L.) Aiton (Oleaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Extraction secondaire à l''éthanol à partir de la concrète de Jasmin Sambac"]',
  organoleptic_fr = '["Aspect : Liquide mobile à fluide, pouvant présenter un dépôt selon les conditions de conservation","Couleur : Orange foncé à brun rouge","Odeur : Intensément florale, fruitée et verte, avec des facettes miellées, indoliques et légèrement animales caractéristiques du Jasmin Sambac","Indice de Réfraction @ 20°C : 1.4900 – 1.5190","Densité Relative @ 20°C : 0.9500 – 0.9890","Solubilité : Insoluble ou faiblement soluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Jasmin Sambac fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Jasmin Sambac d''Égypte – origine et traçabilité documentées.
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

1. Fiche Technique de l''Absolue (TDS) – BNABS008
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Jasminum Sambac Flower Extract',
  cas = '91770-14-8 / 1034798-23-6',
  origin = 'Égypte'
WHERE sku = 'BNABS008';

-- BNABS009
UPDATE products SET
  subtitle_fr = 'La Force Verte, Cuirée et Métallique',
  subtitle_en = 'The Green, Leathery and Metallic Force',
  description_fr = 'Issue des feuilles de Viola odorata cultivées en Égypte, notre Absolue de Feuilles de Violette de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.

Elle dévoile une signature d''une grande verdeur, fraîche et herbacée, enrichie de facettes métalliques et végétales évoquant la sève fraîche et les feuilles froissées.

Son évolution révèle progressivement des nuances plus profondes, cuirées, boisées et terreuses, apportant caractère, tension et relief à la composition.

Une matière de caractère destinée à apporter vibration verte, profondeur et élégance aux créations de parfumerie fine, notamment dans les accords fougères, cuirés, boisés et les compositions masculines et mixtes.',
  short_description_fr = 'Issue des feuilles de Viola odorata cultivées en Égypte, notre Absolue de Feuilles de Violette de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Viola Odorata Leaf Extract","Numéro CAS : 8024-08-6 / 90131-42-3","Code SKU : BNABS009","Source Botanique : Viola odorata L. (Violaceae)","Origine : Égypte","Partie de la Plante : Feuilles","Procédé : Extraction secondaire à l''éthanol à partir de la concrète de feuilles de violette"]',
  organoleptic_fr = '["Aspect : Liquide visqueux, mobile à légèrement épais selon la température","Couleur : Vert foncé à brun verdâtre profond","Odeur : Intense, verte et herbacée, avec des facettes métalliques, végétales, cuirées, terreuses et boisées caractéristiques de la feuille de violette","Indice de Réfraction @ 20°C : 1.4750 – 1.5000","Densité Relative @ 20°C : 0.9200 – 0.9600","Solubilité : Insoluble ou faiblement soluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Feuilles de Violette fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Feuilles de Violette d''Égypte – origine et traçabilité documentées.
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

1. Fiche Technique de l''Absolue (TDS) – BNABS009
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Viola Odorata Leaf Extract',
  cas = '8024-08-6 / 90131-42-3',
  origin = 'Égypte'
WHERE sku = 'BNABS009';

