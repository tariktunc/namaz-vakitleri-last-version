import type { Metadata } from 'next';
import { IftarVakti } from '@/components/features/IftarVakti';

export const metadata: Metadata = {
  title: 'İftar Vakti',
  description: 'İftara ne kadar kaldı? Türkiye genelinde il il iftar vakitleri',
  keywords: ['iftar vakti', 'iftar saati', 'ramazan', 'oruç', 'ezan vakti'],
  openGraph: {
    title: 'İftar Vakti',
    description: 'İftara ne kadar kaldı? Türkiye genelinde il il iftar vakitleri',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Namaz ve İftar Vakitleri',
  },
};

export default function IftarPage() {
  return <IftarVakti />;
} 