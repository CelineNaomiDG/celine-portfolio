import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeButton from '@/components/theme-button';
import ServicesMotion from './services-motion';
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
    text: 'Een duidelijke plek voor je bedrijf, je aanbod en de volgende stap voor je bezoeker. Van een compacte one-page tot een website met meerdere pagina’s.',
    suitable:
      'Voor een eerste website of een nieuwe basis die beter aansluit bij je bedrijf.',
    deliverables: [
      'Een logische indeling en een ontwerp voor mobiel en desktop',
      'Ontwikkeling van de afgesproken pagina’s en contactmogelijkheden',
      'Technische SEO-basis: paginatitels, metadata en een heldere koppenstructuur',
    ],
    separate:
      'Je levert teksten en beelden aan. Een CMS, copywriting, webshop, betaalfunctie of extra koppeling spreken we apart af. SEO is geen garantie op vindbaarheid of een bepaalde positie.',
    href: '#tarieven',
    link: 'Vergelijk de websitepakketten',
  },
  {
    id: 'redesign',
    title: 'Redesign',
    text: 'Je bedrijf is gegroeid, maar je website voelt nog hetzelfde. We vernieuwen de uitstraling en maken de route naar je belangrijkste informatie duidelijker.',
    suitable:
      'Voor een bestaande website waarvan de techniek bruikbaar is, maar het ontwerp of de indeling beter kan.',
    deliverables: [
      'Bespreken wat blijft en welke onderdelen moeten veranderen',
      'Vernieuwen van typografie, ruimtegebruik en visuele samenhang',
      'Verbeteren van de pagina-indeling binnen het bestaande platform',
    ],
    separate:
      'Het vaste pakket vernieuwt maximaal 3 bestaande pagina’s met dezelfde inhoud en hetzelfde platform. Verhuizen naar andere techniek, nieuwe inhoud of herstelwerk vraagt een aparte afspraak.',
    href: '#ontwerptarieven',
    link: 'Bekijk het redesignpakket',
  },
  {
    id: 'apps',
    title: 'Apps & maatwerk',
    text: 'Een website vertelt over je bedrijf. Een webapp laat iemand iets doen: bijvoorbeeld gegevens invoeren, een overzicht gebruiken of een eigen werkproces doorlopen.',
    suitable:
      'Voor een terugkerende taak die je met een gerichte digitale oplossing wilt vereenvoudigen.',
    deliverables: [
      'De gebruikers, taken en belangrijkste schermen in kaart brengen',
      'Bepalen welke gegevens, toegangsrechten en koppelingen nodig zijn',
      'Een afgebakende eerste versie voorstellen, ontwikkelen en controleren',
    ],
    separate:
      'Een webapp werkt in de browser. Een native app, betalingen, accounts of koppelingen zijn geen standaardonderdeel: haalbaarheid, techniek en omvang bepalen we vóór de offerte.',
    href: '#contact',
    link: 'Bespreek je app-idee',
  },
  {
    id: 'technisch-beheer',
    title: 'Onderhoud & technisch beheer',
    text: 'Ook na oplevering verandert je bedrijf en beweegt de techniek mee. Met een vaste afspraak weet je hoeveel tijd beschikbaar is voor controles en kleine wijzigingen.',
    suitable:
      'Voor een website die je wilt laten onderhouden, zonder zelf alle technische werkzaamheden op te pakken.',
    deliverables: [
      'Een maandelijks technisch controle- en updatemoment',
      'Een kort verslag van het uitgevoerde werk en aandachtspunten',
      'Afhankelijk van je pakket: kleine inhoudelijke wijzigingen of verbeteringen',
    ],
    separate:
      'De technische tijd en de tijd voor wijzigingen zijn begrensd. Grote problemen, nieuwe functies en externe websites die eerst onderzocht moeten worden, krijgen een apart voorstel.',
    href: '#onderhoud',
    link: 'Kies passende ondersteuning',
  },
  {
    id: 'socialmedia-design',
    title: 'Socialmedia-design',
    text: 'Geef je berichten een herkenbare uitstraling. Een losse visual of een samenhangende set helpt je aanbod, nieuws of actie duidelijk en consistent te presenteren.',
    suitable:
      'Voor ondernemers die zelf publiceren en daar passende, verzorgde ontwerpen bij willen.',
    deliverables: [
      'Een visuele richting op basis van je logo, kleuren en boodschap',
      'Statische ontwerpen in de vooraf afgesproken formaten',
      'Exportbestanden om zelf op je sociale kanalen te gebruiken',
    ],
    separate:
      'Je levert de tekst en beelden aan. Extra formaten, animatie, bronbestanden of templates spreken we apart af. Publiceren, kanaalbeheer, advertenties en resultaatmeting zijn niet inbegrepen.',
    href: '#ontwerptarieven',
    link: 'Bekijk losse visuals en sets',
  },
  {
    id: 'flyers',
    title: 'Flyers & digitaal drukwerk',
    text: 'Een actie, dienst of evenement verdient een heldere boodschap. Ik vertaal je aangeleverde inhoud naar een ontwerp dat je digitaal kunt delen of kunt laten drukken.',
    suitable:
      'Voor een concreet communicatiemoment waarbij je boodschap snel duidelijk moet zijn.',
    deliverables: [
      'Hiërarchie en opmaak voor je aangeleverde tekst en afbeeldingen',
      'Een ontwerpvoorstel met de afgesproken correctieronde',
      'Een drukklaar PDF-bestand volgens de vooraf gedeelde aanleverspecificaties',
    ],
    separate:
      'Het vaste pakket is één zijde op A5. Andere formaten, extra zijden, aanvullende exports en drukwerk bestellen vallen buiten dit pakket. De drukkosten betaal je apart.',
    href: '#ontwerptarieven',
    link: 'Bekijk de flyertarieven',
  },
];

