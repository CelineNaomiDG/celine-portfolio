/* Scroll containers remain keyboard-focusable for horizontal table navigation. */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/prefer-tag-over-role */
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
  title: 'Onderhoud & beheer voor je website | Celine de Graaf',
  description:
    'Optionele maandpakketten voor technische websitecontroles, kleine tekst- en beeldwijzigingen en beperkte verbeteringen. Bekijk precies wat inbegrepen is.',
};

const plans = [
  {
    name: 'Basis',
    price: '€49',
    allowance: '30 minuten technisch werk per maand',
    text: 'Een maandelijks moment voor technische updates en controles, passend bij de techniek van je website. Ik controleer de opbouw en publicatie van de site en het afgesproken herstelpunt. Je ontvangt een kort verslag.',
    note: 'Geen tekst- of beeldwijzigingen inbegrepen.',
  },
  {
    name: 'Beheer',
    price: '€99',
    allowance: 'Basis + 45 minuten voor tekst en beeld',
    text: 'Alles uit Basis, plus 45 minuten per maand voor kleine aanpassingen aan bestaande teksten en afbeeldingen. Bijvoorbeeld een nieuwe foto of aangepaste openingstijden.',
    note: 'De 30 minuten technisch werk en de 45 minuten inhoudelijke wijzigingen zijn aparte tijdsblokken.',
  },
  {
    name: 'Doorontwikkeling',
    price: '€179',
    allowance: 'Basis + 2 uur voor kleine verbeteringen',
    text: 'Alles uit Basis, plus 2 uur per maand voor wijzigingen en kleine verbeteringen aan je website. Grotere functies of veranderingen worden eerst apart besproken.',
    note: 'De 30 minuten technisch werk en de 2 uur wijzigingen en verbeteringen zijn aparte tijdsblokken.',
  },
];

