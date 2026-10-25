import ConceptGallery from '../concept-gallery';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ContactSection,
  FAQ,
  PageIntro,
  SectionHeading,
  ServicesShell,
} from '../services-shared';
import ui from '../studio.module.css';
import styles from '../services.module.css';

export const metadata: Metadata = {
  title: 'Software, apps & SaaS voor ondernemers | Celine de Graaf',
  description:
    'Een hulpmiddel voor je bedrijf, een webapp of de eerste versie van een eigen online product. Samen de mogelijkheden verkennen, met een voorstel op maat.',
};

export default function SoftwareAppsPage() {
  return (
    <ServicesShell current="/services/software-apps">
      <PageIntro
        label="Software & apps"
        title="Van een goed idee"
        emphasis="naar iets bruikbaars."
        links={[
          { href: '#mogelijkheden', label: 'Wat kun je laten maken?' },
          { href: '#automatisering', label: 'Koppelingen & automatisering' },
          { href: '#aanpak', label: 'Van idee naar eerste versie' },
          { href: '#kosten', label: 'Kosten' },
          { href: '#contact', label: 'Contact' },
        ]}
      >
        <p>
          Wil je een taak in je bedrijf makkelijker maken? Of heb je als
          ondernemer of startup een idee voor een eigen digitaal product? We
          onderzoeken wat nodig is en werken toe naar een eerste, afgebakende
          versie.
        </p>
      </PageIntro>
      <section id="voorbeelden" className={`${styles.section} ${styles.shell}`} aria-labelledby="voorbeelden-title"><SectionHeading id="voorbeelden-title">Bekijk hoe een proces kan werken.</SectionHeading><ConceptGallery kind="software" /></section>
      <section
        id="mogelijkheden"
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="mogelijkheden-title"
      >
        <SectionHeading id="mogelijkheden-title">
          Wat voor oplossing zoek je?
        </SectionHeading>
        <div className={styles.editorialRows}>
          <article data-reveal>
            <h3>Een hulpmiddel voor je bedrijf</h3>
            <div>
              <p>
                Software die een eigen werkproces ondersteunt. Denk aan een
                overzicht waarin je informatie bijhoudt of een taak die nu
                steeds handmatig gebeurt.
              </p>
              <p>
                We beginnen met de mensen die het gaan gebruiken en de taak die
                makkelijker moet worden. Daarna bepalen we welke schermen en
                functies nodig zijn.
              </p>
            </div>
          </article>
          <article data-reveal>
            <h3>Een app in de browser</h3>
            <div>
              <p>
                Een webapp is een toepassing die je via een internetadres
                gebruikt. Je gebruikers kunnen er bijvoorbeeld gegevens invoeren
                of een overzicht bekijken, zonder iets uit een appwinkel te
                installeren.
              </p>
              <p>
                Accounts, toegangsrechten, gegevensopslag en koppelingen worden
                alleen gebouwd als we die specifiek afspreken.
              </p>
            </div>
          </article>
          <article data-reveal>
            <h3>Je eigen online product</h3>
            <div>
              <p>
                Bij SaaS bied jij software online aan jouw klanten aan. Zij
                kunnen die bijvoorbeeld tegen een abonnement gebruiken. Het gaat
                hier om het laten ontwikkelen van jouw product, niet om een
                kant-en-klaar abonnement dat je bij mij koopt.
              </p>
              <p>
                We verkennen welke eerste versie waardevol kan zijn voor jouw
                gebruikers. Betalingen, verschillende klantaccounts en verdere
                groei vragen eigen afspraken en onderzoek.
              </p>
            </div>
          </article>
        </div>
        <aside className={styles.scopeBox}>
          <h3>Zoek je vooral een online visitekaartje?</h3>
          <p>
            Als je voornamelijk je bedrijf wilt laten zien en contact wilt
            mogelijk maken, is{' '}
            <Link href="/services/websites" className={styles.inlineLink}>
              een bedrijfswebsite
            </Link>{' '}
            vaak de passende eerste stap.
          </p>
        </aside>
      </section>
      <section id="automatisering" className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="automatisering-title">Van aanvraag<br/><em>naar overzicht en opvolging.</em></SectionHeading>
        <p>Bijvoorbeeld: een aanvraag komt binnen, wordt gecontroleerd, verschijnt in je CRM en krijgt een opvolgtaak. We beginnen bij één proces en de systemen die je al gebruikt.</p>
        <ol className={ui.flow}>{[['Aanvraag','De afgesproken gegevens komen binnen.'],['Controle','Ontbrekende of ongeldige invoer wordt gesignaleerd.'],['Registratie','De aanvraag komt in het afgesproken overzicht of CRM.'],['Opvolging','Een taak of conceptbericht staat klaar voor de juiste persoon.']].map(([title,text],i)=><li key={title}><span>0{i+1}</span><strong>{title}</strong><p>{text}</p></li>)}</ol>
        <div className={ui.deliverables}>{[['Een koppeling','Een afgesproken gegevensstroom tussen systemen, met controles, foutmeldingen en uitleg over herstel.'],['Een dashboard','Een overzicht van afgesproken gegevens en statussen. Bronnen, toegang, actualisering en definities leggen we vooraf vast.'],['AI als ondersteuning','Bijvoorbeeld informatie ordenen of een conceptantwoord voorbereiden. We bepalen wat automatisch mag en waar een mens controleert.']].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className={styles.note}>Dit zijn mogelijke opdrachten. We beoordelen haalbaarheid en benodigde expertise vooraf. API’s, licenties, hosting en doorlopend beheer zijn apart; er is geen onbeperkte of foutloze automatisering beloofd.</p>
        <Link className={styles.primaryLink} href="/services/prijsindicatie?dienst=software">Stel jouw procesvraag samen ↗</Link>
      </section>
      <section
        id="aanpak"
        className={styles.paperBand}
        aria-labelledby="aanpak-title"
      >
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="aanpak-title">
            Begin klein.
            <br />
            <em>Leer wat echt nodig is.</em>
          </SectionHeading>
          <ol className={styles.productSteps}>
            <li data-reveal>
              <span className={styles.stepLabel}>Eerst begrijpen</span>
              <h3>Het idee en de belangrijkste taak</h3>
              <p>
                We bespreken je gebruikers, bestaande werkwijze, beschikbare
                gegevens en gewenste resultaat. Ik bekijk de technische
                mogelijkheden en grenzen voordat er een bouwopdracht wordt
                afgesproken.
              </p>
            </li>
            <li data-reveal>
              <span className={styles.stepLabel}>Dan zichtbaar maken</span>
              <h3>Een ontwerp om te proberen</h3>
              <p>
                Een klikbaar ontwerp kan helpen om de route door je app te
                beoordelen. Zo’n prototype laat zien hoe schermen samenwerken,
                maar is nog geen volledig werkend product.
              </p>
            </li>
            <li data-reveal>
              <span className={styles.stepLabel}>Daarna gericht bouwen</span>
              <h3>Een eerste bruikbare versie</h3>
              <p>
                We kiezen een beperkte set functies die samen de belangrijkste
                taak ondersteunen. Dit wordt ook wel een MVP genoemd. De
                afgesproken controles en oplevering horen bij die afgebakende
                versie; uitbreiding volgt op basis van wat je daarna nodig hebt.
              </p>
            </li>
          </ol>
          <p className={styles.note}>
            Onderzoek, een prototype en ontwikkeling kunnen afzonderlijke
            opdrachten zijn. Per stap spreken we resultaat, prijs, planning en
            feedbackmomenten af.
          </p>
        </div>
      </section>
      <section
        id="kosten"
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="kosten-title"
      >
        <SectionHeading id="kosten-title">
          De kosten, duidelijk gescheiden.
        </SectionHeading>
        <div className={styles.costRows}>
          <article data-reveal>
            <h3>Ontwerp & ontwikkeling</h3>
            <p>
              Op offerte. De prijs hangt af van de functies, gegevens,
              koppelingen en gewenste techniek. Je ontvangt vooraf een voorstel
              met de omvang en prijs; er is geen standaard vanafprijs voor een
              app of SaaS-product.
            </p>
          </article>
          <article data-reveal>
            <h3>Gebruik & ondersteuning</h3>
            <p>
              Hosting, externe diensten, licenties, betaalverwerking en verdere
              ondersteuning kunnen terugkerende kosten hebben. We brengen die
              apart in beeld. Onderhoud voor software of SaaS wordt apart
              geoffreerd; de websitepakketten gelden hiervoor niet.
            </p>
          </article>
          <article data-reveal>
            <h3>Abonnementen van jouw klanten</h3>
            <p>
              Als je gebruikers voor jouw product gaan betalen, is dat jouw
              verdienmodel. Een systeem voor abonnementen en betalingen is een
              afzonderlijk onderdeel dat we moeten ontwerpen, kiezen en
              begroten. De inkomsten staan los van de kosten van ontwikkeling en
              beheer.
            </p>
          </article>
        </div>
      </section>
      <FAQ
        items={[
          [
            'Kun je ook een app voor de appwinkels maken?',
            'Een app die specifiek voor iPhone of Android wordt gebouwd vraagt andere keuzes dan een webapp. We bekijken eerst de gewenste functies, technische haalbaarheid, publicatie en ondersteuning. Dat is maatwerk op offerte en geen standaardbelofte binnen een websitepakket.',
          ],
          [
            'Moet ik al een volledig uitgewerkt plan hebben?',
            'Nee. Vertel welke taak je wilt verbeteren, wie het gaat gebruiken en hoe het nu werkt. Bestaande voorbeelden of schetsen zijn welkom. We bespreken daarna welke verkenning nodig is en wat daarvan de kosten zijn.',
          ],
          [
            'Is een prototype al een werkende app?',
            'Nee. Een prototype maakt vooral het ontwerp en de bediening tastbaar. Een bruikbare app vraagt ook ontwikkeling, gegevensverwerking en controles. In het voorstel staat precies welke versie en welke functies je ontvangt.',
          ],
          [
            'Kunnen we later functies toevoegen?',
            'Ja, dat kan een vervolgstap zijn. We bekijken eerst hoe de eerste versie wordt gebruikt en welke uitbreiding zinvol en technisch haalbaar is. Elke uitbreiding en de ondersteuning daarna krijgen hun eigen afspraken; er is geen onbeperkte doorontwikkeling inbegrepen.',
          ],
        ]}
      />
      <ContactSection
        title="Welk probleem wil jij oplossen?"
        text="Beschrijf voor wie je idee bedoeld is, welke taak het makkelijker maakt en wat je al hebt uitgezocht. Dan bespreken we een passende eerste stap."
        subject="Mijn idee voor software of een app"
      />
    </ServicesShell>
  );
}
