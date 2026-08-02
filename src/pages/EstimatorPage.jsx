import React from 'react';
import EstimatorSection from '../components/sections/EstimatorSection';

export default function EstimatorPage({ onNavigate }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '5rem' }}>
      <EstimatorSection onNavigate={onNavigate} />
    </div>
  );
}
