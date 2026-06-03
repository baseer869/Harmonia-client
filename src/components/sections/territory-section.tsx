'use client';

import { useRef, useState } from 'react';

import { useI18n } from '@/i18n/provider';

/* Stylized Morocco map (from the original design) + zoom in/out & drag-pan. */

type City = {
  key: string;
  cx: number;
  cy: number;
  r: number;
  main?: boolean;
  label: string;
  sublabel?: { fr: string; en: string };
  desc: { fr: string; en: string };
};

const CITIES: City[] = [
  { key: 'marrakech', cx: 310, cy: 230, r: 10, main: true, label: 'Marrakech', sublabel: { fr: 'SIÈGE PRINCIPAL', en: 'MAIN OFFICE' }, desc: { fr: 'Notre siège — Conciergerie Premium', en: 'Our HQ — premium concierge' } },
  { key: 'casablanca', cx: 220, cy: 148, r: 6, label: 'Casablanca', desc: { fr: 'Bureau partenaire', en: 'Partner office' } },
  { key: 'agadir', cx: 225, cy: 318, r: 6, label: 'Agadir', desc: { fr: 'Excursions côtières', en: 'Coastal excursions' } },
  { key: 'fes', cx: 330, cy: 130, r: 5, label: 'Fès', desc: { fr: 'Médina historique', en: 'Historic medina' } },
  { key: 'rabat', cx: 242, cy: 118, r: 5, label: 'Rabat', desc: { fr: 'Capitale', en: 'Capital' } },
  { key: 'tanger', cx: 210, cy: 72, r: 5, label: 'Tanger', desc: { fr: "Porte de l'Europe", en: 'Gateway to Europe' } },
  { key: 'ouarzazate', cx: 360, cy: 292, r: 5, label: 'Ouarzazate', desc: { fr: 'Sahara & Excursions', en: 'Sahara & excursions' } },
];

const MOROCCO_PATH =
  'M 170 50 L 260 42 L 320 38 L 370 42 L 400 50 L 430 58 L 460 52 L 490 48 L 510 55 L 520 70 L 515 90 L 500 110 L 510 130 L 520 155 L 515 180 L 505 200 L 510 220 L 505 240 L 490 255 L 480 275 L 475 300 L 478 330 L 472 360 L 460 390 L 445 415 L 430 435 L 415 450 L 400 460 L 385 462 L 370 455 L 355 445 L 340 430 L 325 415 L 310 400 L 295 385 L 280 370 L 265 360 L 250 365 L 235 370 L 220 360 L 205 345 L 195 325 L 185 305 L 178 285 L 172 265 L 165 245 L 158 225 L 150 205 L 145 185 L 140 165 L 138 145 L 140 125 L 145 108 L 150 92 L 155 75 L 162 60 Z';
const SAHARA_PATH =
  'M 295 385 L 310 400 L 325 415 L 340 430 L 355 445 L 370 455 L 385 462 L 400 460 L 415 450 L 430 435 L 445 415 L 460 390 L 472 360 L 478 330 L 475 300 L 480 275 L 490 255 L 460 255 L 440 260 L 420 265 L 400 270 L 380 272 L 360 270 L 340 268 L 320 265 L 300 268 L 280 272 L 265 280 L 255 295 L 250 315 L 250 340 L 255 360 L 265 372 Z';
const ATLAS_PATH = 'M 200 200 Q 260 180 320 190 Q 380 195 440 210 Q 460 215 480 225';

const CX = 350;
const CY = 250;
const MIN = 1;
const MAX = 3.5;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

