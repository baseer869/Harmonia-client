'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    label: 'Propriétaires', href: '/proprietaires',
    drops: [
      { label: 'Présentation & Avantages', href: '/proprietaires' },
      { label: 'Nos 3 Formules', href: '/proprietaires#formules' },
      { label: 'Services Inclus', href: '/proprietaires#services-inclus' },
    ],
  },
  {
    label: 'Voyageurs', href: '/voyageurs',
    drops: [
      { label: 'Catalogue de Services', href: '/voyageurs' },
      { label: 'Réserver un Service', href: '/voyageurs#voy-catalogue' },
    ],
  },
  {
    label: 'Investissement', href: '/invest',
    drops: [
      { label: 'Harmonia Invest', href: '/invest' },
      { label: 'Accompagnement A à Z', href: '/invest#invest-steps' },
      { label: 'Pour Qui ?', href: '/invest#invest-pour-qui' },
    ],
  },
  {
    label: 'À Propos', href: '/about',
    drops: [
      { label: 'Notre Histoire', href: '/about' },
      { label: "L'Équipe Fondatrice", href: '/about#equipe' },
      { label: 'Nos Valeurs', href: '/about#valeurs' },
    ],
  },
  {
    label: 'Partenaires', href: '/partenaires',
    drops: [
      { label: "Apporteur d'Affaires", href: '/partenaires#apport' },
      { label: 'Harmonia Partners', href: '/partenaires#partners' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [isHome]);

  useEffect(() => { setMobOpen(false); }, [pathname]);

  return (
    <>
      <nav id="navbar" className={scrolled || !isHome ? 'solid' : ''}>
        <Link href="/" className="nav-logo">
          <span className="nav-logo-main">HARMONIA</span>
          <span className="nav-logo-sub">Résidence &amp; Conciergerie</span>
        </Link>

        <ul className="nav-primary">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className={`nav-item has-drop${pathname.startsWith(item.href) ? ' active' : ''}`}>
              <Link href={item.href}>
                {item.label} <span className="nav-arrow" />
              </Link>
              <div className="nav-drop">
                {item.drops.map((d) => (
                  <Link key={d.href} href={d.href}>{d.label}</Link>
                ))}
              </div>
            </li>
          ))}
          <li className={`nav-item${pathname === '/conditions' ? ' active' : ''}`}>
            <Link href="/conditions">Conditions</Link>
          </li>
        </ul>

        <Link href="/contact" className="nav-cta">Nous Contacter</Link>
        <button className="hamburger" onClick={() => setMobOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mob-overlay${mobOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobOpen(false)}>✕</button>
        <div className="mob-logo">HARMONIA</div>
        {NAV_ITEMS.map((item) => (
          <div className="mob-group" key={item.href}>
            <span className="mob-group-title">{item.label}</span>
            <div className="mob-group-links">
              {item.drops.map((d) => (
                <Link key={d.href} href={d.href}>{d.label}</Link>
              ))}
            </div>
          </div>
        ))}
        <div className="mob-group">
          <Link href="/conditions" className="mob-group-title" style={{ display: 'block', cursor: 'pointer' }}>
            Conditions d&apos;utilisation
          </Link>
        </div>
        <div className="mob-group">
          <Link href="/panier" className="mob-group-title" style={{ display: 'block', cursor: 'pointer' }}>
            🛒 Panier
          </Link>
        </div>
        <div className="mob-cta">
          <Link href="/contact">Nous Contacter</Link>
        </div>
      </div>
    </>
  );
}
