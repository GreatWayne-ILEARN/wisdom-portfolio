# Wisdom Adegboyega — Portfolio

Personal portfolio built with Next.js 16.4.5 (App Router), React 19, TypeScript, Tailwind CSS 4 and lucide-react. Uses server components, with a small client component for section tracking.

## Local development

Use Node.js 24 LTS (see `.nvmrc`) and npm:

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Validation and production

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

Deploy this existing Next.js project to a compatible Node.js host. No environment variables, database or backend service is required. Geist fonts are included locally and served through next/font/local; builds do not need Google Fonts access.

Validated with Node.js 24.22.1 and 26.13.0. Production filesystem caching is disabled in next.config.ts to avoid a reproducible stale Turbopack CSS worker failure on Windows; development caching remains enabled.

## Customization

- Edit `src/data/portfolio.ts` for biography, social links, experience, projects, skills, contact copy and SEO text.
- Edit `src/app/globals.css` for colors, typography, responsive layouts and abstract CSS project illustrations. These illustrations are decorative concepts, not screenshots of the products.
- Add `public/resume.pdf` and rebuild to show the resume link automatically.
- Once the production URL is known, add `metadataBase` and `alternates.canonical` in `src/app/layout.tsx`. No canonical URL has been guessed.
- Personal Finance Hub lists the user-confirmed React, Vite and Supabase technologies in its `tech` array.
- Section components live in `src/components`; `Navigation.tsx` uses IntersectionObserver to highlight the current section. Anchor navigation also works without JavaScript.

The layout adapts from a sticky desktop introduction to a single mobile column. Includes a skip link, keyboard focus states, labeled icon links, reduced-motion support and safe external links. No tracking or contact form is included.




## Project screenshots

User-supplied screenshots are included for UEI Couriers and Personal Finance Hub. Abstract CSS previews remain the fallback for projects without screenshots; they are not product screenshots. To use a genuine screenshot, place it in `public/images/projects` and set the project's `screenshot` in `src/data/portfolio.ts` to `{ src: "/images/projects/your-file.webp", alt: "A concise description of the actual screen" }`. Supply an existing local file, not a guessed URL. Screenshots render through Next.js Image with reserved space and responsive sizing. Set `featured` to control the image-and-content layout, which becomes stacked when the content column is narrow. Existing project descriptions and destination URLs are preserved.


