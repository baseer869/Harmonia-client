'use client';

import { useState } from 'react';

import { useI18n } from '@/i18n/provider';
import { useRouter } from '@/i18n/navigation';
import { LocalizedLink } from '@/components/ui';
import { money, onImageError, resolveAssetUrl } from '@/lib/format';
import { useCart } from '@/modules/cart';

import type { PublicService } from '../types';

/**
 * Service detail + booking — ORIGINAL design, now driven by a live service from
 * the admin public API. The booking card builds a cart line that carries the
 * real booking payload (serviceId, date, people, option, extras); pricing is
 * confirmed server-side at checkout.
 */

const TYPE_LABEL: Record<PublicService['type'], string> = {
  EXPERIENCE: 'Expérience',
  TRANSFER: 'Transfert',
  PRODUCT: 'Produit',
  QUOTE: 'Sur devis',
};
export function ServiceDetail({ service }: { service: PublicService }) {
  const { dict, locale } = useI18n();
  const t = dict.pages.service;

  const title = service.title;
  const catLabel = service.tags[0] ?? TYPE_LABEL[service.type];

  // One photo serves both: fall back to whichever is present.
  const photo = service.coverUrl ?? service.thumbUrl;
  const img = resolveAssetUrl(photo);
  const thumb = resolveAssetUrl(service.thumbUrl ?? service.coverUrl);

  const { addToCart, clearCart } = useCart();
  const router = useRouter();
  const [tab, setTab] = useState(0);
  // One counter per service: number of people (per-person) or units (others).
  const [qty, setQty] = useState(1);
  const [date, setDate] = useState('');
  const [option, setOption] = useState(''); // '' = the Base package
  const [extrasQty, setExtrasQty] = useState<Record<string, number>>({});

  const needsPeople = service.priceMode === 'PER_PERSON';
  const maxCount = needsPeople ? (service.maxPeople ?? 99) : 99;

  const hasReviews = service.reviewCount > 0;
  const stars = '★'.repeat(Math.max(0, Math.round(service.ratingCached))) || '—';
  const tabs = [t.tabDescription, t.tabIncluded, t.tabInfo, t.tabReviews];

  const bumpExtra = (name: string, delta: number) =>
    setExtrasQty((cur) => ({ ...cur, [name]: Math.max(0, (cur[name] ?? 0) + delta) }));

  // Resolved package unit price (Base price, or the chosen package's full price).
  const pkgCents = option
    ? (service.options.find((o) => o.name === option)?.priceDeltaCents ?? service.priceCents)
    : service.priceCents;

  // Live price at the top — package × count + add-ons. Resets to base on refresh.
  const liveAddonsCents = service.extras.reduce(
    (s, e) => s + e.priceCents * (extrasQty[e.name] ?? 0),
    0,
  );
  const liveTotalCents = pkgCents * qty + liveAddonsCents;
  const priceLabel =
    service.priceMode === 'ON_QUOTE'
      ? locale === 'en'
        ? 'On request'
        : 'Sur devis'
      : money(liveTotalCents, service.currency);

  const handleAdd = (checkout: boolean) => {
    // Add-ons the customer set a count for (flat, not × the package count).
    const selectedExtras = service.extras
      .map((e) => ({ name: e.name, priceCents: e.priceCents, qty: extrasQty[e.name] ?? 0 }))
      .filter((e) => e.qty > 0);
    // One cart line per service (re-adding updates this line, never a duplicate).
    const lineId = service.id;
    const estimate = Math.round((pkgCents * qty + selectedExtras.reduce((s, e) => s + e.priceCents * e.qty, 0)) / 100);
    const item = {
      id: lineId,
      name: title,
      sub: date || t.dateConfirm,
      price: estimate,
      img: thumb,
      currency: service.currency,
      booking: {
        serviceId: service.id,
        tenantId: service.tenantId,
        // The single count drives the booking quantity; people = count for
        // per-person services (metadata for the concierge).
        people: needsPeople ? qty : undefined,
        optionName: option || undefined,
        packageUnitCents: pkgCents,
        scheduledAt: date ? new Date(date).toISOString() : undefined,
        extras: selectedExtras,
      },
    };

    if (checkout) {
      // "Book now" = express checkout: the cart holds only this selection.
      clearCart();
      addToCart(item, qty, 'set');
      router.push('/panier');
      return;
    }
    // Multi-vendor cart: services from any provider can be added together;
    // checkout splits them into one booking per provider.
    addToCart(item, qty, 'add');
  };

  return (
    <div style={{ paddingTop: 'var(--nav-h)', background: 'var(--black)', minHeight: '100vh' }}>
      <div className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-hero-img" src={img} alt={title} onError={onImageError} />
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
              <LocalizedLink href="/voyageurs">{dict.nav.travelers}</LocalizedLink> › {catLabel}
            </div>
            <span className="svc-cat-tag">{catLabel}</span>
            <h2 className="svc-title">{title}</h2>
            <div className="svc-rating-row">
              <span className="svc-stars">{stars}</span>
              <span className="svc-rating-count">
                {hasReviews
                  ? `${service.ratingCached.toFixed(1)} / 5 · ${service.reviewCount} ${
                      locale === 'en' ? 'reviews' : 'avis'
                    }`
                  : locale === 'en'
                    ? 'New'
                    : 'Nouveau'}
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
            <p className="svc-desc-text">{service.description}</p>
            {service.options.length > 0 && (
              <>
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
                  {service.options.map((o) => (
                    <li
                      key={o.name}
                      style={{ fontSize: 13, color: 'var(--text-light)', paddingLeft: 16, position: 'relative' }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>›</span>
                      {o.name}
                      {o.priceDeltaCents
                        ? ` (+${money(o.priceDeltaCents, service.currency)})`
                        : ''}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {service.tags.length > 0 && (
              <div className="svc-seo-tags" style={{ marginTop: 24 }}>
                {service.tags.map((tag) => (
                  <span key={tag} className="svc-seo-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: tab === 1 ? 'block' : 'none', padding: '40px 48px' }}>
            <div className="included-grid">
              {service.included.map((inc) => (
                <div key={inc.title} className="inc-item">
                  <span className="inc-check">✓</span>
                  <div className="inc-text">
                    <strong>{inc.title}</strong>
                    {inc.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: tab === 2 ? 'block' : 'none', padding: '40px 48px' }}>
            <div className="info-grid">
              {service.info.map((i) => (
                <div key={i.label} className="info-box">
                  <div className="info-box-label">{i.label}</div>
                  <div className="info-box-val">{i.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: tab === 3 ? 'block' : 'none', padding: '40px 48px' }}>
            <p style={{ color: 'var(--text-light)', fontSize: 14 }}>
              {locale === 'en' ? 'No reviews yet.' : 'Aucun avis pour le moment.'}
            </p>
          </div>
        </div>

        <div className="svc-sidebar">
          <div className="booking-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="booking-card-img" src={thumb} alt={title} onError={onImageError} />
            <div className="booking-card-body">
              <div className="booking-title">{title}</div>
              <div className="booking-price">{priceLabel}</div>
              <div className="booking-form">
                {service.requiresDate && (
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                )}
                {service.options.length > 0 && (
                  <select value={option} onChange={(e) => setOption(e.target.value)}>
                    <option value="">
                      {(locale === 'en' ? 'Base' : 'Base')} — {money(service.priceCents, service.currency)}
                    </option>
                    {service.options.map((o) => (
                      <option key={o.name} value={o.name}>
                        {o.name} — {money(o.priceDeltaCents, service.currency)}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              {service.extras.length > 0 && (
                <>
                  <div className="booking-divider" />
                  <div className="extras-title">{t.extrasTitle}</div>
                  {service.extras.map((x) => {
                    const q = extrasQty[x.name] ?? 0;
                    return (
                      <div key={x.name} className="extra-item">
                        <span className="extra-name">{x.name}</span>
                        <span className="extra-price">
                          +{money(x.priceCents, service.currency)}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <button className="cart-qty-btn" onClick={() => bumpExtra(x.name, -1)}>
                            −
                          </button>
                          <span style={{ minWidth: 18, textAlign: 'center', color: 'var(--cream)' }}>{q}</span>
                          <button className="cart-qty-btn" onClick={() => bumpExtra(x.name, 1)}>
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
              <div className="booking-divider" />
              <div className="acompte-note">
                💳 <strong>{t.deposit}</strong> {t.depositNote}
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 4, alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', flex: 1, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {needsPeople
                    ? locale === 'en'
                      ? 'People'
                      : 'Personnes'
                    : locale === 'en'
                      ? 'Quantity'
                      : 'Quantité'}
                  {needsPeople && service.maxPeople ? (
                    <span
                      title={
                        locale === 'en'
                          ? `Up to ${service.maxPeople} people for this experience`
                          : `Jusqu'à ${service.maxPeople} personnes pour cette expérience`
                      }
                      style={{
                        fontSize: 10,
                        color: 'var(--gold)',
                        border: '1px solid rgba(201,168,76,.4)',
                        borderRadius: 999,
                        padding: '1px 7px',
                        cursor: 'help',
                      }}
                    >
                      {locale === 'en' ? `max ${service.maxPeople}` : `max ${service.maxPeople}`} ⓘ
                    </span>
                  ) : null}
                </span>
                <button
                  className="cart-qty-btn"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  −
                </button>
                <span style={{ fontSize: 14, color: 'var(--cream)', minWidth: 24, textAlign: 'center' }}>
                  {qty}
                </span>
                <button
                  className="cart-qty-btn"
                  disabled={qty >= maxCount}
                  style={qty >= maxCount ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}
                  onClick={() => setQty(Math.min(maxCount, qty + 1))}
                >
                  +
                </button>
              </div>
              <button className="booking-submit" style={{ marginTop: 12 }} onClick={() => handleAdd(true)}>
                {t.bookNow}
              </button>
              <button className="btn-add-cart" onClick={() => handleAdd(false)}>
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
