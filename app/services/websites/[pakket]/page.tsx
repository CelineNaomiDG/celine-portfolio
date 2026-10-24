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
      <p className={styles.note}>De sterren geven de omvang aan, geen kwaliteitsbeoordeling. Alle trajecten krijgen dezelfde kwaliteitszorg.</p>
    </PageIntro>
    <section className={`${styles.section} ${styles.shell}`} aria-labelledby="beeld-title">
      <SectionHeading id="beeld-title">Van idee naar een duidelijke opbouw.</SectionHeading>
      <div className={styles.packageIllustration}>
        <div className={styles.browserSketch} aria-hidden="true"><div className={styles.browserBar}>● ● ●</div><div className={styles.sketchHero}><span>{item.name}</span><strong>{detail.outcome}</strong><span className={styles.sketchButton}>{detail.level === 5 ? 'Bekijk het plan' : 'Neem contact op'} ↗</span></div><div className={styles.sketchTiles}>{detail.structure.slice(1,4).map(s => <span key={s}>{s}</span>)}</div></div>
        <div><p className={styles.eyebrow}>Voorbeeld van de opbouw</p><h3>{detail.outcome}</h3><ol className={styles.structureList}>{detail.structure.map(s => <li key={s}>{s}</li>)}</ol><p className={styles.note}>Schematisch voorbeeld; geen vast ontwerp, klantproject of definitieve pagina- of functielijst.</p></div>
      </div>
    </section>
    <section id="inhoud-pakket" className={styles.softBand} aria-labelledby="pakket-title"><div className={`${styles.section} ${styles.shell}`}>
      <SectionHeading id="pakket-title">Wat hoort erbij, wat spreken we apart af?</SectionHeading>
      <p>Dit is de beschreven basis voor je voorstel. De offerte bepaalt de precieze inhoud, aantallen, feedbackmomenten en totaalprijs.</p>
      <div className={styles.scopeCards}>
        <article><p className={styles.eyebrow}>✓ Basis van dit traject</p><h3>Dit werken we uit</h3><ul>{detail.included.map(s => <li key={s}>{s}</li>)}</ul></article>
        <article><p className={styles.eyebrow}>＋ Alleen na afspraak</p><h3>Mogelijke uitbreidingen</h3><ul>{detail.optional.map(s => <li key={s}>{s}</li>)}</ul><p className={styles.note}>Niet automatisch inbegrepen. Eventuele meerprijs staat vooraf in de offerte.</p></article>
        <article><p className={styles.eyebrow}>↗ Afzonderlijke scope</p><h3>Waar de grens ligt</h3><p>{detail.boundary}</p></article>
      </div>
      <div className={styles.scopeBox}><h3>De kwaliteitsbasis bij een bouwopdracht</h3><p>Een afgesproken structuur, ontwerp voor mobiel en desktop, implementatie, controle van navigatie en contactfuncties, paginatitels, beschrijvingen en duidelijke koppen. Ik controleer ook toetsenbordbediening, labels, contrast en afbeeldingen binnen de geleverde pagina’s. Je ontvangt uitleg en de afgesproken overdracht.</p><p>Voor Enterprise volgt een eventuele bouwopdracht pas na de verkenning. Technische SEO is geen garantie op zoekposities of omzet.</p></div>
    </div></section>
    <section id="werkwijze" className={`${styles.section} ${styles.shell}`} aria-labelledby="werkwijze-title">
      <SectionHeading id="werkwijze-title">Je kijkt mee, van begin tot oplevering.</SectionHeading>
      <ol className={styles.simpleSteps}>{[
        ['Intake & voorstel', 'We bespreken je doel, inhoud en functies. Je krijgt een afgebakend voorstel met prijs, planning en afhankelijkheden. Bij Enterprise beginnen we met een apart geoffreerde verkenning.'],
        ['Ontwerp & feedback', 'Bij een bouwtraject beoordeel je structuur en vormgeving op afgesproken momenten. Je verzamelt feedback; aantallen rondes leggen we vooraf vast.'],
        ['Bouw, controle & overdracht', 'Ik bouw en controleer de afgesproken website. Na je beoordeling plannen we de publicatie en krijg je uitleg over toegang en beheer.'],
      ].map(([title,text],i) => <li key={title}><span className={styles.stepLabel}>Stap {i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <div className={styles.scopeBox}><h3>Welke tools en techniek gebruik ik?</h3><p>Voor websites gebruik ik Next.js en React met TypeScript en eigen componenten. Git en GitHub houden wijzigingen bij. Een aparte preview, bijvoorbeeld via Vercel, maakt het mogelijk om de site vóór publicatie te bekijken.</p><p>Een formulierdienst, CMS, boekingstool of betaalprovider kies ik op basis van je wensen, budget en benodigde toegang. Die keuze en eventuele abonnementskosten staan in de offerte. Een specifiek platform of betaalde tool is niet automatisch inbegrepen.</p></div>
    </section>
    <section id="investering" className={styles.paperBand} aria-labelledby="investering-title"><div className={`${styles.section} ${styles.shell}`}>
      <SectionHeading id="investering-title">Je investering, zonder verborgen verwachtingen.</SectionHeading>
      <div className={styles.scopeCards}><article><h3>Eenmalig project</h3><p className={styles.price}><strong>{item.price}</strong><span>exclusief btw</span></p><p>{item.basis}</p><p>De offerte bevat één vaste totaalprijs voor één afgesproken omvang.</p></article><article><h3>Externe kosten</h3><p>Hosting, domeinnaam, licenties en betaalde tools staan apart vermeld, inclusief of ze eenmalig of terugkerend zijn. Teksten, fotografie, video en merkontwikkeling zijn aparte opdrachten tenzij uitdrukkelijk opgenomen.</p></article><article><h3>Na oplevering</h3><p>Onderhoud en nieuwe functionaliteit spreken we apart af. Een abonnement is niet verplicht. Herstel van werk dat afwijkt van de gemaakte afspraken is iets anders dan een nieuwe wens.</p><Link className={styles.textLink} href="/services/onderhoud">Bekijk onderhoud ↗</Link></article></div>
      <div className={styles.scopeBox}><h3>Hoe betaal je mijn opdracht?</h3><p>Je ontvangt een factuur. De betaalwijze, betaalmomenten en betalingstermijn leggen we in de offerte vast. Het huidige conceptvoorstel is 40% bij opdracht en 60% na de afgesproken oplevering; een grotere opdracht kan andere mijlpalen krijgen als we die samen afspreken.</p><p>Er is nog geen standaard aanbod voor maandelijkse financiering of betalen met iDEAL of creditcard aan mij. Betalingen die bezoekers op jouw website doen zijn een aparte functie; die bespreken we hieronder.</p></div>
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
