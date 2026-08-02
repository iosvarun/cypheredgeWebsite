import { SITE_CONFIG } from '../../data/siteConfig.js';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG?.name || 'CypherEdge',
    url: SITE_CONFIG?.url || 'https://cypheredge.com',
    logo: `${SITE_CONFIG?.url || 'https://cypheredge.com'}/logo.png`,
    email: SITE_CONFIG?.email || 'contact@cypheredge.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressCountry: 'India'
    },
    foundingDate: '2023',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50
    },
    knowsAbout: ['AI', 'Software Engineering', 'Mobile Development', 'Web Development', 'Cloud DevOps', 'Product Engineering'],
    sameAs: [
      SITE_CONFIG?.social?.linkedin,
      SITE_CONFIG?.social?.twitter,
      SITE_CONFIG?.social?.github
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({ services = [] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG?.name || 'CypherEdge Engineering',
    url: SITE_CONFIG?.url || 'https://cypheredge.com',
    image: `${SITE_CONFIG?.url || 'https://cypheredge.com'}/logo.png`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        },
        position: index + 1
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ faqs = [] }) {
  if (!faqs || faqs.length === 0) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items = [] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({ title, description, author, datePublished, dateModified, image, url }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author || 'CypherEdge Engineering'
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: image || `${SITE_CONFIG?.url || 'https://cypheredge.com'}/logo.png`,
    url: url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({ name, description, image, url, rating, ratingCount }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    image: image || `${SITE_CONFIG?.url || 'https://cypheredge.com'}/logo.png`,
    url: url,
    applicationCategory: 'BusinessApplication',
    aggregateRating: rating ? {
      '@type': 'AggregateRating',
      ratingValue: rating,
      ratingCount: ratingCount || 1
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG?.name || 'CypherEdge',
    image: `${SITE_CONFIG?.url || 'https://cypheredge.com'}/logo.png`,
    '@id': SITE_CONFIG?.url || 'https://cypheredge.com',
    url: SITE_CONFIG?.url || 'https://cypheredge.com',
    telephone: SITE_CONFIG?.phone || '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225,
      longitude: 72.5714
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
