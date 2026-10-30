import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicesShell, PageIntro } from '../services-shared';
import styles from '../services.module.css';
import ui from '../studio.module.css';
export const metadata: Metadata = {
  title: 'Digitale producten — in ontwikkeling | Celine de Graaf',
  description:
    'Een toekomstige collectie digitale producten van Celine de Graaf. Het aanbod wordt nog ontwikkeld; er zijn nog geen producten te koop.',
};
export default function ProductsPage() {
  return (
    <ServicesShell current="/services/producten">
      <PageIntro
        label="De digitale collectie · in ontwikkeling"
        title="Handig voor je werk."
        emphasis="Gemaakt om te gebruiken."
        links={[{ href: '#collectie', label: 'Over de collectie' }]}
      >
        <p>
          Naast werk op maat wil ik digitale producten ontwikkelen die je zelf
          kunt gebruiken. De eerste producten, inhoud en prijzen worden nog
          bepaald.
        </p>
      </PageIntro>
      <section id="collectie" className={`${styles.section} ${styles.shell}`}>
        <div className={ui.productPreview}>
          <div className={ui.productArt} aria-hidden="true">
            <span>CELINE DE GRAAF / DIGITAL COLLECTION</span>
            <strong>
              Een nieuw idee
              <br />
              krijgt vorm.
            </strong>
            <i>In ontwikkeling</i>
          </div>
          <div>
            <span className={ui.stamp}>Nog niet te koop</span>
            <h2>
              Een kleine collectie.
              <br />
              <em>Met een duidelijk doel.</em>
            </h2>
            <p>
              Het uitgangspunt: producten waarvan je vooraf kunt bekijken wat ze
              doen, voor wie ze bedoeld zijn en wat je ontvangt. Er staat op dit
              moment nog geen product te koop.
            </p>
            <p>
              Loop je tegen iets aan dat een handige template of digitale tool
              zou kunnen oplossen? Ik hoor graag je idee.
            </p>
            <div className={styles.actionRow}>
              <Link
                className={styles.primaryLink}
                href="/services/contact?interesse=product"
              >
                Deel je productidee ↗
              </Link>
              <Link className={styles.textLink} href="/services">
                Bekijk werk op maat
              </Link>
            </div>
          </div>
        </div>
        <p className={styles.note}>
          Dit is een aankondiging van de collectie. Er is nog geen bestel- of
          betaalmogelijkheid.
        </p>
      </section>
    </ServicesShell>
  );
}
