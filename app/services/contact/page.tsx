import type { Metadata } from 'next';
import { PageIntro, ServicesShell } from '../services-shared';
import { estimate, readSelection } from '../pricing-data';
import ProjectForm from '../project-form';
import styles from '../services.module.css';
export const metadata: Metadata = {
  title: 'Bespreek je project | Celine de Graaf',
  description:
    'Bereid je projectaanvraag voor of vraag een kennismaking aan. Rechtstreeks contact met Celine.',
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    samenstelling?: string;
    kennismaking?: string;
    interesse?: string;
  }>;
}) {
  const query = await searchParams;
  const selection = readSelection(
    typeof query.samenstelling === 'string' ? query.samenstelling : undefined,
  );
  const names = {
    website: 'Website',
    design: 'Content & design',
    maintenance: 'Onderhoud',
    software: 'Software & automatisering',
    visibility: 'Online zichtbaarheid',
  };
  const productIdea = query.interesse === 'product';
  return (
    <ServicesShell current="/services/contact">
      <PageIntro
        label="Rechtstreeks contact"
        title="Vertel over"
        emphasis="jouw volgende stap."
        links={[{ href: '#aanvraag', label: 'Projectaanvraag' }]}
      >
        <p>
          Een nieuw idee, een bestaande site of een vraag over je mogelijkheden?
          Een korte omschrijving is genoeg om te beginnen.
        </p>
      </PageIntro>
      <section id="aanvraag" className={`${styles.section} ${styles.shell}`}>
        <div className={styles.packageIllustration}>
          <div>
            <h2>Een project begint met een gesprek.</h2>
            <p>Je spreekt met degene die je project ontwerpt en bouwt.</p>
            <ol className={styles.structureList}>
              <li>Beschrijf je idee.</li>
              <li>Verstuur je voorbereide e-mail.</li>
              <li>We bespreken de passende vervolgstap.</li>
            </ol>
            <p>
              Gesprekken plannen we in overleg, doorgaans op een doordeweekse
              avond. Een voorkeur is pas een afspraak na bevestiging.
            </p>
          </div>
          <ProjectForm
            key={JSON.stringify(query)}
            initialSummary={selection ? estimate(selection).summary : ''}
            initialService={
              selection
                ? names[selection.service]
                : productIdea
                  ? 'Digitaal product'
                  : ''
            }
            requestMeeting={query.kennismaking === '1'}
            productIdea={productIdea}
          />
        </div>
      </section>
    </ServicesShell>
  );
}
