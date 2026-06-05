'use client';

import { useMutation } from '@tanstack/react-query';

import { ownerRequestApi } from '../api';
import type { CreateOwnerRequestInput } from '../validation';

export function useCreateOwnerRequest() {
  return useMutation({
    mutationFn: (input: CreateOwnerRequestInput) => ownerRequestApi.create(input),
  });
}
