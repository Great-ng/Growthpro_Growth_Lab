import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Layers3, MousePointer2, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import { services } from '../data/services';
import { projects } from '../data/projects';

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <Meta title="Build Better. Grow Smarter." description="Growthpro Solutions helps businesses build better websites, grow their digital presence, strengthen their brand and work smarter." />
      <section className="hero-section" id="top">
        <div className="hero-grid-texture" />
        <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="eyebrow"><span className="eyebrow-line" /> DIGITAL SOLUTIONS FOR AMBITIOUS PEOPLE</div>
            <h1>Build better.<br /><span>Grow smarter.</span></h1>
            <p className="hero-lead">Your next stage of growth starts with the right digital support.</p>
            <p className="hero-description">From websites and marketing to design, virtual assistance and academic guidance, Growthpro Solutions helps you move from scattered ideas to confident action.</p>
            <div className="hero-actions"><Link className="button button-primary" to="/contact">Let’s discuss your project <ArrowRight size={16} /></Link><Link className="text-link" to="/services">Explore what we do <ArrowDownRight size={16} /></Link></div>
            <div className="hero-proof"><div className="proof-icons"><span><Check size={13} /></span><span><Sparkles size={13} /></span><span><Layers3 size={13} /></span></div><div><strong>Practical support, built around you</strong><small>Clear communication. Thoughtful execution.</small></div></div>
          </motion.div>
          <motion.div className="hero-showcase" initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
            <div className="showcase-topline"><span className="live-dot" /> GROWTH LAB / INTERACTIVE STUDIO <span>01 — 06</span></div>
            <div className="showcase-canvas"><div className="canvas-grid" /><div className="canvas-logo-letter">G<span>↗</span></div><div className="canvas-copy"><small>THE NEXT CHAPTER</small><strong>Make your<br /><em>next move.</em></strong><span>Strategy · Creativity · Progress</span></div><div className="canvas-orb canvas-orb-a" /><div className="canvas-orb canvas-orb-b" />
              <div className="floating-widget widget-website"><span className="widget-icon"><Code2 size={16} /></span><span><b>Digital experiences</b><small>Built for your next step</small></span><Check size={15} className="widget-check" /></div>
              <div className="floating-widget widget-growth"><span className="widget-icon"><Workflow size={16} /></span><span><b>Work that flows</b><small>Less friction, more focus</small></span><ArrowUpRight size={15} className="widget-check" /></div>
              <div className="canvas-bottom-labels"><span>WEB</span><span>BRAND</span><span>GROWTH</span></div>
            </div>
            <div className="showcase-caption"><span>G / 01</span><p>One connected partner for your next stage.</p><Link to="/growth-diagnostician" aria-label="Open the Growth Diagnostician"><ArrowUpRight size={17} /></Link></div>
          </motion.div>
        </div>
        <div className="container hero-bottom-strip"><span>WEB DEVELOPMENT</span><i /><span>DIGITAL MARKETING</span><i /><span>BRAND DESIGN</span><i /><span>VIRTUAL SUPPORT</span><i /><span>ACADEMIC GUIDANCE</span></div>
      </section>

      <section className="section-pad services-section" id="services"><div className="container"><div className="section-header-row"><SectionHeading eyebrow="WHAT WE DO" title="One partner." highlight="More ways forward." description="Choose the support you need today or connect services around a bigger goal." /><Link to="/services" className="text-link section-view-link">View all services <ArrowUpRight size={15} /></Link></div><div className="services-grid">{services.map((service) => <ServiceCard service={service} key={service.slug} />)}</div></div></section>

      <section className="diagnostician-teaser section-pad"><div className="container diagnostician-teaser-grid"><div className="teaser-visual"><div className="teaser-window"><div className="teaser-window-bar"><span /><span /><span /><small>GROWTH LAB / QUICK CHECK</small></div><div className="teaser-window-body"><span className="teaser-step">01 / FIND YOUR FOCUS</span><h3>What’s holding<br />you back?</h3><div className="teaser-choice"><span className="choice-dot" />Website or store</div><div className="teaser-choice teaser-choice-selected"><span className="choice-dot" />Marketing visibility <Check size={13} /></div><div className="teaser-choice"><span className="choice-dot" />Time and admin</div><div className="teaser-progress"><i /></div></div></div><div className="teaser-sticker"><Sparkles size={17} /><span>A little clarity<br />goes a long way.</span></div></div><div className="teaser-copy"><div className="eyebrow"><span className="eyebrow-line" /> START WITH A CLEARER PICTURE</div><h2>Not sure what you need?<br /><span>Start with a quick check.</span></h2><p>Answer a few simple questions about your current challenge. The Growth Diagnostician recommends a relevant service and practical next step to explore.</p><ul className="check-list"><li><Check size={15} />Choose your biggest challenge</li><li><Check size={15} />Get a tailored service recommendation</li><li><Check size={15} />Move straight to the next step</li></ul><Link to="/growth-diagnostician" className="button button-primary">Find my next step <ArrowRight size={16} /></Link><small className="fine-print">A guided recommendation tool, not an automated audit of your systems.</small></div></div></section>

      <section className="section-pad portfolio-section"><div className="container"><div className="section-header-row"><SectionHeading eyebrow="A LOOK INSIDE THE LAB" title="Ideas made" highlight="tangible." description="Explore illustrative concepts that show how we think across web, brand, content and business operations." /><Link to="/portfolio" className="text-link section-view-link">Explore the portfolio <ArrowUpRight size={15} /></Link></div><div className="projects-grid home-projects">{projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} />)}</div><p className="portfolio-disclaimer">Concept demonstrations, not client case studies or measured performance claims.</p></div></section>

      <section className="process-section section-pad"><div className="container"><SectionHeading eyebrow="HOW WE WORK" title="Good work starts" highlight="with clear thinking." description="A practical process keeps projects focused, collaborative and easier to move forward." align="center" /><div className="process-grid">{[{ number: '01', title: 'Listen', text: 'Understand your goals, audience, constraints and what success should look like.', icon: MousePointer2 }, { number: '02', title: 'Shape', text: 'Agree the scope, priorities and a clear plan before the build begins.', icon: Layers3 }, { number: '03', title: 'Deliver', text: 'Create, review and refine the work with clear communication throughout.', icon: Check }, { number: '04', title: 'Improve', text: 'Share the handover and identify sensible next steps for continued progress.', icon: ArrowUpRight }].map((step) => { const Icon = step.icon; return <article className="process-step" key={step.number}><span className="process-number">{step.number}</span><div className="process-icon"><Icon size={19} /></div><h3>{step.title}</h3><p>{step.text}</p></article>; })}</div></div></section>

      <section className="section-pad faq-section"><div className="container faq-grid"><div><SectionHeading eyebrow="GOOD QUESTIONS" title="A few things" highlight="worth knowing." description="A little clarity before we get started." /><Link to="/contact" className="text-link">Ask us something else <ArrowRight size={15} /></Link></div><FAQ /></div></section>
    </>
  );
}
