# Concrete Pros of Nashville

Marketing site for Concrete Pros of Nashville, a family-owned concrete contractor serving the greater Nashville, TN metro. Built as a data-driven, programmatic-SEO Next.js (App Router) site: 13 service pages, 13 service-area pages, and a generated 13×13 matrix of service+area combination pages (169 pages), each with unique content — plus standard marketing/legal pages.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build — also the way to verify all 196 core routes generate
npm run start   # serve the production build locally
```

## Project structure

- `data/services.ts` — structured content for all 13 services (overview, problems, materials, FAQs, etc.)
- `data/areas.ts` — structured content for all 13 service areas (neighborhood character, soil/climate, verified permit authority, local FAQs)
- `data/generalFaqs.ts` — site-wide FAQ content used on the home page
- `lib/combinationContent.ts` — generates the genuinely unique intersection content (opening section, "why it matters," permitting angle, FAQs, CTA copy) for each of the 169 service×area pages from the service + area data, using deterministic per-pair template variation so pages don't read as mail-merged
- `lib/schema.ts` — JSON-LD builders (LocalBusiness, Service, FAQPage, BreadcrumbList)
- `lib/constants.ts` — single source of truth for NAP (name/address/phone), hours, and site-wide differentiators/process — every page pulls from here
- `app/[slug]/page.tsx` — resolves to either a service page or an area page depending on which dataset the slug matches
- `app/[slug]/[area]/page.tsx` — the 169 generated combination pages (`generateStaticParams` returns the full 13×13 cross product)
- `app/sitemap.ts` / `app/robots.ts` — auto-generated from the same data

## Environment variables (contact form)

The `/contact/` form posts to `app/api/contact/route.ts`. Without configuration it still accepts submissions and logs them server-side (visible in your hosting provider's function logs) so nothing is silently dropped, but **no email is actually sent** until you set:

- `RESEND_API_KEY` — API key from [Resend](https://resend.com) (or swap the route for your preferred email provider)
- `CONTACT_NOTIFY_EMAIL` — inbox that should receive estimate requests (defaults to `info@concreteprosnashville.com`)
- `CONTACT_FROM_EMAIL` — verified sending address for your Resend domain

## Before launch — confirm with the client

A few things were intentionally left as clearly-labeled placeholders rather than fabricated, per the build spec:

- **Logo**: no PNG logo file was delivered with this build. The header/footer currently use a CSS-based recreation of the described wordmark (`components/Logo.tsx`). Drop the real `concrete-pros-of-nashville-logo.png` into `public/images/` and swap it in once available.
- **Reviews**: `lib/constants.ts` (`reviewRatingPlaceholder` / `reviewCountPlaceholder`) and the testimonial cards on `/reviews/` and the home page are placeholders — no real ratings or named customer quotes were supplied, and none were fabricated. Replace with real Google Business Profile data.
- **Business hours, license/insurance numbers, years in business**: placeholders in `lib/constants.ts` — confirm real figures.
- **Financing**: no financing section was built since it wasn't confirmed the business offers it. Add one if it does.
- **`/concrete-road-construction/`**: kept per spec, but scoped honestly to private/HOA access roads and connector drives rather than implying interstate highway contracts — confirm this framing matches the business's actual work.
- **`/foundation-installation/` vs. `/slab-foundations/`**: kept as two distinct pages (broad foundation-system category vs. the specific monolithic slab-on-grade technique) — review that the distinction reads as genuinely useful rather than redundant for your market.
- **Permit authority names** (`data/areas.ts`) were verified against each jurisdiction's official site at build time, but fees and requirements change — confirm current details before quoting a customer, and re-verify before launch if much time has passed.

## Deployment

Standard Next.js App Router site — deploys cleanly to Vercel or any Node-compatible host. No special build flags required.
