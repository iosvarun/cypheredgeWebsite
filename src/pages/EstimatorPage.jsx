import React from 'react';
import EstimatorSection from '../components/sections/EstimatorSection';

export default function EstimatorPage({ onNavigate }) {
  return (
    <div className="page-wrapper">
      <EstimatorSection onNavigate={onNavigate} />
    </div>
  );
}
