import React, { useState } from 'react';
import { Download, ExternalLink, MessageSquare, Scale, Dumbbell, ArrowDownCircle, Gamepad2, FileText, Lock, ShoppingBag } from 'lucide-react';
import './Work.css';

const APPS = [
  {
    name: "WA Direct Message",
    category: "Utility & Social",
    iconPath: "/assets/ic_directMessage.png",
    urlString: "https://apps.apple.com/us/app/direct-message-for-whatsapp/id1557291502",
    fallbackTint: "#1FB14A",
    fallbackSymbol: MessageSquare,
    description: "Send direct messages on WhatsApp without saving contact numbers to your address book. Protect your privacy and send messages instantly.",
    badge: "Social Utility"
  },
  {
    name: "WhatsBackup",
    category: "Utility & Social",
    iconPath: "/assets/media__1780778288921.png", // Green WhatsApp speech bubble cloud backup icon
    urlString: "https://apps.apple.com/us/app/whatsbackup/id6768908196",
    fallbackTint: "#1FB14A",
    fallbackSymbol: Lock,
    description: "Securely backup and manage your chats and media. Never lose important conversations with streamlined backup automation.",
    badge: "Security Utility"
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
    badge: "Business Utility"
  },
  {
    name: "ShrinkLab",
    category: "Media & Tools",
    iconPath: "/assets/media__1780778288868.png", // Media compressor icon
    urlString: "https://apps.apple.com/us/app/shrinklab-media-compressor/id6757521417",
    fallbackTint: "#8B5CF6",
    fallbackSymbol: ArrowDownCircle,
    description: "Advanced media compressor tool that reduces photo and video file sizes up to 90% without sacrificing image resolution or quality.",
    badge: "Media Utility"
  },
  {
    name: "Truth or Dare",
    category: "Lifestyle & Games",
    iconPath: "/assets/media__1780777474357.png", // Heart card icon
    urlString: "https://apps.apple.com/us/app/truth-or-dare-spin-sin/id6758266545",
    fallbackTint: "#EF4444",
    fallbackSymbol: Gamepad2,
    description: "A fun and interactive party game featuring multiple modes (Classic, Teen, Dirty) with seamless spinning mechanics and modern UI.",
    badge: "Casual Game"
  },
  {
    name: "Gym Workout",
    category: "Health & Lifestyle",
    iconPath: "/assets/media__1780777474338.png", // Gym workout dumbbell and apple icon
    urlString: "https://apps.apple.com/us/app/gym-workout-fitness-club-lab/id6757446446",
    fallbackTint: "#16A34A",
    fallbackSymbol: Dumbbell,
    description: "Your comprehensive fitness club coach. Track workouts, count sets, plan custom routines, and maintain nutrition logs.",
    badge: "Fitness Coach"
  },
  {
    name: "PDF Pulse",
    category: "Media & Tools",
    iconPath: "/assets/media__1780778288892.png", // PDF Pulse icon
    urlString: "https://apps.apple.com/us/app/pdf-pulse-pdf-tools-scanner/id6758585117",
    fallbackTint: "#F97316",
    fallbackSymbol: FileText,
    description: "A pocket PDF toolkit and document scanner. Merge, split, sign, lock, unlock, and convert files on the go with secure local processing.",
    badge: "Office Tool"
  },
  {
    name: "Nyayaconnect",
    category: "Legal & Enterprise",
    iconPath: "/assets/media__1780777474356.png", // Gavel icon
    urlString: "https://apps.apple.com/us/app/nyayaconnect/id6752890135",
    fallbackTint: "#3B82F6",
    fallbackSymbol: Scale,
    description: "Empowering citizens with legal access, simplified documentation templates, legal consultation tools, and judicial resources in India.",
    badge: "Civic Tech"
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
    isWeb: true
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
                        <span>iOS App</span>
                        <ExternalLink size={16} />
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
                        <span>Android</span>
                        <ExternalLink size={16} />
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
                      <span>{app.isWeb ? 'Visit Website' : 'Get App'}</span>
                      <ExternalLink size={16} />
                    </a>
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
