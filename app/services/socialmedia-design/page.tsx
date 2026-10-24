import ConceptGallery from '../concept-gallery';
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
  title: 'Social media & flyers | Celine de Graaf',
  description:
    'Ontwerpen voor je berichten, stories en flyers. Heldere tarieven voor losse visuals, sets en een A5-flyer, klaar om zelf te publiceren of te laten drukken.',
};

const offers = [
  {
    title: 'Een losse visual',
    price: 'vanaf €45',
    text: 'Eén statisch ontwerp voor een bericht of story, in één afgesproken formaat. Inclusief één ronde met gebundelde wijzigingen.',
  },
  {
    title: 'Een set van 6 visuals',
    price: '€225',
    text: 'Zes samenhangende statische ontwerpen, elk in één afgesproken formaat. Inclusief één gezamenlijke ronde met gebundelde wijzigingen voor de hele set.',
  },
  {
    title: 'Een A5-flyer',
    price: 'vanaf €95',
    text: 'Een ontwerp voor één zijde op A5-formaat, op basis van jouw tekst en beelden. Inclusief een drukklaar PDF-bestand en één ronde met gebundelde wijzigingen. Drukkosten zijn niet inbegrepen.',
  },
];

export default function SocialDesignPage() {
  return (
    <ServicesShell current="/services/socialmedia-design">
      <PageIntro
        label="Social media & flyers"
        title="Jouw boodschap."
        emphasis="Herkenbaar in beeld."
        links={[
          { href: '#ontwerpen', label: 'Wat je ontvangt' },
          { href: '#tarieven', label: 'Tarieven' },
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
            {offers.map((offer) => (
              <article key={offer.title} data-reveal>
                <div>
                  <h3>{offer.title}</h3>
                  <p className={styles.designPrice}>
                    {offer.price}
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
