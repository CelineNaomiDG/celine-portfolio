export const euro = (amount: number) =>
  new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
export const websitePrices = {
  launch: 950,
  business: 1950,
  signature: 3500,
  'premium-corporate': 6000,
  enterprise: 15000,
} as const;
export const websiteChoices = [
  {
    id: 'launch',
    title: 'Eén aanbod, één pagina',
    name: 'Launch',
    text: 'Een compacte basis met jouw bestaande huisstijl en aangeleverde inhoud.',
  },
  {
    id: 'business',
    title: 'Meerdere diensten uitleggen',
    name: 'Business',
    text: 'Een overzichtelijke bedrijfswebsite met meerdere pagina’s en contactformulier.',
  },
  {
    id: 'signature',
    title: 'Werk visueel presenteren',
    name: 'Signature',
    text: 'Meer aandacht voor visuele eigenheid, projectpresentaties en afgesproken beweging.',
  },
  {
    id: 'premium-corporate',
    title: 'Meerdere doelgroepen bereiken',
    name: 'Premium Corporate',
    text: 'Meer structuur, bezoekersroutes en afstemming voor een zakelijke website.',
  },
  {
    id: 'enterprise',
    title: 'Een complex webtraject',
    name: 'Enterprise Web Experience',
    text: 'Eerst een apart geoffreerde verkenning. Daarna een mogelijk ontwikkeltraject.',
  },
] as const;
export const extraWorkHourlyRate = 60;
export const socialBudgetExample = {
  design: 225,
  captionsHours: 2,
  planningHours: 1,
};
export const socialBudgetTotal =
  socialBudgetExample.design +
  (socialBudgetExample.captionsHours + socialBudgetExample.planningHours) *
    extraWorkHourlyRate;
export const designOffers = [
  {
    billing: 'once',
    id: 'single',
    title: 'Een losse visual',
    amount: 45,
    from: true,
    units: 1,
    text: 'Eén statisch ontwerp in één afgesproken formaat. Eén gebundelde feedbackronde.',
  },
  {
    billing: 'once',
    id: 'set',
    title: 'Een set van 6 visuals',
    amount: 225,
    from: false,
    units: 6,
    text: 'Zes samenhangende statische ontwerpen, één formaat per ontwerp. Eén gezamenlijke feedbackronde.',
  },
  {
    billing: 'once',
    id: 'flyer',
    title: 'Een A5-flyer',
    amount: 95,
    from: true,
    units: 1,
    text: 'Eén zijde, gebaseerd op jouw tekst en beeld. Drukklaar PDF-bestand en één feedbackronde. Drukken apart.',
  },
  {
    id: 'content',
    title: 'Posts met tekst & kalender',
    amount: null,
    from: false,
    units: null,
    billing: 'once',
    text: 'Ontwerp, bijschriften en kalender voor een afgesproken reeks. Jij publiceert. Aantal berichten en formaten bepalen samen de offerte.',
  },
  {
    id: 'monthly',
    title: 'Maandelijkse content & publicatie',
    amount: null,
    from: false,
    units: null,
    billing: 'month',
    text: 'Ontwerp, bijschriften, kalender, goedkeuring en inplannen op afgesproken kanalen. Aantal unieke berichten, plaatsingen en evaluatie vooraf vastleggen.',
  },
] as const;
export const designPriceLabel = (offer: (typeof designOffers)[number]) =>
  offer.amount === null
    ? 'Op offerte'
    : `${offer.from ? 'Vanaf ' : ''}${euro(offer.amount)}`;
