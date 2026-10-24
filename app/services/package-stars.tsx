import styles from './services.module.css';
export default function PackageStars({ level }: { level: number }) {
  return <p className={styles.packageStars} aria-label={`Omvang traject: ${level} van 5`}>
    <span aria-hidden="true">{'★'.repeat(level)}<span className={styles.emptyStars}>{'☆'.repeat(5 - level)}</span></span>
    <span>Omvang {level}/5</span>
  </p>;
}
