import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, MonitorPlay, Clapperboard, ArrowUpRight } from 'lucide-react';
import {
  FAQ,
  PageIntro,
  SectionHeading,
  ServicesShell,
} from '../services-shared';
import styles from '../services.module.css';
import ui from './ugc.module.css';

export const metadata: Metadata = {
  title: 'UGC & productcontent op aanvraag | Celine de Graaf',
  description:
    'Korte productvideo’s, appdemo’s en contentreeksen voor jouw merk. Heldere afspraken over opname, montage, feedback, gebruik en kosten. Op offerte.',
};
const formats = [
  {
    icon: Camera,
    title: 'Product in beeld',
    text: 'Een product laten zien in gebruik, een detail uitlichten of een korte demonstratie.',
    delivery:
      'Een gemonteerde verticale video, met afgesproken tekst of voice-over.',
    input:
      'Jij levert het product, de juiste productinformatie en de gewenste boodschap.',
  },
  {
    icon: MonitorPlay,
    title: 'App of dienst uitgelegd',
    text: 'Een schermdemo of walkthrough die laat zien hoe een digitale dienst werkt.',
    delivery:
      'Een gemonteerde schermopname met uitleg en een duidelijke vervolgstap.',
    input:
      'Jij levert een demo-account met fictieve gegevens en de functies die centraal staan.',
  },
  {
    icon: Clapperboard,
    title: 'Een kleine contentreeks',
    text: 'Meerdere korte video’s rond één product of thema, voorbereid in één briefing.',
    delivery:
      'Een afgesproken aantal video’s of varianten, klaar voor de gekozen kanalen.',
    input:
      'We leggen vast welke versies echt nieuwe video’s zijn en welke alleen een andere opening krijgen.',
  },
];
export default function UgcPage() {
  return (
    <ServicesShell current="/services/ugc">
      <PageIntro
        label="UGC & productcontent · op aanvraag"
        title="Laat zien hoe"
        emphasis="het écht werkt."
        links={[
          { href: '#mogelijkheden', label: 'Soorten content' },
          { href: '#kosten', label: 'Prijsopbouw' },
          { href: '#werkwijze', label: 'Zo werkt het' },
          { href: '#aanvraag', label: 'Bespreek je idee' },
        ]}
      >
        <p>
          Korte, persoonlijke video’s waarmee je product, app of dienst
          begrijpelijk wordt. Ik maak content die jouw merk zelf kan gebruiken,
          van een productdemonstratie tot een schermdemo.
        </p>
        <p>
          Een eerste opdracht is op aanvraag. We bepalen samen of je product,
          stijl en gewenste planning passen voordat je een offerte ontvangt.
        </p>
      </PageIntro>
      <section
        id="mogelijkheden"
        className={`${styles.section} ${styles.shell}`}
      >
        <SectionHeading id="ugc-formats">Wat wil je laten zien?</SectionHeading>
        <div className={ui.formats}>
          {formats.map(({ icon: Icon, title, text, delivery, input }, i) => (
            <article key={title}>
              <div className={ui.cardTop}>
                <span>0{i + 1}</span>
                <Icon size={26} strokeWidth={1.3} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <dl>
                <dt>Je ontvangt</dt>
                <dd>{delivery}</dd>
                <dt>Jouw input</dt>
                <dd>{input}</dd>
              </dl>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          Dit zijn mogelijke opdrachtvormen, geen voorbeelden van eerder
          klantwerk. Portfoliofragmenten volgen zodra er passend eigen werk
          beschikbaar is.
        </p>
      </section>
      <section className={styles.paperBand}>
        <div className={`${styles.section} ${styles.shell} ${ui.storyboard}`}>
          <div>
            <p className={styles.eyebrow}>Voorbeeldopbouw · geen klantcase</p>
            <h2>
              Een helder verhaal.
              <br />
              <em>In drie momenten.</em>
            </h2>
            <p>
              Bijvoorbeeld: één verticale productdemo van ongeveer 20–30
              seconden. De lengte, verhouding en inhoud bepalen we in de
              briefing.
            </p>
            <p>
              Dit storyboard laat de opbouw zien. Het is geen video of bewijs
              van campagneresultaten.
            </p>
          </div>
          <ol className={ui.frames}>
            <li>
              <span>01 / OPENING</span>
              <strong>
                Herkenbaar
                <br />
                begin.
              </strong>
              <p>Welke vraag of situatie herkent de kijker?</p>
            </li>
            <li>
              <span>02 / DEMONSTRATIE</span>
              <strong>
                Laat het
                <br />
                zien.
              </strong>
              <p>Het product in gebruik of één duidelijke handeling.</p>
            </li>
            <li>
              <span>03 / VERVOLG</span>
              <strong>
                Een volgende
                <br />
                stap.
              </strong>
              <p>Waar vindt de kijker meer informatie?</p>
            </li>
          </ol>
        </div>
      </section>
      <section id="kosten" className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="ugc-costs">Waar betaal je voor?</SectionHeading>
        <div className={ui.costs}>
          <div>
            <p className={ui.quote}>
              Op offerte<small>per afgesproken opdracht · excl. btw</small>
            </p>
            <p>
              Je ontvangt vooraf een totaalvoorstel. Het aantal video’s alleen
              bepaalt de prijs niet: voorbereiding, opname, montage en het
              gewenste gebruik tellen ook mee.
            </p>
            <Link
              className={styles.primaryLink}
              href="/services/prijsindicatie?dienst=ugc#samenstellen"
            >
              Stel je UGC-vraag samen{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <dl className={ui.breakdown}>
            <div>
              <dt>01 · Voorbereiding</dt>
              <dd>
                Briefing, concept, script en afspraken over wat er in beeld
                komt.
              </dd>
            </div>
            <div>
              <dt>02 · Maken & monteren</dt>
              <dd>
                Aantal video’s, opnameduur, setting, voice-over, ondertiteling
                en afgesproken feedback.
              </dd>
            </div>
            <div>
              <dt>03 · Gebruik & versies</dt>
              <dd>
                Kanalen en gebruiksduur. Betaalde advertenties, extra
                openingszinnen, formaten en ruwe opnames worden apart benoemd.
              </dd>
            </div>
            <div>
              <dt>04 · Eventuele extra’s</dt>
              <dd>
                Productverzending, retour, locatie, reis- of licentiekosten
                staan vooraf apart in het voorstel.
              </dd>
            </div>
          </dl>
        </div>
        <div className={ui.boundary}>
          <h3>Wat zit er niet automatisch bij?</h3>
          <p>
            Publicatie op mijn eigen account, toegang tot een volgerspubliek,
            dagelijks socialmediabeheer, advertenties inkopen, ruwe bestanden,
            exclusiviteit en onbeperkte heropnames. Ook bereik, views of verkoop
            worden niet gegarandeerd.
          </p>
          <p>
            Wil je ontwerpen, bijschriften of publicatie op jouw
            bedrijfsaccounts? Bekijk{' '}
            <Link
              className={styles.inlineLink}
              href="/services/socialmedia-design"
            >
              Content & design
            </Link>
            . UGC-opnames vallen buiten de set van zes statische ontwerpen.
          </p>
        </div>
      </section>
      <section id="werkwijze" className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="ugc-process">
          Eén briefing. Afgesproken momenten.
        </SectionHeading>
        <ol className={styles.simpleSteps}>
          <li>
            <span className={styles.stepLabel}>01</span>
            <h3>Briefing & voorstel</h3>
            <p>
              Je deelt product, doelgroep, boodschap, gewenste kanalen en
              deadline. We spreken deliverables, prijs, planning en gebruik af.
            </p>
          </li>
          <li>
            <span className={styles.stepLabel}>02</span>
            <h3>Concept & opname</h3>
            <p>
              Je keurt de richting goed voordat ik opneem. We verzamelen
              feedback op één plek, op vooraf afgesproken momenten.
            </p>
          </li>
          <li>
            <span className={styles.stepLabel}>03</span>
            <h3>Montage & oplevering</h3>
            <p>
              Je beoordeelt een preview. Na de afgesproken correcties ontvang je
              de definitieve bestanden en een overzicht van de
              gebruiksafspraken.
            </p>
          </li>
        </ol>
        <details className={styles.detailDisclosure}>
          <summary>Tools, bestanden en feedback</summary>
          <p>
            Opname gebeurt afhankelijk van het concept met camera of
            schermopname. In de offerte staat welke montage- of ontwerptool
            nodig is en of een betaalde licentie apart voor jouw opdracht nodig
            is. Je hoeft geen montagesoftware aan te schaffen om een afgesproken
            MP4-bestand te gebruiken.
          </p>
          <p>
            Videoformaat, resolutie, ondertiteling en aantal correctierondes
            spreken we vooraf af. Een nieuw script of nieuwe opname na akkoord
            op de richting kan extra werk zijn; dat bespreken we vóór
            uitvoering.
          </p>
        </details>
      </section>
      <FAQ
        items={[
          [
            'Wat is UGC hier precies?',
            'UGC staat voor user-generated content. Hier betekent het: content die ik als maker in opdracht voor jouw merk produceer. Het is geen onafhankelijke klantreview. Een demonstratie of ervaring moet passen bij wat ik werkelijk heb gebruikt of kan laten zien.',
          ],
          [
            'Plaats jij de video ook op je eigen TikTok of Instagram?',
            'Dat is geen standaardonderdeel. De basis is content voor jouw merk. Een samenwerking inclusief publicatie op mijn eigen kanalen bespreken we afzonderlijk.',
          ],
          [
            'Mag ik de video als advertentie gebruiken?',
            'Alleen volgens de afspraken in de offerte. Geef vooraf aan of je organische posts, betaalde advertenties of advertenties via een creator-account wilt inzetten. Kanalen, looptijd, eventuele aanpassingen en kosten leggen we apart vast.',
          ],
          [
            'Kan ik direct een abonnement bestellen?',
            'Nee. We starten met een afgebakende opdracht en kijken daarna of een vaste reeks passend en haalbaar is. Via deze site doe je een vrijblijvende aanvraag.',
          ],
        ]}
      />
      <section
        id="aanvraag"
        className={`${styles.section} ${styles.shell} ${ui.enquiry}`}
      >
        <p className={styles.eyebrow}>Vertel wat je wilt laten zien</p>
        <h2>
          Een product, app
          <br />
          <em>of verhaal in gedachten?</em>
        </h2>
        <p>
          Deel je product, doelgroep, gewenste aantal video’s en waar je ze wilt
          gebruiken. Dan bekijken we wat past.
        </p>
        <Link
          className={styles.primaryLink}
          href="/services/contact?interesse=ugc#aanvraag"
        >
          Bespreek mijn UGC-idee <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </ServicesShell>
  );
}
