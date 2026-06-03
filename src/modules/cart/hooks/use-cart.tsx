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
  addToCart: (item: Omit<CartItem, 'qty'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
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

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    const saved = storage.get<CartItem[]>(STORAGE_KEY);
    if (saved) setCart(saved);
  }, []);

  useEffect(() => {
    storage.set(STORAGE_KEY, cart);
  }, [cart]);

  const addToCart = useCallback((item: Omit<CartItem, 'qty'>, quantity = 1) => {
    setCart((prev) => {
      // Same service + date + people + option + extras → bump qty, not a new row.
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + quantity } : c,
        );
      }
      return [...prev, { ...item, qty: quantity }];
    });
    setIsOpen(true);
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
