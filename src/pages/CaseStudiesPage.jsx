import React from 'react';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';

export default function CaseStudiesPage({ onNavigate }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '2.5rem' }}>
      <CaseStudiesSection onNavigate={onNavigate} />
    </div>
  );
}
