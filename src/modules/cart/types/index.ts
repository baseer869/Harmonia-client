/** Cart · domain types. */
export interface CartItem {
  id: number;
  name: string;
  sub: string;
  price: number; // MAD (base currency)
  qty: number;
  img: string;
}

export type Currency = 'MAD' | 'EUR' | 'USD';
