import Link from 'next/link';
import RevealWrapper from '@/components/RevealWrapper';

const CAT_CARDS = [
  { id: 'excursions', name: 'Excursions & Aventures', items: ['Désert d\'Agafay / Sahara', 'Quad, Buggy & Dromadaire', 'Montgolfière'], price: 'À partir de 250 MAD / pers.', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80' },
  { id: 'bienetre', name: 'Bien-Être & Détente', items: ['Hammam traditionnel', 'Massages & Soins', 'Spa & Rituels marocains'], price: 'À partir de 200 MAD / pers.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80' },
  { id: 'transport', name: 'Transport & Transferts', items: ['Transfert Aéroport', 'Chauffeur privé', 'Location de voiture'], price: 'À partir de 150 MAD / trajet', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80' },
  { id: 'gastro', name: 'Gastronomie', items: ['Chef privé à domicile', 'Cours de cuisine', 'Dîner traditionnel'], price: 'À partir de 300 MAD / pers.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
  { id: 'activites', name: 'Activités & Loisirs', items: ['Jardin Majorelle', 'Soirées & Clubs privés', 'Shooting photo'], price: 'À partir de 150 MAD / pers.', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80' },
  { id: 'domicile', name: 'Services à Domicile', items: ['Ménage & Entretien', 'Petit-déjeuner', 'Baby-sitting'], price: 'Sur devis', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { id: 'shopping', name: 'Shopping & Artisanat', items: ['Guide shopping', 'Personal Shopper', 'Artisanat & Souvenirs'], price: 'Sur devis', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 'evenements', name: 'Événements & Célébrations', items: ['Anniversaire & EVJF', 'Demande en mariage', 'Soirée privée'], price: 'Sur devis', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80' },
  { id: 'packs', name: 'Packs Sur-Mesure', items: ['Séjours clés en main', '100% personnalisés', 'Tout inclus'], price: 'Nous consulter', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80' },
  { id: 'cadeaux', name: 'Produits & Cadeaux', items: ['Huile d\'argan', 'Coffrets cadeaux', 'Produits du terroir'], price: 'À partir de 120 MAD', img: 'https://images.unsplash.com/photo-1611006174913-c8d9e5d5b1a2?w=600&q=80' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-pattern" />
        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Conciergerie Premium · Marrakech
          </span>
          <h1 className="hero-title">VIVEZ<br /><span className="g">MARRAKECH</span><br />AUTREMENT</h1>
          <p className="hero-subtitle">Votre séjour, notre priorité.</p>
          <div className="hero-btns">
            <Link href="/voyageurs" className="btn-gold">Réserver un service</Link>
            <Link href="/proprietaires" className="btn-outline">Espace propriétaires</Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <p className="hero-card-quote">&ldquo;Votre bien,<br />notre expertise,<br />leur expérience inoubliable.&rdquo;</p>
            <div className="hero-card-divider" />
            <span className="hero-card-label">Harmonia · L&apos;art de la conciergerie</span>
          </div>
        </div>
        <div className="hero-stats">
          {[{ n: '+40%', l: 'Revenus en moyenne' }, { n: '95%', l: 'Taux de satisfaction' }, { n: '7j/7', l: 'Disponibilité' }, { n: '+50', l: 'Collaborateurs' }].map((s) => (
            <div key={s.l} className="hero-stat">
              <span className="stat-n">{s.n}</span>
              <span className="stat-l">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROPRIÉTAIRES PREVIEW ── */}
      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RevealWrapper>
            <div className="prop-grid">
              <div>
                <div className="eyebrow left">Pour les Propriétaires</div>
                <h2 className="prop-title">Nous maximisons vos revenus.<br /><span className="g">Vous ne gérez rien.</span></h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 36 }}>
                  Harmonia est une conciergerie premium spécialisée dans la gestion de biens et la création d&apos;expériences uniques à Marrakech. Un service sur-mesure, humain et irréprochable.
                </p>
                <ul className="chk" style={{ marginBottom: 40 }}>
                  <li>Jusqu&apos;à +40% de revenus en moyenne</li>
                  <li>Taux d&apos;occupation optimisé</li>
                  <li>Aucune gestion au quotidien</li>
                  <li>Paiements sécurisés et transparents</li>
                  <li>Reporting mensuel détaillé</li>
                </ul>
                <Link href="/proprietaires" className="btn-gold">En savoir plus</Link>
              </div>
              <RevealWrapper delay="0.18s">
                <div className="metrics-grid">
                  {[{ n: '+40%', l: 'Revenus' }, { n: '100%', l: 'Transparence' }, { n: '24/7', l: 'Assistance' }, { n: '0', l: 'Contrainte' }].map((m) => (
                    <div key={m.l} className="metric-box">
                      <span className="metric-n">{m.n}</span>
                      <span className="metric-l">{m.l}</span>
                    </div>
                  ))}
                </div>
              </RevealWrapper>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── CATALOGUE PREVIEW ── */}
      <section className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">Pour les Voyageurs</div>
        <h2 className="sec-h">Notre <span className="g">Catalogue de Services</span></h2>
        <p className="sec-sub">Des expériences sur-mesure, authentiques et inoubliables à Marrakech.</p>
        <RevealWrapper>
          <div className="cat-grid">
            {CAT_CARDS.slice(0, 5).map((c) => (
              <Link key={c.id} href={`/voyageurs/${c.id}`} className="cat-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="cat-card-img" src={c.img} alt={c.name} />
                <div className="cat-card-overlay" />
                <div className="cat-card-body">
                  <div className="cat-card-name">{c.name}</div>
                  <ul className="cat-card-items">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  <div className="cat-card-price">{c.price}</div>
                  <div className="cat-card-btn">Réserver</div>
                </div>
              </Link>
            ))}
          </div>
        </RevealWrapper>
        <RevealWrapper>
          <div className="cat-grid" style={{ marginTop: 3 }}>
            {CAT_CARDS.slice(5).map((c) => (
              <Link key={c.id} href={`/voyageurs/${c.id}`} className="cat-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="cat-card-img" src={c.img} alt={c.name} />
                <div className="cat-card-overlay" />
                <div className="cat-card-body">
                  <div className="cat-card-name">{c.name}</div>
                  <ul className="cat-card-items">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  <div className="cat-card-price">{c.price}</div>
                  <div className="cat-card-btn">Réserver</div>
                </div>
              </Link>
            ))}
          </div>
        </RevealWrapper>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/voyageurs" className="btn-outline">Voir tout le catalogue →</Link>
        </div>
      </section>

      {/* ── INVEST PREVIEW ── */}
      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <RevealWrapper>
          <div className="invest-hero">
            <div>
              <span className="invest-tag">Harmonia Invest</span>
              <h2 className="invest-title">L&apos;investissement<br />immobilier<br /><span className="g">clé en main</span><br />à Marrakech</h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginTop: 22 }}>
                Nous nous occupons de tout — vous percevez vos revenus.
              </p>
              <div className="invest-kpis">
                {[{ n: 'Clé', l: 'En Main' }, { n: '0', l: 'Contrainte' }, { n: '20%', l: 'Marge garantie' }].map((k) => (
                  <div key={k.l} className="invest-kpi">
                    <span className="invest-kpi-n">{k.n}</span>
                    <span className="invest-kpi-l">{k.l}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36 }}>
                <Link href="/invest" className="btn-gold">Découvrir Harmonia Invest</Link>
              </div>
            </div>
            <RevealWrapper delay="0.18s">
              <div className="invest-example">
                <div className="invest-ex-title">Exemple Concret</div>
                {[
                  ['Investissement total', '200 000 €'],
                  ['Revenu mensuel cible', '2 500 €', true],
                  ['Taux d\'occupation estimé', '70%'],
                  ['Revenu annuel estimé', '21 000 €', true],
                ].map(([l, v, gold]) => (
                  <div key={l as string} className="invest-row">
                    <span className="invest-rl">{l as string}</span>
                    <span className={`invest-rv${gold ? ' g' : ''}`}>{v as string}</span>
                  </div>
                ))}
                <div className="invest-hl"><span>Marge de gestion garantie : 20%</span></div>
              </div>
            </RevealWrapper>
          </div>
        </RevealWrapper>
      </section>

      {/* ── TEAM PREVIEW ── */}
      <section className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">Les Fondateurs</div>
        <h2 className="sec-h">Une <span className="g">Équipe Franco-Marocaine</span></h2>
        <p className="sec-sub">Une expertise locale &amp; internationale, une passion partagée pour l&apos;excellence.</p>
        <RevealWrapper>
          <div className="team-grid">
            {[
              { i: 'H', n: 'HICHAM', r: 'Co-fondateur · Franco-Marocain', b: 'Master en gestion immobilière. Expertise en conseil, gestion, aménagement et rendement immobilier.' },
              { i: 'M', n: 'MOHAMED', r: 'Co-fondateur · Franco-Tunisien', b: "5 ans d'expérience en gestion d'équipes en France. Expert en satisfaction client." },
              { i: 'N', n: 'NICOLAS', r: 'Co-fondateur · Français', b: "Diplômé d'écoles hôtelières, entrepreneur depuis 10 ans. Apporte son réseau et son expertise." },
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
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/about" className="btn-outline">Découvrir notre histoire →</Link>
        </div>
      </section>

      {/* ── CONTACT PREVIEW ── */}
      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <div className="contact-inner">
          <RevealWrapper>
            <p className="contact-tagline">Parlons de<br /><em>votre projet.</em></p>
            <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)' }}>Notre équipe est à votre écoute 24h/24 et 7j/7.</p>
            <div className="c-info">
              <div className="c-item"><span className="c-ico">+</span><div className="c-text"><small>Téléphone &amp; WhatsApp</small>+212 6 00 00 00 00</div></div>
              <div className="c-item"><span className="c-ico">@</span><div className="c-text"><small>Email</small>contact@harmonia-conciergerie.ma</div></div>
              <div className="c-item"><span className="c-ico">✦</span><div className="c-text"><small>Adresse</small>Marrakech, Maroc</div></div>
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
                  <option>Partenaire</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="f-field"><textarea placeholder="Votre message ou projet…" /></div>
              <button className="f-submit">Envoyer ma demande →</button>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
