export const serviceCategories = [
  {
    id: 'web',
    title: 'Websites & webshops',
    href: '/services/websites',
    description: 'Een duidelijke plek voor je bedrijf, aanbod of project.',
    outcome: 'Laat zien wie je bent.',
    links: [
      ['Bedrijfs- & projectwebsites', '/services/websites'],
      ['Ontwerp & vernieuwing', '/services/websites#mogelijkheden'],
      ['Webshops: Shopify, WooCommerce & maatwerk', '/services/webshops'],
    ],
  },
  {
    id: 'content',
    title: 'Content & design',
    href: '/services/socialmedia-design',
    description: 'Een herkenbare uitstraling, van social post tot drukwerk.',
    outcome: 'Maak je verhaal zichtbaar.',
    links: [
      ['Socialmedia-ontwerpen', '/services/socialmedia-design#ontwerpen'],
      ['Flyers & drukwerk', '/services/socialmedia-design#tarieven'],
      ['Content & publicatie', '/services/socialmedia-design#content'],
    ],
  },
  {
    id: 'ugc',
    title: 'UGC & productcontent',
    href: '/services/ugc',
    description:
      'Korte productvideo’s en appdemo’s voor jouw merk, op aanvraag.',
    outcome: 'Laat je product zien.',
    links: [
      ['Productvideo’s & appdemo’s', '/services/ugc#mogelijkheden'],
      ['Prijsopbouw & gebruik', '/services/ugc#kosten'],
      ['Van briefing tot oplevering', '/services/ugc#werkwijze'],
    ],
  },
  {
    id: 'visibility',
    title: 'Online zichtbaarheid',
    href: '/services/zichtbaarheid',
    description:
      'Een betere basis om gevonden te worden en inzicht te krijgen.',
    outcome: 'Help klanten je vinden.',
    links: [
      ['SEO & vindbaarheid in AI', '/services/zichtbaarheid#vindbaarheid'],
      ['Snelheid & gebruiksgemak', '/services/zichtbaarheid#verbeteren'],
      ['Meten & inzicht', '/services/zichtbaarheid#meten'],
    ],
  },
  {
    id: 'software',
    title: 'Software & automatisering',
    href: '/services/software-apps',
    description: 'Minder losse handelingen. Meer overzicht in je werk.',
    outcome: 'Geef je proces structuur.',
    links: [
      ['Webapps & prototypes', '/services/software-apps#mogelijkheden'],
      ['Koppelingen & opvolging', '/services/software-apps#automatisering'],
      ['Dashboards', '/services/software-apps#voorbeelden'],
    ],
  },
] as const;

export const mainLinks = [
  ['Werk', '/services/voorbeelden'],
  ['Werkwijze', '/services/werkwijze'],
  ['Tarieven', '/services/prijsindicatie'],
  ['Digitale producten', '/services/producten'],
] as const;
