import { Check, Code2, Layers3, Megaphone, Workflow } from 'lucide-react';
import type { PortfolioProject } from '../types';

const artIcons = {
  web: Code2,
  brand: Layers3,
  marketing: Megaphone,
  ops: Workflow,
};

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  const Icon = artIcons[project.style];
  return (
    <article className={`project-card project-card-${project.style}`}>
      <div className="project-art" aria-hidden="true">
        <div className="project-art-top"><span className="mini-status" /> <span>GROWTHPRO / CONCEPT {project.id.slice(0, 2).toUpperCase()}</span><Icon size={15} /></div>
        {project.style === 'web' && <div className="web-mockup"><div className="mock-browser-bar"><i /><i /><i /><span>yourbusiness.com</span></div><div className="mock-browser-body"><small>MAKE YOUR NEXT MOVE</small><b>A digital home<br />for your business.</b><span className="mock-cta">Explore services ↗</span><div className="mock-blocks"><i /><i /><i /></div></div></div>}
        {project.style === 'brand' && <div className="brand-mockup"><span className="brand-mark">G<i /></span><b>Grow with<br />intention.</b><small>COLOUR · CLARITY · CONSISTENCY</small><div className="swatches"><i /><i /><i /><i /></div></div>}
        {project.style === 'marketing' && <div className="marketing-mockup"><span className="content-label">CONTENT SPRINT / 05 DAYS</span><b>Show up with<br /><em>purpose.</em></b><div className="content-pills"><span>PLAN</span><span>CREATE</span><span>PUBLISH</span></div><div className="content-bars"><i /><i /><i /><i /><i /></div></div>}
        {project.style === 'ops' && <div className="ops-mockup"><div className="ops-head"><span>WORKFLOW OVERVIEW</span><b>Make space<br />for the work.</b></div>{['Review new enquiries', 'Schedule follow-ups', 'Prepare weekly summary'].map((task, index) => <div className="ops-row" key={task}>{index < 2 ? <Check size={13} /> : <span className="empty-check" />}<span>{task}</span><small>{index < 2 ? 'DONE' : 'NEXT'}</small></div>)}</div>}
      </div>
      <div className="project-content"><span className="project-label">{project.eyebrow}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-metric"><Check size={14} />{project.metric}</div><span className="concept-note">Illustrative concept · not a client case study</span></div>
    </article>
  );
}
