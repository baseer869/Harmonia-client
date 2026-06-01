import Link from 'next/link';
import PageHero from '@/components/PageHero';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata = { title: 'Partenaires – HARMONIA Conciergerie' };

export default function PartenairesPage() {
  return (
    <>
      <PageHero
        eyebrow="Espace Partenaires"
        title="Grandissons<br><span class='g'>ensemble.</span>"
        imgSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=85"
        imgAlt="Partenaires Harmonia"
      />

      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <RevealWrapper>
          <div className="partner-split">
            {/* Apporteur d'affaires */}
            <div id="apport" className="p-panel">
              <span className="p-tag">Apporteur d&apos;Affaires</span>
              <h2 className="p-title">Vous connaissez des propriétaires ou investisseurs ?<br /><span className="g">Soyez rémunéré.</span></h2>
              <p className="p-desc">
                Notre programme d&apos;apporteur d&apos;affaires vous permet de percevoir une commission attractive pour chaque propriétaire ou investisseur que vous nous recommandez et qui signe avec Harmonia.
              </p>
              <ul className="gain-list">
                <li><strong>Commission Propriétaire</strong>1 mois de loyer pour chaque propriétaire signataire</li>
                <li><strong>Commission Investisseur</strong>2% du montant total de l&apos;investissement</li>
                <li><strong>Récurrence</strong>Commission supplémentaire à chaque renouvellement de contrat</li>
                <li><strong>Paiement</strong>Sous 30 jours après signature du contrat</li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <Link href="/contact" className="btn-gold">Devenir apporteur d&apos;affaires</Link>
              </div>
            </div>

            {/* Harmonia Partners */}
            <div id="partners" className="p-panel p-dark">
              <span className="p-tag outline">Harmonia Partners</span>
              <h2 className="p-title">Rejoignez notre réseau<br /><span className="g">de partenaires premium.</span></h2>
              <p className="p-desc">
                Vous êtes prestataire de services (transport, spa, restaurant, guide…) ? Rejoignez notre réseau de partenaires sélectionnés et accédez à notre base de clients premium.
              </p>
              <div className="share-box">
                <div className="big">15%</div>
                <div className="lbl">Commission Harmonia</div>
                <div className="note">Sur chaque réservation générée via notre plateforme</div>
              </div>
              <ul className="gain-list">
                <li><strong>Visibilité</strong>Présence sur notre catalogue et communication digitale</li>
                <li><strong>Clientèle premium</strong>Accès à nos voyageurs haut de gamme</li>
                <li><strong>Réseau qualifié</strong>Accès à l&apos;ensemble du réseau Harmonia</li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <Link href="/contact" className="btn-outline">Rejoindre le réseau</Link>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </section>
    </>
  );
}
