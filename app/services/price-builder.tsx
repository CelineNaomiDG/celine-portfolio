'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  addOns,
  defaultSelection,
  designOffers,
  designPriceLabel,
  estimate,
  euro,
  maintenancePlans,
  normalizeSelection,
  serviceChoices,
  websiteChoices,
  websitePrices,
  type Selection,
} from './pricing-data';
import styles from './services.module.css';
import ui from './price-builder.module.css';

export default function PriceBuilder({
  initialService,
  initialWebsite,
  initialDesign,
}: {
  initialService?: string;
  initialWebsite?: string;
  initialDesign?: string;
}) {
  const [selection, setSelection] = useState<Selection>(() =>
    normalizeSelection({
      ...defaultSelection,
      service: initialService,
      design: initialDesign || defaultSelection.design,
      website: initialWebsite || defaultSelection.website,
    }),
  );
  const builderRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const [showMobileTotal, setShowMobileTotal] = useState(false);
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      !builderRef.current ||
      !summaryRef.current
    )
      return;
    const observer = new IntersectionObserver(() => {
      const builder = builderRef.current?.getBoundingClientRect();
      const summary = summaryRef.current?.getBoundingClientRect();
      if (builder && summary)
        setShowMobileTotal(
          builder.top < window.innerHeight &&
            builder.bottom > 0 &&
            (summary.top >= window.innerHeight || summary.bottom <= 0),
        );
    });
    observer.observe(builderRef.current);
    observer.observe(summaryRef.current);
    return () => observer.disconnect();
  }, []);
  const result = estimate(selection);
  const change = (patch: Partial<Selection>) =>
    setSelection((old) => normalizeSelection({ ...old, ...patch }));
  const contactQuery = new URLSearchParams({
    samenstelling: JSON.stringify(result.selection),
  }).toString();
  const isWebsite = selection.service === 'website';
  return (
    <div ref={builderRef} className={ui.builder}>
      <div className={ui.options}>
        <fieldset className={ui.fieldset}>
          <legend>
            <span>01</span> Waar zoek je hulp bij?
          </legend>
          <div className={ui.serviceChoices}>
            {serviceChoices.map((item) => (
              <label
                key={item.id}
                className={ui.choice}
                aria-label={item.label}
              >
                <input
                  type="radio"
                  name="service-type"
                  value={item.id}
                  checked={selection.service === item.id}
                  onChange={() =>
                    change({
                      service: item.id,
                      extras: [],
                      maintenance: item.id === 'maintenance' ? 'basis' : 'none',
                    })
                  }
                />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        {isWebsite && (
          <fieldset className={ui.fieldset}>
            <legend>
              <span>02</span> Wat moet je website doen?
            </legend>
            <div className={ui.choices}>
              {websiteChoices.map((item) => (
                <label
                  key={item.id}
                  className={ui.choice}
                  aria-label={`${item.title}. ${item.name}. ${euro(websitePrices[item.id])}, exclusief btw; prijsindicatie.`}
                >
                  <input
                    type="radio"
                    name="website"
                    checked={selection.website === item.id}
                    onChange={() => change({ website: item.id })}
                  />
                  <span>
                    <strong>{item.title}</strong>
                    <small>
                      {item.name} ·{' '}
                      {item.id === 'enterprise' ? 'indicatief vanaf' : 'circa'}{' '}
                      {euro(websitePrices[item.id])}
                    </small>
                    <small>{item.text}</small>
                  </span>
                </label>
              ))}
            </div>
            <p className={ui.note}>
              Je kiest een richting. Pagina’s, functies en feedbackmomenten
              leggen we vast in de offerte.
            </p>
          </fieldset>
        )}
        {selection.service === 'design' && (
          <fieldset className={ui.fieldset}>
            <legend>
              <span>02</span> Wat wil je laten ontwerpen?
            </legend>
            <div className={ui.choices}>
              {designOffers.map((item) => (
                <label
                  key={item.id}
                  className={ui.choice}
                  aria-label={`${item.title}. ${designPriceLabel(item)}. ${item.billing === 'month' ? 'Per maand' : 'Eenmalig'}, exclusief btw.`}
                >
                  <input
                    type="radio"
                    name="design"
                    checked={selection.design === item.id}
                    onChange={() => change({ design: item.id, extras: [] })}
                  />
                  <span>
                    <strong>
                      {item.title} · {designPriceLabel(item)}
                    </strong>
                    <small>
                      {item.billing === 'month'
                        ? 'Maandelijkse opdracht'
                        : 'Eenmalige opdracht'}{' '}
                      · {item.text}
                    </small>
                  </span>
                </label>
              ))}
            </div>
            <p className={ui.note}>
              Bij losse ontwerpen lever jij tekst en beeld en publiceer je zelf.
              Bij content en publicatie bespreken we aantallen, kanalen en de
              bijbehorende offerte. Zes unieke posts op twee kanalen zijn twaalf
              plaatsingen, geen twaalf ontwerpen.
            </p>
          </fieldset>
        )}
        {(isWebsite || selection.service === 'maintenance') && (
          <fieldset className={ui.fieldset}>
            <legend>
              <span>{isWebsite ? '03' : '02'}</span>{' '}
              {isWebsite
                ? 'Ondersteuning na livegang?'
                : 'Welke ondersteuning zoek je?'}
            </legend>
            <div className={ui.choices}>
              {isWebsite && (
                <label
                  className={ui.choice}
                  aria-label="Nu geen onderhoudspakket"
                >
                  <input
                    type="radio"
                    name="maintenance"
                    checked={selection.maintenance === 'none'}
                    onChange={() => change({ maintenance: 'none' })}
                  />
                  <span>
                    <strong>Nu geen onderhoudspakket</strong>
                    <small>Optioneel en later apart te bespreken.</small>
                  </span>
                </label>
              )}
              {maintenancePlans.map((plan) => (
                <label
                  key={plan.id}
                  className={ui.choice}
                  aria-label={`${plan.name} · ${euro(plan.amount)} per maand, exclusief btw. ${plan.allowance}`}
                >
                  <input
                    type="radio"
                    name="maintenance"
                    checked={selection.maintenance === plan.id}
                    onChange={() => change({ maintenance: plan.id })}
                  />
                  <span>
                    <strong>
                      {plan.name} · {euro(plan.amount)} / maand
                    </strong>
                    <small>{plan.allowance}</small>
                  </span>
                </label>
              ))}
            </div>
            <p className={ui.note}>
              Voor één afgesproken website. Ongebruikte tijd vervalt
              maandelijks. Hosting, licenties, grote reparaties en nieuwe
              functies zijn apart.{' '}
              <Link href="/services/onderhoud">
                Bekijk alle onderhoudsafspraken ↗
              </Link>
            </p>
          </fieldset>
        )}
        {addOns[selection.service].length > 0 && (
          <fieldset className={ui.fieldset}>
            <legend>
              <span>
                {isWebsite
                  ? '04'
                  : selection.service === 'design'
                    ? '03'
                    : '02'}
              </span>{' '}
              {isWebsite || selection.service === 'design'
                ? 'Aanvullende wensen?'
                : 'Wat wil je aanpakken?'}
            </legend>
            <p className={ui.note}>
              Kies wat relevant is. Voor deze onderdelen volgt een aparte
              begroting.
            </p>
            <div className={ui.choices}>
              {addOns[selection.service]
                .filter(
                  (item) =>
                    !(
                      selection.service === 'design' &&
                      ((selection.design === 'content' && item.id === 'copy') ||
                        (selection.design === 'monthly' &&
                          ['copy', 'publish'].includes(item.id)))
                    ),
                )
                .map((item) => (
                  <label
                    key={item.id}
                    className={ui.choice}
                    aria-label={`${item.label}. Op offerte. ${item.description}`}
                  >
                    <input
                      type="checkbox"
                      checked={selection.extras.includes(item.id)}
                      onChange={(e) =>
                        change({
                          extras: e.target.checked
                            ? [...selection.extras, item.id]
                            : selection.extras.filter((id) => id !== item.id),
                        })
                      }
                    />
                    <span>
                      <strong>
                        {item.label}
                        <em>Op offerte</em>
                      </strong>
                      <small>{item.description}</small>
                    </span>
                  </label>
                ))}
            </div>
          </fieldset>
        )}
        <button
          type="button"
          className={styles.textLink}
          onClick={() => setSelection({ ...defaultSelection, extras: [] })}
        >
          Begin opnieuw ↻
        </button>
      </div>
      <aside
        ref={summaryRef}
        id="jouw-uitkomst"
        className={ui.summary}
        aria-label="Jouw samenstelling"
      >
        <div className={ui.summaryHead}>
          <span>JOUW SAMENSTELLING</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className={ui.summaryBody} aria-live="polite" aria-atomic="true">
          <h3>{result.title}</h3>
          <p className={ui.amount}>{result.amountLabel}</p>
          <p className={ui.note}>
            {result.oneOff !== null
              ? 'Eenmalig · exclusief btw'
              : result.monthly !== null
                ? 'Exclusief btw'
                : 'Prijs na afstemming'}
          </p>
          {result.oneOff !== null && result.monthly !== null && (
            <p className={ui.monthly}>
              + {euro(result.monthly)} / maand onderhoud
              <br />
              <small>Exclusief btw</small>
            </p>
          )}
          <div className={ui.included}>
            <h4>Hier kun je op rekenen</h4>
            <ul>
              {(selection.service === 'website'
                ? [
                    'Een afgesproken websitebasis',
                    'Ontwerp, bouw en controle',
                    'Uitleg bij de oplevering',
                  ]
                : selection.service === 'design'
                  ? [
                      selection.design === 'monthly'
                        ? 'Een afgebakende maandopdracht op offerte'
                        : selection.design === 'content'
                          ? 'Een contentreeks met tekst en kalender op offerte'
                          : 'De gekozen ontwerpomvang',
                      selection.design === 'monthly' ||
                      selection.design === 'content'
                        ? 'Feedback en accordering vooraf afspreken'
                        : 'Eén gebundelde feedbackronde',
                      'Afgesproken eindbestanden',
                    ]
                  : selection.service === 'maintenance'
                    ? [
                        maintenancePlans.find(
                          (p) => p.id === selection.maintenance,
                        )!.allowance,
                        'Een kort overzicht van het werk',
                      ]
                    : [
                        'Een afgebakend voorstel',
                        'Werkzaamheden en kosten vooraf',
                      ]
              ).map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          {result.pending.length > 0 && (
            <div className={ui.pending}>
              <h4>Nog te begroten / apart</h4>
              <ul>
                {result.pending.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Deze kosten zijn nog niet in het bedrag hierboven opgenomen. Het
                is geen volledige totaalprijs.
              </p>
            </div>
          )}
        </div>
        <div className={ui.summaryActions}>
          <Link
            className={styles.primaryLink}
            href={`/services/contact?${contactQuery}`}
          >
            Bespreek deze samenstelling ↗
          </Link>
          <Link
            className={styles.textLink}
            href={`/services/contact?${contactQuery}&kennismaking=1`}
          >
            Vraag een kennismaking aan
          </Link>
          <p className={ui.note}>
            Vrijblijvend. Je keuzes gaan mee; je bestelt en betaalt hier niets.
            De offerte bepaalt de definitieve scope, prijs en btw.
          </p>
        </div>
      </aside>
      {showMobileTotal && (
        <a className={ui.mobileTotal} href="#jouw-uitkomst">
          <span>Bekijk je samenstelling</span>
          <strong>
            {result.amountLabel}
            {result.pending.length > 0 ? ' + apart begroot' : ''}
          </strong>
        </a>
      )}
    </div>
  );
}