export default function MaintenancePage() {
  return (
    <ServicesShell current="/services/onderhoud">
      <PageIntro
        label="Onderhoud & beheer"
        title="Je website blijft aandacht vragen."
        emphasis="Je hoeft het niet alleen te doen."
        links={[
          { href: '#verschil', label: 'Welke hulp?' },
          { href: '#pakketten', label: 'Maandpakketten' },
          { href: '#afspraken', label: 'De afspraken' },
          { href: '#contact', label: 'Contact' },
        ]}
      >
        <p>
          Wil je hulp bij het bijhouden van je website? Kies technische
          ondersteuning, kleine inhoudelijke wijzigingen of allebei. De
          maandpakketten zijn optioneel en gelden voor één afgesproken website.
        </p>
      </PageIntro>
      <section
        id="verschil"
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="verschil-title"
      >
        <SectionHeading id="verschil-title">
          Twee soorten aandacht.
        </SectionHeading>
        <div className={styles.twoColumns}>
          <article data-reveal>
            <h3>De techniek bijhouden</h3>
            <p>
              Een afgesproken moment om updates en de technische werking te
              bekijken. Denk aan controleren of de site nog goed wordt opgebouwd
              en gepubliceerd, en of het afgesproken herstelpunt beschikbaar is.
            </p>
            <p>
              Wat er precies nodig is, hangt af van de techniek waarmee je
              website is gemaakt.
            </p>
          </article>
          <article data-reveal data-reveal-delay="100">
            <h3>De inhoud aanpassen</h3>
            <p>
              Een foto vervangen, tekst bijwerken of een klein onderdeel
              verbeteren. Daarvoor is in Beheer en Doorontwikkeling aparte tijd
              beschikbaar.
            </p>
            <p>
              Een nieuwe pagina, betaalfunctie of grote technische reparatie
              valt niet vanzelf onder kleine wijzigingen. Dat bespreken we
              eerst.
            </p>
          </article>
        </div>
      </section>
      <section
        id="pakketten"
        className={styles.softBand}
        aria-labelledby="pakketten-title"
      >
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="pakketten-title">
            Kies wat bij je website past.
          </SectionHeading>
          <PriceNote />
          <div className={styles.priceTableWrap} tabIndex={0} role="region" aria-label="Vergelijk onderhoudspakketten"><table className={styles.priceTable}><caption>Je maandpakket in één overzicht</caption><thead><tr><th scope="col">Per maand</th><th scope="col">Basis · €49</th><th scope="col">Beheer · €99</th><th scope="col">Doorontwikkeling · €179</th></tr></thead><tbody>{[
            ['Technische tijd','30 minuten','30 minuten','30 minuten'],
            ['Tekst, beeld & kleine verbeteringen','Niet inbegrepen','45 minuten tekst en beeld','2 uur wijzigingen en verbeteringen'],
            ['Voorbeeld','Technisch controlemoment','Foto of openingstijden aanpassen','Bestaande sectie verbeteren'],
            ['Kort verslag','Inbegrepen','Inbegrepen','Inbegrepen'],
            ['Hosting & licenties','Apart','Apart','Apart'],
            ['Nieuwe functies & grote reparaties','Aparte offerte','Aparte offerte','Aparte offerte'],
          ].map(([label,...cells])=><tr key={label}><th scope="row">{label}</th>{cells.map((cell,i)=><td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>
          <p className={styles.note}>Exclusief btw. Voorbeelden moeten binnen de beschikbare tijd passen; ongebruikte tijd vervalt per maand.</p>
          <div className={styles.maintenancePlans}>
            {plans.map((plan) => (
              <article key={plan.name} data-reveal>
                <div>
                  <h3>{plan.name}</h3>
                  <p className={styles.price}>
                    <strong>{plan.price}</strong>
                    <span>per maand · excl. btw</span>
                  </p>
                </div>
                <div>
                  <h4>{plan.allowance}</h4>
                  <p>{plan.text}</p>
                  <p className={styles.note}>{plan.note}</p>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.note}>
            Deze pakketten zijn voor websites. Beheer van software, apps of een
            SaaS-product wordt apart afgesproken en geoffreerd.{' '}
            <Link href="/services/software-apps" className={styles.inlineLink}>
              Lees over software & apps
            </Link>
            .
          </p>
        </div>
      </section>
      <section
        id="afspraken"
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="afspraken-title"
      >
        <SectionHeading id="afspraken-title">
          Zo houden we het duidelijk.
        </SectionHeading>
        <div className={styles.agreementList}>
          <article data-reveal>
            <h3>Beschikbare tijd</h3>
            <p>
              De genoemde tijd is het maximum per maand voor één afgesproken
              website. Ongebruikte tijd vervalt aan het einde van de maand. Werk
              buiten die tijd of grotere herstelwerkzaamheden worden eerst
              voorgesteld en pas na jouw akkoord uitgevoerd.
            </p>
            <ExtraWorkNote />
          </article>
          <article data-reveal>
            <h3>Contact en reactie</h3>
            <p>
              Het voorstel is een reactie binnen 2 werkdagen. Ik werk op afspraak,
              doorgaans in de avond; er is geen servicedesk die overdag direct beschikbaar is. Dat is de tijd om te reageren, niet de belofte
              dat het probleem dan is opgelost. Er is geen 24/7-dienst,
              beschikbaarheidsgarantie of veiligheidsgarantie.
            </p>
          </article>
          <article data-reveal>
            <h3>Betaling en stoppen</h3>
            <p>
              Je betaalt vooraf per maand. Opzeggen kan per e-mail met één maand
              opzegtermijn. Bij het laten bouwen van een website is een
              maandpakket niet verplicht.
            </p>
          </article>
          <article data-reveal>
            <h3>Wat er los van staat</h3>
            <p>
              Bouw en inrichting zijn niet inbegrepen. Domeinnaam, hosting en
              licenties betaal je apart. Bij een website van een andere maker of
              een complexe website kan eerst een technische controle nodig zijn;
              die eerste controle wordt apart geoffreerd.
            </p>
          </article>
        </div>
      </section>
      <FAQ
        items={[
          [
            'Kan ik ook af en toe een wijziging laten doen?',
            'Ja, we kunnen losse werkzaamheden bespreken zonder maandpakket. Je krijgt eerst een voorstel of we spreken €60 per uur exclusief btw af. Ik houd de tijd bij per 15 minuten en voer extra werk pas na jouw akkoord uit.',
          ],
          [
            'Wat als mijn website meer tijd nodig heeft?',
            'Dan bespreken we wat nodig is, welke werkzaamheden voorrang hebben en wat extra werk kost. De maandpakketten bieden een begrensde hoeveelheid tijd, geen onbeperkte ondersteuning of gegarandeerde oplossing van elk probleem.',
          ],
          [
            'Kan ik onderhoud voor een bestaande website aanvragen?',
            'Ja. We bekijken eerst de techniek en de beschikbare toegang. Voor een externe of complexe website wordt een eerste technische controle apart geoffreerd. Daarna bepalen we of en welk pakket passend is.',
          ],
          [
            'Zijn deze pakketten ook voor mijn app of SaaS-product?',
            'Nee. Software met gebruikersaccounts, gegevens en koppelingen vraagt eigen afspraken over controles, ondersteuning en kosten. Dat onderzoeken en offreren we apart. De websitepakketten bieden geen doorlopend toezicht op een softwareproduct.',
          ],
        ]}
      />
      <ContactSection
        title="Welke hulp past bij jouw website?"
        text="Stuur je website mee en vertel of je technische ondersteuning, kleine wijzigingen of allebei zoekt. Dan kijken we naar de passende afspraken."
        subject="Onderhoud voor mijn website"
      />
    </ServicesShell>
  );
}
