import PriceBuilder from '../price-builder';
import PackageComparison from '../package-comparison';
import type { Metadata } from 'next';
import {
  ContactSection,
  PageIntro,
  SectionHeading,
  ServicesShell,
} from '../services-shared';
import styles from '../services.module.css';

export const metadata: Metadata = {
  title: 'Stel je project samen & bekijk je prijsindicatie | Celine de Graaf',
  description:
    'Kies een website, ontwerp, onderhoud of maatwerk. Bekijk bekende kosten en apart te begroten wensen zonder account. Eenmalige en maandelijkse bedragen duidelijk gescheiden.',
};

export default async function PriceIndicationPage({
  searchParams,
}: {
  searchParams: Promise<{ dienst?: string; pakket?: string; ontwerp?: string }>;
}) {
  const { dienst, pakket, ontwerp } = await searchParams;
  return (
    <ServicesShell current="/services/prijsindicatie">
      <PageIntro
        label="Jouw project, jouw keuzes"
        title="Wat wil je maken?"
        emphasis="Ontdek wat erbij hoort."
        links={[
          { href: '#samenstellen', label: 'Stel je project samen' },
          { href: '#richtbedragen', label: 'Websites vergelijken' },
          { href: '#afspraken', label: 'Heldere afspraken' },
          { href: '#contact', label: 'Bespreek je project' },
        ]}
      >
        <p>
          Kies wat je nodig hebt en zie meteen de bekende kosten, wat erbij
          hoort en welke wensen nog apart begroot worden. Zonder account of
          e-mailadres. De offerte maakt de definitieve omvang en totaalprijs
          concreet.
        </p>
      </PageIntro>
      <section
        id="samenstellen"
        className={`${styles.section} ${styles.shell}`}
        aria-label="Project samenstellen"
      >
        <PriceBuilder
          key={`${dienst}-${pakket}-${ontwerp}`}
          initialService={dienst}
          initialWebsite={pakket}
          initialDesign={ontwerp}
        />
      </section>
      <section
        id="richtbedragen"
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="richtbedragen-title"
      >
        <SectionHeading id="richtbedragen-title">
          Vijf trajecten, een passende basis.
        </SectionHeading>
        <p className={styles.note}>
          Alle bedragen zijn exclusief btw en eenmalig voor het project. Het
          zijn prijsindicaties, geen vaste pakketprijzen.
        </p>
        <details className={styles.detailDisclosure}>
          <summary>Vergelijk alle vijf websitetrajecten</summary>
          <PackageComparison />
        </details>
      </section>
      <section
        id="afspraken"
        className={styles.softBand}
        aria-labelledby="afspraken-title"
      >
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="afspraken-title">
            Van richtbedrag naar duidelijk voorstel.
          </SectionHeading>
          <div className={styles.twoColumns}>
            <article>
              <h3>Vooraf weten waar je aan toe bent</h3>
              <p>
                We bepalen samen de pagina’s, functies, inhoud en gewenste
                uitstraling. Een beperkte uitbreiding kan de prijs beïnvloeden.
                Bij duidelijk meer werk bespreken we vooraf een ander traject of
                maatwerk.
              </p>
              <p>
                De offerte legt de definitieve omvang, totaalprijs en planning
                vast. Extra werk wordt pas uitgevoerd na jouw akkoord op kosten
                en planning.
              </p>
            </article>
            <article>
              <h3>Wat spreken we apart af?</h3>
              <p>
                Hosting, domeinnaam, licenties en betaalde tools zijn
                afzonderlijke kosten. Teksten schrijven, fotografie, branding,
                meertaligheid, webshops, betalingen, complexe koppelingen en
                tracking zijn niet automatisch inbegrepen.
              </p>
              <p>
                Ook onderhoud en doorontwikkeling na oplevering zijn aparte
                afspraken. Een onderhoudsabonnement is niet verplicht.
                Afgesproken uitzonderingen staan expliciet in je offerte.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ContactSection
        title="Welk traject past bij jouw idee?"
        text="Vertel wat je wilt bereiken en welke inhoud je al hebt. Dan maken we de omvang en investering concreet."
        subject="Prijsindicatie voor mijn website"
      />
    </ServicesShell>
  );
}
