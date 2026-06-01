/** About page — bilingual content. */
export const about = {
  fr: {
    hero: { eyebrow: 'Notre Histoire', titleA: 'Une vision,', titleH: 'une passion,', titleB: 'une équipe.' },
    story: {
      eyebrow: 'Notre Histoire',
      titleA: "Nés d'une passion",
      titleH: 'pour Marrakech.',
      paragraphs: [
        'Harmonia est née de la rencontre de trois associés franco-marocains partageant une vision commune : offrir le meilleur de Marrakech aux propriétaires, investisseurs et voyageurs.',
        "Fondée en 2024, notre conciergerie s'est rapidement imposée comme une référence du secteur premium à Marrakech, grâce à notre approche humaine, notre expertise locale et notre réseau de partenaires de confiance.",
        'Aujourd’hui, nous gérons des dizaines de propriétés et accompagnons des centaines de voyageurs chaque année dans la découverte authentique de la ville ocre.',
      ],
    },
    values: {
      eyebrow: 'Nos Valeurs',
      titleA: 'Ce qui nous',
      titleH: 'définit',
      cards: [
        { n: '01', t: 'Excellence', d: 'Chaque détail compte. Nous nous engageons à délivrer un service irréprochable à chaque interaction.' },
        { n: '02', t: 'Authenticité', d: 'Nous célébrons la richesse culturelle marocaine et la partageons avec sincérité.' },
        { n: '03', t: 'Transparence', d: 'Nos tarifs, nos contrats, nos reporting — tout est clair, lisible et sans surprises.' },
        { n: '04', t: 'Disponibilité', d: '7 jours sur 7, 24 heures sur 24. Nous sommes là quand vous avez besoin de nous.' },
      ],
    },
    team: {
      eyebrow: 'Les Fondateurs',
      titleA: 'Une',
      titleH: 'Équipe Franco-Marocaine',
      sub: "Une expertise locale & internationale, une passion partagée pour l'excellence.",
      members: [
        { i: 'H', n: 'HICHAM', r: 'Co-fondateur · Franco-Marocain', b: "Master en gestion immobilière. Expertise en conseil, gestion, aménagement et rendement immobilier. Profond ancrage dans l'écosystème de Marrakech." },
        { i: 'M', n: 'MOHAMED', r: 'Co-fondateur · Franco-Tunisien', b: "5 ans d'expérience en gestion d'équipes en France. Expert en satisfaction client et gestion opérationnelle. Pilier humain de l'organisation Harmonia." },
        { i: 'N', n: 'NICOLAS', r: 'Co-fondateur · Français', b: "Diplômé d'écoles hôtelières françaises de renom, entrepreneur depuis 10 ans. Apporte son réseau, son expertise hôtelière et sa vision du service premium." },
      ],
      cta: 'Nous contacter',
    },
  },
  en: {
    hero: { eyebrow: 'Our Story', titleA: 'A vision,', titleH: 'a passion,', titleB: 'a team.' },
    story: {
      eyebrow: 'Our Story',
      titleA: 'Born from a passion',
      titleH: 'for Marrakech.',
      paragraphs: [
        'Harmonia was born from the meeting of three French-Moroccan partners sharing a common vision: to offer the best of Marrakech to owners, investors and travelers.',
        'Founded in 2024, our concierge quickly established itself as a reference in the premium sector in Marrakech, thanks to our human approach, local expertise and trusted partner network.',
        'Today, we manage dozens of properties and support hundreds of travelers each year in the authentic discovery of the ochre city.',
      ],
    },
    values: {
      eyebrow: 'Our Values',
      titleA: 'What',
      titleH: 'defines us',
      cards: [
        { n: '01', t: 'Excellence', d: 'Every detail matters. We commit to delivering flawless service at every interaction.' },
        { n: '02', t: 'Authenticity', d: 'We celebrate Morocco’s cultural richness and share it sincerely.' },
        { n: '03', t: 'Transparency', d: 'Our prices, contracts and reporting — everything is clear, legible and surprise-free.' },
        { n: '04', t: 'Availability', d: '7 days a week, 24 hours a day. We are there when you need us.' },
      ],
    },
    team: {
      eyebrow: 'The Founders',
      titleA: 'A',
      titleH: 'French-Moroccan Team',
      sub: 'Local & international expertise, a shared passion for excellence.',
      members: [
        { i: 'H', n: 'HICHAM', r: 'Co-founder · French-Moroccan', b: 'Master’s in real-estate management. Expertise in consulting, management, fit-out and property yield. Deeply rooted in the Marrakech ecosystem.' },
        { i: 'M', n: 'MOHAMED', r: 'Co-founder · French-Tunisian', b: '5 years of team management experience in France. Expert in customer satisfaction and operations. The human pillar of the Harmonia organization.' },
        { i: 'N', n: 'NICOLAS', r: 'Co-founder · French', b: 'Graduate of renowned French hospitality schools, entrepreneur for 10 years. Brings his network, hospitality expertise and premium-service vision.' },
      ],
      cta: 'Contact us',
    },
  },
};

export type AboutContent = (typeof about)['fr'];
