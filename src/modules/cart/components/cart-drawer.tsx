'use client';

import { useEffect } from 'react';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { useCart } from '../hooks';
import type { Currency } from '../types';

/** Floating cart button + slide-out drawer (bilingual). */
export function CartDrawer() {
  const { dict } = useI18n();
  const t = dict.cart;
  const {
    cart,
    currency,
    isOpen,
    openCart,
    closeCart,
    removeFromCart,
    changeQty,
    setCurrency,
    cartCount,
    cartTotal,
    convertPrice,
  } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const acompte = Math.round(cartTotal * 0.3);

  return (
    <>
      <button className="cart-float" onClick={openCart} aria-label={t.title}>
        🛒
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>

      <div
        className={`cart-drawer-overlay${isOpen ? ' open' : ''}`}
        onClick={closeCart}
      />

      <div className={`cart-drawer${isOpen ? ' open' : ''}`}>
        <div className="cart-drawer-header">
          <span className="cart-drawer-title">{t.title}</span>
          <button className="cart-drawer-close" onClick={closeCart}>
            ✕
          </button>
        </div>

        <div className="cart-cur-row">
          <span className="currency-bar-label">{t.currency}</span>
          {(['MAD', 'EUR', 'USD'] as Currency[]).map((cur) => (
            <button
              key={cur}
              className={`currency-btn${currency === cur ? ' active' : ''}`}
              onClick={() => setCurrency(cur)}
            >
              {cur === 'EUR' ? '€ EUR' : cur === 'USD' ? '$ USD' : 'MAD'}
            </button>
          ))}
        </div>

        <div className="cart-items-area">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">🧺</div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                {t.empty}
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-row">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="cart-item-img" src={item.img} alt={item.name} />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-sub">{item.sub || t.item}</div>
                  <div className="cart-item-qty">
                    <button
                      className="cart-qty-btn"
                      onClick={() => changeQty(item.id, -1)}
                    >
                      −
                    </button>
                    <span className="cart-qty-num">{item.qty}</span>
                    <button
                      className="cart-qty-btn"
                      onClick={() => changeQty(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-item-right">
                  <div className="cart-item-price">
                    MAD {(item.price * item.qty).toLocaleString('fr-FR')}
                  </div>
                  {currency !== 'MAD' && (
                    <div className="cart-item-conv">
                      ≈ {convertPrice(item.price * item.qty, currency)}
                    </div>
                  )}
                  <button
                    className="cart-item-del"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-block">
              <div>
                <div className="cart-total-lbl">{t.total}</div>
                <div className="cart-total-price">
                  MAD {cartTotal.toLocaleString('fr-FR')}
                </div>
                {currency !== 'MAD' && (
                  <div className="cart-total-conv">
                    ≈ {convertPrice(cartTotal, currency)}
                  </div>
                )}
              </div>
            </div>
            <div className="cart-acompte-note">
              💳{' '}
              <strong>
                {t.depositLine} : MAD {acompte.toLocaleString('fr-FR')}
              </strong>
              <br />
              {t.depositNote}
            </div>
            <LocalizedLink href="/panier" onClick={closeCart}>
              <button className="cart-checkout-btn">{t.viewCart}</button>
            </LocalizedLink>
            <button className="cart-continue-btn" onClick={closeCart}>
              {t.continue}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
