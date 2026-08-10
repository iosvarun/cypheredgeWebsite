import React from 'react';
import EstimatorSection from '../components/sections/EstimatorSection';

export default function EstimatorPage({ onNavigate }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '2rem' }}>
      <EstimatorSection onNavigate={onNavigate} />
    </div>
  );
}
