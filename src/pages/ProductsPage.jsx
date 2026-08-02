import React from 'react';
import ProductsSection from '../components/sections/ProductsSection';

export default function ProductsPage({ onNavigate }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '5rem' }}>
      <ProductsSection onNavigate={onNavigate} />
    </div>
  );
}
