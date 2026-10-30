import styles from './services.module.css';
const labels = ['Compact', 'Bedrijfswebsite', 'Visueel onderscheidend', 'Meerdere doelgroepen', 'Complex maatwerk'];
export default function PackageStars({ level }: { level: number }) {
 return <p className={styles.packageStars}><span className={styles.scopeIndicator} aria-hidden="true">{[1,2,3,4,5].map(n => <i key={n} data-filled={n<=level} />)}</span><span>{labels[level-1]}</span></p>;
}
