import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import PageIntro from '../components/PageIntro';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../types';

const categories: ProjectCategory[] = ['All', 'Web', 'Branding', 'Marketing', 'Operations'];

export default function PortfolioPage() {
  const [category, setCategory] = useState<ProjectCategory>('All');
  const filtered = projects.filter((project) => category === 'All' || project.category === category);
  return <><Meta title="Portfolio" description="Explore Growthpro Solutions concept projects across web development, branding, digital marketing and business operations." /><PageIntro eyebrow="SELECTED CONCEPTS" title="Ideas made" highlight="tangible." description="Explore sample work that demonstrates how Growthpro Solutions approaches websites, visual identity, content and business workflows." /><section className="section-pad portfolio-page-section"><div className="container"><div className="portfolio-filter-bar"><div><span className="filter-label">EXPLORE BY DISCIPLINE</span><p>{filtered.length} concept {filtered.length === 1 ? 'project' : 'projects'}</p></div><div className="portfolio-filters">{categories.map((item) => <button className={category === item ? 'portfolio-filter-active' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div><div className="projects-grid portfolio-grid">{filtered.map((project) => <ProjectCard key={project.id} project={project} />)}</div><div className="portfolio-note-panel"><div><span>GOOD WORK STARTS WITH A GOOD CONVERSATION</span><h2>Have a project in mind?</h2><p>Tell us what you want to build or improve. We’ll help you define a useful next step.</p></div><Link className="button button-primary" to="/contact">Discuss a project <ArrowRight size={16} /></Link></div><p className="portfolio-disclaimer">Transparency note: the items on this page are illustrative concepts created to demonstrate creative direction. They are not client case studies, testimonials or claims of measured results.</p></div></section></>;
}
