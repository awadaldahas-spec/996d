-- 011_products_part4.sql
-- Orders 42-50 (edit4 — Les Concrètes Raw): full text replacement for BNCON001-009.
-- TEXT ONLY. image, images, name_fr, name_en, subtitle_fr, subtitle_en, category_key
-- and sort_order are deliberately NOT touched (the document supplies no new titles).
-- Idempotent: straight assignments, safe to re-run.

-- BNCON001
UPDATE products SET
  description_fr = 'Obtenue par extraction primaire aux solvants volatils à partir des fleurs d''Acacia farnesiana récoltées en Égypte, notre Concrète de Cassie de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.

Cette matière cireuse concentre les constituants aromatiques de la fleur ainsi qu''une partie des cires et matières lipophiles naturellement présentes dans la plante.

Elle déploie un profil floral, chaud et poudré, aux facettes miellées, vertes et boisées, avec une profondeur herbacée et cuirée.

Matière intermédiaire précieuse de la chaîne d''extraction de la Cassie, la Concrète peut être soumise à une purification alcoolique ultérieure pour obtenir l''Absolue de Cassie destinée à la parfumerie fine.',
  short_description_fr = 'Obtenue par extraction primaire aux solvants volatils à partir des fleurs d''Acacia farnesiana récoltées en Égypte, notre Concrète de Cassie de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Acacia Farnesiana Flower Extract","Numéro CAS : 8023-82-3","Code SKU : BNCON001","Source Botanique : Acacia farnesiana (L.) Willd. (Fabaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Première extraction aux solvants volatils à partir de fleurs de Cassie"]',
  organoleptic_fr = '["Aspect : masse solide cireuse à semi-solide","Couleur : jaune ambré foncé à brun verdâtre profond","Odeur : florale chaude poudrée, facettes miellées, vertes, boisées et herbacées","Point de Fusion : 45–52°C","Solubilité : Insoluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Cassie fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON001
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Acacia Farnesiana Flower Extract',
  cas = '8023-82-3',
  origin = 'Égypte'
WHERE sku = 'BNCON001';

-- BNCON002
UPDATE products SET
  description_fr = 'Obtenue par extraction primaire aux solvants volatils à partir des fleurs de Jasminum grandiflorum récoltées en Égypte, notre Concrète de Jasmin Grandiflorum de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Cette matière cireuse concentre les constituants aromatiques de la fleur ainsi qu''une partie des cires et matières lipophiles naturellement présentes.

Elle révèle une signature florale blanche intense, chaude et riche, aux facettes fruitées, miellées et indoliques, avec des nuances vertes et légèrement animales.

Matière intermédiaire précieuse de la chaîne d''extraction du jasmin, la Concrète peut être soumise à une purification alcoolique ultérieure pour obtenir l''Absolue de Jasmin destinée à la parfumerie fine.',
  short_description_fr = 'Obtenue par extraction primaire aux solvants volatils à partir des fleurs de Jasminum grandiflorum récoltées en Égypte, notre Concrète de Jasmin Grandiflorum de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Jasminum Grandiflorum Flower Extract","Numéro CAS : 8022-96-6 / 84776-64-7","Code SKU : BNCON002","Source Botanique : Jasminum grandiflorum L. (Oleaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Première extraction aux solvants volatils à partir de fleurs de Jasmin Grandiflorum"]',
  organoleptic_fr = '["Aspect : masse cireuse à semi-solide","Couleur : brun orangé à rouge ambré","Odeur : florale blanche, chaude et riche, fruitée, miellée et indolique","Point de Fusion : 46–52°C","Solubilité : Insoluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Jasmin Grandiflorum fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON002
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Jasminum Grandiflorum Flower Extract',
  cas = '8022-96-6 / 84776-64-7',
  origin = 'Égypte'
WHERE sku = 'BNCON002';

-- BNCON003
UPDATE products SET
  description_fr = 'Obtenue par extraction primaire aux solvants volatils à partir des fleurs de Citrus aurantium var. amara récoltées en Égypte, notre Concrète de Fleur d''Oranger de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la profondeur de son profil olfactif.

