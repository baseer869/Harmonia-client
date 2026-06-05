/** Cart · domain types. */

/** Real booking payload carried by a cart line (sent to the admin at checkout). */
export interface CartBooking {
  serviceId: string;
  people?: number;
  /** Chosen package (undefined = the Base package). */
  optionName?: string;
  /** Package price × people — the fixed part of the line; add-ons stack on top. */
  packageTotalCents: number;
  scheduledAt?: string;
  extras: { name: string; priceCents: number; qty: number }[];
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
