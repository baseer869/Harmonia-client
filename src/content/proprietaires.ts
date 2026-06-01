/** Owners page — bilingual content (swap for CMS/API later). */
export const proprietaires = {
  fr: {
    hero: {
      eyebrow: 'Espace Propriétaires',
      titleA: 'Votre bien entre',
      titleH: 'de bonnes mains.',
    },
    why: {
      eyebrow: 'Pourquoi Harmonia ?',
      titleA: 'Nous maximisons vos revenus.',
      titleH: 'Vous ne gérez rien.',
      desc: "Harmonia est une conciergerie premium spécialisée dans la gestion locative courte durée à Marrakech. Nous prenons en charge intégralement votre bien — de la création de l'annonce à la gestion des voyageurs.",
      checks: [
        'Jusqu’à +40% de revenus en moyenne',
        'Optimisation des prix via yield management',
        'Diffusion multi-plateformes : Airbnb, Booking, VRBO',
        'Check-in / Check-out gérés 24h/24',
        'Ménage professionnel entre chaque séjour',
        'Maintenance et interventions techniques incluses',
      ],
    },
    services: {
      eyebrow: 'Inclus dans votre contrat',
      titleA: 'Ce que',
      titleH: 'Harmonia fait pour vous',
      sub: "Un service complet, de la mise en ligne à l'encaissement.",
      cards: [
        { t: 'Optimisation & Diffusion', items: ['Création & optimisation des annonces', 'Shooting photo professionnel', 'Diffusion multi-plateformes', 'Yield management & prix dynamiques'] },
        { t: 'Gestion Complète', items: ['Gestion des réservations', 'Communication voyageurs 7j/7', 'Check-in / Check-out', 'Assistance client 24h/24'] },
        { t: 'Entretien & Logistique', items: ['Ménage professionnel', 'Linge de maison', 'Maintenance & interventions', 'Contrôle qualité après chaque séjour'] },
        { t: 'Expérience Client Premium', items: ['Accueil personnalisé', 'Services à la carte inclus', 'Conciergerie dédiée', 'Satisfaction & avis 5 étoiles'] },
      ],
    },
    formules: {
      eyebrow: 'Nos Offres',
      titleA: 'Choisissez votre',
      titleH: 'Formule',
      sub: "3 formules adaptées à vos besoins et à votre niveau d'implication.",
      badge: 'Recommandée',
      plans: [
        { name: 'Formule Essentielle', price: '20%', priceSub: 'des revenus générés', items: ['Gestion des réservations', 'Communication voyageurs', 'Check-in / Check-out', 'Coordination ménage'], note: 'Idéal pour les propriétaires déjà organisés.', featured: false },
        { name: 'Formule Premium', price: '25–30%', priceSub: 'des revenus générés', items: ['Tous les services Essentiels', 'Optimisation des prix', 'Gestion complète du bien', 'Maintenance incluse', 'Expérience client premium'], note: "L'option idéale pour maximiser vos revenus.", featured: true },
        { name: 'Formule Garantie', price: 'Revenu fixe', priceSub: 'loyer versé chaque mois', items: ['Loyer fixe versé chaque mois', 'Gestion totale par Harmonia', 'Aucun risque locatif'], note: 'Sur sélection de biens.', featured: false },
      ],
      cta: 'Demander une étude gratuite',
    },
  },
  en: {
    hero: {
      eyebrow: 'Owners Area',
      titleA: 'Your property in',
      titleH: 'the right hands.',
    },
    why: {
      eyebrow: 'Why Harmonia?',
      titleA: 'We maximize your revenue.',
      titleH: 'You manage nothing.',
      desc: 'Harmonia is a premium concierge specialized in short-term rental management in Marrakech. We take full charge of your property — from creating the listing to managing guests.',
      checks: [
        'Up to +40% revenue on average',
        'Price optimization via yield management',
        'Multi-platform distribution: Airbnb, Booking, VRBO',
        'Check-in / Check-out managed 24/7',
        'Professional cleaning between every stay',
        'Maintenance and technical interventions included',
      ],
    },
    services: {
      eyebrow: 'Included in your contract',
      titleA: 'What',
      titleH: 'Harmonia does for you',
      sub: 'A complete service, from listing to payment collection.',
      cards: [
        { t: 'Optimization & Distribution', items: ['Listing creation & optimization', 'Professional photo shoot', 'Multi-platform distribution', 'Yield management & dynamic pricing'] },
        { t: 'Full Management', items: ['Booking management', 'Guest communication 7/7', 'Check-in / Check-out', 'Customer support 24/7'] },
        { t: 'Upkeep & Logistics', items: ['Professional cleaning', 'Household linen', 'Maintenance & interventions', 'Quality control after each stay'] },
        { t: 'Premium Guest Experience', items: ['Personalized welcome', 'À-la-carte services included', 'Dedicated concierge', 'Satisfaction & 5-star reviews'] },
      ],
    },
    formules: {
      eyebrow: 'Our Offers',
      titleA: 'Choose your',
      titleH: 'Plan',
      sub: '3 plans tailored to your needs and level of involvement.',
      badge: 'Recommended',
      plans: [
        { name: 'Essential Plan', price: '20%', priceSub: 'of revenue generated', items: ['Booking management', 'Guest communication', 'Check-in / Check-out', 'Cleaning coordination'], note: 'Ideal for already-organized owners.', featured: false },
        { name: 'Premium Plan', price: '25–30%', priceSub: 'of revenue generated', items: ['All Essential services', 'Price optimization', 'Full property management', 'Maintenance included', 'Premium guest experience'], note: 'The ideal option to maximize your revenue.', featured: true },
        { name: 'Guaranteed Plan', price: 'Fixed income', priceSub: 'rent paid every month', items: ['Fixed rent paid every month', 'Total management by Harmonia', 'No rental risk'], note: 'On selected properties.', featured: false },
      ],
      cta: 'Request a free assessment',
    },
  },
};

export type ProprietairesContent = (typeof proprietaires)['fr'];
