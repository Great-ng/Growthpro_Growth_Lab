interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, highlight, description, align = 'left', light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''} ${light ? 'section-heading-light' : ''}`}>
      <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
      <h2>{title}{highlight ? <> <span>{highlight}</span></> : null}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
