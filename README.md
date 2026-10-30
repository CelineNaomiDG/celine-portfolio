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

The Dino game uses shared logical physics and collision bounds, independent of screen width and rendering. Run `pnpm test:dino` for jump, collision, duck, pause and frame-rate regression checks. Keyboard input is scoped to the game; leaving its playground tab pauses it.

Project cards 02–05 open an animated learning note with keyboard and touch controls. FamilyOS keeps its documented case-study link. The dialogs respect reduced motion and restore focus when closed.

## Freelance services

`/services` introduces Websites, Apps & Digital Design to Dutch-speaking business owners. The homepage remains focused on software employment and links to this separate services page.

The overview serves business clients in the Netherlands and Belgium and leads to four focused pages:

- `/services/websites`: new websites and redesign, with website prices.
- `/services/software-apps`: custom software, apps and SaaS development for businesses and startups, quoted per project.
- `/services/socialmedia-design`: social-media graphics and flyers, with design prices.
- `/services/onderhoud`: optional website maintenance and content updates, with monthly packages.

Prices and monthly packages are proposals with explicit scope; a quote establishes the final agreement. Software/SaaS hosting and support are scoped separately from website maintenance. The contact action opens an email draft; it does not submit or store an enquiry.

Commercial assumptions, pricing rationale and remaining publication requirements are in [docs/dienstverlening-en-tarieven.md](docs/dienstverlening-en-tarieven.md). `/services/voorwaarden` and `/services/privacy` are clearly labeled, non-indexable drafts pending business details and legal/privacy review. Published visual studies are labelled concepts; customer work requires permission before publication.

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

## Services navigation and project configurator (October 2026)

- Service categories share one responsive menu, with explicit support, pricing, process and digital collection routes. Existing service URLs remain valid.
- `/services/prijsindicatie` offers a client-side configurator with no registration, analytics or personal data collection. Known one-off and recurring costs are kept separate. Unpriced additions and external costs remain explicit; the displayed amount is not falsely presented as an all-in price.
- `app/services/pricing-data.ts` owns numeric website, design and maintenance amounts, validates selection identifiers and builds the enquiry summary. These are the existing public rates; proposed monthly social content packages are **not** published as approved prices.
- Configurator choices are passed to `/services/contact` in an allowlisted, length-limited URL parameter. Prices are recomputed from local data, never accepted from a URL. The existing email preparation form includes the summary and can preselect an introduction request. No enquiry is sent until the visitor sends their prepared email.
- `/services/zichtbaarheid` describes bounded website improvements. Marketing/advertising management, on-location photography and complex ERP implementations are not represented as existing staffed services.
- Industry examples are original code-based visual studies, clearly labelled as fictional concepts, not client work or conversion results.
- `/services/producten` is a truthful collection announcement. There is no product inventory, checkout, order or payment processing yet. The owner has not selected products or prices.

### Digital-product launch prerequisites

Once the owner chooses a product: define a useful deliverable, preview, format, compatibility, licence, support and updates; set a price and applicable VAT treatment; select a payment provider and configure credentials privately; implement verified checkout, payment webhooks and protected delivery; test failure, duplicate-event, refund and delivery flows; complete the business identity, privacy and applicable sale/withdrawal terms before accepting purchases. No live paid service or subscription has been provisioned by this change.

### Verification

`pnpm test:pricing` checks recurring versus one-off amounts, unpriced extras, approved prices, invalid URL inputs and summary round-trips. Run `pnpm build` and lint after changes. Browser checks cover new navigation, mobile layouts, calculator selections and the enquiry handoff. Direct form delivery and calendar booking still require the owner's chosen provider/account configuration; the current interface continues to describe its email-draft behaviour accurately.

## Social media clarification

The content page separates design-only delivery, posts with copy, and recurring content/publication. Existing design rates remain unchanged. Content and recurring work are quoted, never incorrectly totalled as the €225 design set. The visible €405 calculation is an explicitly illustrative budget, not a subscription. See `docs/social-media-market-review.md` for the source comparison.

## Release checks — 30 October 2026

The runtime is pinned to Next.js 16.4.3 and React 19.2.9. Unused deployment/build scaffolding and a superseded dinosaur sprite were removed. Patched indirect packages are pinned in `pnpm-workspace.yaml`; install with the declared pnpm version and frozen lockfile.

Validation: production build, seven pricing tests and 21 Dino tests pass. Browser checks cover 320/390/1440px layouts, the portfolio-to-services route, content presets, the quote summary, links/anchors and production robots. The dependency audit reported zero known vulnerabilities after updates, including development dependencies. Pattern-based credential checks of current tracked files and 200 historical blobs found no matching credentials. This is a bounded automated check, not a penetration test or assurance that no unknown vulnerabilities exist. Repository history was preserved.

## Creative controls and UGC — 30 October 2026

Creative Mode starts without stock stickers. Visitors can add their own text/emoji or local PNG, JPG, WebP, SVG and GIF images, then move, resize, rotate and delete them. Stickers are a viewport overlay and follow scrolling. A colour/black-and-white control is separate from the light/dark theme. Disabling Creative Mode hides stickers; service pages never render the sticker editor.

SVG input is restricted to static shapes and rasterised without embedding its document. GIF data remains animated. Image size, sticker count and local-storage budget are bounded. Files stay in the visitor’s browser. Existing custom stickers migrate, while the three former preset labels are removed. The mobile portfolio menu follows the theme button on the right and supports Escape and outside dismissal. Interface symbols use SVG or explicit text presentation.

`/services/ugc` describes product content and app demos on enquiry. It is linked from the shared catalogue, content page and English overview, and included in the sitemap. The configurator and form preserve the selected UGC requirements without inventing a price. See `docs/ugc-aanbod.md` for scope and research. No new tracking, booking, messaging or payment integration was installed.
