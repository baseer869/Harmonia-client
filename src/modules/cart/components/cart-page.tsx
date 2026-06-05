'use client';

import { useState } from 'react';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { money } from '@/lib/format';
import { useCreateBooking } from '@/modules/reservations';
import { useCart } from '../hooks';
import type { Currency } from '../types';
import { CartLineConfig } from './cart-line-config';

/** Never surface a raw validation payload (JSON array/object) to the customer. */
function cleanError(message: string, en: boolean): string {
  const trimmed = (message ?? '').trim();
  if (!trimmed || trimmed.startsWith('[') || trimmed.startsWith('{')) {
    return en
      ? 'Something went wrong with your request. Please check your details and try again.'
      : 'Une erreur est survenue. Veuillez vérifier vos informations et réessayer.';
  }
  return trimmed;
}

/** Full cart page (panier) — bilingual; checkout creates a real booking. */
export function CartPage() {
  const { dict, locale } = useI18n();
  const en = locale === 'en';
  const t = dict.pages.panier;
  const {
    cart,
    currency,
    setCurrency,
    removeFromCart,
    removeExtra,
    removeOption,
    changeQty,
    clearCart,
    cartTotal,
    convertPrice,
  } = useCart();
  const acompte = Math.round(cartTotal * 0.3);

  const createBooking = useCreateBooking();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const booking = createBooking.data;

  const checkout = () => {
    setFormError(null);
    if (!email.trim()) {
      setFormError(en ? 'Your email is required.' : 'Votre e-mail est requis.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError(
        en ? 'Please enter a valid email address.' : 'Veuillez saisir une adresse e-mail valide.',
      );
      return;
    }
    const items = cart
      .filter((c) => c.booking)
      .map((c) => ({
        serviceId: c.booking!.serviceId,
        quantity: c.qty,
        people: c.booking!.people,
        optionName: c.booking!.optionName,
        scheduledAt: c.booking!.scheduledAt,
        extras: c.booking!.extras,
      }));
    if (!items.length) {
      setFormError(
        en ? 'Your cart has no bookable items.' : "Votre panier n'a aucune prestation réservable.",
      );
      return;
    }
    createBooking.mutate(
      { items, locale, customer: { name: name || undefined, email, phone: phone || undefined } },
      { onSuccess: () => clearCart() },
    );
  };

  return (
    <div style={{ paddingTop: 'var(--nav-h)', background: 'var(--black)', minHeight: '100vh' }}>
      <div style={{ padding: '60px 64px' }}>
        <div className="eyebrow left">{t.eyebrow}</div>
        <h1 className="sec-h" style={{ textAlign: 'left', marginBottom: 48 }}>
          {t.titleA} <span className="g">{t.titleB}</span>
        </h1>

        {booking ? (
          <div className="panier-empty">
            <div
              className="panier-empty-icon"
              style={{
                color: 'var(--gold)',
                border: '1px solid rgba(201,168,76,.4)',
                background: 'rgba(201,168,76,.08)',
              }}
            >
              ✓
            </div>
            <div className="panier-empty-title">
              {en ? 'Request received' : 'Demande envoyée'}
            </div>
            <p
              className="panier-empty-sub"
              style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}
            >
              {en
                ? 'Thank you. Your reservation request has been sent — our concierge will contact you shortly to confirm availability and arrange payment.'
                : 'Merci. Votre demande de réservation a été envoyée — notre conciergerie vous contactera prochainement pour confirmer la disponibilité et organiser le paiement.'}
            </p>

            <div
              style={{
                width: '100%',
                maxWidth: 420,
                margin: '8px auto 28px',
                border: '1px solid rgba(201,168,76,.18)',
                borderRadius: 12,
                background: 'rgba(255,255,255,.02)',
                overflow: 'hidden',
              }}
            >
              {[
                [en ? 'Reference' : 'Référence', booking.code],
                [en ? 'Estimated total' : 'Total estimé', money(booking.totalCents, booking.currency)],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    padding: '14px 20px',
                    borderTop: i === 0 ? 'none' : '1px solid rgba(201,168,76,.1)',
                  }}
                >
                  <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    {k}
                  </span>
                  <strong style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif" }}>{v}</strong>
                </div>
              ))}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  padding: '14px 20px',
                  borderTop: '1px solid rgba(201,168,76,.1)',
                }}
              >
                <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {en ? 'Status' : 'Statut'}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: '#d9b44a',
                    border: '1px solid rgba(217,180,74,.4)',
                    borderRadius: 999,
                    padding: '3px 10px',
                  }}
                >
                  {en ? 'Pending confirmation' : 'En attente de confirmation'}
                </span>
              </div>
            </div>

            <LocalizedLink href="/voyageurs" className="btn-gold">
              {t.explore}
            </LocalizedLink>
          </div>
        ) : cart.length === 0 ? (
          <div className="panier-empty">
            <div className="panier-empty-icon">🧺</div>
            <div className="panier-empty-title">{t.emptyTitle}</div>
            <p className="panier-empty-sub">{t.emptySub}</p>
            <LocalizedLink href="/voyageurs" className="btn-gold">
              {t.explore}
            </LocalizedLink>
          </div>
        ) : (
          <div className="panier-layout">
            <div>
              <div className="panier-section-title">
                {t.selected} ({cart.length})
              </div>
              {cart.map((item) => (
                <div key={item.id} className="panier-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="panier-item-img" src={item.img} alt={item.name} />
                  <div className="panier-item-body">
                    <div className="panier-item-cat">{t.itemCat}</div>
                    <div className="panier-item-name">{item.name}</div>
                    <div className="panier-item-detail">{item.sub}</div>
                    <CartLineConfig
                      booking={item.booking}
                      onRemoveOption={() => removeOption(item.id)}
                      onRemoveExtra={(n) => removeExtra(item.id, n)}
                    />
                    <div className="panier-item-qty">
                      <button className="panier-qty-btn" onClick={() => changeQty(item.id, -1)}>
                        −
                      </button>
                      <span className="panier-qty-num">{item.qty}</span>
                      <button className="panier-qty-btn" onClick={() => changeQty(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="panier-item-right">
                    <div className="panier-item-price">
                      MAD {(item.price * item.qty).toLocaleString('fr-FR')}
                    </div>
                    <button className="panier-item-del" onClick={() => removeFromCart(item.id)}>
                      {t.remove}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="panier-summary">
              <div className="panier-sum-title">{t.summary}</div>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 9, letterSpacing: 3, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  {t.currency}
                </span>
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  {(['MAD', 'EUR', 'USD'] as Currency[]).map((c) => (
                    <button
                      key={c}
                      className={`currency-btn${currency === c ? ' active' : ''}`}
                      onClick={() => setCurrency(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="panier-sum-row">
                  <span>
                    {item.name} ×{item.qty}
                  </span>
                  <span>MAD {(item.price * item.qty).toLocaleString('fr-FR')}</span>
                </div>
              ))}
              <div className="panier-sum-row total">
                <span>{t.total}</span>
                <span>MAD {cartTotal.toLocaleString('fr-FR')}</span>
              </div>
              {currency !== 'MAD' && (
                <div style={{ textAlign: 'right', fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
                  ≈ {convertPrice(cartTotal, currency)}
                </div>
              )}
              <div className="panier-acompte-box">
                <div className="panier-acompte-val">
                  MAD {acompte.toLocaleString('fr-FR')}
                </div>
                <div className="panier-acompte-lbl">{t.depositLbl}</div>
                <p className="panier-acompte-note">{t.depositNote}</p>
              </div>

              {/* Contact — required to place the booking (guest checkout). */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                <span style={{ fontSize: 9, letterSpacing: 3, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  {en ? 'Your details' : 'Vos coordonnées'}
                </span>
                <input
                  className="panier-contact-input"
                  placeholder={en ? 'Full name' : 'Nom complet'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="panier-contact-input"
                  type="email"
                  placeholder={en ? 'Email *' : 'E-mail *'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="panier-contact-input"
                  placeholder={en ? 'Phone' : 'Téléphone'}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {(formError || createBooking.isError) && (
                <p style={{ color: '#e07a7a', fontSize: 12, marginBottom: 10 }}>
                  {formError ?? cleanError((createBooking.error as Error).message, en)}
                </p>
              )}

              <button
                className="panier-checkout-btn"
                onClick={checkout}
                disabled={createBooking.isPending}
                style={createBooking.isPending ? { opacity: 0.6 } : undefined}
              >
                {createBooking.isPending ? (en ? 'Processing…' : 'Traitement…') : t.checkout}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
