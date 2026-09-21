export type ProductCategory =
  | "absolues"
  | "concretes"
  | "huiles-essentielles"
  | "huiles-porteuses"
  | "herbes-epices";

export interface ProductTabs {
  description: string;
  specifications: string[];
  organoleptic: string[];
  regulatory: string;
  quality: string;
  confidentiality: string;
}

export interface Product {
  sku: string;
  category: ProductCategory;
  name: string;
  nameEn: string;
  subtitleFr?: string;
  subtitleEn?: string;
  inci: string;
  cas?: string;
  origin: string;
  extractionMethodFr?: string;
  extractionMethodEn?: string;
  shortDescriptionFr?: string;
  shortDescriptionEn?: string;
  image: string;
  images?: string[];
  tabs: ProductTabs;
}

export const categories: {
  key: ProductCategory;
  labelFr: string;
  labelEn: string;
  noteFr: string;
  noteEn: string;
  hidden?: boolean;
  image: string;
}[] = [
  {
    key: "absolues",
    labelFr: "Les Absolues Précieuses",
    labelEn: "Precious Absolutes",
    noteFr: "Nectars floraux d'une opulence absolue, extraits pour la haute parfumerie de niche.",
    noteEn: "Absolutely opulent floral nectars, extracted for high-end niche perfumery.",
    image: "/images/categories/absolues.jpg",
  },
  {
    key: "concretes",
    labelFr: "Les Concrètes Raw",
    labelEn: "Raw Concretes",
    noteFr: "Ciments végétaux purs et cireux, capturant l'âme primitive de la plante fraîche.",
    noteEn: "Pure waxy botanical concretes capturing the raw soul of the fresh plant.",
    image: "/images/categories/concretes.jpg",
  },
  {
    key: "huiles-essentielles",
    labelFr: "Les Huiles Essentielles",
    labelEn: "Essential Oils",
    noteFr: "Élixirs aromatiques d'une clarté cristalline, distillés avec un savoir-faire traditionnel.",
    noteEn: "Crystal-clear aromatic elixirs, distilled with traditional expertise.",
    image: "/images/categories/huiles-essentielles.jpg",
  },
  {
    key: "huiles-porteuses",
    labelFr: "Les Huiles Suprêmes Porteuses / Carrier Oils",
    labelEn: "Supreme Carrier Oils",
    noteFr: "Trésors lipidiques dorés et ultra-filtrés, servant de base active royale pour les soins de luxe et attars.",
    noteEn: "Golden, ultra-filtered lipid treasures serving as a royal active base for luxury skincare and attars.",
    image: "/images/categories/huiles-porteuses.jpg",
  },
  {
    key: "herbes-epices",
    labelFr: "Herbes & Épices",
    labelEn: "Herbs & Spices",
    noteFr: "Bientôt disponible.",
    noteEn: "Coming soon.",
    hidden: true,
    image: "/images/categories/herbes-epices.jpg",
  },
];




