'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { FOOTER_LINKS } from '@/constants';

export function Footer() {
  const { dict } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="f-logo">{dict.brand.name}</div>
      <div className="f-tagline">{dict.footer.tagline}</div>
      <nav className="f-links">
        {FOOTER_LINKS.map((link) => (
          <LocalizedLink key={link.href} href={link.href}>
            {dict.footer[link.key]}
          </LocalizedLink>
        ))}
      </nav>
      <div className="f-copy">
        © {year} {dict.brand.name} · {dict.footer.rights}
      </div>
    </footer>
  );
}
