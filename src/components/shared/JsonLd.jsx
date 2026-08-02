import { SITE_CONFIG } from '../../data/siteConfig.js';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG?.name || 'CypherEdge',
    url: SITE_CONFIG?.url || 'https://cypheredge.com',
    logo: `${SITE_CONFIG?.url || 'https://cypheredge.com'}/logo.png`,
    email: SITE_CONFIG?.email || 'contact@cypheredge.com',
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
