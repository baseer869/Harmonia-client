'use client';

import { useState } from 'react';

import { useI18n } from '@/i18n/provider';
import { contact } from '@/content/contact';
import { isLocale, defaultLocale } from '@/i18n';

import { useCreateOwnerRequest } from '../hooks';

/**
 * Contact / "list your services" form. Submits a provider lead to the admin,
 * which surfaces it under Owner Requests. Same look as the original static form.
 */
export function OwnerRequestForm() {
  const { locale } = useI18n();
  const en = locale === 'en';
  const f = contact[isLocale(locale) ? locale : defaultLocale].form;
  const create = useCreateOwnerRequest();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [err, setErr] = useState<string | null>(null);

  const submit = () => {
    setErr(null);
    if (!firstName.trim()) {
      setErr(en ? 'Your name is required.' : 'Votre nom est requis.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErr(en ? 'Please enter a valid email address.' : 'Veuillez saisir une adresse e-mail valide.');
      return;
    }
    create.mutate({
      firstName: firstName.trim(),
      lastName: lastName.trim() || undefined,
      email: email.trim(),
      phone: phone.trim() || undefined,
      company: company.trim() || undefined,
      role: role || undefined,
      subject: subject || undefined,
      message: message.trim() || undefined,
      locale,
    });
  };

  if (create.isSuccess) {
    return (
      <div className="contact-form" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 40, color: 'var(--gold)', marginBottom: 12 }}>✓</div>
        <h3 style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', marginBottom: 10 }}>
          {en ? 'Request received' : 'Demande envoyée'}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>
          {en
            ? 'Thank you — our team will review your request and get back to you shortly.'
            : 'Merci — notre équipe examinera votre demande et vous recontactera prochainement.'}
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="f-row">
        <div className="f-field">
          <input placeholder={f.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="f-field">
          <input placeholder={f.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>
      <div className="f-field">
        <input type="email" placeholder={f.email} value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="f-field">
        <input type="tel" placeholder={f.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="f-field">
        <input
          placeholder={en ? 'Company / Business' : 'Entreprise'}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="f-field">
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="" disabled>
            {f.rolePlaceholder}
          </option>
          {f.roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="f-field">
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="" disabled>
            {f.subjectPlaceholder}
          </option>
          {f.subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="f-field">
        <textarea
          placeholder={f.message}
          style={{ height: 140 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {(err || create.isError) && (
        <p style={{ color: '#e07a7a', fontSize: 12, marginBottom: 10 }}>
          {err ?? (create.error as Error).message}
        </p>
      )}

      <button className="f-submit" type="button" onClick={submit} disabled={create.isPending}>
        {create.isPending ? (en ? 'Sending…' : 'Envoi…') : f.submit}
      </button>
    </div>
  );
}
