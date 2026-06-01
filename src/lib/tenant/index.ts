/**
 * Tenant resolution for the client website.
 *
 * Current scope: single default tenant resolved from config (NOT from the
 * host/subdomain). The slug is sent to the admin's /api/public/* via the
 * x-tenant-slug header so the backend scopes every response.
 */
export const TENANT_SLUG =
  process.env.NEXT_PUBLIC_TENANT_SLUG ?? 'marrakech-luxury';

export const TENANT_SLUG_HEADER = 'x-tenant-slug';
