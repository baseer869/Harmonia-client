import PageHero from '@/components/PageHero';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata = { title: 'Contact – HARMONIA Conciergerie' };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contactez-Nous"
        title="Parlons de<br><span class='g'>votre projet.</span>"
        imgSrc="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=85"
        imgAlt="Contact Harmonia"
      />

      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <div className="contact-inner">
          <RevealWrapper>
            <p className="contact-tagline">Notre équipe est à<br />votre écoute <em>24h/24.</em></p>
            <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 36 }}>
              Que vous soyez propriétaire, investisseur, voyageur ou partenaire potentiel, nous serons ravis d&apos;échanger avec vous.
            </p>
            <div className="c-info">
              <div className="c-item">
                <span className="c-ico">📞</span>
                <div className="c-text"><small>Téléphone &amp; WhatsApp</small>+212 6 00 00 00 00</div>
              </div>
              <div className="c-item">
                <span className="c-ico">✉️</span>
                <div className="c-text"><small>Email</small>contact@harmonia-conciergerie.ma</div>
              </div>
              <div className="c-item">
                <span className="c-ico">📍</span>
                <div className="c-text"><small>Adresse</small>Marrakech, Maroc</div>
              </div>
              <div className="c-item">
                <span className="c-ico">🕐</span>
                <div className="c-text"><small>Disponibilité</small>7j/7 · 24h/24</div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper delay="0.18s">
            <div className="contact-form">
              <div className="f-row">
                <div className="f-field"><input type="text" placeholder="Prénom" /></div>
                <div className="f-field"><input type="text" placeholder="Nom" /></div>
              </div>
              <div className="f-field"><input type="email" placeholder="Email" /></div>
              <div className="f-field"><input type="tel" placeholder="Téléphone / WhatsApp" /></div>
              <div className="f-field">
                <select defaultValue="">
                  <option value="" disabled>Je suis…</option>
                  <option>Propriétaire</option>
                  <option>Investisseur</option>
                  <option>Voyageur</option>
                  <option>Apporteur d&apos;affaires</option>
                  <option>Partenaire</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="f-field">
                <select defaultValue="">
                  <option value="" disabled>Objet de votre message</option>
                  <option>Gestion locative</option>
                  <option>Investissement</option>
                  <option>Réservation de service</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="f-field"><textarea placeholder="Votre message ou projet…" style={{ height: 140 }} /></div>
              <button className="f-submit">Envoyer ma demande →</button>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
