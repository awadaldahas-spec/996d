-- 013_products_part6.sql
-- Orders 58-62 (edit6 — Les Huiles Suprêmes Porteuses): full text replacement for BNCP001-005.
-- TEXT ONLY. image, images, name_fr, name_en, subtitle_fr, subtitle_en, category_key
-- and sort_order are deliberately NOT touched (the document supplies no new titles).
-- Idempotent: straight assignments, safe to re-run.

-- BNCP001
UPDATE products SET
  description_fr = 'Obtenue par première pression à froid à partir des graines de Simmondsia chinensis cultivées en Égypte, notre Huile de Jojoba Dorée se distingue par sa nature particulière de cire liquide végétale et par sa grande stabilité à l''oxydation.

Sa texture fluide et son profil olfactif discret en font une base porteuse privilégiée pour les parfums huileux, les Attars et les formulations cosmétiques et botaniques.

Elle constitue également un excellent support pour l''incorporation d''absolues, d''extraits botaniques et d''autres matières premières aromatiques, tout en préservant l''identité olfactive de la composition.',
  short_description_fr = 'Obtenue par première pression à froid à partir des graines de Simmondsia chinensis cultivées en Égypte, notre Huile de Jojoba Dorée se distingue par sa nature particulière de cire liquide végétale et par sa grande stabilité à l''oxydation.',
  specifications_fr = '["Nom INCI : Simmondsia Chinensis Seed Oil","Numéro CAS : 90045-98-0 / 61789-91-1","Code SKU : BNCP001","Source Botanique : Simmondsia chinensis (Link) C.K.Schneid. (Simmondsiaceae)","Origine : Égypte","Partie de la Plante : Graines","Procédé : Première pression à froid"]',
  organoleptic_fr = '["Aspect : Liquide huileux mobile et limpide","Couleur : Dorée","Odeur : Très légère, caractéristique et discrète","Indice de Réfraction @ 20°C : 1.4650–1.4670","Densité Relative @ 20°C : 0.8630–0.8730","Indice d''Acide : < 1.0 mg KOH/g","Indice de Peroxyde : < 2.0 meq O₂/kg","Valeurs physico-chimiques : Les valeurs indiquées sont des valeurs typiques. De légères variations naturelles peuvent être observées. Les spécifications et résultats du lot sont confirmés dans le COA correspondant."]',
  regulatory_fr = 'Notre Huile de Jojoba Dorée est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu''aux applications de parfumerie lorsque cela est approprié.

Les exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.

Pour toute utilisation dans un produit fini, l''évaluation de la sécurité, de la conformité et de l''aptitude à l''emploi relève de l''utilisateur professionnel et du formulateur selon l''application prévue.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Origine Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière. Le profil lipidique et les paramètres physico-chimiques pertinents peuvent être documentés selon le lot.
Authenticité & Traçabilité :
Les caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Profil Lipidique – BNCP001
2. Certificat d''Analyse (COA) spécifique au lot
3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Simmondsia Chinensis Seed Oil',
  cas = '90045-98-0 / 61789-91-1',
  origin = 'Égypte'
WHERE sku = 'BNCP001';

-- BNCP002
UPDATE products SET
  description_fr = 'Obtenue par première pression à froid à partir des graines de Nigella sativa cultivées en Égypte, notre Huile de Nigelle de Bostan Naturals est une matière première naturelle sélectionnée pour son profil lipidique et ses constituants caractéristiques.

Elle révèle une signature aromatique chaude, épicée et légèrement poivrée, avec une présence végétale distinctive.

Elle est destinée aux formulations cosmétiques, aux soins et à certaines applications de parfumerie et de formulation botanique, selon les caractéristiques du produit et l''usage prévu.',
  short_description_fr = 'Obtenue par première pression à froid à partir des graines de Nigella sativa cultivées en Égypte, notre Huile de Nigelle de Bostan Naturals est une matière première naturelle sélectionnée pour son profil lipidique et ses constituants caractéristiques.',
  specifications_fr = '["Nom INCI : Nigella Sativa Seed Oil","Numéro CAS : 90064-32-7 / 85116-74-1","Code SKU : BNCP002","Source Botanique : Nigella sativa L. (Ranunculaceae)","Origine : Égypte","Partie de la Plante : Graines","Procédé : Première pression à froid"]',
  organoleptic_fr = '["Aspect : Liquide mobile et limpide","Couleur : Ambrée à brun orangé selon le lot","Odeur : Puissante, chaude, épicée et poivrée","Indice de Réfraction @ 20°C : 1.4680–1.4750","Densité Relative @ 20°C : 0.9100–0.9300","Thymoquinone : analysée et documentée par lot lorsque spécifiée","Solubilité : Soluble dans les huiles fixes et les solvants de formulation appropriés","Valeurs physico-chimiques : Les valeurs indiquées sont des valeurs typiques. De légères variations naturelles peuvent être observées. Les spécifications et résultats du lot sont confirmés dans le COA correspondant."]',
  regulatory_fr = 'Notre Huile de Nigelle est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu''aux applications de parfumerie lorsque cela est approprié.

