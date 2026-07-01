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
    iconPath: "/assets/media__1780777474357.png", // Heart card icon
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
    iconPath: "/assets/media__1780778288892.png", // PDF Pulse icon
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
                          background: `linear-gradient(90deg, ${app.fallbackTint || '#3B82F6'} 0%, #1e1b4b 120%)`
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
                          background: `linear-gradient(90deg, #10B981 0%, #1e1b4b 120%)` // Play Store Green
                        }}
                      >
                        <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
                          <path d="M425.4 227.1c-5.3-9-16.7-12-25.7-6.7L365 241c-28.7-22-65-35.3-105-36l26.6-46.2c5.3-9.1 2.2-20.7-7-26-9.1-5.3-20.7-2.2-26 7l-28.6 49.6C214.3 189.6 204.3 190 200 190c-4.3 0-14.3-.4-24-4.6l-28.6-49.6c-5.3-9.2-16.9-12.3-26-7-9.2 5.3-12.3 16.9-7 26l26.6 46.2c-40 .7-76.3 14-105 36l-34.7-20.6c-9-5.3-20.4-2.3-25.7 6.7-5.3 9-2.3 20.4 6.7 25.7L42 249.4c-1.3 5.4-2.4 10.9-3.3 16.6h386.6c-.9-5.7-2-11.2-3.3-16.6l34.7-20.6c9-5.3 12-16.7 6.7-25.7zM79.7 348c0 14.8-12 26.8-26.8 26.8S26.1 362.8 26.1 348v-65.4h53.6V348zm406.2-65.4V348c0 14.8-12 26.8-26.8 26.8s-26.8-12-26.8-26.8v-65.4h53.6zM92.7 282.6h28.6v126.8c0 10.7-8.7 19.4-19.4 19.4-10.7 0-19.4-8.7-19.4-19.4V282.6zm63.4 0H316v126.8c0 10.7-8.7 19.4-19.4 19.4s-19.4-8.7-19.4-19.4V282.6zm238.2 0c0 10.7-8.7 19.4-19.4 19.4-10.7 0-19.4-8.7-19.4-19.4V282.6h38.8z"/>
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
                        background: `linear-gradient(90deg, ${app.fallbackTint || '#3B82F6'} 0%, #1e1b4b 120%)`
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
                        <a href={app.aboutUrl} className="app-doc-link">About Us</a>
                      )}
                      {app.privacyUrl && (
                        <a href={app.privacyUrl} className="app-doc-link">Privacy Policy</a>
                      )}
                      {app.termsUrl && (
                        <a href={app.termsUrl} className="app-doc-link">Terms & Conditions</a>
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
