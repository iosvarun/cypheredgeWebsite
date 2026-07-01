import React from 'react';
import { ArrowLeft, Shield, FileText, Info } from 'lucide-react';
import './LegalDocs.css';

export default function LegalDocs({ path }) {
  // Back to home helper
  const handleBackToHome = () => {
    window.location.hash = '#home';
  };

  // Content rendering based on route path
  const renderDocContent = () => {
    switch (path) {
      case 'digitaldukaan/termscondition':
        return (
          <div className="doc-content">
            <div className="doc-meta">
              <span className="badge">Digital Dukaan</span>
              <span className="date">Effective Date: June 29, 2026</span>
            </div>
            <h2>Terms & Conditions</h2>
            <div className="doc-section">
              <h3>1. Use of the App</h3>
              <p>Digital Dukaan helps merchants manage products, inventory, customers, sales, and business records. You agree to use the app only for lawful purposes.</p>
            </div>
            <div className="doc-section">
              <h3>2. Account</h3>
              <p>Cloud Backup & Sync requires sign-in using your verified mobile number through Firebase Authentication. You are responsible for maintaining the security of your account.</p>
            </div>
            <div className="doc-section">
              <h3>3. Your Data</h3>
              <p>You own the business data you create. If Cloud Backup is enabled, your data is securely stored using Google Firebase services so it can be synchronized across your devices.</p>
            </div>
            <div className="doc-section">
              <h3>4. Security</h3>
              <p>We use reasonable security measures to protect your information, but no online service can guarantee complete security.</p>
            </div>
            <div className="doc-section">
              <h3>5. Availability</h3>
              <p>We may update, improve, or discontinue features at any time. We do not guarantee uninterrupted availability of the app.</p>
            </div>
            <div className="doc-section">
              <h3>6. Limitation of Liability</h3>
              <p>Digital Dukaan is provided "as is." We are not responsible for any loss of data, profits, or business resulting from the use of the application.</p>
            </div>
            <div className="doc-section">
              <h3>7. Changes</h3>
              <p>These Terms may be updated from time to time. Continued use of the app means you accept the revised Terms.</p>
            </div>
            <div className="doc-section">
              <h3>8. Contact</h3>
              <p>For any questions, please contact:</p>
              <p className="contact-email">Email: <a href="mailto:utilityapps@gmail.com">utilityapps@gmail.com</a></p>
            </div>
          </div>
        );

      case 'digitaldukaan/privacypolicy':
        return (
          <div className="doc-content">
            <div className="doc-meta">
              <span className="badge">Digital Dukaan</span>
              <span className="date">Effective Date: June 29, 2026</span>
            </div>
            <h2>Privacy Policy</h2>
            <p className="intro">At Digital Dukaan, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and how we keep it secure.</p>
            
            <div className="doc-section">
              <h3>Information We Collect</h3>
              <ul>
                <li>Mobile phone number (for secure login using Firebase Authentication)</li>
                <li>Shop information (shop name, business details, language preferences)</li>
                <li>Products, inventory, sales records, customer information, and transaction history entered by you</li>
                <li>Cloud backup data (if you enable Cloud Backup & Sync)</li>
                <li>Basic device information and crash reports to improve app performance</li>
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>How We Use Your Information</h3>
              <ul>
                <li>Verify your identity and secure your account</li>
                <li>Store and synchronize your business data</li>
                <li>Restore your data on a new device</li>
                <li>Improve app performance and security</li>
                <li>Provide customer support</li>
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>Data Security</h3>
              <p>Your data is securely stored using Google Firebase services. We use secure authentication and encrypted communication to protect your information. Only you can access your business data after signing in with your verified mobile number.</p>
            </div>
            
            <div className="doc-section">
              <h3>Data Sharing</h3>
              <p>We do not sell, rent, or share your personal information with advertisers or third parties for marketing purposes. Your information may be processed by trusted service providers such as Google Firebase solely to provide authentication, cloud storage, and related services.</p>
            </div>
            
            <div className="doc-section">
              <h3>Your Choices</h3>
              <ul>
                <li>Update your business information at any time</li>
                <li>Enable or disable Cloud Backup</li>
                <li>Sign out of your account</li>
                <li>Request deletion of your account and cloud data by contacting us</li>
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>Children's Privacy</h3>
              <p>Digital Dukaan is intended for business owners and is not designed for children under the age of 13.</p>
            </div>
            
            <div className="doc-section">
              <h3>Changes to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. Any changes will be published within the app or on this page.</p>
            </div>
            
            <div className="doc-section">
              <h3>Contact Us</h3>
              <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
              <p className="contact-email">Email: <a href="mailto:utilityapps@gmail.com">utilityapps@gmail.com</a></p>
            </div>
          </div>
        );

      case 'digitaldukaan/aboutus':
        return (
          <div className="doc-content">
            <div className="doc-meta">
              <span className="badge animate-pulse-glow">Digital Dukaan</span>
              <span className="date">Effective Date: June 29, 2026</span>
            </div>
            <h2>About Digital Dukaan</h2>
            <p className="intro">Digital Dukaan is a simple, secure, and easy-to-use business management application designed for shop owners, retailers, wholesalers, and small businesses. It helps you manage your business digitally, save time, reduce paperwork, and keep your business records organized.</p>
            
            <div className="doc-section">
              <h3>What You Can Do</h3>
              <ul>
                <li>Create and manage your shop profile</li>
                <li>Add and organize products</li>
                <li>Manage inventory efficiently</li>
                <li>Record and track daily sales</li>
                <li>Manage customer information</li>
                <li>Securely back up and restore your data using Cloud Backup & Sync</li>
                <li>Access your business anytime with secure mobile number login</li>
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>Why Choose Digital Dukaan</h3>
              <ul>
                <li>Simple and user-friendly interface</li>
                <li>Reduces manual paperwork</li>
                <li>Keeps business records secure and organized</li>
                <li>Access your data across devices</li>
                <li>Helps you focus on growing your business</li>
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>Our Vision</h3>
              <p>To empower every small business with simple, affordable, and reliable digital tools that make business management easier for everyone.</p>
            </div>
            
            <div className="doc-section">
              <h3>Perfect For</h3>
              <div className="perfect-grid">
                <span>Grocery & Kirana Stores</span>
                <span>Clothing & Fashion Shops</span>
                <span>Electronics & Mobile Stores</span>
                <span>Medical & Pharmacy Shops</span>
                <span>Restaurants & Cafés</span>
                <span>Service Providers</span>
                <span>Small & Medium Businesses</span>
              </div>
            </div>
            
            <div className="doc-section">
              <h3>Our Commitment</h3>
              <p>We are committed to providing a secure, reliable, and user-friendly platform while continuously improving Digital Dukaan with new features.</p>
            </div>
          </div>
        );

      case 'privacypolicy':
        return (
          <div className="doc-content">
            <div className="doc-meta">
              <span className="badge">CypherEdge</span>
              <span className="date">Effective Date: July 1, 2026</span>
            </div>
            <h2>Privacy Policy</h2>
            <p className="intro">CypherEdge Pvt. Ltd. ("Company," "we," "us," or "CypherEdge") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (www.cypheredge.in) and use our custom applications, services, or mobile apps.</p>
            
            <div className="doc-section">
              <h3>1. Information We Collect</h3>
              <p>We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, fill out the Request for Service form, or in connection with other activities, services, features, or resources we make available.</p>
              <ul>
                <li><strong>Contact Data:</strong> Name, business email address, phone number, and message descriptions.</li>
                <li><strong>Usage Data:</strong> Technical logs, browser types, IP addresses, and page navigation behaviors to enhance system performance.</li>
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>2. How We Use Collected Information</h3>
              <p>CypherEdge may collect and use user personal information for the following purposes:</p>
              <ul>
                <li>To improve customer service and respond to service requests.</li>
                <li>To customize the user experience and analyze client demands.</li>
                <li>To communicate project proposals, technical status, and service delivery parameters.</li>
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>3. Data Protection</h3>
              <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.</p>
            </div>
            
            <div className="doc-section">
              <h3>4. Sharing Personal Information</h3>
              <p>We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.</p>
            </div>
            
            <div className="doc-section">
              <h3>5. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
              <p className="contact-email">Email: <a href="mailto:utilityapps@gmail.com">utilityapps@gmail.com</a></p>
            </div>
          </div>
        );

      case 'termsandcondition':
        return (
          <div className="doc-content">
            <div className="doc-meta">
              <span className="badge">CypherEdge</span>
              <span className="date">Effective Date: July 1, 2026</span>
            </div>
            <h2>Terms & Conditions</h2>
            
            <div className="doc-section">
              <h3>1. Agreement to Terms</h3>
              <p>By accessing or using our services at CypherEdge Pvt. Ltd., you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, please do not use our services or website.</p>
            </div>
            
            <div className="doc-section">
              <h3>2. Service Scope</h3>
              <p>CypherEdge offers digital systems engineering, mobile app development (iOS & Android), custom cloud backend architecture, and AI workflow automation consulting. Details, fees, and delivery schedules are governed by separate project contracts signed with each client.</p>
            </div>
            
            <div className="doc-section">
              <h3>3. Intellectual Property Rights</h3>
              <p>Unless otherwise stated, all intellectual property in the custom software, applications, and source code engineered by CypherEdge remains our property until all invoices and project fees are paid in full by the client. Upon final payment, the relevant ownership and source code licenses transfer to the client as outlined in the service agreement.</p>
            </div>
            
            <div className="doc-section">
              <h3>4. Disclaimer & Limitation of Liability</h3>
              <p>Our consulting, website, and services are provided "as is" and "as available." CypherEdge Pvt. Ltd. makes no warranties, expressed or implied. In no event shall CypherEdge be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the custom software or services.</p>
            </div>
            
            <div className="doc-section">
              <h3>5. Changes to Terms</h3>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will indicate the date of the latest revisions at the top of this document.</p>
            </div>
            
            <div className="doc-section">
              <h3>6. Contact Us</h3>
              <p>For any questions or support regarding our Terms & Conditions, please reach out to us:</p>
              <p className="contact-email">Email: <a href="mailto:utilityapps@gmail.com">utilityapps@gmail.com</a></p>
            </div>
          </div>
        );

      default:
        return (
          <div className="doc-content doc-404">
            <h2>Document Not Found</h2>
            <p>The requested legal document or page could not be located on our systems.</p>
            <button className="btn-back" onClick={handleBackToHome}>
              <ArrowLeft size={16} />
              Return to Homepage
            </button>
          </div>
        );
    }
  };

  return (
    <div className="legal-doc-container">
      {/* Decorative Orbs */}
      <div className="ambient-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      <div className="grid-overlay"></div>

      {/* Header */}
      <header className="legal-doc-header">
        <div className="container header-wrap">
          <div className="back-link" onClick={handleBackToHome}>
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </div>
          <div className="brand-logo">
            <img src="/assets/logo_tagline.png" alt="CypherEdge Logo" className="header-logo-img" />
          </div>
        </div>
      </header>

      {/* Document Body Wrapper */}
      <main className="legal-doc-main container">
        <div className="legal-doc-card glass-panel">
          {renderDocContent()}
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="legal-doc-footer container">
        <p>&copy; {new Date().getFullYear()} CypherEdge Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}
