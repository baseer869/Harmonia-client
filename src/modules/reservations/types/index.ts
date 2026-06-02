/**
 * Reservations · types.
 *
 * Shapes mirror the admin's public booking API. The client website holds NO
 * pricing or booking logic — totals are computed server-side and returned here.
 */
export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';

/** A created booking as returned by `POST /api/public/bookings`. */
export interface Booking {
  id: string;
  code: string;
  status: BookingStatus;
  subtotalCents: number;
  totalCents: number;
  currency: string;
}
