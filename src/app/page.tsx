import type { Metadata } from 'next';
import { PrayerTimesView } from '@/components/PrayerTimesView';

export const metadata: Metadata = {
  title: 'Namaz Vakitleri - Türkiye Geneli Namaz ve İftar Saatleri',
  description:
    "Türkiye'deki 81 il için güncel namaz vakitleri, iftar ve sahur saatleri. Diyanet onaylı hesaplama ile canlı geri sayım. İmsak, güneş, öğle, ikindi, akşam ve yatsı saatleri.",
  keywords: [
    'namaz vakitleri',
    'namaz saatleri',
    'ezan saati',
    'iftar vakti',
    'sahur vakti',
    'diyanet namaz vakitleri',
    'istanbul namaz vakti',
    'ankara namaz vakti',
    'imsak vakti',
    'ramazan',
  ],
  alternates: {
    canonical: 'https://namazvakitleri.com',
  },
  openGraph: {
    title: 'Namaz Vakitleri - Türkiye Geneli Namaz ve İftar Saatleri',
    description:
      "Türkiye'deki 81 il için güncel namaz vakitleri, iftar ve sahur saatleri. Diyanet onaylı hesaplama.",
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Namaz ve İftar Vakitleri',
    url: 'https://namazvakitleri.com',
  },
};

export default function Home() {
  return <PrayerTimesView title="Namaz Vakitleri" />;
}