export const maintenancePlans = [
  {
    id: 'basis',
    name: 'Basis',
    amount: 49,
    allowance: '30 minuten technisch werk per maand',
    text: 'Een maandelijks moment voor technische updates en controles, passend bij de techniek van je website. Ik controleer de opbouw en publicatie van de site en het afgesproken herstelpunt. Je ontvangt een kort verslag.',
    note: 'Geen tekst- of beeldwijzigingen inbegrepen.',
  },
  {
    id: 'beheer',
    name: 'Beheer',
    amount: 99,
    allowance: 'Basis + 45 minuten voor tekst en beeld',
    text: 'Alles uit Basis, plus 45 minuten per maand voor kleine aanpassingen aan bestaande teksten en afbeeldingen. Bijvoorbeeld een nieuwe foto of aangepaste openingstijden.',
    note: 'De 30 minuten technisch werk en de 45 minuten inhoudelijke wijzigingen zijn aparte tijdsblokken.',
  },
  {
    id: 'doorontwikkeling',
    name: 'Doorontwikkeling',
    amount: 179,
    allowance: 'Basis + 2 uur voor kleine verbeteringen',
    text: 'Alles uit Basis, plus 2 uur per maand voor wijzigingen en kleine verbeteringen aan je website. Grotere functies of veranderingen worden eerst apart besproken.',
    note: 'De 30 minuten technisch werk en de 2 uur wijzigingen en verbeteringen zijn aparte tijdsblokken.',
  },
] as const;
export const serviceChoices = [
  {
    id: 'ugc',
    label: 'UGC & productcontent',
    description: 'Video’s en demo’s op aanvraag',
  },
  { id: 'website', label: 'Website', description: 'Een passende websitebasis' },
  {
    id: 'webshop',
    label: 'Webshop',
    description: 'Shopify, WooCommerce of maatwerk',
  },
  {
    id: 'design',
    label: 'Content & design',
    description: 'Ontwerp, content of publicatie',
  },
  {
    id: 'maintenance',
    label: 'Onderhoud',
    description: 'Hulp bij je bestaande site',
  },
  {
    id: 'software',
    label: 'Software & automatisering',
    description: 'Een proces of eigen product',
  },
  {
    id: 'visibility',
    label: 'Online zichtbaarheid',
    description: 'Een gerichte verbetering',
  },
] as const;
export type Service = (typeof serviceChoices)[number]['id'];
export const addOns: Record<
  Service,
  { id: string; label: string; description: string }[]
