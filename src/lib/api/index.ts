import { TENANT_SLUG, TENANT_SLUG_HEADER } from '@/lib/tenant';

/**
 * HTTP client to the Admin backend's public API (`/api/public/*`).
 *
 * The client website has NO database — every read/write goes through the
 * admin over HTTP. The active tenant slug is attached on every request so the
 * backend scopes the response. `credentials: 'include'` carries the customer
 * session cookie set by /api/public/auth.
 */
const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api/public';

export interface ApiErrorShape {
  code: string;
  message: string;
  details?: unknown;
}

type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: ApiErrorShape };

export class ApiError extends Error {
  code: string;
  status: number;
  constructor(code: string, message: string, status = 400) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.status = status;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      [TENANT_SLUG_HEADER]: TENANT_SLUG,
      ...(init?.headers ?? {}),
    },
  });

  const body = (await res.json().catch(() => null)) as ApiResult<T> | null;

  if (!res.ok || !body || body.ok === false) {
    const err = body && body.ok === false ? body.error : undefined;
    throw new ApiError(
      err?.code ?? 'REQUEST_FAILED',
      err?.message ?? res.statusText,
      res.status,
    );
  }
  return body.data;
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(data ?? {}) }),
  patch: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: 'PATCH', body: JSON.stringify(data ?? {}) }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};
