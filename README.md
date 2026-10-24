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

The Dino game uses shared logical physics and collision bounds, independent of screen width and emoji rendering. Run `pnpm test:dino` for jump, collision, duck, pause and frame-rate regression checks. Keyboard input is scoped to the game; leaving its playground tab pauses it.

Project cards 02–05 open an animated learning note with keyboard and touch controls. FamilyOS keeps its documented case-study link. The dialogs respect reduced motion and restore focus when closed.

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

## Customer experience update — 24 October 2026

- `/services/voorbeelden` contains labelled interface demos and fictional design studies, not customer results.
- `/services/contact` prepares an enquiry locally. It does not submit to a backend, persist personal data or confirm a calendar booking. The user sends the email themselves. Connect a delivery provider and verify the associated privacy arrangements before claiming direct submission.
- `/en/services` is an English service overview with an English enquiry flow. Detailed package pages and draft legal documents remain Dutch.
- The homepage has optional Creative Mode (local browser storage) and a voluntary guided tour. Reduced motion disables automatic playback. Pointer, keyboard and touch-based interruption are supported.
- Package comparison describes the offer basis; exact page counts, feedback rounds and scope are agreed in the quote.
- The sitemap uses the known production domain. Robots block non-production deployments; draft legal pages remain noindex. Update the domain configuration if a custom domain is adopted.
- Company identity, definitive legal documents, approved customer work, enquiry delivery and confirmed calendar booking remain launch dependencies. Do not represent these as complete.

Validation for this update: production build and TypeScript pass; targeted lint passes. Browser checks covered 320px, 390px and 1440px layouts, enquiry preparation without transmission, demo controls, theme switching, sticker keyboard movement and persistence, modal Escape, mobile menus, reduced-motion tour and automatic-tour interruption. Physical-device testing and an independent accessibility audit are not claimed.
