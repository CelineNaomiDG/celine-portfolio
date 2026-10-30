import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { websitePackages } from '../../website-packages';
import { packageDetails } from '../../package-details';
import PackageStars from '../../package-stars';
import { ContactSection, FAQ, PageIntro, SectionHeading, ServicesShell } from '../../services-shared';
import styles from '../../services.module.css';

type Props = { params: Promise<{ pakket: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return websitePackages.map(p => ({ pakket: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pakket } = await params;
  const item = websitePackages.find(p => p.slug === pakket);
  return { title: `${item?.name ?? 'Websitetraject'} | Celine de Graaf`, description: item?.text };
}
export default async function PackagePage({ params }: Props) {
  const { pakket } = await params;
  const item = websitePackages.find(p => p.slug === pakket);
  const detail = packageDetails.find(p => p.slug === pakket);
  if (!item || !detail) notFound();
  return <ServicesShell current="/services/websites">
    <PageIntro label="Websitetraject" title={item.name} emphasis="Dit kun je verwachten."
      links={[{ href: '#inhoud-pakket', label: 'Wat je krijgt' }, { href: '#werkwijze', label: 'Werkwijze & tools' }, { href: '#investering', label: 'Kosten & betaling' }]}>
      <PackageStars level={detail.level} />
      <p>{item.text}</p><p>{detail.audience}</p>
      <p className={styles.price}><strong>{item.price}</strong><span>excl. btw · op offerte</span></p>
      <div className={styles.actionRow}><Link className={styles.primaryLink} href={`/services/contact?samenstelling=${encodeURIComponent(JSON.stringify({service:"website",website:item.slug}))}`}>Bespreek dit traject ↗︎</Link><Link className={styles.textLink} href={`/services/prijsindicatie?pakket=${item.slug}`}>Stel dit traject samen</Link></div>
    </PageIntro>
    <section className={`${styles.section} ${styles.shell}`} aria-labelledby="beeld-title">
      <SectionHeading id="beeld-title">Van idee naar een duidelijke opbouw.</SectionHeading>
      <div className={styles.packageIllustration}>
        <div className={styles.browserSketch} aria-hidden="true"><div className={styles.browserBar}>● ● ●</div><div className={styles.sketchHero}><span>{item.name}</span><strong>{detail.outcome}</strong><span className={styles.sketchButton}>{detail.level === 5 ? 'Bekijk het plan' : 'Neem contact op'} ↗︎</span></div><div className={styles.sketchTiles}>{detail.structure.slice(1,4).map(s => <span key={s}>{s}</span>)}</div></div>
        <div><p className={styles.eyebrow}>Voorbeeld van de opbouw</p><h3>{detail.outcome}</h3><ol className={styles.structureList}>{detail.structure.map(s => <li key={s}>{s}</li>)}</ol><p className={styles.note}>Schematisch voorbeeld; geen vast ontwerp, klantproject of definitieve pagina- of functielijst.</p></div>
      </div>
    </section>
    <section id="inhoud-pakket" className={styles.softBand} aria-labelledby="pakket-title"><div className={`${styles.section} ${styles.shell}`}>
      <SectionHeading id="pakket-title">Wat hoort erbij, wat spreken we apart af?</SectionHeading>
      <p>Dit is de beschreven basis voor je voorstel. De offerte bepaalt de precieze inhoud, aantallen, feedbackmomenten en totaalprijs.</p>
      <div className={styles.scopeCards}>
        <article><p className={styles.eyebrow}>✓ Basis van dit traject</p><h3>Dit werken we uit</h3><ul>{detail.included.map(s => <li key={s}>{s}</li>)}</ul></article>
        <article><p className={styles.eyebrow}>＋ Alleen na afspraak</p><h3>Mogelijke uitbreidingen</h3><ul>{detail.optional.map(s => <li key={s}>{s}</li>)}</ul><p className={styles.note}>Niet automatisch inbegrepen. Eventuele meerprijs staat vooraf in de offerte.</p></article>
        <article><p className={styles.eyebrow}>↗︎ Afzonderlijke scope</p><h3>Waar de grens ligt</h3><p>{detail.boundary}</p></article>
      </div>
      <details className={styles.detailDisclosure}><summary>De kwaliteitsbasis bij elke bouwopdracht</summary><p>Ontwerp voor mobiel en desktop, implementatie, controle van navigatie en afgesproken contactfuncties, paginatitels en beschrijvingen, toetsenbordbediening, labels en overdracht. Technische SEO is geen garantie op zoekposities. Bij Enterprise volgt een bouwopdracht pas na de verkenning.</p></details>
    </div></section>
    <section id="werkwijze" className={`${styles.section} ${styles.shell}`} aria-labelledby="werkwijze-title">
      <SectionHeading id="werkwijze-title">Je kijkt mee, van begin tot oplevering.</SectionHeading>
      <ol className={styles.simpleSteps}>{[
        ['Intake & voorstel', 'We bespreken je doel, inhoud en functies. Je krijgt een afgebakend voorstel met prijs, planning en afhankelijkheden. Bij Enterprise beginnen we met een apart geoffreerde verkenning.'],
        ['Ontwerp & feedback', 'Bij een bouwtraject beoordeel je structuur en vormgeving op afgesproken momenten. Je verzamelt feedback; aantallen rondes leggen we vooraf vast.'],
        ['Bouw, controle & overdracht', 'Ik bouw en controleer de afgesproken website. Na je beoordeling plannen we de publicatie en krijg je uitleg over toegang en beheer.'],
      ].map(([title,text],i) => <li key={title}><span className={styles.stepLabel}>Stap {i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <details className={styles.detailDisclosure}><summary>Tools, techniek & toegang</summary><p>Next.js, React en TypeScript vormen de technische basis. GitHub houdt wijzigingen bij; via een aparte preview kijk je mee. Een CMS, formulierdienst of betaalprovider kiezen we op basis van je wensen. Kosten, accounts en de overdracht staan vooraf in de offerte.</p></details>
    </section>
    <section id="investering" className={styles.paperBand} aria-labelledby="investering-title"><div className={`${styles.section} ${styles.shell}`}>
      <SectionHeading id="investering-title">Je investering, zonder verborgen verwachtingen.</SectionHeading>
      <div className={styles.scopeCards}><article><h3>Eenmalig project</h3><p className={styles.price}><strong>{item.price}</strong><span>exclusief btw</span></p><p>{item.basis}</p><p>De offerte bevat één vaste totaalprijs voor één afgesproken omvang.</p></article><article><h3>Externe kosten</h3><p>Hosting, domeinnaam, licenties en betaalde tools staan apart vermeld, inclusief of ze eenmalig of terugkerend zijn. Teksten, fotografie, video en merkontwikkeling zijn aparte opdrachten tenzij uitdrukkelijk opgenomen.</p></article><article><h3>Na oplevering</h3><p>Onderhoud en nieuwe functionaliteit spreken we apart af. Een abonnement is niet verplicht. Herstel van werk dat afwijkt van de gemaakte afspraken is iets anders dan een nieuwe wens.</p><Link className={styles.textLink} href="/services/onderhoud">Bekijk onderhoud ↗︎</Link></article></div>
      <details className={styles.detailDisclosure}><summary>Factuur, betaalmomenten & termijnen</summary><p>Je ontvangt een factuur. Het huidige conceptvoorstel is 40% bij opdracht en 60% na afgesproken oplevering. Bij grotere trajecten kunnen we andere mijlpalen afspreken. De offerte bepaalt betaalwijze, termijnen en totale prijs. Betalen in maandelijkse financiering is geen standaardaanbod.</p></details>
    </div></section>
    <FAQ items={[
      ['Kunnen mijn klanten via iDEAL of creditcard betalen?', 'Dat kunnen we als uitbreiding onderzoeken met een geschikte betaalprovider. Een betaalpagina, webshop of reservering met betaling is niet standaard inbegrepen. Landen, betaalmethoden, transactiekosten, accounts en technische inrichting leggen we apart vast.'],
      ['Kan ik afspraken of reserveringen laten boeken?', 'Een link naar een bestaande boekingsdienst kan iets anders vragen dan een volledig eigen reserveringssysteem. We bespreken agenda’s, beschikbaarheid, bevestigingen en eventuele betalingen voordat we een prijs afspreken.'],
      ['Kan ik zelf teksten en projecten aanpassen?', 'Ja, als een CMS onderdeel is van je offerte. We spreken af welke inhoud je kunt bewerken, welke toegang je krijgt en hoeveel eerste inhoudsinvoer inbegrepen is.'],
      ['Kan mijn website Nederlands en Engels krijgen?', 'Meertaligheid is een mogelijke uitbreiding. We spreken talen, vertalingen, aparte taal-URL’s en beheer af; dit is niet automatisch inbegrepen.'],
      ['Zijn WhatsApp, formulieren en analytics inbegrepen?', 'Contactlinks en formulieren volgen de afgesproken pakketbasis. Analytics, tracking, uploads en koppelingen worden afzonderlijk afgestemd. Tracking staat niet automatisch aan.'],
      ['Wat lever ik aan en hoe lang duurt het?', 'Je levert de afgesproken teksten, logo en beelden aan en zorgt voor tijdige feedback. We plannen op basis van de inhoud, omvang en beschikbare capaciteit; er is geen algemene vaste levertijd.'],
      ['Wat als ik onderweg iets extra’s wil?', 'Je krijgt eerst uitleg over de gevolgen voor kosten en planning. Extra werk start pas na jouw akkoord. De afgesproken basis wordt niet stilzwijgend duurder.'],
    ]} />
    <section className={`${styles.section} ${styles.shell}`} aria-label="Andere trajecten"><Link className={styles.textLink} href="/services/websites#tarieven">← Vergelijk alle vijf trajecten</Link></section>
    <ContactSection title={`Past ${item.name} bij jouw project?`} text="Vertel wat je wilt bereiken en welke inhoud je al hebt. Dan bepalen we samen de passende omvang." subject={`Kennismaking over ${item.name}`} />
  </ServicesShell>;
}