export function TerritorySection() {
  const { locale } = useI18n();
  const en = locale === 'en';
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{ x: number; y: number } | null>(null);

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState<City | null>(null);

  const clampPan = (p: { x: number; y: number }, z: number) => {
    const mx = (z - 1) * CX;
    const my = (z - 1) * CY;
    return { x: clamp(p.x, -mx, mx), y: clamp(p.y, -my, my) };
  };

  const setZoomTo = (z: number) => {
    const nz = clamp(z, MIN, MAX);
    setZoom(nz);
    setPan((p) => (nz === 1 ? { x: 0, y: 0 } : clampPan(p, nz)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    drag.current = { x: e.clientX, y: e.clientY };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current || !svgRef.current) return;
    const factor = 700 / svgRef.current.clientWidth; // px → viewBox units
    const dx = (e.clientX - drag.current.x) * factor;
    const dy = (e.clientY - drag.current.y) * factor;
    drag.current = { x: e.clientX, y: e.clientY };
    setPan((p) => clampPan({ x: p.x + dx, y: p.y + dy }, zoom));
  };
  const endDrag = () => {
    drag.current = null;
  };

  const transform = `translate(${pan.x} ${pan.y}) translate(${CX} ${CY}) scale(${zoom}) translate(${-CX} ${-CY})`;

  const ctrlStyle: React.CSSProperties = {
    width: 36,
    height: 36,
    display: 'grid',
    placeItems: 'center',
    background: 'rgba(8,7,4,.85)',
    border: '1px solid rgba(201,168,76,.35)',
    color: 'var(--gold)',
    fontSize: 18,
    lineHeight: 1,
    cursor: 'pointer',
    borderRadius: 6,
    userSelect: 'none',
  };

  return (
    <section
      className="sec"
      style={{ background: 'var(--dark2, #161616)', borderTop: '1px solid rgba(201,168,76,.15)' }}
    >
      <div className="eyebrow">{en ? 'Our Territory' : 'Notre Territoire'}</div>
      <h2 className="sec-h">
        {en ? 'Harmonia across ' : 'Harmonia à travers le '}
        <span className="g">{en ? 'Morocco' : 'Maroc'}</span>
      </h2>
      <p className="sec-sub" style={{ fontStyle: 'italic' }}>
        {en
          ? 'Based in Marrakech, with a reach across the entire Kingdom.'
          : 'Basés à Marrakech, rayonnant sur tout le Royaume.'}
      </p>

      <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
        {/* Zoom controls */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <button type="button" aria-label="Zoom in" style={ctrlStyle} onClick={() => setZoomTo(zoom + 0.5)}>
            +
          </button>
          <button type="button" aria-label="Zoom out" style={ctrlStyle} onClick={() => setZoomTo(zoom - 0.5)}>
            −
          </button>
          <button
            type="button"
            aria-label="Reset"
            style={{ ...ctrlStyle, fontSize: 12, letterSpacing: 1 }}
            onClick={() => setZoomTo(1)}
          >
            ⟲
          </button>
        </div>

        <svg
          ref={svgRef}
          viewBox="0 0 700 500"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            filter: 'drop-shadow(0 8px 32px rgba(0,0,0,.6))',
            cursor: zoom > 1 ? (drag.current ? 'grabbing' : 'grab') : 'default',
            touchAction: 'none',
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          <defs>
            <radialGradient id="mapGrad" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#2a2218" />
              <stop offset="100%" stopColor="#141008" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <clipPath id="frameClip">
              <rect width="700" height="500" rx="12" />
            </clipPath>
          </defs>

          {/* Static ocean frame */}
          <rect width="700" height="500" fill="#0a0f1a" rx="12" />

          {/* Zoomable / pannable content */}
          <g clipPath="url(#frameClip)">
            <g transform={transform}>
              <line x1="0" y1="250" x2="700" y2="250" stroke="rgba(201,168,76,.05)" strokeWidth="1" />
              <line x1="350" y1="0" x2="350" y2="500" stroke="rgba(201,168,76,.05)" strokeWidth="1" />

              <path d={MOROCCO_PATH} fill="url(#mapGrad)" stroke="rgba(201,168,76,.5)" strokeWidth="1.5" />
              <path d={SAHARA_PATH} fill="rgba(201,168,76,.04)" stroke="rgba(201,168,76,.2)" strokeWidth="1" strokeDasharray="4,3" />
              <path d={ATLAS_PATH} fill="none" stroke="rgba(201,168,76,.15)" strokeWidth="2" />

              {/* Marrakech pulse */}
              <circle cx={310} cy={230} r={16} fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="r" values="12;22;12" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {CITIES.map((c) => (
                <g key={c.key}>
                  <circle
                    cx={c.cx}
                    cy={c.cy}
                    r={c.r}
                    fill={c.main ? 'var(--gold, #C9A84C)' : '#8a7040'}
                    filter={c.main ? 'url(#glow)' : undefined}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHover(c)}
                    onMouseLeave={() => setHover(null)}
                  />
                  <text
                    x={c.cx + (c.main ? 15 : 12)}
                    y={c.cy + (c.main ? -5 : -2)}
                    fontFamily={c.main ? "'Cinzel', serif" : 'Lato, sans-serif'}
                    fontSize={c.main ? 12 : 10}
                    fontWeight={c.main ? 600 : 400}
                    fill={c.main ? '#C9A84C' : 'rgba(245,240,232,.6)'}
                  >
                    {c.label}
                  </text>
                  {c.sublabel && (
                    <text x={c.cx + 15} y={c.cy + 9} fontFamily="Lato, sans-serif" fontSize={9} letterSpacing="1" fill="rgba(201,168,76,.7)">
                      {en ? c.sublabel.en : c.sublabel.fr}
                    </text>
                  )}
                </g>
              ))}
            </g>
          </g>

          {/* Compass (fixed) */}
          <g transform="translate(620,60)">
            <circle r="22" fill="rgba(201,168,76,.06)" stroke="rgba(201,168,76,.2)" strokeWidth="1" />
            <text x="0" y="-10" textAnchor="middle" fontSize="10" fill="rgba(201,168,76,.7)" fontFamily="'Cinzel', serif">
              N
            </text>
            <line x1="0" y1="-6" x2="0" y2="6" stroke="rgba(201,168,76,.4)" strokeWidth="1" />
            <line x1="-6" y1="0" x2="6" y2="0" stroke="rgba(201,168,76,.4)" strokeWidth="1" />
          </g>
        </svg>

        {/* Hover caption */}
        <div style={{ minHeight: 22, marginTop: 14, textAlign: 'center' }}>
          {hover ? (
            <span style={{ fontSize: 13, color: 'var(--text-light)' }}>
              <strong style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif" }}>{hover.label}</strong>
              {' — '}
              {en ? hover.desc.en : hover.desc.fr}
            </span>
          ) : (
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              {en ? 'Hover a city · use + / − to zoom, drag to pan' : 'Survolez une ville · + / − pour zoomer, glissez pour déplacer'}
            </span>
          )}
        </div>

        {/* Info strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginTop: 28 }}>
          {[
            { n: '7', l: en ? 'Cities covered' : 'Villes couvertes' },
            { n: '1', l: en ? 'HQ · Marrakech' : 'Siège · Marrakech' },
            { n: '100%', l: en ? 'Morocco · Local' : 'Maroc · Local' },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontFamily: "'Cinzel', serif", fontSize: 22, color: 'var(--gold)' }}>
                {s.n}
              </span>
              <span style={{ fontSize: 9, letterSpacing: 3, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
