import type { LucideIcon } from 'lucide-react';

export type ServiceSlug =
  | 'web-development'
  | 'digital-marketing'
  | 'brand-design'
  | 'virtual-assistant'
  | 'academic-support'
  | 'shopify-optimisation';

export interface Service {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  tags: string[];
  outcomes: string[];
  deliverables: string[];
  cta: string;
  eyebrow: string;
}

export type ProjectCategory = 'All' | 'Web' | 'Branding' | 'Marketing' | 'Operations';

export interface PortfolioProject {
  id: string;
  category: Exclude<ProjectCategory, 'All'>;
  eyebrow: string;
  title: string;
  description: string;
  metric: string;
  style: 'web' | 'brand' | 'marketing' | 'ops';
}
