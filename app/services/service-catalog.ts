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
      ['Webshop verkennen', '/services/websites#webshop'],
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
