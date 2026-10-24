export type LegalContent = {
  title: string;
  intro: string;
  notice: string;
  sections: { title: string; paragraphs: string[] }[];
  sources: { label: string; url: string }[];
};

export const termsContent: LegalContent = {
  title: 'Algemene voorwaarden',
  intro: 'De basis voor duidelijke afspraken over webdevelopment, redesign, digital design en doorlopend beheer voor zakelijke klanten in Nederland en België.',
  notice: 'Concept voor bespreking, nog niet van toepassing op opdrachten. Handelsnaam, rechtsvorm, vestigingsland, adres, registratie- en btw-gegevens zijn nog niet ingevuld. Laat deze voorwaarden vóór gebruik controleren op jouw onderneming en grensoverschrijdende dienstverlening.',
  sections: [
    {
      title: 'Dienstverlener en toepasselijkheid',
      paragraphs: [
        'Contactpersoon: Celine de Graaf, celinedegraaf.tech@gmail.com. De volledige juridische identiteit en bedrijfsgegevens worden vóór gebruik in dit document en de offerte opgenomen.',
        'Dit concept is bedoeld voor opdrachten van ondernemers die handelen voor hun bedrijf. Voor particuliere klanten zijn afzonderlijke afspraken en toepasselijke consumentenregels nodig. De voorwaarden gelden pas nadat de definitieve versie vooraf beschikbaar is gesteld en bij de opdracht van toepassing is verklaard. Bij verschil gaat de schriftelijk overeengekomen offerte voor.',
      ],
    },
    {
      title: 'Offerte en opdracht',
      paragraphs: [
        'Een offerte vermeldt de werkzaamheden, concrete oplevering, prijs, planning, feedbackrondes, externe kosten en eventuele uitsluitingen. Een offerte is 30 dagen geldig, tenzij daarin anders staat. De opdracht ontstaat door schriftelijk akkoord, bijvoorbeeld per e-mail. Een kennismaking of offerteaanvraag is nog geen opdracht.',
        'Vanafprijzen op de website zijn indicaties voor de beschreven omvang. Nieuwe functies, andere formaten of extra pagina’s vallen alleen onder de opdracht als ze in de offerte staan. Er is geen automatische onderhoudsovereenkomst bij de aankoop van een website.',
      ],
    },
    {
      title: 'Tarieven, btw en betaling',
      paragraphs: [
        'Bedragen voor zakelijke klanten zijn in euro, exclusief btw. De offerte en factuur vermelden de toepasselijke btw-behandeling; bij grensoverschrijdende dienstverlening wordt dit per situatie vastgesteld. Hosting, domeinen, betaalde licenties, drukwerk en andere externe diensten zijn alleen inbegrepen als dat uitdrukkelijk is afgesproken.',
        'Voor eenmalige opdrachten is het voorstel: 40% bij opdracht en 60% na de afgesproken oplevering, tenzij de offerte andere mijlpalen vermeldt. De betalingstermijn is 14 dagen. Maandpakketten worden vooraf per maand gefactureerd. Bij een betalingsprobleem nemen partijen eerst contact op; opschorting volgt pas na een schriftelijke herinnering en een redelijke hersteltermijn, met aandacht voor de gevolgen voor de klant.',
      ],
    },
    {
      title: 'Inhoud, toegang en planning',
      paragraphs: [
        'De klant levert de afgesproken teksten, afbeeldingen, bedrijfsinformatie en feedback op tijd aan en zorgt dat aangeleverd materiaal mag worden gebruikt. Partijen spreken één contactpersoon af die feedback bundelt. Toegang tot accounts wordt waar mogelijk via een persoonlijke uitnodiging geregeld.',
        'De planning hangt mede af van volledige aanlevering, feedback en diensten van derden. Bij vertraging bespreekt Celine tijdig de gevolgen en een aangepaste planning. Een harde uiterste datum geldt alleen als die expliciet als zodanig is overeengekomen.',
      ],
    },
    {
      title: 'Revisies en meerwerk',
      paragraphs: [
        'Een revisieronde is één gebundelde feedbackronde binnen de afgesproken richting en omvang. Een nieuwe ontwerpstijl, extra pagina, nieuwe functie of extra formaat kan meerwerk zijn. Celine legt eerst de gevolgen voor prijs en planning voor. Meerwerk start pas na schriftelijk akkoord.',
        'Het voorgestelde tarief voor afgesproken extra werk is €60 per uur, geregistreerd per kwartier, tenzij een vaste prijs is afgesproken. Een overschrijding van pakketuren geeft geen toestemming om ongewenste extra kosten te maken.',
      ],
    },
    {
      title: 'Controle, oplevering en herstel',
      paragraphs: [
        'Voor oplevering krijgt de klant een preview of proefbestand om de afgesproken onderdelen te controleren. Partijen plannen hiervoor in beginsel 10 werkdagen. Oplevering wordt schriftelijk bevestigd; stilzwijgen geldt niet automatisch als volledige goedkeuring.',
        'Afwijkingen van de overeengekomen oplevering die aan Celine zijn toe te rekenen worden binnen een redelijke afgesproken termijn hersteld. Een nieuwe wens is meerwerk. Deze afspraak beperkt geen wettelijke rechten. Voor drukwerk controleert de klant de aangeleverde drukproef voordat deze naar een drukker gaat.',
      ],
    },
    {
      title: 'Gebruik, bronbestanden en eigendom',
      paragraphs: [
        'De offerte benoemt welke bronbestanden, ontwerpen, exports en documentatie worden opgeleverd. Na volledige betaling ontvangt de klant het afgesproken gebruiksrecht voor het eindresultaat, waaronder gebruik en aanpassing voor het eigen bedrijf. Een overdracht van auteursrechten wordt waar nodig apart schriftelijk vastgelegd.',
        'Bestaande hulpmiddelen, herbruikbare componenten en materiaal van derden houden hun eigen rechten en licentievoorwaarden. Domein en hosting staan bij voorkeur op naam van de klant. Celine toont klantwerk of een klantnaam alleen in haar portfolio na afzonderlijke toestemming.',
      ],
    },
    {
      title: 'Onderhoud en beheer',
      paragraphs: [
        'Een maandpakket geldt voor één vooraf beoordeelde website en de afgesproken techniek. Basis (€49 per maand) omvat een maandelijks technisch controlemoment van maximaal 30 minuten, met passende updates, controle van deployment en herstelmogelijkheid en een kort overzicht. Beheer (€99) voegt 45 minuten kleine inhoudswijzigingen toe. Doorontwikkeling (€179) voegt twee uur wijzigingen of kleine verbeteringen toe aan Basis.',
        'Resterende tijd vervalt aan het einde van de maand. Extra werk, grote versie-upgrades, migraties, incidentherstel en nieuwe functies vallen buiten de vaste omvang en worden vooraf besproken. Voor een bestaande website kan een apart geoffreerde startcontrole nodig zijn. Hosting, domein, licenties en eventuele opslag voor back-ups worden afzonderlijk afgesproken. Bij sites met gegevensopslag legt de offerte ook back-upfrequentie, bewaartermijn en herstelprocedure vast; een codeherstelpunt is geen back-up van klantgegevens.',
        'Contact en gesprekken vinden op afspraak plaats, doorgaans in de avond, met een voorgestelde reactie binnen twee werkdagen. Er is geen servicedesk die overdag direct beschikbaar is. Een reactie is geen toezegging dat het probleem binnen die termijn is opgelost. Er is geen 24/7-bewaking of gegarandeerde ononderbroken beschikbaarheid. Partijen spreken escalatie en eventuele vakantievervanging vooraf af.',
      ],
    },
    {
      title: 'Looptijd, opzegging en beëindiging',
      paragraphs: [
        'Een maandpakket loopt voor onbepaalde tijd en kan door beide partijen per e-mail worden opgezegd met één maand opzegtermijn. Er is geen verplichte jaarafname. Een prijswijziging vereist voorafgaand schriftelijk akkoord; zonder akkoord blijft de bestaande prijs gelden tot wijziging of beëindiging volgens de afgesproken opzegtermijn.',
        'Bij tussentijdse beëindiging van een project bespreken partijen de overdracht, aantoonbaar verricht werk en vooraf goedgekeurde niet-terugvorderbare externe kosten. Een vooruitbetaling wordt hiermee verrekend; een restant wordt terugbetaald. Er wordt niet automatisch het volledige resterende projectbedrag in rekening gebracht. Wettelijke rechten bij een tekortkoming blijven gelden.',
      ],
    },
    {
      title: 'Vertrouwelijkheid en persoonsgegevens',
      paragraphs: [
        'Partijen behandelen vertrouwelijke informatie zorgvuldig en geven alleen noodzakelijke toegang aan betrokken personen. Wanneer Celine in opdracht persoonsgegevens verwerkt, worden rollen en een passende verwerkersovereenkomst vastgelegd voordat die verwerking begint.',
        'De klant bepaalt welke persoonsgegevens zijn website nodig heeft. Juridische teksten, tracking, koppelingen en beveiligingseisen worden per project afgestemd. Een websitepakket houdt geen algemene garantie in dat de volledige bedrijfsvoering van de klant aan alle wettelijke eisen voldoet.',
      ],
    },
    {
      title: 'Zorgvuldigheid, storingen en aansprakelijkheid',
      paragraphs: [
        'Celine voert het afgesproken werk zorgvuldig uit en communiceert bekende beperkingen. Zoekresultaten, omzet, volgersaantallen en foutloze werking van externe diensten worden niet gegarandeerd. Een storing bij een derde wordt beoordeeld op de oorzaak en de gemaakte afspraken; dit sluit verantwoordelijkheid voor eigen fouten niet uit.',
        'Dit concept bevat geen algemene uitsluiting of vast plafond voor aansprakelijkheid. Een eventuele beperking wordt pas na juridische controle en afstemming op verzekering, opdracht en toepasselijk recht opgenomen. Bij onvoorziene verhindering bespreken partijen beperking van schade, een aangepaste planning of een redelijke beëindiging.',
      ],
    },
    {
      title: 'Klachten en toepasselijk recht',
      paragraphs: [
        'Een vraag of klacht kan per e-mail worden gemeld met een beschrijving van het probleem. Partijen proberen eerst gezamenlijk tot een oplossing te komen. De mogelijkheid om een bevoegde rechter te benaderen blijft bestaan.',
        'Vestigingsland, eventuele rechtskeuze en bevoegde rechter worden nog vastgesteld voor de definitieve voorwaarden. Tot die tijd wordt geen exclusieve rechtskeuze voorgesteld. Dwingende bescherming, waaronder toepasselijke Belgische regels over onrechtmatige bedingen tussen ondernemingen, wordt niet uitgesloten.',
      ],
    },
  ],
  sources: [
    { label: 'KVK — Algemene voorwaarden opstellen', url: 'https://www.kvk.nl/wetten-en-regels/hoe-je-algemene-voorwaarden-maakt/' },
    { label: 'KVK — Voorwaarden vóór de opdracht beschikbaar stellen', url: 'https://www.kvk.nl/wetten-en-regels/algemene-voorwaarden-delen-zo-pak-je-dat-aan/' },
    { label: 'FOD Economie — Onrechtmatige bedingen tussen ondernemingen', url: 'https://economie.fgov.be/nl/themas/ondernemingen/bescherming-van-ondernemingen/onrechtmatige-bedingen' },
    { label: 'Belastingdienst — Diensten aan afnemers in andere EU-landen', url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/zakendoen_met_het_buitenland/goederen_en_diensten_naar_andere_eu_landen/btw_berekenen_bij_diensten/btw_berekenen_bij_diensten_aan_afnemers_in_andere_eu_landen' },
  ],
};

export const privacyContent: LegalContent = {
  title: 'Privacy & cookies',
  intro: 'Hoe contactgegevens, websitebezoek en je lokale weergavevoorkeuren worden behandeld.',
  notice: 'Concept: nog niet klaar voor publicatie. De verantwoordelijke onderneming, vestigingsgegevens, leveranciersafspraken, daadwerkelijke logbewaring en eventuele internationale doorgifte moeten nog worden bevestigd. De hieronder voorgestelde bewaartermijnen moeten ook daadwerkelijk worden ingericht.',
  sections: [
    { title: 'Lokale weergavevoorkeuren', paragraphs: ['De thema-instelling en Creative Mode worden alleen in de lokale opslag van je browser bewaard. Creative Mode bewaart of de modus aanstaat en de tekst en posities van decoratieve stickers. Je kunt de stickers resetten via de bediening of de lokale gegevens verwijderen via je browser. De rondleiding verstuurt geen gegevens en onthoudt geen bezoekgeschiedenis.'] },
    {
      title: 'Wie is verantwoordelijk?',
      paragraphs: ['Contactpersoon voor deze website: Celine de Graaf, celinedegraaf.tech@gmail.com. De volledige naam en het adres van de verwerkingsverantwoordelijke worden vóór publicatie aangevuld. Deze verklaring gaat over de eigen portfolio- en dienstenwebsite; voor websites van klanten gelden afzonderlijke afspraken.'],
    },
    {
      title: 'Wanneer je contact opneemt',
      paragraphs: [
        'Het projectformulier maakt lokaal in je browser een e-mailconcept klaar. Je kunt dit kopiëren of in je eigen e-mailprogramma openen. Het formulier verstuurt niets en bewaart de invoer niet na het verlaten van de pagina. Een kennismakingsvoorkeur wordt pas een afspraak na bevestiging. Pas wanneer jij de e-mail verstuurt, ontvangt Celine je afzenderadres, naam en de inhoud die je zelf meestuurt. De website heeft momenteel geen serverformulier dat aanvragen opslaat. Deel in een eerste bericht geen wachtwoorden of onnodige gevoelige gegevens.',
        'Contactgegevens worden gebruikt om je vraag te beantwoorden en, als je dat vraagt, een voorstel of opdracht voor te bereiden. De grondslag is het uitvoeren of voorbereiden van een overeenkomst met jou, of een gerechtvaardigd belang bij zakelijke correspondentie als je namens een organisatie contact opneemt. Administratie van een opdracht kan daarnaast nodig zijn voor wettelijke verplichtingen. Er wordt geen automatische nieuwsbriefinschrijving gedaan.',
      ],
    },
    {
      title: 'Bezoek, cookies en lokale opslag',
      paragraphs: [
        'De huidige applicatiecode bevat geen advertentiepixels of bezoekerstracking. Je keuze voor licht of donker wordt onder de sleutel portfolio-theme in de lokale opslag van je browser bewaard. Die voorkeur wordt door de applicatie niet naar een server verstuurd en blijft staan totdat je deze wijzigt of je browsergegevens wist.',
        'Een hostingdienst kan technische verzoekgegevens verwerken, zoals IP-adres, aangevraagde pagina en tijdstip, voor het leveren en beveiligen van de website. De precieze instellingen en bewaartermijnen moeten vóór publicatie worden gecontroleerd. De gebruikte lettertypen worden tijdens het bouwen opgehaald en vervolgens door de website zelf geleverd. Er wordt geen algemene claim gedaan dat hosting of e-mail geen persoonsgegevens verwerkt.',
      ],
    },
    {
      title: 'Bewaren en verwijderen',
      paragraphs: [
        'Voorstel voor gewone aanvragen zonder opdracht: verwijderen uiterlijk zes maanden na het laatste inhoudelijke contact, tenzij er een concrete reden is om een lopend gesprek langer te bewaren. Voor projectcorrespondentie wordt bij de opdracht een bewaartermijn afgesproken die past bij ondersteuning, verantwoording en eventuele geschillen.',
        'Facturen en wettelijk vereiste administratie worden gedurende de toepasselijke fiscale bewaartermijn bewaard. De definitieve termijn hangt mede af van het vestigingsland en de soort administratie. Technische logtermijnen en back-upverwijdering worden nog bij de leveranciers vastgesteld. Gegevens worden niet zonder reden onbeperkt bewaard.',
      ],
    },
    {
      title: 'Dienstverleners en internationale doorgifte',
      paragraphs: [
        'De huidige site wordt aangeboden via een Vercel-adres; contact loopt naar een Gmail-adres. Hosting- en e-maildiensten verwerken gegevens voor hun dienstverlening. De exacte contractspartijen, verwerkersrollen, opslaglocaties en afspraken met Vercel en Google moeten nog worden geïnventariseerd. Een andere hosting-, formulier- of administratiedienst vraagt een update van deze verklaring.',
        'Als gegevens buiten de Europese Economische Ruimte worden verwerkt, moet de gebruikte doorgiftegrond en bescherming vooraf worden vastgesteld en hier worden vermeld. Dit concept beweert daarom niet dat alle gegevens uitsluitend in Nederland of België blijven. Gegevens worden niet voor advertentieverkoop gebruikt.',
      ],
    },
    {
      title: 'Je privacyrechten',
      paragraphs: [
        'Je kunt vragen om inzage, correctie, verwijdering of beperking van verwerking en, waar van toepassing, overdracht van gegevens. Je kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang. Voor verwerking op basis van toestemming kun je die toestemming intrekken. Verplichte administratie kan niet altijd op verzoek worden verwijderd.',
        'Stuur een verzoek naar celinedegraaf.tech@gmail.com. Er kan passende informatie nodig zijn om je identiteit te controleren; stuur niet ongevraagd een kopie van je identiteitsbewijs. Je ontvangt in beginsel binnen één maand een reactie. Als een wettelijk toegestane verlenging nodig is, krijg je daar tijdig bericht en uitleg over.',
        'Je kunt ook een klacht indienen bij een privacytoezichthouder, bijvoorbeeld de Autoriteit Persoonsgegevens in Nederland of de Gegevensbeschermingsautoriteit in België. Je hoeft daarmee niet te wachten op een commerciële oplossing van een geschil.',
      ],
    },
    {
      title: 'Beveiliging en wijzigingen',
      paragraphs: [
        'Toegang wordt beperkt tot wat voor het afgesproken doel nodig is. De concrete maatregelen voor accounts, toegangsbeheer, herstel en verwijdering worden afgestemd op de gebruikte diensten. Er wordt geen absolute veiligheidsgarantie gegeven.',
        'Als de website, contactmogelijkheden of leveranciers veranderen, wordt deze verklaring bijgewerkt. De datum bovenaan geeft de versie aan. Extra tracking of een formulier wordt pas toegevoegd nadat de bijbehorende privacy- en eventuele toestemmingsinstellingen zijn geregeld.',
      ],
    },
  ],
  sources: [
    { label: 'Autoriteit Persoonsgegevens — Recht op informatie', url: 'https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/recht-op-informatie' },
    { label: 'Autoriteit Persoonsgegevens — Grondslagen AVG', url: 'https://autoriteitpersoonsgegevens.nl/themas/basis-avg/avg-algemeen/grondslagen-avg-uitgelegd' },
    { label: 'Autoriteit Persoonsgegevens — Bewaren van persoonsgegevens', url: 'https://autoriteitpersoonsgegevens.nl/nl/over-privacy/persoonsgegevens/bewaren-van-persoonsgegevens' },
    { label: 'Gegevensbeschermingsautoriteit België — Klacht indienen', url: 'https://www.gegevensbeschermingsautoriteit.be/burger/acties/klacht-indienen' },
  ],
};
