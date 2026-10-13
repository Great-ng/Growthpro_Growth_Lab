import { Link } from 'react-router-dom';

interface LogoProps {
  compact?: boolean;
  light?: boolean;
}

export default function Logo({ compact = false, light = false }: LogoProps) {
  return (
    <Link to="/" className={`brand-lockup ${compact ? 'brand-lockup-compact' : ''} ${light ? 'brand-lockup-light' : ''}`} aria-label="Growthpro Solutions home">
      <img src="/growthpro-mark.png" alt="" aria-hidden="true" className="brand-symbol-image" />
      <span className="brand-lockup-words"><strong>Growthpro</strong><small>Solutions</small></span>
    </Link>
  );
}
