'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Scroll-reveal wrapper. Adds `.visible` when the element enters the viewport.
 * Hardened so content is NEVER permanently hidden: reveals immediately if
 * already in view or if motion is reduced, and a safety timeout guarantees
 * visibility even if the observer never fires.
 */
export function Reveal({
  children,
  delay,
  className = '',
}: {
  children: ReactNode;
  delay?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add('visible');

    // Respect reduced motion, or environments without IntersectionObserver.
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      reveal();
      return;
    }

    // Already in view on mount → reveal now.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          reveal();
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);

    // Safety net: never leave content stuck invisible.
    const fallback = window.setTimeout(reveal, 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${delay ? ' reveal-d2' : ''} ${className}`}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      {children}
    </div>
  );
}
