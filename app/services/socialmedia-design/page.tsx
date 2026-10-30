/* oxlint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/prefer-tag-over-role -- The labelled comparison region must be focusable for keyboard scrolling on small screens. */
import type { Metadata } from 'next';
import Link from 'next/link';
import ConceptGallery from '../concept-gallery';
import {
  ContactSection,
  FAQ,
  PageIntro,
  SectionHeading,
  ServicesShell,
} from '../services-shared';
import {
  designOffers,
  designPriceLabel,
  euro,
  extraWorkHourlyRate,
  socialBudgetExample,
  socialBudgetTotal,
} from '../pricing-data';
import styles from '../services.module.css';
import ui from './social.module.css';
export const metadata: Metadata = {
  title: 'Social media: ontwerpen, content & publicatie | Celine de Graaf',
  description:
    'Vergelijk losse ontwerpen, posts met tekst en maandelijkse content met publicatie. Zes ontwerpen €225 excl. btw. Heldere scope, prijsopbouw en werkwijze.',
};
const choose = (id: string) =>
  `/services/prijsindicatie?dienst=design&ontwerp=${id}#samenstellen`;
const routes = [
  {
    id: 'set',
    number: '01',
    name: 'Alleen ontwerp',
    lead: 'Jij hebt de inhoud. Ik maak er beeld van.',
    price: '€225',
    period: 'eenmalig · set van 6 · excl. btw',
    included: [
      '6 statische ontwerpen',
      '1 afgesproken formaat per ontwerp',
      '1 gezamenlijke feedbackronde',
      'PNG/JPG-bestanden om te plaatsen',
    ],
    customer:
      'Jij levert definitieve tekst, logo en beeld. Jij schrijft eventuele bijschriften en publiceert.',
    cta: 'Kies de ontwerp-set',
  },
  {
    id: 'content',
    number: '02',
    name: 'Posts + teksten',
    lead: 'Een reeks die klaarstaat om te delen.',
    price: 'Op offerte',
    period: 'eenmalig · aantal berichten op afspraak',
    included: [
      'Ontwerpen én bijschriften',
      'Onderwerpen op basis van jouw bedrijf',
      'Contentkalender met publicatievoorstel',
      'Concepten ter goedkeuring',
    ],
    customer:
      'Jij levert bedrijfsinformatie en bruikbaar beeld. Jij keurt goed en publiceert zelf.',
    cta: 'Bespreek een contentreeks',
  },
  {
    id: 'monthly',
    number: '03',
    name: 'Content + publicatie',
    lead: 'Een afgesproken ritme, vooraf geregeld.',
    price: 'Op offerte',
    period: 'per kalendermaand · opstart apart benoemd',
    included: [
      'Ontwerpen, bijschriften en kalender',
      'Inplannen na jouw goedkeuring',
      'Afgesproken kanalen en aantallen',
      'Publicatiecontrole en korte terugblik',
    ],
    customer:
      'Jij levert input en beeld, geeft akkoord en beantwoordt reacties en privéberichten.',
    cta: 'Bespreek maandelijkse content',
  },
];
const comparison = [
  [
    'Ontwerpen',
    '6 statische beelden',
    'Aantal op afspraak',
    'Aantal per kalendermaand',
  ],
  [
    'Bijschriften schrijven',
    'Niet inbegrepen',
    'Onderdeel van de offerte',
    'Onderdeel van de offerte',
  ],
  [
    'Contentkalender',
    'Niet inbegrepen',
    'Onderdeel van de offerte',
    'Onderdeel van de offerte',
  ],
  ['Inplannen & publiceren', 'Doe je zelf', 'Doe je zelf', 'Na jouw akkoord'],
  [
    'Kanalen',
    'Je kiest het exportformaat',
    'Je kiest waar je zelf publiceert',
    'Kanalen en plaatsingen vooraf vastleggen',
  ],
  ['Reacties & privéberichten', 'Doe je zelf', 'Doe je zelf', 'Doe je zelf'],
  [
    'Fotoshoot, Reels & advertenties',
    'Niet inbegrepen',
    'Niet inbegrepen',
    'Niet inbegrepen',
  ],
];
export default function SocialDesignPage() {
  return (
    <ServicesShell current="/services/socialmedia-design">
      <PageIntro
        label="Social media & grafisch ontwerp"
        title="Wat wil jij"
        emphasis="uit handen geven?"
        links={[
          { href: '#diensten', label: 'Vergelijk de diensten' },
          { href: '#tarieven', label: 'Prijzen' },
          { href: '#prijsopbouw', label: 'Zo bereken ik de kosten' },
          { href: '#uitvoering', label: 'Werkwijze & tools' },
        ]}
      >
        <p>
          Alleen een mooi ontwerp? Ook hulp met de tekst? Of de goedgekeurde
          berichten laten inplannen? Kies hoeveel je zelf doet. Hieronder zie je
          de taakverdeling, de oplevering en de kosten.
        </p>
      </PageIntro>
      <section id="diensten" className={`${styles.shell} ${styles.section}`}>
        <SectionHeading id="diensten-title">
          Drie manieren om samen te werken.
        </SectionHeading>
        <div className={ui.cards}>
          {routes.map((r) => (
            <article key={r.id} className={ui.card}>
              <span className={ui.number}>{r.number} / JOUW KEUZE</span>
              <h3>{r.name}</h3>
              <p>{r.lead}</p>
              <div className={ui.price}>
                {r.price}
                <small>{r.period}</small>
              </div>
              <ul>
                {r.included.map((x) => (
                  <li key={x}>
                    <span aria-hidden="true">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
              <p className={ui.customer}>
                <strong>Jouw rol</strong>
                {r.customer}
              </p>
              <Link href={choose(r.id)} className={styles.primaryLink}>
                {r.cta} ↗
              </Link>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          Een aanvraag is vrijblijvend. Bij contentopdrachten bevestigen we
          eerst omvang, feedback, beschikbaarheid en prijs. Er start geen
          abonnement via deze website.
        </p>
      </section>
      <section id="ontwerpen" className={styles.softBand}>
        <div className={`${styles.shell} ${styles.section}`}>
          <SectionHeading id="verschil-title">
            Een ontwerp is geen compleet beheerpakket.
          </SectionHeading>
          <p className={ui.intro}>
            Zo lees je de aantallen: één uniek bericht is één onderwerp met een
            eigen uitwerking. Hetzelfde bericht op Instagram én Facebook zijn
            twee plaatsingen. Een extra storyformaat, carousel of video vraagt
            extra werk.
          </p>
          <div className={ui.counts}>
            <div>
              <strong>6</strong>
              <span>unieke berichten</span>
            </div>
            <b aria-hidden="true">×</b>
            <div>
              <strong>2</strong>
              <span>kanalen</span>
            </div>
            <b aria-hidden="true">=</b>
            <div>
              <strong>12</strong>
              <span>plaatsingen</span>
            </div>
          </div>
          <p className={styles.note}>
            Dit is een telvoorbeeld, geen inbegrepen pakket. Een post per week
            is ook niet hetzelfde als vier posts in iedere kalendermaand.
          </p>
          <div
            className={ui.tableWrap}
            tabIndex={0}
            role="region"
            aria-label="Vergelijking socialmediadiensten, horizontaal scrollbaar"
          >
            <table>
              <caption>Wat hoort bij welke dienst?</caption>
              <thead>
                <tr>
                  <th scope="col">Onderdeel</th>
                  <th scope="col">Alleen ontwerp</th>
                  <th scope="col">Posts + teksten</th>
                  <th scope="col">Content + publicatie</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ...values]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {values.map((v, i) => (
                      <td key={i}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="tarieven" className={`${styles.shell} ${styles.section}`}>
        <SectionHeading id="prijzen-title">
          Liever één ontwerp of een flyer?
        </SectionHeading>
        <p>
          Dit zijn eenmalige ontwerpopdrachten met jouw aangeleverde tekst, logo
          en beeld. Alle bedragen zijn exclusief btw.
        </p>
        <div className={ui.smallCards}>
          {designOffers
            .filter((o) => o.amount !== null)
            .map((o) => (
              <article key={o.id}>
                <h3>{o.title}</h3>
                <strong className={ui.smallPrice}>{designPriceLabel(o)}</strong>
                <p>{o.text}</p>
                <p className={styles.note}>
                  {o.id === 'flyer'
                    ? 'Drukklaar PDF. Drukken en bezorgen betaal je apart.'
                    : 'PNG/JPG. Bijschriften, publiceren en bewerkbare templates zijn niet inbegrepen.'}
                </p>
                <Link href={choose(o.id)} className={styles.textLink}>
                  Bespreek dit ontwerp ↗
                </Link>
              </article>
            ))}
        </div>
        <p className={styles.note}>
          Bij vanafprijzen bevestigt de offerte de prijs voor jouw inhoud en
          uitwerking. De set van zes kost €225 binnen de hierboven beschreven
          omvang. Een nieuwe huisstijl, extra formaten of extra feedback horen
          daar niet automatisch bij.
        </p>
      </section>
      <section id="prijsopbouw" className={styles.softBand}>
        <div className={`${styles.shell} ${styles.section} ${ui.budget}`}>
          <div>
            <span className={styles.eyebrow}>Kosten zonder verrassingen</span>
            <h2>
              Waar betaal je
              <br />
              <em>precies voor?</em>
            </h2>
            <ol className={ui.costSteps}>
              <li>
                <strong>Creatie</strong>Het aantal unieke ontwerpen, teksten en
                formaten.
              </li>
              <li>
                <strong>Voorbereiding & publicatie</strong>Onderwerpen,
                kalender, accordering, kanalen en plaatsingen.
              </li>
              <li>
                <strong>Eenmalige opstart</strong>Bijvoorbeeld toegang instellen
                of een bestaande huisstijl vertalen naar vaste formats. Alleen
                indien nodig en vooraf begroot.
              </li>
              <li>
                <strong>Externe kosten</strong>Klantgebonden software,
                beeldlicenties, drukwerk of advertentiebudget. Vooraf apart
                benoemd.
              </li>
            </ol>
            <p>
              Extra werk kost {euro(extraWorkHourlyRate)} per uur excl. btw, na
              akkoord. Voor een reeks of maandopdracht ontvang je vooraf een
              voorstel; aantallen en tijd worden niet stilzwijgend uitgebreid.
            </p>
          </div>
          <aside
            className={ui.receipt}
            aria-label="Rekenvoorbeeld socialmediakosten"
          >
            <span className={styles.eyebrow}>
              Rekenvoorbeeld · geen pakketprijs
            </span>
            <h3>Van ontwerp naar publicatie</h3>
            <dl>
              <div>
                <dt>6 statische ontwerpen</dt>
                <dd>{euro(socialBudgetExample.design)}</dd>
              </div>
              <div>
                <dt>
                  Stel: 2 uur bijschriften schrijven
                  <small>2 × {euro(extraWorkHourlyRate)}</small>
                </dt>
                <dd>{euro(2 * extraWorkHourlyRate)}</dd>
              </div>
              <div>
                <dt>
                  Stel: 1 uur kalender & inplannen
                  <small>1 × {euro(extraWorkHourlyRate)}</small>
                </dt>
                <dd>{euro(extraWorkHourlyRate)}</dd>
              </div>
              <div className={ui.total}>
                <dt>
                  Voorbeeld subtotaal<small>exclusief btw</small>
                </dt>
                <dd>{euro(socialBudgetTotal)}</dd>
              </div>
            </dl>
            <p>
              De extra uren zijn een aanname, geen gegarandeerde
              uitvoeringstijd. Opstart, extra formaten, rapportage en
              klantgebonden software zitten niet in dit voorbeeld. De offerte
              vermeldt wat jouw opdracht werkelijk kost, eenmalig en/of per
              maand.
            </p>
            <Link href={choose('monthly')} className={styles.textLink}>
              Laat mijn eigen wensen begroten ↗
            </Link>
          </aside>
        </div>
      </section>
      <section id="content" className={`${styles.shell} ${styles.section}`}>
        <SectionHeading id="maand-title">
          Wat spreken we af voor een maand?
        </SectionHeading>
        <div className={ui.monthBrief}>
          {[
            [
              'Omvang',
              'Bijvoorbeeld zes unieke statische posts, met zes bijschriften. We leggen ook taal en formaten vast.',
            ],
            [
              'Publicatie',
              'Bijvoorbeeld dezelfde zes posts op twee geschikte kanalen: twaalf plaatsingen. Kanaalspecifieke varianten tellen apart.',
            ],
            [
              'Afstemming',
              'Eén gezamenlijk akkoordmoment en een afgesproken feedbackronde. Geen publicatie zonder jouw akkoord.',
            ],
            [
              'Terugblik',
              'Een kort overzicht van de geplaatste berichten en beschikbare basisstatistieken. Een uitgebreid dashboard vraagt een aparte afspraak.',
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          Dit is een voorbeeldbriefing. Je offerte bevat de definitieve
          aantallen, maandprijs, eventuele opstart, looptijd en opzegafspraak.
          Dagelijkse webcare, spoedpublicaties en betaalde campagnes horen niet
          bij dit aanbod. Gesprekken plannen we op afspraak, doorgaans op een
          doordeweekse avond.
        </p>
      </section>
      <section id="uitvoering" className={styles.softBand}>
        <div className={`${styles.shell} ${styles.section}`}>
          <SectionHeading id="werkwijze-title">
            Van jouw input naar klaar om te delen.
          </SectionHeading>
          <div className={ui.workflow}>
            {[
              [
                '01',
                'Brief & materialen',
                'We bepalen doelgroep, boodschap, kanalen en aantallen. Jij deelt je logo, huisstijl, bedrijfsinformatie en beelden die je mag gebruiken.',
              ],
              [
                '02',
                'Voorstel & ontwerp',
                'Je ontvangt de scope, prijs en planning. Daarna werk ik de afgesproken ontwerpen en eventuele bijschriften uit.',
              ],
              [
                '03',
                'Bekijken & bijstellen',
                'Je ziet de concepten samen in één overzicht. Je controleert inhoud en feiten en geeft gebundeld feedback.',
              ],
              [
                '04',
                'Opleveren of inplannen',
                'Je ontvangt de bestanden of ik plan goedgekeurde berichten in. We controleren de publicatie en ronden af met de afgesproken terugblik.',
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <details className={styles.detailDisclosure}>
            <summary>
              Welke tools gebruik je en moet ik die zelf betalen?
            </summary>
            <p>
              Voor ontwerpen werk ik met Canva of Affinity, passend bij het
              resultaat. We verzamelen teksten en feedback in een gedeeld
              overzicht. Voor het inplannen kiezen we een passende tool,
              bijvoorbeeld Buffer; het kanaal, accounttype en formaat bepalen
              wat mogelijk is.
            </p>
            <p>
              Mijn gewone ontwerptools zitten in de projectprijs. Een specifiek
              abonnement voor jouw kanalen wordt alleen na overleg apart
              gerekend. Je hoeft dus niet iedere genoemde tool aan te schaffen.
              Bewerkbare bestanden en eventuele licentievereisten spreken we
              vooraf af.
            </p>
          </details>
          <details className={styles.detailDisclosure}>
            <summary>Hoe regelen we toegang en goedkeuring?</summary>
            <p>
              Jij blijft eigenaar van je accounts. Je geeft toegang via rollen
              of uitnodigingen; stuur geen wachtwoorden per e-mail. We plannen
              pas na akkoord. Komt materiaal of feedback later, dan stemmen we
              de planning opnieuw af. Een planningstool vervangt de inhoudelijke
              controle niet.
            </p>
          </details>
        </div>
      </section>
      <section className={`${styles.shell} ${styles.section}`}>
        <SectionHeading id="beeld-title">
          Zo kan een samenhangende set eruitzien.
        </SectionHeading>
        <ConceptGallery kind="design" />
      </section>
      <FAQ
        items={[
          [
            'Kan ik alleen ontwerpen bestellen?',
            'Ja. Kies een losse visual, de set van zes of een flyer. Je levert definitieve tekst en beeld aan en publiceert zelf. Bijschriften schrijven en inplannen zitten niet in die ontwerpprijzen.',
          ],
          [
            'Kun je mijn berichten ook schrijven en plaatsen?',
            'Ja, als afgebakende contentopdracht. Kies Posts + teksten wanneer je zelf wilt publiceren, of Content + publicatie voor een maandopdracht met inplannen. Aantallen, kanalen, feedback, beschikbaarheid en prijs bevestigen we in de offerte.',
          ],
          [
            'Zijn €225 en €405 maandabonnementen?',
            'Nee. €225 is de eenmalige ontwerp-set van zes. €405 is uitsluitend een rekenvoorbeeld met aangenomen extra uren. Een maandopdracht heeft een eigen offerte; er wordt niets automatisch besteld of afgeschreven.',
          ],
          [
            'Zijn stories, carousels en Reels inbegrepen?',
            'De ontwerpprijzen gelden voor statische beelden in één afgesproken formaat. Een storyvariant is een extra formaat; een carousel bestaat uit meerdere slides. Video, Reels, opnames en extra varianten vragen een aparte scope en prijs.',
          ],
          [
            'Beantwoord je reacties of privéberichten?',
            'Nee, dagelijkse webcare is niet inbegrepen. Jij blijft verantwoordelijk voor reacties, berichten en klantvragen. Dit staat los van het ontwerpen en inplannen van content.',
          ],
          [
            'Wat als ik nog geen foto’s of huisstijl heb?',
            'Meld dat bij de aanvraag. Beeldinkoop, fotografie en een nieuwe visuele identiteit zijn geen onderdeel van de basisprijzen. We bepalen eerst wat je nodig hebt en welke onderdelen ik kan uitvoeren.',
          ],
          [
            'Kan ik zelf verder met de bestanden?',
            'PNG/JPG en drukklare PDF zijn eindbestanden. Een bewerkbare Canva-template of bronbestand spreken we apart af, inclusief eventuele licentievereisten.',
          ],
          [
            'Garandeer je meer volgers of aanvragen?',
            'Nee. Je koopt de afgesproken creatie, planning en uitvoering. Bereik, volgers en aanvragen hangen ook af van je aanbod, publiek en platformen.',
          ],
        ]}
      />
      <ContactSection
        title="Wat wil jij zelf blijven doen?"
        text="Vertel hoeveel berichten je nodig hebt, op welke kanalen en of je hulp wilt met ontwerp, tekst of publicatie. Dan ontvang je een voorstel met een duidelijke taakverdeling en prijs."
      />
    </ServicesShell>
  );
}