const expectations = [
  [
    'Direct samenwerken',
    'Je bespreekt de keuzes rechtstreeks met mij. We spreken één contactpersoon en duidelijke feedbackmomenten af.',
  ],
  [
    'Bekijken vóór oplevering',
    'Je ziet het ontwerp en de voortgang in een preview. Zo kun je gericht feedback geven op de afgesproken onderdelen.',
  ],
  [
    'Controleren in gebruik',
    'Bij websites controleer ik de layout op verschillende schermbreedtes en de afgesproken links en functies. Het controleplan past bij de opdracht.',
  ],
  [
    'Een duidelijke overdracht',
    'We leggen vast welke bestanden, accounts en uitleg je ontvangt. Beheer na oplevering is een bewuste keuze, geen automatisch abonnement.',
  ],
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
  {
    title: 'Eerst de vraag achter je idee',
    text: 'We bespreken wie je wilt bereiken, wat er nu ontbreekt en welke actie je bezoeker moet kunnen nemen. Ook budget, gewenste planning en technische uitgangspunten komen aan bod.',
    input: 'Je doel, voorbeelden en eventueel je huidige website.',
    output: 'Een gedeeld beeld van de vraag en de mogelijke aanpak.',
  },
  {
    title: 'Een voorstel met grenzen',
    text: 'Ik werk de werkzaamheden, oplevering, prijs, correctierondes en uitsluitingen uit. Zo is duidelijk wat we maken en wanneer een wijziging meerwerk wordt. We starten na akkoord.',
    input: 'Je reactie op het voorstel en akkoord op de afspraken.',
    output: 'Een offerte met afgebakende omvang en afgesproken planning.',
  },
  {
    title: 'Structuur en ontwerp',
    text: 'We maken de inhoud en uitstraling concreet. Bij een website gaat het om de pagina-indeling en schermen; bij een ontwerpopdracht om de visuele richting en het afgesproken formaat.',
    input: 'Teksten, logo, beelden en gebundelde feedback.',
    output: 'Een beoordeeld ontwerp als basis voor de volgende stap.',
  },
  {
    title: 'Uitwerken en controleren',
    text: 'Ik ontwikkel de afgesproken pagina’s of functies, of werk het ontwerp uit tot de juiste bestanden. We controleren het resultaat tegen de offerte en verwerken de afgesproken correcties.',
    input: 'Feedback op de preview en controle van je bedrijfsinformatie.',
    output:
      'Een gecontroleerde versie van de afgesproken website, app of ontwerpen.',
  },
  {
    title: 'Overdragen en vooruitkijken',
    text: 'Na de eindcontrole regelen we de afgesproken oplevering en toegang. We bespreken hoe je verdergaat: zelf beheren, losse hulp aanvragen of kiezen voor optioneel onderhoud.',
    input: 'Je eindcontrole en de benodigde accounttoegang.',
    output: 'De afgesproken bestanden, toegang en uitleg voor verder gebruik.',
  },
];

