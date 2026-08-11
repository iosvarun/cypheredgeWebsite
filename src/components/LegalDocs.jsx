import React from 'react';
import { APP_DETAILS } from '../data/appDetails';
import './LegalDocs.css';

export default function LegalDocs({ path }) {
  // Split path to resolve app-specific documentation
  const pathParts = path.split('/');
  const isAppDoc = pathParts.length === 2;
  const appSlug = isAppDoc ? pathParts[0] : null;
  const docType = isAppDoc ? pathParts[1] : null;

  const appData = appSlug ? APP_DETAILS[appSlug] : null;

  // Content rendering based on route path
  const renderDocContent = () => {
    // If it's an app-specific doc and we have the details in the database
    if (appData) {
      if (docType === 'aboutus') {
        const about = appData.about;
        return (
          <div className="doc-content">
            <h2>About {appData.name}</h2>
            <p className="intro">{about.intro}</p>
            
            <div className="doc-section">
              <h3>What You Can Do</h3>
              <ul>
                {about.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>Why Choose {appData.name}</h3>
              <ul>
                {about.whyChoose.map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
            
            <div className="doc-section">
              <h3>Our Vision</h3>
              <p>{about.vision}</p>
            </div>
            
            <div className="doc-section">
              <h3>Perfect For</h3>
              <div className="perfect-grid">
                {about.perfectFor.map((p, i) => <span key={i}>{p}</span>)}
              </div>
            </div>
            
            <div className="doc-section">
              <h3>Our Commitment</h3>
              <p>{about.commitment}</p>
            </div>
          </div>
        );
      }

      if (docType === 'privacypolicy') {
        const privacy = appData.privacy;
        return (
          <div className="doc-content">
            <h2>Privacy Policy</h2>
            <p className="intro">{privacy.intro || `At ${appData.name}, we respect your privacy and are committed to protecting your personal information.`}</p>

            <div className="doc-section">
              <h3>1. Information We Collect</h3>
              <p>{appData.name} is designed with privacy in mind.</p>
              <ul>
                {privacy.collected.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>

            <div className="doc-section">
              <h3>2. How We Use Information</h3>
              <ul>
                {privacy.usage.map((u, i) => <li key={i}>{u}</li>)}
              </ul>
            </div>

            {privacy.subscriptionInfo && (
              <div className="doc-section">
                <h3>3. Subscription Information</h3>
                <p>{privacy.subscriptionInfo}</p>
              </div>
            )}

            {privacy.storage && (
              <div className="doc-section">
                <h3>4. Data Storage</h3>
                <p>{privacy.storage}</p>
              </div>
            )}

            <div className="doc-section">
              <h3>{privacy.subscriptionInfo ? '5' : '3'}. Data Security</h3>
              <p>{privacy.security}</p>
            </div>

            <div className="doc-section">
              <h3>{privacy.subscriptionInfo ? '6' : '4'}. Data Sharing</h3>
              <p>{privacy.sharing}</p>
            </div>

            <div className="doc-section">
              <h3>{privacy.subscriptionInfo ? '7' : '5'}. Your Choices</h3>
              <ul>
                {privacy.choices.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>

            <div className="doc-section">
              <h3>{privacy.subscriptionInfo ? '8' : '6'}. Children's Privacy</h3>
              <p>{privacy.children}</p>
            </div>

            {privacy.thirdParty && (
              <div className="doc-section">
                <h3>9. Third-Party Services</h3>
                <p>{privacy.thirdParty}</p>
              </div>
            )}

            <div className="doc-section">
              <h3>{privacy.subscriptionInfo ? '10' : '7'}. Changes to This Privacy Policy</h3>
              <p>We may update this Privacy Policy from time to time. Any changes will become effective when the updated policy is published within the application or on our website. Continued use of the application after changes are published constitutes acceptance of the revised Privacy Policy.</p>
            </div>

            <div className="doc-section">
              <h3>{privacy.subscriptionInfo ? '11' : '8'}. Contact Us</h3>
              <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
              <p className="contact-email">Email: <a href={`mailto:${appData.email}`}>{appData.email}</a></p>
            </div>
          </div>
        );
      }

      if (docType === 'termscondition') {
        const terms = appData.terms;
        const hasSubs = !!terms.subscriptions;
        return (
          <div className="doc-content">
            <h2>Terms &amp; Conditions</h2>

            <div className="doc-section">
              <h3>1. Use of the App</h3>
              <p>{terms.use}</p>
            </div>

            <div className="doc-section">
              <h3>2. Account</h3>
              <p>{terms.account}</p>
            </div>

            {hasSubs && (
              <div className="doc-section">
                <h3>3. Subscriptions</h3>
                <p>{terms.subscriptions.description}</p>
                <p style={{marginTop:'0.75rem', marginBottom:'0.5rem'}}>Premium subscriptions may include:</p>
                <ul>
                  {terms.subscriptions.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <p style={{marginTop:'0.75rem'}}>{terms.subscriptions.pricing}</p>
              </div>
            )}

            {terms.freeTrial && (
              <div className="doc-section">
                <h3>4. Free Trial</h3>
                <p>{terms.freeTrial}</p>
              </div>
            )}

            {terms.autoRenewal && (
              <div className="doc-section">
                <h3>5. Auto-Renewal</h3>
                <p>{terms.autoRenewal}</p>
              </div>
            )}

            {terms.payments && (
              <div className="doc-section">
                <h3>6. Payments &amp; Refunds</h3>
                <p>{terms.payments}</p>
              </div>
            )}

            <div className="doc-section">
              <h3>{hasSubs ? '7' : '3'}. Your Data</h3>
              <p>{terms.data}</p>
            </div>

            <div className="doc-section">
              <h3>{hasSubs ? '8' : '4'}. Security</h3>
              <p>{terms.security}</p>
            </div>

            <div className="doc-section">
              <h3>{hasSubs ? '9' : '5'}. Availability</h3>
              <p>{terms.availability}</p>
            </div>

            <div className="doc-section">
              <h3>{hasSubs ? '10' : '6'}. Limitation of Liability</h3>
              <p>{terms.liability}</p>
            </div>

            <div className="doc-section">
              <h3>{hasSubs ? '11' : '7'}. Changes to These Terms</h3>
              <p>{terms.changes || 'These Terms may be updated from time to time. Continued use of the app means you accept the revised Terms.'}</p>
            </div>

            <div className="doc-section">
              <h3>{hasSubs ? '12' : '8'}. Contact</h3>
              <p>If you have any questions regarding these Terms or your subscription, please contact us:</p>
              <p className="contact-email">Email: <a href={`mailto:${appData.email}`}>{appData.email}</a></p>
            </div>
          </div>
        );
      }
    }

    // Default to company level policies
    switch (path) {
      case 'privacypolicy':
        return (
          <div className="doc-content">
            <div className="doc-meta">
              <span className="badge">CypherEdge</span>
              <span className="date">Effective Date: July 1, 2026</span>
            </div>
            <h2>Privacy Policy</h2>
            <p className="intro">
              CypherEdge Private Limited ("Company," "we," "us," or "CypherEdge") is committed
              to protecting your privacy. This Privacy Policy describes how we collect, use,
              disclose, and safeguard your information when you visit our website
              (www.cypheredge.in) and use our services, mobile applications, or engage with us
              as a business client.
            </p>

            <div className="doc-section">
              <h3>1. Information We Collect</h3>
              <p>We may collect information from you in a variety of ways when you visit our site, submit a form, or use our services:</p>
              <ul>
                <li><strong>Contact Data:</strong> Name, business email address, phone number, company name, and project description when you submit a contact or inquiry form.</li>
                <li><strong>Usage Data:</strong> Technical information such as browser type, IP address, device type, referring URL, and page navigation patterns collected via analytics tools to improve our website and services.</li>
                <li><strong>Communication Data:</strong> Messages, attachments, or information you share with us during email, WhatsApp, or video consultations.</li>
                <li><strong>Cookies &amp; Tracking:</strong> We may use cookies and similar tracking technologies to improve your experience. You may disable cookies in your browser settings, though this may affect site functionality.</li>
              </ul>
            </div>

            <div className="doc-section">
              <h3>2. How We Use Collected Information</h3>
              <p>CypherEdge may use the information we collect for the following purposes:</p>
              <ul>
                <li>To respond to service requests, proposals, and project inquiries.</li>
                <li>To communicate project status, technical recommendations, and delivery updates.</li>
                <li>To improve our website and customise user experience based on usage patterns.</li>
                <li>To send periodic communications about services, case studies, or updates — only if you have opted in or contacted us directly. You may unsubscribe at any time.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            <div className="doc-section">
              <h3>3. Data Protection &amp; Security</h3>
              <p>
                We adopt appropriate technical and organisational security measures to protect your
                personal information against unauthorised access, alteration, disclosure, or
                destruction. All data transmission via our website uses industry-standard
                encryption (HTTPS/TLS).
              </p>
            </div>

            <div className="doc-section">
              <h3>4. Sharing Personal Information</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties.
                We may share information with trusted service providers who assist in operating
                our website or delivering our services (e.g., email delivery, analytics tools),
                subject to confidentiality obligations. We may also disclose information when
                required by law or to protect the rights and safety of CypherEdge or others.
              </p>
            </div>

            <div className="doc-section">
              <h3>5. Data Retention</h3>
              <p>
                We retain personal information only for as long as necessary to fulfil the
                purpose for which it was collected or as required by applicable laws and
                contractual obligations. Project-related data is retained as agreed in the
                individual service agreement with each client.
              </p>
            </div>

            <div className="doc-section">
              <h3>6. Your Rights</h3>
              <p>
                You have the right to access, correct, or request deletion of your personal
                information held by us. To exercise these rights, please contact us at the
                email address below. We will respond to your request within a reasonable
                timeframe.
              </p>
            </div>

            <div className="doc-section">
              <h3>7. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites or services. CypherEdge
                is not responsible for the privacy practices or content of those sites.
                We encourage you to review their privacy policies independently.
              </p>
            </div>

            <div className="doc-section">
              <h3>8. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will indicate the
                date of the latest revision at the top of this document. Continued use of our
                website after updates are published constitutes acceptance of the revised policy.
              </p>
            </div>

            <div className="doc-section">
              <h3>9. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy or your personal data, please contact us:</p>
              <p className="contact-email">
                Email: <a href="mailto:admin@cypheredge.in">admin@cypheredge.in</a>
              </p>
              <p>Website: <a href="https://www.cypheredge.in" target="_blank" rel="noopener noreferrer">www.cypheredge.in</a></p>
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
            <h2>Terms &amp; Conditions</h2>
            <p className="intro">
              Please read these Terms &amp; Conditions carefully before accessing or using any
              services provided by CypherEdge Private Limited ("Company," "CypherEdge," "we,"
              "us"). By accessing our website at www.cypheredge.in or engaging our services,
              you agree to be bound by these Terms. If you do not agree, please do not use
              our website or services.
            </p>

            <div className="doc-section">
              <h3>1. Services</h3>
              <p>
                CypherEdge provides technology product engineering services including, but not
                limited to: AI systems development, mobile application engineering (iOS &amp;
                Android), web platform and SaaS development, backend and cloud infrastructure,
                and dedicated engineering team staffing. Details, fees, scope, and delivery
                schedules for specific engagements are governed by separate project agreements
                or contracts signed with each client.
              </p>
            </div>

            <div className="doc-section">
              <h3>2. Use of Website</h3>
              <p>
                You may use our website for lawful purposes only. You must not use it in any
                way that breaches applicable local, national, or international laws, causes
                harm or disruption to CypherEdge or third parties, or transmits unsolicited
                commercial communications.
              </p>
            </div>

            <div className="doc-section">
              <h3>3. Intellectual Property</h3>
              <p>
                All content on this website — including text, graphics, logos, and code — is
                the property of CypherEdge Private Limited and protected by applicable
                intellectual property laws. You may not reproduce, distribute, or create
                derivative works without our express written permission.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                For client projects: all intellectual property in custom software, applications,
                and source code engineered by CypherEdge remains our property until all project
                fees are paid in full. Upon final payment, full ownership and source code licences
                transfer to the client as outlined in the individual service agreement.
              </p>
            </div>

            <div className="doc-section">
              <h3>4. Confidentiality</h3>
              <p>
                CypherEdge treats all client project details, technical specifications, and
                business information as confidential. We are willing to sign Non-Disclosure
                Agreements (NDAs) prior to any project discussion. Specific confidentiality
                obligations are governed by the project agreement with each client.
              </p>
            </div>

            <div className="doc-section">
              <h3>5. Disclaimer &amp; Limitation of Liability</h3>
              <p>
                Our website and publicly available content are provided "as is" without
                warranties of any kind, expressed or implied. CypherEdge Private Limited makes
                no representations regarding accuracy, completeness, or fitness for a particular
                purpose. To the fullest extent permitted by law, CypherEdge shall not be liable
                for any indirect, incidental, or consequential damages arising from the use of
                our website or services.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Liability for specific service engagements is governed by the individual
                project contract or service agreement with each client.
              </p>
            </div>

            <div className="doc-section">
              <h3>6. Governing Law &amp; Jurisdiction</h3>
              <p>
                These Terms &amp; Conditions are governed by and construed in accordance with
                the laws of India. Any disputes arising from these Terms or our services shall
                be subject to the exclusive jurisdiction of the courts of India.
              </p>
            </div>

            <div className="doc-section">
              <h3>7. Changes to These Terms</h3>
              <p>
                We reserve the right to modify these Terms at any time. We will indicate the
                date of the latest revisions at the top of this document. Your continued use
                of our website or services after changes are published constitutes acceptance
                of the revised Terms.
              </p>
            </div>

            <div className="doc-section">
              <h3>8. Contact Us</h3>
              <p>For questions or concerns regarding these Terms &amp; Conditions, please contact us:</p>
              <p className="contact-email">
                Email: <a href="mailto:admin@cypheredge.in">admin@cypheredge.in</a>
              </p>
              <p>Website: <a href="https://www.cypheredge.in" target="_blank" rel="noopener noreferrer">www.cypheredge.in</a></p>
            </div>
          </div>
        );

      default:
        return (
          <div className="doc-content doc-404">
            <h2>Document Not Found</h2>
            <p>The requested legal document or page could not be located on our systems.</p>
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
