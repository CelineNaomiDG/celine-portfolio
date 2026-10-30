import type { Metadata } from 'next';
import Link from 'next/link';
import { Asterisk } from 'lucide-react';
import {
  ContactSection,
  SectionHeading,
  ServicesShell,
} from './services-shared';
import { serviceCategories } from './service-catalog';
import styles from './services.module.css';
import ui from './studio.module.css';

export const metadata: Metadata = {
  title: 'Web, design & automatisering | Celine de Graaf',
  description:
    'Een website, herkenbare content of een slimmer werkproces. Ontdek de mogelijkheden, bekijk voorbeelden en stel je project samen met Celine de Graaf.',
};
export default function ServicesPage() {
  return (
    <ServicesShell current="/services">
      <section className={`${ui.hero} ${styles.shell}`}>
        <div>
          <p className={styles.eyebrow}>
            Celine de Graaf · zelfstandig ontwerper & developer
          </p>
          <h1>
            Goed in beeld.
            <br />
            <em>Slim geregeld.</em>
          </h1>
          <p>
            Een website die je verhaal vertelt. Content die daarbij past. Een
            digitaal proces dat je werk overzichtelijker maakt. Samen bepalen we
            wat jouw bedrijf nodig heeft.
          </p>
          <div className={styles.actionRow}>
            <Link
              className={styles.primaryLink}
              href="/services/prijsindicatie"
            >
              Stel je project samen ↗︎
            </Link>
            <Link className={styles.textLink} href="/services/voorbeelden">
              Bekijk mijn werk
            </Link>
          </div>
        </div>
        <div
          className={ui.heroArt}
          aria-label="Van idee naar ontwerp, bouw en oplevering"
        >
          <div className={ui.artHead}>
            <span>VAN IDEE NAAR IETS BRUIKBAARS</span>
            <span>↗︎</span>
          </div>
          <p className={ui.artTitle}>
            Jouw verhaal.
            <br />
            <em>In de juiste vorm.</em>
          </p>
          <div className={ui.artGrid}>
            <span>01 / Begrijpen</span>
            <span>02 / Ontwerpen</span>
            <span>03 / Maken</span>
            <span>04 / Overdragen</span>
          </div>
          <div className={ui.artFooter}>
            <span>Rechtstreeks met de maker</span>
            <Asterisk size={38} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </div>
      </section>
      <div className={`${styles.trustStrip} ${styles.shell}`}>
        <span>Vooraf een duidelijke offerte</span>
        <span>Meekijken tijdens het maken</span>
        <span>Eigenaarschap & overdracht afgesproken</span>
      </div>
      <section
        id="diensten"
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="diensten-title"
      >
        <div className={ui.sectionTop}>
          <h2 id="diensten-title">
            Waar wil je
            <br />
            <em>mee vooruit?</em>
          </h2>
          <p>
            Kies een richting. Je hoeft nog niet te weten welke techniek of welk
            pakket daarbij hoort.
          </p>
        </div>
        <div className={ui.serviceGrid}>
          {serviceCategories.map((item, i) => (
            <article className={ui.serviceCard} key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className={ui.cardNumber}>0{i + 1}</span>
              <ul>
                {item.links.map(([label]) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
              <Link className={ui.cardLink} href={item.href}>
                <span>{item.outcome}</span>
                <span aria-hidden="true">↗︎</span>
              </Link>
            </article>
          ))}
        </div>
        <div className={ui.supportRow}>
          <div>
            <h3>Ook na de oplevering.</h3>
            <p>
              Optionele ondersteuning voor je website, met duidelijke
              tijdsblokken.
            </p>
          </div>
          <Link className={styles.textLink} href="/services/onderhoud">
            Onderhoud vanaf €49 / maand ↗︎
          </Link>
        </div>
        <p className={styles.note}>
          Onderhoud exclusief btw. Hosting, domein en licenties worden apart
          afgesproken.
        </p>
        <div className={ui.toolBanner}>
          <div>
            <h2>Wat past bij jouw plan?</h2>
            <p>
              Maak een paar keuzes en bekijk je richting, de bekende kosten en
              wat nog op offerte komt. Vrij te gebruiken, zonder account.
            </p>
          </div>
          <Link href="/services/prijsindicatie">
            Ontdek je prijsindicatie ↗︎
          </Link>
        </div>
      </section>
      <section className={styles.paperBand}>
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="ontvangen-title">
            Meer dan een eindbestand.
            <br />
            <em>Weten waar je aan toe bent.</em>
          </SectionHeading>
          <ol className={styles.simpleSteps}>
            {[
              [
                'Een concreet voorstel',
                'We leggen vast wat je ontvangt, wat jij aanlevert en wat de investering en planning zijn.',
              ],
              [
                'Zichtbaar werk in uitvoering',
                'Je beoordeelt een ontwerp, preview of proefbestand op de afgesproken feedbackmomenten.',
              ],
              [
                'Een bruikbare oplevering',
                'Je ontvangt de afgesproken bestanden, toegang en uitleg. Ondersteuning daarna kiezen we apart.',
              ],
            ].map(([title, text], i) => (
              <li key={title}>
                <span className={styles.stepLabel}>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <Link className={styles.textLink} href="/services/werkwijze">
            Zo werken we samen ↗︎
          </Link>
        </div>
      </section>
      <section className={`${styles.section} ${styles.shell}`}>
        <div className={ui.productPreview}>
          <div className={ui.productArt} aria-hidden="true">
            <span>DE DIGITALE COLLECTIE</span>
            <strong>
              Kleine tools.
              <br />
              Nieuwe ideeën.
            </strong>
            <i>In ontwikkeling / Celine de Graaf</i>
          </div>
          <div>
            <span className={ui.stamp}>In ontwikkeling</span>
            <h2>
              Straks ook
              <br />
              <em>zelf aan de slag.</em>
            </h2>
            <p>
              Ik werk aan een plek voor digitale producten die je zelfstandig
              kunt gebruiken. Het eerste aanbod wordt nog samengesteld.
            </p>
            <Link className={styles.textLink} href="/services/producten">
              Over de digitale collectie ↗︎
            </Link>
          </div>
        </div>
      </section>
      <ContactSection
        title="Wat wil jij makkelijker of mooier maken?"
        text="Vertel over je bedrijf, je idee of waar je nu tegenaan loopt. Dan bepalen we samen een haalbare eerste stap."
      />
    </ServicesShell>
  );
}
