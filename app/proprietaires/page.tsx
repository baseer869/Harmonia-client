import Link from 'next/link';
import PageHero from '@/components/PageHero';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata = { title: 'Propriétaires – HARMONIA Conciergerie' };

export default function ProprietairesPage() {
  return (
    <>
      <PageHero
        eyebrow="Espace Propriétaires"
        title="Votre bien entre<br><span class='g'>de bonnes mains.</span>"
        imgSrc="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85"
        imgAlt="Villa Marrakech"
      />

      {/* WHY */}
      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <RevealWrapper>
          <div className="proprio-why">
            <div>
              <div className="eyebrow left">Pourquoi Harmonia ?</div>
              <h2 className="prop-title">Nous maximisons vos revenus.<br /><span className="g">Vous ne gérez rien.</span></h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 36 }}>
                Harmonia est une conciergerie premium spécialisée dans la gestion locative courte durée à Marrakech. Nous prenons en charge intégralement votre bien — de la création de l&apos;annonce à la gestion des voyageurs.
              </p>
              <ul className="chk">
                <li>Jusqu&apos;à +40% de revenus en moyenne</li>
                <li>Optimisation des prix via yield management</li>
                <li>Diffusion multi-plateformes : Airbnb, Booking, VRBO</li>
                <li>Check-in / Check-out gérés 24h/24</li>
                <li>Ménage professionnel entre chaque séjour</li>
                <li>Maintenance et interventions techniques incluses</li>
              </ul>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=85" alt="Riad luxe Marrakech" />
          </div>
        </RevealWrapper>
      </section>

      {/* SERVICES INCLUS */}
      <section id="services-inclus" className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">Inclus dans votre contrat</div>
        <h2 className="sec-h">Ce que <span className="g">Harmonia fait pour vous</span></h2>
        <p className="sec-sub">Un service complet, de la mise en ligne à l&apos;encaissement.</p>
        <RevealWrapper>
          <div className="services-inclus-grid">
            {[
              { t: 'Optimisation & Diffusion', items: ['Création & optimisation des annonces', 'Shooting photo professionnel', 'Diffusion multi-plateformes', 'Yield management & prix dynamiques'] },
              { t: 'Gestion Complète', items: ['Gestion des réservations', 'Communication voyageurs 7j/7', 'Check-in / Check-out', 'Assistance client 24h/24'] },
              { t: 'Entretien & Logistique', items: ['Ménage professionnel', 'Linge de maison', 'Maintenance & interventions', 'Contrôle qualité après chaque séjour'] },
              { t: 'Expérience Client Premium', items: ['Accueil personnalisé', 'Services à la carte inclus', 'Conciergerie dédiée', 'Satisfaction & avis 5 étoiles'] },
            ].map((s) => (
              <div key={s.t} className="si-card">
                <div className="si-title">{s.t}</div>
                <ul className="si-list">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </section>

      {/* FORMULES */}
      <section id="formules" className="sec" style={{ background: 'var(--dark2)' }}>
        <div className="eyebrow">Nos Offres</div>
        <h2 className="sec-h">Choisissez votre <span className="g">Formule</span></h2>
        <p className="sec-sub">3 formules adaptées à vos besoins et à votre niveau d&apos;implication.</p>
        <RevealWrapper>
          <div className="formules-grid">
            <div className="f-card">
              <div className="f-name">Formule Essentielle</div>
              <div className="f-price">20<span style={{ fontSize: 24 }}>%</span></div>
              <div className="f-price-sub">des revenus générés</div>
              <ul className="f-list">
                <li>Gestion des réservations</li><li>Communication voyageurs</li>
                <li>Check-in / Check-out</li><li>Coordination ménage</li>
              </ul>
              <p className="f-note">Idéal pour les propriétaires déjà organisés.</p>
            </div>
            <div className="f-card featured">
              <div className="f-badge">Recommandée</div>
              <div className="f-name">Formule Premium</div>
              <div className="f-price">25–30<span style={{ fontSize: 20 }}>%</span></div>
              <div className="f-price-sub">des revenus générés</div>
              <ul className="f-list">
                <li>Tous les services Essentiels</li><li>Optimisation des prix</li>
                <li>Gestion complète du bien</li><li>Maintenance incluse</li>
                <li>Expérience client premium</li>
              </ul>
              <p className="f-note">L&apos;option idéale pour maximiser vos revenus.</p>
            </div>
            <div className="f-card">
              <div className="f-name">Formule Garantie</div>
              <div className="f-price" style={{ fontSize: 26, paddingTop: 10, color: 'var(--cream)', lineHeight: 1.3 }}>Revenu fixe<br />mensuel garanti</div>
              <div className="f-price-sub" style={{ marginTop: 6 }}>loyer versé chaque mois</div>
              <ul className="f-list">
                <li>Loyer fixe versé chaque mois</li><li>Gestion totale par Harmonia</li>
                <li>Aucun risque locatif</li>
              </ul>
              <p className="f-note">Sur sélection de biens.</p>
            </div>
          </div>
        </RevealWrapper>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/contact" className="btn-gold">Demander une étude gratuite</Link>
        </div>
      </section>
    </>
  );
}
