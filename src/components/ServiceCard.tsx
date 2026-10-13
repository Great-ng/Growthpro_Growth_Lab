import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="service-card group">
      <div className="service-card-top"><span className="service-number">{service.number}</span><div className="service-icon"><Icon size={21} strokeWidth={1.8} /></div></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <Link to={`/services/${service.slug}`} className="card-link">Explore service <ArrowUpRight size={15} /></Link>
    </article>
  );
}
