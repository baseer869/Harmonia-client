'use client';

import { useState } from 'react';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { useCart } from '@/modules/cart';
import type { ServiceData } from '../types';

/**
 * Service detail + booking. Bilingual UI chrome via the dictionary; the deep
 * body content (description, included, reviews) comes from the temporary static
 * dataset and will be replaced by /api/public/services data.
 */
export function ServiceDetail({ svc, id }: { svc: ServiceData; id: string }) {
  const { dict } = useI18n();
  const t = dict.pages.service;
  const cat = (dict.categories as Record<string, { name: string; price: string }>)[id];
  const title = cat?.name ?? svc.title;
  const priceLabel = cat?.price ?? svc.price;

  const { addToCart } = useCart();
  const [tab, setTab] = useState(0);
  const [qty, setQty] = useState(1);
  const [date, setDate] = useState('');
  const [persons, setPersons] = useState('2');

  const stars = '★'.repeat(Math.round(parseFloat(svc.rating)));
  const tabs = [t.tabDescription, t.tabIncluded, t.tabInfo, t.tabReviews];

  const handleAdd = () => {
    addToCart({
      id: Date.now(),
      name: title,
      sub: `${date || t.dateConfirm} · ${persons} ${
        Number(persons) > 1 ? t.persons : t.person
      }`,
      price: svc.priceNum * Math.max(1, parseInt(persons, 10)) * qty,
      img: svc.thumb,
    });
  };

  return (
    <div style={{ paddingTop: 'var(--nav-h)', background: 'var(--black)', minHeight: '100vh' }}>
      <div className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-hero-img" src={svc.img} alt={title} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">{dict.pages.voyageurs.heroTitle}</div>
          <h1 className="page-hero-title">{title}</h1>
        </div>
      </div>

      <div
        style={{
          padding: '48px 64px',
          maxWidth: 1260,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: 48,
          alignItems: 'start',
        }}
        className="svc-layout"
      >
        <div style={{ background: 'var(--dark2)' }}>
          <div className="svc-title-area">
            <div className="svc-breadcrumb">
              <LocalizedLink href="/voyageurs">{dict.nav.travelers}</LocalizedLink> ›{' '}
              {svc.cat}
            </div>
            <span className="svc-cat-tag">{svc.cat}</span>
            <h2 className="svc-title">{title}</h2>
            <div className="svc-rating-row">
              <span className="svc-stars">{stars}</span>
              <span className="svc-rating-count">
                {svc.rating} / 5 · {svc.reviews}
              </span>
              <span className="svc-price-badge">{priceLabel}</span>
            </div>
          </div>

          <div className="svc-tabs">
            {tabs.map((label, i) => (
              <div
                key={label}
                className={`svc-tab${tab === i ? ' active' : ''}`}
                onClick={() => setTab(i)}
              >
                {label}
              </div>
            ))}
          </div>

          <div style={{ display: tab === 0 ? 'block' : 'none', padding: '40px 48px' }}>
            <p className="svc-desc-text">{svc.desc}</p>
            <div
              style={{
                fontSize: 10,
                letterSpacing: 3,
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              {t.optionsTitle}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {svc.options.map((o) => (
                <li
                  key={o}
                  style={{ fontSize: 13, color: 'var(--text-light)', paddingLeft: 16, position: 'relative' }}
                >
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>›</span>
                  {o}
                </li>
              ))}
            </ul>
            <div className="svc-seo-tags" style={{ marginTop: 24 }}>
              {svc.tags.map((tag) => (
                <span key={tag} className="svc-seo-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: tab === 1 ? 'block' : 'none', padding: '40px 48px' }}>
            <div className="included-grid">
              {svc.included.map(([incTitle, desc]) => (
                <div key={incTitle} className="inc-item">
                  <span className="inc-check">✓</span>
                  <div className="inc-text">
                    <strong>{incTitle}</strong>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

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

        <div className="svc-sidebar">
          <div className="booking-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="booking-card-img" src={svc.thumb} alt={title} />
            <div className="booking-card-body">
              <div className="booking-title">{title}</div>
              <div className="booking-price">{priceLabel}</div>
              <div className="booking-form">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <select value={persons} onChange={(e) => setPersons(e.target.value)}>
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n > 1 ? t.persons : t.person}
                    </option>
                  ))}
                </select>
                <select defaultValue={svc.options[0]}>
                  {svc.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              {svc.extras.length > 0 && (
                <>
                  <div className="booking-divider" />
                  <div className="extras-title">{t.extrasTitle}</div>
                  {svc.extras.map(([name, price]) => (
                    <div key={name} className="extra-item">
                      <span className="extra-name">{name}</span>
                      <span className="extra-price">{price}</span>
                      <button className="extra-add">{t.add}</button>
                    </div>
                  ))}
                </>
              )}
              <div className="booking-divider" />
              <div className="acompte-note">
                💳 <strong>{t.deposit}</strong> {t.depositNote}
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 4, alignItems: 'center' }}>
                <button className="cart-qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>
                  −
                </button>
                <span style={{ fontSize: 14, color: 'var(--cream)', minWidth: 24, textAlign: 'center' }}>
                  {qty}
                </span>
                <button className="cart-qty-btn" onClick={() => setQty(qty + 1)}>
                  +
                </button>
              </div>
              <button className="booking-submit" style={{ marginTop: 12 }} onClick={handleAdd}>
                {t.bookNow}
              </button>
              <button className="btn-add-cart" onClick={handleAdd}>
                {t.addToCart}
              </button>
              <p className="booking-note">{t.bookingNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
