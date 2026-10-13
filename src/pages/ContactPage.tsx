import { useEffect, useMemo, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, Mail, Phone, ShieldCheck, Globe2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Meta from '../components/Meta';
import PageIntro from '../components/PageIntro';
import { getService, services } from '../data/services';

const enquirySchema = z.object({
  name: z.string().trim().min(2, { error: 'Please enter your name.' }),
  email: z.string().trim().email({ error: 'Enter a valid email address.' }),
  organisation: z.string().trim().optional(),
  service: z.string().min(1, { error: 'Choose a service so we know how to direct your enquiry.' }),
  websiteUrl: z.string().trim().refine(
    (value) => value === '' || /^https?:\/\/.+/.test(value),
    { error: 'Enter a full URL beginning with https://, or leave this field blank.' },
  ),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().trim().min(12, { error: 'Please share a little more about what you need.' }),
  consent: z.boolean().refine((value) => value, { error: 'Please confirm that we may reply to this enquiry.' }),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

const websiteReviewMessage = [
  'I used the Growth Diagnostician and would like to request a website review.',
  '',
  'Website or Shopify store URL:',
  'Main concern (for example, mobile usability, layout, speed or enquiries):',
  'What I would like the site to do better:',
].join('\n');

export default function ContactPage() {
  const [params] = useSearchParams();
  const [fallbackNotice, setFallbackNotice] = useState(false);
  const preselected = params.get('service') ?? '';
  const related = params.get('related') ?? '';
  const source = params.get('source') ?? '';
  const request = params.get('request') ?? '';
  const challenge = params.get('challenge') ?? '';
  const isWebsiteReview = request === 'website-review' && source === 'growth-diagnostician';
  const relatedService = useMemo(() => getService(related), [related]);

  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      email: '',
      organisation: '',
      service: preselected,
      websiteUrl: '',
      budget: '',
      timeline: '',
      message: isWebsiteReview ? websiteReviewMessage : '',
      consent: false,
    },
  });

  const { setValue, getValues } = form;

  useEffect(() => {
    if (preselected && services.some((service) => service.slug === preselected)) {
      setValue('service', preselected);
    }
    if (isWebsiteReview && !getValues('message')) {
      setValue('message', websiteReviewMessage);
    }
  }, [getValues, isWebsiteReview, preselected, setValue]);

  const submit = (values: EnquiryValues) => {
    const serviceLabel = values.service === 'not-sure'
      ? 'Not sure yet'
      : getService(values.service)?.title ?? values.service;
    const subject = encodeURIComponent(isWebsiteReview
      ? 'Website Review Request | Growthpro Solutions'
      : `Growthpro project enquiry: ${serviceLabel}`);
    const context = isWebsiteReview
      ? `Request type: Website review\nSelected challenge: ${challenge || 'Website needs improvement'}\nRecommended services: Web Development${relatedService ? ` & ${relatedService.title}` : ''}\nWebsite or Shopify URL: ${values.websiteUrl || 'Not provided yet'}\nEnquiry source: Growth Diagnostician\n\n`
      : '';
    const body = encodeURIComponent(
      `Hello Growthpro Solutions,\n\n${context}Name: ${values.name}\nEmail: ${values.email}\nBusiness/organisation: ${values.organisation || 'Not provided'}\nService: ${serviceLabel}\nBudget: ${values.budget || 'Not specified'}\nTimeline: ${values.timeline || 'Not specified'}\n\nProject details:\n${values.message}\n\nI consent to being contacted about this enquiry.`,
    );
    setFallbackNotice(true);
    window.location.href = `mailto:growthprosolutions@gmail.com?subject=${subject}&body=${body}`;
  };

  const fieldError = (name: keyof EnquiryValues) => form.formState.errors[name]?.message?.toString();

  return (
    <>
      <Meta
        title={isWebsiteReview ? 'Request a Website Review' : 'Contact'}
        description={isWebsiteReview
          ? 'Request a focused website review from Growthpro Solutions. Share your site and tell us what you want to improve.'
          : 'Start a project with Growthpro Solutions. Tell us about your website, marketing, branding, virtual assistance, Shopify or academic guidance needs.'}
      />
      <PageIntro
        eyebrow={isWebsiteReview ? 'GROWTH DIAGNOSTICIAN RECOMMENDATION' : 'LET’S TALK ABOUT YOUR NEXT STEP'}
        title={isWebsiteReview ? 'Let’s make your website' : 'Tell us what you’re'}
        highlight={isWebsiteReview ? 'work harder.' : 'trying to grow.'}
        description={isWebsiteReview
          ? 'Share your website or Shopify store and the challenge you want to solve. We’ll use your context to guide a focused conversation about practical improvements.'
          : 'Share a little about your goal, the challenge you’re facing and the kind of support you need. We’ll have a clearer place to start.'}
      />

      <section className="section-pad contact-page-section">
        <div className="container contact-page-grid">
          <aside className="contact-aside">
            <div className="contact-aside-stamp"><span>G</span><i /></div>
            <h2>{isWebsiteReview ? 'A better website starts with the right questions.' : 'Good projects start with a useful conversation.'}</h2>
            <p>{isWebsiteReview
              ? 'We’ll start with what you share: your website, your audience and the action you want customers to take. From there, we can discuss suitable improvements to clarity, mobile usability and the customer journey.'
              : 'No pressure to have every detail worked out. Start with the problem you want to solve and we can clarify the scope together.'}</p>

            {isWebsiteReview && (
              <div className="review-includes-card">
                <span className="review-includes-icon"><CheckCircle2 size={17} /></span>
                <div>
                  <b>What we’ll focus on</b>
                  <ul>
                    <li>First impression and message clarity</li>
                    <li>Mobile navigation and usability</li>
                    <li>Calls to action and enquiry journey</li>
                    <li>Shopify theme and storefront, if relevant</li>
                  </ul>
                  <small>This is an initial review request, not an automated live-site audit.</small>
                </div>
              </div>
            )}

            <a className="contact-detail" href="mailto:growthprosolutions@gmail.com">
              <span><Mail size={17} /></span><span><small>EMAIL US</small><b>growthprosolutions@gmail.com</b></span>
            </a>
            <a className="contact-detail" href="tel:09116898590">
              <span><Phone size={17} /></span><span><small>CALL OR MESSAGE</small><b>09116898590</b></span>
            </a>
            <div className="contact-trust-note">
              <ShieldCheck size={17} />
              <span><b>Your information</b><small>This demo form prepares an email and does not save your details to a database.</small></span>
            </div>
          </aside>

          <div className="contact-form-shell">
            <div className="form-shell-heading">
              <div><span className="demo-kicker">{isWebsiteReview ? 'WEBSITE REVIEW REQUEST' : 'PROJECT ENQUIRY'}</span><h2>{isWebsiteReview ? 'Tell us what needs attention.' : 'Tell us a little more.'}</h2></div>
              <span className="form-required-note">* Required</span>
            </div>

            {isWebsiteReview && (
              <div className="enquiry-recommendation" role="status">
                <span className="enquiry-recommendation-icon"><Globe2 size={18} /></span>
                <div>
                  <small>YOUR GROWTH LAB RECOMMENDATION</small>
                  <b>Web Development{relatedService ? ` & ${relatedService.title}` : ''}</b>
                  <p>Your website is the starting point. We’ll use your notes to understand whether design, structure, mobile usability or Shopify improvements may be most relevant.</p>
                </div>
              </div>
            )}

            <form onSubmit={form.handleSubmit(submit)} noValidate>
              <div className="form-fields-two">
                <div className="form-field"><label htmlFor="name">Your name *</label><input id="name" autoComplete="name" placeholder="e.g. Alex Johnson" {...form.register('name')} aria-invalid={Boolean(fieldError('name'))} />{fieldError('name') && <small className="field-error">{fieldError('name')}</small>}</div>
                <div className="form-field"><label htmlFor="email">Email address *</label><input id="email" type="email" autoComplete="email" placeholder="you@company.com" {...form.register('email')} aria-invalid={Boolean(fieldError('email'))} />{fieldError('email') && <small className="field-error">{fieldError('email')}</small>}</div>
              </div>

              <div className="form-field"><label htmlFor="organisation">Business or organisation</label><input id="organisation" placeholder="Optional" {...form.register('organisation')} /></div>

              {isWebsiteReview && (
                <div className="form-field">
                  <label htmlFor="websiteUrl">Website or Shopify store URL</label>
                  <input id="websiteUrl" type="url" inputMode="url" placeholder="https://yourwebsite.com" {...form.register('websiteUrl')} aria-invalid={Boolean(fieldError('websiteUrl'))} />
                  {fieldError('websiteUrl') && <small className="field-error">{fieldError('websiteUrl')}</small>}
                  <small className="field-hint">Optional, but helpful. Include https:// if you know the full address.</small>
                </div>
              )}

              <div className="form-field"><label htmlFor="service">What do you need help with? *</label><select id="service" {...form.register('service')} aria-invalid={Boolean(fieldError('service'))}><option value="">Select a service</option>{services.map((service) => <option value={service.slug} key={service.slug}>{service.title}</option>)}<option value="not-sure">I’m not sure yet</option></select>{fieldError('service') && <small className="field-error">{fieldError('service')}</small>}</div>

              <div className="form-fields-two">
                <div className="form-field"><label htmlFor="budget">Budget range</label><select id="budget" {...form.register('budget')}><option value="">Choose if known</option><option>Under ₦100,000</option><option>₦100,000–₦300,000</option><option>₦300,000–₦750,000</option><option>₦750,000+</option><option>Prefer to discuss</option></select></div>
                <div className="form-field"><label htmlFor="timeline">Ideal timeline</label><select id="timeline" {...form.register('timeline')}><option value="">Choose if known</option><option>As soon as possible</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Flexible</option></select></div>
              </div>

              <div className="form-field"><label htmlFor="message">{isWebsiteReview ? 'What would you like to improve? *' : 'What are you hoping to achieve? *'}</label><textarea id="message" rows={5} placeholder={isWebsiteReview ? 'Tell us what feels difficult or what you want visitors to do…' : 'Tell us about the project, what you have tried, and what a good outcome would look like…'} {...form.register('message')} aria-invalid={Boolean(fieldError('message'))} />{fieldError('message') && <small className="field-error">{fieldError('message')}</small>}</div>

              <label className="consent-field"><input type="checkbox" {...form.register('consent')} /><span>I agree that Growthpro Solutions may contact me about this enquiry. *</span></label>
              {fieldError('consent') && <small className="field-error consent-error">{fieldError('consent')}</small>}

              <button type="submit" className="button button-primary form-submit" disabled={form.formState.isSubmitting}>
                {isWebsiteReview ? 'Request a website review' : 'Prepare my enquiry'} <ArrowRight size={16} />
              </button>
              {fallbackNotice && <div className="form-success" role="status">Your email app should open with your enquiry prepared. Send the email to complete your request. If it does not open, contact us at growthprosolutions@gmail.com.</div>}
              <p className="form-legal-note">This form uses your default email application and does not send or store information on this website.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