Les exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.

Pour toute utilisation dans un produit fini, l''évaluation de la sécurité, de la conformité et de l''aptitude à l''emploi relève de l''utilisateur professionnel et du formulateur selon l''application prévue.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Origine Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière. Le profil lipidique et les constituants caractéristiques, notamment la thymoquinone lorsqu''elle est spécifiée, peuvent être documentés par lot. Des contrôles complémentaires peuvent être réalisés selon les exigences du produit et de l''application.
Authenticité & Traçabilité :
Les caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Analyses du profil lipidique et des constituants caractéristiques – BNCP002
2. Certificat d''Analyse (COA) spécifique au lot
3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Nigella Sativa Seed Oil',
  cas = '90064-32-7 / 85116-74-1',
  origin = 'Égypte'
WHERE sku = 'BNCP002';

-- BNCP003
UPDATE products SET
  description_fr = 'Obtenue par première pression à froid à partir des amandes de Prunus amygdalus dulcis cultivées en Égypte, notre Huile d''Amande Douce de Bostan Naturals est une matière première naturelle sélectionnée pour sa douceur et sa fluidité.

Son profil discret et sa texture souple en font une base porteuse adaptée aux formulations de soin, aux huiles corporelles et aux compositions parfumées.

Elle constitue également un support approprié pour l''incorporation d''absolues, d''extraits botaniques et de matières premières liposolubles.',
  short_description_fr = 'Obtenue par première pression à froid à partir des amandes de Prunus amygdalus dulcis cultivées en Égypte, notre Huile d''Amande Douce de Bostan Naturals est une matière première naturelle sélectionnée pour sa douceur et sa fluidité.',
  specifications_fr = '["Nom INCI : Prunus Amygdalus Dulcis Oil","Numéro CAS : 8007-69-0 / 90320-37-9","Code SKU : BNCP003","Source Botanique : Prunus amygdalus dulcis (Mill.) (Rosaceae)","Origine : Égypte","Partie de la Plante : Amandes / graines","Procédé : Première pression à froid, suivie d''une filtration"]',
  organoleptic_fr = '["Aspect : Liquide huileux mobile et limpide","Couleur : Jaune pâle à dorée","Odeur : Légère, douce et caractéristique de l''amande","Indice de Réfraction @ 20°C : 1.4650–1.4750","Densité Relative @ 20°C : 0.9110–0.9200","Indice d''Acide : < 0.5 mg KOH/g","Indice de Peroxyde : < 1.5 meq O₂/kg","Solubilité : Insoluble dans l''eau ; soluble dans les huiles fixes et solvants compatibles","Valeurs physico-chimiques : Les valeurs indiquées sont des valeurs typiques. De légères variations naturelles peuvent être observées. Les spécifications et résultats du lot sont confirmés dans le COA correspondant."]',
  regulatory_fr = 'Notre Huile d''Amande Douce est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu''aux applications de parfumerie lorsque cela est approprié.

Les exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.

Pour toute utilisation dans un produit fini, l''évaluation de la sécurité, de la conformité et de l''aptitude à l''emploi relève de l''utilisateur professionnel et du formulateur selon l''application prévue.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Origine Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière. Le profil en acides gras, notamment les fractions oléique et linoléique, peut être documenté par lot.
Authenticité & Traçabilité :
Les caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Profil en Acides Gras – BNCP003
2. Certificat d''Analyse (COA) spécifique au lot
3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Prunus Amygdalus Dulcis Oil',
  cas = '8007-69-0 / 90320-37-9',
  origin = 'Égypte'
WHERE sku = 'BNCP003';

-- BNCP004
UPDATE products SET
  description_fr = 'Obtenue par première pression mécanique à froid à partir des graines de Punica granatum cultivées en Égypte, notre Huile de Pépins de Grenade de Bostan Naturals est une matière première botanique précieuse sélectionnée pour son profil lipidique distinctif.

Elle est naturellement caractérisée par la présence d''acide punicique et par un profil en acides gras adapté aux formulations cosmétiques et aux soins de haute valeur.

