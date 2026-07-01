import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalDocs from './components/LegalDocs';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Normalize hash (remove starting '#' and optional '/')
  const path = currentHash.replace(/^#\/?/, '');

  // Define valid legal document routes
  const validDocRoutes = [
    'digitaldukaan/aboutus',
    'digitaldukaan/privacypolicy',
    'digitaldukaan/termscondition',
    'privacypolicy',
    'termsandcondition'
  ];

  const isDocPage = validDocRoutes.includes(path);

  if (isDocPage) {
    return <LegalDocs path={path} />;
  }

  return (
    <>

      {/* Global Ambient Background Orbs */}
      <div className="ambient-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="grid-overlay"></div>

      {/* Page Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
