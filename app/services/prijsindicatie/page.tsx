import Link from 'next/link';
import type { Metadata } from 'next';
import { ContactSection, PageIntro, SectionHeading, ServicesShell } from '../services-shared';
import { websitePackages } from '../website-packages';
import styles from '../services.module.css';

export const metadata: Metadata = {
  title: 'Prijsindicatie websites | Celine de Graaf',
  description: 'Bekijk de richtbedragen voor vijf websitetrajecten. Je ontvangt vooraf een offerte met de afgesproken omvang en definitieve totaalprijs. Alle bedragen exclusief btw.',
};

export default function PriceIndicationPage() {
  return (
    <ServicesShell current="/services/prijsindicatie">
      <PageIntro label="Prijsindicatie websites" title="Een idee van" emphasis="je investering."
        links={[{ href: '#richtbedragen', label: 'Richtbedragen' }, { href: '#afspraken', label: 'Heldere afspraken' }, { href: '#contact', label: 'Bespreek je project' }]}>
        <p>De omvang van je project bepaalt de investering. Hieronder zie je eigen
          richtbedragen voor een omschreven basis. Alle vijf trajecten zijn op offerte:
          je ontvangt vooraf een vaste totaalprijs voor de afgesproken werkzaamheden.</p>
      </PageIntro>
      <section id="richtbedragen" className={`${styles.section} ${styles.shell}`} aria-labelledby="richtbedragen-title">
        <SectionHeading id="richtbedragen-title">Vijf trajecten, een passende basis.</SectionHeading>
        <p className={styles.note}>Alle bedragen zijn exclusief btw en eenmalig voor het project. Het zijn prijsindicaties, geen vaste pakketprijzen.</p>
        <div className={styles.priceTableWrap}>
          <table className={styles.priceTable}>
            <caption>Websiteprojecten: richtbedragen en uitgangspunten</caption>
            <thead><tr><th scope="col">Traject</th><th scope="col">Prijsindicatie</th><th scope="col">Uitgangspunt</th></tr></thead>
            <tbody>{websitePackages.map((item) => (
              <tr key={item.name}><th scope="row"><Link className={styles.inlineLink} href={`/services/websites/${item.slug}`}>{item.name}</Link></th><td>{item.price}</td><td>{item.basis}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </section>
      <section id="afspraken" className={styles.softBand} aria-labelledby="afspraken-title">
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="afspraken-title">Van richtbedrag naar duidelijk voorstel.</SectionHeading>
          <div className={styles.twoColumns}>
            <article><h3>Vooraf weten waar je aan toe bent</h3>
              <p>We bepalen samen de pagina’s, functies, inhoud en gewenste uitstraling.
                Een beperkte uitbreiding kan de prijs beïnvloeden. Bij duidelijk meer werk
                bespreken we vooraf een ander traject of maatwerk.</p>
              <p>De offerte legt de definitieve omvang, totaalprijs en planning vast.
                Extra werk wordt pas uitgevoerd na jouw akkoord op kosten en planning.</p>
            </article>
            <article><h3>Wat spreken we apart af?</h3>
              <p>Hosting, domeinnaam, licenties en betaalde tools zijn afzonderlijke kosten.
                Teksten schrijven, fotografie, branding, meertaligheid, webshops,
                betalingen, complexe koppelingen en tracking zijn niet automatisch inbegrepen.</p>
              <p>Ook onderhoud en doorontwikkeling na oplevering zijn aparte afspraken.
                Een onderhoudsabonnement is niet verplicht. Afgesproken uitzonderingen
                staan expliciet in je offerte.</p>
            </article>
          </div>
        </div>
      </section>
      <ContactSection title="Welk traject past bij jouw idee?" text="Vertel wat je wilt bereiken en welke inhoud je al hebt. Dan maken we de omvang en investering concreet." subject="Prijsindicatie voor mijn website" />
    </ServicesShell>
  );
}
