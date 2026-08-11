import React from 'react';
import { SITE_CONFIG } from '../../data/siteConfig';

const BASE_URL = 'https://www.cypheredge.in';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG?.companyName || 'CypherEdge Private Limited',
    alternateName: 'CypherEdge',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/logo_tagline.png`,
    email: SITE_CONFIG?.email || 'admin@cypheredge.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India'
    },
    knowsAbout: [
      'AI software development',
      'AI engineering company',
      'agentic AI development',
      'iOS app development',
      'mobile app development',
      'software product engineering',
      'SaaS development',
      'backend engineering',
      'cloud engineering',
      'AI product development'
    ],
    sameAs: [
      SITE_CONFIG?.socialLinks?.linkedin,
      SITE_CONFIG?.socialLinks?.github,
      SITE_CONFIG?.socialLinks?.twitter
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CypherEdge',
    url: BASE_URL,
    publisher: {
      '@type': 'Organization',
      name: 'CypherEdge Private Limited',
      logo: `${BASE_URL}/assets/logo_tagline.png`
    }
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
    name: 'CypherEdge Engineering Services',
    url: `${BASE_URL}/services`,
    image: `${BASE_URL}/assets/logo_tagline.png`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.businessOutcome || service.shortDesc
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
      name: item.label || item.name,
      item: item.path ? `${BASE_URL}${item.path}` : BASE_URL
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareApplicationJsonLd({ name, description, category, operatingSystem, url }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    applicationCategory: category || 'BusinessApplication',
    operatingSystem: operatingSystem || 'iOS, Android, Web',
    url: url || BASE_URL,
    publisher: {
      '@type': 'Organization',
      name: 'CypherEdge Private Limited'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
