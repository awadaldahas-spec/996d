-- 012_products_part5.sql
-- Orders 51-57 (edit5 — Les Huiles Essentielles): full text replacement for BNHE001-007.
-- TEXT ONLY. image, images, name_fr, name_en, subtitle_fr, subtitle_en, category_key
-- and sort_order are deliberately NOT touched (the document supplies no new titles).
-- Idempotent: straight assignments, safe to re-run.

-- BNHE001
UPDATE products SET
  description_fr = 'Obtenue par distillation à la vapeur des fleurs fraîches de Citrus aurantium var. amara récoltées en Égypte, notre Huile Essentielle de Néroli de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la finesse de son profil olfactif.

Elle dévoile une signature aérienne, fraîche et lumineuse, avec une ouverture zestée et verte, suivie d''un cœur floral blanc, délicatement miellé et légèrement poudré.

Sa fraîcheur florale et ses facettes vertes en font une matière de choix pour apporter lumière, fraîcheur et élégance aux compositions de parfumerie, notamment aux Eaux de Cologne et aux créations florales.',
  short_description_fr = 'Obtenue par distillation à la vapeur des fleurs fraîches de Citrus aurantium var. amara récoltées en Égypte, notre Huile Essentielle de Néroli de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la finesse de son profil olfactif.',
  specifications_fr = '["Nom INCI : Citrus Aurantium Amara Flower Oil","Numéro CAS : 8016-38-4 / 72968-50-4","Code SKU : BNHE001","Source Botanique : Citrus aurantium var. amara L. (Rutaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Distillation à la vapeur des fleurs fraîches de bigaradier"]',
  organoleptic_fr = '["Aspect : Liquide mobile","Couleur : Jaune pâle à ambré clair","Odeur : Puissante, fraîche, florale, zestée et verte, avec des facettes miellées","Indice de Réfraction @ 20°C : 1.4630 – 1.4740","Densité Relative @ 20°C : 0.8640 – 0.8760","Pouvoir Rotatoire @ 20°C : +1.0 à +11.0","Solubilité : Soluble dans l''éthanol, les huiles fixes et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Huile Essentielle de Néroli fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Les constituants soumis à déclaration réglementaire, notamment certains allergènes naturellement présents dans l''huile essentielle, sont évalués sur la base des données analytiques disponibles pour le produit et, lorsque nécessaire, du lot concerné, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Néroli d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des constituants :
Les constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique (TDS) – BNHE001
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Citrus Aurantium Amara Flower Oil',
  cas = '8016-38-4 / 72968-50-4',
  origin = 'Égypte'
WHERE sku = 'BNHE001';

-- BNHE002
UPDATE products SET
  description_fr = 'Obtenue par distillation à la vapeur des feuilles et jeunes rameaux de Citrus aurantium var. amara récoltés en Égypte, notre Huile Essentielle de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la fraîcheur de son profil olfactif.

Elle révèle une signature verte, fraîche et boisée, soutenue par des facettes herbacées, florales et légèrement amères.

Sa structure apporte énergie, tension, fraîcheur et profondeur aux compositions de parfumerie, notamment aux colognes, accords fougères et créations boisées.',
  short_description_fr = 'Obtenue par distillation à la vapeur des feuilles et jeunes rameaux de Citrus aurantium var. amara récoltés en Égypte, notre Huile Essentielle de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la fraîcheur de son profil olfactif.',
  specifications_fr = '["Nom INCI : Citrus Aurantium Amara Leaf/Twig Oil","Numéro CAS : 8014-17-3 / 72968-50-4","Code SKU : BNHE002","Source Botanique : Citrus aurantium var. amara L. (Rutaceae)","Origine : Égypte","Partie de la Plante : Feuilles et jeunes rameaux","Procédé : Distillation à la vapeur des feuilles et jeunes rameaux"]',
  organoleptic_fr = '["Aspect : Liquide mobile","Couleur : Jaune pâle à jaune-vert","Odeur : Fraîche, verte, herbacée, boisée et légèrement amère, avec des facettes florales","Indice de Réfraction @ 20°C : 1.4600 – 1.4720","Densité Relative @ 20°C : 0.8800 – 0.8990","Pouvoir Rotatoire @ 20°C : -5 à +1","Solubilité : Soluble dans l''éthanol, les huiles fixes et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Huile Essentielle de Petitgrain Bigarade fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Les données analytiques disponibles permettent de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Petitgrain Bigarade d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des constituants :
