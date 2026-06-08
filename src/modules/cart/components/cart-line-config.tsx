'use client';

import type { CartBooking } from '../types';

const qtyBtn: React.CSSProperties = {
  width: 22,
  height: 22,
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgba(201,168,76,.4)',
  borderRadius: 5,
  color: 'var(--gold)',
  cursor: 'pointer',
  lineHeight: 1,
};

/**
 * A cart line's package (label) + its add-ons, each with a − / + counter that
 * updates the line + cart total. Removing an add-on = counting it down to 0.
 */
export function CartLineConfig({
  booking,
  currency = 'MAD',
  onChangeExtraQty,
  compact,
}: {
  booking?: CartBooking;
  currency?: string;
  onChangeExtraQty: (name: string, delta: number) => void;
  compact?: boolean;
}) {
  if (!booking) return null;
  const fs = compact ? 11 : 12;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: compact ? 5 : 8 }}>
      <span
        style={{
          alignSelf: 'flex-start',
          padding: '2px 9px',
          borderRadius: 999,
          border: '1px solid rgba(201,168,76,.3)',
          background: 'rgba(201,168,76,.08)',
          color: 'var(--gold)',
          fontSize: fs,
          lineHeight: 1.6,
        }}
      >
        {booking.optionName ?? 'Base'}
      </span>

      {booking.extras.map((e) => (
        <div key={e.name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: fs }}>
          <span style={{ flex: 1, color: 'var(--text-light)' }}>+ {e.name}</span>
          <button type="button" style={qtyBtn} onClick={() => onChangeExtraQty(e.name, -1)} aria-label={`less ${e.name}`}>
            −
          </button>
          <span style={{ minWidth: 16, textAlign: 'center', color: 'var(--cream)' }}>{e.qty}</span>
          <button type="button" style={qtyBtn} onClick={() => onChangeExtraQty(e.name, 1)} aria-label={`more ${e.name}`}>
            +
          </button>
          <span style={{ color: 'var(--gold)', minWidth: 64, textAlign: 'right' }}>
            {currency} {Math.round((e.priceCents * e.qty) / 100).toLocaleString('fr-FR')}
          </span>
        </div>
      ))}
    </div>
  );
}
