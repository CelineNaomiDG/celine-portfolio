import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeButton from '@/components/theme-button';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Websites, Apps & Digital Design | Celine de Graaf',
  description:
    'Webdevelopment, redesign, apps, onderhoud en digital design voor ondernemers in Nederland en België. Ontdek de diensten en indicatieve tarieven van Celine de Graaf.',
};

const email = 'celinedegraaf.tech@gmail.com';
function enquiry(subject = 'Voorstel voor mijn bedrijf') {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hoi Celine,\n\nIk wil graag de mogelijkheden voor mijn bedrijf bespreken.\n\nGroetjes,\n')}`;
}

const services = [
  {
    id: 'webdevelopment',
    title: 'Websites & webdevelopment',
    text: 'Een nieuwe website die jouw bedrijf duidelijk presenteert. Responsive gebouwd, met een heldere structuur en technische SEO-basis zoals paginatitels en metadata.',
  },
  {
    id: 'redesign',
    title: 'Redesign',
    text: 'Je bestaande website een frisse uitstraling en logische indeling geven. We kijken naar ontwerp, gebruiksgemak en wat binnen je huidige platform mogelijk is.',
  },
  {
    id: 'apps',
    title: 'Apps & maatwerk',
    text: 'Een webapp, integratie of specifieke functie voor jouw manier van werken. Eerst brengen we de wensen en technische haalbaarheid in kaart; daarna volgt een offerte.',
  },
  {
    id: 'technisch-beheer',
    title: 'Onderhoud & technisch beheer',
    text: 'Aandacht voor je website na oplevering. Van technische controles tot kleine wijzigingen en verdere ontwikkeling, binnen een vooraf afgesproken pakket.',
  },
  {
    id: 'socialmedia-design',
    title: 'Socialmedia-design',
    text: 'Herkenbare visuals voor je sociale kanalen, passend bij je uitstraling. Je ontvangt de ontwerpen om zelf te gebruiken; plaatsing, kanaalbeheer en advertenties vallen hier niet onder.',
  },
  {
    id: 'flyers',
    title: 'Flyers & digitaal drukwerk',
    text: 'Een helder ontwerp voor je actie, dienst of evenement. Als digitaal bestand of drukklaar PDF-bestand, op basis van jouw teksten en beeldmateriaal.',
  },
];

const packages = [
  {
    title: 'One-page',
    price: '€795',
    prefix: 'vanaf',
    description: 'Een compacte website met alles op één plek.',
    features: [
      '1 pagina met maximaal 6 secties',
      'Responsive ontwerp en ontwikkeling',
      'Paginatitels, metadata en technische SEO-basis',
      'E-mail- en contactlinks',
      '1 correctieronde',
    ],
    subject: 'Voorstel — One-page website',
  },
  {
    title: 'Bedrijfswebsite',
    price: '€1.495',
    prefix: 'vanaf',
    description: 'Meer ruimte voor je bedrijf, diensten en verhaal.',
    features: [
      'Maximaal 5 inhoudspagina’s',
      'Responsive ontwerp en ontwikkeling',
      'Paginatitels, metadata en technische SEO-basis',
      '1 standaard contactformulier, na keuze van een formulierprovider',
      '2 correctierondes',
    ],
    subject: 'Voorstel — Bedrijfswebsite',
  },
  {
    title: 'Maatwerk',
    price: 'Op offerte',
    prefix: 'afgestemd op je vraag',
    description: 'Voor ideeën die meer nodig hebben dan een vaste basis.',
    features: [
      'Apps en specifieke functionaliteit',
      'Integraties met externe diensten',
      'Technische verkenning en afbakening',
      'Ontwerp, functies en planning op afspraak',
      'Prijs en correctierondes in de offerte',
    ],
    subject: 'Voorstel — Apps of maatwerk',
  },
];

const designRates = [
  [
    'Redesign',
    'vanaf €695',
    'Maximaal 3 bestaande pagina’s op hetzelfde platform, met dezelfde inhoud. Visuele en UX-vernieuwing, 1 correctieronde. Geen migratie.',
  ],
  [
    'Social visual',
    'vanaf €45',
    '1 statisch ontwerp in 1 formaat, met 1 correctieronde.',
  ],
  [
    'Social set',
    '€225',
    '6 samenhangende statische visuals, elk in 1 formaat. Inclusief 1 gezamenlijke correctieronde.',
  ],
  [
    'Flyer',
    'vanaf €95',
    '1 zijde op A5-formaat, met aangeleverde tekst en beelden. Drukklaar PDF-bestand en 1 correctieronde. Drukkosten niet inbegrepen.',
  ],
];