Les constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique (TDS) – BNHE002
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Citrus Aurantium Amara Leaf/Twig Oil',
  cas = '8014-17-3 / 72968-50-4',
  origin = 'Égypte'
WHERE sku = 'BNHE002';

-- BNHE003
UPDATE products SET
  description_fr = 'Issue des feuilles et parties aériennes de Pelargonium graveolens cultivé en Égypte et obtenue par distillation à la vapeur, notre Huile Essentielle de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Elle dévoile une signature florale rosée et verte, fraîche et herbacée, enrichie de facettes épicées, menthées et légèrement boisées.

Son caractère apporte relief, fraîcheur, naturel et vibration aux compositions de parfumerie fine, notamment dans les accords floraux, fougères et chyprés.',
  short_description_fr = 'Issue des feuilles et parties aériennes de Pelargonium graveolens cultivé en Égypte et obtenue par distillation à la vapeur, notre Huile Essentielle de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Pelargonium Graveolens Oil","Numéro CAS : 90082-51-2 / 8000-46-2","Code SKU : BNHE003","Source Botanique : Pelargonium graveolens L''Hér. (Geraniaceae)","Origine : Égypte","Partie de la Plante : Feuilles et parties aériennes","Procédé : Distillation à la vapeur de la matière végétale fraîche"]',
  organoleptic_fr = '["Aspect : Liquide mobile","Couleur : Jaune ambré clair à vert pâle","Odeur : Puissante, florale et rosée, verte, fraîche, menthée et épicée","Indice de Réfraction @ 20°C : 1.4610 – 1.4720","Densité Relative @ 20°C : 0.8840 – 0.9010","Pouvoir Rotatoire @ 20°C : -14 à -7","Solubilité : Soluble dans l''éthanol, les huiles fixes et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Huile Essentielle de Géranium fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Les données analytiques disponibles permettent de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l''évaluation réglementaire et la formulation de vos parfums finis.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Géranium d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des constituants :
Les constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique (TDS) – BNHE003
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Pelargonium Graveolens Oil',
  cas = '90082-51-2 / 8000-46-2',
  origin = 'Égypte'
WHERE sku = 'BNHE003';

-- BNHE004
UPDATE products SET
  description_fr = 'Distillée à partir des capitules floraux de camomille matricaire issus d''Égypte, notre Huile Essentielle de Camomille Bleue se distingue par sa couleur bleu profond caractéristique, liée à la formation naturelle de chamazulène au cours du processus de distillation.

Son profil olfactif révèle une signature aromatique complexe, avec une attaque herbacée et légèrement fruitée, des nuances chaudes et aromatiques au cœur, puis un fond plus profond, terreux, balsamique et foin.

Une matière première de caractère destinée aux compositions de parfumerie fine et de niche, notamment dans les accords aromatiques, boisés, ambrés et herbacés, où elle apporte profondeur, couleur et personnalité.',
  short_description_fr = 'Distillée à partir des capitules floraux de camomille matricaire issus d''Égypte, notre Huile Essentielle de Camomille Bleue se distingue par sa couleur bleu profond caractéristique, liée à la formation naturelle de chamazulène au cours du processus de distillation.',
  specifications_fr = '["Nom INCI : Chamomilla Recutita Flower Oil","Numéro CAS : 8002-66-2 / 84082-60-0","Code SKU : BNHE004","Source Botanique : Matricaria recutita L. / Matricaria chamomilla L. (Asteraceae)","Origine : Égypte","Partie de la Plante : Capitules floraux","Procédé : Distillation à la vapeur"]',
  organoleptic_fr = '["Aspect : Liquide mobile à légèrement visqueux","Couleur : Bleu profond à bleu nuit caractéristique","Odeur : Puissante, aromatique et herbacée, fruitée, chaude, balsamique et foin","Indice de Réfraction @ 20°C : 1.4800 – 1.5100","Densité Relative @ 20°C : 0.9100 – 0.9550","Solubilité : Soluble dans l''éthanol et les huiles compatibles et solvants de parfumerie appropriés"]',
  regulatory_fr = 'Conformité aux Exigences Applicables

