import React, { useEffect } from 'react';
import ProductsSection from '../components/sections/ProductsSection';

export default function ProductsPage({ onNavigate }) {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes('#product-')) {
      const productId = hash.split('#product-')[1];
      const el = document.getElementById(`product-${productId}`);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '5rem' }}>
      <ProductsSection onNavigate={onNavigate} />
    </div>
  );
}
