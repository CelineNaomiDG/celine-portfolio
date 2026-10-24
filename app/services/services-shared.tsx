import Link from 'next/link';
import type { ReactNode } from 'react';
import ThemeButton from '@/components/theme-button';
import ServicesMotion from './services-motion';
import styles from './services.module.css';

export const email = 'celinedegraaf.tech@gmail.com';
export const serviceLinks = [
  {
    href: '/services/websites',
    label: 'Websites',
    title: 'Websites & vernieuwen',
    description:
      'Een nieuwe website voor je bedrijf, of je huidige website weer laten passen bij wie je bent.',
  },
  {
    href: '/services/software-apps',
    label: 'Software & apps',
    title: 'Software & apps',
    description:
      'Een handig hulpmiddel voor je bedrijf, een app of de eerste versie van je eigen online product.',
  },
  {
    href: '/services/socialmedia-design',
    label: 'Social media & flyers',
    title: 'Social media & flyers',
    description:
      'Verzorgde ontwerpen voor je berichten, acties en flyers. Klaar om zelf te delen of te laten drukken.',
  },
  {
    href: '/services/onderhoud',
    label: 'Onderhoud',
    title: 'Onderhoud & beheer',
    description:
      'Hulp om je website bij te houden, van technische controles tot kleine wijzigingen aan tekst en beeld.',
  },
];
export function enquiry(subject = 'Voorstel voor mijn bedrijf') {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hoi Celine,\n\nIk wil graag de mogelijkheden voor mijn bedrijf bespreken.\n\nGroetjes,\n')}`;
}

export function ServicesShell({
  current,
  children,
}: {
  current: string;
  children: ReactNode;
}) {
  return (
    <ServicesMotion key={current}>
      <a className={styles.skipLink} href="#inhoud">
        Direct naar inhoud
      </a>
      <header className={`${styles.header} ${styles.shell}`}>
        <Link className={styles.brand} href="/services">
          Celine de Graaf<span>Websites, Apps & Digital Design</span>
        </Link>
        <div className={styles.headerActions}>
          <Link href="/" className={styles.portfolioLink}>
            IT-portfolio ↗
          </Link>
          <Link href="/en/services" hrefLang="en" lang="en" className={styles.portfolioLink}>English overview</Link>
          <ThemeButton language="nl" className={styles.theme} />
        </div>
        <nav className={styles.navigation} aria-label="Diensten">
          <Link
            href="/services"
            aria-current={current === '/services' ? 'page' : undefined}
          >
            Overzicht
          </Link>
          {serviceLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={current === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/services/voorbeelden" aria-current={current === '/services/voorbeelden' ? 'page' : undefined}>Voorbeelden</Link>
          <Link href="/services/contact" aria-current={current === '/services/contact' ? 'page' : undefined}>Project bespreken ↗</Link>
          <Link href="/services/prijsindicatie"
            aria-current={current === '/services/prijsindicatie' ? 'page' : undefined}>
            Prijsindicatie
          </Link>
        </nav>
        <details className={styles.mobileServicesMenu}><summary>Menu · diensten</summary><nav aria-label="Mobiele dienstennavigatie"><Link href="/services">Overzicht</Link>{serviceLinks.map(link=><Link key={link.href} href={link.href} aria-current={current===link.href?'page':undefined}>{link.label}</Link>)}<Link href="/services/voorbeelden">Voorbeelden</Link><Link href="/services/prijsindicatie">Pakketten vergelijken</Link><Link href="/services/contact">Project bespreken ↗</Link></nav></details>
      </header>
      <main id="inhoud" tabIndex={-1}>
        {children}
      </main>
      <footer className={`${styles.footer} ${styles.shell}`}>
        <div>
          Celine de Graaf<span>Voor ondernemers in Nederland & België</span>
        </div>
        <nav aria-label="Footer">
          <Link href="/services">Alle diensten</Link>
          <Link href="/services/contact">Contact</Link>
          <Link href="/services/voorwaarden">Voorwaarden (concept)</Link>
          <Link href="/services/privacy">Privacy (concept)</Link>
          <Link href="/">IT-portfolio ↗</Link>
        </nav>
      </footer>
    </ServicesMotion>
  );
}

export function PageIntro({
  label,
  title,
  emphasis,
  children,
  links,
}: {
  label: string;
  title: string;
  emphasis: string;
  children: ReactNode;
  links: { href: string; label: string }[];
}) {
  return (
    <section className={`${styles.pageIntro} ${styles.shell}`}>
      <Link href="/services" className={styles.backLink}>
        ← Alle diensten
      </Link>
      <p className={styles.eyebrow}>{label}</p>
      <h1>
        {title}
        <br />
        <em>{emphasis}</em>
      </h1>
      <div className={styles.lead}>{children}</div>
      <nav className={styles.pageNavigation} aria-label="Op deze pagina">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label} <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>
    </section>
  );
}

export function SectionHeading({
  id,
  label,
  children,
}: {
  id: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.sectionHeading} data-reveal data-reveal-line>
      {label && <p className={styles.eyebrow}>{label}</p>}
      <h2 id={id}>{children}</h2>
    </div>
  );
}

export function PriceNote() {
  return (
    <p className={styles.note}>
      Indicatieve tarieven, exclusief btw. Je ontvangt vooraf een offerte met de
      definitieve prijs en afspraken.
    </p>
  );
}

export function ExtraWorkNote() {
  return (
    <p className={styles.note}>
      Extra werk kost €60 per uur, exclusief btw, alleen na jouw akkoord. De
      tijd wordt bijgehouden per 15 minuten.
    </p>
  );
}

export function FAQ({ items }: { items: [string, string][] }) {
  return (
    <section
      className={`${styles.faqSection} ${styles.shell}`}
      aria-labelledby="vragen-title"
      id="vragen"
    >
      <SectionHeading id="vragen-title">Nog even helder.</SectionHeading>
      <div className={styles.questions}>
        {items.map(([question, answer]) => (
          <details key={question} data-reveal>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ContactSection({
  title = 'Zullen we samen kijken?',
  text = 'Vertel kort wat je bedrijf doet en waar je hulp bij zoekt. Je hoeft nog geen uitgewerkt plan te hebben.',
  subject,
}: {
  title?: string;
  text?: string;
  subject?: string;
}) {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className={`${styles.contactInner} ${styles.shell}`}>
        <div data-reveal>
          <p className={styles.eyebrow}>Rechtstreeks contact met Celine</p>
          <h2 id="contact-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.contactAction} data-reveal>
          <Link className={styles.primaryLink} href="/services/contact">
            Start je projectaanvraag <span aria-hidden="true">↗</span>
          </Link>
          <Link className={styles.textLink} href="/services/contact#aanvraag">Vraag een kennismaking aan ↗</Link>
          <p>Rechtstreeks contact. Gesprekken plannen we in overleg, meestal op een doordeweekse avond.</p>
          <a className={styles.email} href={enquiry(subject)}>
            {email}
          </a>
          <p>Je kunt het e-mailadres ook kopiëren.</p>
        </div>
      </div>
    </section>
  );
}
