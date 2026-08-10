import React from 'react';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';

export default function CaseStudiesPage({ onNavigate }) {
  return (
    <div className="page-wrapper">
      <CaseStudiesSection onNavigate={onNavigate} />
    </div>
  );
}