const questions = [
  [
    'Hoe lang duurt een opdracht?',
    'Dat hangt af van de omvang, techniek, beschikbaarheid van inhoud en snelheid van feedback. Na de kennismaking spreken we een realistische planning en beoordelingsmomenten af. Een vaste opleverdatum kan pas worden bevestigd wanneer de opdracht duidelijk is; er geldt geen algemene levertijd voor alle projecten.',
  ],
  [
    'Hoe weet ik of ik een website of een webapp nodig heb?',
    'Wil je vooral je bedrijf en aanbod presenteren en contact mogelijk maken? Dan is een website vaak een logische basis. Moeten mensen inloggen, gegevens verwerken of een eigen proces doorlopen? Dan verkennen we een webapp. We beginnen met de gebruikers en de belangrijkste taak, niet met een lange lijst functies.',
  ],
  [
    'Regel je ook hosting en een domeinnaam?',
    'We bespreken welke hosting en domeinnaam bij de gekozen techniek passen, wie ze beheert en welke toegang nodig is. Deze diensten betaal je apart en worden waar mogelijk in jouw eigen accounts ingericht. Een verhuizing, e-mailinrichting of aanvullende technische configuratie is alleen inbegrepen als dat in de offerte staat.',
  ],
  [
    'Wat krijg ik bij socialmedia-design?',
    'Je ontvangt statische exportbestanden voor het afgesproken kanaal en formaat. Een losse visual bevat één ontwerp in één formaat; een set bevat zes samenhangende visuals, elk in één formaat. We spreken de bestandssoort vooraf af. Bewerkbare templates, extra formaten en bronbestanden vragen een aanvullende afspraak. Je verzorgt het plaatsen zelf.',
  ],

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
    <ServicesMotion>
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
          <div className={styles.sectionHeading} data-reveal data-reveal-line>
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
                data-reveal
                data-reveal-delay={(i % 2) * 100}
              >
                <span className={styles.rowNumber}>0{i + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <p className={styles.suitable}>
                    <span>Past bij jou als</span>
                    {service.suitable}
                  </p>
                  <ul className={styles.deliverables}>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <details className={styles.serviceScope}>
                    <summary>
                      Goed om vooraf af te spreken{' '}
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{service.separate}</p>
                  </details>
                  <a className={styles.serviceLink} href={service.href}>
                    {service.link}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.expectations}
          aria-labelledby="expectations-title"
        >
          <div className={`${styles.expectationsInner} ${styles.shell}`}>
            <div className={styles.expectationsHeading} data-reveal>
              <p className={styles.eyebrow}>De samenwerking, van dichtbij</p>
              <h2 id="expectations-title">
                Mooi werk begint
                <br />
                <em>met duidelijkheid.</em>
              </h2>
              <p>
                Geen twee opdrachten zijn hetzelfde. Deze manier van samenwerken
                vormt de basis; de concrete oplevering spreken we per project
                af.
              </p>
            </div>
            <div className={styles.expectationsList}>
              {expectations.map(([title, text], i) => (
                <article
                  key={title}
                  data-reveal
                  data-reveal-delay={(i % 2) * 80}
                >
                  <span className={styles.rowNumber}>0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tarieven"
          className={styles.rateSection}
          aria-labelledby="rates-title"
        >
          <div className={`${styles.section} ${styles.shell}`}>
            <div className={styles.sectionHeading} data-reveal data-reveal-line>
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
                  <h3 data-reveal>{item.title}</h3>
                  <p className={styles.packageDescription}>
                    {item.description}
                  </p>
                  <p className={styles.price} data-reveal>
                    <span>{item.prefix}</span>
                    <strong>{item.price}</strong>
                    <small>eenmalig · excl. btw</small>
                  </p>
                  <ul>
                    {item.features.map((feature, i) => (
                      <li key={feature} data-reveal data-reveal-delay={i * 45}>
                        {feature}
                      </li>
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
            <div id="ontwerptarieven" className={styles.additionalRates}>
              <h3>Vernieuwen & vormgeven</h3>
              <dl>
                {designRates.map(([title, price, text]) => (
                  <div className={styles.designRate} key={title} data-reveal>
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
          <div className={styles.sectionHeading} data-reveal data-reveal-line>
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
              <article
                className={styles.maintenanceRow}
                key={item.title}
                data-reveal
              >
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
          <aside
            className={styles.maintenanceExample}
            data-reveal
            aria-label="Voorbeeld van een wijziging"
          >
            <span className={styles.eyebrow}>Concreet voorbeeld</span>
            <p>
              Een nieuwe foto of aangepaste openingstijden op een bestaande
              pagina? Dat kan binnen de beschikbare wijzigingstijd van Beheer of
              Doorontwikkeling. Een nieuwe pagina, boekingsfunctie of grote
              technische reparatie bespreken we eerst apart.
            </p>
          </aside>
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
          <div className={styles.sectionHeading} data-reveal data-reveal-line>
            <p className={styles.eyebrow}>05 / Samenwerken</p>
            <h2 id="process-title">
              Van kennismaking
              <br />
              <em>naar iets dat werkt.</em>
            </h2>
          </div>
          <p className={styles.processIntro}>
            De route hangt af van je opdracht. Voor een website doorlopen we
            ontwerp én ontwikkeling; bij een losse visual of flyer ligt de
            nadruk op ontwerp en bestanden. Planning en feedbackmomenten leggen
            we vooraf vast.
          </p>
          <div className={styles.processTimeline} data-process-timeline>
            <div className={styles.processRail} aria-hidden="true">
              <span data-process-progress />
            </div>
            <ol className={styles.processList}>
              {process.map((step, i) => (
                <li key={step.title}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div className={styles.stepContent} data-reveal>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                    <dl>
                      <div>
                        <dt>Jij brengt mee</dt>
                        <dd>{step.input}</dd>
                      </div>
                      <div>
                        <dt>Dit levert het op</dt>
                        <dd>{step.output}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className={`${styles.faq} ${styles.shell}`}
          aria-labelledby="faq-title"
        >
          <div data-reveal>
            <p className={styles.eyebrow}>06 / Praktisch</p>
            <h2 id="faq-title">
              Goed om
              <br />
              <em>te weten.</em>
            </h2>
          </div>
          <div className={styles.questions}>
            {questions.map(([question, answer]) => (
              <details key={question} data-reveal>
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
            <div data-reveal>
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
            <div className={styles.contactAction} data-reveal>
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
          <aside
            className={`${styles.preparation} ${styles.shell}`}
            aria-labelledby="preparation-title"
            data-reveal
          >
            <div>
              <p className={styles.eyebrow}>Een handige start</p>
              <h3 id="preparation-title">
                Dit mag alvast mee
                <br />
                in je eerste bericht.
              </h3>
              <p>
                Je hoeft nog niet alles te weten. Deze punten helpen om gericht
                mee te denken.
              </p>
            </div>
            <ul>
              <li>
                <span>01</span>Wat je bedrijf doet en wie je wilt bereiken.
              </li>
              <li>
                <span>02</span>Je belangrijkste doel en eventueel je huidige
                website.
              </li>
              <li>
                <span>03</span>Wat er al ligt: logo, teksten, beelden of
                voorbeelden.
              </li>
              <li>
                <span>04</span>Je gewenste planning en een indicatie van je
                budget.
              </li>
            </ul>
          </aside>
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
    </ServicesMotion>
  );
}
