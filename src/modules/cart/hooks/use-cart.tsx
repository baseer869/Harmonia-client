'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { storage } from '@/lib/storage';
import type { CartItem, Currency } from '../types';

const RATES: Record<Currency, number> = { MAD: 1, EUR: 0.092, USD: 0.099 };
const SYMBOLS: Record<Currency, string> = { MAD: 'MAD', EUR: '€', USD: '$' };
const STORAGE_KEY = 'harmonia.cart';

interface CartCtx {
  cart: CartItem[];
  currency: Currency;
  isOpen: boolean;
  cartCount: number;
  cartTotal: number;
  addToCart: (item: Omit<CartItem, 'qty'>, quantity?: number, mode?: 'add' | 'set') => void;
  removeFromCart: (id: string) => void;
  removeExtra: (id: string, extraName: string) => void;
  clearCart: () => void;
  changeQty: (id: string, delta: number) => void;
  setCurrency: (c: Currency) => void;
  openCart: () => void;
  closeCart: () => void;
  convertPrice: (mad: number, cur: Currency) => string;
}

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currency, setCurrencyState] = useState<Currency>('MAD');
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage once on mount, collapsing any duplicate rows
  // (same id = same service + date + people + variant + add-ons) into one line.
  useEffect(() => {
    const saved = storage.get<CartItem[]>(STORAGE_KEY);
    if (!saved) return;
    const merged: CartItem[] = [];
    for (const it of saved) {
      const dup = merged.find((m) => m.id === it.id);
      if (dup) dup.qty += it.qty;
      else merged.push({ ...it });
    }
    setCart(merged);
  }, []);

  useEffect(() => {
    storage.set(STORAGE_KEY, cart);
  }, [cart]);

  const addToCart = useCallback(
    (item: Omit<CartItem, 'qty'>, quantity = 1, mode: 'add' | 'set' = 'add') => {
      setCart((prev) => {
        // One row per service (item.id = serviceId). Re-adding the same service
        // refreshes its row to the latest selection; 'add' bumps the qty,
        // 'set' replaces it (used by "Book now").
        const existing = prev.find((c) => c.id === item.id);
        if (existing) {
          const qty = mode === 'set' ? quantity : existing.qty + quantity;
          return prev.map((c) => (c.id === item.id ? { ...item, qty } : c));
        }
        return [...prev, { ...item, qty: quantity }];
      });
      if (mode === 'add') setIsOpen(true);
    },
    [],
  );

  // Remove a single add-on from a cart line and subtract its price from the line.
  const removeExtra = useCallback((id: string, extraName: string) => {
    setCart((prev) =>
      prev.map((c) => {
        if (c.id !== id || !c.booking) return c;
        const ex = c.booking.extras.find((e) => e.name === extraName);
        if (!ex) return c;
        return {
          ...c,
          price: Math.max(0, c.price - Math.round(ex.priceCents / 100)),
          booking: { ...c.booking, extras: c.booking.extras.filter((e) => e.name !== extraName) },
        };
      }),
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const changeQty = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const setCurrency = useCallback((c: Currency) => setCurrencyState(c), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const convertPrice = useCallback((mad: number, cur: Currency): string => {
    const val = mad * RATES[cur];
    return `${SYMBOLS[cur]} ${cur === 'MAD' ? val.toLocaleString('fr-FR') : val.toFixed(0)}`;
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        currency,
        isOpen,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        removeExtra,
        clearCart,
        changeQty,
        setCurrency,
        openCart,
        closeCart,
        convertPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartCtx {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
