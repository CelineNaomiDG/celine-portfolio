import DeliveryGuide from '../delivery-guide';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ServicesShell,
  PageIntro,
  SectionHeading,
  ContactSection,
} from '../services-shared';
import styles from '../services.module.css';
import ui from '../studio.module.css';
export const metadata: Metadata = {
  title: 'Online zichtbaarheid & websiteverbetering | Celine de Graaf',
  description:
    'Verken verbeteringen aan vindbaarheid, snelheid, gebruiksgemak en metingen. Een afgebakend voorstel voor je website, zonder rankinggaranties.',
};
export default function VisibilityPage() {
  return (
    <ServicesShell current="/services/zichtbaarheid">
      <PageIntro
        label="Online zichtbaarheid"
        title="Makkelijker gevonden."
        emphasis="Beter begrepen."
        links={[
          { href: '#vindbaarheid', label: 'Vindbaarheid' },
          { href: '#verbeteren', label: 'Gebruiksgemak' },
          { href: '#meten', label: 'Inzicht' },
        ]}
      >
        <p>
          Een goede website helpt bezoekers bij hun volgende stap. We bekijken
          waar jouw site onduidelijk, moeilijk vindbaar of onhandig is en kiezen
          verbeteringen die passen bij je doel.
        </p>
      </PageIntro>
      <section className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="basis-title">
          Een gerichte verbetering.
          <br />
          <em>Een duidelijk resultaat.</em>
        </SectionHeading>
        <div className={ui.deliverables}>
          <article id="vindbaarheid">
            <span className={ui.stamp}>01 / Begrijpelijk & vindbaar</span>
            <h3>SEO & vindbaarheid in AI</h3>
            <p>
              Een controle van paginastructuur, titels, beschrijvingen,
              indexeerbaarheid en de helderheid van je inhoud.
            </p>
            <ul>
              <li>Een overzicht van bevindingen en prioriteiten.</li>
              <li>Afgesproken technische en inhoudelijke verbeteringen.</li>
              <li>Uitleg van wat aangepast is.</li>
            </ul>
            <p>
              Vermelding in zoekmachines of AI-antwoorden is niet gegarandeerd.
              Doorlopende content en monitoring zijn aparte afspraken.
            </p>
          </article>
          <article id="verbeteren">
            <span className={ui.stamp}>02 / Prettig in gebruik</span>
            <h3>Snelheid & gebruiksgemak</h3>
            <p>
              We bekijken laden, navigeren en contact opnemen op mobiel en
              desktop. Daarna verbeteren we de afgesproken knelpunten.
            </p>
            <ul>
              <li>Een gerichte controle van bestaande pagina’s.</li>
              <li>Voor-en-na vergelijking van aangepakte onderdelen.</li>
              <li>Een overzicht van eventuele vervolgstappen.</li>
            </ul>
            <p>
              De techniek en toegang tot je huidige website bepalen wat mogelijk
              is.
            </p>
          </article>
          <article id="meten">
            <span className={ui.stamp}>03 / Inzicht in gedrag</span>
            <h3>Meten wat ertoe doet</h3>
            <p>
              Welke acties wil je begrijpen? Bijvoorbeeld een klik naar contact
              of een afgeronde aanvraag. We bepalen eerst het meetplan en de
              passende inrichting.
            </p>
            <ul>
              <li>Afgesproken gebeurtenissen en meetdoelen.</li>
              <li>Testen van de ingerichte metingen.</li>
              <li>Een eenvoudig overzicht met uitleg.</li>
            </ul>
            <p>
              Tools, toegang, privacy-instellingen en eventuele licenties worden
              vooraf afgestemd. Geen tracking zonder passende inrichting.
            </p>
          </article>
        </div>
      </section>
      <section className={styles.softBand}>
        <div className={`${styles.section} ${styles.shell}`}>
          <h2>
            Eerst kijken.
            <br />
            <em>Dan gericht verbeteren.</em>
          </h2>
          <ol className={ui.flow}>
            {[
              ['Vraag', 'Wat moet je website beter doen?'],
              ['Controle', 'Welke onderdelen zijn relevant en bereikbaar?'],
              ['Voorstel', 'Een afgebakende opdracht met prijs en oplevering.'],
              ['Verbetering', 'Uitvoeren, controleren en uitleggen.'],
            ].map(([title, text], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p>
            Prijs op offerte. Een uitgebreide analyse kan een afzonderlijke
            opdracht zijn; dat spreken we vooraf af. Werk dat al in je
            websiteofferte zit, wordt niet nogmaals als losse dienst gerekend.
          </p>
          <details className={styles.detailDisclosure}>
            <summary>Zoek je advertenties of doorlopende marketing?</summary>
            <p>
              Advertentiebeheer, dagelijkse communityzorg en volledige
              marketingcampagnes vallen buiten dit aanbod. We bespreken eerst je
              vraag en of ik daarvoor een passende opdracht kan aannemen.
            </p>
          </details>
          <Link
            className={styles.textLink}
            href="/services/prijsindicatie?dienst=visibility"
          >
            Stel je vraag samen ↗︎
          </Link>
        </div>
      </section>
      <DeliveryGuide kind="visibility" />
      <ContactSection
        title="Waar loopt je website nu vast?"
        text="Deel je website en wat je wilt verbeteren. Dan bespreken we wat zinvol en haalbaar is."
      />
    </ServicesShell>
  );
}
