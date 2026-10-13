import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/growth-diagnostician', label: 'Growth Lab' },
  { to: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  return (
    <>
      <div className="announcement-bar">
        <span className="announcement-spark">✳</span>
        <span>Ideas into action. Digital support that moves you forward.</span>
        <Link to="/contact">Let’s talk <ArrowRight size={13} /></Link>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X /> : <Menu />}
          </button>
          <nav className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={close} className={({ isActive }) => isActive || (item.to === '/services' && location.pathname.startsWith('/services/')) ? 'nav-link nav-link-active' : 'nav-link'}>
                {item.label}
              </NavLink>
            ))}
            <Link className="button button-primary button-nav" to="/contact" onClick={close}>Start a project <ArrowRight size={15} /></Link>
          </nav>
        </div>
      </header>
    </>
  );
}
