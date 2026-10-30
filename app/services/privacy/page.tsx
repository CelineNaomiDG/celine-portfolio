import type { Metadata } from 'next';
import LegalDocument from '../legal-document';
import { privacyContent } from '../legal-content';

export const metadata: Metadata = {
  title: 'Privacy — concept | Celine de Graaf',
  description:
    'Conceptinformatie over privacy en persoonsgegevens bij de diensten van Celine de Graaf.',
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return <LegalDocument content={privacyContent} />;
}
