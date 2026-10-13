import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Check,
  Code2,
  GraduationCap,
  Headset,
  Megaphone,
  Palette,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import PageIntro from '../components/PageIntro';
import SectionHeading from '../components/SectionHeading';
import { getService } from '../data/services';
import type { ServiceSlug } from '../types';

type Challenge = 'website' | 'visibility' | 'time' | 'brand' | 'academic' | 'shopify';
type Question = {
  id: Challenge;
  label: string;
  description: string;
  icon: typeof Code2;
  slug: ServiceSlug;
  relatedSlugs?: ServiceSlug[];
  recommendation: string;
  nextStep: string;
};

const questions: Question[] = [
  {
    id: 'website',
    label: 'My website needs work',
    description: 'It looks dated, feels confusing or does not guide visitors to enquire.',
    icon: Code2,
    slug: 'web-development',
    relatedSlugs: ['shopify-optimisation'],
    recommendation: 'Your website should turn attention into enquiries.',
    nextStep: 'Start by looking at how clearly your site explains what you offer, how it works on a phone and how easy it is for a visitor to contact you or make a purchase. Share your URL and we can discuss practical improvements.',
  },
  {
    id: 'visibility',
    label: 'My brand needs visibility',
    description: 'I am not sure what to post or how to make marketing more consistent.',
    icon: Megaphone,
    slug: 'digital-marketing',
    recommendation: 'Build consistency with a clear content and campaign direction.',
    nextStep: 'Identify your most important audience, your strongest offer and the channels you can realistically use well.',
  },
  {
    id: 'time',
    label: 'I am buried in admin tasks',
    description: 'Emails, scheduling, follow-ups and routine tasks are taking too much attention.',
    icon: Headset,
    slug: 'virtual-assistant',
    recommendation: 'Create more space for important work with structured support.',
    nextStep: 'List the recurring tasks that consume time, then separate what can be delegated from what needs your approval.',
  },
  {
    id: 'brand',
    label: 'My brand feels inconsistent',
    description: 'My visuals, social content and business materials do not feel connected.',
    icon: Palette,
    slug: 'brand-design',
    recommendation: 'Bring your identity together with a usable visual system.',
    nextStep: 'Gather your current logo, colours and key customer touchpoints before deciding what needs to change.',
  },
  {
    id: 'academic',
    label: 'I need research direction',
    description: 'My project or dissertation needs clearer structure, formatting or referencing.',
    icon: GraduationCap,
    slug: 'academic-support',
    recommendation: 'Get a clearer route through your research work.',
    nextStep: 'Prepare your research topic, objectives and institution guidelines for a focused structure review.',
  },
  {
    id: 'shopify',
    label: 'My Shopify store needs improvement',
    description: 'The mobile experience, theme or shopping journey could be clearer.',
    icon: ShoppingBag,
    slug: 'shopify-optimisation',
    recommendation: 'Make the shopping experience easier to navigate and use.',
    nextStep: 'Start with your store URL and the pages where customers most often browse or drop off.',
  },
];

function makeEnquiryUrl(result: Question): string {
  if (result.id === 'website') {
    const params = new URLSearchParams({
      service: 'web-development',
      related: 'shopify-optimisation',
      source: 'growth-diagnostician',
      challenge: 'website',
      request: 'website-review',
    });
    return `/contact?${params.toString()}`;
  }

  const params = new URLSearchParams({ service: result.slug, source: 'growth-diagnostician', challenge: result.id });
  return `/contact?${params.toString()}`;
}

