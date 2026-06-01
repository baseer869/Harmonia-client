import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="f-logo">HARMONIA</div>
      <div className="f-tagline">Résidence &amp; Conciergerie · Marrakech</div>
      <nav className="f-links">
        <Link href="/">Accueil</Link>
        <Link href="/proprietaires">Propriétaires</Link>
        <Link href="/voyageurs">Voyageurs</Link>
        <Link href="/invest">Investissement</Link>
        <Link href="/about">À Propos</Link>
        <Link href="/partenaires">Partenaires</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="f-copy">© 2025 Harmonia Résidence &amp; Conciergerie · Tous droits réservés · Marrakech, Maroc</div>
    </footer>
  );
}
