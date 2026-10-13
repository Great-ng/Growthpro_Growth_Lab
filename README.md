# Growthpro Growth Lab

A responsive, multi-page React + TypeScript portfolio and lead-generation website for Growthpro Solutions.

## Features

- React + TypeScript + Vite
- React Router DOM with dedicated service routes and a custom 404 page
- Tailwind CSS v4 theme tokens plus a custom responsive design system
- Responsive navigation and layout for desktop, tablet and mobile
- Growthpro Solutions logo included at `public/growthpro-logo.png`
- Six service pages: Web Development, Digital Marketing, Design & Brand Assets, Virtual Assistant Services, Academic Writing Guidance, and Shopify Optimisation
- Interactive Growth Diagnostician with typed recommendations
- Portfolio category filters and clearly labelled concept projects
- Interactive demonstrations for responsive websites, content planning, branding palettes, task organisation, academic planning and Shopify storefronts
- Contact form with Zod validation and React Hook Form
- SEO metadata, Open Graph tags, favicon, robots.txt and a sitemap template
- Reduced-motion support, keyboard focus styles, labels and semantic structure
- No backend or paid API required to run the frontend

## Technology stack

- React 19
- TypeScript 7
- Vite 8
- React Router DOM 7
- Tailwind CSS 4 using its official Vite plugin
- Motion for React
- Lucide React
- React Hook Form + Zod
- React Helmet Async

Package versions are pinned in `package.json`. Generate `package-lock.json` by running `npm install` in an environment with npm registry access. The current build environment could not reach the package registry, so a lockfile could not be generated here.

## Requirements

- Node.js 22.12+ recommended for the current Vite toolchain
- npm 9+

## Run locally

1. Extract the project ZIP.
2. Open the project directory in VS Code or a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Visit the local address printed by Vite, usually `http://localhost:5173`.

## Type checking and production build

```bash
npm run typecheck
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
public/
  favicon.svg
  growthpro-logo.png
  growthpro-logo-trim.png
  growthpro-mark.png
  robots.txt
  sitemap.xml
src/
  components/    Reusable layout, UI, demo and metadata components
  data/          Typed service and portfolio content
  pages/         Route-level page components
  types/         Shared TypeScript types
  App.tsx        Application route map
  main.tsx       React entry point
  styles.css     Tailwind directives and responsive design system
```

## Routes

- `/`
- `/services`
- `/services/web-development`
- `/services/digital-marketing`
- `/services/brand-design`
- `/services/virtual-assistant`
- `/services/academic-support`
- `/services/shopify-optimisation`
- `/growth-diagnostician`
- `/portfolio`
- `/about`
- `/contact`
- `*` displays a custom 404 page

## Customisation

- The exact original logo is preserved as `public/growthpro-logo.png`; the trimmed full-logo and mark files are derived by removing transparent canvas space only. Update these assets and the `Logo` component together if the brand artwork changes. The About page uses the full logo artwork.
- Edit service descriptions and deliverables in `src/data/services.ts`.
- Edit illustrative project cards in `src/data/projects.ts`.
- Change Tailwind design tokens in the `@theme` block at the top of `src/styles.css` and edit the CSS variables below it.
- The sitemap currently uses `https://www.growthprosolutions.com` as a placeholder domain. Replace it with the actual deployed domain before publication.

## Growth Diagnostician website review enquiry

When a visitor selects “My website needs work”, the recommendation highlights Web Development and Shopify Optimisation. The primary CTA is “Request a website review”. It opens the contact page with the recommended service preselected, adds Shopify as related support, and pre-fills the email message with the diagnostician context. Visitors may add their site URL and the main issue they want to improve. The form prepares an email using the visitor's default email app; it does not run a live scan or store submissions. See `docs/website-review-enquiry-flow.md` for the copy and step-by-step flow.

## Contact form behaviour

The contact form validates fields in the browser using React Hook Form and Zod, then prepares a message via the visitor's default email application. It does not submit to a backend or store data. For stored enquiries, connect a secure server endpoint or a hosted form provider and update the form submit handler. Do not place private API keys in client-side code.

## Demo and portfolio transparency

The Growth Diagnostician is a guided recommendation tool, not a crawler or live website audit. Dashboard numbers and project screens are illustrative where shown. Task organiser changes live only in the current page state. The Shopify store is a front-end concept and does not process payments or connect to a Shopify store. No client testimonials or performance claims are invented.

## Deployment

### Vercel

1. Push the extracted project to a Git repository.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Enable SPA route fallback if needed. Vercel's Vite preset usually supports common single-page app routing; otherwise add the provider's rewrite configuration so routes fall back to `index.html`.

### Netlify

1. Push the extracted project to a Git repository and import it in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. The included `public/_redirects` file ensures route requests fall back to the SPA entry point.

## Browser and accessibility notes

The layout includes keyboard focus states, semantic controls and support for reduced-motion preferences. For final public release, complete real-device QA, content review, domain verification and any legal/privacy pages appropriate to the business.
