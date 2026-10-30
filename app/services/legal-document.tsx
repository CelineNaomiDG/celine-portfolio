import Link from 'next/link';
import ThemeButton from '@/components/theme-button';
import styles from './legal-document.module.css';

type LegalContent = {
  title: string;
  intro: string;
  notice: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  sources: Array<{ label: string; url: string }>;
};

export default function LegalDocument({ content }: { content: LegalContent }) {
  return (
    <div lang="nl" className={styles.page}>
      <a href="#document" className={styles.skipLink}>
        Direct naar inhoud
      </a>
      <header className={styles.header}>
        <Link href="/services">
          Celine de Graaf<span>Websites, Apps & Digital Design</span>
        </Link>
        <ThemeButton language="nl" />
      </header>
      <main id="document" tabIndex={-1} className={styles.document}>
        <Link href="/services" className={styles.back}>
          ← Terug naar diensten
        </Link>
        <p className={styles.version}>Concept · 16 oktober 2026</p>
        <h1>{content.title}</h1>
        <p className={styles.intro}>{content.intro}</p>
        <aside
          className={styles.notice}
          aria-label="Belangrijke informatie over dit concept"
        >
          <strong>Over dit concept</strong>
          <p>{content.notice}</p>
        </aside>
        {content.sections.map((section, i) => (
          <section
            className={styles.section}
            aria-labelledby={`sectie-${i + 1}`}
            key={section.title}
          >
            <span className={styles.number} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h2 id={`sectie-${i + 1}`}>{section.title}</h2>
              {section.paragraphs.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
        {content.sources.length > 0 && (
          <section className={styles.sources} aria-labelledby="bronnen">
            <h2 id="bronnen">Bronnen & verdere informatie</h2>
            <ul>
              {content.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url}>
                    {source.label}
                    <span aria-hidden="true"> ↗︎</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <footer className={styles.footer}>
        <span>Celine de Graaf</span>
        <nav aria-label="Footer">
          <Link href="/services">Diensten</Link>
          <Link href="/services/voorwaarden">Voorwaarden</Link>
          <Link href="/services/privacy">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
