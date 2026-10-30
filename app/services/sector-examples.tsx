import Link from 'next/link';
import styles from './services.module.css';
import ui from './studio.module.css';
const examples = [
  {
    name: 'Vastgoed & nieuwbouw',
    brand: 'WOONPROJECT / CONCEPT',
    headline: (
      <>
        Ruimte voor
        <br />
        <em>morgen.</em>
      </>
    ),
    action: 'Project · Woningen · Interesse',
    question: 'Een nieuwbouwproject helder presenteren.',
    solution:
      'Een projectoverzicht, woninginformatie en een korte route naar een interesseaanvraag.',
  },
  {
    name: 'Architectuur',
    brand: 'STUDIO / CONCEPT',
    headline: (
      <>
        Vorm volgt
        <br />
        <em>verhaal.</em>
      </>
    ),
    action: 'Werk · Visie · Contact',
    question: 'Bezoekers je werk en aanpak laten begrijpen.',
    solution:
      'Grote projectpresentaties, materiaal en context, met een herkenbare contactroute.',
  },
  {
    name: 'Praktijken & advies',
    brand: 'PRAKTIJK / CONCEPT',
    headline: (
      <>
        Aandacht.
        <br />
        <em>Helder advies.</em>
      </>
    ),
    action: 'Aanbod · Team · Afspraak',
    question: 'Vertrouwen opbouwen vóór de eerste afspraak.',
    solution:
      'Een duidelijk aanbod, uitleg over de werkwijze en een eenvoudige afspraakaanvraag.',
  },
];
export default function SectorExamples() {
  return (
    <div>
      <p className={styles.eyebrow}>
        Visuele richtingen · fictieve ontwerpstudies · geen klantopdrachten
      </p>
      <div className={ui.sectorGrid}>
        {examples.map((item) => (
          <article key={item.name}>
            <div
              className={ui.sectorVisual}
              aria-label={`Ontwerpstudie voor ${item.name}`}
            >
              <small>{item.brand}</small>
              <strong>{item.headline}</strong>
              <span>{item.action}</span>
              <div className={ui.building} aria-hidden="true" />
            </div>
            <div className={ui.sectorCopy}>
              <h3>{item.name}</h3>
              <p>
                <strong>De vraag:</strong> {item.question}
              </p>
              <p>
                <strong>Een mogelijke uitwerking:</strong> {item.solution}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.note}>
        Dit zijn vormstudies om een richting te laten zien, geen werkende
        klantwebsites of bewezen resultaten. Functies worden per opdracht
        bepaald.
      </p>
      <Link
        className={styles.textLink}
        href="/services/prijsindicatie?dienst=website"
      >
        Welke website past bij jouw bedrijf? ↗︎
      </Link>
    </div>
  );
}
