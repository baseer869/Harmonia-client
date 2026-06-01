import Link from 'next/link';
import PageHero from '@/components/PageHero';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata = { title: 'Conditions – HARMONIA Conciergerie' };

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparence & Confiance"
        title="Nos Conditions<br><span class='g'>d'Utilisation.</span>"
        imgSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=85"
        imgAlt="Conditions Harmonia"
      />

      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <RevealWrapper>
          <div className="contrat-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="contrat-block">
              <div className="contrat-block-title">Réservation & Paiement</div>
              <p className="contrat-block-desc">Toute réservation est confirmée après réception de l&apos;acompte de 30% du montant total. Le solde est réglé à votre arrivée ou à la livraison du service.</p>
              <div className="contrat-highlight">
                <div className="contrat-highlight-val">30%</div>
                <div className="contrat-highlight-lbl">Acompte à la réservation</div>
              </div>
              <ul className="chk">
                <li>CB, Virement, PayPal acceptés</li>
                <li>Paiement sécurisé SSL</li>
                <li>Facture détaillée fournie</li>
                <li>Solde à l&apos;arrivée (cash ou CB)</li>
              </ul>
            </div>

            <div className="contrat-block featured">
              <div className="contrat-block-title">Annulation & Remboursement</div>
              <p className="contrat-block-desc">Nous comprenons que les plans peuvent changer. Voici notre politique d&apos;annulation transparente.</p>
              {[
                { n: '1', t: 'Plus de 48h avant', p: 'Annulation gratuite — remboursement intégral de l\'acompte' },
                { n: '2', t: 'Entre 24h et 48h', p: 'Remboursement de 50% de l\'acompte' },
                { n: '3', t: 'Moins de 24h', p: 'Acompte non remboursable (force majeure examinée au cas par cas)' },
              ].map((s) => (
                <div key={s.n} className="contrat-step">
                  <div className="contrat-step-num">{s.n}</div>
                  <div className="contrat-step-body"><strong>{s.t}</strong><p>{s.p}</p></div>
                </div>
              ))}
            </div>

            <div className="contrat-block">
              <div className="contrat-block-title">Responsabilités</div>
              <p className="contrat-block-desc">Harmonia agit en qualité d&apos;intermédiaire et de coordinateur de services. Nos prestataires sont sélectionnés avec soin et vérifiés régulièrement.</p>
              <ul className="chk">
                <li>Prestataires assurés et certifiés</li>
                <li>Contrôle qualité régulier</li>
                <li>Assistance en cas de problème</li>
                <li>Médiation et recours disponibles</li>
              </ul>
            </div>

            <div className="contrat-block">
              <div className="contrat-block-title">Données Personnelles</div>
              <p className="contrat-block-desc">Vos données sont protégées conformément au RGPD. Nous ne les partageons jamais avec des tiers sans votre consentement.</p>
              <ul className="chk">
                <li>Données chiffrées et sécurisées</li>
                <li>Droit d&apos;accès et suppression</li>
                <li>Pas de revente à des tiers</li>
                <li>Contact : privacy@harmonia-conciergerie.ma</li>
              </ul>
            </div>
          </div>
        </RevealWrapper>
      </section>

      <section className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">Nos Garanties</div>
        <h2 className="sec-h">La promesse <span className="g">Harmonia</span></h2>
        <RevealWrapper>
          <div className="contrat-guarantee-grid">
            {[
              { t: 'Qualité Garantie', d: 'Si un service ne correspond pas à vos attentes, nous le refaisons ou vous remboursons.' },
              { t: 'Prix Transparents', d: 'Pas de frais cachés. Le prix affiché est le prix payé.' },
              { t: 'Assistance 24/7', d: 'Notre équipe est disponible à toute heure pour vous assister.' },
              { t: 'Annulation Flexible', d: 'Jusqu&apos;à 48h avant, l&apos;annulation est gratuite et intégrale.' },
            ].map((g) => (
              <div key={g.t} className="cg-card">
                <div className="cg-title">{g.t}</div>
                <p className="cg-desc">{g.d}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/contact" className="btn-outline">Une question ? Contactez-nous</Link>
        </div>
      </section>
    </>
  );
}
