'use client';

import { useMemo, useState } from 'react';

import {
  usePublicServices,
  type PublicService,
  type PublicServiceExtra,
} from '@/modules/services';

import { useCreateBooking } from '../hooks';
import type { CreateBookingInput } from '../validation';

/* -- presentation helpers (display only — no booking math here) ----------- */

function money(cents: number, currency: string): string {
  try {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(cents / 100);
  } catch {
    return `${(cents / 100).toFixed(2)} ${currency}`;
  }
}

const PRICE_MODE_LABEL: Record<PublicService['priceMode'], string> = {
  PER_PERSON: '/ personne',
  PER_TRIP: '/ trajet',
  FIXED: 'forfait',
  ON_QUOTE: 'sur devis',
};

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--dark2)',
  border: '1px solid rgba(201,168,76,.25)',
  color: 'var(--cream)',
  padding: '12px 14px',
  fontSize: 14,
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 10,
  letterSpacing: 2,
  textTransform: 'uppercase',
  color: 'var(--text-light)',
  marginBottom: 8,
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'block', marginBottom: 18 }}>
      <span style={labelStyle}>{label}</span>
      {children}
    </label>
  );
}

/* -- the booking pipeline ------------------------------------------------- */

/**
 * Complete booking flow: pick a live service → choose date / people / option /
 * extras → enter contact → submit. Every price shown is the value the admin
 * returned; the authoritative total is computed server-side and shown on the
 * confirmation. The website performs NO pricing.
 */
