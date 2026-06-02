import { z } from 'zod';

/**
 * Reservations · validation (FORM shape only).
 *
 * These schemas validate the booking *form* for UX — required fields, number
 * ranges, email format. They intentionally carry NO pricing or availability
 * logic: the admin is the single source of truth and recomputes every total
 * from its own catalog when the booking is submitted.
 */

/** One chosen service line. `extras` echo the selection the user ticked. */
export const bookingItemSchema = z.object({
  serviceId: z.string().min(1),
  quantity: z.coerce.number().int().min(1).default(1),
  people: z.coerce.number().int().min(1).optional(),
  optionName: z.string().optional(),
  scheduledAt: z.string().datetime().optional(),
  extras: z
    .array(z.object({ name: z.string(), priceCents: z.coerce.number().int().min(0) }))
    .default([]),
});

/** Guest contact — used only when there is no logged-in customer session. */
export const guestContactSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email(),
  phone: z.string().optional(),
});

export const createBookingSchema = z.object({
  items: z.array(bookingItemSchema).min(1, 'Add at least one service.'),
  notes: z.string().max(2000).optional(),
  customer: guestContactSchema.optional(),
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;
export type BookingItemInput = z.infer<typeof bookingItemSchema>;
export type GuestContact = z.infer<typeof guestContactSchema>;
