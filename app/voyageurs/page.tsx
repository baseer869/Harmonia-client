import Link from 'next/link';
import PageHero from '@/components/PageHero';
// import RevealWrapper from '@/components/RevealWrapper';

export const metadata = { title: 'Voyageurs – HARMONIA Conciergerie' };

const CAT_CARDS = [
  { id: 'excursions', name: 'Excursions & Aventures', items: ['Désert d\'Agafay / Sahara', 'Quad, Buggy & Dromadaire', 'Montgolfière au lever du soleil', 'Atlas & 3 Vallées'], price: 'À partir de 250 MAD / pers.', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80' },
  { id: 'bienetre', name: 'Bien-Être & Détente', items: ['Hammam traditionnel', 'Massages & Soins', 'Spa & Rituels marocains', 'Cours de Yoga'], price: 'À partir de 200 MAD / pers.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80' },
  { id: 'transport', name: 'Transport & Transferts', items: ['Transfert Aéroport', 'Chauffeur privé', 'Location de voiture', 'Service VIP'], price: 'À partir de 150 MAD / trajet', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80' },
  { id: 'gastro', name: 'Expériences Gastronomiques', items: ['Chef privé à domicile', 'Dîner traditionnel marocain', 'Cours de cuisine', 'Brunch / Rooftop'], price: 'À partir de 300 MAD / pers.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
  { id: 'activites', name: 'Activités & Loisirs', items: ['Jardin Majorelle', 'Balade en calèche', 'Soirées & Clubs privés', 'Shooting photo'], price: 'À partir de 150 MAD / pers.', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80' },
  { id: 'domicile', name: 'Services à Domicile', items: ['Ménage & Entretien', 'Courses & Livraison', 'Petit-déjeuner à domicile', 'Baby-sitting'], price: 'Sur devis', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { id: 'shopping', name: 'Shopping & Artisanat', items: ['Guide shopping', 'Artisanat & Souvenirs', 'Personal Shopper', 'Livraison de vos achats'], price: 'Sur devis', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 'evenements', name: 'Événements & Célébrations', items: ['Anniversaire & EVJF / EVG', 'Demande en mariage', 'Dîner romantique', 'Mariages & réceptions'], price: 'Sur devis', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80' },
  { id: 'packs', name: 'Packs Sur-Mesure', items: ['Séjours clés en main', '100% personnalisés', 'Hébergement inclus', 'Tous services inclus'], price: 'Nous consulter', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80' },
  { id: 'cadeaux', name: 'Produits & Cadeaux', items: ['Huile d\'argan & Cosmétiques', 'Coffrets cadeaux', 'Produits du terroir', 'Livraison à domicile'], price: 'À partir de 120 MAD', img: 'https://images.unsplash.com/photo-1611006174913-c8d9e5d5b1a2?w=600&q=80' },
];

export default function VoyageursPage() {
  return (
    <>
      <PageHero
        eyebrow="Espace Voyageurs"
        title="Vivez Marrakech<br><span class='g'>Autrement.</span>"
        imgSrc="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1600&q=85"
        imgAlt="Marrakech médina"
      />

      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow">Conciergerie Sur-Mesure</div>
          <h2 className="sec-h">Votre séjour,<br /><span className="g">notre priorité.</span></h2>
          <p style={{ fontSize: 16, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 44 }}>
            Harmonia Conciergerie vous accompagne avant, pendant et après votre séjour pour une expérience sur-mesure, authentique et inoubliable.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {[{ n: '24/7', l: 'Disponibilité' }, { n: '+100', l: 'Services' }, { n: '95%', l: 'Satisfaction' }].map((s) => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontFamily: "'Cinzel',serif", fontSize: 28, color: 'var(--gold)' }}>{s.n}</span>
                <span style={{ fontSize: 9.5, letterSpacing: 3, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="voy-catalogue" className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">Notre Catalogue</div>
        <h2 className="sec-h">Tous nos <span className="g">Services</span></h2>
        <p className="sec-sub">10 catégories de services — cliquez pour découvrir et réserver.</p>
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
                <div className="cat-card-btn">Réserver ce service</div>
              </div>
            </Link>
          ))}
        </div>
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
                <div className="cat-card-btn">Réserver ce service</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
