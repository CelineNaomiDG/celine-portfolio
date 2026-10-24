/* Scroll containers remain keyboard-focusable for horizontal table navigation. */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/prefer-tag-over-role */
import Link from 'next/link';
import { websitePackages } from './website-packages';
import styles from './services.module.css';
const rows = [
 ['Compact', 'Eén pagina', 'Bestaande merkbasis', 'Contactlinks', 'Apart afspreken'],
 ['Bedrijfswebsite', 'Meerdere pagina’s', 'Samenhangende huisstijl', 'Standaard formulier', 'Apart afspreken'],
 ['Visueel onderscheidend', 'Rijkere structuur', 'Meer artdirection & beweging', 'Volgens offerte', 'Eenvoudig CMS mogelijk in offerte'],
 ['Meerdere doelgroepen', 'Meerdere bezoekersroutes', 'Uitgebreide structuur & afstemming', 'Volgens offerte', 'Binnen raming afspreken'],
 ['Complex maatwerk', 'Eerst verkenning', 'Ontwerp na verkenning', 'Na functionele analyse', 'Eisen eerst vaststellen'],
];
export default function PackageComparison() {
 return <div><p className={styles.note}>Vergelijk de richting van het traject. Aantallen pagina’s, indelingen en feedbackrondes leggen we vast in je offerte.</p><div className={styles.priceTableWrap} tabIndex={0} role="region" aria-label="Pakketvergelijking, horizontaal scrollbaar op kleine schermen"><table className={styles.priceTable}><caption>Wat past bij jouw website?</caption><thead><tr><th scope="col">Traject</th><th scope="col">Richtbedrag excl. btw</th><th scope="col">Omvang</th><th scope="col">Ontwerp</th><th scope="col">Contact</th><th scope="col">Zelf aanpassen</th></tr></thead><tbody>{websitePackages.map((p,i) => <tr key={p.slug}><th scope="row"><Link className={styles.inlineLink} href={`/services/websites/${p.slug}`}>{p.name}</Link><small className={styles.cellNote}>{rows[i][0]}</small></th><td>{p.price}</td>{rows[i].slice(1).map((cell,j)=><td key={j}>{cell}</td>)}</tr>)}</tbody></table></div><p className={styles.note}>Hosting, domein, betaalde tools en doorlopend onderhoud zijn afzonderlijke kosten. Een concreet voorstel bevat één totaalprijs voor één afgesproken omvang.</p></div>;
}
