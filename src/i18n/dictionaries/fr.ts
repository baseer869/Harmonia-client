/**
 * French dictionary (source of truth for the dictionary shape).
 * `en.ts` mirrors this structure; the `Dictionary` type is inferred from here.
 */
export const fr = {
  brand: { name: "HARMONIA", tagline: "Résidence & Conciergerie" },

  nav: {
    owners: "Propriétaires",
    ownersDrops: {
      presentation: "Présentation & Avantages",
      formulas: "Nos 3 Formules",
      services: "Services Inclus",
    },
    travelers: "Voyageurs",
    travelersDrops: {
      catalogue: "Catalogue de Services",
      book: "Réserver un Service",
    },
    invest: "Investissement",
    investDrops: {
      harmonia: "Harmonia Invest",
      steps: "Accompagnement A à Z",
      forWho: "Pour Qui ?",
    },
    about: "À Propos",
    aboutDrops: {
      story: "Notre Histoire",
      team: "L'Équipe Fondatrice",
      values: "Nos Valeurs",
    },
    partners: "Partenaires",
    partnersDrops: {
      broker: "Apporteur d'Affaires",
      harmoniaPartners: "Harmonia Partners",
    },
    conditions: "Conditions",
    contact: "Nous Contacter",
    cart: "Panier",
  },

  footer: {
    home: "Accueil",
    owners: "Propriétaires",
    travelers: "Voyageurs",
    invest: "Investissement",
    about: "À Propos",
    partners: "Partenaires",
    contact: "Contact",
    tagline: "Résidence & Conciergerie · Marrakech",
    rights: "Tous droits réservés · Marrakech, Maroc",
  },

  cart: {
    title: "Votre Panier",
    currency: "Devise :",
    empty: "Votre panier est vide",
    item: "Service Harmonia",
    total: "Total",
    depositLine: "Acompte de 30 %",
    depositNote:
      "Le solde est réglé à votre arrivée. Annulation gratuite 48h avant.",
    viewCart: "Voir le Panier & Réserver →",
    continue: "← Continuer mes achats",
  },

  home: {
    hero: {
      badge: "Conciergerie Premium · Marrakech",
      title1: "VIVEZ",
      titleHighlight: "MARRAKECH",
      title2: "AUTREMENT",
      subtitle: "Votre séjour, notre priorité.",
      ctaBook: "Réserver un service",
      ctaOwners: "Espace propriétaires",
      cardQuote:
        "« Votre bien,\nnotre expertise,\nleur expérience inoubliable. »",
      cardLabel: "Harmonia · L'art de la conciergerie",
      stats: [
        { n: "+40%", l: "Revenus en moyenne" },
        { n: "95%", l: "Taux de satisfaction" },
        { n: "7j/7", l: "Disponibilité" },
        { n: "+50", l: "Collaborateurs" },
      ],
    },
    owners: {
      eyebrow: "Pour les Propriétaires",
      title1: "Nous maximisons vos revenus.",
      titleHighlight: "Vous ne gérez rien.",
      desc: "Harmonia est une conciergerie premium spécialisée dans la gestion de biens et la création d'expériences uniques à Marrakech. Un service sur-mesure, humain et irréprochable.",
      checks: [
        "Jusqu’à +40% de revenus en moyenne",
        "Taux d'occupation optimisé",
        "Aucune gestion au quotidien",
        "Paiements sécurisés et transparents",
        "Reporting mensuel détaillé",
      ],
      cta: "En savoir plus",
      metrics: [
        { n: "+40%", l: "Revenus" },
        { n: "100%", l: "Transparence" },
        { n: "24/7", l: "Assistance" },
        { n: "0", l: "Contrainte" },
      ],
    },
    catalog: {
      eyebrow: "Pour les Voyageurs",
      title: "Notre",
      titleHighlight: "Catalogue de Services",
      sub: "Des expériences sur-mesure, authentiques et inoubliables à Marrakech.",
      book: "Réserver",
      viewAll: "Voir tout le catalogue →",
    },
    invest: {
      tag: "Harmonia Invest",
      title1: "L'investissement immobilier",
      titleHighlight: "clé en main",
      title2: "à Marrakech",
      desc: "Nous nous occupons de tout — vous percevez vos revenus.",
      kpis: [
        { n: "Clé", l: "En Main" },
        { n: "0", l: "Contrainte" },
        { n: "20%", l: "Marge garantie" },
      ],
      cta: "Découvrir Harmonia Invest",
      exampleTitle: "Exemple Concret",
      rows: [
        { l: "Investissement total", v: "200 000 €", gold: false },
        { l: "Revenu mensuel cible", v: "2 500 €", gold: true },
        { l: "Taux d'occupation estimé", v: "70%", gold: false },
        { l: "Revenu annuel estimé", v: "21 000 €", gold: true },
      ],
      highlight: "Marge de gestion garantie : 20%",
    },
    team: {
      eyebrow: "Les Fondateurs",
      title: "Une",
      titleHighlight: "Équipe Franco-Marocaine",
      sub: "Une expertise locale & internationale, une passion partagée pour l'excellence.",
      members: [
        {
          i: "H",
          n: "HICHAM",
          r: "Co-fondateur · Franco-Marocain",
          b: "Master en gestion immobilière. Expertise en conseil, gestion, aménagement et rendement immobilier.",
        },
        {
          i: "M",
          n: "MOHAMED",
          r: "Co-fondateur · Franco-Tunisien",
          b: "5 ans d'expérience en gestion d'équipes en France. Expert en satisfaction client.",
        },
        {
          i: "N",
          n: "NICOLAS",
          r: "Co-fondateur · Français",
          b: "Diplômé d'écoles hôtelières, entrepreneur depuis 10 ans. Apporte son réseau et son expertise.",
        },
      ],
      cta: "Découvrir notre histoire →",
    },
    contact: {
      tagline1: "Parlons de",
      taglineEm: "votre projet.",
      desc: "Notre équipe est à votre écoute 24h/24 et 7j/7.",
      phoneLabel: "Téléphone & WhatsApp",
      phone: "+212 6 00 00 00 00",
      emailLabel: "Email",
      email: "contact@harmonia-conciergerie.ma",
      addressLabel: "Adresse",
      address: "Marrakech, Maroc",
      form: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        phone: "Téléphone / WhatsApp",
        rolePlaceholder: "Je suis…",
        roles: [
          "Propriétaire",
          "Investisseur",
          "Voyageur",
          "Partenaire",
          "Autre",
        ],
        message: "Votre message ou projet…",
        submit: "Envoyer ma demande →",
      },
    },
  },

  /** Per-page strings (page heroes, intros, CTAs). */
  pages: {
    voyageurs: {
      heroEyebrow: "Pour les Voyageurs",
      heroTitle: "Catalogue de Services",
      intro:
        "Des expériences sur-mesure, authentiques et inoubliables à Marrakech. Réservez en quelques clics, payez un acompte de 30 %, réglez le solde sur place.",
      bookCta: "Réserver",
      details: "Voir le détail",
    },
    service: {
      tabDescription: "Description",
      tabIncluded: "Inclus",
      tabInfo: "Infos Pratiques",
      tabReviews: "Avis",
      optionsTitle: "Options disponibles",
      extrasTitle: "Extras optionnels",
      add: "+ Ajouter",
      remove: "Retirer",
      bookNow: "Réserver maintenant",
      addToCart: "+ Ajouter au panier",
      deposit: "Acompte 30%",
      depositNote:
        "à la réservation. Solde réglé à l'arrivée. Annulation gratuite 48h avant.",
      bookingNote: "Confirmation immédiate · Paiement sécurisé",
      person: "personne",
      persons: "personnes",
      dateConfirm: "Date à confirmer",
    },
    panier: {
      eyebrow: "Mon Panier",
      titleA: "Votre",
      titleB: "Sélection",
      emptyTitle: "Votre panier est vide",
      emptySub: "Découvrez nos services et ajoutez-en à votre panier.",
      explore: "Explorer nos services",
      selected: "Services sélectionnés",
      itemCat: "Service Harmonia",
      remove: "Supprimer",
      summary: "Récapitulatif",
      currency: "Devise :",
      total: "Total",
      depositLbl: "Acompte 30% à régler",
      depositNote:
        "Le solde sera réglé à votre arrivée. Annulation gratuite 48h avant.",
      checkout: "Confirmer & Payer l'acompte →",
    },
  },

  /** Category cards (home catalogue preview). Text only — images live in constants. */
  categories: {
    excursions: {
      name: "Excursions & Aventures",
      items: [
        "Désert d'Agafay / Sahara",
        "Quad, Buggy & Dromadaire",
        "Montgolfière",
      ],
      price: "À partir de 250 MAD / pers.",
    },
    bienetre: {
      name: "Bien-Être & Détente",
      items: [
        "Hammam traditionnel",
        "Massages & Soins",
        "Spa & Rituels marocains",
      ],
      price: "À partir de 200 MAD / pers.",
    },
    transport: {
      name: "Transport & Transferts",
      items: ["Transfert Aéroport", "Chauffeur privé", "Location de voiture"],
      price: "À partir de 150 MAD / trajet",
    },
    gastro: {
      name: "Gastronomie",
      items: [
        "Chef privé à domicile",
        "Cours de cuisine",
        "Dîner traditionnel",
      ],
      price: "À partir de 300 MAD / pers.",
    },
    activites: {
      name: "Activités & Loisirs",
      items: ["Jardin Majorelle", "Soirées & Clubs privés", "Shooting photo"],
      price: "À partir de 150 MAD / pers.",
    },
    domicile: {
      name: "Services à Domicile",
      items: ["Ménage & Entretien", "Petit-déjeuner", "Baby-sitting"],
      price: "Sur devis",
    },
    shopping: {
      name: "Shopping & Artisanat",
      items: ["Guide shopping", "Personal Shopper", "Artisanat & Souvenirs"],
      price: "Sur devis",
    },
    evenements: {
      name: "Événements & Célébrations",
      items: ["Anniversaire & EVJF", "Demande en mariage", "Soirée privée"],
      price: "Sur devis",
    },
    packs: {
      name: "Packs Sur-Mesure",
      items: ["Séjours clés en main", "100% personnalisés", "Tout inclus"],
      price: "Nous consulter",
    },
    cadeaux: {
      name: "Produits & Cadeaux",
      items: ["Huile d'argan", "Coffrets cadeaux", "Produits du terroir"],
      price: "À partir de 120 MAD",
    },
  },
};

export type Dictionary = typeof fr;
