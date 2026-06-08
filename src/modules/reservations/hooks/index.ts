'use client';

import { useMutation } from '@tanstack/react-query';

import { bookingApi } from '../api';
import type { Booking } from '../types';
import type { CreateBookingInput } from '../validation';

/**
 * Reservations · hooks. UI calls `useCreateBooking()` and renders the returned
 * booking; all pricing/validation authority stays in the admin API.
 */
export function useCreateBooking() {
  return useMutation<Booking[], Error, CreateBookingInput>({
    mutationFn: (input) => bookingApi.create(input),
  });
}
