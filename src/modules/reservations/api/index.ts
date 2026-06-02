import { api } from '@/lib/api';

import type { Booking } from '../types';
import { createBookingSchema, type CreateBookingInput } from '../validation';

/**
 * Reservations · API layer.
 *
 * Thin passthrough to the admin's public booking endpoint. The website never
 * touches a database or prices anything — it forwards the user's selection and
 * the admin returns the priced, PENDING booking.
 */
export const bookingApi = {
  /** Submit a booking request. Tenant + customer session are attached by `api`. */
  create(input: CreateBookingInput): Promise<Booking> {
    // Parse only to guarantee the request shape before it leaves the browser.
    const payload = createBookingSchema.parse(input);
    return api.post<Booking>('/bookings', payload);
  },
};
