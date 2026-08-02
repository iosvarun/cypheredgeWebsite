import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

const FAQAccordion = ({ faqs, title = 'Frequently Asked Questions' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="faq-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {title && (
        <div className="section-header-center faq-header">
          <span className="badge-neon">FAQ</span>
          <h2 className="faq-title">{title}</h2>
        </div>
      )}

      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className={`faq-item glass-panel ${isOpen ? 'open' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`faq-icon ${isOpen ? 'rotated' : ''}`} 
                  size={20} 
                />
              </div>
              <div 
                className="faq-answer-wrapper"
                style={{ maxHeight: isOpen ? '500px' : '0px' }}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
