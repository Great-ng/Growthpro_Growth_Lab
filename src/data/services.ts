import {
  Code2, Megaphone, Palette, Headset, GraduationCap, ShoppingBag,
} from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    slug: 'web-development', number: '01', title: 'Web Development', shortTitle: 'Web', icon: Code2,
    eyebrow: 'BUILD A BETTER DIGITAL HOME',
    description: 'Responsive websites and useful web experiences built around your goals, your audience and the next action you want visitors to take.',
    longDescription: 'Turn your digital presence into a clear, credible experience. From a first business website to a focused landing page or a tailored web application, the work starts with the people who will use it.',
    tags: ['Business websites', 'Landing pages', 'React & TypeScript'],
    outcomes: ['A clear online presence', 'Responsive experiences across devices', 'A simpler path from visit to enquiry'],
    deliverables: ['Discovery and content structure', 'Responsive page design and development', 'Basic technical SEO foundations', 'Launch checklist and handover'],
    cta: 'Discuss a website project',
  },
  {
    slug: 'digital-marketing', number: '02', title: 'Digital Marketing', shortTitle: 'Marketing', icon: Megaphone,
    eyebrow: 'BE SEEN BY THE RIGHT PEOPLE',
    description: 'Thoughtful campaigns, content planning and social media strategy designed to make your brand more visible and memorable.',
    longDescription: 'Stop guessing what to post next. Bring your content, campaign messages and calls to action together around a consistent marketing direction that serves real business goals.',
    tags: ['Content strategy', 'Social media', 'Lead generation'],
    outcomes: ['More consistent publishing', 'Messaging with a clear purpose', 'Better alignment between content and business goals'],
    deliverables: ['Audience and channel planning', 'Campaign concepts and content calendar', 'Captions and creative direction', 'Performance review framework'],
    cta: 'Plan my marketing',
  },
  {
    slug: 'brand-design', number: '03', title: 'Design & Brand Assets', shortTitle: 'Branding', icon: Palette,
    eyebrow: 'LOOK AS GOOD AS YOUR WORK',
    description: 'Visual identity systems and marketing assets that make your brand feel consistent wherever customers encounter it.',
    longDescription: 'Build recognition with a visual language that is useful, repeatable and aligned with how you want people to experience your business.',
    tags: ['Brand identity', 'Social graphics', 'Marketing assets'],
    outcomes: ['More consistent visual communication', 'Professional, reusable assets', 'A clearer brand presentation'],
    deliverables: ['Visual direction and colour palette', 'Typography and layout guidance', 'Social media design assets', 'Brand usage notes'],
    cta: 'Strengthen my brand',
  },
  {
    slug: 'virtual-assistant', number: '04', title: 'Virtual Assistant Services', shortTitle: 'Virtual Assistant', icon: Headset,
    eyebrow: 'MAKE ROOM FOR IMPORTANT WORK',
    description: 'Practical remote support for repetitive administrative tasks, scheduling, inbox organisation and customer follow-ups.',
    longDescription: 'Free up attention for the work only you can do. Define recurring tasks, organise handovers and get dependable administrative support shaped around your workflow.',
    tags: ['Admin support', 'Inbox & scheduling', 'Customer follow-ups'],
    outcomes: ['A more organised daily workflow', 'Less time spent on repeatable admin', 'Clearer task ownership and follow-up'],
    deliverables: ['Task and workflow discovery', 'Inbox and calendar support options', 'Data entry and document organisation', 'Follow-up and reporting routines'],
    cta: 'Request a Task-Blast session',
  },
  {
    slug: 'academic-support', number: '05', title: 'Academic Writing Guidance', shortTitle: 'Academic Guidance', icon: GraduationCap,
    eyebrow: 'MOVE FORWARD WITH CLARITY',
    description: 'Ethical research guidance, structure reviews, referencing, editing and formatting support for students and researchers.',
    longDescription: 'Make the research process easier to navigate with practical feedback on structure, academic presentation and next steps. Support is designed to strengthen the learner’s own work.',
    tags: ['Research guidance', 'Editing', 'Referencing'],
    outcomes: ['A clearer research structure', 'More consistent formatting and referencing', 'Actionable next steps for independent work'],
    deliverables: ['Research topic and outline review', 'Chapter structure guidance', 'Citation and formatting checklist', 'Proofreading and editing options'],
    cta: 'Request a structure review',
  },
  {
    slug: 'shopify-optimisation', number: '06', title: 'Shopify Optimisation', shortTitle: 'Shopify', icon: ShoppingBag,
    eyebrow: 'MAKE EVERY STORE VISIT COUNT',
    description: 'Theme customisation, mobile usability improvements and practical Shopify store reviews, including Liquid development support.',
    longDescription: 'Help your store offer a smoother shopping experience. Identify friction in navigation, product presentation and mobile layouts, then prioritise improvements that make sense for your shop.',
    tags: ['Theme customisation', 'Liquid support', 'Store reviews'],
    outcomes: ['A clearer shopping journey', 'More consistent mobile experience', 'A prioritised list of store improvements'],
    deliverables: ['Store experience review', 'Theme and section customisation', 'Responsive layout improvements', 'Performance and usability recommendations'],
    cta: 'Request a Shopify review',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
