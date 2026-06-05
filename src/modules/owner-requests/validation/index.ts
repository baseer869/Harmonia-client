import { z } from 'zod';

/** Provider lead form — mirrors the admin's public createOwnerRequestSchema. */
export const createOwnerRequestSchema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().optional(),
  email: z.string().trim().email(),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  role: z.string().trim().optional(),
  subject: z.string().trim().optional(),
  message: z.string().trim().optional(),
  locale: z.string().optional(),
});

export type CreateOwnerRequestInput = z.infer<typeof createOwnerRequestSchema>;
