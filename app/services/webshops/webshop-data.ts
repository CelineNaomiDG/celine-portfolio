export const shopPlatforms = [
  {
    id: 'shopify',
    title: 'Shopify',
    label: 'Een beheerd winkelplatform',
    description:
      'Voor een webshop met producten, bestellingen en dagelijks beheer op één plek. We richten de winkel in en passen het ontwerp aan binnen het gekozen thema en abonnement.',
    includes: [
      'Inrichting van het gekozen thema',
      'Producten, varianten en collecties',
      'Verzending en ondersteunde betalingen',
      'Beheeruitleg voor jouw winkel',
    ],
    consideration:
      'Een Shopify-abonnement, eventuele thema- en appkosten en betaaltransacties lopen apart. Checkoutaanpassingen hangen af van het abonnement en de platformmogelijkheden.',
  },
  {
    id: 'woocommerce',
    title: 'WordPress + WooCommerce',
    label: 'Content en winkel samen',
    description:
      'Voor een winkel op WordPress, bijvoorbeeld naast een bestaande website. We kiezen passende hosting, een thema en de benodigde uitbreidingen.',
    includes: [
      'WordPress en WooCommerce-inrichting',
      'Productpagina’s en winkelwagen',
      'Koppeling met een passende betaalprovider',
      'Beheer, back-ups en updates afspreken',
    ],
    consideration:
      'Hosting, betaalde thema’s of plugins en onderhoud zijn aparte kosten. Uitbreidingen moeten onderling passen en regelmatig worden bijgewerkt.',
  },
  {
    id: 'custom',
    title: 'Maatwerk & headless',
    label: 'Een eigen winkelervaring',
    description:
      'Voor een bijzondere winkelinterface of een specifieke koppeling. Bijvoorbeeld een Next.js-voorkant met Shopify als winkelbeheer of een andere passende commerce-backend.',
    includes: [
      'Eerst een technische verkenning',
      'Een eigen ontwerp en gebruikersflow',
      'Afgesproken product- en orderkoppelingen',
      'Preview, tests en beheeroverdracht',
    ],
    consideration:
      'Meer ontwikkel- en beheertijd. We gebruiken waar mogelijk een bestaande betaalomgeving; checkoutbeperkingen, API-kosten en onderhoud worden vooraf onderzocht.',
  },
] as const;

export const shopPaymentGroups = [
  {
    title: 'Bank & lokaal',
    methods: ['iDEAL / Wero', 'Bancontact', 'SEPA-overboeking'],
    text: 'Voor Nederlandse, Belgische of andere Europese klanten. Beschikbaarheid verschilt per land, valuta en provider. Een handmatige overboeking vraagt een eigen ordercontrole.',
  },
  {
    title: 'Kaarten',
    methods: ['Mastercard', 'Visa', 'American Express'],
    text: 'Credit- en debetkaarten via een geschikte betaalprovider. Ondersteunde kaarten, controles en transactiekosten hangen af van je account en betaaloplossing.',
  },
  {
    title: 'Wallets & snel betalen',
    methods: ['PayPal', 'Apple Pay', 'Google Pay', 'Shop Pay'],
    text: 'Minder gegevens invoeren op ondersteunde apparaten en accounts. Shop Pay hoort bij Shopify; PayPal en andere wallets vragen een passende activering of koppeling.',
  },
  {
    title: 'Later of in delen',
    methods: ['Klarna'],
    text: 'Op aanvraag, afhankelijk van toelating, land, productcategorie, bedrag en gekozen betaalvorm. De aanbieder bepaalt welke klant in aanmerking komt.',
  },
] as const;
