import { api } from '@/lib/api';

import { createOwnerRequestSchema, type CreateOwnerRequestInput } from '../validation';

export const ownerRequestApi = {
  /** Submit a "list your services" request to the admin's public API. */
  create(input: CreateOwnerRequestInput): Promise<{ id: string }> {
    const payload = createOwnerRequestSchema.parse(input);
    return api.post<{ id: string }>('/owner-requests', payload);
  },
};
