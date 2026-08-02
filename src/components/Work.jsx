import React, { useState } from 'react';
import { Download, ExternalLink, MessageSquare, Scale, Dumbbell, ArrowDownCircle, Gamepad2, FileText, Lock, ShoppingBag } from 'lucide-react';
import './Work.css';

const APPS = [
  {
    name: "WA Direct Message",
    category: "Utility & Social",
    iconPath: "/assets/ic_directMessage.png",
    urlString: "https://apps.apple.com/us/app/direct-message-for-whatsapp/id1557291502",
    urlStringAndroid: "https://play.google.com/store/apps/details?id=com.directChat.app",
    fallbackTint: "#1FB14A",
    fallbackSymbol: MessageSquare,
    description: "Send direct messages on WhatsApp without saving contact numbers to your address book. Protect your privacy and send messages instantly.",
    badge: "Social Utility",
    aboutUrl: "#wadirectmessage/aboutus",
    privacyUrl: "#wadirectmessage/privacypolicy",
    termsUrl: "#wadirectmessage/termscondition"
  },
  {
    name: "WhatsBackup",
    category: "Utility & Social",
    iconPath: "/assets/media__1780778288921.png", // Green WhatsApp speech bubble cloud backup icon
    urlString: "https://apps.apple.com/us/app/whatsbackup/id6768908196",
    fallbackTint: "#1FB14A",
    fallbackSymbol: Lock,
    description: "Securely backup and manage your chats and media. Never lose important conversations with streamlined backup automation.",
    badge: "Security Utility",
    aboutUrl: "#whatsbackup/aboutus",
    privacyUrl: "#whatsbackup/privacypolicy",
    termsUrl: "#whatsbackup/termscondition"
  },
  {
    name: "Digital Dukaan",
    category: "Utility & Social",
    iconPath: "/assets/ic_digitalDukaan.png",
    urlString: "https://apps.apple.com/us/app/digital-dukaan-pos/id6782678932",
    urlStringAndroid: "https://play.google.com/store/apps/details?id=com.digitaldukaan.android.app",
    fallbackTint: "#3B82F6",
    fallbackSymbol: ShoppingBag,
    description: "A simple, secure, and intuitive business management application designed for shop owners, retailers, and wholesalers to manage inventory, track daily sales, and sync records with cloud backup.",
    badge: "Business Utility",
    aboutUrl: "#digitaldukaan/aboutus",
    privacyUrl: "#digitaldukaan/privacypolicy",
    termsUrl: "#digitaldukaan/termscondition"
  },
  {
    name: "ShrinkLab",
    category: "Media & Tools",
    iconPath: "/assets/media__1780778288868.png", // Media compressor icon
    urlString: "https://apps.apple.com/us/app/shrinklab-media-compressor/id6757521417",
    fallbackTint: "#8B5CF6",
    fallbackSymbol: ArrowDownCircle,
    description: "Advanced media compressor tool that reduces photo and video file sizes up to 90% without sacrificing image resolution or quality.",
    badge: "Media Utility",
    aboutUrl: "#shrinklab/aboutus",
    privacyUrl: "#shrinklab/privacypolicy",
    termsUrl: "#shrinklab/termscondition"
  },
  {
    name: "Truth or Dare",
    category: "Lifestyle & Games",
    iconPath: "/assets/media__1780778288892.png", // Truth or Dare icon
    urlString: "https://apps.apple.com/us/app/truth-or-dare-spin-sin/id6758266545",
    fallbackTint: "#EF4444",
    fallbackSymbol: Gamepad2,
    description: "A fun and interactive party game featuring multiple modes (Classic, Teen, Dirty) with seamless spinning mechanics and modern UI.",
    badge: "Casual Game",
    aboutUrl: "#truthordare/aboutus",
    privacyUrl: "#truthordare/privacypolicy",
    termsUrl: "#truthordare/termscondition"
  },
  {
    name: "Gym Workout",
    category: "Health & Lifestyle",
    iconPath: "/assets/media__1780777474338.png", // Gym workout dumbbell and apple icon
    urlString: "https://apps.apple.com/us/app/gym-workout-fitness-club-lab/id6757446446",
    fallbackTint: "#16A34A",
    fallbackSymbol: Dumbbell,
    description: "Your comprehensive fitness club coach. Track workouts, count sets, plan custom routines, and maintain nutrition logs.",
    badge: "Fitness Coach",
    aboutUrl: "#gymworkout/aboutus",
    privacyUrl: "#gymworkout/privacypolicy",
    termsUrl: "#gymworkout/termscondition"
  },
  {
    name: "PDF Pulse",
    category: "Media & Tools",
    iconPath: "/assets/media__1780777474357.png", // PDF Pulse icon
    urlString: "https://apps.apple.com/us/app/pdf-pulse-pdf-tools-scanner/id6758585117",
    fallbackTint: "#F97316",
    fallbackSymbol: FileText,
    description: "A pocket PDF toolkit and document scanner. Merge, split, sign, lock, unlock, and convert files on the go with secure local processing.",
    badge: "Office Tool",
    aboutUrl: "#pdfpulse/aboutus",
    privacyUrl: "#pdfpulse/privacypolicy",
    termsUrl: "#pdfpulse/termscondition"
  },
  {
    name: "Nyayaconnect",
    category: "Legal & Enterprise",
    iconPath: "/assets/media__1780777474356.png", // Gavel icon
    urlString: "https://apps.apple.com/us/app/nyayaconnect/id6752890135",
    fallbackTint: "#3B82F6",
    fallbackSymbol: Scale,
    description: "Empowering citizens with legal access, simplified documentation templates, legal consultation tools, and judicial resources in India.",
    badge: "Civic Tech",
    aboutUrl: "#nyayaconnect/aboutus",
    privacyUrl: "#nyayaconnect/privacypolicy",
    termsUrl: "#nyayaconnect/termscondition"
  },
  {
    name: "Aurikaa Jewels",
    category: "Web & E-Commerce",
    iconPath: "/assets/aurikaa_logo.png",
    urlString: "https://www.aurikaa.co.in/",
    fallbackTint: "#D97706", // Amber gold
    fallbackSymbol: ShoppingBag,
    description: "A premium B2C e-commerce platform for luxury imitation and American Diamond jewelry, complete with secure payment gateways, cart flows, and real-time inventory management.",
    badge: "E-Commerce",
    isWeb: true,
    aboutUrl: "#aurikaajewels/aboutus",
    privacyUrl: "#aurikaajewels/privacypolicy",
    termsUrl: "#aurikaajewels/termscondition"
  }
];

