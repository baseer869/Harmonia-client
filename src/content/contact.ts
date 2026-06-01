/** Contact page — bilingual content. */
export const contact = {
  fr: {
    hero: { eyebrow: 'Contactez-Nous', titleA: 'Parlons de', titleH: 'votre projet.' },
    taglineA: 'Notre équipe est à',
    taglineEm: 'votre écoute 24h/24.',
    desc: "Que vous soyez propriétaire, investisseur, voyageur ou partenaire potentiel, nous serons ravis d'échanger avec vous.",
    info: [
      { ico: '📞', label: 'Téléphone & WhatsApp', value: '+212 6 00 00 00 00' },
      { ico: '✉️', label: 'Email', value: 'contact@harmonia-conciergerie.ma' },
      { ico: '📍', label: 'Adresse', value: 'Marrakech, Maroc' },
      { ico: '🕐', label: 'Disponibilité', value: '7j/7 · 24h/24' },
    ],
    form: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      phone: 'Téléphone / WhatsApp',
      rolePlaceholder: 'Je suis…',
      roles: ['Propriétaire', 'Investisseur', 'Voyageur', "Apporteur d'affaires", 'Partenaire', 'Autre'],
      subjectPlaceholder: 'Objet de votre message',
      subjects: ['Gestion locative', 'Investissement', 'Réservation de service', 'Partenariat', 'Autre'],
      message: 'Votre message ou projet…',
      submit: 'Envoyer ma demande →',
    },
  },
  en: {
    hero: { eyebrow: 'Contact Us', titleA: "Let's talk about", titleH: 'your project.' },
    taglineA: 'Our team is available',
    taglineEm: '24/7.',
    desc: 'Whether you are an owner, investor, traveler or potential partner, we’ll be delighted to talk with you.',
    info: [
      { ico: '📞', label: 'Phone & WhatsApp', value: '+212 6 00 00 00 00' },
      { ico: '✉️', label: 'Email', value: 'contact@harmonia-conciergerie.ma' },
      { ico: '📍', label: 'Address', value: 'Marrakech, Morocco' },
      { ico: '🕐', label: 'Availability', value: '7/7 · 24/24' },
    ],
    form: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      rolePlaceholder: 'I am…',
      roles: ['Owner', 'Investor', 'Traveler', 'Referral partner', 'Partner', 'Other'],
      subjectPlaceholder: 'Message subject',
      subjects: ['Rental management', 'Investment', 'Service booking', 'Partnership', 'Other'],
      message: 'Your message or project…',
      submit: 'Send my request →',
    },
  },
};

export type ContactContent = (typeof contact)['fr'];
