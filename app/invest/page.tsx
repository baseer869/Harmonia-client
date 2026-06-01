import Link from 'next/link';
import PageHero from '@/components/PageHero';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata = { title: 'Harmonia Invest – Investissement Immobilier Marrakech' };

export default function InvestPage() {
  return (
    <>
      <PageHero
        eyebrow="Harmonia Invest"
        title="L'investissement immobilier<br><span class='g'>clé en main</span> à Marrakech"
        imgSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=85"
        imgAlt="Investissement immobilier Marrakech"
      />

      {/* HERO CONTENT */}
      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <RevealWrapper>
          <div className="invest-hero">
            <div>
              <span className="invest-tag">Harmonia Invest</span>
              <h2 className="invest-title">Investissez à Marrakech.<br /><span className="g">Nous gérons tout.</span><br />Vous percevez vos revenus.</h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginTop: 22, marginBottom: 30 }}>
                De la recherche du bien à la gestion locative complète, Harmonia vous accompagne à chaque étape de votre investissement immobilier à Marrakech.
              </p>
              <ul className="chk" style={{ marginBottom: 36 }}>
                <li>Sélection et acquisition du bien</li>
                <li>Rénovation et décoration par nos architectes</li>
                <li>Mise en location et gestion complète</li>
                <li>Marge de gestion garantie</li>
                <li>Reporting mensuel et transparence totale</li>
              </ul>
              <div className="invest-kpis">
                {[{ n: '200K€+', l: 'Budget min.' }, { n: '70%+', l: 'Occupation' }, { n: '20%', l: 'Marge garantie' }, { n: '5 ans', l: 'Accompagnement' }].map((k) => (
                  <div key={k.l} className="invest-kpi">
                    <span className="invest-kpi-n">{k.n}</span>
                    <span className="invest-kpi-l">{k.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <RevealWrapper delay="0.18s">
              <div className="invest-example">
                <div className="invest-ex-title">Simulation Concrète</div>
                {[
                  ['Investissement total', '200 000 €'],
                  ['Frais d\'acquisition', '15 000 €'],
                  ['Rénovation & Décoration', '35 000 €'],
                  ['Budget disponible net', '150 000 €'],
                  ['Revenu mensuel cible', '2 500 €', true],
                  ['Taux d\'occupation estimé', '70%'],
                  ['Revenu annuel estimé', '21 000 €', true],
                  ['Rendement brut', '10.5%', true],
                ].map(([l, v, g]) => (
                  <div key={l as string} className="invest-row">
                    <span className="invest-rl">{l as string}</span>
                    <span className={`invest-rv${g ? ' g' : ''}`}>{v as string}</span>
                  </div>
                ))}
                <div className="invest-hl"><span>Marge de gestion Harmonia : 20%</span></div>
              </div>
            </RevealWrapper>
          </div>
        </RevealWrapper>
      </section>

      {/* PROCESS */}
      <section id="invest-steps" className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">Notre Processus</div>
        <h2 className="sec-h">Un accompagnement<br /><span className="g">A à Z</span></h2>
        <p className="sec-sub">De la première rencontre à votre premier loyer.</p>
        <RevealWrapper>
          <div className="invest-process">
            {[
              { n: '01', t: 'Consultation', d: 'Étude de votre profil investisseur, de vos objectifs de rendement et de votre budget disponible.' },
              { n: '02', t: 'Sélection du Bien', d: 'Identification et sélection des meilleures opportunités immobilières à Marrakech selon vos critères.' },
              { n: '03', t: 'Acquisition & Travaux', d: 'Accompagnement juridique, notarial, et coordination des travaux de rénovation et décoration.' },
              { n: '04', t: 'Gestion & Revenus', d: 'Mise en location immédiate, gestion complète, et versement mensuel de vos revenus locatifs.' },
            ].map((s) => (
              <div key={s.n} className="ip-card">
                <div className="ip-num">{s.n}</div>
                <div className="ip-title">{s.t}</div>
                <p className="ip-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </section>

      {/* POUR QUI */}
      <section id="invest-pour-qui" className="sec" style={{ background: 'var(--dark2)' }}>
        <div className="eyebrow">Pour Qui ?</div>
        <h2 className="sec-h">Harmonia Invest<br /><span className="g">vous correspond si…</span></h2>
        <RevealWrapper>
          <div className="invest-for">
            {[
              { t: 'Expatriés & Diaspora', d: 'Vous souhaitez investir au Maroc depuis l\'étranger sans être présent sur place.' },
              { t: 'Investisseurs Débutants', d: 'Votre premier investissement immobilier — nous vous guidons pas à pas.' },
              { t: 'Investisseurs Expérimentés', d: 'Vous cherchez à diversifier votre portefeuille avec un rendement attractif.' },
              { t: 'Retraités & Patrimoniaux', d: 'Vous voulez vous constituer une rente locative stable à long terme.' },
            ].map((c) => (
              <div key={c.t} className="if-card">
                <div className="if-title">{c.t}</div>
                <p className="if-desc">{c.d}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/contact" className="btn-gold">Démarrer mon projet d&apos;investissement</Link>
        </div>
      </section>
    </>
  );
}
