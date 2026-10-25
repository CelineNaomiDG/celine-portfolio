import ConceptGallery from '../concept-gallery';
import Link from 'next/link';
import { designOffers, euro } from '../pricing-data';
import ui from '../studio.module.css';
import type { Metadata } from 'next';
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
  title: 'Content, socialmedia-ontwerpen & flyers | Celine de Graaf',
  description:
    'Ontwerpen voor je berichten, stories en flyers. Heldere tarieven voor losse visuals, sets en een A5-flyer, klaar om zelf te publiceren of te laten drukken.',
};



export default function SocialDesignPage() {
  return (
    <ServicesShell current="/services/socialmedia-design">
      <PageIntro
        label="Content & design"
        title="Jouw boodschap."
        emphasis="Herkenbaar in beeld."
        links={[
          { href: '#ontwerpen', label: 'Wat je ontvangt' },
          { href: '#tarieven', label: 'Tarieven' },
          { href: '#content', label: 'Tekst & publicatie' },
          { href: '#contact', label: 'Contact' },
        ]}
      >
        <p>
          Een verzorgde post, een duidelijke story of een flyer voor je actie.
          Ik maak de ontwerpen; jij plaatst ze op je kanalen of laat ze drukken.
          Beheer van je accounts en advertenties zijn niet automatisch
          inbegrepen.
        </p>
      </PageIntro>
      <section className={`${styles.section} ${styles.shell}`} aria-labelledby="voorbeelden-title"><SectionHeading id="voorbeelden-title">Zo wordt je boodschap zichtbaar.</SectionHeading><ConceptGallery kind="design" /></section>
      <section
        id="ontwerpen"
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="ontwerpen-title"
      >
        <SectionHeading id="ontwerpen-title">
          Een ontwerp dat je kunt gebruiken.
        </SectionHeading>
        <div className={styles.twoColumns}>
          <article data-reveal>
            <h3>Voor je sociale kanalen</h3>
            <p>
              Je ontvangt een stilstaand beeldbestand in het vooraf afgesproken
              formaat. Bijvoorbeeld een vierkant bericht of een staande story.
              Je kiest welk formaat je nodig hebt.
            </p>
            <p>
              Een samenhangende set helpt om verschillende berichten dezelfde
              uitstraling te geven. Je levert de boodschap, het logo en de
              beelden aan.
            </p>
          </article>
          <article data-reveal data-reveal-delay="100">
            <h3>Voor je flyer</h3>
            <p>
              Ik maak een overzichtelijke indeling voor je aangeleverde tekst en
              afbeeldingen. Het resultaat is een PDF-bestand voor de drukker.
            </p>
            <p>
              De aanlevereisen van je drukker bespreken we vooraf. Jij regelt
              het drukken en betaalt de drukkosten apart.
            </p>
          </article>
        </div>
      </section>
      <section
        id="tarieven"
        className={styles.softBand}
        aria-labelledby="tarieven-title"
      >
        <div className={`${styles.section} ${styles.shell}`}>
          <SectionHeading id="tarieven-title">
            Los ontwerp of een complete set?
          </SectionHeading>
          <PriceNote />
          <div className={styles.designOffers}>
            {designOffers.map((offer) => (
              <article key={offer.title} data-reveal>
                <div>
                  <h3>{offer.title}</h3>
                  <p className={styles.designPrice}>
                    {offer.from ? 'vanaf ' : ''}{euro(offer.amount)}
                    <span>eenmalig · excl. btw</span>
                  </p>
                </div>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
          <ExtraWorkNote />
        </div>
      </section>
      <section
        className={`${styles.section} ${styles.shell}`}
        aria-labelledby="afspraken-title"
      >
        <SectionHeading id="afspraken-title">
          Vooraf even afstemmen.
        </SectionHeading>
        <div className={styles.twoColumns}>
          <article data-reveal>
            <h3>Wat jij aanlevert</h3>
            <p>
              De definitieve tekst, je logo, foto’s of andere beelden die je mag
              gebruiken. Vertel ook waar het ontwerp komt te staan, welk formaat
              je nodig hebt en welke uitstraling je zoekt.
            </p>
          </article>
          <article data-reveal data-reveal-delay="100">
            <h3>Wat we apart afspreken</h3>
            <p>
              Extra formaten, meer zijden, bewegende beelden, bewerkbare
              templates en bronbestanden vallen buiten de genoemde pakketten.
              Ook teksten schrijven, beeldinkoop, publiceren en accountbeheer
              zijn niet inbegrepen.
            </p>
          </article>
        </div>
      </section>
      <section id="content" className={`${styles.section} ${styles.shell}`}>
        <SectionHeading id="content-title">Van losse visual<br/><em>naar een samenhangend verhaal.</em></SectionHeading>
        <p>Wil je meer dan ontwerpen? We kunnen een afgebakende opdracht bespreken voor teksten, een contentkalender of planning en publicatie. Die onderdelen zitten niet in de ontwerpprijzen hierboven.</p>
        <div className={ui.deliverables}>
          <article><span className={ui.stamp}>Ontwerp</span><h3>Jij deelt het.</h3><p>Jij levert de boodschap en het beeld. Ik ontwerp de afgesproken bestanden, jij plaatst ze zelf.</p><ul><li>Losse visual, set of flyer.</li><li>Afgesproken formaten.</li><li>Eén gebundelde feedbackronde.</li></ul></article>
          <article><span className={ui.stamp}>Op offerte</span><h3>Content voorbereiden.</h3><p>Een plan voor wat je wilt vertellen, met afgesproken ontwerpen en bijschriften. Jij keurt de inhoud goed en publiceert.</p><ul><li>Aantal unieke berichten vooraf vastleggen.</li><li>Kalender en bijschriften afspreken.</li><li>Beeldmateriaal en eventuele bronbestanden bepalen.</li></ul></article>
          <article><span className={ui.stamp}>Op offerte · eerst afstemmen</span><h3>Ook laten inplannen.</h3><p>We verkennen planning en publicatie op afgesproken kanalen, na jouw goedkeuring. Beschikbaarheid en benodigde toegang stemmen we vooraf af.</p><ul><li>Unieke ontwerpen en plaatsingen apart benoemen.</li><li>Planning, feedback en evaluatie afbakenen.</li><li>Geen dagelijks reactiebeheer of advertenties inbegrepen.</li></ul></article>
        </div>
        <p className={styles.eyebrow}>Voorbeeldplanning · geen inbegrepen maandpakket</p>
        <div className={ui.calendar}>{['Je verhaal','Een dienst','Een kijkje in het werk','Een duidelijke actie'].map((text,i)=><div key={text}><span>WEEK 0{i+1}</span><strong>{text}</strong></div>)}</div>
        <p className={styles.note}>Vier unieke posts op twee kanalen zijn acht plaatsingen. Of tekst en ontwerp per kanaal worden aangepast, staat in de offerte. Fotografie, video-opnames, advertentiebudget en dagelijks reageren zijn aparte werkzaamheden; die worden niet automatisch aangeboden.</p>
        <Link className={styles.primaryLink} href="/services/prijsindicatie?dienst=design">Stel je ontwerpvraag samen ↗</Link>
      </section>
      <FAQ
        items={[
          [
            'Wat betekent één formaat?',
            'Dat is één afgesproken afmeting, bijvoorbeeld een vierkant bericht of een staande story. Hetzelfde ontwerp aanpassen voor een tweede afmeting is een extra versie en wordt apart afgesproken.',
          ],
          [
            'Hoe werkt de ronde met wijzigingen?',
            'Je bekijkt het ontwerp en geeft je opmerkingen gebundeld door. Die werk ik binnen de afgesproken richting uit. Bij een set stuur je één gezamenlijke feedbackronde voor alle zes ontwerpen. Een nieuwe richting of extra ontwerp bespreken we apart.',
          ],
          [
            'Kan ik het ontwerp later zelf bewerken?',
            'Je ontvangt de afgesproken eindbestanden om te gebruiken. Een bewerkbare template of het bronbestand is niet standaard inbegrepen. Als je dat nodig hebt, bespreken we het vóór de offerte.',
          ],
          [
            'Plaats je de berichten ook voor mij?',
            'Deze dienst gaat om het ontwerp. Je publiceert de bestanden zelf. Het plannen van berichten, beheren van reacties, inkopen van advertenties en meten van resultaten zijn niet inbegrepen.',
          ],
        ]}
      />
      <ContactSection
        title="Wat wil je onder de aandacht brengen?"
        text="Vertel wat je boodschap is, waar je het ontwerp wilt gebruiken en of je één ontwerp of een samenhangende set nodig hebt."
        subject="Voorstel voor socialmedia-ontwerpen of een flyer"
      />
    </ServicesShell>
  );
}
