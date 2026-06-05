/** Cart · domain types. */

/** Real booking payload carried by a cart line (sent to the admin at checkout). */
export interface CartBooking {
  serviceId: string;
  people?: number;
  optionName?: string;
  /** Price the chosen variant added (so it can be subtracted if removed). */
  optionPriceDeltaCents?: number;
  scheduledAt?: string;
  extras: { name: string; priceCents: number }[];
}

export interface CartItem {
  id: string;
  name: string;
  sub: string;
  price: number; // MAD (base currency) — display estimate only
  qty: number;
  img: string;
  currency?: string;
  /** Present for live services; absent for any legacy/static lines. */
  booking?: CartBooking;
}

export type Currency = 'MAD' | 'EUR' | 'USD';
