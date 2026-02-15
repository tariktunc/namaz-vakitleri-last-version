import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://namazvakitleri.com';

  // Ana sayfalar
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/iftar`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // Türkiye'nin önemli şehirleri için sayfalar eklenebilir
  const majorCities = [
    'istanbul',
    'ankara',
    'izmir',
    'bursa',
    'antalya',
    'adana',
    'konya',
    'gaziantep',
    'sanliurfa',
    'kocaeli',
  ];

  const cityRoutes = majorCities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [...routes, ...cityRoutes];
}