export const products: Product[] = [
  // ABSOLUES
  {
    sku: "BNABS001",
    category: "absolues",
    name: "Absolue de Cassie d'Égypte",
    nameEn: "Egyptian Cassie Absolute",
    subtitleFr: "L'Énigme Florale Cuirée",
    subtitleEn: "The Leathery Floral Enigma",
    inci: "Acacia Farnesiana Flower Extract",
    cas: "8023-82-3 / 89957-43-7",
    origin: "Égypte",
    extractionMethodFr: "Extraction Secondaire à l'Éthanol",
    extractionMethodEn: "Secondary Ethanol Extraction",
    shortDescriptionFr:
      "Mûrie sous le soleil d'hiver des plaines d'Égypte, notre Absolue de Cassie de Bostan Naturals est une matière première naturelle précieuse, recherchée pour la richesse de son profil olfactif.",
    shortDescriptionEn:
      "Ripened under Egypt's winter sun, our Bostan Naturals Cassie Absolute is a treasure of absolute rarity, highly prized by high-end niche perfumery. Extracted from Acacia farnesiana flowers, this mystical elixir unfolds a phenomenally complex olfactory signature: dense, warm floral top notes, a woody, herbaceous, balsamic heart, and a powerfully leathery, animalic, velvety base of sovereign tenacity.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Mûrie sous le soleil d'hiver des plaines d'Égypte, notre Absolue de Cassie de Bostan Naturals est une matière première naturelle précieuse, recherchée pour la richesse de son profil olfactif.\n\nExtraite des fleurs d'Acacia farnesiana, elle dévoile une signature complexe, florale, chaleureuse et miellée, enrichie de facettes poudrées, vertes, épicées et légèrement cuirées.\n\nSon caractère profond et nuancé apporte du relief, du corps et une belle présence aux compositions de parfumerie fine, notamment dans les accords floraux, orientaux, poudrés et cuirés.",
      specifications: [
        "Nom INCI : Acacia Farnesiana Flower Extract",
        "Numéro CAS : 8023-82-3",
        "Code SKU : BNABS001",
        "Source Botanique : Acacia farnesiana (L.) Willd. (Fabaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Extraction secondaire à l'éthanol à partir de la concrète de première extraction",
      ],
      organoleptic: [
        "Aspect : Liquide visqueux fluide à semi-liquide selon température",
        "Couleur : Jaune ambré foncé à brun verdâtre profond",
        "Odeur : Florale dense, poudrée, intensément miellée, avec des facettes boisées et cuirées et un sillage animal persistant",
        "Indice de Réfraction @ 20°C : 1.4950–1.5200",
        "Densité Relative @ 20°C : 0.9500–0.9900",
        "Solubilité : Soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Cassie fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nLes données relatives aux constituants et substances réglementées sont évaluées sur la base des données analytiques disponibles pour le produit et, lorsque nécessaire, du lot concerné, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nCassie d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS001\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNABS002",
    category: "absolues",
    name: "Absolue de Jasmine Grandiflorum d'Égypte",
    nameEn: "Egyptian Jasmine Grandiflorum Absolute",
    subtitleFr: "L'Opulence Florale Blanche Indolique",
    subtitleEn: "The Indolic White Floral Opulence",
    inci: "Jasminum Grandiflorum Flower Extract",
    cas: "8022-43-1 / 84776-64-7",
    origin: "Égypte",
    extractionMethodFr: "Extraction secondaire à l'alcool éthylique à partir de la concrète de jasmin",
    extractionMethodEn: "Secondary Ethyl Alcohol Extraction from Jasmine Concrete",
    shortDescriptionFr:
      "Récoltée à l'aube dans les champs de jasmin du delta du Nil, notre Absolue de Jasmin Grandiflorum de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Harvested at dawn in the fertile fields of the Nile Delta, our Bostan Naturals Jasmine Grandiflorum Absolute embodies the absolute prestige of the world's fine perfumery. This mythical elixir unfolds an olfactory signature of radiant, addictive sensuality. It opens with an intense white floral burst, at once luminous, fruity (hints of ripe banana and apricot jam) and warm. Its heart reveals a deep, noble and voluptuous indolic richness, before blossoming into a balsamic-animalic, rich base of incomparable magnetic persistence. An indispensable architectural gem for infusing radiance, volume, roundness and timeless carnal elegance into the greatest Floral, Oriental and Chypre creations.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Récoltée à l'aube dans les champs de jasmin du delta du Nil, notre Absolue de Jasmin Grandiflorum de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nIssue des fleurs de Jasminum grandiflorum, elle dévoile une signature florale blanche intense, douce et fruitée, enrichie de facettes miellées, vertes et légèrement épicées.\n\nSon cœur révèle la richesse indolique caractéristique du jasmin, avec des nuances animales et balsamiques qui apportent profondeur, chaleur et sensualité à la composition.\n\nUne matière de caractère destinée à apporter éclat, volume, rondeur et profondeur aux créations de parfumerie fine, notamment dans les accords floraux, orientaux et chyprés.",
      specifications: [
        "Nom INCI : Jasminum Grandiflorum Flower Extract",
        "Numéro CAS : 8022-96-6 / 84776-64-7",
        "Code SKU : BNABS002",
        "Source Botanique : Jasminum grandiflorum L. (Oleaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Extraction secondaire à l'éthanol à partir de la concrète de jasmin",
      ],
      organoleptic: [
        "Aspect : Liquide mobile à fluide, limpide à légèrement trouble selon les conditions de conservation",
        "Couleur : Brun orangé à rouge ambré profond",
        "Odeur : Intensément florale, chaude et riche, avec des facettes fruitées, miellées, indoliques et légèrement animales caractéristiques du jasmin égyptien",
        "Indice de Réfraction @ 20°C : 1.4880 – 1.5150",
        "Densité Relative @ 20°C : 0.9500 – 0.9850",
        "Solubilité : Soluble dans l'éthanol et les huiles fixes appropriées",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Jasmin Grandiflorum fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nJasmin Grandiflorum d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS002\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNABS003",
    category: "absolues",
    name: "Absolue de Fleur d'Oranger d'Égypte",
    nameEn: "Egyptian Orange Blossom Absolute",
    subtitleFr: "La Profondeur Florale de la Fleur d'Oranger",
    subtitleEn: "The Floral Depth of Orange Blossom",
    inci: "Citrus Aurantium Amara Flower Extract",
    cas: "8030-28-2 / 72968-50-4",
    origin: "Égypte",
    extractionMethodFr: "Extraction secondaire à l'alcool éthylique à partir de la concrète de fleur d'oranger",
    extractionMethodEn: "Secondary Ethyl Alcohol Extraction from Orange Blossom Concrete",
    shortDescriptionFr:
      "Extraite des fleurs de Citrus aurantium var. amara récoltées en Égypte, notre Absolue de Fleur d'Oranger de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la profondeur de son profil olfactif.",
    shortDescriptionEn:
      "Extracted from the immaculate petals of Citrus aurantium var. amara harvested in spring in Egypt, our Bostan Naturals Orange Blossom Absolute is the pinnacle of olfactory luxury for niche perfumery. Unlike the airborne Neroli, the Absolute reveals the dark, carnal and hypnotic face of the flower. It unfolds a monumental olfactory signature: a dense, sweet, honeyed floral opening, plunging into an intensely waxy, green-almond and indolic heart, before anchoring on an animalic, warm and balsamic base of obsessive tenacity. An architectural ingredient of rare power, indispensable for infusing depth, mystery, roundness and an addictive carnal vibration into Floral and Oriental structures.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Extraite des fleurs de Citrus aurantium var. amara récoltées en Égypte, notre Absolue de Fleur d'Oranger de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la profondeur de son profil olfactif.\n\nContrairement au Néroli, obtenu par distillation des mêmes fleurs, l'Absolue révèle une expression plus dense, chaude et profonde de la fleur d'oranger.\n\nElle déploie une signature florale intense, douce et miellée, enrichie de facettes fruitées, vertes et indoliques, avec des nuances chaleureuses et légèrement animales.\n\nUne matière de caractère destinée à apporter profondeur, rondeur, sensualité et persistance aux créations de parfumerie fine, notamment dans les accords floraux, orientaux et ambrés.",
      specifications: [
        "Nom INCI : Citrus Aurantium Amara Flower Extract",
        "Numéro CAS : 8030-28-2 / 72968-50-4",
        "Code SKU : BNABS003",
        "Source Botanique : Citrus aurantium var. amara L. (Rutaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Extraction secondaire à l'éthanol à partir de la concrète de fleur d'oranger",
      ],
      organoleptic: [
        "Aspect : Liquide visqueux, mobile à pâteux selon la température",
        "Couleur : Brun ambré foncé à rouge orangé profond",
        "Odeur : Puissante, florale et orangée, chaude et riche, avec des facettes miellées, vertes, indoliques et légèrement animales",
        "Indice de Réfraction @ 20°C : 1.4900 – 1.5200",
        "Densité Relative @ 20°C : 0.9500 – 0.9930",
        "Solubilité : Soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Fleur d'Oranger fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nFleur d'Oranger d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS003\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNABS004",
    category: "absolues",
    name: "Absolue de Caroube d'Égypte",
    nameEn: "Egyptian Carob Absolute",
    subtitleFr: "La Richesse Gourmande et Ambrée",
    subtitleEn: "The Gourmand and Amber Richness",
    inci: "Ceratonia Siliqua Fruit Extract",
    cas: "84961-45-5 / 9000-40-2",
    origin: "Égypte",
    extractionMethodFr: "Extraction secondaire à l'éthanol à chaud à partir de la concrète de caroube primaire",
    extractionMethodEn: "Secondary Hot Ethanol Extraction from Primary Carob Concrete",
    shortDescriptionFr:
      "Issue des gousses mûres de Ceratonia siliqua cultivées en Égypte, notre Absolue de Caroube de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et l'originalité de son profil olfactif.",
    shortDescriptionEn:
      "Issued from the pods rich in complex sugars of Ceratonia siliqua ripened under the dry Egyptian heat, our Bostan Naturals Carob Absolute is an avant-garde raw material, a secret pillar of contemporary niche perfumery. This elixir of unheard-of richness unfolds a deeply addictive and multi-faceted olfactory signature. It opens with warm notes of caramelized sugar and roasted chicory, revealing a velvety heart of amber cocoa, dried fruits and black vanilla pod, before blossoming into a balsamic and dark-woody base of masterful tenacity. An architectural ingredient of choice, indispensable for infusing texture, relief and a non-sticky, highly sophisticated gourmand sensuality into amber, woody and luxury leather compositions.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Issue des gousses mûres de Ceratonia siliqua cultivées en Égypte, notre Absolue de Caroube de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et l'originalité de son profil olfactif.\n\nElle dévoile une signature chaleureuse et gourmande, marquée par des facettes de caramel, de cacao, de fruits secs et de vanille, accompagnées de nuances boisées et balsamiques.\n\nSon caractère dense et enveloppant apporte texture, profondeur, rondeur et une belle persistance aux compositions de parfumerie fine, notamment dans les accords ambrés, boisés, gourmands et cuirés.",
      specifications: [
        "Nom INCI : Ceratonia Siliqua Fruit Extract",
        "Numéro CAS : 84961-45-5 / 9000-40-2",
        "Code SKU : BNABS004",
        "Source Botanique : Ceratonia siliqua L. (Fabaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Gousses / fruits",
        "Procédé : Extraction secondaire à l'éthanol à partir de la concrète de caroube",
      ],
      organoleptic: [
        "Aspect : Liquide visqueux épais à semi-solide selon la température",
        "Couleur : Brun chocolat très foncé à brun ambré profond",
        "Odeur : Chaleureuse, balsamique et gourmande, avec des facettes de caramel, cacao, fruits secs, vanille et nuances boisées",
        "Indice de Réfraction @ 20°C : Valeurs typiques selon la nature et la concentration de la matière",
        "Solubilité : Insoluble ou faiblement soluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Caroube fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil chromatographique et les caractéristiques pertinentes du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nCaroube d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS004\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNABS005",
    category: "absolues",
    name: "Absolue de Géranium d'Égypte",
    nameEn: "Egyptian Geranium Absolute",
    subtitleFr: "La Vibration Rosée Herbacée",
    subtitleEn: "The Herbaceous Rosy Vibration",
    inci: "Pelargonium Graveolens Extract",
    cas: "90082-51-2 / 8000-46-2",
    origin: "Égypte",
    extractionMethodFr: "Extraction secondaire à l'alcool éthylique à partir de la concrète de géranium fraîche",
    extractionMethodEn: "Secondary Ethyl Alcohol Extraction from Fresh Geranium Concrete",
    shortDescriptionFr:
      "Issue des parties aériennes de Pelargonium graveolens cultivé en Égypte, notre Absolue de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Extracted from the fresh aerial parts of Pelargonium graveolens cultivated on our estates in Egypt, our Bostan Naturals Geranium Absolute is a raw material of masterful power and tenacity. Unlike the distilled essential oil, the Absolute captures the heavy cuticular waxes and complex pigments of the leaf. It unfolds an olfactory signature of unheard-of richness: a green, sharp grassy and subtly minty opening, plunging into an intensely rosy, velvety floral heart, enhanced by lychee notes and a balsamic-earthy base of rare elegance. An indispensable architectural ingredient for infusing relief, texture, naturalness and phenomenal tenacity into niche Floral, Fougère and Chypre structures.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Issue des parties aériennes de Pelargonium graveolens cultivé en Égypte, notre Absolue de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nContrairement à l'huile essentielle obtenue par distillation, l'Absolue offre une expression plus riche et plus profonde de la matière végétale, avec des facettes vertes, herbacées et florales.\n\nElle déploie une signature olfactive intensément verte et herbacée, soutenue par un cœur floral rosé et velouté, avec des nuances légèrement menthées, terreuses et balsamiques.\n\nUne matière de caractère destinée à apporter relief, texture, naturel et tenue aux créations de parfumerie fine, notamment dans les accords floraux, fougères et chyprés.",
      specifications: [
        "Nom INCI : Pelargonium Graveolens Extract",
        "Numéro CAS : 90082-51-2 / 8000-46-2",
        "Code SKU : BNABS005",
        "Source Botanique : Pelargonium graveolens L'Hér. (Geraniaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles et parties aériennes",
        "Procédé : Extraction par solvants suivie d'une purification à l'éthanol à partir de la concrète de Géranium",
      ],
      organoleptic: [
        "Aspect : Liquide mobile à légèrement visqueux",
        "Couleur : Vert olive foncé à vert profond",
        "Odeur : Puissante, florale et rosée, fortement herbacée, avec des facettes vertes, terreuses et légèrement menthées caractéristiques du Géranium égyptien",
        "Indice de Réfraction @ 20°C : 1.4650 – 1.4950",
        "Densité Relative @ 20°C : 0.9200 – 0.9550",
        "Solubilité : Soluble dans l'éthanol et les huiles fixes appropriées",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Géranium fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nGéranium d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS005\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNABS006",
    category: "absolues",
    name: "Absolue de Basilic d'Égypte",
    nameEn: "Egyptian Basil Absolute",
    subtitleFr: "La Signature Anisée et Herbacée",
    subtitleEn: "The Anise and Herbaceous Signature",
    inci: "Ocimum Basilicum Extract",
    cas: "8015-73-4 / 84775-71-3",
    origin: "Égypte",
    extractionMethodFr: "Extraction secondaire à l'alcool éthylique à partir de la concrète de basilic primaire",
    extractionMethodEn: "Secondary Ethyl Alcohol Extraction from Primary Basil Concrete",
    shortDescriptionFr:
      "Issue des feuilles et sommités fleuries d'Ocimum basilicum cultivé en Égypte, notre Absolue de Basilic de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Extracted directly from the flowering tops and fresh leaves of Ocimum basilicum cultivated under Egypt's ideal climate, our Bostan Naturals Basil Absolute is a formulation secret of unique raw power. This refined elixir unfolds an olfactory signature of fusing clarity: a fresh, green and sharply herbal opening, quickly moving into an intensely spicy and strongly aniseed heart (estragole), enhanced by sweet liquorice notes and a highly persistent woody-herbaceous base. An avant-garde ingredient indispensable for opening top notes, bringing vibration, freshness and a noble nervy tension to Fougère, Aromatic and modern niche Cologne compositions.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Issue des feuilles et sommités fleuries d'Ocimum basilicum cultivé en Égypte, notre Absolue de Basilic de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nElle dévoile une signature fraîche, verte et herbacée, enrichie de facettes épicées, anisées et légèrement réglissées.\n\nSon caractère aromatique apporte de la vibration, de la fraîcheur, du relief et de la tension aux compositions de parfumerie fine, notamment dans les accords aromatiques, fougères et les colognes modernes.",
      specifications: [
        "Nom INCI : Ocimum Basilicum Extract",
        "Numéro CAS : 84775-71-3 / 8015-73-4",
        "Code SKU : BNABS006",
        "Source Botanique : Ocimum basilicum L. (Lamiaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles et sommités fleuries",
        "Procédé : Extraction secondaire à l'éthanol à partir de la concrète de basilic",
      ],
      organoleptic: [
        "Aspect : Liquide mobile à légèrement visqueux",
        "Couleur : Vert foncé à brun verdâtre profond",
        "Odeur : Fraîche, intensément herbacée et épicée, avec des facettes anisées, vertes et légèrement réglissées caractéristiques du basilic",
        "Indice de Réfraction @ 20°C : 1.4800 – 1.5100",
        "Densité Relative @ 20°C : 0.9300 – 0.9650",
        "Solubilité : Insoluble ou faiblement soluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Basilic fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nBasilic d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS006\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNABS007",
    category: "absolues",
    name: "Absolue de Petitgrain Bigarade d'Égypte",
    nameEn: "Egyptian Petitgrain Bigarade Absolute",
    subtitleFr: "La Tension Ligneuse et Florale",
    subtitleEn: "The Woody and Floral Tension",
    inci: "Citrus Aurantium Amara Leaf/Twig Extract",
    cas: "8014-17-3 / 72968-50-4",
    origin: "Égypte",
    extractionMethodFr: "Extraction secondaire à l'alcool éthylique à partir de la concrète de petitgrain primaire",
    extractionMethodEn: "Secondary Ethyl Alcohol Extraction from Primary Petitgrain Concrete",
    shortDescriptionFr:
      "Obtenue à partir de la concrète de Petitgrain Bigarade produite en Égypte, notre Absolue de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Obtained by alcoholic washing from the bitter orange concrete in Egypt, our Bostan Naturals Petitgrain Bigarade Absolute is a highly technical industrial exclusive. This precious elixir concentrates not only the bitter green and woody notes of the leaf and young twigs, but also the underlying honeyed and floral facets of the orange blossom. It is characterised by an olfactory signature of textured intensity: a green, lively and hepatica-like attack, evolving into a woody-herbaceous heart, softened by hay nuances and a masterful waxy persistence. An essential architectural component for infusing relief, tension, elegant masculinity and a nervy hold into Fougère, Woody and modern niche Cologne structures.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue à partir de la concrète de Petitgrain Bigarade produite en Égypte, notre Absolue de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nElle révèle une expression profonde et texturée du bigaradier, associant des facettes vertes, fraîches et boisées à des nuances florales, herbacées et légèrement amères.\n\nSon caractère apporte relief, tension, profondeur et tenue aux créations de parfumerie fine, notamment dans les accords fougères, boisés et les colognes modernes.",
      specifications: [
        "Nom INCI : Citrus Aurantium Amara Leaf/Twig Extract",
        "Numéro CAS : 8014-17-3 / 72968-50-4",
        "Code SKU : BNABS007",
        "Source Botanique : Citrus aurantium var. amara L. (Rutaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles et jeunes rameaux",
        "Procédé : Extraction secondaire à l'éthanol à partir de la concrète de Petitgrain Bigarade",
      ],
      organoleptic: [
        "Aspect : Liquide mobile à légèrement visqueux",
        "Couleur : Vert olive foncé à brun verdâtre",
        "Odeur : Verte, fraîche et boisée, avec des facettes herbacées, florales et légèrement amères",
        "Indice de Réfraction @ 20°C : 1.4850 – 1.5100",
        "Densité Relative @ 20°C : 0.9400 – 0.9750",
        "Solubilité : Insoluble ou faiblement soluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Petitgrain Bigarade fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nPetitgrain Bigarade d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS007\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNABS008",
    category: "absolues",
    name: "Absolue de Jasmine Sambac d'Égypte",
    nameEn: "Egyptian Jasmine Sambac Absolute",
    subtitleFr: "L'Opulence Florale Fruité-verte",
    subtitleEn: "The Fruity-Green Floral Opulence",
    inci: "Jasminum Sambac Flower Extract",
    cas: "91770-14-8 / 1034798-23-6",
    origin: "Égypte",
    extractionMethodFr: "Extraction secondaire à l'alcool éthylique à partir de la concrète de jasmin sambac primaire",
    extractionMethodEn: "Secondary Ethyl Alcohol Extraction from Primary Jasmine Sambac Concrete",
    shortDescriptionFr:
      "Issue des fleurs de Jasminum sambac cultivées en Égypte, notre Absolue de Jasmin Sambac de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Issued from the treatment of Jasminum sambac flowers harvested at nightfall on our Egyptian estates, our Bostan Naturals Jasmine Sambac Absolute is the pinnacle of wild floral sensuality. This extraordinary elixir concentrates the entirety of heavy indolic compounds and exclusive fruity facets of the flower. It unfolds an olfactory signature of rare narcotic force: a lively, fruity-green attack (recalling mango skin and orange blossom), opening into an intensely white-floral, heavy, honeyed heart, and an animalic-carnal base of absolute opulence. A highly sought-after avant-garde ingredient for niche creators seeking to bring vibration, mystery, modernity and a striking contrast to prestigious Floral and Oriental structures.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Issue des fleurs de Jasminum sambac cultivées en Égypte, notre Absolue de Jasmin Sambac de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nElle dévoile une signature florale blanche intense, accompagnée de facettes fruitées, vertes et miellées, puis révèle progressivement un cœur indolique et sensuel aux nuances chaleureuses et légèrement animales.\n\nSon caractère riche et expressif apporte vibration, profondeur, mystère et contraste aux créations de parfumerie fine, notamment dans les accords floraux, orientaux et les compositions modernes de niche.",
      specifications: [
        "Nom INCI : Jasminum Sambac Flower Extract",
        "Numéro CAS : 91770-14-8 / 1034798-23-6",
        "Code SKU : BNABS008",
        "Source Botanique : Jasminum sambac (L.) Aiton (Oleaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Extraction secondaire à l'éthanol à partir de la concrète de Jasmin Sambac",
      ],
      organoleptic: [
        "Aspect : Liquide mobile à fluide, pouvant présenter un dépôt selon les conditions de conservation",
        "Couleur : Orange foncé à brun rouge",
        "Odeur : Intensément florale, fruitée et verte, avec des facettes miellées, indoliques et légèrement animales caractéristiques du Jasmin Sambac",
        "Indice de Réfraction @ 20°C : 1.4900 – 1.5190",
        "Densité Relative @ 20°C : 0.9500 – 0.9890",
        "Solubilité : Insoluble ou faiblement soluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Jasmin Sambac fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nJasmin Sambac d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS008\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNABS009",
    category: "absolues",
    name: "Absolue de Feuilles de Violette d'Égypte",
    nameEn: "Egyptian Violet Leaf Absolute",
    subtitleFr: "La Force Verte, Cuirée et Métallique",
    subtitleEn: "The Green, Leathery and Metallic Force",
    inci: "Viola Odorata Leaf Extract",
    cas: "8024-08-6 / 90131-42-3",
    origin: "Égypte",
    extractionMethodFr: "Extraction secondaire à l'alcool éthylique fort à partir de la concrète de violette fraîche",
    extractionMethodEn: "Secondary Strong Ethyl Alcohol Extraction from Fresh Violet Concrete",
    shortDescriptionFr:
      "Issue des feuilles de Viola odorata cultivées en Égypte, notre Absolue de Feuilles de Violette de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.",
    shortDescriptionEn:
      "Dominating this culture historically, our Bostan Naturals Violet Leaf Absolute is an irreplaceable architectural gem for fine masculine and unisex perfumery. This refined elixir unfolds an olfactory signature of phenomenal sharp greenness. It opens with intense, metallic, sharply herbaceous top notes (evoking crumpled cucumber and spring sap), before revealing a textured heart that masterfully evolves into a massive base of chamois leather, woody and earthy notes of sovereign persistence. An indispensable architectural component for bringing tension, vertical lift, green burst and timeless chic to Fougère, Leather, Woody and luxury masculine creations.",
    image: "/images/categories/absolues.jpg",
    images: [],
    tabs: {
      description:
        "Issue des feuilles de Viola odorata cultivées en Égypte, notre Absolue de Feuilles de Violette de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.\n\nElle dévoile une signature d'une grande verdeur, fraîche et herbacée, enrichie de facettes métalliques et végétales évoquant la sève fraîche et les feuilles froissées.\n\nSon évolution révèle progressivement des nuances plus profondes, cuirées, boisées et terreuses, apportant caractère, tension et relief à la composition.\n\nUne matière de caractère destinée à apporter vibration verte, profondeur et élégance aux créations de parfumerie fine, notamment dans les accords fougères, cuirés, boisés et les compositions masculines et mixtes.",
      specifications: [
        "Nom INCI : Viola Odorata Leaf Extract",
        "Numéro CAS : 8024-08-6 / 90131-42-3",
        "Code SKU : BNABS009",
        "Source Botanique : Viola odorata L. (Violaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles",
        "Procédé : Extraction secondaire à l'éthanol à partir de la concrète de feuilles de violette",
      ],
      organoleptic: [
        "Aspect : Liquide visqueux, mobile à légèrement épais selon la température",
        "Couleur : Vert foncé à brun verdâtre profond",
        "Odeur : Intense, verte et herbacée, avec des facettes métalliques, végétales, cuirées, terreuses et boisées caractéristiques de la feuille de violette",
        "Indice de Réfraction @ 20°C : 1.4750 – 1.5000",
        "Densité Relative @ 20°C : 0.9200 – 0.9600",
        "Solubilité : Insoluble ou faiblement soluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la liberté créative. Notre Absolue de Feuilles de Violette fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent notamment de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nFeuilles de Violette d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de l'Absolue (TDS) – BNABS009\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },

  // CONCRÈTES
  {
    sku: "BNCON001",
    category: "concretes",
    name: "Concrète de Cassie d'Égypte",
    nameEn: "Egyptian Cassie Concrete",
    subtitleFr: "Le Sphinx Doré – L'Énigme Florale Cuirée Intrépide",
    subtitleEn: "The Golden Sphinx – The Bold Leathery Floral Enigma",
    inci: "Acacia Farnesiana Flower Extract",
    cas: "8023-82-3 / 89957-43-7",
    origin: "Égypte",
    extractionMethodFr: "Première extraction aux solvants volatils sélectifs sur fleurs fraîches d'hiver",
    extractionMethodEn: "Primary Extraction with Selective Volatile Solvents on Fresh Winter Flowers",
    shortDescriptionFr:
      "Obtenue par extraction primaire aux solvants volatils à partir des fleurs d'Acacia farnesiana récoltées en Égypte, notre Concrète de Cassie de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.",
    shortDescriptionEn:
      "Obtained by primary extraction with volatile solvents from Acacia farnesiana flowers ripened under Egypt's winter sun, our Bostan Naturals Cassie Concrete is an exceptional raw material. This solid waxy paste not only concentrates the absolute aromatic oils of the flower, but also traps the heavy cuticular waxes and lipidic pigments of the plant. It unfolds a fragrance of phenomenal density, floral and warm, with powerful powdery and honeyed facets, supported by a woody, herbaceous and leathery base of sovereign tenacity. It is the indispensable raw waxy structure that our factory uses to filter the precious cassie absolute destined for high-end niche perfumery.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par extraction primaire aux solvants volatils à partir des fleurs d'Acacia farnesiana récoltées en Égypte, notre Concrète de Cassie de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.\n\nCette matière cireuse concentre les constituants aromatiques de la fleur ainsi qu'une partie des cires et matières lipophiles naturellement présentes dans la plante.\n\nElle déploie un profil floral, chaud et poudré, aux facettes miellées, vertes et boisées, avec une profondeur herbacée et cuirée.\n\nMatière intermédiaire précieuse de la chaîne d'extraction de la Cassie, la Concrète peut être soumise à une purification alcoolique ultérieure pour obtenir l'Absolue de Cassie destinée à la parfumerie fine.",
      specifications: [
        "Nom INCI : Acacia Farnesiana Flower Extract",
        "Numéro CAS : 8023-82-3",
        "Code SKU : BNCON001",
        "Source Botanique : Acacia farnesiana (L.) Willd. (Fabaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Première extraction aux solvants volatils à partir de fleurs de Cassie",
      ],
      organoleptic: [
        "Aspect : masse solide cireuse à semi-solide",
        "Couleur : jaune ambré foncé à brun verdâtre profond",
        "Odeur : florale chaude poudrée, facettes miellées, vertes, boisées et herbacées",
        "Point de Fusion : 45–52°C",
        "Solubilité : Insoluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Cassie fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nCassie d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON001\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCON002",
    category: "concretes",
    name: "Concrète de Jasmine Grandiflorum d'Égypte",
    nameEn: "Egyptian Jasmine Grandiflorum Concrete",
    subtitleFr: "La Reine du Nil – L'Opulence Florale Blanche Indolique Mère",
    subtitleEn: "The Queen of the Nile – The Mother White Floral Indolic Opulence",
    inci: "Jasminum Grandiflorum Flower Extract",
    cas: "8022-43-1 / 84776-64-7",
    origin: "Égypte",
    extractionMethodFr: "Première extraction aux solvants volatils d'hydrocarbures légers sur fleurs fraîches cueillies à l'aube",
    extractionMethodEn: "Primary Extraction with Light Hydrocarbon Volatile Solvents on Fresh Flowers Harvested at Dawn",
    shortDescriptionFr:
      "Obtenue par extraction primaire aux solvants volatils à partir des fleurs de Jasminum grandiflorum récoltées en Égypte, notre Concrète de Jasmin Grandiflorum de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Issued from the primary solvent extraction of Jasminum grandiflorum flowers hand-picked at dawn in the Nile Delta, our Bostan Naturals Jasmine Grandiflorum Concrete embodies the primitive purity of the fresh flower. This solid paste of exceptional richness traps the entirety of the natural vegetable waxes, volatile esters and heavy indolic compounds of the flower. It unfolds a monumental olfactory signature: an intense, warm, fruity-honeyed white floral burst, over a balsamic-animalic base of incomparable magnetic tenacity. It is the exclusive mother paste that serves as the source for our laboratory to filter the prestigious jasmine absolute.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par extraction primaire aux solvants volatils à partir des fleurs de Jasminum grandiflorum récoltées en Égypte, notre Concrète de Jasmin Grandiflorum de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nCette matière cireuse concentre les constituants aromatiques de la fleur ainsi qu'une partie des cires et matières lipophiles naturellement présentes.\n\nElle révèle une signature florale blanche intense, chaude et riche, aux facettes fruitées, miellées et indoliques, avec des nuances vertes et légèrement animales.\n\nMatière intermédiaire précieuse de la chaîne d'extraction du jasmin, la Concrète peut être soumise à une purification alcoolique ultérieure pour obtenir l'Absolue de Jasmin destinée à la parfumerie fine.",
      specifications: [
        "Nom INCI : Jasminum Grandiflorum Flower Extract",
        "Numéro CAS : 8022-96-6 / 84776-64-7",
        "Code SKU : BNCON002",
        "Source Botanique : Jasminum grandiflorum L. (Oleaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Première extraction aux solvants volatils à partir de fleurs de Jasmin Grandiflorum",
      ],
      organoleptic: [
        "Aspect : masse cireuse à semi-solide",
        "Couleur : brun orangé à rouge ambré",
        "Odeur : florale blanche, chaude et riche, fruitée, miellée et indolique",
        "Point de Fusion : 46–52°C",
        "Solubilité : Insoluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Jasmin Grandiflorum fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nJasmin Grandiflorum d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON002\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCON003",
    category: "concretes",
    name: "Concrète de Fleur d'Oranger d'Égypte",
    nameEn: "Egyptian Orange Blossom Concrete",
    subtitleFr: "Le Crépuscule d'Or – L'Opulence Florale Animale Sacrée Mère",
    subtitleEn: "The Golden Dusk – The Sacred Mother Animalic Floral Opulence",
    inci: "Citrus Aurantium Amara Flower Extract",
    cas: "8030-28-2 / 72968-50-4",
    origin: "Égypte",
    extractionMethodFr: "Première extraction aux solvants volatils d'hydrocarbures sur fleurs fraîches de printemps",
    extractionMethodEn: "Primary Extraction with Hydrocarbon Volatile Solvents on Fresh Spring Flowers",
    shortDescriptionFr:
      "Obtenue par extraction primaire aux solvants volatils à partir des fleurs de Citrus aurantium var. amara récoltées en Égypte, notre Concrète de Fleur d'Oranger de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la profondeur de son profil olfactif.",
    shortDescriptionEn:
      "Extracted from the fresh petals of the bitter orange tree (Citrus aurantium var. amara) harvested in spring in Egypt, our Bostan Naturals Orange Blossom Concrete is a block of floral wax of exceptional richness. This vegetable cement traps the heavy cuticular waxes, the natural pigments of the flower and its most carnal notes. It unfolds a fragrance of rare power, intense floral-orange, sweet and honeyed, soaked in a strongly waxy, green-almond and indolic heart, over a persistent animalic and balsamic base. It is the unmodified raw stock used to filter our precious luxury orange blossom absolute.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par extraction primaire aux solvants volatils à partir des fleurs de Citrus aurantium var. amara récoltées en Égypte, notre Concrète de Fleur d'Oranger de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la profondeur de son profil olfactif.\n\nElle concentre les constituants aromatiques de la fleur ainsi qu'une partie des cires et matières lipophiles naturellement présentes.\n\nElle déploie une signature florale intense, douce et orangée, aux facettes miellées, vertes, cireuses et indoliques, avec des nuances chaleureuses et légèrement animales.\n\nMatière intermédiaire destinée notamment à la purification alcoolique ultérieure pour l'obtention d'un extrait de type Absolue de Fleur d'Oranger.",
      specifications: [
        "Nom INCI : Citrus Aurantium Amara Flower Extract",
        "Numéro CAS : 8030-28-2 / 72968-50-4",
        "Code SKU : BNCON003",
        "Source Botanique : Citrus aurantium var. amara L. (Rutaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Première extraction aux solvants volatils à partir de fleurs de Fleur d'Oranger",
      ],
      organoleptic: [
        "Aspect : masse cireuse à compacte",
        "Couleur : brun ambré à rouge orangé",
        "Odeur : florale, orangée, douce et miellée, avec des facettes vertes, cireuses, indoliques et légèrement animales",
        "Point de Fusion : 47–54°C",
        "Solubilité : Insoluble dans l'eau ; soluble dans les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Fleur d'Oranger fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nFleur d'Oranger d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON003\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCON004",
    category: "concretes",
    name: "Concrète de Caroube d'Égypte",
    nameEn: "Egyptian Carob Concrete",
    subtitleFr: "Le Nectar d'Alexandrie – La Matrice Gourmande et Ambrée Brute",
    subtitleEn: "The Nectar of Alexandria – The Raw Gourmand and Amber Matrix",
    inci: "Ceratonia Siliqua Fruit Extract",
    cas: "84961-45-5 / 9000-40-2",
    origin: "Égypte",
    extractionMethodFr: "Première extraction aux solvants volatils organiques sur gousses sèches sélectionnées",
    extractionMethodEn: "Primary Extraction with Organic Volatile Solvents on Selected Dry Pods",
    shortDescriptionFr:
      "Issue des gousses mûres de Ceratonia siliqua cultivées en Égypte, notre Concrète de Caroube de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et l'originalité de son profil olfactif.",
    shortDescriptionEn:
      "Obtained by primary extraction with volatile solvents from the sugar-rich pods of the carob tree ripened under Egypt's dry heat, our Bostan Naturals Carob Concrete is an exclusive raw material. This compact mass traps the heavy lipidic waxes and the natural resins of the pod. It unfolds a deeply addictive and faceted olfactory signature, with notes of burnt caramel, roasted chicory, amber cocoa and luxury blond tobacco. It is the original block of wax from which our laboratory extracts the carob absolute, guaranteeing sovereign authenticity for fine perfumery.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Issue des gousses mûres de Ceratonia siliqua cultivées en Égypte, notre Concrète de Caroube de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et l'originalité de son profil olfactif.\n\nElle concentre les constituants aromatiques ainsi qu'une partie des matières cireuses et lipophiles naturellement présentes dans la matière végétale.\n\nElle dévoile une signature chaleureuse, balsamique et gourmande, marquée par des facettes de caramel, cacao, fruits secs et nuances boisées.\n\nMatière intermédiaire précieuse pouvant être soumise à une purification alcoolique ultérieure pour obtenir l'Absolue de Caroube destinée à la parfumerie fine.",
      specifications: [
        "Nom INCI : Ceratonia Siliqua Fruit Extract",
        "Numéro CAS : 84961-45-5 / 9000-40-2",
        "Code SKU : BNCON004",
        "Source Botanique : Ceratonia siliqua L. (Fabaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Gousses / fruits",
        "Procédé : Première extraction aux solvants volatils à partir de gousses de caroube",
      ],
      organoleptic: [
        "Aspect : masse cireuse compacte à semi-solide",
        "Couleur : brun chocolat très foncé à brun ambré profond",
        "Odeur : chaleureuse, balsamique et gourmande, avec des facettes caramel, cacao, fruits secs et boisées",
        "Point de Fusion : 49–56°C",
        "Solubilité : Faiblement soluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Caroube fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nCaroube d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON004\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCON005",
    category: "concretes",
    name: "Concrète de Géranium d'Égypte",
    nameEn: "Egyptian Geranium Concrete",
    subtitleFr: "Le Sceptre Vert – La Vibration Rosée Herbacée Mère",
    subtitleEn: "The Green Scepter – The Rosy Herbaceous Mother Vibration",
    inci: "Pelargonium Graveolens Extract",
    cas: "90082-51-2 / 8000-46-2",
    origin: "Égypte",
    extractionMethodFr: "Première extraction aux solvants volatils organiques sélectifs sur parties aériennes fraîches",
    extractionMethodEn: "Primary Extraction with Selective Organic Volatile Solvents on Fresh Aerial Parts",
    shortDescriptionFr:
      "Issue des parties aériennes de Pelargonium graveolens cultivé en Égypte, notre Concrète de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Extracted with volatile solvents from the fresh leaves and stems of Pelargonium graveolens cultivated on our estates in Egypt, our Bostan Naturals Geranium Concrete is a vegetable cement of unique raw power. This solid waxy mass traps the entirety of the heavy cuticular waxes, the chlorophylls and the precious floral esters of the plant. It unfolds a fragrance of unheard-of richness, strongly herbaceous, green and minty, revealing an intensely rosy heart enhanced by earthy facets of rare elegance. It is the indispensable original block of wax used by our factory to filter the precious geranium absolute destined for fine perfumery.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Issue des parties aériennes de Pelargonium graveolens cultivé en Égypte, notre Concrète de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nCette matière cireuse concentre les constituants aromatiques de la plante ainsi qu'une partie des matières lipophiles naturellement présentes.\n\nElle déploie une signature verte, herbacée et florale, soutenue par un cœur rosé et velouté, avec des nuances terreuses, menthées et légèrement balsamiques.\n\nMatière intermédiaire pouvant être soumise à une purification alcoolique ultérieure pour obtenir l'Absolue de Géranium destinée à la parfumerie fine.",
      specifications: [
        "Nom INCI : Pelargonium Graveolens Extract",
        "Numéro CAS : 90082-51-2 / 8000-46-2",
        "Code SKU : BNCON005",
        "Source Botanique : Pelargonium graveolens L'Hér. (Geraniaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles et parties aériennes",
        "Procédé : Première extraction aux solvants volatils à partir de la matière végétale de Géranium",
      ],
      organoleptic: [
        "Aspect : masse cireuse compacte",
        "Couleur : vert olive foncé à vert émeraude",
        "Odeur : puissante, florale et rosée, fortement herbacée, verte, menthée et terreuse",
        "Point de Fusion : 44–51°C",
        "Solubilité : Insoluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Géranium fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nGéranium d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON005\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCON006",
    category: "concretes",
    name: "Concrète de Basilic d'Égypte",
    nameEn: "Egyptian Basil Concrete",
    subtitleFr: "Le Bloc Aromatique Grand Vert – L'Essence Anisée Mère",
    subtitleEn: "The Great Green Aromatic Block – The Mother Aniseed Essence",
    inci: "Ocimum Basilicum Extract",
    cas: "8015-73-4 / 84775-71-3",
    origin: "Égypte",
    extractionMethodFr: "Première extraction par solvants volatils organiques sur feuilles et sommités fraîches",
    extractionMethodEn: "Primary Extraction with Organic Volatile Solvents on Fresh Leaves and Tops",
    shortDescriptionFr:
      "Issue des feuilles et sommités fleuries d'Ocimum basilicum cultivé en Égypte, notre Concrète de Basilic de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Extracted with volatile solvents from the flowering tops and fresh leaves of Ocimum basilicum cultivated under Egypt's ideal climate, our Bostan Naturals Basil Concrete is a raw material of unique brute power. This compact waxy block traps the heavy cuticular waxes and the precious heat-sensitive odorant elements of the plant. It unfolds a fragrance of melting clarity, fresh, green and herbaceous, opening on an intensely spicy and aniseed heart (estragole) with sweet liquorice nuances. It is the indispensable raw stock our factory uses to filter the precious basil absolute destined for fine perfumery.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Issue des feuilles et sommités fleuries d'Ocimum basilicum cultivé en Égypte, notre Concrète de Basilic de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nElle concentre les constituants aromatiques ainsi qu'une partie des matières cireuses et lipophiles naturellement présentes.\n\nElle révèle une signature fraîche, verte, herbacée et épicée, avec des facettes anisées, réglissées et légèrement cireuses.\n\nMatière intermédiaire pouvant être soumise à une purification alcoolique ultérieure pour obtenir l'Absolue de Basilic destinée à la parfumerie fine.",
      specifications: [
        "Nom INCI : Ocimum Basilicum Extract",
        "Numéro CAS : 8015-73-4 / 84775-71-3",
        "Code SKU : BNCON006",
        "Source Botanique : Ocimum basilicum L. (Lamiaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles et sommités fleuries",
        "Procédé : Première extraction aux solvants volatils à partir de la matière végétale de Basilic",
      ],
      organoleptic: [
        "Aspect : masse cireuse compacte",
        "Couleur : vert foncé à brun verdâtre",
        "Odeur : très puissante, fraîche, verte, herbacée et épicée, avec des facettes anisées, réglissées et cireuses",
        "Point de Fusion : 45–51°C",
        "Solubilité : Insoluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Basilic fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nBasilic d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON006\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCON007",
    category: "concretes",
    name: "Concrète de Petitgrain Bigarade d'Égypte",
    nameEn: "Egyptian Petitgrain Bigarade Concrete",
    subtitleFr: "Le Ciment Vert de l'Oranger – La Densité Ligneuse Flanquée de Fleur",
    subtitleEn: "The Green Cement of the Orange Tree – The Woody Density Flanked by Flower",
    inci: "Citrus Aurantium Amara Leaf/Twig Extract",
    cas: "8014-17-3 / 72968-50-4",
    origin: "Égypte",
    extractionMethodFr: "Extraction primaire par solvants volatils sélectifs sur rameaux et feuilles fraîches",
    extractionMethodEn: "Primary Extraction with Selective Volatile Solvents on Fresh Twigs and Leaves",
    shortDescriptionFr:
      "Obtenue à partir des feuilles et jeunes rameaux de Citrus aurantium var. amara récoltés en Égypte, notre Concrète de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Obtained by solvent extraction from the carefully selected leaves and young twigs of the bitter orange tree in Egypt, our Bostan Naturals Petitgrain Bigarade Concrete is a highly technical industrial exclusive. This solid waxy paste concentrates not only the volatile aromatic oils of the leaves, but also the heavy cuticular waxes and traces of the tree's floral resins. It unfolds a fragrance of bitter woody greenness, softened by honeyed orange blossom notes. It is the unmodified raw stock we use to shape our luxury petitgrain absolute.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue à partir des feuilles et jeunes rameaux de Citrus aurantium var. amara récoltés en Égypte, notre Concrète de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nElle concentre les constituants aromatiques de la matière végétale ainsi qu'une partie des cires et matières lipophiles naturellement présentes.\n\nElle révèle une signature verte, fraîche et boisée, avec des facettes herbacées, florales, amères et cireuses.\n\nMatière intermédiaire pouvant être soumise à une purification alcoolique ultérieure pour obtenir un extrait de type Absolue destiné à la parfumerie fine.",
      specifications: [
        "Nom INCI : Citrus Aurantium Amara Leaf/Twig Extract",
        "Numéro CAS : 8014-17-3 / 72968-50-4",
        "Code SKU : BNCON007",
        "Source Botanique : Citrus aurantium var. amara L. (Rutaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles et jeunes rameaux",
        "Procédé : Première extraction aux solvants volatils à partir de feuilles et jeunes rameaux de Petitgrain Bigarade",
      ],
      organoleptic: [
        "Aspect : masse cireuse compacte",
        "Couleur : vert olive foncé à brun verdâtre",
        "Odeur : puissante, verte, fraîche et boisée, avec des facettes herbacées, florales, amères et cireuses",
        "Point de Fusion : 44–51°C",
        "Solubilité : Insoluble dans l'eau ; soluble dans les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Petitgrain Bigarade fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nPetitgrain Bigarade d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON007\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCON008",
    category: "concretes",
    name: "Concrète de Jasmine Sambac d'Égypte",
    nameEn: "Egyptian Jasmine Sambac Concrete",
    subtitleFr: "La Cire Nocturne de l'Indole – L'Opulence Animale Brute",
    subtitleEn: "The Nocturnal Wax of Indole – The Raw Animalic Opulence",
    inci: "Jasminum Sambac Flower Cera",
    cas: "91770-14-8 / 1034798-23-6",
    origin: "Égypte",
    extractionMethodFr: "Première extraction aux solvants volatils d'hydrocarbures légers sur fleurs fraîches",
    extractionMethodEn: "Primary Extraction with Light Hydrocarbon Volatile Solvents on Fresh Flowers",
    shortDescriptionFr:
      "Issue des fleurs de Jasminum sambac cultivées en Égypte, notre Concrète de Jasmin Sambac de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Issued from the first processing of Jasminum sambac flowers harvested at nightfall in our Egyptian estates, our Bostan Naturals Jasmine Sambac Concrete is the paroxysm of raw floral sensuality. This solid waxy paste retains the entirety of the heavy indolic compounds, the cuticular waxes and the natural pigments of the flower of فل. It unfolds a fragrance of rare narcotic force, greener, fruitier and more animalic than Grandiflorum. It is the original block of wax from which our laboratory extracts the sambac absolute, guaranteeing sovereign authenticity without any external manipulation.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Issue des fleurs de Jasminum sambac cultivées en Égypte, notre Concrète de Jasmin Sambac de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nCette matière cireuse concentre les constituants aromatiques de la fleur ainsi qu'une partie des cires et matières lipophiles naturellement présentes.\n\nElle dévoile une signature florale blanche intense, riche et opulente, accompagnée de facettes fruitées, vertes et miellées, puis d'un cœur indolique et sensuel aux nuances légèrement animales.\n\nMatière intermédiaire précieuse pouvant être soumise à une purification alcoolique ultérieure pour obtenir l'Absolue de Jasmin Sambac destinée à la parfumerie fine.",
      specifications: [
        "Nom INCI : Jasminum Sambac Flower Extract",
        "Numéro CAS : 91770-14-8 / 1034798-23-6",
        "Code SKU : BNCON008",
        "Source Botanique : Jasminum sambac (L.) Aiton (Oleaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Première extraction aux solvants volatils à partir de fleurs de Jasmin Sambac",
      ],
      organoleptic: [
        "Aspect : masse cireuse compacte",
        "Couleur : orange foncé à brun rouge",
        "Odeur : intensément florale, blanche, fruitée et verte, avec des facettes miellées, indoliques et légèrement animales",
        "Point de Fusion : 46–53°C",
        "Solubilité : Insoluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés après réchauffement contrôlé si nécessaire",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Jasmin Sambac fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nJasmin Sambac d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON008\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCON009",
    category: "concretes",
    name: "Concrète de Feuilles de Violette d'Égypte",
    nameEn: "Egyptian Violet Leaf Concrete",
    subtitleFr: "Le Bloc Vert Émeraude – La Force Cuirée Végétale à l'État Brut",
    subtitleEn: "The Emerald Green Block – The Raw Vegetable Leathery Force",
    inci: "Viola Odorata Leaf Cera",
    cas: "8024-08-6 / 90131-42-3",
    origin: "Égypte",
    extractionMethodFr: "Extraction primaire par solvants organiques volatils à partir des feuilles fraîches",
    extractionMethodEn: "Primary Extraction with Volatile Organic Solvents from Fresh Leaves",
    shortDescriptionFr:
      "Issue des feuilles de Viola odorata cultivées en Égypte, notre Concrète de Feuilles de Violette de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.",
    shortDescriptionEn:
      "Egypt historically dominating this culture, our Bostan Naturals Violet Leaf Concrete is the primary vegetable cement extracted from the fresh leaves of Viola odorata. This solid and compact mass traps the heavy cuticular waxes and all the chlorophylls of the leaf. It unfolds a fragrance of phenomenal cutting greenness, with intense metallic notes and a very pronounced suede leather base. It is the indispensable raw waxy structure that our factory uses to filter the precious violet absolute destined for the greatest European masculine and masculine-unisex creations.",
    image: "/images/categories/concretes.jpg",
    images: [],
    tabs: {
      description:
        "Issue des feuilles de Viola odorata cultivées en Égypte, notre Concrète de Feuilles de Violette de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la singularité de son profil olfactif.\n\nCette matière cireuse concentre les constituants aromatiques ainsi qu'une partie des cires et matières lipophiles naturellement présentes dans les feuilles.\n\nElle dévoile une signature intensément verte, végétale et herbacée, enrichie de facettes métalliques, fraîches et cireuses, avec des nuances de feuilles froissées, de sève et de terre fraîche.\n\nMatière intermédiaire pouvant être soumise à une purification alcoolique ultérieure pour obtenir l'Absolue de Feuilles de Violette destinée à la parfumerie fine.",
      specifications: [
        "Nom INCI : Viola Odorata Leaf Extract",
        "Numéro CAS : 8024-08-6 / 90131-42-3",
        "Code SKU : BNCON009",
        "Source Botanique : Viola odorata L. (Violaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles",
        "Procédé : Première extraction aux solvants volatils à partir de feuilles de violette",
      ],
      organoleptic: [
        "Aspect : masse cireuse dure à semi-solide",
        "Couleur : vert foncé à vert olive",
        "Odeur : puissante, verte, végétale et herbacée, avec des facettes métalliques, cireuses, terreuses et de feuilles fraîches",
        "Point de Fusion : 48–55°C",
        "Solubilité : Insoluble dans l'eau ; soluble dans l'éthanol et les solvants de parfumerie appropriés après réchauffement contrôlé si nécessaire",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Concrète de Feuilles de Violette fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA lorsqu'elles sont applicables à son utilisation prévue.\n\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature du produit.\n\nLes données analytiques disponibles permettent de documenter le profil de la matière et ses caractéristiques pertinentes pour son évaluation professionnelle.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nFeuilles de Violette d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des solvants résiduels :\nDes analyses des solvants résiduels sont réalisées lorsque cela est applicable au produit et à son procédé d'extraction.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique de la Concrète (TDS) – BNCON009\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },

  // HUILES ESSENTIELLES
  {
    sku: "BNHE001",
    category: "huiles-essentielles",
    name: "Huile Essentielle de Néroli d'Égypte",
    nameEn: "Egyptian Neroli Essential Oil",
    subtitleFr: "La Quintessence de l'Élégance – L'Éclat Floral Vert Absolu",
    subtitleEn: "The Quintessence of Elegance – The Absolute Green Floral Radiance",
    inci: "Citrus Aurantium Amara Flower Oil",
    cas: "8016-38-4 / 72968-50-4",
    origin: "Égypte",
    extractionMethodFr: "Distillation artisanale complète à la vapeur d'eau des fleurs fraîches",
    extractionMethodEn: "Complete Artisanal Steam Distillation of Fresh Flowers",
    shortDescriptionFr:
      "Obtenue par distillation à la vapeur des fleurs fraîches de Citrus aurantium var. amara récoltées en Égypte, notre Huile Essentielle de Néroli de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la finesse de son profil olfactif.",
    shortDescriptionEn:
      "Steam distilled from the freshly picked petals of the bitter orange tree in Egypt's fertile valleys, our Bostan Naturals Neroli Essential Oil is the ultimate symbol of aristocratic freshness in niche perfumery. This precious elixir unfolds an aerial, sparkling olfactory signature of crystalline purity. It opens on a citrusy zesty burst and green sap notes, revealing an immaculate white floral heart, at once clean, slightly honeyed and powdery, before blossoming on a woody-floral base of absolute finesse. An incomparable prestige ingredient to bring light, vibration and timeless distinction to high-line Eau de Cologne and Floral Perfume structures.",
    image: "/images/categories/huiles-essentielles.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par distillation à la vapeur des fleurs fraîches de Citrus aurantium var. amara récoltées en Égypte, notre Huile Essentielle de Néroli de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la finesse de son profil olfactif.\n\nElle dévoile une signature aérienne, fraîche et lumineuse, avec une ouverture zestée et verte, suivie d'un cœur floral blanc, délicatement miellé et légèrement poudré.\n\nSa fraîcheur florale et ses facettes vertes en font une matière de choix pour apporter lumière, fraîcheur et élégance aux compositions de parfumerie, notamment aux Eaux de Cologne et aux créations florales.",
      specifications: [
        "Nom INCI : Citrus Aurantium Amara Flower Oil",
        "Numéro CAS : 8016-38-4 / 72968-50-4",
        "Code SKU : BNHE001",
        "Source Botanique : Citrus aurantium var. amara L. (Rutaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fleurs",
        "Procédé : Distillation à la vapeur des fleurs fraîches de bigaradier",
      ],
      organoleptic: [
        "Aspect : Liquide mobile",
        "Couleur : Jaune pâle à ambré clair",
        "Odeur : Puissante, fraîche, florale, zestée et verte, avec des facettes miellées",
        "Indice de Réfraction @ 20°C : 1.4630 – 1.4740",
        "Densité Relative @ 20°C : 0.8640 – 0.8760",
        "Pouvoir Rotatoire @ 20°C : +1.0 à +11.0",
        "Solubilité : Soluble dans l'éthanol, les huiles fixes et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Huile Essentielle de Néroli fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nLes constituants soumis à déclaration réglementaire, notamment certains allergènes naturellement présents dans l'huile essentielle, sont évalués sur la base des données analytiques disponibles pour le produit et, lorsque nécessaire, du lot concerné, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nNéroli d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des constituants :\nLes constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique (TDS) – BNHE001\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNHE002",
    category: "huiles-essentielles",
    name: "Huile Essentielle de Petitgrain Bigarade d'Égypte",
    nameEn: "Egyptian Petitgrain Bigarade Essential Oil",
    subtitleFr: "L'Or Vert des Feuilles – L'Énergie Boisée de la Pluie",
    subtitleEn: "The Green Gold of Leaves – The Woody Energy of the Rain",
    inci: "Citrus Aurantium Amara Leaf/Twig Oil",
    cas: "8014-17-3 / 72968-50-4",
    origin: "Égypte",
    extractionMethodFr: "Distillation complète à la vapeur d'eau des feuilles et jeunes rameaux fraîchement coupés",
    extractionMethodEn: "Complete Steam Distillation of Freshly Cut Leaves and Young Twigs",
    shortDescriptionFr:
      "Obtenue par distillation à la vapeur des feuilles et jeunes rameaux de Citrus aurantium var. amara récoltés en Égypte, notre Huile Essentielle de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la fraîcheur de son profil olfactif.",
    shortDescriptionEn:
      "Distilled from the green leaves and young twigs of the bitter orange tree carefully pruned in Egypt, our Bostan Naturals Petitgrain Bigarade Essential Oil is a cornerstone of character for niche perfumery. This elixir offers an olfactory signature of wild freshness and textured intensity. It is characterized by a green, vivid and sharp attack, evolving towards a discreet floral heart reminiscent of orange blossom, magnified by a woody, herbaceous, bitter and dark-woody base that evokes the smell of the earth after the rain. An essential architectural component to breathe relief, elegant masculinity, tension and nervy hold into Fougère, Woody structures and modern Colognes.",
    image: "/images/categories/huiles-essentielles.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par distillation à la vapeur des feuilles et jeunes rameaux de Citrus aurantium var. amara récoltés en Égypte, notre Huile Essentielle de Petitgrain Bigarade de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la fraîcheur de son profil olfactif.\n\nElle révèle une signature verte, fraîche et boisée, soutenue par des facettes herbacées, florales et légèrement amères.\n\nSa structure apporte énergie, tension, fraîcheur et profondeur aux compositions de parfumerie, notamment aux colognes, accords fougères et créations boisées.",
      specifications: [
        "Nom INCI : Citrus Aurantium Amara Leaf/Twig Oil",
        "Numéro CAS : 8014-17-3 / 72968-50-4",
        "Code SKU : BNHE002",
        "Source Botanique : Citrus aurantium var. amara L. (Rutaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles et jeunes rameaux",
        "Procédé : Distillation à la vapeur des feuilles et jeunes rameaux",
      ],
      organoleptic: [
        "Aspect : Liquide mobile",
        "Couleur : Jaune pâle à jaune-vert",
        "Odeur : Fraîche, verte, herbacée, boisée et légèrement amère, avec des facettes florales",
        "Indice de Réfraction @ 20°C : 1.4600 – 1.4720",
        "Densité Relative @ 20°C : 0.8800 – 0.8990",
        "Pouvoir Rotatoire @ 20°C : -5 à +1",
        "Solubilité : Soluble dans l'éthanol, les huiles fixes et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Huile Essentielle de Petitgrain Bigarade fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nLes données analytiques disponibles permettent de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nPetitgrain Bigarade d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des constituants :\nLes constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique (TDS) – BNHE002\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNHE003",
    category: "huiles-essentielles",
    name: "Huile Essentielle de Géranium d'Égypte",
    nameEn: "Egyptian Geranium Essential Oil",
    subtitleFr: "La Vibrance Florale – L'Éclat Rosé aux Accents Verts et Épicés",
    subtitleEn: "The Floral Vibrance – The Rosy Radiance with Green and Spicy Accents",
    inci: "Pelargonium Graveolens Flower Oil (ou Pelargonium Graveolens Oil)",
    cas: "90082-51-2 / 8000-46-2",
    origin: "Égypte",
    extractionMethodFr: "Distillation complète à la vapeur d'eau des parties aériennes fraîches",
    extractionMethodEn: "Complete Steam Distillation of Fresh Aerial Parts",
    shortDescriptionFr:
      "Issue des feuilles et parties aériennes de Pelargonium graveolens cultivé en Égypte et obtenue par distillation à la vapeur, notre Huile Essentielle de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.",
    shortDescriptionEn:
      "Distilled with traditional know-how from the fresh leaves and stems of Pelargonium graveolens cultivated in the exceptional terroirs of Egypt, our Bostan Naturals Geranium Essential Oil is the essential commercial pillar of fine perfumery. This dynamic and faceted elixir offers an alternative of unheard-of richness to rose essence, prized by the greatest niche creators. It unfolds a highly sophisticated olfactory signature: a vivid, herbaceous and subtly fruity burst, opening on an intensely rosy floral heart, magnified by peppermint flashes, lychee nuances and a slightly earthy balsamic base of rare elegance. An indispensable architectural ingredient to breathe relief, freshness and masterful hold into Floral, Fougère and Chypre structures.",
    image: "/images/categories/huiles-essentielles.jpg",
    images: [],
    tabs: {
      description:
        "Issue des feuilles et parties aériennes de Pelargonium graveolens cultivé en Égypte et obtenue par distillation à la vapeur, notre Huile Essentielle de Géranium de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour la richesse et la complexité de son profil olfactif.\n\nElle dévoile une signature florale rosée et verte, fraîche et herbacée, enrichie de facettes épicées, menthées et légèrement boisées.\n\nSon caractère apporte relief, fraîcheur, naturel et vibration aux compositions de parfumerie fine, notamment dans les accords floraux, fougères et chyprés.",
      specifications: [
        "Nom INCI : Pelargonium Graveolens Oil",
        "Numéro CAS : 90082-51-2 / 8000-46-2",
        "Code SKU : BNHE003",
        "Source Botanique : Pelargonium graveolens L'Hér. (Geraniaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Feuilles et parties aériennes",
        "Procédé : Distillation à la vapeur de la matière végétale fraîche",
      ],
      organoleptic: [
        "Aspect : Liquide mobile",
        "Couleur : Jaune ambré clair à vert pâle",
        "Odeur : Puissante, florale et rosée, verte, fraîche, menthée et épicée",
        "Indice de Réfraction @ 20°C : 1.4610 – 1.4720",
        "Densité Relative @ 20°C : 0.8840 – 0.9010",
        "Pouvoir Rotatoire @ 20°C : -14 à -7",
        "Solubilité : Soluble dans l'éthanol, les huiles fixes et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Huile Essentielle de Géranium fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nLes données analytiques disponibles permettent de documenter le profil chromatographique et les constituants pertinents du lot, afin de faciliter l'évaluation réglementaire et la formulation de vos parfums finis.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nGéranium d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des constituants :\nLes constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique (TDS) – BNHE003\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNHE004",
    category: "huiles-essentielles",
    name: "Huile Essentielle de Camomille Bleue d'Égypte",
    nameEn: "Egyptian Blue Chamomile Essential Oil",
    subtitleFr: "L'Élixir d'Encre Sacré – La Signature Audacieuse de la Parfumerie d'Auteur",
    subtitleEn: "The Sacred Ink Elixir – The Bold Signature of Author Perfumery",
    inci: "Chamomilla Recutita Flower Oil (ou Matricaria Recutita Flower Oil)",
    cas: "8002-66-2 / 84082-60-0",
    origin: "Égypte",
    extractionMethodFr: "Distillation rigoureuse à la vapeur d'eau des capitules floraux séchés",
    extractionMethodEn: "Rigorous Steam Distillation of Dried Floral Heads",
    shortDescriptionFr:
      "Distillée à partir des capitules floraux de camomille matricaire issus d'Égypte, notre Huile Essentielle de Camomille Bleue se distingue par sa couleur bleu profond caractéristique, liée à la formation naturelle de chamazulène au cours du processus de distillation.",
    shortDescriptionEn:
      "Distilled from the flowers of chamomile matricaria carefully cultivated in Egypt, our Bostan Naturals Blue Chamomile Essential Oil is a masterpiece of visual and olfactory distinction for niche perfumery. This extraordinary elixir, characterized by its fascinating ink-blue color due to its natural richness in chamazulene, offers a highly artistic signature. It unfolds an olfactory profile of enchanting complexity: a herbaceous and ripe apple attack, opening on a warm, sweet, intensely aromatic heart, and an earthy, balsamic-hay base with mystical nuances evoking luxury blond tobacco. An avant-garde ingredient of rare chromatic and olfactory force, indispensable for signing the most audacious woody, ambery and aromatic creations.",
    image: "/images/categories/huiles-essentielles.jpg",
    images: [],
    tabs: {
      description:
        "Distillée à partir des capitules floraux de camomille matricaire issus d'Égypte, notre Huile Essentielle de Camomille Bleue se distingue par sa couleur bleu profond caractéristique, liée à la formation naturelle de chamazulène au cours du processus de distillation.\n\nSon profil olfactif révèle une signature aromatique complexe, avec une attaque herbacée et légèrement fruitée, des nuances chaudes et aromatiques au cœur, puis un fond plus profond, terreux, balsamique et foin.\n\nUne matière première de caractère destinée aux compositions de parfumerie fine et de niche, notamment dans les accords aromatiques, boisés, ambrés et herbacés, où elle apporte profondeur, couleur et personnalité.",
      specifications: [
        "Nom INCI : Chamomilla Recutita Flower Oil",
        "Numéro CAS : 8002-66-2 / 84082-60-0",
        "Code SKU : BNHE004",
        "Source Botanique : Matricaria recutita L. / Matricaria chamomilla L. (Asteraceae)",
        "Origine : Égypte",
        "Partie de la Plante : Capitules floraux",
        "Procédé : Distillation à la vapeur",
      ],
      organoleptic: [
        "Aspect : Liquide mobile à légèrement visqueux",
        "Couleur : Bleu profond à bleu nuit caractéristique",
        "Odeur : Puissante, aromatique et herbacée, fruitée, chaude, balsamique et foin",
        "Indice de Réfraction @ 20°C : 1.4800 – 1.5100",
        "Densité Relative @ 20°C : 0.9100 – 0.9550",
        "Solubilité : Soluble dans l'éthanol et les huiles compatibles et solvants de parfumerie appropriés",
      ],
      regulatory:
        "Conformité aux Exigences Applicables\n\nNotre Huile Essentielle de Camomille Bleue est destinée à un usage professionnel et fait l'objet d'une évaluation documentaire adaptée à sa nature et à son utilisation prévue.\n\nLes exigences applicables de la réglementation européenne REACH ainsi que les restrictions applicables de l'IFRA pour l'utilisation prévue en parfumerie sont prises en compte.\n\nLes variations naturelles liées à l'origine, à la matière végétale et au procédé de distillation sont prises en considération. Les principaux constituants volatils, notamment le chamazulène et les oxydes de bisabolol, peuvent être évalués par chromatographie lorsque cela est applicable au produit et au lot.",
      quality:
        "Contrôle Qualité :\nChaque lot commercialisé fait l'objet de contrôles qualité adaptés.\nProfil Chromatographique :\nUne analyse GC-MS est disponible pour chaque lot commercialisé.\nTraçabilité :\nL'origine et la traçabilité sont documentées jusqu'au conditionnement commercial.\nConditionnement :\nConditionnement de transport adapté à la protection de la matière contre la lumière et les conditions environnementales applicables.\nTraçabilité du conditionnement :\nChaque unité est identifiée par le nom du produit, le SKU, le numéro de lot et les informations de traçabilité applicables.",
      confidentiality:
        "Documentation Technique du Lot\n\nAfin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale.\n\nDocuments disponibles :\n\n1. Télécharger profil GC-MS\n2. Certificat d'Analyse (COA) – BNHE004\n3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNHE005",
    category: "huiles-essentielles",
    name: "Huile Essentielle de Marjolaine d'Égypte",
    nameEn: "Egyptian Marjoram Essential Oil",
    subtitleFr: "L'Apothicaire Royal – La Chaleur Aromatique aux Accents Épicés Doux",
    subtitleEn: "The Royal Apothecary – The Aromatic Warmth with Sweet Spicy Accents",
    inci: "Origanum Majorana Flower Oil (ou Origanum Majorana Leaf Oil)",
    cas: "8015-01-8 / 84082-58-6",
    origin: "Égypte",
    extractionMethodFr: "Distillation complète à la vapeur d'eau des sommités fleuries fraîches",
    extractionMethodEn: "Complete Steam Distillation of Fresh Flowering Tops",
    shortDescriptionFr:
      "Obtenue par distillation à la vapeur des sommités fleuries d'Origanum majorana cultivé en Égypte, notre Huile Essentielle de Marjolaine de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour sa richesse aromatique et sa douceur épicée.",
    shortDescriptionEn:
      "Steam distilled from the flowering tops of Majorana hortensis cultivated in the exceptional Egyptian terroir, our Bostan Naturals Marjoram Essential Oil is of rare therapeutic and olfactory finesse, world-renowned. This aromatic jewel unfolds an olfactory signature of enveloping warmth: a fresh and herbaceous burst that quickly opens on an intensely woody, sweet and camphorated heart, enhanced by spicy facets reminiscent of cardamom and nutmeg. An apothecary ingredient of vintage elegance indispensable for structuring, softening and bringing a noble aromatic relief to masculine, woody compositions and the top notes of niche creations.",
    image: "/images/categories/huiles-essentielles.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par distillation à la vapeur des sommités fleuries d'Origanum majorana cultivé en Égypte, notre Huile Essentielle de Marjolaine de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour sa richesse aromatique et sa douceur épicée.\n\nElle révèle une signature fraîche, herbacée et chaleureuse, avec des facettes boisées, légèrement épicées et camphrées.\n\nUne matière polyvalente destinée aux compositions aromatiques, fougères, boisées et aux créations de parfumerie fine recherchant chaleur et relief.",
      specifications: [
        "Nom INCI : Origanum Majorana Flower Oil",
        "Numéro CAS : 8015-01-8 / 84082-58-6",
        "Code SKU : BNHE005",
        "Source Botanique : Origanum majorana L. (syn. Majorana hortensis Moench) (Lamiaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Sommités fleuries et parties aériennes",
        "Procédé : Distillation à la vapeur",
      ],
      organoleptic: [
        "Aspect : Liquide mobile, limpide",
        "Couleur : Jaune pâle à jaune-vert",
        "Odeur : Puissante, aromatique, fraîche et herbacée, chaude, boisée, légèrement épicée et camphrée",
        "Indice de Réfraction @ 20°C : 1.4650 – 1.4800",
        "Densité Relative @ 20°C : 0.8800 – 0.9100",
        "Pouvoir Rotatoire @ 20°C : +12 à +25",
        "Solubilité : Soluble dans l'éthanol, les huiles fixes et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Huile Essentielle de Marjolaine fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nLes principaux constituants, notamment le terpinène-4-ol, le gamma-terpinène et le linalol, peuvent être évalués par chromatographie selon les données analytiques disponibles pour le produit et le lot.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nMarjolaine d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des constituants :\nLes constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique (TDS) – BNHE005\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNHE006",
    category: "huiles-essentielles",
    name: "Huile Essentielle de Graines de Coriandre d'Égypte",
    nameEn: "Egyptian Coriander Seed Essential Oil",
    subtitleFr: "La Fraîcheur Lumineuse – Le Frisson Épicé, Boisé et Éclatant",
    subtitleEn: "The Luminous Freshness – The Spicy, Woody and Radiant Shiver",
    inci: "Coriandrum Sativum Fruit Oil (ou Coriandrum Sativum Seed Oil)",
    cas: "8008-52-4 / 84775-50-8",
    origin: "Égypte",
    extractionMethodFr: "Distillation complète à la vapeur d'eau des graines séchées et broyées",
    extractionMethodEn: "Complete Steam Distillation of Dried and Ground Seeds",
    shortDescriptionFr:
      "Obtenue par distillation à la vapeur des fruits de Coriandrum sativum cultivés en Égypte, notre Huile Essentielle de Graines de Coriandre de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, naturellement riche en linalool et sélectionnée pour sa fraîcheur aromatique.",
    shortDescriptionEn:
      "Distilled from the ripe seeds of Coriandrum sativum cultivated under Egypt's generous sun, our Bostan Naturals Coriander Seed Essential Oil is a jewel of dynamism for fine perfumery. This elixir offers an olfactory signature of melting clarity and exceptional vibration. Very rich in natural linalool, it opens on a fresh, peppery and intensely zesty spicy attack, revealing a soft woody heart with subtle floral facets (reminiscent of freesia) and a textured aromatic base of great persistence. An indispensable avant-garde ingredient to open the top notes and bring modern luminosity, lift and clarity to Woody, Ambery compositions and niche Colognes.",
    image: "/images/categories/huiles-essentielles.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par distillation à la vapeur des fruits de Coriandrum sativum cultivés en Égypte, notre Huile Essentielle de Graines de Coriandre de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, naturellement riche en linalool et sélectionnée pour sa fraîcheur aromatique.\n\nElle dévoile une signature fraîche, épicée et herbacée, soutenue par des facettes boisées, légèrement florales et zestées.\n\nSon profil apporte éclat, fraîcheur et vibration aux compositions aromatiques, boisées, florales et aux créations de parfumerie fine.",
      specifications: [
        "Nom INCI : Coriandrum Sativum Fruit Oil",
        "Numéro CAS : 8008-52-4 / 84775-50-8",
        "Code SKU : BNHE006",
        "Source Botanique : Coriandrum sativum L. (Apiaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Fruits / graines",
        "Procédé : Distillation à la vapeur",
      ],
      organoleptic: [
        "Aspect : Liquide mobile, limpide",
        "Couleur : Incolore à jaune pâle",
        "Odeur : Fraîche, épicée, herbacée et boisée, légèrement aromatique et florale",
        "Indice de Réfraction @ 20°C : 1.4620 – 1.4700",
        "Densité Relative @ 20°C : 0.8600 – 0.8800",
        "Pouvoir Rotatoire @ 20°C : +8 à +15",
        "Solubilité : Soluble dans l'éthanol, les huiles fixes et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Huile Essentielle de Graines de Coriandre fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nLes principaux constituants, notamment le linalool, le gamma-terpinène, le limonène, le camphre et le géraniol, peuvent être évalués par chromatographie selon les données analytiques disponibles pour le produit et le lot.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nGraines de Coriandre d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des constituants :\nLes constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique (TDS) – BNHE006\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNHE007",
    category: "huiles-essentielles",
    name: "Huile Essentielle de Cumin d'Égypte",
    nameEn: "Egyptian Cumin Essential Oil",
    subtitleFr: "La Chaleur Jaspée – Le Frisson Épicé, Charnel et Mosaïque",
    subtitleEn: "The Veined Warmth – The Spicy, Carnal and Mosaic Shiver",
    inci: "Cuminum Cyminum Seed Oil",
    cas: "8014-13-9 / 84775-51-9",
    origin: "Égypte",
    extractionMethodFr: "Distillation complète à la vapeur d'eau des graines séchées et broyées",
    extractionMethodEn: "Complete Steam Distillation of Dried and Ground Seeds",
    shortDescriptionFr:
      "Obtenue par distillation à la vapeur des graines de Cuminum cyminum cultivées en Égypte, notre Huile Essentielle de Cumin de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour son caractère aromatique puissant et singulier.",
    shortDescriptionEn:
      "Distilled from the seeds of Cuminum cyminum harvested under Egypt's arid and irrigated climate, our Bostan Naturals Cumin Essential Oil is a secret of strength and audacity for author perfumery. This mystical elixir unfolds an olfactory signature of troubling sensuality and striking animal warmth, highly sought after by niche creators to recreate the olfactory atmosphere of Moorish Andalusia. It is characterized by a sharp, green and bitter spicy attack, which blossoms on a warm, earthy, carnal and deeply intimate heart ('human skin' facets), before melting into a woody-balsamic sillage of rare tenacity. An indispensable architectural component to bring sensuality, relief, vibration and a striking contrast to Leathery, Ambery structures and prestige Oud notes.",
    image: "/images/categories/huiles-essentielles.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par distillation à la vapeur des graines de Cuminum cyminum cultivées en Égypte, notre Huile Essentielle de Cumin de Bostan Naturals est une matière première naturelle égyptienne de haute qualité, sélectionnée pour son caractère aromatique puissant et singulier.\n\nElle révèle une signature chaude et épicée, avec des notes piquantes, vertes et aromatiques, évoluant vers des facettes chaudes, terreuses, boisées et balsamiques.\n\nUne matière de caractère destinée notamment aux créations de parfumerie de niche, aux accords cuirés, ambrés et boisés, où elle apporte chaleur, tension et profondeur.",
      specifications: [
        "Nom INCI : Cuminum Cyminum Seed Oil",
        "Numéro CAS : 8014-13-9 / 84775-51-9",
        "Code SKU : BNHE007",
        "Source Botanique : Cuminum cyminum L. (Apiaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Graines",
        "Procédé : Distillation à la vapeur de graines séchées",
      ],
      organoleptic: [
        "Aspect : Liquide mobile, limpide, avec une légère évolution de viscosité selon les conditions",
        "Couleur : Jaune pâle à ambré",
        "Odeur : Très puissante, épicée, chaude, terreuse et aromatique, avec une légère facette amère",
        "Indice de Réfraction @ 20°C : 1.4900 – 1.5080",
        "Densité Relative @ 20°C : 0.9050 – 0.9300",
        "Pouvoir Rotatoire @ 20°C : +1 à +8",
        "Solubilité : Soluble dans l'éthanol, les huiles fixes et les solvants de parfumerie appropriés",
      ],
      regulatory:
        "Chez Bostan Naturals, la rigueur technique accompagne la sélection et l'évaluation de nos matières premières.\n\nNotre Huile Essentielle de Cumin fait l'objet de contrôles qualité et d'analyses adaptés à la nature de la matière et à son utilisation prévue.\n\nLa matière est conforme aux exigences applicables de la réglementation européenne REACH et aux exigences et restrictions applicables de l'IFRA pour son utilisation prévue en parfumerie.\n\nLe cuminaldéhyde et les autres constituants volatils pertinents peuvent être évalués par chromatographie selon les données analytiques disponibles pour le produit et le lot.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nCumin d'Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière.\nUne analyse GC-MS est disponible pour chaque lot commercialisé afin de documenter le profil chromatographique, l'authenticité et la qualité de la matière première.\nContrôle des constituants :\nLes constituants pertinents et les paramètres analytiques applicables sont évalués sur la base des données disponibles pour le produit et, lorsque nécessaire, du lot concerné.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Fiche Technique (TDS) – BNHE007\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Analyse GC-MS du lot\n4. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },

  // HUILES PORTEUSES / CARRIER OILS
  {
    sku: "BNCP001",
    category: "huiles-porteuses",
    name: "Huile de Jojoba Dorée d'Égypte",
    nameEn: "Egyptian Golden Jojoba Oil",
    subtitleFr: "L'Or Liquide du Désert – La Base Absolue des Parfums de Niche et Attars",
    subtitleEn: "The Liquid Gold of the Desert – The Absolute Base of Niche Perfumes and Attars",
    inci: "Simmondsia Chinensis Seed Oil",
    cas: "90045-98-0 / 61789-91-1",
    origin: "Égypte",
    extractionMethodFr: "Première pression à froid, non raffinée",
    extractionMethodEn: "First Cold Pressing, Unrefined",
    shortDescriptionFr:
      "Obtenue par première pression à froid à partir des graines de Simmondsia chinensis cultivées en Égypte, notre Huile de Jojoba Dorée se distingue par sa nature particulière de cire liquide végétale et par sa grande stabilité à l'oxydation.",
    shortDescriptionEn:
      "Obtained by first cold pressing and unrefined from the seeds of Simmondsia chinensis cultivated in the arid zones of Egypt, our Bostan Naturals Golden Jojoba Oil is of imperial purity. Technically known as a molecular liquid wax, it is totally odorless and possesses exceptional thermal stability that prevents any rancidity or oxidation over time. It is the prestige medium and the carrier oil par excellence for the creation of luxury oil-based perfumes, Attars and high-end botanical serums. It blends beautifully with the most precious absolutes without ever altering or modifying their delicate olfactory notes.",
    image: "/images/categories/huiles-porteuses.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par première pression à froid à partir des graines de Simmondsia chinensis cultivées en Égypte, notre Huile de Jojoba Dorée se distingue par sa nature particulière de cire liquide végétale et par sa grande stabilité à l'oxydation.\n\nSa texture fluide et son profil olfactif discret en font une base porteuse privilégiée pour les parfums huileux, les Attars et les formulations cosmétiques et botaniques.\n\nElle constitue également un excellent support pour l'incorporation d'absolues, d'extraits botaniques et d'autres matières premières aromatiques, tout en préservant l'identité olfactive de la composition.",
      specifications: [
        "Nom INCI : Simmondsia Chinensis Seed Oil",
        "Numéro CAS : 90045-98-0 / 61789-91-1",
        "Code SKU : BNCP001",
        "Source Botanique : Simmondsia chinensis (Link) C.K.Schneid. (Simmondsiaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Graines",
        "Procédé : Première pression à froid",
      ],
      organoleptic: [
        "Aspect : Liquide huileux mobile et limpide",
        "Couleur : Dorée",
        "Odeur : Très légère, caractéristique et discrète",
        "Indice de Réfraction @ 20°C : 1.4650–1.4670",
        "Densité Relative @ 20°C : 0.8630–0.8730",
        "Indice d'Acide : < 1.0 mg KOH/g",
        "Indice de Peroxyde : < 2.0 meq O₂/kg",
        "Valeurs physico-chimiques : Les valeurs indiquées sont des valeurs typiques. De légères variations naturelles peuvent être observées. Les spécifications et résultats du lot sont confirmés dans le COA correspondant.",
      ],
      regulatory:
        "Notre Huile de Jojoba Dorée est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu'aux applications de parfumerie lorsque cela est approprié.\n\nLes exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.\n\nPour toute utilisation dans un produit fini, l'évaluation de la sécurité, de la conformité et de l'aptitude à l'emploi relève de l'utilisateur professionnel et du formulateur selon l'application prévue.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nOrigine Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière. Le profil lipidique et les paramètres physico-chimiques pertinents peuvent être documentés selon le lot.\nAuthenticité & Traçabilité :\nLes caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Profil Lipidique – BNCP001\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCP002",
    category: "huiles-porteuses",
    name: "Huile de Nigelle d'Égypte",
    nameEn: "Egyptian Black Seed (Nigella) Oil",
    subtitleFr: "La Force Ancestrale – L'Huile Active aux Éclats Épicés et Magnétiques",
    subtitleEn: "The Ancestral Strength – The Active Oil with Spicy and Magnetic Sparks",
    inci: "Nigella Sativa Seed Oil",
    cas: "90064-32-7 / 85116-74-1",
    origin: "Égypte",
    extractionMethodFr: "Première pression à froid mécanique",
    extractionMethodEn: "Mechanical First Cold Pressing",
    shortDescriptionFr:
      "Obtenue par première pression à froid à partir des graines de Nigella sativa cultivées en Égypte, notre Huile de Nigelle de Bostan Naturals est une matière première naturelle sélectionnée pour son profil lipidique et ses constituants caractéristiques.",
    shortDescriptionEn:
      "Cold pressed from the sacred seeds of Nigella sativa cultivated in the rich soils of Egypt, our Bostan Naturals Black Seed Oil is a raw material of character for niche perfumery and high-end cosmetics. This active and powerful elixir unfolds an aromatic signature of remarkable intensity, highly sought after for compositions inspired by the traditional perfumes of Andalusia and the Orient. It offers a warm, sharp and deeply spicy scent, with notes of black pepper and cumin, blending beautifully with dark woods, amber and leather. Very rich in natural thymoquinone, it is also an exceptional therapeutic ingredient for luxury hair and skin care oils.",
    image: "/images/categories/huiles-porteuses.jpg",
    images: [
      "/images/products/bncp002-1kg.png",
      "/images/products/bncp002-25kgs.png",
    ],
    tabs: {
      description:
        "Obtenue par première pression à froid à partir des graines de Nigella sativa cultivées en Égypte, notre Huile de Nigelle de Bostan Naturals est une matière première naturelle sélectionnée pour son profil lipidique et ses constituants caractéristiques.\n\nElle révèle une signature aromatique chaude, épicée et légèrement poivrée, avec une présence végétale distinctive.\n\nElle est destinée aux formulations cosmétiques, aux soins et à certaines applications de parfumerie et de formulation botanique, selon les caractéristiques du produit et l'usage prévu.",
      specifications: [
        "Nom INCI : Nigella Sativa Seed Oil",
        "Numéro CAS : 90064-32-7 / 85116-74-1",
        "Code SKU : BNCP002",
        "Source Botanique : Nigella sativa L. (Ranunculaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Graines",
        "Procédé : Première pression à froid",
      ],
      organoleptic: [
        "Aspect : Liquide mobile et limpide",
        "Couleur : Ambrée à brun orangé selon le lot",
        "Odeur : Puissante, chaude, épicée et poivrée",
        "Indice de Réfraction @ 20°C : 1.4680–1.4750",
        "Densité Relative @ 20°C : 0.9100–0.9300",
        "Thymoquinone : analysée et documentée par lot lorsque spécifiée",
        "Solubilité : Soluble dans les huiles fixes et les solvants de formulation appropriés",
        "Valeurs physico-chimiques : Les valeurs indiquées sont des valeurs typiques. De légères variations naturelles peuvent être observées. Les spécifications et résultats du lot sont confirmés dans le COA correspondant.",
      ],
      regulatory:
        "Notre Huile de Nigelle est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu'aux applications de parfumerie lorsque cela est approprié.\n\nLes exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.\n\nPour toute utilisation dans un produit fini, l'évaluation de la sécurité, de la conformité et de l'aptitude à l'emploi relève de l'utilisateur professionnel et du formulateur selon l'application prévue.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nOrigine Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière. Le profil lipidique et les constituants caractéristiques, notamment la thymoquinone lorsqu'elle est spécifiée, peuvent être documentés par lot. Des contrôles complémentaires peuvent être réalisés selon les exigences du produit et de l'application.\nAuthenticité & Traçabilité :\nLes caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Analyses du profil lipidique et des constituants caractéristiques – BNCP002\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCP003",
    category: "huiles-porteuses",
    name: "Huile d'Amande Douce d'Égypte",
    nameEn: "Egyptian Sweet Almond Oil",
    subtitleFr: "La Caresse de Soie – La Base Neutre Ultra-Filtrée des Soins de Luxe",
    subtitleEn: "The Silk Caress – The Ultra-Filtered Neutral Base of Luxury Care",
    inci: "Prunus Amygdalus Dulcis Oil",
    cas: "8007-69-0 / 90320-37-9",
    origin: "Égypte",
    extractionMethodFr: "Première pression à froid, ultra-filtrée",
    extractionMethodEn: "First Cold Pressing, Ultra-Filtered",
    shortDescriptionFr:
      "Obtenue par première pression à froid à partir des amandes de Prunus amygdalus dulcis cultivées en Égypte, notre Huile d'Amande Douce de Bostan Naturals est une matière première naturelle sélectionnée pour sa douceur et sa fluidité.",
    shortDescriptionEn:
      "Cold pressed from almonds selected in Egypt and subjected to an exclusive ultra-fine filtration process at Bostan Naturals, our Sweet Almond Oil is of absolute lightness and purity. Of perfect olfactory neutrality and exceptional fluidity, it penetrates instantly without leaving a heavy greasy film. It is the essential neutral base ingredient for niche laboratories creating prestige massage oils, scented body oils and high-end cosmetic emulsions. It serves as an ideal support for dispersing fine perfume molecules while providing exceptional softening and nourishing properties.",
    image: "/images/categories/huiles-porteuses.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par première pression à froid à partir des amandes de Prunus amygdalus dulcis cultivées en Égypte, notre Huile d'Amande Douce de Bostan Naturals est une matière première naturelle sélectionnée pour sa douceur et sa fluidité.\n\nSon profil discret et sa texture souple en font une base porteuse adaptée aux formulations de soin, aux huiles corporelles et aux compositions parfumées.\n\nElle constitue également un support approprié pour l'incorporation d'absolues, d'extraits botaniques et de matières premières liposolubles.",
      specifications: [
        "Nom INCI : Prunus Amygdalus Dulcis Oil",
        "Numéro CAS : 8007-69-0 / 90320-37-9",
        "Code SKU : BNCP003",
        "Source Botanique : Prunus amygdalus dulcis (Mill.) (Rosaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Amandes / graines",
        "Procédé : Première pression à froid, suivie d'une filtration",
      ],
      organoleptic: [
        "Aspect : Liquide huileux mobile et limpide",
        "Couleur : Jaune pâle à dorée",
        "Odeur : Légère, douce et caractéristique de l'amande",
        "Indice de Réfraction @ 20°C : 1.4650–1.4750",
        "Densité Relative @ 20°C : 0.9110–0.9200",
        "Indice d'Acide : < 0.5 mg KOH/g",
        "Indice de Peroxyde : < 1.5 meq O₂/kg",
        "Solubilité : Insoluble dans l'eau ; soluble dans les huiles fixes et solvants compatibles",
        "Valeurs physico-chimiques : Les valeurs indiquées sont des valeurs typiques. De légères variations naturelles peuvent être observées. Les spécifications et résultats du lot sont confirmés dans le COA correspondant.",
      ],
      regulatory:
        "Notre Huile d'Amande Douce est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu'aux applications de parfumerie lorsque cela est approprié.\n\nLes exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.\n\nPour toute utilisation dans un produit fini, l'évaluation de la sécurité, de la conformité et de l'aptitude à l'emploi relève de l'utilisateur professionnel et du formulateur selon l'application prévue.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nOrigine Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière. Le profil en acides gras, notamment les fractions oléique et linoléique, peut être documenté par lot.\nAuthenticité & Traçabilité :\nLes caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Profil en Acides Gras – BNCP003\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCP004",
    category: "huiles-porteuses",
    name: "Huile de Pépins de Grenade d'Égypte",
    nameEn: "Egyptian Pomegranate Seed Oil",
    subtitleFr: "Le Joyau Anti-Âge Ultime – La Base Précieuse et Active des Soins de Prestige",
    subtitleEn: "The Ultimate Anti-Aging Jewel – The Precious Active Base of Prestige Care",
    inci: "Punica Granatum Seed Oil",
    cas: "84961-57-9",
    origin: "Égypte",
    extractionMethodFr: "Première pression à froid mécanique, non raffinée",
    extractionMethodEn: "Mechanical First Cold Pressing, Unrefined",
    shortDescriptionFr:
      "Obtenue par première pression mécanique à froid à partir des graines de Punica granatum cultivées en Égypte, notre Huile de Pépins de Grenade de Bostan Naturals est une matière première botanique précieuse sélectionnée pour son profil lipidique distinctif.",
    shortDescriptionEn:
      "Obtained by mechanical first cold pressing of pomegranate seeds ripened under the Egyptian sun, our Bostan Naturals Pomegranate Seed Oil is an exceptional raw material for high-end cosmetics and luxury skin elixirs. This rare lipid jewel is exceptionally rich in punicic acid (a rare conjugated omega-5 fatty acid), world-renowned for its extraordinary antioxidant, regenerating and anti-aging properties. With a smooth and enveloping texture, it serves as an active royal carrier oil for niche laboratories creating high-end facial serums, imperial massage oils and high-end reparative body care, offering intense cellular regeneration and a perfect satin finish.",
    image: "/images/categories/huiles-porteuses.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par première pression mécanique à froid à partir des graines de Punica granatum cultivées en Égypte, notre Huile de Pépins de Grenade de Bostan Naturals est une matière première botanique précieuse sélectionnée pour son profil lipidique distinctif.\n\nElle est naturellement caractérisée par la présence d'acide punicique et par un profil en acides gras adapté aux formulations cosmétiques et aux soins de haute valeur.\n\nSa texture et son identité botanique en font une matière première destinée notamment aux sérums, huiles de soin et formulations de prestige.",
      specifications: [
        "Nom INCI : Punica Granatum Seed Oil",
        "Numéro CAS : 84961-57-9",
        "Code SKU : BNCP004",
        "Source Botanique : Punica granatum L. (Lythraceae)",
        "Origine : Égypte",
        "Partie de la Plante : Graines",
        "Procédé : Première pression mécanique à froid",
      ],
      organoleptic: [
        "Aspect : Liquide huileux légèrement à moyennement visqueux",
        "Couleur : Jaune doré à ambré clair",
        "Odeur : Légère, douce et caractéristique",
        "Indice de Réfraction @ 20°C : 1.5150–1.5250",
        "Densité Relative @ 20°C : 0.9350–0.9500",
        "Acide Punicique : valeur caractéristique documentée selon le lot",
        "Indice de Peroxyde : < 5 meq O₂/kg",
        "Solubilité : Soluble dans les huiles et milieux lipophiles compatibles",
      ],
      regulatory:
        "Notre Huile de Pépins de Grenade est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu'aux applications de parfumerie lorsque cela est approprié.\n\nLes exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.\n\nPour toute utilisation dans un produit fini, l'évaluation de la sécurité, de la conformité et de l'aptitude à l'emploi relève de l'utilisateur professionnel et du formulateur selon l'application prévue.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nOrigine Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière. Le profil en acides gras, incluant l'acide punicique, peut être documenté par lot.\nAuthenticité & Traçabilité :\nLes caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Profil en Acides Gras – BNCP004\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
  {
    sku: "BNCP005",
    category: "huiles-porteuses",
    name: "Huile de Pépins de Courge d'Égypte",
    nameEn: "Egyptian Pumpkin Seed Oil",
    subtitleFr: "Le Bouclier Vert-Or – La Matrice Dense et Active des Soins Masculins et Attars",
    subtitleEn: "The Green-Gold Shield – The Dense Active Matrix of Men's Care and Attars",
    inci: "Cucurbita Pepo Seed Oil",
    cas: "8016-49-7 / 89998-03-3",
    origin: "Égypte",
    extractionMethodFr: "Première pression à froid mécanique, non raffinée",
    extractionMethodEn: "Mechanical First Cold Pressing, Unrefined",
    shortDescriptionFr:
      "Obtenue par première pression mécanique à froid à partir des graines de Cucurbita pepo cultivées en Égypte, notre Huile de Pépins de Courge d'Égypte est une matière première naturelle sélectionnée pour sa richesse en acides gras insaturés et en constituants lipidiques caractéristiques.",
    shortDescriptionEn:
      "Obtained by mechanical first cold pressing of selected pumpkin seeds ripened under Egypt's generous climate, our Bostan Naturals Pumpkin Seed Oil is a prestige raw material for high-end cosmetics and luxury hair care. This lipid jewel is exceptionally rich in phytosterols, zinc and essential fatty acids (Omega-6 and 9), world-renowned for their strengthening, regenerating and hair bulb protecting properties. With a smooth and fluid texture, it deploys a very slight toasted nut note that blends magnificently with masculine compositions and the dark woody notes of Attars, offering an active royal carrier oil for niche laboratories creating prestige beard oils, anti-hair loss serums and high-end body care.",
    image: "/images/categories/huiles-porteuses.jpg",
    images: [],
    tabs: {
      description:
        "Obtenue par première pression mécanique à froid à partir des graines de Cucurbita pepo cultivées en Égypte, notre Huile de Pépins de Courge d'Égypte est une matière première naturelle sélectionnée pour sa richesse en acides gras insaturés et en constituants lipidiques caractéristiques.\n\nSon profil est notamment associé aux acides linoléique et oléique ainsi qu'à la présence naturelle de phytostérols.\n\nElle convient aux formulations cosmétiques et capillaires ainsi qu'à certaines applications de parfumerie et d'attars, notamment dans les huiles corporelles, soins des cheveux et de la barbe et parfums huileux.",
      specifications: [
        "Nom INCI : Cucurbita Pepo Seed Oil",
        "Numéro CAS : 8016-49-7 / 89998-03-3",
        "Code SKU : BNCP005",
        "Source Botanique : Cucurbita pepo L. (Cucurbitaceae)",
        "Origine : Égypte",
        "Partie de la Plante : Graines",
        "Procédé : Première pression mécanique à froid",
      ],
      organoleptic: [
        "Aspect : Liquide huileux mobile, limpide à légèrement opalescent",
        "Couleur : Jaune doré à jaune-vert",
        "Odeur : Douce, légère, caractéristique de la graine et légèrement noisettée",
        "Indice de Réfraction @ 20°C : 1.4700–1.4760",
        "Densité Relative @ 20°C : 0.9150–0.9250",
        "Indice d'Acide : < 1.5 mg KOH/g",
        "Indice de Peroxyde : < 4 meq O₂/kg",
        "Solubilité : Soluble dans les huiles et milieux lipophiles compatibles",
      ],
      regulatory:
        "Notre Huile de Pépins de Courge d'Égypte est destinée aux professionnels de la cosmétique, du soin et de la formulation, ainsi qu'aux applications de parfumerie lorsque cela est approprié.\n\nLes exigences réglementaires applicables à la matière sont prises en compte et les informations techniques et de sécurité pertinentes sont documentées dans les documents techniques disponibles.\n\nPour toute utilisation dans un produit fini, l'évaluation de la sécurité, de la conformité et de l'aptitude à l'emploi relève de l'utilisateur professionnel et du formulateur selon l'application prévue.",
      quality:
        "Standard de Qualité :\nMatière première sélectionnée auprès de sources qualifiées, selon des critères rigoureux de qualité, d'authenticité et de traçabilité.\nOrigine & Traçabilité :\nOrigine Égypte – origine et traçabilité documentées.\nContrôle Laboratoire :\nChaque lot commercialisé fait l'objet de contrôles et d'analyses qualité adaptés à la nature de la matière. Le profil en acides gras, notamment les fractions linoléique et oléique, peut être documenté par lot.\nAuthenticité & Traçabilité :\nLes caractéristiques pertinentes de la matière peuvent être vérifiées et documentées sur la base des analyses disponibles pour le lot.\nConditionnement :\nConditionnement de Transport Conforme aux Exigences Applicables, adapté à la conservation et au transport de la matière première.\nTraçabilité du conditionnement :\nChaque unité est identifiée par une étiquette technique comprenant notamment la référence produit, le numéro de lot et les mentions applicables.",
      confidentiality:
        "Afin de protéger vos intérêts commerciaux et la confidentialité de vos formulations et de vos approvisionnements, Bostan Naturals met à disposition une documentation technique structurée sous sa propre identité commerciale, comprenant les informations nécessaires à l'évaluation professionnelle de la matière première.\n\nDocuments disponibles :\n\n1. Profil en Acides Gras – BNCP005\n2. Certificat d'Analyse (COA) spécifique au lot\n3. Fiche de Données de Sécurité (FDS / SDS) selon les exigences applicables",
    },
  },
];

export function getProductBySku(sku: string): Product | undefined {
  return products.find((p) => p.sku === sku);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
