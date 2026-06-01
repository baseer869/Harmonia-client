import { LocalizedLink } from '@/components/ui';

export default function NotFound() {
  return (
    <section
      className="sec"
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="eyebrow">404</div>
      <h1 className="sec-h">
        Page <span className="g">introuvable</span>
      </h1>
      <p className="sec-sub">
        Cette page n’existe pas ou a été déplacée. / This page could not be found.
      </p>
      <LocalizedLink href="/" className="btn-gold">
        Accueil / Home
      </LocalizedLink>
    </section>
  );
}