> = {
  webshop: [
    {
      id: 'payments',
      label: 'Betaalmethoden inrichten',
      description:
        'iDEAL, kaarten, PayPal of andere passende opties; providergoedkeuring vereist.',
    },
    {
      id: 'products',
      label: 'Productinvoer of migratie',
      description: 'Aantallen, varianten en bestaande data vooraf afspreken.',
    },
    {
      id: 'shipping',
      label: 'Verzending & orderafhandeling',
      description: 'Bezorging, afhalen, retouren of een vervoerderskoppeling.',
    },
    {
      id: 'digital',
      label: 'Digitale producten of abonnementen',
      description:
        'Levering, toegang en ondersteunde betaalflow afzonderlijk uitwerken.',
    },
    {
      id: '3d',
      label: '3D, AR of een configurator',
      description:
        'Eerst de modelbestanden, bediening en technische haalbaarheid bekijken.',
    },
    {
      id: 'integrations',
      label: 'Koppelingen & zakelijke verkoop',
      description: 'Bijvoorbeeld voorraad, boekhouding of zakelijke accounts.',
    },
  ],
  website: [
    {
      id: 'cms',
      label: 'Zelf inhoud aanpassen',
      description:
        'Een beheeromgeving; omvang en licenties bespreken we apart.',
    },
    {
      id: 'language',
      label: 'Een extra taal',
      description: 'Eigen taalpagina’s. Vertaling en inhoud apart afspreken.',
    },
    {
      id: 'copy',
      label: 'Hulp met teksten',
      description: 'Op basis van jouw bedrijfsinformatie.',
    },
    {
      id: 'shop',
      label: 'Verkopen of betalen',
      description: 'Webshop, betaalfunctie en beheer vragen een eigen offerte.',
    },
  ],
  design: [
    {
      id: 'copy',
      label: 'Bijschriften of teksten',
      description: 'Schrijven en redigeren als aanvulling op het ontwerp.',
    },
    {
      id: 'format',
      label: 'Een extra formaat',
      description: 'Bijvoorbeeld een post ook als story uitwerken.',
    },
    {
      id: 'editable',
      label: 'Bewerkbare templates',
      description: 'Tool, bronbestanden en gebruik afstemmen.',
    },
    {
      id: 'publish',
      label: 'Planning & publicatie verkennen',
      description:
        'Een aparte opdracht; frequentie en kanalen bespreken we samen.',
    },
  ],
  maintenance: [],
  software: [
    {
      id: 'crm',
      label: 'Formulier naar CRM',
      description: 'Een aanvraag registreren en klaarzetten voor opvolging.',
    },
    {
      id: 'dashboard',
      label: 'Dashboard of overzicht',
      description: 'Gegevens samenbrengen voor een afgesproken taak.',
    },
    {
      id: 'accounts',
      label: 'Gebruikers & rollen',
      description: 'Wie mag welke informatie zien of aanpassen?',
    },
    {
      id: 'ai',
      label: 'AI-ondersteuning',
      description: 'Bijvoorbeeld conceptteksten of ordenen, met controle.',
    },
  ],
  ugc: [
    {
      id: 'product-demo',
      label: 'Productdemo',
      description: 'Korte video met je product in gebruik.',
    },
    {
      id: 'screen-demo',
      label: 'App- of schermdemo',
      description: 'Uitleg via een gemonteerde schermopname.',
    },
    {
      id: 'video-series',
      label: 'Meerdere video’s of varianten',
      description: 'Aantal, lengte en varianten vooraf afspreken.',
    },
    {
      id: 'paid-usage',
      label: 'Gebruik in betaalde advertenties',
      description: 'Kanalen, looptijd en vergoeding afzonderlijk afspreken.',
    },
  ],
  visibility: [
    {
      id: 'seo',
      label: 'SEO & vindbaarheid in AI',
      description: 'Technische basis, structuur en duidelijke informatie.',
    },
    {
      id: 'speed',
      label: 'Snelheid & gebruiksgemak',
      description: 'Knelpunten op mobiel en desktop onderzoeken.',
    },
    {
      id: 'analytics',
      label: 'Metingen & inzicht',
      description: 'Meetplan en inrichting van afgesproken gebeurtenissen.',
    },
  ],
};
export type Selection = {
  service: Service;
  website: keyof typeof websitePrices;
  design: (typeof designOffers)[number]['id'];
  maintenance: 'none' | (typeof maintenancePlans)[number]['id'];
  extras: string[];
};
export const defaultSelection: Selection = {
  service: 'website',
  website: 'business',
  design: 'set',
  maintenance: 'none',
  extras: [],
};
export function normalizeSelection(value: unknown): Selection {
  const raw =
    value && typeof value === 'object'
      ? (value as Record<string, unknown>)
      : {};
  const extraValues = Array.isArray(raw.extras) ? raw.extras : [];
  const service = serviceChoices.some((s) => s.id === raw.service)
    ? (raw.service as Service)
    : 'website';
  return {
    service,
    website: websiteChoices.some((p) => p.id === raw.website)
      ? (raw.website as Selection['website'])
      : 'business',
    design: designOffers.some((p) => p.id === raw.design)
      ? (raw.design as Selection['design'])
      : 'set',
    maintenance: maintenancePlans.some((p) => p.id === raw.maintenance)
      ? (raw.maintenance as Selection['maintenance'])
      : service === 'maintenance'
        ? 'basis'
        : 'none',
    extras: addOns[service]
      .filter((a) => extraValues.includes(a.id))
      .map((a) => a.id),
  };
}
export function readSelection(value?: string): Selection | undefined {
  if (!value || value.length > 2000) return;
  try {
    return normalizeSelection(JSON.parse(value));
  } catch {
    return;
  }
}
export function estimate(input: Selection) {
  const selection = normalizeSelection(input);
  const website = websiteChoices.find((p) => p.id === selection.website)!;
  const design = designOffers.find((p) => p.id === selection.design)!;
  const plan = maintenancePlans.find((p) => p.id === selection.maintenance);
  const maintenance =
    selection.service === 'website' || selection.service === 'maintenance'
      ? plan
      : undefined;
  const extraLabels = addOns[selection.service]
    .filter((a) => selection.extras.includes(a.id))
    .map((a) => a.label);
  const oneOff =
    selection.service === 'website'
      ? websitePrices[selection.website]
      : selection.service === 'design'
        ? design.amount
        : null;
  const monthly = maintenance?.amount ?? null;
  const title =
    selection.service === 'website'
      ? website.name
      : selection.service === 'design'
        ? design.title
        : selection.service === 'maintenance'
          ? maintenance!.name
          : serviceChoices.find((s) => s.id === selection.service)!.label;
  const qualifier =
    selection.service === 'website'
      ? selection.website === 'enterprise'
        ? 'Indicatief vanaf'
        : 'Circa'
      : selection.service === 'design' && design.from
        ? 'Vanaf'
        : '';
  const pending = [...extraLabels];
  if (selection.service === 'website')
    pending.push('Hosting, domein en eventuele licenties');
  if (selection.service === 'website' && selection.website === 'enterprise')
    pending.push('Afzonderlijke verkenning en definitieve ontwikkelscope');
  if (selection.service === 'maintenance')
    pending.push('Eventuele startcontrole; hosting en licenties');
  if (selection.service === 'software')
    pending.push('Verkenning, bouw, gebruikskosten en beheer');
  if (selection.service === 'webshop')
    pending.push(
      'Platform, ontwerp, inrichting en tests; abonnement of hosting, apps/plugins, betaaltransacties en webshoponderhoud apart begroten',
    );
  if (selection.service === 'ugc')
    pending.push(
      'Briefing, opname, montage, correcties en gebruiksafspraken; eventuele verzending, reis- en licentiekosten',
    );
  if (selection.service === 'visibility')
    pending.push('Analyse, uitvoering en eventuele toolkosten');
  if (selection.service === 'design' && design.amount === null)
    pending.push(
      design.billing === 'month'
        ? 'Maandprijs, eventuele eenmalige opstart en klantgebonden toolkosten'
        : 'Prijs voor ontwerpen, bijschriften en contentkalender',
    );
  if (selection.service === 'design' && selection.design === 'flyer')
    pending.push('Drukkosten bij je drukker');
  const amountLabel =
    oneOff !== null
      ? `${qualifier} ${euro(oneOff)}`.trim()
      : monthly !== null
        ? `${euro(monthly)} / maand`
        : 'Op offerte';
  const lines = [
    `Dienst: ${serviceChoices.find((s) => s.id === selection.service)!.label}`,
    `Keuze: ${title}`,
    selection.service === 'design' && design.amount === null
      ? design.billing === 'month'
        ? 'Maandelijkse opdracht: prijs op offerte; opstart apart benoemen'
        : 'Eenmalige contentopdracht: prijs op offerte'
      : '',
    oneOff !== null ? `Eenmalig: ${amountLabel} excl. btw` : '',
    monthly !== null
      ? `Onderhoud: ${maintenance!.name}, ${euro(monthly)} per maand excl. btw`
      : selection.service === 'website'
        ? 'Geen onderhoudspakket gekozen'
        : '',
    ...extraLabels.map((x) => `Gewenste uitbreiding (op offerte): ${x}`),
    pending.length
      ? `Nog te begroten / externe kosten: ${pending.join('; ')}`
      : '',
    'Dit is een vrijblijvende samenstelling, geen bestelling. De offerte bepaalt scope, btw en definitieve prijs.',
  ];
  return {
    selection,
    title,
    oneOff,
    monthly,
    qualifier,
    amountLabel,
    pending,
    extraLabels,
    summary: lines.filter(Boolean).join('\n'),
  };
}
