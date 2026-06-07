import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
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