const maintenance = [
  {
    title: 'Basis',
    price: '€49',
    time: '30 min technisch werk',
    description:
      'Een maandelijks technisch update- en controlemoment, afgestemd op de afgesproken techniek. Inclusief controle van build, deployment en herstelpunt, plus een kort verslag.',
    detail: 'Geen inhoudelijke wijzigingen inbegrepen.',
  },
  {
    title: 'Beheer',
    price: '€99',
    time: 'Basis + 45 min wijzigingen',
    description:
      'Alles uit Basis, met daarnaast 45 minuten per maand voor kleine aanpassingen aan bestaande teksten en afbeeldingen.',
    detail:
      '30 min technisch werk en 45 min inhoudelijk werk, apart gereserveerd.',
  },
  {
    title: 'Doorontwikkeling',
    price: '€179',
    time: 'Basis + 2 uur verbeteringen',
    description:
      'Alles uit Basis, met daarnaast 2 uur per maand voor inhoudelijke wijzigingen en kleine verbeteringen aan je website.',
    detail:
      '30 min technisch werk en 2 uur wijzigingen of kleine verbeteringen, apart gereserveerd.',
  },
];

const process = [
  [
    'Kennismaking',
    'We bespreken je bedrijf, wensen, budget en planning. Samen bepalen we wat je nodig hebt.',
  ],
  [
    'Offerte',
    'Je ontvangt een voorstel met de omvang, prijs, correctierondes en afspraken. Na akkoord gaan we aan de slag.',
  ],
  [
    'Ontwerp & ontwikkeling',
    'Van structuur en uitstraling naar een werkende website of een bruikbaar ontwerp, met afgesproken feedbackmomenten.',
  ],
  [
    'Overdracht & optioneel beheer',
    'We controleren het resultaat en regelen de overdracht. Onderhoud of verdere ontwikkeling kies je alleen als dat bij je past.',
  ],
];

const questions = [
  [
    'Is een website een eenmalige aankoop of een abonnement?',
    'Ontwerp en bouw worden eenmalig geoffreerd. Er is geen verplicht onderhoudsabonnement. Domein, hosting en eventuele licenties hebben hun eigen kosten en staan los van de bouwprijs. Maandelijks onderhoud is een aparte, optionele afspraak.',
  ],
  [
    'Welke inhoud lever ik zelf aan?',
    'De vaste pakketten gaan uit van teksten, logo’s en beelden die jij aanlevert en waarvoor je de gebruiksrechten hebt. Copywriting, fotografie, beeldinkoop en een CMS zijn alleen inbegrepen als dat in de offerte staat.',
  ],
  [
    'Hoe werken correctierondes en meerwerk?',
    'Een correctieronde is één gebundelde feedbackronde binnen het afgesproken ontwerp en de afgesproken omvang. Nieuwe functies, extra pagina’s of een andere richting zijn meerwerk. Dat bespreken we vooraf, met een aparte offerte of €60 per uur na jouw akkoord, geregistreerd per 15 minuten.',
  ],
  [
    'Van wie zijn de website en de accounts?',
    'We leggen eigendom, gebruiksrechten en de overdracht vooraf vast. Domein, hosting en betaalde diensten worden waar mogelijk op jouw naam en in jouw accounts ingericht. Voor externe software, fonts of beelden blijven de bijbehorende licentievoorwaarden gelden.',
  ],
  [
    'Kun je mijn bestaande website overnemen of verhuizen?',
    'Dat bekijken we eerst technisch. Bij een externe of complexe website is een eerste audit nodig, die apart wordt geoffreerd. Het redesignpakket gaat uit van hetzelfde platform en dezelfde inhoud; migratie of herstelwerk wordt afzonderlijk afgesproken.',
  ],
  [
    'Welk onderhoudspakket past bij mij?',
    'Basis reserveert 30 minuten per maand voor technisch werk. Beheer voegt 45 minuten voor kleine tekst- en beeldwijzigingen toe. Doorontwikkeling voegt 2 uur voor wijzigingen en kleine verbeteringen toe. Grote aanpassingen vallen buiten de pakketten en worden eerst besproken.',
  ],
];