Elle concentre les constituants aromatiques de la fleur ainsi qu''une partie des cires et matières lipophiles naturellement présentes.

Elle déploie une signature florale intense, douce et orangée, aux facettes miellées, vertes, cireuses et indoliques, avec des nuances chaleureuses et légèrement animales.

Matière intermédiaire destinée notamment à la purification alcoolique ultérieure pour l''obtention d''un extrait de type Absolue de Fleur d''Oranger.',
  short_description_fr = 'Obtenue par extraction primaire aux solvants volatils à partir des fleurs de Citrus aurantium var. amara récoltées en Égypte, notre Concrète de Fleur d''Oranger de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la profondeur de son profil olfactif.',
  specifications_fr = '["Nom INCI : Citrus Aurantium Amara Flower Extract","Numéro CAS : 8030-28-2 / 72968-50-4","Code SKU : BNCON003","Source Botanique : Citrus aurantium var. amara L. (Rutaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Première extraction aux solvants volatils à partir de fleurs de Fleur d''Oranger"]',
  organoleptic_fr = '["Aspect : masse cireuse à compacte","Couleur : brun ambré à rouge orangé","Odeur : florale, orangée, douce et miellée, avec des facettes vertes, cireuses, indoliques et légèrement animales","Point de Fusion : 47–54°C","Solubilité : Insoluble dans l''eau ; soluble dans les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Fleur d''Oranger fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON003
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Citrus Aurantium Amara Flower Extract',
  cas = '8030-28-2 / 72968-50-4',
  origin = 'Égypte'
WHERE sku = 'BNCON003';

-- BNCON004
UPDATE products SET
  description_fr = 'Issue des gousses mûres de Ceratonia siliqua cultivées en Égypte, notre Concrète de Caroube de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et l''originalité de son profil olfactif.

Elle concentre les constituants aromatiques ainsi qu''une partie des matières cireuses et lipophiles naturellement présentes dans la matière végétale.

Elle dévoile une signature chaleureuse, balsamique et gourmande, marquée par des facettes de caramel, cacao, fruits secs et nuances boisées.

Matière intermédiaire précieuse pouvant être soumise à une purification alcoolique ultérieure pour obtenir l''Absolue de Caroube destinée à la parfumerie fine.',
  short_description_fr = 'Issue des gousses mûres de Ceratonia siliqua cultivées en Égypte, notre Concrète de Caroube de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et l''originalité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Ceratonia Siliqua Fruit Extract","Numéro CAS : 84961-45-5 / 9000-40-2","Code SKU : BNCON004","Source Botanique : Ceratonia siliqua L. (Fabaceae)","Origine : Égypte","Partie de la Plante : Gousses / fruits","Procédé : Première extraction aux solvants volatils à partir de gousses de caroube"]',
  organoleptic_fr = '["Aspect : masse cireuse compacte à semi-solide","Couleur : brun chocolat très foncé à brun ambré profond","Odeur : chaleureuse, balsamique et gourmande, avec des facettes caramel, cacao, fruits secs et boisées","Point de Fusion : 49–56°C","Solubilité : Faiblement soluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Caroube fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON004
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Ceratonia Siliqua Fruit Extract',
  cas = '84961-45-5 / 9000-40-2',
  origin = 'Égypte'
WHERE sku = 'BNCON004';

-- BNCON005
UPDATE products SET
  description_fr = 'Issue des parties aériennes de Pelargonium graveolens cultivé en Égypte, notre Concrète de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Cette matière cireuse concentre les constituants aromatiques de la plante ainsi qu''une partie des matières lipophiles naturellement présentes.

Elle déploie une signature verte, herbacée et florale, soutenue par un cœur rosé et velouté, avec des nuances terreuses, menthées et légèrement balsamiques.