const CATEGORIES = ["All Products", "Utility & Social", "Health & Lifestyle", "Legal & Enterprise", "Media & Tools", "Web & E-Commerce", "Lifestyle & Games"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredApps = activeCategory === "All Products"
     ? APPS
     : APPS.filter(app => app.category === activeCategory);

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Portfolio</span>
          <h2>Products That <span className="text-gradient-neon">Define Excellence</span></h2>
          <p>We build, own, and operate a series of popular mobile applications, bringing direct consumer experience to client projects.</p>
        </div>

        {/* Filter categories */}
        <div className="filter-tabs">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="apps-grid">
          {filteredApps.map((app, index) => {
            const FallbackIcon = app.fallbackSymbol;
            return (
              <div key={index} className="glass-card app-card">
                <div className="app-card-header">
                  {app.iconPath ? (
                    <img 
                      src={app.iconPath} 
                      alt={`${app.name} icon`} 
                      className={`app-icon-img ${app.isWeb ? 'web-logo' : ''}`}
                    />
                  ) : (
                    <div 
                      className="app-icon-fallback" 
                      style={{ 
                        background: `linear-gradient(135deg, ${app.fallbackTint}20 0%, ${app.fallbackTint}40 100%)`,
                        borderColor: `${app.fallbackTint}60`,
                        color: app.fallbackTint
                      }}
                    >
                      <FallbackIcon size={32} />
                    </div>
                  )}
                  <div className="app-badge-wrap">
                    <span className="app-category-badge">{app.badge}</span>
                  </div>
                </div>

                <div className="app-card-body">
                  <h3 className="app-title">{app.name}</h3>
                  <p className="app-desc">{app.description}</p>
                </div>

                <div className="app-card-footer">
                  {app.urlStringAndroid ? (
                    <div className="app-store-btns">
                      <a 
                        href={app.urlString} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="app-store-btn half-btn"
                        style={{ 
                          background: `linear-gradient(90deg, ${app.fallbackTint || '#3B82F6'} 0%, #1e1b4b 120%)`,
                          border: 'none',
                          textDecoration: 'none',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '102% 102%',
                          backgroundPosition: 'center',
                          outline: 'none'
                        }}
                      >
                        <svg viewBox="0 0 384 512" width="14" height="14" fill="currentColor">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48-19.1-77.5-19.1-38.3 0-77 21.8-96.7 56.5-39.7 69.6-10.2 172.7 28.1 228.3 18.7 27 41.5 57.3 70.8 56.2 28.5-1.1 39.5-18.3 73.9-18.3 34.4 0 44.5 18.3 73.9 17.7 29.4-1.1 49.3-27.7 67.9-54.6 21.4-31.2 30.1-61.5 30.5-63-1.1-.5-59.1-22.9-59.3-91.4zm-48.4-147.8c30.8-37.3 26.7-76.8 26.3-79-3.1.2-40.6 2-71.5 37.9-25.3 29.3-22.7 68.6-22.2 70.6 3.6-.3 39-2.3 67.4-29.5z"/>
                        </svg>
                        <span>iOS</span>
                      </a>
                      <a 
                        href={app.urlStringAndroid} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="app-store-btn half-btn"
                        style={{ 
                          background: `linear-gradient(90deg, #10B981 0%, #1e1b4b 120%)`, // Play Store Green
                          border: 'none',
                          textDecoration: 'none',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '102% 102%',
                          backgroundPosition: 'center',
                          outline: 'none'
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                          <path d="M17.9 17.45c-.3 0-.6-.24-.6-.56v-4.14c0-.32.3-.56.6-.56s.6.24.6.56v4.14c0 .32-.3.56-.6.56zm-11.8 0c-.3 0-.6-.24-.6-.56v-4.14c0-.32.3-.56.6-.56s.6.24.6.56v4.14c0 .32-.3.56-.6.56zm11.2-8.87h-1.62l.99-1.73c.06-.1.03-.24-.07-.3-.1-.06-.24-.03-.3.07l-1.02 1.78C14.28 7.84 13.17 7.5 12 7.5s-2.28.34-3.28.9l-1.02-1.78c-.06-.1-.2-.13-.3-.07-.1.06-.13.2-.07.3l.99 1.73H6.7c-2.32 0-4.2 1.88-4.2 4.2v4.8c0 1.1.9 2 2 2h1.6v2.4c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6v-2.4h5.4v2.4c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6v-2.4h1.6c1.1 0 2-.9 2-2v-4.8c0-2.32-1.88-4.2-4.2-4.2zM9 12.6c-.44 0-.8-.36-.8-.8s.36-.8.8-.8.8.36.8.8-.36.8-.8.8zm6 0c-.44 0-.8-.36-.8-.8s.36-.8.8-.8.8.36.8.8-.36.8-.8.8z"/>
                        </svg>
                        <span>Android</span>
                      </a>
                    </div>
                  ) : (
                    <a 
                      href={app.urlString} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="app-store-btn"
                      style={{ 
                        background: `linear-gradient(90deg, ${app.fallbackTint || '#3B82F6'} 0%, #1e1b4b 120%)`,
                        border: 'none',
                        textDecoration: 'none',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '102% 102%',
                        backgroundPosition: 'center',
                        outline: 'none'
                      }}
                    >
                      {app.isWeb ? (
                        <>
                          <span>Visit Website</span>
                          <ExternalLink size={16} />
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 384 512" width="14" height="14" fill="currentColor">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48-19.1-77.5-19.1-38.3 0-77 21.8-96.7 56.5-39.7 69.6-10.2 172.7 28.1 228.3 18.7 27 41.5 57.3 70.8 56.2 28.5-1.1 39.5-18.3 73.9-18.3 34.4 0 44.5 18.3 73.9 17.7 29.4-1.1 49.3-27.7 67.9-54.6 21.4-31.2 30.1-61.5 30.5-63-1.1-.5-59.1-22.9-59.3-91.4zm-48.4-147.8c30.8-37.3 26.7-76.8 26.3-79-3.1.2-40.6 2-71.5 37.9-25.3 29.3-22.7 68.6-22.2 70.6 3.6-.3 39-2.3 67.4-29.5z"/>
                          </svg>
                          <span>App Store</span>
                        </>
                      )}
                    </a>
                  )}

                  {(app.aboutUrl || app.privacyUrl || app.termsUrl) && (
                    <div className="app-doc-links">
                      {app.aboutUrl && (
                        <a href={app.aboutUrl} className="app-doc-link" target="_blank" rel="noopener noreferrer">About Us</a>
                      )}
                      {app.privacyUrl && (
                        <a href={app.privacyUrl} className="app-doc-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                      )}
                      {app.termsUrl && (
                        <a href={app.termsUrl} className="app-doc-link" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
