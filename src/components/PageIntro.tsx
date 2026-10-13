import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  breadcrumbs?: { label: string; to?: string }[];
  cta?: string;
  ctaTo?: string;
}

export default function PageIntro({ eyebrow, title, highlight, description, breadcrumbs, cta, ctaTo = '/contact' }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="container">
        {breadcrumbs && <div className="breadcrumbs">{breadcrumbs.map((crumb, index) => <span key={crumb.label}>{index > 0 && <i>/</i>}{crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <b>{crumb.label}</b>}</span>)}</div>}
        <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
        <h1>{title}{highlight ? <> <span>{highlight}</span></> : null}</h1>
        <p>{description}</p>
        {cta && <Link className="button button-primary" to={ctaTo}>{cta}<ArrowRight size={16} /></Link>}
      </div>
    </section>
  );
}
