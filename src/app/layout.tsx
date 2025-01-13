import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import { HeaderWrapper } from '@/components/HeaderWrapper';
import { CityProvider } from '@/context/CityContext';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Namaz ve İftar Vakitleri',
    default: 'Namaz Vakitleri',
  },
  description: "Türkiye'deki tüm şehirler için namaz vakitleri ve iftar/sahur saatleri",
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
      <body className={roboto.className}>
        <CityProvider>
          <HeaderWrapper />
          {children}
        </CityProvider>
      </body>
    </html>
  );
}
