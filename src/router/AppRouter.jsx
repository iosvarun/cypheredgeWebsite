import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import { OrganizationJsonLd } from '../components/shared/JsonLd';
import { trackPageView } from '../utils/analytics';
import { captureUtmParams } from '../data/siteConfig';

// Pages
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ProductsPage from '../pages/ProductsPage';
import TechnologiesPage from '../pages/TechnologiesPage';
import CaseStudiesPage from '../pages/CaseStudiesPage';
import EstimatorPage from '../pages/EstimatorPage';
import CompanyPage from '../pages/CompanyPage';
import CareersPage from '../pages/CareersPage';
import ContactPage from '../pages/ContactPage';
import LegalDocsPage from '../pages/LegalDocsPage';

// New Pages
import ITStaffingPage from '../pages/ITStaffingPage';
import IndustryPage from '../pages/IndustryPage';
import ComparisonPage from '../pages/ComparisonPage';
import InsightsPage from '../pages/InsightsPage';
import LeadMagnetPage from '../pages/LeadMagnetPage';
import PaidLandingPage from '../pages/PaidLandingPage';

// Page title map for SEO
const PAGE_TITLES = {
  home: 'CypherEdge — AI Products, Custom Software & Dedicated Engineering Teams',
  services: 'Engineering Services | AI, SaaS, Mobile, Cloud & Staffing | CypherEdge',
  'it-staffing': 'IT Staffing & Dedicated Development Teams | CypherEdge',
  products: 'Products We Build & Operate | CypherEdge',
  technologies: 'Technology Stack & Architecture Matrix | CypherEdge',
  'case-studies': 'Case Studies & Engineering Results | CypherEdge',
  estimator: 'Project Cost Estimator | CypherEdge',
  company: 'About CypherEdge — Technology Product Company & Engineering Partner',
  careers: 'Careers at CypherEdge',
  contact: 'Book a Discovery Call | CypherEdge',
  insights: 'Insights & Engineering Resources | CypherEdge',
  'ai-readiness': 'Free AI Readiness Assessment | CypherEdge',
};

export default function AppRouter() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#home');

  // Capture UTMs on first load
  useEffect(() => {
    captureUtmParams();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentRoute(hash);
      window.scrollTo(0, 0);

      // Dynamic document title
      const cleanHash = hash.replace('#', '').split('/')[0];
      document.title = PAGE_TITLES[cleanHash] || PAGE_TITLES.home;

      // Track page view
      trackPageView(hash, document.title);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path) => {
    const targetHash = path === '/' ? '#home' : `#${path.replace('/', '').replace('#', '')}`;
    window.location.hash = targetHash;
  };

  const renderCurrentView = () => {
    const cleanHash = currentRoute.replace('#', '');

    // Existing pages
    if (cleanHash === 'services') return <ServicesPage onNavigate={navigateTo} />;
    if (cleanHash === 'products') return <ProductsPage onNavigate={navigateTo} />;
    if (cleanHash === 'technologies') return <TechnologiesPage />;
    if (cleanHash === 'case-studies') return <CaseStudiesPage onNavigate={navigateTo} />;
    if (cleanHash === 'estimator') return <EstimatorPage onNavigate={navigateTo} />;
    if (cleanHash === 'company') return <CompanyPage onNavigate={navigateTo} />;
    if (cleanHash === 'careers') return <CareersPage onNavigate={navigateTo} />;
    if (cleanHash === 'contact') return <ContactPage onNavigate={navigateTo} />;

    // New pages
    if (cleanHash === 'it-staffing') return <ITStaffingPage onNavigate={navigateTo} />;
    if (cleanHash === 'insights') return <InsightsPage onNavigate={navigateTo} />;
    if (cleanHash === 'ai-readiness') return <LeadMagnetPage onNavigate={navigateTo} />;

    // Industry pages: industry/fintech, industry/healthcare, etc.
    if (cleanHash.startsWith('industry/')) {
      const slug = cleanHash.replace('industry/', '');
      return <IndustryPage industrySlug={slug} onNavigate={navigateTo} />;
    }

    // Comparison pages: compare/in-house-vs-dedicated-team, etc.
    if (cleanHash.startsWith('compare/')) {
      const slug = cleanHash.replace('compare/', '');
      return <ComparisonPage comparisonSlug={slug} onNavigate={navigateTo} />;
    }

    // Paid landing pages: landing/hire-ai-developers, etc.
    if (cleanHash.startsWith('landing/')) {
      const variant = cleanHash.replace('landing/', '');
      return <PaidLandingPage variant={variant} onNavigate={navigateTo} />;
    }

    // Legal docs
    if (cleanHash.includes('privacypolicy') || cleanHash.includes('terms') || cleanHash.includes('aboutus')) {
      return <LegalDocsPage path={cleanHash} />;
    }

    // Default to Home
    return <HomePage onNavigate={navigateTo} />;
  };

  // Determine if current route is a paid landing page (stripped nav)
  const isPaidLanding = currentRoute.replace('#', '').startsWith('landing/');

  return (
    <div className="cypheredge-app-container">
      <OrganizationJsonLd />
      {!isPaidLanding && <Navbar currentPath={currentRoute.replace('#', '/')} onNavigate={navigateTo} />}
      <main className="main-content-area">
        {renderCurrentView()}
      </main>
      {!isPaidLanding && <Footer onNavigate={navigateTo} />}
      <WhatsAppButton />
    </div>
  );
}
