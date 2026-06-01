interface Props {
  eyebrow: string;
  title: string;
  imgSrc: string;
  imgAlt?: string;
}

export default function PageHero({ eyebrow, title, imgSrc, imgAlt = '' }: Props) {
  return (
    <div className="page-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="page-hero-img" src={imgSrc} alt={imgAlt} />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <div className="page-hero-eyebrow">{eyebrow}</div>
        <h1
          className="page-hero-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>
  );
}
