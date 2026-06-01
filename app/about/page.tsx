import Link from 'next/link';
import PageHero from '@/components/PageHero';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata = { title: 'À Propos – HARMONIA Conciergerie' };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre Histoire"
        title="Une vision,<br><span class='g'>une passion,</span><br>une équipe."
        imgSrc="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1600&q=85"
        imgAlt="Marrakech"
      />

      {/* STORY */}
      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <RevealWrapper>
          <div className="about-split">
            <div>
              <div className="eyebrow left">Notre Histoire</div>
              <h2 className="prop-title">Nés d&apos;une passion<br />pour <span className="g">Marrakech.</span></h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 24 }}>
                Harmonia est née de la rencontre de trois associés franco-marocains partageant une vision commune : offrir le meilleur de Marrakech aux propriétaires, investisseurs et voyageurs.
              </p>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 24 }}>
                Fondée en 2024, notre conciergerie s&apos;est rapidement imposée comme une référence du secteur premium à Marrakech, grâce à notre approche humaine, notre expertise locale et notre réseau de partenaires de confiance.
              </p>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)' }}>
                Aujourd&apos;hui, nous gérons des dizaines de propriétés et accompagnons des centaines de voyageurs chaque année dans la découverte authentique de la ville ocre.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=85" alt="Médina de Marrakech" />
          </div>
        </RevealWrapper>
      </section>

      {/* VALUES */}
      <section id="valeurs" className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">Nos Valeurs</div>
        <h2 className="sec-h">Ce qui nous <span className="g">définit</span></h2>
        <RevealWrapper>
          <div className="about-values">
            {[
              { n: '01', t: 'Excellence', d: 'Chaque détail compte. Nous nous engageons à délivrer un service irréprochable à chaque interaction.' },
              { n: '02', t: 'Authenticité', d: 'Nous célébrons la richesse culturelle marocaine et la partageons avec sincérité.' },
              { n: '03', t: 'Transparence', d: 'Nos tarifs, nos contrats, nos reporting — tout est clair, lisible et sans surprises.' },
              { n: '04', t: 'Disponibilité', d: '7 jours sur 7, 24 heures sur 24. Nous sommes là quand vous avez besoin de nous.' },
            ].map((v) => (
              <div key={v.n} className="av-card">
                <div className="av-num">{v.n}</div>
                <div className="av-title">{v.t}</div>
                <p className="av-desc">{v.d}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </section>

      {/* TEAM */}
      <section id="equipe" className="sec" style={{ background: 'var(--dark2)' }}>
        <div className="eyebrow">Les Fondateurs</div>
        <h2 className="sec-h">Une <span className="g">Équipe Franco-Marocaine</span></h2>
        <p className="sec-sub">Une expertise locale &amp; internationale, une passion partagée pour l&apos;excellence.</p>
        <RevealWrapper>
          <div className="team-grid">
            {[
              { i: 'H', n: 'HICHAM', r: 'Co-fondateur · Franco-Marocain', b: 'Master en gestion immobilière. Expertise en conseil, gestion, aménagement et rendement immobilier. Profond ancrage dans l\'écosystème de Marrakech.' },
              { i: 'M', n: 'MOHAMED', r: 'Co-fondateur · Franco-Tunisien', b: "5 ans d'expérience en gestion d'équipes en France. Expert en satisfaction client et gestion opérationnelle. Pilier humain de l'organisation Harmonia." },
              { i: 'N', n: 'NICOLAS', r: 'Co-fondateur · Français', b: "Diplômé d'écoles hôtelières françaises de renom, entrepreneur depuis 10 ans. Apporte son réseau, son expertise hôtelière et sa vision du service premium." },
            ].map((t) => (
              <div key={t.n} className="t-card">
                <div className="t-avatar">{t.i}</div>
                <div className="t-name">{t.n}</div>
                <div className="t-role">{t.r}</div>
                <p className="t-bio">{t.b}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/contact" className="btn-gold">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}