export default function ServicesPage() {
  return (
    <div lang="nl" className={styles.page}>
      <a className={styles.skipLink} href="#inhoud">
        Direct naar inhoud
      </a>
      <header className={`${styles.header} ${styles.shell}`}>
        <Link href="/" className={styles.brand}>
          Celine de Graaf<span>Websites, Apps & Digital Design</span>
        </Link>
        <nav aria-label="Hoofdnavigatie" className={styles.navigation}>
          <a href="#diensten">Diensten</a>
          <a href="#tarieven">Tarieven</a>
          <a href="#onderhoud">Onderhoud</a>
          <a href="#contact">Contact</a>
          <Link href="/" className={styles.portfolioLink}>
            Portfolio <span aria-hidden="true">↗</span>
          </Link>
          <ThemeButton language="nl" className={styles.theme} />
        </nav>
      </header>
      <main id="inhoud" tabIndex={-1}>
        <section
          className={`${styles.hero} ${styles.shell}`}
          aria-labelledby="hero-title"
        >
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Voor ondernemers in Nederland & België
            </p>
            <h1 id="hero-title">
              Websites.
              <br />
              Apps.
              <br />
              <em>Digital Design.</em>
            </h1>
            <p className={styles.heroDescription}>
              Een nieuwe website, een frisse start of een sterker digitaal
              gezicht. Ik help je met ontwikkeling, redesign, beheer en de
              visuals die jouw bedrijf herkenbaar maken.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryLink} href="#contact">
                Vraag een voorstel aan <span aria-hidden="true">↗</span>
              </a>
              <a href="#tarieven" className={styles.secondaryLink}>
                Bekijk diensten & tarieven <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <nav className={styles.serviceIndex} aria-label="Vind jouw dienst">
            <p className={styles.eyebrow}>
              Van eerste idee tot dagelijks gebruik
            </p>
            {[
              ['01', 'Bouwen', '#webdevelopment'],
              ['02', 'Vernieuwen', '#redesign'],
              ['03', 'Beheren', '#onderhoud'],
              ['04', 'Vormgeven', '#socialmedia-design'],
            ].map(([number, title, href]) => (
              <a href={href} key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
            <p className={styles.indexNote}>
              Eén aanspreekpunt.
              <br />
              Een duidelijke volgende stap.
            </p>
          </nav>
        </section>

        <section
          id="diensten"
          className={`${styles.section} ${styles.shell}`}
          aria-labelledby="services-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>01 / Diensten</p>
            <h2 id="services-title">
              Wat heeft jouw bedrijf
              <br />
              <em>nodig om verder te gaan?</em>
            </h2>
          </div>
          <div className={styles.serviceList}>
            {services.map((service, i) => (
              <article
                id={service.id}
                className={styles.serviceRow}
                key={service.id}
              >
                <span className={styles.rowNumber}>0{i + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="tarieven"
          className={styles.rateSection}
          aria-labelledby="rates-title"
        >
          <div className={`${styles.section} ${styles.shell}`}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>02 / Diensten & tarieven</p>
              <h2 id="rates-title">
                Een heldere basis.
                <br />
                <em>Ruimte voor jouw wensen.</em>
              </h2>
              <p className={styles.intro}>
                Indicatieve tarieven. Je ontvangt vooraf een offerte met de
                definitieve prijs en afspraken. Alle zakelijke prijzen zijn
                exclusief btw.
              </p>
            </div>
            <div className={styles.packages}>
              {packages.map((item) => (
                <article className={styles.package} key={item.title}>
                  <h3>{item.title}</h3>
                  <p className={styles.packageDescription}>
                    {item.description}
                  </p>
                  <p className={styles.price}>
                    <span>{item.prefix}</span>
                    <strong>{item.price}</strong>
                    <small>eenmalig · excl. btw</small>
                  </p>
                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a href={enquiry(item.subject)} className={styles.textLink}>
                    Vraag een voorstel aan <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
            <p className={styles.scopeNote}>
              One-page en Bedrijfswebsite gaan uit van aangeleverde teksten en
              afbeeldingen. Hosting, domein, betaalde licenties, copywriting,
              beeldmateriaal, webshop- en betaalfuncties en een CMS zijn niet
              inbegrepen, tenzij opgenomen in de offerte. Technische SEO is een
              basis, geen garantie op een positie in zoekresultaten. Geen
              verplicht abonnement bij de bouw van je website.
            </p>
            <div className={styles.additionalRates}>
              <h3>Vernieuwen & vormgeven</h3>
              <dl>
                {designRates.map(([title, price, text]) => (
                  <div className={styles.designRate} key={title}>
                    <dt>
                      {title}
                      <strong>{price}</strong>
                    </dt>
                    <dd>{text}</dd>
                  </div>
                ))}
              </dl>
              <p className={styles.scopeNote}>
                Extra werk: €60 per uur, na voorafgaand akkoord en geregistreerd
                per 15 minuten. Alle genoemde bedragen zijn exclusief btw.
              </p>
            </div>
          </div>
        </section>

        <section
          id="onderhoud"
          className={`${styles.section} ${styles.shell}`}
          aria-labelledby="maintenance-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>
              03 / Optioneel maandelijks onderhoud
            </p>
            <h2 id="maintenance-title">
              Ook na de lancering
              <br />
              <em>aandacht voor je website.</em>
            </h2>
            <p className={styles.intro}>
              Kies de ondersteuning die past bij jouw website. De onderstaande
              pakketten en reactietijd zijn een voorstel; de definitieve
              afspraken staan in je offerte.
            </p>
          </div>
          <div className={styles.maintenanceList}>
            {maintenance.map((item) => (
              <article className={styles.maintenanceRow} key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p className={styles.monthlyPrice}>
                    {item.price}
                    <span>/ maand</span>
                  </p>
                  <span className={styles.taxNote}>excl. btw</span>
                </div>
                <div>
                  <p className={styles.timeAllowance}>{item.time}</p>
                  <p>{item.description}</p>
                  <p className={styles.maintenanceDetail}>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.maintenanceTerms}>
            <div>
              <h3>Wat je kunt verwachten</h3>
              <p>
                Per pakket: één afgesproken website en maximaal 30 minuten
                technisch werk per maand. De extra tijd voor wijzigingen staat
                daar los van. Reactie binnen 2 werkdagen, maandag tot en met
                vrijdag overdag; dit is een reactietijd, geen oplostijd. Geen
                24/7-dienst of veiligheidsgarantie.
              </p>
            </div>
            <div>
              <h3>De praktische afspraken</h3>
              <p>
                Vooraf per maand betaald, per e-mail opzegbaar met één maand
                opzegtermijn. Ongebruikte tijd vervalt maandelijks. Bouw en
                inrichting zijn niet inbegrepen. Hosting, domein en licenties
                betaal je apart. Voor externe of complexe sites wordt een eerste
                audit apart geoffreerd.
              </p>
            </div>
          </div>
          <p className={styles.scopeNote}>
            Werk buiten de beschikbare tijd of grotere herstelwerkzaamheden:
            eerst een voorstel, of €60 per uur na jouw akkoord, geregistreerd
            per 15 minuten. Alle prijzen zijn exclusief btw.
          </p>
        </section>

        <section
          className={`${styles.work} ${styles.shell}`}
          aria-labelledby="work-title"
        >
          <div>
            <p className={styles.eyebrow}>04 / Werk</p>
            <h2 id="work-title">Gerealiseerde websites</h2>
            <p>Binnenkort vind je hier een selectie van mijn werk.</p>
          </div>
          <Link href="/#about" className={styles.textLink}>
            Mijn achtergrond als developer <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <section
          className={`${styles.section} ${styles.shell}`}
          aria-labelledby="process-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>05 / Samenwerken</p>
            <h2 id="process-title">
              Van kennismaking
              <br />
              <em>naar iets dat werkt.</em>
            </h2>
          </div>
          <ol className={styles.processList}>
            {process.map(([title, text], i) => (
              <li key={title}>
                <span className={styles.rowNumber}>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={`${styles.faq} ${styles.shell}`}
          aria-labelledby="faq-title"
        >
          <div>
            <p className={styles.eyebrow}>06 / Praktisch</p>
            <h2 id="faq-title">
              Goed om
              <br />
              <em>te weten.</em>
            </h2>
          </div>
          <div className={styles.questions}>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <div className={`${styles.contactInner} ${styles.shell}`}>
            <div>
              <p className={styles.eyebrow}>07 / Jouw volgende stap</p>
              <h2 id="contact-title">
                Een idee voor je bedrijf?
                <br />
                <em>Laten we het bespreken.</em>
              </h2>
              <p>
                Een nieuwe website, hulp bij je huidige site of een
                ontwerpvraag: vertel waar je naartoe wilt. Dan kijken we samen
                wat daarbij past.
              </p>
            </div>
            <div className={styles.contactAction}>
              <a href={enquiry()} className={styles.primaryLink}>
                Vraag een voorstel aan <span aria-hidden="true">↗</span>
              </a>
              <p>
                Opent je e-mailprogramma. Je schrijft en verstuurt het bericht
                zelf. Ook de links bij de pakketten openen een e-mail.
              </p>
              <span className={styles.emailLabel}>
                Liever zelf een bericht maken? Kopieer dit adres:
              </span>
              <a className={styles.email} href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className={`${styles.footer} ${styles.shell}`}>
        <span>Celine de Graaf · Nederland & België</span>
        <nav aria-label="Footer">
          <Link href="/services/voorwaarden">Voorwaarden</Link>
          <Link href="/services/privacy">Privacy</Link>
          <Link href="/">
            Portfolio <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </footer>
    </div>
  );
}
