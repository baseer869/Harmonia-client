/** Terms page — bilingual content. */
export const conditions = {
  fr: {
    hero: { eyebrow: 'Transparence & Confiance', titleA: 'Nos Conditions', titleH: "d'Utilisation." },
    blocks: [
      {
        title: 'Réservation & Paiement',
        desc: "Toute réservation est confirmée après réception de l'acompte de 30% du montant total. Le solde est réglé à votre arrivée ou à la livraison du service.",
        highlight: { val: '30%', lbl: 'Acompte à la réservation' },
        list: ['CB, Virement, PayPal acceptés', 'Paiement sécurisé SSL', 'Facture détaillée fournie', "Solde à l'arrivée (cash ou CB)"],
      },
      {
        title: 'Annulation & Remboursement',
        desc: "Nous comprenons que les plans peuvent changer. Voici notre politique d'annulation transparente.",
        featured: true,
        steps: [
          { n: '1', t: 'Plus de 48h avant', p: "Annulation gratuite — remboursement intégral de l'acompte" },
          { n: '2', t: 'Entre 24h et 48h', p: "Remboursement de 50% de l'acompte" },
          { n: '3', t: 'Moins de 24h', p: 'Acompte non remboursable (force majeure examinée au cas par cas)' },
        ],
      },
      {
        title: 'Responsabilités',
        desc: "Harmonia agit en qualité d'intermédiaire et de coordinateur de services. Nos prestataires sont sélectionnés avec soin et vérifiés régulièrement.",
        list: ['Prestataires assurés et certifiés', 'Contrôle qualité régulier', 'Assistance en cas de problème', 'Médiation et recours disponibles'],
      },
      {
        title: 'Données Personnelles',
        desc: 'Vos données sont protégées conformément au RGPD. Nous ne les partageons jamais avec des tiers sans votre consentement.',
        list: ['Données chiffrées et sécurisées', "Droit d'accès et suppression", 'Pas de revente à des tiers', 'Contact : privacy@harmonia-conciergerie.ma'],
      },
    ],
    guarantees: {
      eyebrow: 'Nos Garanties',
      titleA: 'La promesse',
      titleH: 'Harmonia',
      cards: [
        { t: 'Qualité Garantie', d: 'Si un service ne correspond pas à vos attentes, nous le refaisons ou vous remboursons.' },
        { t: 'Prix Transparents', d: 'Pas de frais cachés. Le prix affiché est le prix payé.' },
        { t: 'Assistance 24/7', d: 'Notre équipe est disponible à toute heure pour vous assister.' },
        { t: 'Annulation Flexible', d: "Jusqu'à 48h avant, l'annulation est gratuite et intégrale." },
      ],
      cta: 'Une question ? Contactez-nous',
    },
  },
  en: {
    hero: { eyebrow: 'Transparency & Trust', titleA: 'Our Terms', titleH: 'of Use.' },
    blocks: [
      {
        title: 'Booking & Payment',
        desc: 'Every booking is confirmed after receipt of the 30% deposit of the total amount. The balance is paid on arrival or on delivery of the service.',
        highlight: { val: '30%', lbl: 'Deposit on booking' },
        list: ['Card, Transfer, PayPal accepted', 'Secure SSL payment', 'Detailed invoice provided', 'Balance on arrival (cash or card)'],
      },
      {
        title: 'Cancellation & Refund',
        desc: 'We understand that plans can change. Here is our transparent cancellation policy.',
        featured: true,
        steps: [
          { n: '1', t: 'More than 48h before', p: 'Free cancellation — full refund of the deposit' },
          { n: '2', t: 'Between 24h and 48h', p: '50% refund of the deposit' },
          { n: '3', t: 'Less than 24h', p: 'Non-refundable deposit (force majeure reviewed case by case)' },
        ],
      },
      {
        title: 'Responsibilities',
        desc: 'Harmonia acts as an intermediary and service coordinator. Our providers are carefully selected and regularly vetted.',
        list: ['Insured and certified providers', 'Regular quality control', 'Assistance in case of issues', 'Mediation and recourse available'],
      },
      {
        title: 'Personal Data',
        desc: 'Your data is protected in accordance with GDPR. We never share it with third parties without your consent.',
        list: ['Encrypted and secure data', 'Right of access and deletion', 'No resale to third parties', 'Contact: privacy@harmonia-conciergerie.ma'],
      },
    ],
    guarantees: {
      eyebrow: 'Our Guarantees',
      titleA: 'The',
      titleH: 'Harmonia promise',
      cards: [
        { t: 'Guaranteed Quality', d: 'If a service does not meet your expectations, we redo it or refund you.' },
        { t: 'Transparent Prices', d: 'No hidden fees. The price shown is the price paid.' },
        { t: '24/7 Support', d: 'Our team is available at any time to assist you.' },
        { t: 'Flexible Cancellation', d: 'Up to 48h before, cancellation is free and full.' },
      ],
      cta: 'A question? Contact us',
    },
  },
};

export type ConditionsContent = (typeof conditions)['fr'];
