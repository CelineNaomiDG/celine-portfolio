import type { Metadata } from 'next';
import LegalDocument from '../legal-document';
import { termsContent } from '../legal-content';

export const metadata: Metadata = {
  title: 'Voorwaarden — concept | Celine de Graaf',
  description:
    'Conceptafspraken voor websites, apps, digital design en optioneel onderhoud van Celine de Graaf.',
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return <LegalDocument content={termsContent} />;
}
