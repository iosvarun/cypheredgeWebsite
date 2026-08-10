import React from 'react';
import LegalDocs from '../components/LegalDocs';

export default function LegalDocsPage({ path = 'privacypolicy' }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '2.5rem' }}>
      <LegalDocs path={path} />
    </div>
  );
}