Sa texture et son identité botanique en font une matière première destinée notamment aux sérums, huiles de soin et formulations de prestige.',
  short_description_fr = 'Obtenue par première pression mécanique à froid à partir des graines de Punica granatum cultivées en Égypte, notre Huile de Pépins de Grenade de Bostan Naturals est une matière première botanique précieuse sélectionnée pour son profil lipidique distinctif.',
  specifications_fr = '["Nom INCI : Punica Granatum Seed Oil","Numéro CAS : 84961-57-9","Code SKU : BNCP004","Source Botanique : Punica granatum L. (Lythraceae)","Origine : Égypte","Partie de la Plante : Graines","Procédé : Première pression mécanique à froid"]',
  organoleptic_fr = '["Aspect : Liquide huileux légèrement à moyennement visqueux","Couleur : Jaune doré à ambré clair","Odeur : Légère, douce et caractéristique","Indice de Réfraction @ 20°C : 1.5150–1.5250","Densité Relative @ 20°C : 0.9350–0.9500","Acide Punicique : valeur caractéristique documentée selon le lot","Indice de Peroxyde : < 5 meq O₂/kg","Solubilité : Soluble dans les huiles et milieux lipophiles compatibles"]',
  regulatory_fr = 'Notre Huile de Pépins de Grenade est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu''aux applications de parfumerie lorsque cela est approprié.

Les exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.

Pour toute utilisation dans un produit fini, l''évaluation de la sécurité, de la conformité et de l''aptitude à l''emploi relève de l''utilisateur professionnel et du formulateur selon l''application prévue.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Origine Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière. Le profil en acides gras, incluant l''acide punicique, peut être documenté par lot.
Authenticité & Traçabilité :
Les caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Profil en Acides Gras – BNCP004
2. Certificat d''Analyse (COA) spécifique au lot
3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Punica Granatum Seed Oil',
  cas = '84961-57-9',
  origin = 'Égypte'
WHERE sku = 'BNCP004';

-- BNCP005
UPDATE products SET
  description_fr = 'Obtenue par première pression mécanique à froid à partir des graines de Cucurbita pepo cultivées en Égypte, notre Huile de Pépins de Courge d''Égypte est une matière première naturelle sélectionnée pour sa richesse en acides gras insaturés et en constituants lipidiques caractéristiques.

Son profil est notamment associé aux acides linoléique et oléique ainsi qu''à la présence naturelle de phytostérols.

Elle convient aux formulations cosmétiques et capillaires ainsi qu''à certaines applications de parfumerie et d''attars, notamment dans les huiles corporelles, soins des cheveux et de la barbe et parfums huileux.',
  short_description_fr = 'Obtenue par première pression mécanique à froid à partir des graines de Cucurbita pepo cultivées en Égypte, notre Huile de Pépins de Courge d''Égypte est une matière première naturelle sélectionnée pour sa richesse en acides gras insaturés et en constituants lipidiques caractéristiques.',
  specifications_fr = '["Nom INCI : Cucurbita Pepo Seed Oil","Numéro CAS : 8016-49-7 / 89998-03-3","Code SKU : BNCP005","Source Botanique : Cucurbita pepo L. (Cucurbitaceae)","Origine : Égypte","Partie de la Plante : Graines","Procédé : Première pression mécanique à froid"]',
  organoleptic_fr = '["Aspect : Liquide huileux mobile, limpide à légèrement opalescent","Couleur : Jaune doré à jaune-vert","Odeur : Douce, légère, caractéristique de la graine et légèrement noisettée","Indice de Réfraction @ 20°C : 1.4700–1.4760","Densité Relative @ 20°C : 0.9150–0.9250","Indice d''Acide : < 1.5 mg KOH/g","Indice de Peroxyde : < 4 meq O₂/kg","Solubilité : Soluble dans les huiles et milieux lipophiles compatibles"]',
  regulatory_fr = 'Notre Huile de Pépins de Courge d''Égypte est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu''aux applications de parfumerie lorsque cela est approprié.

Les exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.

Pour toute utilisation dans un produit fini, l''évaluation de la sécurité, de la conformité et de l''aptitude à l''emploi relève de l''utilisateur professionnel et du formulateur selon l''application prévue.',
  quality_fr = 'Standard de Qualité :
Matière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d''authenticité et de traçabilité.
Origine & Traçabilité :
Origine Égypte – origine et traçabilité documentées.
Contrôle Laboratoire :
Chaque lot commercialisé fait l''objet de contrôles et d''analyses qualité adaptés à la nature de la matière. Le profil en acides gras, notamment les fractions linoléique et oléique, peut être documenté par lot.
Authenticité & Traçabilité :
Les caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.
Conditionnement :
Conditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.
Traçabilité du conditionnement :
Chaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.',
  confidentiality_fr = 'Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l''évaluation professionnelle de la matière première.

Documents disponibles :

1. Profil en Acides Gras – BNCP005
2. Certificat d''Analyse (COA) spécifique au lot
3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables',
  inci = 'Cucurbita Pepo Seed Oil',
  cas = '8016-49-7 / 89998-03-3',
  origin = 'Égypte'
WHERE sku = 'BNCP005';

