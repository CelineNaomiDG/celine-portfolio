import PackageComparison from '../package-comparison';
import PackageStars from '../package-stars';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ContactSection,
  ExtraWorkNote,
  FAQ,
  PageIntro,
  PriceNote,
  SectionHeading,
  ServicesShell,
} from '../services-shared';
import styles from '../services.module.css';

export const metadata: Metadata = {
  title: 'Websites & vernieuwen | Celine de Graaf',
  description:
    'Een nieuwe website voor je bedrijf of je bestaande website vernieuwen. Bekijk de mogelijkheden, heldere afspraken en indicatieve prijzen.',
};

import { websitePackages } from '../website-packages';

export default function WebsitesPage() {
  return (
    <ServicesShell current="/services/websites">
      <PageIntro
        label="Websites & vernieuwen"
        title="Een website die past"
        emphasis="bij jouw bedrijf."
        links={[
          { href: '#mogelijkheden', label: 'Nieuw of vernieuwen' },
          { href: '#tarieven', label: 'Tarieven' },
          { href: '#contact', label: 'Contact' },
        ]}
      >
        <p>
          Laat zien wat je doet en maak het bezoekers makkelijk om contact op te
          nemen. Ik help je met een nieuwe website of een frisse, duidelijkere
          versie van je bestaande site.
        </p>
      </PageIntro>
      <section
        id="mogelijkheden"
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="mogelijkheden-title"
      >
        <SectionHeading id="mogelijkheden-title">
          Beginnen of vernieuwen?
        </SectionHeading>
        <div className={styles.twoColumns}>
          <article data-reveal>
            <h3>Een nieuwe website</h3>
            <p>
              We bepalen welke informatie je bezoekers nodig hebben en welke
              pagina’s daarbij passen. Je levert je teksten, logo en beelden
              aan; ik maak het ontwerp en bouw de afgesproken website.
            </p>
            <p>
              De site past zich aan aan kleine en grote schermen. We controleren
              de inhoud, links en afgesproken functies vóór oplevering.
            </p>
          </article>
          <article data-reveal data-reveal-delay="100">
            <h3>Je huidige website vernieuwen</h3>
            <p>
              De basis werkt nog, maar de uitstraling of indeling past niet
              meer. We bekijken wat blijft en verbeteren het ontwerp binnen je
              bestaande website.
            </p>
            <p>
              Overstappen naar een ander systeem of verhuizen naar een andere
              aanbieder is iets anders. Dat bespreken en begroten we apart.
            </p>
          </article>
        </div>
      </section>
      <section
        id="tarieven"
        className={styles.softBand}
        aria-labelledby="tarieven-title"
      >
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="tarieven-title">
            Een passende basis.
          </SectionHeading>
          <PriceNote />
          <p className={styles.note}>Kies op basis van je inhoud en gewenste functies. Elk traject krijgt dezelfde kwaliteitszorg.</p>
          <div className={styles.packageGrid}>
            {websitePackages.map((item, index) => (
              <article className={styles.package} key={item.name}>
                <PackageStars level={index + 1} />
                <h3 data-reveal>{item.name}</h3>
                <p>{item.text}</p>
                <p className={styles.price} data-reveal>
                  <strong>{item.price}</strong>
                  <span>Op offerte</span>
                  <span>eenmalig · excl. btw</span>
                </p>
                <Link className={styles.textLink} href={`/services/websites/${item.slug}`}>
                  Bekijk wat je krijgt <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          <PackageComparison />
          <p>
            <Link className={styles.textLink} href="/services/prijsindicatie">
              Bekijk de prijsindicatie per traject <span aria-hidden="true">↗</span>
            </Link>
          </p>
          <article className={styles.horizontalOffer} data-reveal>
            <div><h3>Je bestaande website vernieuwen</h3><p>Op offerte</p></div>
            <div><p>We onderzoeken welk traject bij je bestaande website past.
              Wat behouden blijft, wat verandert en een eventuele migratie leggen
              we vooraf vast in een voorstel.</p></div>
          </article>
          <div className={styles.scopeBox}>
            <h3>Wat regelen we apart?</h3>
            <p>
              Deze prijzen gaan uit van teksten en beelden die jij aanlevert.
              Domeinnaam, hosting, betaalde licenties, teksten schrijven,
              fotografie, een systeem om zelf pagina’s te bewerken, een webshop,
              betalingen en extra functies zijn alleen inbegrepen als ze in de
              offerte staan.
            </p>
            <p>
              De basis voor zoekmachines is inbegrepen zoals hierboven
              beschreven. Een bepaalde positie in de zoekresultaten kan ik niet
              beloven. Je hoeft bij een website geen onderhoudsabonnement af te
              nemen.
            </p>
            <ExtraWorkNote />
          </div>
        </div>
      </section>
      <section
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="aanpak-title"
      >
        <SectionHeading id="aanpak-title">
          Van je verhaal naar je website.
        </SectionHeading>
        <div className={styles.twoColumns}>
          <div data-reveal>
            <h3>Wat jij aanlevert</h3>
            <p>
              Je doel, teksten, logo, beelden en eventueel voorbeelden die je
              aanspreken. Bij een bestaande site kijken we ook welke toegang
              nodig is. We spreken samen af wanneer alles klaar moet zijn.
            </p>
          </div>
          <div data-reveal data-reveal-delay="100">
            <h3>Wat je van mij krijgt</h3>
            <p>
              Een voorstel, een ontwerp om te beoordelen en een preview van de
              gebouwde website. Bij oplevering regelen we de afgesproken toegang
              en uitleg. Hulp daarna kan los of via{' '}
              <Link href="/services/onderhoud" className={styles.inlineLink}>
                optioneel websiteonderhoud
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <FAQ
        items={[
          [
            'Hoe lang duurt het maken van mijn website?',
            'Dat hangt af van de omvang, de beschikbare inhoud en hoe snel je feedback kunt geven. Na de kennismaking spreken we een planning af. Er geldt geen vaste levertijd voor iedere website.',
          ],
          [
            'Kan ik mijn website zelf aanpassen?',
            'Dat kan als we een systeem om inhoud te bewerken afspreken. Zo’n systeem is niet standaard inbegrepen in ieder traject. We bekijken vooraf of je zelf wilt aanpassen of liever wijzigingen laat uitvoeren.',
          ],
          [
            'Wat is een ronde met wijzigingen?',
            'Je verzamelt je opmerkingen en stuurt die in één keer door. Ik verwerk de afgesproken aanpassingen binnen de gekozen richting. Nieuwe pagina’s, functies of een volledig andere richting zijn extra werk en worden eerst besproken.',
          ],
          [
            'Hoe werkt het met domeinnaam en hosting?',
            'Je domeinnaam is het adres van je site; hosting is de plek waar de site draait. We bespreken wat nodig is en richten dit waar mogelijk in jouw accounts in. Je betaalt deze diensten apart. De inrichting of een verhuizing wordt in de offerte afgebakend.',
          ],
        ]}
      />
      <ContactSection
        title="Een nieuwe start voor je website?"
        text="Vertel wat je bedrijf doet en of je een nieuwe website wilt of een bestaande site wilt vernieuwen. Stuur gerust je huidige website mee."
        subject="Voorstel voor mijn website"
      />
    </ServicesShell>
  );
}
