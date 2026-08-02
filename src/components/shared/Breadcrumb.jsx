import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = ({ items, onNavigate }) => {
  if (!items || items.length === 0) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://cypheredge.com${item.path}`
    }))
  };

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="breadcrumb-item">
              {isLast ? (
                <span className="breadcrumb-text-current">{item.label}</span>
              ) : (
                <a
                  href={`#${item.path}`}
                  className="breadcrumb-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate(item.path);
                  }}
                >
                  {item.label}
                </a>
              )}
              {!isLast && <ChevronRight className="breadcrumb-separator" size={12} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
