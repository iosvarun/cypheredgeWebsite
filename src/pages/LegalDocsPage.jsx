import React, { useEffect } from 'react';
import LegalDocs from '../components/LegalDocs';

export default function LegalDocsPage({ path = 'privacypolicy' }) {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;

    // Update page title
    if (path === 'privacypolicy') {
      document.title = 'Privacy Policy — CypherEdge';
    } else if (path.includes('termsandcondition') || path.includes('terms')) {
      document.title = 'Terms & Conditions — CypherEdge';
    }
  }, [path]);

  return (
    <div className="page-wrapper">
      <LegalDocs path={path} />
    </div>
  );
}
