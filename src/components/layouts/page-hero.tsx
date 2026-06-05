import type { ReactNode } from 'react';

/** Reusable page hero banner (image + eyebrow + title). */
export function PageHero({
  eyebrow,
  title,
  imgSrc,
  imgAlt = '',
}: {
  eyebrow: string;
  title: ReactNode;
  imgSrc: string;
  imgAlt?: string;
}) {
  return (
    <div className="page-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="page-hero-img" src={imgSrc} alt={imgAlt} />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <div className="page-hero-eyebrow">{eyebrow}</div>
        <h1 className="page-hero-title font-bold!">{title}</h1>
      </div>
    </div>
  );
}
