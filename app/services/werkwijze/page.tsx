import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicesShell, PageIntro, ContactSection } from '../services-shared';
import styles from '../services.module.css';
import ui from '../studio.module.css';
export const metadata: Metadata = {
  title: 'Werkwijze: van idee tot oplevering | Celine de Graaf',
  description:
    'Samen je doel en scope bepalen, een preview beoordelen en je project opleveren met heldere afspraken over kosten en beheer.',
};
export default function ProcessPage() {
  return (
    <ServicesShell current="/services/werkwijze">
      <PageIntro
        label="Zo werken we samen"
        title="Jij kent je bedrijf."
        emphasis="Ik maak het zichtbaar."
        links={[
          { href: '#stappen', label: 'Het traject' },
          { href: '#afspraken', label: 'Wat we afspreken' },
        ]}
      >
        <p>
          Je hoeft geen technische briefing te schrijven. Vertel wat je wilt
          bereiken en wat je al hebt. Ik help je dat te vertalen naar een
          afgebakend project.
        </p>
      </PageIntro>
      <section id="stappen" className={`${styles.section} ${styles.shell}`}>
        <ol className={ui.flow}>
          {[
            [
              'Kennismaken',
              'We bespreken je doelgroep, doel, inhoud en gewenste planning.',
            ],
            [
              'Voorstel',
              'Je krijgt scope, prijs, oplevering en feedbackmomenten op papier.',
            ],
            [
              'Ontwerpen & maken',
              'Je kijkt mee via een preview, prototype of proefbestand en bundelt je feedback.',
            ],
            [
              'Controleren & opleveren',
              'We controleren de afgesproken onderdelen. Je ontvangt bestanden, toegang en uitleg.',
            ],
          ].map(([title, text], i) => (
            <li key={title}>
              <span>STAP 0{i + 1}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section id="afspraken" className={styles.softBand}>
        <div className={`${styles.section} ${styles.shell}`}>
          <h2>Helder aan beide kanten.</h2>
          <div className={ui.deliverables}>
            {[
              [
                'Wat jij aanlevert',
                'De informatie over je bedrijf, beschikbare teksten en beelden, benodigde toegang en één gebundelde reactie per feedbackmoment. Tekst en beeld laten maken kan een aparte opdracht zijn.',
              ],
              [
                'Wat je van mij ontvangt',
                'Een voorstel met concrete oplevering en een preview op afgesproken momenten. Welke bronbestanden, accounts en uitleg je krijgt staat in de offerte.',
              ],
              [
                'Wat de investering bepaalt',
                'De omvang, inhoud, ontwerpdiepgang en functies. Je kiest onderhoud apart. Hosting, licenties en andere externe kosten worden vooraf benoemd.',
              ],
            ].map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <details className={styles.detailDisclosure}>
            <summary>Betalen, extra werk en ondersteuning</summary>
            <p>
              Je ontvangt een factuur. Het huidige voorstel is 40% bij opdracht
              en 60% na de afgesproken oplevering; de offerte bepaalt de
              definitieve betaalafspraken. Extra werk begint na akkoord over
              kosten en planning. Er is geen standaard financieringsregeling.
            </p>
            <p>
              Contact en kennismakingen plannen we in overleg, doorgaans op een
              doordeweekse avond. Onderhoud heeft een afgesproken omvang en
              biedt geen 24/7-servicedesk.
            </p>
          </details>
          <Link className={styles.textLink} href="/services/prijsindicatie">
            Bekijk je mogelijkheden & kosten ↗
          </Link>
        </div>
      </section>
      <ContactSection />
    </ServicesShell>
  );
}
