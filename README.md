# Celine de Graaf — Portfolio

Personal portfolio for remote entry-level software development and AI/LLM opportunities.

The site presents my current learning path, selected software projects and a documented case study for FamilyOS. FamilyOS is an active development project and is not presented as production-ready.

## Built with

- React and TypeScript
- Next.js App Router
- Responsive CSS with light and dark modes
- Interactive playground components

## Local development

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm run dev
```

Then open the local address shown in the terminal.

## Build

```bash
pnpm run build
```

## Status

The portfolio and the projects described in it continue to evolve. Project labels distinguish active development, coursework and learning projects.

## Freelance services

`/services` introduces Websites, Apps & Digital Design to Dutch-speaking business owners. The homepage remains focused on software employment and links to this separate services page.

The overview serves business clients in the Netherlands and Belgium and leads to four focused pages:

- `/services/websites`: new websites and redesign, with website prices.
- `/services/software-apps`: custom software, apps and SaaS development for businesses and startups, quoted per project.
- `/services/socialmedia-design`: social-media graphics and flyers, with design prices.
- `/services/onderhoud`: optional website maintenance and content updates, with monthly packages.

Prices and monthly packages are proposals with explicit scope; a quote establishes the final agreement. Software/SaaS hosting and support are scoped separately from website maintenance. The contact action opens an email draft; it does not submit or store an enquiry.

Commercial assumptions, pricing rationale and remaining publication requirements are in [docs/dienstverlening-en-tarieven.md](docs/dienstverlening-en-tarieven.md). `/services/voorwaarden` and `/services/privacy` are clearly labeled, non-indexable drafts pending business details and legal/privacy review. The owner's three completed websites will be showcased later; no sample client projects are included now.

Before publishing changes, run `pnpm lint`, `pnpm exec tsc --noEmit` and `pnpm build`, and inspect `/`, `/services` and the four detail routes on desktop and mobile. Root fonts currently use Google Fonts during the build, which requires network access.
