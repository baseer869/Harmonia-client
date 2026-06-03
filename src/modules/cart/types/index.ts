/** Cart · domain types. */

/** Real booking payload carried by a cart line (sent to the admin at checkout). */
export interface CartBooking {
  serviceId: string;
  people?: number;
  optionName?: string;
  scheduledAt?: string;
  extras: { name: string; priceCents: number }[];
}

export interface CartItem {
  id: number;
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
