import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-wrapper container">
        <a href="#home" className="navbar-logo">
          <img src="/assets/logo_tagline.png" alt="CypherEdge - You think we build" className="navbar-logo-img" />
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-navbar btn-glow-sm">
            Request Service
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="navbar-toggle-mobile" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <div className={`navbar-drawer-mobile ${isOpen ? 'open' : ''}`}>
        <div className="drawer-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="drawer-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-drawer btn-glow-sm"
            onClick={() => setIsOpen(false)}
          >
            Request Service
          </a>
        </div>
      </div>
    </nav>
  );
}
