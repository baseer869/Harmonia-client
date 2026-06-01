import type { Dictionary } from '@/i18n';

/**
 * Navigation structure. Hrefs are locale-relative (the LocalizedLink / proxy
 * adds the locale prefix). Labels come from the dictionary so the menu is
 * fully bilingual.
 */
export interface NavDrop {
  labelKey: string;
  href: string;
}
export interface NavEntry {
  label: string;
  href: string;
  drops: { label: string; href: string }[];
}

export function buildNav(dict: Dictionary): NavEntry[] {
  const n = dict.nav;
  return [
    {
      label: n.owners,
      href: '/proprietaires',
      drops: [
        { label: n.ownersDrops.presentation, href: '/proprietaires' },
        { label: n.ownersDrops.formulas, href: '/proprietaires#formules' },
        { label: n.ownersDrops.services, href: '/proprietaires#services-inclus' },
      ],
    },
    {
      label: n.travelers,
      href: '/voyageurs',
      drops: [
        { label: n.travelersDrops.catalogue, href: '/voyageurs' },
        { label: n.travelersDrops.book, href: '/voyageurs#voy-catalogue' },
      ],
    },
    {
      label: n.invest,
      href: '/invest',
      drops: [
        { label: n.investDrops.harmonia, href: '/invest' },
        { label: n.investDrops.steps, href: '/invest#invest-steps' },
        { label: n.investDrops.forWho, href: '/invest#invest-pour-qui' },
      ],
    },
    {
      label: n.about,
      href: '/about',
      drops: [
        { label: n.aboutDrops.story, href: '/about' },
        { label: n.aboutDrops.team, href: '/about#equipe' },
        { label: n.aboutDrops.values, href: '/about#valeurs' },
      ],
    },
    {
      label: n.partners,
      href: '/partenaires',
      drops: [
        { label: n.partnersDrops.broker, href: '/partenaires#apport' },
        { label: n.partnersDrops.harmoniaPartners, href: '/partenaires#partners' },
      ],
    },
  ];
}

export const FOOTER_LINKS: { key: keyof Dictionary['footer']; href: string }[] = [
  { key: 'home', href: '/' },
  { key: 'owners', href: '/proprietaires' },
  { key: 'travelers', href: '/voyageurs' },
  { key: 'invest', href: '/invest' },
  { key: 'about', href: '/about' },
  { key: 'partners', href: '/partenaires' },
  { key: 'contact', href: '/contact' },
];
