import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import PageIntro from '../components/PageIntro';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

export default function ServicesPage() {
  return <><Meta title="Services" description="Explore Growthpro Solutions services: web development, digital marketing, brand design, virtual assistance, academic guidance and Shopify optimisation." /><PageIntro eyebrow="OUR SERVICES" title="The right support for" highlight="what’s next." description="Build your digital presence, strengthen your brand and create more room to focus. Start with one service or connect several around a bigger goal." cta="Tell us what you need" /><section className="section-pad services-section"><div className="container"><div className="services-grid">{services.map((service) => <ServiceCard service={service} key={service.slug} />)}</div></div></section><section className="section-pad process-section"><div className="container services-combo-grid"><div><SectionHeading eyebrow="CONNECTED THINKING" title="Your services can" highlight="work together." description="A website can make your brand easier to find. Marketing can bring the right visitors. Great design helps you earn trust. Reliable support helps keep everything moving." /><Link to="/contact" className="button button-primary">Plan a connected solution <ArrowRight size={16} /></Link></div><div className="connected-service-list">{[{ label: 'Get discovered', text: 'Marketing and content bring your value into focus.' }, { label: 'Build confidence', text: 'Your website and brand create a clearer first impression.' }, { label: 'Work with more focus', text: 'Virtual support brings consistency to everyday tasks.' }, { label: 'Keep moving forward', text: 'Practical guidance helps you choose the next step.' }].map((item) => <div className="connected-service-item" key={item.label}><span><Check size={16} /></span><div><b>{item.label}</b><p>{item.text}</p></div></div>)}</div></div></section></>;
}