Notre Huile Essentielle de Camomille Bleue est destinée à un usage professionnel et fait l''objet d''une évaluation documentaire adaptée à sa nature et à son utilisation prévue.

Les exigences applicables de la réglementation européenne REACH ainsi que les restrictions applicables de l''IFRA pour l''utilisation prévue en parfumerie sont prises en compte.

Les variations naturelles liées à l''origine, à la matière végétale et au procédé de distillation sont prises en considération. Les principaux constituants volatils, notamment le chamazulène et les oxydes de bisabolol, peuvent être évalués par chromatographie lorsque cela est applicable au produit et au lot.',
  quality_fr = 'Contrôle Qualité :
Chaque lot commercialisé fait l''objet de contrôles qualité adaptés.
Profil Chromatographique :
Une analyse GC-MS est disponible pour chaque lot commercialisé.
Traçabilité :
L''origine et la traçabilité sont documentées jusqu''au conditionnement commercial.
Conditionnement :
Conditionnement de transport adapté à la protection de la matière contre la lumière et les conditions environnementales applicables.
Traçabilité du conditionnement :
Chaque unité est identifiée par le nom du produit, le SKU, le numéro de lot et les informations de traçabilité applicables.',
  confidentiality_fr = 'Documentation Technique du Lot

Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale.

Documents disponibles :

1. Télécharger profil GC-MS
2. Certificat d''Analyse (COA) – BNHE004
3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Chamomilla Recutita Flower Oil',
  cas = '8002-66-2 / 84082-60-0',
  origin = 'Égypte'
WHERE sku = 'BNHE004';

-- BNHE005
UPDATE products SET
  description_fr = 'Obtenue par distillation à la vapeur des sommités fleuries d''Origanum majorana cultivé en Égypte, notre Huile Essentielle de Marjolaine de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour sa richesse aromatique et sa douceur épicée.

Elle révèle une signature fraîche, herbacée et chaleureuse, avec des facettes boisées, légèrement épicées et camphrées.

Une matière polyvalente destinée aux compositions aromatiques, fougères, boisées et aux créations de parfumerie fine recherchant chaleur et relief.',
  short_description_fr = 'Obtenue par distillation à la vapeur des sommités fleuries d''Origanum majorana cultivé en Égypte, notre Huile Essentielle de Marjolaine de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour sa richesse aromatique et sa douceur épicée.',
  specifications_fr = '["Nom INCI : Origanum Majorana Flower Oil","Numéro CAS : 8015-01-8 / 84082-58-6","Code SKU : BNHE005","Source Botanique : Origanum majorana L. (syn. Majorana hortensis Moench) (Lamiaceae)","Origine : Égypte","Partie de la Plante : Sommités fleuries et parties aériennes","Procédé : Distillation à la vapeur"]',
  organoleptic_fr = '["Aspect : Liquide mobile, limpide","Couleur : Jaune pâle à jaune-vert","Odeur : Puissante, aromatique, fraîche et herbacée, chaude, boisée, légèrement épicée et camphrée","Indice de Réfraction @ 20°C : 1.4650 – 1.4800","Densité Relative @ 20°C : 0.8800 – 0.9100","Pouvoir Rotatoire @ 20°C : +12 à +25","Solubilité : Soluble dans l''éthanol, les huiles fixes et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Huile Essentielle de Marjolaine fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Les principaux constituants, notamment le terpinène-4-ol, le gamma-terpinène et le linalol, peuvent être évalués par chromatographie selon les données analytiques disponibles pour le produit et le lot.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Marjolaine d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des constituants :
Les constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique (TDS) – BNHE005
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Origanum Majorana Flower Oil',
  cas = '8015-01-8 / 84082-58-6',
  origin = 'Égypte'
WHERE sku = 'BNHE005';

-- BNHE006
UPDATE products SET
  description_fr = 'Obtenue par distillation à la vapeur des fruits de Coriandrum sativum cultivés en Égypte, notre Huile Essentielle de Graines de Coriandre de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, naturellement riche en linalool et sélectionnée pour sa fraîcheur aromatique.

