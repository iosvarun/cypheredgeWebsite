import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import { OrganizationJsonLd } from '../components/shared/JsonLd';
import { trackPageView } from '../utils/analytics';
import { captureUtmParams } from '../data/siteConfig';

// Pages
const HomePage = React.lazy(() => import('../pages/HomePage'));
const ServicesPage = React.lazy(() => import('../pages/ServicesPage'));
const ProductsPage = React.lazy(() => import('../pages/ProductsPage'));
const TechnologiesPage = React.lazy(() => import('../pages/TechnologiesPage'));
const CaseStudiesPage = React.lazy(() => import('../pages/CaseStudiesPage'));
const EstimatorPage = React.lazy(() => import('../pages/EstimatorPage'));
const CompanyPage = React.lazy(() => import('../pages/CompanyPage'));
const CareersPage = React.lazy(() => import('../pages/CareersPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));
const LegalDocsPage = React.lazy(() => import('../pages/LegalDocsPage'));

// New Pages
const ITStaffingPage = React.lazy(() => import('../pages/ITStaffingPage'));
const IndustryPage = React.lazy(() => import('../pages/IndustryPage'));
const ComparisonPage = React.lazy(() => import('../pages/ComparisonPage'));
const InsightsPage = React.lazy(() => import('../pages/InsightsPage'));
const LeadMagnetPage = React.lazy(() => import('../pages/LeadMagnetPage'));
const PaidLandingPage = React.lazy(() => import('../pages/PaidLandingPage'));

// Dynamic Pages
const ServiceDetailPage = React.lazy(() => import('../pages/ServiceDetailPage'));
const TechnologyDetailPage = React.lazy(() => import('../pages/TechnologyDetailPage'));
const CaseStudyDetailPage = React.lazy(() => import('../pages/CaseStudyDetailPage'));
const ProductDetailPage = React.lazy(() => import('../pages/ProductDetailPage'));
const BlogArticlePage = React.lazy(() => import('../pages/BlogArticlePage'));

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
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentRoute]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentRoute(hash);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Dynamic document title
      const baseHash = hash.replace('#', '').split('?')[0];
      const cleanHash = baseHash.split('/')[0];
      const newTitle = PAGE_TITLES[cleanHash] || PAGE_TITLES.home;
      document.title = newTitle;

      // Update meta tags
      const updateMetaTag = (name, content) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      };
      
      const updateCanonical = (url) => {
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
          link = document.createElement('link');
          link.rel = 'canonical';
          document.head.appendChild(link);
        }
        link.href = url;
      };

      updateMetaTag('description', newTitle); // Simple fallback description based on title
      updateCanonical(`https://www.cypheredge.in/${hash === '#home' ? '' : hash}`);

      // Track page view
      trackPageView(hash, document.title);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path) => {
    if (path === '/') {
      window.location.hash = '#home';
    } else if (path.startsWith('#')) {
      window.location.hash = path;
    } else {
      window.location.hash = `#${path.replace(/^\//, '')}`;
    }
  };

  const renderCurrentView = () => {
    const routePath = currentRoute.replace('#', '');
    const cleanHash = routePath.split('?')[0];

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

    // Service detail pages
    if (cleanHash.startsWith('services/')) {
      const slug = cleanHash.replace('services/', '');
      return <ServiceDetailPage serviceSlug={slug} onNavigate={navigateTo} />;
    }

    // Technology detail pages
    if (cleanHash.startsWith('technologies/')) {
      const slug = cleanHash.replace('technologies/', '');
      return <TechnologyDetailPage techSlug={slug} onNavigate={navigateTo} />;
    }

    // Case study detail pages
    if (cleanHash.startsWith('case-study/')) {
      const slug = cleanHash.replace('case-study/', '');
      return <CaseStudyDetailPage caseStudySlug={slug} onNavigate={navigateTo} />;
    }

    // Product pages (renders View All Products page and scrolls to the specific product)
    if (cleanHash.startsWith('product/')) {
      const slug = cleanHash.replace('product/', '');
      return <ProductsPage targetProductId={slug} onNavigate={navigateTo} />;
    }

    // Blog article pages
    if (cleanHash.startsWith('blog/')) {
      const slug = cleanHash.replace('blog/', '');
      return <BlogArticlePage articleSlug={slug} onNavigate={navigateTo} />;
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
        <Suspense fallback={<div className="page-loader">Loading...</div>}>
          {renderCurrentView()}
        </Suspense>
      </main>
      {!isPaidLanding && <Footer onNavigate={navigateTo} />}
      <WhatsAppButton />
    </div>
  );
}
