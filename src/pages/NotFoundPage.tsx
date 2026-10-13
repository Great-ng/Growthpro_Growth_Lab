import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';

export default function NotFoundPage() {
  return <><Meta title="Page not found" description="The page you are looking for could not be found." /><section className="not-found-section"><div className="container not-found-inner"><span className="not-found-code">404 / LOST IN THE LAB</span><h1>That page took<br /><em>a different route.</em></h1><p>The link may be outdated or the page may have moved. Let’s get you back on track.</p><div className="hero-actions"><Link to="/" className="button button-primary"><ArrowLeft size={16} /> Back home</Link><Link to="/services" className="text-link">Explore services <ArrowRight size={15} /></Link></div><div className="not-found-orbit">G<span>↗</span></div></div></section></>;
}
