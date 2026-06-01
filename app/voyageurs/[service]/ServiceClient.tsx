'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ServiceData } from '@/types';
import { useCart } from '@/context/CartContext';

interface Props {
  service: ServiceData;
}

export default function ServiceClient({ service: svc }: Props) {
  const { addToCart } = useCart();
  const [tab, setTab] = useState(0);
  const [qty, setQty] = useState(1);
  const [date, setDate] = useState('');
  const [persons, setPersons] = useState('2');
  const [lang, setLang] = useState('Français');

  const stars = '★'.repeat(Math.round(parseFloat(svc.rating)));
  const TABS = ['Description', 'Inclus', 'Infos Pratiques', 'Avis'];

  const handleAdd = () => {
    addToCart({
      id: Date.now(),
      name: svc.title,
      sub: `${date || 'Date à confirmer'} · ${persons} pers.`,
      price: svc.priceNum * Math.max(1, parseInt(persons)) * qty,
      img: svc.thumb,
    });
  };

  return (
    <div style={{ paddingTop: 'var(--nav-h)', background: 'var(--black)', minHeight: '100vh' }}>
      <div className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-hero-img" src={svc.img} alt={svc.title} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Catalogue de Services</div>
          <h1 className="page-hero-title">{svc.title}</h1>
        </div>
      </div>

      <div style={{ padding: '48px 64px', maxWidth: 1260, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start' }}>
        {/* MAIN */}
        <div style={{ background: 'var(--dark2)' }}>
          <div className="svc-title-area">
            <div className="svc-breadcrumb">
              <Link href="/voyageurs">Voyageurs</Link> › {svc.cat}
            </div>
            <span className="svc-cat-tag">{svc.cat}</span>
            <h2 className="svc-title">{svc.title}</h2>
            <div className="svc-rating-row">
              <span className="svc-stars">{stars}</span>
              <span className="svc-rating-count">{svc.rating} / 5 · {svc.reviews}</span>
              <span className="svc-price-badge">{svc.price}</span>
            </div>
          </div>

          <div className="svc-tabs">
            {TABS.map((t, i) => (
              <div key={t} className={`svc-tab${tab === i ? ' active' : ''}`} onClick={() => setTab(i)}>{t}</div>
            ))}
          </div>

          {/* Tab 0 – Description */}
          <div style={{ display: tab === 0 ? 'block' : 'none', padding: '40px 48px' }}>
            <p className="svc-desc-text">{svc.desc}</p>
            <div style={{ fontSize: 10, letterSpacing: 3, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 14 }}>Options disponibles</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {svc.options.map((o) => (
                <li key={o} style={{ fontSize: 13, color: 'var(--text-light)', paddingLeft: 16, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>›</span>{o}
                </li>
              ))}
            </ul>
            <div className="svc-seo-tags" style={{ marginTop: 24 }}>
              {svc.tags.map((t) => <span key={t} className="svc-seo-tag">{t}</span>)}
            </div>
          </div>

          {/* Tab 1 – Inclus */}
          <div style={{ display: tab === 1 ? 'block' : 'none', padding: '40px 48px' }}>
            <div className="included-grid">
              {svc.included.map(([title, desc]) => (
                <div key={title} className="inc-item">
                  <span className="inc-check">✓</span>
                  <div className="inc-text"><strong>{title}</strong>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab 2 – Infos */}
          <div style={{ display: tab === 2 ? 'block' : 'none', padding: '40px 48px' }}>
            <div className="info-grid">
              {svc.info.map(([label, val]) => (
                <div key={label} className="info-box">
                  <div className="info-box-label">{label}</div>
                  <div className="info-box-val">{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab 3 – Avis */}
          <div style={{ display: tab === 3 ? 'block' : 'none', padding: '40px 48px' }}>
            <div className="reviews-list">
              {svc.reviewsList.map((r) => (
                <div key={r.a} className="review-card">
                  <div className="review-header">
                    <span className="review-author">{r.a}</span>
                    <span className="review-date">{r.d}</span>
                  </div>
                  <div className="review-stars">{'★'.repeat(r.s)}</div>
                  <p className="review-text">{r.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="svc-sidebar">
          <div className="booking-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="booking-card-img" src={svc.thumb} alt={svc.title} />
            <div className="booking-card-body">
              <div className="booking-title">{svc.title}</div>
              <div className="booking-price">{svc.price}</div>
              <div className="booking-form">
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <select value={persons} onChange={(e) => setPersons(e.target.value)}>
                  {[1,2,3,4,5,6,8,10].map((n) => (
                    <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
                <select defaultValue={svc.options[0]}>
                  {svc.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="booking-lang-row">
                {['Français', 'English', 'العربية', 'Español'].map((l) => (
                  <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`} onClick={() => setLang(l)}>{l}</button>
                ))}
              </div>
              {svc.extras.length > 0 && (
                <>
                  <div className="booking-divider" />
                  <div className="extras-title">Extras optionnels</div>
                  {svc.extras.map(([name, price]) => (
                    <div key={name} className="extra-item">
                      <span className="extra-name">{name}</span>
                      <span className="extra-price">{price}</span>
                      <button className="extra-add">+ Ajouter</button>
                    </div>
                  ))}
                </>
              )}
              <div className="booking-divider" />
              <div className="acompte-note">
                💳 <strong>Acompte 30%</strong> à la réservation.<br />
                Solde réglé à l&apos;arrivée. Annulation gratuite 48h avant.
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 4, alignItems: 'center' }}>
                <button className="cart-qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span style={{ fontSize: 14, color: 'var(--cream)', minWidth: 24, textAlign: 'center' }}>{qty}</span>
                <button className="cart-qty-btn" onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button className="booking-submit" style={{ marginTop: 12 }} onClick={handleAdd}>Réserver maintenant</button>
              <button className="btn-add-cart" onClick={handleAdd}>+ Ajouter au panier</button>
              <p className="booking-note">Confirmation immédiate · Paiement sécurisé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
