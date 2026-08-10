import React, { useEffect } from 'react';
import ProductsSection from '../components/sections/ProductsSection';

export default function ProductsPage({ targetProductId, onNavigate }) {
  useEffect(() => {
    let idToFind = targetProductId;
    if (!idToFind) {
      const hash = window.location.hash;
      if (hash && hash.includes('product-')) {
        idToFind = hash.split('product-')[1];
      } else if (hash && hash.startsWith('#product/')) {
        idToFind = hash.replace('#product/', '');
      }
    }

    if (idToFind) {
      const scrollToEl = () => {
        const el = document.getElementById(`product-${idToFind}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('highlight-product-card');
          setTimeout(() => {
            el.classList.remove('highlight-product-card');
          }, 3000);
        }
      };

      setTimeout(scrollToEl, 250);
    }
  }, [targetProductId]);

  return (
    <div className="page-wrapper" style={{ paddingTop: '2.5rem' }}>
      <ProductsSection onNavigate={onNavigate} />
    </div>
  );
}
