import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Namaz Vakitleri - Türkiye Geneli Namaz ve İftar Saatleri',
    short_name: 'Namaz Vakitleri',
    description:
      "Türkiye'deki tüm şehirler için güncel namaz vakitleri, iftar ve sahur saatleri. Diyanet onaylı vakit bilgileri.",
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF6',
    theme_color: '#1B7D5A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
