import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ContactSection,
  SectionHeading,
  ServicesShell,
  serviceLinks,
} from './services-shared';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Websites, Apps & Digital Design | Celine de Graaf',
  description:
    'Een website, eigen app, socialmedia-ontwerp of hulp bij het bijhouden van je site? Ontdek wat Celine de Graaf kan maken voor ondernemers in Nederland en België.',
};

export default function ServicesPage() {
  return (
    <ServicesShell current="/services">
      <section className={`${styles.hubHero} ${styles.shell}`}>
        <p className={styles.eyebrow}>Voor ondernemers in Nederland & België</p>
        <h1>
          Wat wil je
          <br />
          <em>laten maken?</em>
        </h1>
        <div className={styles.hubIntroduction}>
          <p>
            Ik ben Celine. Ik ontwerp en ontwikkel websites, software en visuele
            uitingen voor ondernemers. Van een eerste idee tot een bestaande
            website die aandacht nodig heeft.
          </p>
          <p>
            Kies hieronder waar je naar zoekt. Op elke pagina lees je wat
            mogelijk is, hoe we samenwerken en welke kosten erbij horen.
          </p>
        </div>
        <a className={styles.textLink} href="#diensten">
          Vind jouw dienst <span aria-hidden="true">↓</span>
        </a>
      </section>
      <section
        id="diensten"
        className={`${styles.choices} ${styles.shell}`}
        aria-labelledby="choices-title"
      >
        <h2 id="choices-title" className={styles.visuallyHidden}>
          Waar kan ik je mee helpen?
        </h2>
        {serviceLinks.map((link, i) => (
          <Link
            href={link.href}
            className={styles.choice}
            key={link.href}
            data-reveal
            data-reveal-delay={(i % 2) * 60}
          >
            <h3>{link.title}</h3>
            <div>
              <p>{link.description}</p>
              <span className={styles.choiceAction}>
                Lees meer <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </section>
      <section className={styles.paperBand} aria-labelledby="samenwerken-title">
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="samenwerken-title">
            Samen helder krijgen.
            <br />
            <em>Dan pas aan de slag.</em>
          </SectionHeading>
          <ol className={styles.simpleSteps}>
            {[
              [
                'We bespreken je idee',
                'Wat wil je bereiken, wat heb je al en waar loop je tegenaan? Je hebt rechtstreeks contact met mij.',
              ],
              [
                'Je krijgt een duidelijk voorstel',
                'We spreken de werkzaamheden, prijs, planning en feedbackmomenten af voordat ik begin.',
              ],
              [
                'We maken en controleren het',
                'Je kijkt mee op afgesproken momenten. Daarna ontvang je het resultaat en de afgesproken uitleg of overdracht.',
              ],
            ].map(([title, text], i) => (
              <li key={title} data-reveal data-reveal-delay={i * 75}>
                <span className={styles.stepLabel}>Stap {i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ContactSection
        title="Nog niet zeker wat je nodig hebt?"
        text="Vertel wat je wilt verbeteren of maken. Dan help ik je bepalen of een website, een app, een ontwerp of ondersteuning bij je huidige site de juiste volgende stap is."
      />
    </ServicesShell>
  );
}
