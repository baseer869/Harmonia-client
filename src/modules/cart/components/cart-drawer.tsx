'use client';

import { useEffect } from 'react';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { useCart, lineTotalMad } from '../hooks';
import type { Currency } from '../types';
import { CartLineConfig } from './cart-line-config';

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
    changeExtraQty,
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

  // Multi-vendor cart: totals grouped by currency (providers may differ).
  const totalsByCurrency = cart.reduce<Record<string, number>>((acc, i) => {
    const c = i.currency ?? 'MAD';
    acc[c] = (acc[c] ?? 0) + lineTotalMad(i);
    return acc;
  }, {});
  const currencyList = Object.keys(totalsByCurrency);
  const singleCurrency = currencyList.length === 1;
  const baseCur = (currencyList[0] ?? 'MAD') as Currency;

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
                  <CartLineConfig
                    booking={item.booking}
                    currency={item.currency ?? 'MAD'}
                    onChangeExtraQty={(n, d) => changeExtraQty(item.id, n, d)}
                    compact
                  />
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
                    {item.currency ?? 'MAD'} {lineTotalMad(item).toLocaleString('fr-FR')}
                  </div>
                  {currency !== (item.currency ?? 'MAD') && (
                    <div className="cart-item-conv">
                      ≈ {convertPrice(lineTotalMad(item), currency, (item.currency ?? 'MAD') as Currency)}
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
                  {currencyList
                    .map((cur) => `${cur} ${totalsByCurrency[cur]!.toLocaleString('fr-FR')}`)
                    .join(' · ')}
                </div>
                {singleCurrency && currency !== baseCur && (
                  <div className="cart-total-conv">
                    ≈ {convertPrice(totalsByCurrency[baseCur]!, currency, baseCur)}
                  </div>
                )}
              </div>
            </div>
            <div className="cart-acompte-note">
              💳{' '}
              <strong>
                {t.depositLine} :{' '}
                {currencyList
                  .map((cur) => `${cur} ${Math.round(totalsByCurrency[cur]! * 0.3).toLocaleString('fr-FR')}`)
                  .join(' · ')}
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
