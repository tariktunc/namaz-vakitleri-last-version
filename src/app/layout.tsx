import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import { HeaderWrapper } from '@/components/HeaderWrapper';
import { CityProvider } from '@/context/CityContext';
import { StructuredData } from '@/components/StructuredData';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://namazvakitleri.com'),
  title: {
    template: '%s | Namaz ve İftar Vakitleri',
    default: 'Namaz Vakitleri - Türkiye Geneli Namaz ve İftar Saatleri',
  },
  description: "Türkiye'deki tüm şehirler için güncel namaz vakitleri, iftar ve sahur saatleri. Diyanet onaylı vakit bilgileri ile canlı geri sayım. İstanbul, Ankara, İzmir ve 81 il için namaz saatleri.",
  keywords: [
    'namaz vakitleri',
    'iftar vakti',
    'sahur vakti',
    'ezan saati',
    'namaz saatleri',
    'diyanet namaz vakitleri',
    'istanbul namaz vakti',
    'ankara namaz vakti',
    'iftar saati',
    'sahur saati',
    'ramazan',
    'imsak vakti',
    'akşam ezanı',
    'öğle namazı',
    'ikindi namazı',
    'yatsı namazı',
  ],
  authors: [{ name: 'Namaz Vakitleri' }],
  creator: 'Namaz Vakitleri',
  publisher: 'Namaz Vakitleri',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://namazvakitleri.com',
    siteName: 'Namaz ve İftar Vakitleri',
    title: 'Namaz Vakitleri - Türkiye Geneli Namaz ve İftar Saatleri',
    description: "Türkiye'deki tüm şehirler için güncel namaz vakitleri, iftar ve sahur saatleri. Diyanet onaylı vakit bilgileri.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Namaz Vakitleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namaz Vakitleri - Türkiye Geneli Namaz ve İftar Saatleri',
    description: "Türkiye'deki tüm şehirler için güncel namaz vakitleri, iftar ve sahur saatleri.",
    images: ['/og-image.png'],
    creator: '@namazvakitleri',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "/apple-icon.png",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <StructuredData />
      </head>
      <body className={roboto.className}>
        <CityProvider>
          <HeaderWrapper />
          {children}
        </CityProvider>
      </body>
    </html>
  );
}
