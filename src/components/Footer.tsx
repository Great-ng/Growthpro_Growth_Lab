import { ArrowRight, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT MOVE STARTS HERE</div>
          <h2>Got a good idea?<br /><span>Let’s make it real.</span></h2>
        </div>
        <Link to="/contact" className="button button-lime">Tell us what you’re building <ArrowRight size={16} /></Link>
      </div>
      <div className="container footer-main">
        <div className="footer-brand-block">
          <div className="footer-logo-panel"><Logo /></div>
          <p>Digital solutions for people ready to move forward.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/services">Services</Link><Link to="/portfolio">Portfolio</Link><Link to="/growth-diagnostician">Growth Lab</Link><Link to="/about">About us</Link>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <Link to="/services/web-development">Web development</Link><Link to="/services/digital-marketing">Digital marketing</Link><Link to="/services/brand-design">Brand design</Link><Link to="/services/virtual-assistant">Virtual assistant</Link><Link to="/services/academic-support">Academic guidance</Link><Link to="/services/shopify-optimisation">Shopify optimisation</Link>
        </div>
        <div className="footer-column footer-contact">
          <h3>Let’s connect</h3>
          <a href="mailto:growthprosolutions@gmail.com"><Mail size={15} /> growthprosolutions@gmail.com <ArrowUpRight size={12} /></a>
          <a href="tel:07055052726"><Phone size={15} /> 07055052726 <ArrowUpRight size={12} /></a>
          <Link to="/contact">Start a project <ArrowRight size={14} /></Link>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Growthpro Solutions. All rights reserved.</span><span>Built with React + TypeScript</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
