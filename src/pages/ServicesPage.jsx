import React from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import EstimatorSection from '../components/sections/EstimatorSection';

export default function ServicesPage({ onNavigate }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '5rem' }}>
      <ServicesSection onNavigate={onNavigate} />
      <EstimatorSection onNavigate={onNavigate} />
    </div>
  );
}
