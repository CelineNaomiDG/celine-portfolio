import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Box,
  CreditCard,
  PackageCheck,
  ShoppingBag,
  SlidersHorizontal,
  Globe2,
} from 'lucide-react';
import {
  FAQ,
  PageIntro,
  SectionHeading,
  ServicesShell,
} from '../services-shared';
import { shopPaymentGroups, shopPlatforms } from './webshop-data';
import styles from '../services.module.css';
import ui from './webshops.module.css';

export const metadata: Metadata = {
  title:
    'Webshop laten maken: Shopify, WooCommerce & maatwerk | Celine de Graaf',
  description:
    'Ontdek Shopify, WordPress/WooCommerce en maatwerk webshops. Betaalopties zoals iDEAL, PayPal, Klarna en Mastercard, plus 3D, beheer en duidelijke kosten op offerte.',
};
const features = [
  {
    icon: ShoppingBag,
    title: 'Producten & presentatie',
    text: 'Categorieën, zoeken, filters, productvarianten, voorraad en aantrekkelijke productpagina’s. Het aantal producten en de invoer spreken we af.',
  },
  {
    icon: PackageCheck,
    title: 'Bestellen & bezorgen',
    text: 'Winkelwagen, gastcheckout of klantaccounts, bestelbevestigingen, verzendzones, afhalen en een passende retourflow.',
  },
  {
    icon: CreditCard,
    title: 'Ook digitale verkoop',
    text: 'Downloads, cadeaubonnen, abonnementen of boekingen verkennen. Dit zijn afzonderlijke functies met eigen betaal-, leverings- en licentievoorwaarden.',
  },
  {
    icon: Globe2,
    title: 'Groei & koppelingen',
    text: 'Meertaligheid, zakelijke verkoop, boekhouding, verzendsoftware, e-mailmarketing of voorraadkoppelingen, passend bij je platform en proces.',
  },
];
export default function WebshopsPage() {
  return (
    <ServicesShell current="/services/webshops">
      <PageIntro
        label="Webshops · op offerte"
        title="Een winkel die past"
        emphasis="bij wat jij verkoopt."
        links={[
          { href: '#platforms', label: 'Kies je platform' },
          { href: '#betalen', label: 'Betaalmethoden' },
          { href: '#mogelijkheden', label: 'Functies' },
          { href: '#3d', label: '3D & beleving' },
          { href: '#kosten', label: 'Kosten & aanpak' },
        ]}
      >
        <p>
          Van een overzichtelijke productwinkel tot een bijzondere merkervaring.
          We kiezen samen de techniek, betaalmogelijkheden en het beheer waarmee
          jij verder kunt.
        </p>
        <p>
          Shopify, WordPress met WooCommerce of maatwerk: de keuze volgt je
          assortiment, budget en werkwijze. Een nieuwe winkel, uitbreiding of
          overstap begint met een afgebakend voorstel.
        </p>
        <Link
          className={styles.primaryLink}
          href="/services/contact?interesse=webshop#aanvraag"
        >
          Bespreek je webshop <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </PageIntro>
      <section id="platforms" className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="platform-title">
          Drie routes.
          <br />
          <em>Dezelfde duidelijke afspraken.</em>
        </SectionHeading>
        <div className={ui.platforms}>
          {shopPlatforms.map((platform, i) => (
            <article key={platform.id}>
              <p className={ui.overline}>
                0{i + 1} / {platform.label}
              </p>
              <h3>{platform.title}</h3>
              <p>{platform.description}</p>
              <ul>
                {platform.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={ui.note}>
                <strong>Wat je vooraf wilt weten</strong>
                <p>{platform.consideration}</p>
              </div>
              <Link
                className={styles.textLink}
                href={`/services/contact?interesse=webshop&platform=${platform.id}#aanvraag`}
              >
                Bespreek{' '}
                {platform.id === 'custom' ? 'maatwerk' : platform.title}{' '}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          Deze routes zijn mogelijkheden op aanvraag, geen vaste pakketten of
          partnercertificeringen. Voor complexe koppelingen toetsen we eerst de
          haalbaarheid en benodigde expertise. Heb je een ander platform? Dan
          onderzoeken we of bouwen, koppelen of overstappen passend is.
        </p>
      </section>
      <section id="betalen" className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="payment-title">
          Betalen zoals
          <br />
          <em>jouw klant dat wil.</em>
        </SectionHeading>
        <p className={ui.intro}>
          We kiezen een betaaloplossing die bij je winkel en doelgroep past,
          bijvoorbeeld Shopify Payments, Mollie, Stripe of een PayPal-koppeling.
          Hieronder staan opties om te bespreken; niet elke combinatie is op
          ieder platform beschikbaar.
        </p>
        <div className={ui.payments}>
          {shopPaymentGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul aria-label={group.title}>
                {group.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
        <details className={styles.detailDisclosure}>
          <summary>Wat is nodig om betalingen live te zetten?</summary>
          <p>
            Het betaalaccount staat op naam van jouw bedrijf. De provider
            controleert je bedrijfsgegevens en beslist over toelating en
            betaalmethoden. We stellen de toegestane opties in en testen de
            afgesproken betaal- en orderflow. Een aanvraag via deze website
            activeert nog geen betaalaccount.
          </p>
          <p>
            Bij Shopify Payments gelden voor iDEAL / Wero onder meer
            accountverificatie en voorwaarden aan je winkel, Nederlandse
            klantmarkt en eurobetalingen. Voor Klarna, wallets en abonnementen
            controleren we de specifieke voorwaarden opnieuw voor jouw situatie.
          </p>
          <p>
            Transactiekosten, terugbetalingskosten, eventuele providerkosten en
            extra platformkosten staan los van de bouw. Bij Shopify kunnen
            externe betaalproviders extra platformtransactiekosten veroorzaken;
            de combinatie van abonnement en provider is daarom onderdeel van de
            keuze.
          </p>
        </details>
      </section>
      <section
        id="mogelijkheden"
        className={`${styles.section} ${styles.shell}`}
      >
        <SectionHeading id="features-title">
          Van product tot bestelling.
        </SectionHeading>
        <div className={ui.features}>
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={27} strokeWidth={1.4} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          Dit is een keuzelijst. In de offerte staat welke functies je ontvangt,
          hoe ver ze gaan en wat een betaalde app, plugin of extra maatwerk
          vraagt.
        </p>
      </section>
      <section id="3d" className={styles.paperBand}>
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="three-d-title">
            Meer laten zien.
            <br />
            <em>Ook in drie dimensies.</em>
          </SectionHeading>
          <p className={ui.intro}>
            Een 3D-product op een productpagina is iets anders dan een complete
            virtuele winkel. We kunnen beide onderzoeken, met een duidelijke
            grens tussen productpresentatie en een apart ontwikkeltraject.
          </p>
          <div className={ui.experiences}>
            <article>
              <Box size={30} strokeWidth={1.3} aria-hidden="true" />
              <h3>Draaibaar product & AR</h3>
              <p>
                Een product van meerdere kanten bekijken, eventueel in de ruimte
                van de klant op ondersteunde apparaten. Shopify ondersteunt
                3D-productmedia met een geschikt thema en modelbestand. Voor
                WooCommerce kiezen we een geschikte uitbreiding of maatwerk.
              </p>
              <small>
                Het maken of optimaliseren van 3D-modellen is een aparte post.
              </small>
            </article>
            <article>
              <SlidersHorizontal
                size={30}
                strokeWidth={1.3}
                aria-hidden="true"
              />
              <h3>Een product samenstellen</h3>
              <p>
                Kleur, materiaal, maat of uitvoering kiezen. Eenvoudige
                varianten kunnen in het winkelplatform; een visuele configurator
                met prijs- en voorraadlogica vraagt een aparte uitwerking.
              </p>
              <small>
                We toetsen varianten, prijzen en de overdracht naar de
                winkelwagen.
              </small>
            </article>
            <article>
              <ShoppingBag size={30} strokeWidth={1.3} aria-hidden="true" />
              <h3>Virtuele winkel / 3D store</h3>
              <p>
                Een interactieve showroom waarin bezoekers producten ontdekken
                en door kunnen naar productinformatie of afrekenen. Eerst een
                concept of prototype; pas daarna een voorstel voor de volledige
                bouw.
              </p>
              <small>
                Met een gewone productlijst als alternatief en aandacht voor
                mobiele snelheid en bediening.
              </small>
            </article>
          </div>
        </div>
      </section>
      <section id="kosten" className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="cost-title">
          Wat bepaalt je investering?
        </SectionHeading>
        <div className={ui.costGrid}>
          <article>
            <span>01 / EENMALIG</span>
            <h3>Ontwerp & inrichting</h3>
            <p>
              Omvang van de winkel, platform, productinvoer, gewenste
              vormgeving, migratie, koppelingen en tests.
            </p>
            <strong>Op offerte</strong>
          </article>
          <article>
            <span>02 / TERUGKEREND</span>
            <h3>Platform & beheer</h3>
            <p>
              Abonnement of hosting, domein, betaalde apps/plugins en
              afgesproken ondersteuning. Deze posten worden afzonderlijk
              benoemd.
            </p>
            <strong>Afhankelijk van je keuzes</strong>
          </article>
          <article>
            <span>03 / PER VERKOOP</span>
            <h3>Betaling & levering</h3>
            <p>
              Kosten van je betaalprovider, eventuele platformtransacties,
              verzending en retouren. Deze betaal je niet als vaste bouwprijs.
            </p>
            <strong>Volgens de gekozen aanbieders</strong>
          </article>
        </div>
        <p>
          Een webshop valt niet automatisch onder de prijzen voor een
          informatieve bedrijfswebsite. Je krijgt een voorstel met eenmalige en
          terugkerende kosten apart, bedragen exclusief btw en concrete
          afspraken over wat jij aanlevert.
        </p>
        <Link
          className={styles.primaryLink}
          href="/services/prijsindicatie?dienst=webshop#samenstellen"
        >
          Stel je webshopwensen samen{' '}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <details className={styles.detailDisclosure}>
          <summary>
            Wat valt buiten de basis als we het niet apart afspreken?
          </summary>
          <p>
            Productfotografie, UGC, teksten, vertalingen, uitgebreide
            productinvoer, 3D-modellen, betaalde licenties, complexe migraties,
            marketingcampagnes en dagelijks winkelbeheer. Ook juridische en
            fiscale inhoud lever jij aan of laat je beoordelen; ik verwerk de
            afgesproken inhoud en instellingen.
          </p>
        </details>
      </section>
      <section className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="delivery-title">
          Zicht op de weg naar livegang.
        </SectionHeading>
        <ol className={styles.simpleSteps}>
          <li>
            <span className={styles.stepLabel}>01</span>
            <h3>Keuzes & voorstel</h3>
            <p>
              Assortiment, doelgroep, verkooplanden, platform, budget en beheer.
              We leggen functies, input, feedback en kosten vast.
            </p>
          </li>
          <li>
            <span className={styles.stepLabel}>02</span>
            <h3>Ontwerp & testwinkel</h3>
            <p>
              Je bekijkt het ontwerp en een preview. We vullen de afgesproken
              producten in en richten betaling, levering en bevestigingen in.
            </p>
          </li>
          <li>
            <span className={styles.stepLabel}>03</span>
            <h3>Testen & overdracht</h3>
            <p>
              We controleren mobiel bestellen, geslaagde en mislukte betalingen,
              orderstatus en de afgesproken leverings- of downloadflow. Livegang
              volgt na akkoord en benodigde provideractivering.
            </p>
          </li>
        </ol>
        <p>
          Jij ontvangt de afgesproken toegang en uitleg. Onderhoud voor een
          webshop stemmen we apart af op platform, updates, orderverwerking en
          ondersteuning; een algemeen websitepakket is niet vanzelf voldoende.
        </p>
      </section>
      <FAQ
        items={[
          [
            'Kun je ook mijn bestaande WordPress- of Shopify-winkel aanpassen?',
            'Ja, dat kunnen we als opdracht onderzoeken. Eerst bekijken we de huidige inrichting, toegang, plugins/apps en gewenste wijzigingen. Een overname, verhuizing of herstel van bestaand werk krijgt een eigen scope.',
          ],
          [
            'Zijn alle betaalmethoden standaard inbegrepen?',
            'Nee. We kiezen en offreren de gewenste methoden. Beschikbaarheid hangt af van platform, provider, accountgoedkeuring, klantland, valuta en producttype. Provider- en transactiekosten zijn apart.',
          ],
          [
            'Kan mijn webshop abonnementen of digitale producten verkopen?',
            'Dat kan met een passende inrichting. We controleren vooraf de ondersteuning voor terugkerende betalingen, toegang of downloads, opzeggen en orderafhandeling. Vaak vraagt dit een extra app, plugin of koppeling.',
          ],
          [
            'Kan alles helemaal op maat?',
            'Een eigen ontwerp en specifieke functies zijn bespreekbaar. We toetsen technische haalbaarheid, platformbeperkingen, capaciteit en kosten voordat ik een bouwopdracht aanneem. Bij een complex idee kan een betaalde verkenning of prototype de eerste stap zijn.',
          ],
        ]}
      />
      <section className={`${styles.section} ${styles.shell} ${ui.enquiry}`}>
        <h2>Wat wil jij verkopen?</h2>
        <p>
          Vertel wat je verkoopt, hoeveel producten je hebt, in welke landen en
          of er al een winkel is. Je hoeft het platform nog niet gekozen te
          hebben.
        </p>
        <Link
          className={styles.primaryLink}
          href="/services/contact?interesse=webshop#aanvraag"
        >
          Bespreek mijn webshop <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
      <section className={`${styles.section} ${styles.shell}`}>
        <details className={styles.detailDisclosure}>
          <summary>Actuele mogelijkheden bij de platformen</summary>
          <p>
            Platformen wijzigen hun aanbod. We controleren de gekozen functies
            en tarieven opnieuw bij de offerte. Officiële uitleg:
          </p>
          <ul className={ui.sources}>
            <li>
              <a href="https://help.shopify.com/nl/manual/payments/shopify-payments/supported-countries/netherlands/payment-methods">
                Shopify Payments in Nederland
              </a>
            </li>
            <li>
              <a href="https://help.shopify.com/en/manual/payments/paypal/supported-providers">
                PayPal met Shopify
              </a>
            </li>
            <li>
              <a href="https://docs.mollie.com/docs/woo-get-started">
                Mollie voor WooCommerce
              </a>
            </li>
            <li>
              <a href="https://help.shopify.com/en/manual/products/product-media/product-media-types">
                3D-productmedia in Shopify
              </a>
            </li>
          </ul>
        </details>
      </section>
    </ServicesShell>
  );
}
