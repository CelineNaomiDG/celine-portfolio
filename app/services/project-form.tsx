'use client';
import { useState, type SubmitEvent } from 'react';
import styles from './services.module.css';

export default function ProjectForm({ english = false }: { english?: boolean }) {
  const [draft, setDraft] = useState('');
  const [meeting, setMeeting] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = (nl: string, en: string) => english ? en : nl;
  function prepare(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => { const item = data.get(name); return typeof item === 'string' ? item : ''; };
    const lines = [
      `${t('Naam', 'Name')}: ${value('name')}`,
      `E-mail: ${value('email')}`,
      `${t('Dienst', 'Service')}: ${value('service')}`,
      `${t('Project', 'Project')}: ${value('message')}`,
      meeting ? `${t('Voorkeur kennismaking', 'Preferred meeting time')}: ${value('availability') || t('In overleg', 'To be agreed')}` : '',
    ];
    setDraft(lines.filter(Boolean).join('\n\n'));
    setCopied(false);
  }
  return <form className={styles.projectForm} onSubmit={prepare} onChange={() => { setDraft(''); setCopied(false); }}>
    <p>{t('Vul je vraag in en maak een bericht klaar. Dit formulier verstuurt nog niets: je verstuurt het daarna zelf via e-mail.', 'Prepare your enquiry below. This form does not send anything: you send the prepared message yourself by email.')}</p>
    <div className={styles.formPair}>
      <label>{t('Je naam', 'Your name')}<input name="name" autoComplete="name" maxLength={100} required /></label>
      <label>{t('Je e-mailadres', 'Your email')}<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
    </div>
    <label>{t('Waar zoek je hulp bij?', 'What do you need?')}<select name="service" required defaultValue="">
      <option value="" disabled>{t('Kies een dienst', 'Choose a service')}</option>
      {[['Website', 'Website'], ['Software of app', 'Software or app'], ['Social media of flyer', 'Social media or flyer'], ['Onderhoud', 'Maintenance'], ['Nog niet zeker', 'Not sure yet']].map(([nl,en]) => <option key={en}>{t(nl,en)}</option>)}
    </select></label>
    <label>{t('Wat wil je bereiken?', 'What would you like to achieve?')}<textarea name="message" rows={4} minLength={15} maxLength={2000} required placeholder={t('Vertel kort over je bedrijf, je idee en een eventuele gewenste planning.', 'Tell me about your business, your idea and any preferred timeline.')} /></label>
    <label className={styles.checkRow}><input name="meeting" type="checkbox" checked={meeting} onChange={e => setMeeting(e.target.checked)} />{t('Ik wil ook een kennismaking aanvragen', 'I would also like to request an introduction')}</label>
    {meeting && <label>{t('Welke avond past meestal? (optioneel)', 'Which evening usually works? (optional)')}<select name="availability"><option>{t('In overleg', 'To be agreed')}</option>{['Maandag / Monday', 'Dinsdag / Tuesday', 'Woensdag / Wednesday', 'Donderdag / Thursday', 'Vrijdag / Friday'].map(day => <option key={day}>{day} · 18:00–21:00</option>)}</select><small>{t('Dit is een voorkeur, geen geboekte afspraak. We bevestigen samen een tijdstip.', 'This is a preference, not a booking. We will confirm a time together.')}</small></label>}
    <p className={styles.note}>{t('Je invoer wordt hier niet opgeslagen. Stuur geen wachtwoorden of gevoelige klantgegevens mee.', 'Your input is not stored here. Please do not include passwords or sensitive customer data.')}</p>
    <button className={styles.primaryLink} type="submit">{t('Maak mijn aanvraag klaar', 'Prepare my enquiry')} ↗</button>
    <div aria-live="polite">{draft && <div className={styles.scopeBox}>
      <h3>{t('Je bericht staat klaar — nog niet verstuurd', 'Your message is ready — not sent yet')}</h3>
      <pre className={styles.draftPreview}>{draft}</pre>
      <div className={styles.actionRow}><a className={styles.primaryLink} href={`mailto:celinedegraaf.tech@gmail.com?subject=${encodeURIComponent(meeting ? 'Kennismaking / Introduction' : 'Project enquiry')}&body=${encodeURIComponent(draft)}`}>{t('Open in mijn e-mailapp', 'Open in my email app')} ↗</a>
      <button className={styles.textLink} type="button" onClick={async () => { try { await navigator.clipboard.writeText(draft); setCopied(true); } catch { setCopied(false); } }}>{copied ? t('Gekopieerd', 'Copied') : t('Kopieer bericht', 'Copy message')}</button></div>
      <p>{t('Geen e-mailapp? Kopieer het bericht en mail het naar', 'No email app? Copy your message and email it to')} <a className={styles.inlineLink} href="mailto:celinedegraaf.tech@gmail.com">celinedegraaf.tech@gmail.com</a>.</p>
    </div>}</div>
  </form>;
}
