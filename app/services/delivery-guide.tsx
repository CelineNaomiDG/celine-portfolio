import Link from 'next/link';
import styles from './services.module.css';
import ui from './studio.module.css';
export default function DeliveryGuide({
  kind,
}: {
  kind: 'content' | 'visibility';
}) {
  const content = kind === 'content';
  const cards = content
    ? [
        [
          '01 / Ontwerpen',
          'Bestanden die je direct kunt gebruiken.',
          'Jij levert definitieve tekst, logo en bruikbaar beeld. Ik werk een visuele richting uit en maak de afgesproken ontwerpen.',
          'PNG/JPG voor social; drukklare PDF voor een flyer. Eén gebundelde feedbackronde.',
          'Canva of Affinity, afhankelijk van het ontwerp. Bewerkbare bestanden alleen wanneer opgenomen in de offerte.',
        ],
        [
          '02 / Tekst & planning',
          'Eerst een plan, dan de inhoud.',
          'We bepalen onderwerp, doelgroep, aantal unieke berichten en kanaal. Je ontvangt conceptbijschriften en een kalender ter goedkeuring.',
          'Afgesproken teksten en kalender. Ontwerpen, beeldonderzoek en extra talen worden als eigen onderdelen benoemd.',
          'Een gedeeld document of overzicht. AI kan helpen bij een eerste versie; inhoud en bedrijfsclaims worden door ons gecontroleerd.',
        ],
        [
          '03 / Publicatie',
          'Goedgekeurd werk op het juiste kanaal.',
          'Na jouw akkoord plan ik afgesproken berichten in. We leggen vast wie reacties beantwoordt en wat er gebeurt als materiaal of akkoord later komt.',
          'Een plaatsingsplanning en controle van de geplande berichten. Dagelijkse reacties, spoed en advertenties vallen erbuiten.',
          'Bijvoorbeeld Buffer voor passende kanalen. Eerst controleren we accounttype, toegangsrechten en ondersteunde formaten.',
        ],
      ]
    : [
        [
          '01 / Vindbaarheid',
          'Een overzicht van wat beter kan.',
          'We kiezen de pagina’s en vragen waarop je gevonden wilt worden. Ik controleer indexeerbaarheid, titels, interne links en de inhoud.',
          'Een prioriteitenlijst. Uitvoering is een apart benoemde stap; na uitvoering ontvang je een wijzigingsoverzicht.',
          'Google Search Console voor indexering en zoekverkeer, plus controle van je websitecode. Toegang via jouw eigen account.',
        ],
        [
          '02 / Snelheid & gebruik',
          'Een prettiger pad naar contact.',
          'Ik controleer de afgesproken pagina’s op mobiel en desktop, met aandacht voor laden, navigatie en contactacties.',
          'Bevindingen, afgesproken verbeteringen en een vergelijking onder dezelfde testomstandigheden. Een testscore is geen garantie voor iedere bezoeker.',
          'PageSpeed Insights, Lighthouse en browsercontroles. Waar beschikbaar bekijken we ook praktijkgegevens van echte bezoeken.',
        ],
        [
          '03 / Meten & inzicht',
          'Begrijpen wat bezoekers doen.',
          'We bepalen eerst welke gebeurtenissen relevant zijn. Een klik op een contactknop is bijvoorbeeld iets anders dan een verzonden aanvraag.',
          'Een meetplan, de afgesproken inrichting, een test en uitleg. Een periodiek rapport alleen als dat apart is afgesproken.',
          'Bijvoorbeeld GA4, eventueel Google Tag Manager. Toolkeuze en privacy-inrichting stemmen we eerst af; dit is geen automatische installatie op iedere site.',
        ],
      ];
  return (
    <section className={`${styles.section} ${styles.shell}`} id="uitvoering">
      <p className={ui.stamp}>Zo werkt de opdracht</p>
      <h2>
        Wat ik doe.
        <br />
        <em>Wat jij ontvangt.</em>
      </h2>
      <div className={ui.deliverables}>
        {cards.map(([tag, title, work, delivery, tools]) => (
          <article key={tag}>
            <span className={ui.stamp}>{tag}</span>
            <h3>{title}</h3>
            <p>{work}</p>
            <strong>Oplevering</strong>
            <p>{delivery}</p>
            <details className={styles.detailDisclosure}>
              <summary>Tools & samenwerking</summary>
              <p>{tools}</p>
            </details>
          </article>
        ))}
      </div>
      <div className={styles.twoColumns} style={{ marginTop: 40 }}>
        <article>
          <h3>Zo wordt je prijs opgebouwd</h3>
          <p>
            {content
              ? 'Ontwerp + eventuele tekst + extra formaten + eventuele publicatie. Een bericht op twee kanalen is niet automatisch twee unieke ontwerpen, maar vraagt soms wel een aanpassing en twee plaatsingen.'
              : 'Aantal en type pagina’s + diepgang van de controle + uitvoerwerk + gewenste rapportage. Een analyse en de oplossing zijn aparte onderdelen, zodat je weet waarvoor je betaalt.'}
          </p>
          <p>
            Je ontvangt vooraf een afgebakend voorstel. Daarin staan aantallen,
            feedback, benodigde toegang, planning en eventuele terugkerende
            kosten. Meerwerk begint pas na akkoord.
          </p>
        </article>
        <article>
          <h3>
            {content
              ? 'Een concreet rekenvoorbeeld'
              : 'Een concreet opdrachtvoorbeeld'}
          </h3>
          <p>
            {content
              ? 'Zes statische ontwerpen, in één afgesproken formaat per ontwerp, met aangeleverde tekst en beeld: €225 excl. btw. Dat is €37,50 per ontwerp binnen deze set. Bijschriften laten schrijven, stories erbij of berichten laten plaatsen? Die krijgen een aparte prijs in het voorstel.'
              : 'Een controle van drie gekozen dienstenpagina’s kan bestaan uit een bevindingenlijst, een afzonderlijke prijs voor aanpassingen en een controle na uitvoering. Dit is een voorbeeld van de scope; er staat nog geen vaste pakketprijs voor.'}
          </p>
          <p>
            {content
              ? 'Een losse visual vanaf €45 en een flyer vanaf €95 zijn andere opdrachten. “Vanaf” geldt voor de beschreven basis; afwijkende omvang wordt eerst begroot.'
              : 'Een eenmalige verbeteropdracht is geen doorlopend SEO-abonnement. Werk dat al in je websitepakket is afgesproken, wordt niet dubbel berekend.'}
          </p>
        </article>
      </div>
      <details className={styles.detailDisclosure}>
        <summary>Wie betaalt tools en externe kosten?</summary>
        <p>
          Mijn gewone ontwerp- en ontwikkeltools zitten in de afgesproken
          projectprijs. Een klantgebonden abonnement, betaalde afbeelding,
          drukwerk, advertentiebudget of externe dienst wordt vooraf apart
          benoemd. Je houdt je eigen accounts; toegang regel je met een
          uitnodiging, niet met een wachtwoord per e-mail. Je hoeft niet voor
          iedere genoemde tool een abonnement te nemen.
        </p>
      </details>
      {!content && (
        <details className={styles.detailDisclosure}>
          <summary>Wat betekent vindbaarheid in AI precies?</summary>
          <p>
            Ik werk aan heldere, betrouwbare inhoud en een technisch
            toegankelijke website. Voor Google’s AI-zoekfuncties blijft een
            goede SEO-basis relevant. Een vermelding in een AI-antwoord, een
            vaste positie of extra aanvragen kan ik niet garanderen. Er wordt
            geen los “AI-trucje” als gegarandeerd resultaat verkocht.
          </p>
          <a href="https://developers.google.com/search/docs/appearance/ai-features">
            Lees de uitleg van Google ↗
          </a>
        </details>
      )}
      <Link
        className={styles.textLink}
        href={`/services/prijsindicatie?dienst=${content ? 'design' : 'visibility'}`}
      >
        Stel je opdracht samen ↗
      </Link>
    </section>
  );
}
