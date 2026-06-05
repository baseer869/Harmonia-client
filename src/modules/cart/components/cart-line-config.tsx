'use client';

import type { CartBooking } from '../types';

/**
 * Removable chips for a cart line's variant + add-ons. The ✕ sits in front of
 * each chip; removing one updates the line and the total (handled by the cart).
 */
export function CartLineConfig({
  booking,
  onRemoveOption,
  onRemoveExtra,
  compact,
}: {
  booking?: CartBooking;
  onRemoveOption: () => void;
  onRemoveExtra: (name: string) => void;
  compact?: boolean;
}) {
  if (!booking) return null;

  const chips: { key: string; label: string; price?: number; onRemove: () => void }[] = [];
  if (booking.optionName) {
    chips.push({
      key: 'variant',
      label: booking.optionName,
      price: booking.optionPriceDeltaCents ? Math.round(booking.optionPriceDeltaCents / 100) : undefined,
      onRemove: onRemoveOption,
    });
  }
  for (const e of booking.extras) {
    chips.push({
      key: `extra-${e.name}`,
      label: e.name,
      price: Math.round(e.priceCents / 100),
      onRemove: () => onRemoveExtra(e.name),
    });
  }
  if (!chips.length) return null;

  const fs = compact ? 11 : 12;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: compact ? 5 : 8 }}>
      {chips.map((c) => (
        <span
          key={c.key}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '3px 9px',
            borderRadius: 999,
            border: '1px solid rgba(201,168,76,.3)',
            background: 'rgba(201,168,76,.08)',
            fontSize: fs,
            lineHeight: 1,
          }}
        >
          <button
            type="button"
            onClick={c.onRemove}
            aria-label={`remove ${c.label}`}
            style={{ color: 'var(--gold)', cursor: 'pointer', fontSize: fs + 1, lineHeight: 1, padding: 0 }}
          >
            ✕
          </button>
          <span style={{ color: 'var(--text-light)' }}>{c.label}</span>
          {c.price ? (
            <span style={{ color: 'var(--gold)' }}>+{c.price.toLocaleString('fr-FR')} MAD</span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