export function BookingFlow({ initialSlug }: { initialSlug?: string }) {
  const { data: services, isLoading, isError, error } = usePublicServices();
  const createBooking = useCreateBooking();

  const [serviceId, setServiceId] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(2);
  const [optionName, setOptionName] = useState('');
  const [extras, setExtras] = useState<PublicServiceExtra[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  // Resolve the selected service. When an initialSlug is given, preselect it.
  const selected = useMemo(() => {
    if (!services) return undefined;
    if (serviceId) return services.find((s) => s.id === serviceId);
    if (initialSlug) return services.find((s) => s.slug === initialSlug);
    return undefined;
  }, [services, serviceId, initialSlug]);

  const booking = createBooking.data;

  if (isLoading) return <p style={{ color: 'var(--text-light)' }}>Chargement des services…</p>;
  if (isError)
    return (
      <p style={{ color: '#e07a7a' }}>
        Impossible de charger les services : {(error as Error).message}
      </p>
    );
  if (!services?.length)
    return <p style={{ color: 'var(--text-light)' }}>Aucun service disponible pour le moment.</p>;

  /* Confirmation screen ------------------------------------------------- */
  if (booking) {
    return (
      <div style={cardStyle}>
        <div className="eyebrow" style={{ justifyContent: 'flex-start' }}>
          Réservation confirmée
        </div>
        <h3
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 26,
            color: 'var(--cream)',
            margin: '8px 0 20px',
          }}
        >
          Merci, votre demande est enregistrée.
        </h3>
        <dl style={{ display: 'grid', gap: 12 }}>
          <Row label="Référence" value={booking.code} highlight />
          <Row label="Statut" value={booking.status} />
          <Row
            label="Total"
            value={money(booking.totalCents, booking.currency)}
            highlight
          />
        </dl>
        <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 18, lineHeight: 1.6 }}>
          Notre conciergerie vous contactera sous peu pour finaliser le paiement
          et les détails. Conservez votre référence.
        </p>
        <button
          className="btn-outline"
          style={{ marginTop: 22 }}
          onClick={() => createBooking.reset()}
        >
          Nouvelle réservation
        </button>
      </div>
    );
  }

  /* Booking form -------------------------------------------------------- */
  const needsPeople = selected?.priceMode === 'PER_PERSON';
  const maxPeople = selected?.maxPeople ?? 20;

  const toggleExtra = (extra: PublicServiceExtra) =>
    setExtras((cur) =>
      cur.some((e) => e.name === extra.name)
        ? cur.filter((e) => e.name !== extra.name)
        : [...cur, extra],
    );

  const submit = () => {
    setFormError(null);
    if (!selected) return setFormError('Veuillez choisir un service.');
    if (!email.trim()) return setFormError('Votre e-mail est requis.');
    if (selected.requiresDate && !date) return setFormError('Veuillez choisir une date.');

    const payload: CreateBookingInput = {
      items: [
        {
          serviceId: selected.id,
          quantity: 1,
          people: needsPeople ? people : undefined,
          optionName: optionName || undefined,
          scheduledAt:
            selected.requiresDate && date ? new Date(date).toISOString() : undefined,
          extras: extras.map((e) => ({ name: e.name, priceCents: e.priceCents })),
        },
      ],
      notes: notes || undefined,
      customer: { name: name || undefined, email, phone: phone || undefined },
    };
    createBooking.mutate(payload);
  };

  return (
    <div style={cardStyle}>
      {/* 1 · Service */}
      <Field label="Service">
        <select
          style={fieldStyle}
          value={selected?.id ?? ''}
          onChange={(e) => {
            setServiceId(e.target.value);
            setOptionName('');
            setExtras([]);
          }}
        >
          <option value="">— Choisir un service —</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title} — {money(s.priceCents, s.currency)} {PRICE_MODE_LABEL[s.priceMode]}
            </option>
          ))}
        </select>
      </Field>

      {selected && (
        <>
          {selected.subtitle && (
            <p style={{ color: 'var(--text-light)', fontSize: 13, margin: '-6px 0 18px' }}>
              {selected.subtitle}
            </p>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {selected.requiresDate && (
              <Field label="Date">
                <input
                  type="date"
                  style={fieldStyle}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Field>
            )}
            {needsPeople && (
              <Field label={`Personnes (max ${maxPeople})`}>
                <input
                  type="number"
                  min={1}
                  max={maxPeople}
                  style={fieldStyle}
                  value={people}
                  onChange={(e) =>
                    setPeople(Math.max(1, Math.min(maxPeople, Number(e.target.value) || 1)))
                  }
                />
              </Field>
            )}
          </div>

          {selected.options.length > 0 && (
            <Field label="Option">
              <select
                style={fieldStyle}
                value={optionName}
                onChange={(e) => setOptionName(e.target.value)}
              >
                <option value="">Standard</option>
                {selected.options.map((o) => (
                  <option key={o.name} value={o.name}>
                    {o.name}
                    {o.priceDeltaCents
                      ? ` (+${money(o.priceDeltaCents, selected.currency)})`
                      : ''}
                  </option>
                ))}
              </select>
            </Field>
          )}

          {selected.extras.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <span style={labelStyle}>Extras</span>
              <div style={{ display: 'grid', gap: 8 }}>
                {selected.extras.map((x) => {
                  const checked = extras.some((e) => e.name === x.name);
                  return (
                    <label
                      key={x.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        padding: '10px 14px',
                        border: `1px solid ${checked ? 'var(--gold)' : 'rgba(201,168,76,.2)'}`,
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleExtra(x)}
                          style={{ accentColor: 'var(--gold)' }}
                        />
                        <span style={{ color: 'var(--cream)', fontSize: 14 }}>{x.name}</span>
                      </span>
                      <span style={{ color: 'var(--gold)', fontSize: 13 }}>
                        +{money(x.priceCents, selected.currency)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ height: 1, background: 'rgba(201,168,76,.15)', margin: '8px 0 22px' }} />

          {/* 2 · Contact */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field label="Nom">
              <input
                style={fieldStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
              />
            </Field>
            <Field label="Téléphone">
              <input
                style={fieldStyle}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+212…"
              />
            </Field>
          </div>
          <Field label="E-mail *">
            <input
              type="email"
              style={fieldStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
            />
          </Field>
          <Field label="Message (facultatif)">
            <textarea
              style={{ ...fieldStyle, minHeight: 80, resize: 'vertical' }}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Précisions, demandes particulières…"
            />
          </Field>

          {(formError || createBooking.isError) && (
            <p style={{ color: '#e07a7a', fontSize: 13, marginBottom: 14 }}>
              {formError ?? (createBooking.error as Error).message}
            </p>
          )}

          <button
            className="btn-gold"
            style={{ width: '100%', opacity: createBooking.isPending ? 0.6 : 1 }}
            onClick={submit}
            disabled={createBooking.isPending}
          >
            {createBooking.isPending ? 'Envoi…' : 'Réserver'}
          </button>
          <p style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 12, textAlign: 'center' }}>
            Le total exact est confirmé par notre conciergerie après envoi.
          </p>
        </>
      )}
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  maxWidth: 620,
  margin: '0 auto',
  background: 'var(--dark)',
  border: '1px solid rgba(201,168,76,.18)',
  padding: '34px 34px 38px',
};

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        paddingBottom: 12,
        borderBottom: '1px solid rgba(201,168,76,.12)',
      }}
    >
      <dt style={{ color: 'var(--text-light)', fontSize: 13 }}>{label}</dt>
      <dd
        style={{
          color: highlight ? 'var(--gold)' : 'var(--cream)',
          fontSize: 14,
          fontWeight: highlight ? 700 : 400,
          letterSpacing: highlight ? 1 : 0,
        }}
      >
        {value}
      </dd>
    </div>
  );
}
