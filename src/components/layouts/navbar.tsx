'use client';

import { useEffect, useState } from 'react';

import { useI18n } from '@/i18n/provider';
import { usePathname } from '@/i18n/navigation';
import { LocalizedLink } from '@/components/ui';
import { buildNav } from '@/constants';
import { LocaleSwitcher } from './locale-switcher';

export function Navbar() {
  const { dict } = useI18n();
  // Locale-agnostic pathname (no locale prefix), e.g. '/', '/voyageurs'.
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  const isHome = pathname === '/';
  const navItems = buildNav(dict);
  const isActive = (href: string) => {
    const base = href.split('#')[0];
    return base !== '/' && pathname.startsWith(base);
  };

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [isHome]);

  useEffect(() => {
    setMobOpen(false);
  }, [pathname]);

  return (
    <>
      <nav id="navbar" className={scrolled || !isHome ? 'solid' : ''}>
        <LocalizedLink href="/" className="nav-logo">
          <span className="nav-logo-main">{dict.brand.name}</span>
          <span className="nav-logo-sub">{dict.brand.tagline}</span>
        </LocalizedLink>

        <ul className="nav-primary">
          {navItems.map((item) => (
            <li
              key={item.href}
              className={`nav-item has-drop${
                isActive(item.href) ? ' active' : ''
              }`}
            >
              <LocalizedLink href={item.href}>
                {item.label} <span className="nav-arrow" />
              </LocalizedLink>
              <div className="nav-drop">
                {item.drops.map((d) => (
                  <LocalizedLink key={d.href} href={d.href}>
                    {d.label}
                  </LocalizedLink>
                ))}
              </div>
            </li>
          ))}
          <li
            className={`nav-item${isActive('/conditions') ? ' active' : ''}`}
          >
            <LocalizedLink href="/conditions">
              {dict.nav.conditions}
            </LocalizedLink>
          </li>
        </ul>

        <div className="nav-right">
          <LocaleSwitcher />
          <LocalizedLink
            href="/contact"
            style={{
              fontSize: 10,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: 'var(--cream)',
            }}
          >
            {dict.nav.contact}
          </LocalizedLink>
          <LocalizedLink href="/reserver" className="nav-cta">
            {dict.pages.voyageurs.bookCta}
          </LocalizedLink>
        </div>

        <button
          className="hamburger"
          onClick={() => setMobOpen(true)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mob-overlay${mobOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobOpen(false)}>
          ✕
        </button>
        <div className="mob-logo">{dict.brand.name}</div>
        {navItems.map((item) => (
          <div className="mob-group" key={item.href}>
            <span className="mob-group-title">{item.label}</span>
            <div className="mob-group-links">
              {item.drops.map((d) => (
                <LocalizedLink key={d.href} href={d.href}>
                  {d.label}
                </LocalizedLink>
              ))}
            </div>
          </div>
        ))}
        <div className="mob-group">
          <LocalizedLink href="/conditions" className="mob-group-title">
            {dict.nav.conditions}
          </LocalizedLink>
        </div>
        <div className="mob-group">
          <LocalizedLink href="/panier" className="mob-group-title">
            🛒 {dict.nav.cart}
          </LocalizedLink>
        </div>
        <div className="mob-cta" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <LocaleSwitcher />
          <LocalizedLink href="/reserver" style={{ flex: 1 }}>
            {dict.pages.voyageurs.bookCta}
          </LocalizedLink>
        </div>
      </div>
    </>
  );
}