Matière intermédiaire pouvant être soumise à une purification alcoolique ultérieure pour obtenir l''Absolue de Géranium destinée à la parfumerie fine.',
  short_description_fr = 'Issue des parties aériennes de Pelargonium graveolens cultivé en Égypte, notre Concrète de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Pelargonium Graveolens Extract","Numéro CAS : 90082-51-2 / 8000-46-2","Code SKU : BNCON005","Source Botanique : Pelargonium graveolens L''Hér. (Geraniaceae)","Origine : Égypte","Partie de la Plante : Feuilles et parties aériennes","Procédé : Première extraction aux solvants volatils à partir de la matière végétale de Géranium"]',
  organoleptic_fr = '["Aspect : masse cireuse compacte","Couleur : vert olive foncé à vert émeraude","Odeur : puissante, florale et rosée, fortement herbacée, verte, menthée et terreuse","Point de Fusion : 44–51°C","Solubilité : Insoluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Géranium fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON005
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Pelargonium Graveolens Extract',
  cas = '90082-51-2 / 8000-46-2',
  origin = 'Égypte'
WHERE sku = 'BNCON005';

-- BNCON006
UPDATE products SET
  description_fr = 'Issue des feuilles et sommités fleuries d''Ocimum basilicum cultivé en Égypte, notre Concrète de Basilic de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Elle concentre les constituants aromatiques ainsi qu''une partie des matières cireuses et lipophiles naturellement présentes.

Elle révèle une signature fraîche, verte, herbacée et épicée, avec des facettes anisées, réglissées et légèrement cireuses.

Matière intermédiaire pouvant être soumise à une purification alcoolique ultérieure pour obtenir l''Absolue de Basilic destinée à la parfumerie fine.',
  short_description_fr = 'Issue des feuilles et sommités fleuries d''Ocimum basilicum cultivé en Égypte, notre Concrète de Basilic de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Ocimum Basilicum Extract","Numéro CAS : 8015-73-4 / 84775-71-3","Code SKU : BNCON006","Source Botanique : Ocimum basilicum L. (Lamiaceae)","Origine : Égypte","Partie de la Plante : Feuilles et sommités fleuries","Procédé : Première extraction aux solvants volatils à partir de la matière végétale de Basilic"]',
  organoleptic_fr = '["Aspect : masse cireuse compacte","Couleur : vert foncé à brun verdâtre","Odeur : très puissante, fraîche, verte, herbacée et épicée, avec des facettes anisées, réglissées et cireuses","Point de Fusion : 45–51°C","Solubilité : Insoluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Basilic fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON006
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Ocimum Basilicum Extract',
  cas = '8015-73-4 / 84775-71-3',
  origin = 'Égypte'
WHERE sku = 'BNCON006';

-- BNCON007
UPDATE products SET
  description_fr = 'Obtenue à partir des feuilles et jeunes rameaux de Citrus aurantium var. amara récoltés en Égypte, notre Concrète de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Elle concentre les constituants aromatiques de la matière végétale ainsi qu''une partie des cires et matières lipophiles naturellement présentes.

Elle révèle une signature verte, fraîche et boisée, avec des facettes herbacées, florales, amères et cireuses.

Matière intermédiaire pouvant être soumise à une purification alcoolique ultérieure pour obtenir un extrait de type Absolue destiné à la parfumerie fine.',
  short_description_fr = 'Obtenue à partir des feuilles et jeunes rameaux de Citrus aurantium var. amara récoltés en Égypte, notre Concrète de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Citrus Aurantium Amara Leaf/Twig Extract","Numéro CAS : 8014-17-3 / 72968-50-4","Code SKU : BNCON007","Source Botanique : Citrus aurantium var. amara L. (Rutaceae)","Origine : Égypte","Partie de la Plante : Feuilles et jeunes rameaux","Procédé : Première extraction aux solvants volatils à partir de feuilles et jeunes rameaux de Petitgrain Bigarade"]',
  organoleptic_fr = '["Aspect : masse cireuse compacte","Couleur : vert olive foncé à brun verdâtre","Odeur : puissante, verte, fraîche et boisée, avec des facettes herbacées, florales, amères et cireuses","Point de Fusion : 44–51°C","Solubilité : Insoluble dans l''eau ; soluble dans les solvants de parfumerie appropriés"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Petitgrain Bigarade fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON007
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Citrus Aurantium Amara Leaf/Twig Extract',
  cas = '8014-17-3 / 72968-50-4',
  origin = 'Égypte'
WHERE sku = 'BNCON007';