Elle dévoile une signature fraîche, épicée et herbacée, soutenue par des facettes boisées, légèrement florales et zestées.

Son profil apporte éclat, fraîcheur et vibration aux compositions aromatiques, boisées, florales et aux créations de parfumerie fine.',
  short_description_fr = 'Obtenue par distillation à la vapeur des fruits de Coriandrum sativum cultivés en Égypte, notre Huile Essentielle de Graines de Coriandre de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, naturellement riche en linalool et sélectionnée pour sa fraîcheur aromatique.',
  specifications_fr = '["Nom INCI : Coriandrum Sativum Fruit Oil","Numéro CAS : 8008-52-4 / 84775-50-8","Code SKU : BNHE006","Source Botanique : Coriandrum sativum L. (Apiaceae)","Origine : Égypte","Partie de la Plante : Fruits / graines","Procédé : Distillation à la vapeur"]',
  organoleptic_fr = '["Aspect : Liquide mobile, limpide","Couleur : Incolore à jaune pâle","Odeur : Fraîche, épicée, herbacée et boisée, légèrement aromatique et florale","Indice de Réfraction @ 20°C : 1.4620 – 1.4700","Densité Relative @ 20°C : 0.8600 – 0.8800","Pouvoir Rotatoire @ 20°C : +8 à +15","Solubilité : Soluble dans l''éthanol, les huiles fixes et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Huile Essentielle de Graines de Coriandre fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Les principaux constituants, notamment le linalool, le gamma-terpinène, le limonène, le camphre et le géraniol, peuvent être évalués par chromatographie selon les données analytiques disponibles pour le produit et le lot.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Graines de Coriandre d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des constituants :
Les constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique (TDS) – BNHE006
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Coriandrum Sativum Fruit Oil',
  cas = '8008-52-4 / 84775-50-8',
  origin = 'Égypte'
WHERE sku = 'BNHE006';

-- BNHE007
UPDATE products SET
  description_fr = 'Obtenue par distillation à la vapeur des graines de Cuminum cyminum cultivées en Égypte, notre Huile Essentielle de Cumin de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour son caractère aromatique puissant et singulier.

Elle révèle une signature chaude et épicée, avec des notes piquantes, vertes et aromatiques, évoluant vers des facettes chaudes, terreuses, boisées et balsamiques.

Une matière de caractère destinée notamment aux créations de parfumerie de niche, aux accords cuirés, ambrés et boisés, où elle apporte chaleur, tension et profondeur.',
  short_description_fr = 'Obtenue par distillation à la vapeur des graines de Cuminum cyminum cultivées en Égypte, notre Huile Essentielle de Cumin de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour son caractère aromatique puissant et singulier.',
  specifications_fr = '["Nom INCI : Cuminum Cyminum Seed Oil","Numéro CAS : 8014-13-9 / 84775-51-9","Code SKU : BNHE007","Source Botanique : Cuminum cyminum L. (Apiaceae)","Origine : Égypte","Partie de la Plante : Graines","Procédé : Distillation à la vapeur de graines séchées"]',
  organoleptic_fr = '["Aspect : Liquide mobile, limpide, avec une légère évolution de viscosité selon les conditions","Couleur : Jaune pâle à ambré","Odeur : Très puissante, épicée, chaude, terreuse et aromatique, avec une légère facette amère","Indice de Réfraction @ 20°C : 1.4900 – 1.5080","Densité Relative @ 20°C : 0.9050 – 0.9300","Pouvoir Rotatoire @ 20°C : +1 à +8","Solubilité : Soluble dans l''éthanol, les huiles fixes et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Huile Essentielle de Cumin fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA pour son utilisation prévue en parfumerie.

Le cuminaldéhyde et les autres constituants volatils pertinents peuvent être évalués par chromatographie selon les données analytiques disponibles pour le produit et le lot.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Cumin d''Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière.
Une analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l''authenticité et la qualité de la matière première.
Contrôle des constituants :
Les constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Fiche Technique (TDS) – BNHE007
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Cuminum Cyminum Seed Oil',
  cas = '8014-13-9 / 84775-51-9',
  origin = 'Égypte'
WHERE sku = 'BNHE007';

