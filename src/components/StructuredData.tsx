export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Namaz Vakitleri',
    description: "Türkiye'deki tüm şehirler için güncel namaz vakitleri, iftar ve sahur saatleri",
    url: 'https://namazvakitleri.com',
    applicationCategory: 'Lifestyle',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    creator: {
      '@type': 'Organization',
      name: 'Namaz Vakitleri',
      url: 'https://namazvakitleri.com',
    },
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Namaz Vakitleri',
    url: 'https://namazvakitleri.com',
    logo: 'https://namazvakitleri.com/icon.png',
    sameAs: [
      'https://twitter.com/namazvakitleri',
      'https://facebook.com/namazvakitleri',
    ],
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Namaz Vakitleri',
    url: 'https://namazvakitleri.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://namazvakitleri.com/?city={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