-- BNCON008
UPDATE products SET
  description_fr = 'Issue des fleurs de Jasminum sambac cultivées en Égypte, notre Concrète de Jasmin Sambac de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.

Cette matière cireuse concentre les constituants aromatiques de la fleur ainsi qu''une partie des cires et matières lipophiles naturellement présentes.

Elle dévoile une signature florale blanche intense, riche et opulente, accompagnée de facettes fruitées, vertes et miellées, puis d''un cœur indolique et sensuel aux nuances légèrement animales.

Matière intermédiaire précieuse pouvant être soumise à une purification alcoolique ultérieure pour obtenir l''Absolue de Jasmin Sambac destinée à la parfumerie fine.',
  short_description_fr = 'Issue des fleurs de Jasminum sambac cultivées en Égypte, notre Concrète de Jasmin Sambac de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Jasminum Sambac Flower Extract","Numéro CAS : 91770-14-8 / 1034798-23-6","Code SKU : BNCON008","Source Botanique : Jasminum sambac (L.) Aiton (Oleaceae)","Origine : Égypte","Partie de la Plante : Fleurs","Procédé : Première extraction aux solvants volatils à partir de fleurs de Jasmin Sambac"]',
  organoleptic_fr = '["Aspect : masse cireuse compacte","Couleur : orange foncé à brun rouge","Odeur : intensément florale, blanche, fruitée et verte, avec des facettes miellées, indoliques et légèrement animales","Point de Fusion : 46–53°C","Solubilité : Insoluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés après réchauffement contrôlé si nécessaire"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Jasmin Sambac fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON008
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Jasminum Sambac Flower Extract',
  cas = '91770-14-8 / 1034798-23-6',
  origin = 'Égypte'
WHERE sku = 'BNCON008';

-- BNCON009
UPDATE products SET
  description_fr = 'Issue des feuilles de Viola odorata cultivées en Égypte, notre Concrète de Feuilles de Violette de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.

Cette matière cireuse concentre les constituants aromatiques ainsi qu''une partie des cires et matières lipophiles naturellement présentes dans les feuilles.

Elle dévoile une signature intensément verte, végétale et herbacée, enrichie de facettes métalliques, fraîches et cireuses, avec des nuances de feuilles froissées, de sève et de terre fraîche.

Matière intermédiaire pouvant être soumise à une purification alcoolique ultérieure pour obtenir l''Absolue de Feuilles de Violette destinée à la parfumerie fine.',
  short_description_fr = 'Issue des feuilles de Viola odorata cultivées en Égypte, notre Concrète de Feuilles de Violette de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.',
  specifications_fr = '["Nom INCI : Viola Odorata Leaf Extract","Numéro CAS : 8024-08-6 / 90131-42-3","Code SKU : BNCON009","Source Botanique : Viola odorata L. (Violaceae)","Origine : Égypte","Partie de la Plante : Feuilles","Procédé : Première extraction aux solvants volatils à partir de feuilles de violette"]',
  organoleptic_fr = '["Aspect : masse cireuse dure à semi-solide","Couleur : vert foncé à vert olive","Odeur : puissante, verte, végétale et herbacée, avec des facettes métalliques, cireuses, terreuses et de feuilles fraîches","Point de Fusion : 48–55°C","Solubilité : Insoluble dans l''eau ; soluble dans l''éthanol et les solvants de parfumerie appropriés après réchauffement contrôlé si nécessaire"]',
  regulatory_fr = 'Chez Bostan Naturals, la rigueur technique accompagne la sélection et l''évaluation de nos matières premières.

Notre Concrète de Feuilles de Violette fait l''objet de contrôles qualité et d''analyses adaptés à la nature de la matière et à son utilisation prévue.

La matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l''IFRA lorsqu''elles sont applicables à son utilisation prévue.

Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature du produit.

Les données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.',
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

1. Fiche Technique de la Concrète (TDS) – BNCON009
2. Certificat d''Analyse (COA) spécifique au lot
3. Analyse GC-MS du lot
4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Viola Odorata Leaf Extract',
  cas = '8024-08-6 / 90131-42-3',
  origin = 'Égypte'
WHERE sku = 'BNCON009';

