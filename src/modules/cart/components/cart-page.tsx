'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { useCart } from '../hooks';
import type { Currency } from '../types';

/** Full cart page (panier) — bilingual. */
export function CartPage() {
  const { dict } = useI18n();
  const t = dict.pages.panier;
  const {
    cart,
    currency,
    setCurrency,
    removeFromCart,
    changeQty,
    cartTotal,
    convertPrice,
  } = useCart();
  const acompte = Math.round(cartTotal * 0.3);

  return (
    <div style={{ paddingTop: 'var(--nav-h)', background: 'var(--black)', minHeight: '100vh' }}>
      <div style={{ padding: '60px 64px' }}>
        <div className="eyebrow left">{t.eyebrow}</div>
        <h1 className="sec-h" style={{ textAlign: 'left', marginBottom: 48 }}>
          {t.titleA} <span className="g">{t.titleB}</span>
        </h1>

        {cart.length === 0 ? (
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
              <button className="panier-checkout-btn">{t.checkout}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
