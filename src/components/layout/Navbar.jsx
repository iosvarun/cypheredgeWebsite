import React, { useState, useEffect } from 'react';
import {
  Bot, Smartphone, Server, Layers, ShieldCheck, Cpu, Code2, Users,
  ArrowRight, Sparkles, ChevronDown, Menu, X, MessageSquare,
  ExternalLink, Phone
} from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/appsData';
import { SERVICES_DATA } from '../../data/servicesData';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/siteConfig';
import { trackCTA, TRACK_EVENTS } from '../../utils/analytics';
import './Navbar.css';

export default function Navbar({ currentPath = '/', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (mobileDrawerOpen && window.scrollY > 40) {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileDrawerOpen]);

  // Lock body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [mobileDrawerOpen]);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileDrawerOpen]);

  const handleLinkClick = (path) => {
    setActiveMenu(null);
    setMobileDrawerOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const whatsappUrl = getWhatsAppUrl();

  const getServiceIcon = (id) => {
    const props = { size: 18 };
    switch (id) {
      case 'ai-agents-llm': return <Bot {...props} />;
      case 'custom-software-development': return <Code2 {...props} />;
      case 'saas-product-engineering': return <Layers {...props} />;
      case 'mobile-app-engineering': return <Smartphone {...props} />;
      case 'enterprise-backend-cloud': return <Server {...props} />;
      case 'it-staffing-dedicated-teams': return <Users {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  const isRouteActive = (targetPath) => {
    if (!currentPath) return false;
    const cleanTarget = targetPath.replace('/', '').replace('#', '');
    const cleanCurrent = currentPath.replace('/', '').replace('#', '').split('?')[0].split('/')[0];
    if (cleanTarget === '' && (cleanCurrent === '' || cleanCurrent === 'home')) return true;
    return cleanCurrent === cleanTarget;
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => handleLinkClick('/')} role="button" tabIndex={0} aria-label="CypherEdge Home">
          <img src="/assets/logo_tagline.png" alt="CypherEdge - Technology Partner" className="nav-logo-img" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {/* Services Dropdown */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`nav-link ${currentPath.startsWith('/services') ? 'active' : ''}`}>
              <span>Services</span>
              <ChevronDown size={14} className={`chevron-icon ${activeMenu === 'services' ? 'open' : ''}`} />
            </button>

            {activeMenu === 'services' && (
              <div className="mega-menu-dropdown glass-mega-panel animate-fade-down">
                <div className="mega-menu-grid">
                  <div className="mega-menu-col main-services">
                    <div className="col-header">
                      <span className="col-subtitle">WHAT WE DO</span>
                      <h4>Engineering & Staffing Services</h4>
                    </div>
                    <div className="services-list-items">
                      {SERVICES_DATA.map((srv) => (
                        <div
                          key={srv.id}
                          className="mega-service-card"
                          onClick={() => {
                            if (srv.id === 'it-staffing-dedicated-teams') {
                              handleLinkClick('/it-staffing');
                            } else if (srv.id === 'ai-agents-llm') {
                              handleLinkClick('/services/ai-agents');
                            } else if (srv.id === 'custom-software-development') {
                              handleLinkClick('/services/enterprise-software');
                            } else if (srv.id === 'saas-product-engineering') {
                              handleLinkClick('/services/web-development');
                            } else if (srv.id === 'mobile-app-engineering') {
                              handleLinkClick('/services/mobile-app-development');
                            } else if (srv.id === 'enterprise-backend-cloud') {
                              handleLinkClick('/services/cloud-devops');
                            } else {
                              handleLinkClick('/services');
                            }
                          }}
                        >
                          <div className="service-card-icon" style={{ color: srv.color }}>
                            {getServiceIcon(srv.id)}
                          </div>
                          <div className="service-card-info">
                            <span className="service-title">{srv.title}</span>
                            <span className="service-desc">{srv.businessOutcome}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mega-menu-col featured-highlight">
                    <div className="featured-box-card">
                      <span className="badge-neon mb-2"><Users size={12} /> Staffing</span>
                      <h5>Dedicated Engineering Teams</h5>
                      <p>Hire individual developers or full engineering pods. Fast onboarding, flexible engagement, senior talent.</p>
                      <button className="btn-inline-link" onClick={() => handleLinkClick('/it-staffing')}>
                        Learn About IT Staffing <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* IT Staffing - First-class nav item */}
          <button
            className={`nav-link ${currentPath === '/it-staffing' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/it-staffing')}
          >
            <span>IT Staffing</span>
          </button>

          {/* Case Studies */}
          <button
            className={`nav-link ${currentPath === '/case-studies' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/case-studies')}
          >
            <span>Case Studies</span>
          </button>

          {/* Products Dropdown */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => setActiveMenu('products')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`nav-link ${currentPath.startsWith('/products') ? 'active' : ''}`}>
              <span>Products</span>
              <ChevronDown size={14} className={`chevron-icon ${activeMenu === 'products' ? 'open' : ''}`} />
            </button>

            {activeMenu === 'products' && (
              <div className="mega-menu-dropdown glass-mega-panel products-mega animate-fade-down">
                <div className="products-mega-header">
                  <div>
                    <span className="col-subtitle">PROPRIETARY PRODUCTS</span>
                    <h4>Our Portfolio of Live Applications</h4>
                  </div>
                  <button className="btn-secondary-sm" onClick={() => handleLinkClick('/products')}>
                    View All Products ({PRODUCTS_DATA.length}) <ArrowRight size={14} />
                  </button>
                </div>
                <div className="products-mega-grid">
                  {PRODUCTS_DATA.slice(0, 6).map((app) => (
                    <div
                      key={app.id}
                      className="mega-product-card"
                      onClick={() => handleLinkClick(`/product/${app.id}`)}
                    >
                      <img src={app.iconPath || app.image} alt={app.name} className="mega-app-icon" />
                      <div className="mega-product-meta">
                        <span className="mega-product-name">{app.name}</span>
                        <span className="mega-product-badge">{app.badge || app.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Blog / Insights */}
          <button
            className={`nav-link ${currentPath === '/insights' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/insights')}
          >
            <span>Blog Articles</span>
          </button>

          {/* Technologies */}
          <button
            className={`nav-link ${currentPath === '/technologies' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/technologies')}
          >
            <span>Technologies</span>
          </button>

          {/* Company */}
          <button
            className={`nav-link ${currentPath === '/company' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/company')}
          >
            <span>Company</span>
          </button>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-whatsapp-btn"
              aria-label="Chat on WhatsApp"
              onClick={() => trackCTA(TRACK_EVENTS.CTA_WHATSAPP, 'navbar')}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          )}

          <button
            className="btn-nav-cta"
            onClick={() => {
              trackCTA(TRACK_EVENTS.CTA_BOOK_DISCOVERY, 'navbar');
              handleLinkClick('/contact');
            }}
          >
            <Phone size={14} />
            <span>Book a Discovery Call</span>
          </button>

          <button
            className="mobile-drawer-toggle"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            aria-label={mobileDrawerOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileDrawerOpen && (
        <div className="mobile-drawer-overlay animate-fade-in" role="dialog" aria-label="Navigation menu">
          <div className="mobile-drawer-top-bar">
            <span className="mobile-drawer-title">Navigation</span>
            <button className="mobile-close-btn" onClick={() => setMobileDrawerOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <div className="mobile-drawer-content">
            <div className="mobile-nav-grid">
              <button className={`mobile-grid-card ${isRouteActive('/') ? 'highlight-card' : ''}`} onClick={() => handleLinkClick('/')}>
                <Sparkles size={18} className="icon-cyan" />
                <span>Home</span>
              </button>
              <button className={`mobile-grid-card ${isRouteActive('/services') ? 'highlight-card' : ''}`} onClick={() => handleLinkClick('/services')}>
                <Layers size={18} className="icon-cyan" />
                <span>Services</span>
              </button>
              <button className={`mobile-grid-card ${isRouteActive('/it-staffing') ? 'highlight-card' : ''}`} onClick={() => handleLinkClick('/it-staffing')}>
                <Users size={18} className="icon-cyan" />
                <span>IT Staffing</span>
              </button>
              <button className={`mobile-grid-card ${isRouteActive('/products') ? 'highlight-card' : ''}`} onClick={() => handleLinkClick('/products')}>
                <Smartphone size={18} className="icon-cyan" />
                <span>Products</span>
              </button>
              <button className={`mobile-grid-card ${isRouteActive('/case-studies') ? 'highlight-card' : ''}`} onClick={() => handleLinkClick('/case-studies')}>
                <ShieldCheck size={18} className="icon-cyan" />
                <span>Case Studies</span>
              </button>
              <button className={`mobile-grid-card ${isRouteActive('/insights') ? 'highlight-card' : ''}`} onClick={() => handleLinkClick('/insights')}>
                <Code2 size={18} className="icon-cyan" />
                <span>Blog Articles</span>
              </button>
              <button className={`mobile-grid-card ${isRouteActive('/technologies') ? 'highlight-card' : ''}`} onClick={() => handleLinkClick('/technologies')}>
                <Cpu size={18} className="icon-cyan" />
                <span>Technologies</span>
              </button>
              <button className={`mobile-grid-card ${isRouteActive('/company') ? 'highlight-card' : ''}`} onClick={() => handleLinkClick('/company')}>
                <Server size={18} className="icon-cyan" />
                <span>Company</span>
              </button>
            </div>

            <div className="mobile-drawer-footer">
              <button className="btn-glow w-full" onClick={() => handleLinkClick('/contact')}>
                <Phone size={16} /> Book a Discovery Call <ArrowRight size={16} />
              </button>
              {whatsappUrl && (
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-whatsapp-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
