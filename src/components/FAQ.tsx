import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'Can I hire Growthpro for just one service?', answer: 'Yes. You can start with one clearly defined project or service. If you later need related support, we can discuss how the work fits together.' },
  { question: 'Do you work with small businesses and individuals?', answer: 'The services are designed to support businesses, founders, professionals, students and researchers. Scope and suitability are discussed before work begins.' },
  { question: 'How does a project usually start?', answer: 'Start with an enquiry describing your goal, timeline and the support you need. We can then clarify the scope, deliverables and next steps.' },
  { question: 'Does the Growth Diagnostician audit my live website?', answer: 'No. The current Growth Diagnostician is an interactive recommendation tool. It does not crawl websites, access analytics or perform a technical audit.' },
  { question: 'Can you support an existing Shopify store?', answer: 'Yes, Shopify support can cover theme customisation, mobile layout improvements and a store experience review. Access, scope and technical requirements are confirmed first.' },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${active === index ? 'faq-item-active' : ''}`} key={faq.question}><button type="button" onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><span>{faq.question}</span><ChevronDown size={18} /></button>{active === index && <p>{faq.answer}</p>}</div>)}</div>;
}
