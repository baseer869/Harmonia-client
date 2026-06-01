/** Partners page — bilingual content. */
export const partenaires = {
  fr: {
    hero: { eyebrow: 'Espace Partenaires', titleA: 'Grandissons', titleH: 'ensemble.' },
    broker: {
      tag: "Apporteur d'Affaires",
      titleA: 'Vous connaissez des propriétaires ou investisseurs ?',
      titleH: 'Soyez rémunéré.',
      desc: "Notre programme d'apporteur d'affaires vous permet de percevoir une commission attractive pour chaque propriétaire ou investisseur que vous nous recommandez et qui signe avec Harmonia.",
      gains: [
        { s: 'Commission Propriétaire', t: 'Un mois de loyer pour chaque propriétaire signataire' },
        { s: 'Commission Investisseur', t: "2% du montant total de l'investissement" },
        { s: 'Récurrence', t: 'Commission supplémentaire à chaque renouvellement de contrat' },
        { s: 'Paiement', t: 'Sous 30 jours après signature du contrat' },
      ],
      cta: "Devenir apporteur d'affaires",
    },
    partners: {
      tag: 'Harmonia Partners',
      titleA: 'Rejoignez notre réseau',
      titleH: 'de partenaires premium.',
      desc: 'Vous êtes prestataire de services (transport, spa, restaurant, guide…) ? Rejoignez notre réseau de partenaires sélectionnés et accédez à notre base de clients premium.',
      shareBig: '15%',
      shareLbl: 'Commission Harmonia',
      shareNote: 'Sur chaque réservation générée via notre plateforme',
      gains: [
        { s: 'Visibilité', t: 'Présence sur notre catalogue et communication digitale' },
        { s: 'Clientèle premium', t: 'Accès à nos voyageurs haut de gamme' },
        { s: 'Réseau qualifié', t: "Accès à l'ensemble du réseau Harmonia" },
      ],
      cta: 'Rejoindre le réseau',
    },
  },
  en: {
    hero: { eyebrow: 'Partners Area', titleA: "Let's grow", titleH: 'together.' },
    broker: {
      tag: 'Business Referrals',
      titleA: 'Know any owners or investors?',
      titleH: 'Get rewarded.',
      desc: 'Our business-referral program lets you earn an attractive commission for every owner or investor you recommend who signs with Harmonia.',
      gains: [
        { s: 'Owner Commission', t: 'One month of rent for each signed owner' },
        { s: 'Investor Commission', t: '2% of the total investment amount' },
        { s: 'Recurrence', t: 'Additional commission on every contract renewal' },
        { s: 'Payment', t: 'Within 30 days of contract signing' },
      ],
      cta: 'Become a referral partner',
    },
    partners: {
      tag: 'Harmonia Partners',
      titleA: 'Join our network',
      titleH: 'of premium partners.',
      desc: 'Are you a service provider (transport, spa, restaurant, guide…)? Join our network of selected partners and access our premium customer base.',
      shareBig: '15%',
      shareLbl: 'Harmonia Commission',
      shareNote: 'On every booking generated via our platform',
      gains: [
        { s: 'Visibility', t: 'Presence in our catalogue and digital communication' },
        { s: 'Premium clientele', t: 'Access to our high-end travelers' },
        { s: 'Qualified network', t: 'Access to the entire Harmonia network' },
      ],
      cta: 'Join the network',
    },
  },
};

export type PartenairesContent = (typeof partenaires)['fr'];
