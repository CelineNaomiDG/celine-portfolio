import Link from 'next/link';
import RocketGame from '@/components/rocket-game';
export const metadata = { title: 'Rocket arcade — design prototype', robots: { index: false, follow: false } };
export default function Preview() { return <main style={{maxWidth:780,margin:'60px auto',padding:20}}><Link href="/">← Portfolio</Link><h1>Rocket arcade</h1><p>Design prototype · fictional vehicle · jump and hold boost to fly.</p><RocketGame active={true}/></main>; }
