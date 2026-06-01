/** Tiny localStorage helper (SSR-safe) for client-only persistence (cart, prefs). */
export const storage = {
  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  },
  set<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore quota / serialization errors */
    }
  },
  remove(key: string): void {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(key);
  },
};
