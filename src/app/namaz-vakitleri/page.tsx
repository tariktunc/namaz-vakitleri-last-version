import type { Metadata } from 'next';
import { PrayerTimesView } from '@/components/PrayerTimesView';

export const metadata: Metadata = {
  title: 'Namaz Vakitleri',
  description:
    "Türkiye'deki 81 il için güncel namaz vakitleri. İmsak, güneş, öğle, ikindi, akşam ve yatsı saatleri. Diyanet onaylı hesaplama.",
  keywords: [
    'namaz vakitleri',
    'namaz saatleri',
    'ezan saati',
    'diyanet namaz vakitleri',
    'imsak vakti',
    'öğle namazı',
    'ikindi namazı',
    'akşam namazı',
    'yatsı namazı',
  ],
  alternates: {
    canonical: 'https://namazvakitleri.com/namaz-vakitleri',
  },
  openGraph: {
    title: 'Namaz Vakitleri - Türkiye Geneli',
    description:
      "Türkiye'deki 81 il için güncel namaz vakitleri. Diyanet onaylı hesaplama ile doğru vakit bilgisi.",
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Namaz ve İftar Vakitleri',
  },
};

export default function NamazVakitleriPage() {
  return <PrayerTimesView title="Namaz Vakitleri" />;
}