export default function GrowthDiagnosticianPage() {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const result = useMemo(() => questions.find((question) => question.id === challenge), [challenge]);
  const recommendedServices = result
    ? [result.slug, ...(result.relatedSlugs ?? [])].map((slug) => getService(slug)).filter((service) => service !== undefined)
    : [];

  return (
    <>
      <Meta
        title="Growth Diagnostician"
        description="Identify a business challenge with Growthpro Solutions' guided Growth Diagnostician and discover a practical next step."
      />
      <PageIntro
        eyebrow="WELCOME TO THE GROWTH LAB"
        title="Find your next"
        highlight="best move."
        description="A few quick choices can help you name the challenge, explore the service that fits and take a practical next step."
      />

      <section className="section-pad diagnostician-page-section">
        <div className="container diagnostician-layout">
          <div className="diagnostician-form-panel">
            <div className="diagnostician-panel-head">
              <span className="assessment-number">01 / 01</span>
              <span className="assessment-status"><i /> GUIDED ASSESSMENT</span>
            </div>
            <h2>What is holding you back right now?</h2>
            <p>Choose the challenge that feels closest to your current situation. There is no wrong answer.</p>

            <div className="challenge-options">
              {questions.map((item) => {
                const Icon = item.icon;
                const selected = challenge === item.id;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setChallenge(item.id)}
                    className={`challenge-option ${selected ? 'challenge-option-selected' : ''}`}
                    aria-pressed={selected}
                  >
                    <span className="challenge-icon"><Icon size={19} /></span>
                    <span className="challenge-copy"><b>{item.label}</b><small>{item.description}</small></span>
                    <span className="challenge-radio">{selected && <Check size={12} />}</span>
                  </button>
                );
              })}
            </div>

            <div className="assessment-bottom">
              <span><Sparkles size={14} /> Takes less than a minute</span>
              <span>Guided interactive tool</span>
            </div>
          </div>

          <div className="diagnostician-result-panel" aria-live="polite">
            {result ? (
              <div className="diagnosis-result">
                <span className="result-icon"><Sparkles size={20} /></span>
                <span className="result-eyebrow">YOUR RECOMMENDED NEXT STEP</span>
                <h2>{result.recommendation}</h2>
                <p>{result.nextStep}</p>

                <div className="result-service result-services-list">
                  <span>RECOMMENDED SUPPORT</span>
                  {recommendedServices.map((service) => service && (
                    <Link to={`/services/${service.slug}`} key={service.slug} className="recommended-service-chip">
                      <span>{service.title}</span><ArrowRight size={13} />
                    </Link>
                  ))}
                </div>

                {result.id === 'website' && (
                  <div className="website-review-offer">
                    <span className="offer-label"><Check size={13} /> A CLEARER PLACE TO START</span>
                    <b>Request a website review</b>
                    <p>Share your website or Shopify store URL and tell us what you want it to do better. We’ll use that context to guide a focused conversation about structure, mobile usability and the path to enquiry or purchase.</p>
                    <ul>
                      <li><Check size={13} /> First impressions and message clarity</li>
                      <li><Check size={13} /> Mobile experience and navigation</li>
                      <li><Check size={13} /> Calls to action and customer journey</li>
                    </ul>
                  </div>
                )}

                <Link to={makeEnquiryUrl(result)} className="button button-primary diagnosis-primary-cta">
                  {result.id === 'website' ? 'Request a website review' : result.id === 'shopify' ? 'Request a Shopify review' : 'Discuss this recommendation'}
                  <ArrowRight size={16} />
                </Link>
                <p className="diagnosis-cta-note">No need to have everything figured out. Tell us what you have and what you want to improve.</p>
                <button className="reset-assessment" onClick={() => setChallenge(null)}>Choose a different challenge</button>
              </div>
            ) : (
              <div className="diagnosis-empty">
                <div className="empty-orbit"><span>G</span><i /><b /></div>
                <span className="result-eyebrow">YOUR GROWTH STARTS WITH CLARITY</span>
                <h2>Your recommendation<br />will appear here.</h2>
                <p>Select a challenge to see a relevant Growthpro service and a practical next step to explore.</p>
                <div className="empty-points">
                  <span><Check size={14} /> Clear next step</span>
                  <span><Check size={14} /> Relevant service</span>
                  <span><Check size={14} /> No pressure to commit</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="diagnostician-disclaimer">This tool provides general guidance based on your selection. It does not inspect live websites, access analytics or replace a professional assessment.</p>
      </section>

      <section className="section-pad process-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT HAPPENS NEXT"
            title="From challenge"
            highlight="to action."
            align="center"
            description="Use the recommendation as a starting point for a more focused project conversation."
          />
          <div className="three-step-grid">
            {[
              { number: '01', title: 'Name the challenge', text: 'Choose the area where you need the most help right now.' },
              { number: '02', title: 'Explore a solution', text: 'Review the recommended service and sample deliverables.' },
              { number: '03', title: 'Tell us what you need', text: 'Send your context so we can discuss a useful next step.' },
            ].map((step) => (
              <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
