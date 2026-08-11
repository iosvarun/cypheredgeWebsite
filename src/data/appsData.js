export const PRODUCTS_DATA = [
  {
    id: "wadirectmessage",
    name: "WA Direct Message",
    tagline: "Direct messaging without saving contacts",
    badge: "Social Utility",
    category: "Utility & Social",
    iconPath: "/assets/ic_directMessage.png",
    urlString: "https://apps.apple.com/us/app/direct-message-for-whatsapp/id1557291502",
    urlStringAndroid: "https://play.google.com/store/apps/details?id=com.directChat.app",
    color: "#1FB14A",
    rating: "4.8 ★",
    downloads: "50K+ Downloads",
    description: "Send direct messages on WhatsApp without saving contact numbers to your address book. Protect your privacy and send messages instantly with customizable text templates.",
    features: [
      "No Contact Saving Required — Keeps address book 100% clean",
      "Custom Message Templates & Quick Scheduling",
      "Zero Cloud Storage — 100% On-Device Privacy Architecture",
      "Auto-Paste Copied Numbers & Location Link Sharing",
      "Ad-Free Premium Tier with Unlimited Custom Workflows"
    ],
    techStack: ["iOS Native (Swift)", "Android Native", "SwiftUI", "StoreKit 2", "WhatsApp DeepLink API"],
    metrics: [
      { label: "Active Users", value: "50,000+" },
      { label: "App Store Rating", value: "4.8 / 5" },
      { label: "Privacy Score", value: "100% On-Device" }
    ],
    aboutUrl: "#wadirectmessage/aboutus",
    privacyUrl: "#wadirectmessage/privacypolicy",
    termsUrl: "#wadirectmessage/termscondition"
  },
  {
    id: "digitaldukaan",
    name: "Digital Dukaan POS",
    tagline: "Smart Business Management & POS Platform",
    badge: "Business Utility",
    category: "Utility & Social",
    iconPath: "/assets/ic_digitalDukaan.png",
    urlString: "https://apps.apple.com/us/app/digital-dukaan-pos/id6782678932",
    urlStringAndroid: "https://play.google.com/store/apps/details?id=com.digitaldukaan.android.app",
    color: "#3B82F6",
    rating: "4.8 ★",
    downloads: "30K+ Merchants",
    description: "A comprehensive digital shop & POS management suite designed for retailers, wholesalers, and small businesses to manage inventory, track daily sales, and sync records.",
    features: [
      "Real-time Inventory & Product Catalog Management",
      "Instant Sales Receipt Generator & Digital Invoice Sharing",
      "Customer Khata & Credit Ledger Tracking",
      "Multi-device Cloud Backup & Sync via Firebase",
      "Offline-First Operating Mode for Continuous Billing"
    ],
    techStack: ["React Native", "Firebase Firestore", "Node.js API", "SQLite Local Caching"],
    metrics: [
      { label: "Transactions Processed", value: "$10M+" },
      { label: "Active Merchants", value: "30,000+" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    aboutUrl: "#digitaldukaan/aboutus",
    privacyUrl: "#digitaldukaan/privacypolicy",
    termsUrl: "#digitaldukaan/termscondition"
  },
  {
    id: "truthordare",
    name: "Truth or Dare Party",
    tagline: "Interactive Multiplayer Party Experience",
    badge: "Casual Game",
    category: "Lifestyle & Games",
    iconPath: "/assets/media__1780778288892.png",
    urlString: "https://apps.apple.com/us/app/truth-or-dare-spin-sin/id6758266545",
    urlStringAndroid: "https://play.google.com/store/apps/details?id=com.truthordare.cypheredge",
    color: "#EF4444",
    rating: "4.8 ★",
    downloads: "100K+ Players",
    description: "A viral, highly engaging party game featuring multiple custom game modes, custom card creators, fluid Haptic feedback spinning wheels, and sleek dark mode UI.",
    features: [
      "5+ Dynamic Game Modes (Classic, Teen, Party, Hot, Custom)",
      "Interactive 3D Wheel Spin Engine with Physics Haptics",
      "User-Generated Card Deck Creator & Saver",
      "Offline & Online Multiplayer Party Support",
      "Multi-Language Support & Dark Cyber Aesthetic"
    ],
    techStack: ["SwiftUI", "CoreHaptics", "Combine Framework", "Local Storage Engine"],
    metrics: [
      { label: "Total Sessions", value: "2M+" },
      { label: "Global Players", value: "100,000+" },
      { label: "App Store Rating", value: "4.8 / 5" }
    ],
    aboutUrl: "#truthordare/aboutus",
    privacyUrl: "#truthordare/privacypolicy",
    termsUrl: "#truthordare/termscondition"
  },
  {
    id: "calculatorvault",
    name: "Calculator+ Photo Vault",
    tagline: "Hide Photos, Videos & Files",
    badge: "Privacy & Security",
    category: "Utility & Social",
    iconPath: "/assets/ic_calculatorVault.svg",
    urlString: "https://apps.apple.com/us/app/calculator-photo-vault/id6768953292",
    color: "#F58220",
    rating: "4.9 ★",
    downloads: "New Release",
    description: "Disguised as a fully functional calculator, Calculator+ Photo Vault locks and encrypts your private photos, videos, confidential notes, and sensitive files behind a secret passcode.",
    features: [
      "Fully Functional Calculator UI with Secret PIN Entrance",
      "Military-Grade AES-256 Vault File Encryption",
      "Private In-App Photo Gallery & Secret Video Player",
      "Fake Decoy Passcode Mode for Enhanced Stealth",
      "100% Local On-Device Processing — Zero Cloud Leaks"
    ],
    techStack: ["iOS Native (Swift)", "CryptoKit", "Security Framework", "CoreData"],
    metrics: [
      { label: "Encryption Standard", value: "AES-256" },
      { label: "Privacy Rating", value: "100% On-Device" },
      { label: "App Store Rating", value: "4.9 / 5" }
    ],
    aboutUrl: "#calculatorvault/aboutus",
    privacyUrl: "#calculatorvault/privacypolicy",
    termsUrl: "#calculatorvault/termscondition"
  },
  {
    id: "whatsbackup",
    name: "WhatsBackup",
    tagline: "Automated Cloud Backup & Chat Security",
    badge: "Security Utility",
    category: "Utility & Social",
    iconPath: "/assets/media__1780778288921.png",
    urlString: "https://apps.apple.com/us/app/whatsbackup/id6768908196",
    color: "#10B981",
    rating: "4.9 ★",
    downloads: "25K+ Users",
    description: "Securely backup and manage your chats, media, and document archives. Prevent data loss with automated encrypted backups synced directly to your personal cloud.",
    features: [
      "Military-grade local encryption before cloud sync",
      "Automated background backup schedules",
      "Seamless integration with iCloud Drive & Google Drive",
      "High-ratio media file compression to save storage space",
      "1-Click chat restoration wizard"
    ],
    techStack: ["Swift", "CryptoKit", "iCloud Drive API", "BackgroundTasks"],
    metrics: [
      { label: "Encrypted Files", value: "1M+" },
      { label: "Data Loss Incidents", value: "0" },
      { label: "User Rating", value: "4.9 / 5" }
    ],
    aboutUrl: "#whatsbackup/aboutus",
    privacyUrl: "#whatsbackup/privacypolicy",
    termsUrl: "#whatsbackup/termscondition"
  },
  {
    id: "shrinklab",
    name: "ShrinkLab",
    tagline: "Next-Gen Media & Video Compression Engine",
    badge: "Media Utility",
    category: "Media & Tools",
    iconPath: "/assets/media__1780778288868.png",
    urlString: "https://apps.apple.com/us/app/shrinklab-media-compressor/id6757521417",
    color: "#8B5CF6",
    rating: "4.7 ★",
    downloads: "40K+ Downloads",
    description: "Advanced media compression tool leveraging hardware AVFoundation acceleration to reduce video and photo file sizes by up to 90% with zero perceptible quality loss.",
    features: [
      "Hardware-Accelerated H.265/HEVC Compression",
      "Batch Video & Photo File Optimization",
      "Custom Resolution & Bitrate Fine-Tuning Controls",
      "Privacy First: 100% On-Device Processing (No Uploads)",
      "Preserves Full Metadata (EXIF, HDR, Audio Channels)"
    ],
    techStack: ["iOS Native (Swift)", "AVFoundation", "Metal Framework", "CoreGraphics"],
    metrics: [
      { label: "Storage Saved", value: "500+ TB" },
      { label: "Compression Ratio", value: "Up to 90%" },
      { label: "Processing Speed", value: "10x Realtime" }
    ],
    aboutUrl: "#shrinklab/aboutus",
    privacyUrl: "#shrinklab/privacypolicy",
    termsUrl: "#shrinklab/termscondition"
  },
  {
    id: "gymworkout",
    name: "Gym Workout Fitness Club",
    tagline: "Personal Workout & Nutrition Coach",
    badge: "Fitness Coach",
    category: "Health & Lifestyle",
    iconPath: "/assets/media__1780777474338.png",
    urlString: "https://apps.apple.com/us/app/gym-workout-fitness-club-lab/id6757446446",
    color: "#16A34A",
    rating: "4.9 ★",
    downloads: "35K+ Athletes",
    description: "Your digital fitness coach. Track routines, set timers, measure weight progression, log meal nutrition, and analyze workout performance analytics.",
    features: [
      "Interactive Routine Builder & Rest Interval Timer",
      "3D Animated Exercise Motion Guides & Form Checks",
      "Calorie & Macro Tracker with Local Food Database",
      "Progress Analytics with Volume & Max Weight Charts",
      "Apple HealthKit Sync for Seamless Step & Active Energy Integration"
    ],
    techStack: ["Swift", "HealthKit SDK", "Charts Framework", "CoreData"],
    metrics: [
      { label: "Workouts Logged", value: "500,000+" },
      { label: "Active Athletes", value: "35,000+" },
      { label: "Rating", value: "4.9 / 5" }
    ],
    aboutUrl: "#gymworkout/aboutus",
    privacyUrl: "#gymworkout/privacypolicy",
    termsUrl: "#gymworkout/termscondition"
  },
  {
    id: "pdfpulse",
    name: "PDF Pulse Toolkit",
    tagline: "Pocket Document Scanner & PDF Studio",
    badge: "Office Tool",
    category: "Media & Tools",
    iconPath: "/assets/media__1780777474357.png",
    urlString: "https://apps.apple.com/us/app/pdf-pulse-pdf-tools-scanner/id6758585117",
    color: "#F97316",
    rating: "4.8 ★",
    downloads: "20K+ Users",
    description: "All-in-one PDF scanner and document engine. Merge, split, compress, password-protect, sign, and convert documents directly on your device.",
    features: [
      "AI-Powered Document Camera Scan with Perspective Auto-Crop",
      "Merge, Split, Reorder, & Compress PDF Files",
      "Digital Signature Draw & Stamp Utility",
      "AES-256 PDF Password Encryption & Decryption",
      "100% Local On-Device PDF Rendering"
    ],
    techStack: ["Swift", "VisionKit SDK", "PDFKit Framework", "CoreImage"],
    metrics: [
      { label: "Documents Processed", value: "800,000+" },
      { label: "Security Protocol", value: "AES-256 On-Device" },
      { label: "Rating", value: "4.8 / 5" }
    ],
    aboutUrl: "#pdfpulse/aboutus",
    privacyUrl: "#pdfpulse/privacypolicy",
    termsUrl: "#pdfpulse/termscondition"
  },
  {
    id: "nyayaconnect",
    name: "Nyayaconnect Platform",
    tagline: "Legal Access & Consultation Civic Tech",
    badge: "Civic Tech",
    category: "Legal & Enterprise",
    iconPath: "/assets/media__1780777474356.png",
    urlString: "https://apps.apple.com/us/app/nyayaconnect/id6752890135",
    urlStringAndroid: "https://play.google.com/store/apps/details?id=com.nyayaconnect.legal",
    color: "#06B6D4",
    rating: "4.9 ★",
    downloads: "15K+ Citizens",
    description: "Empowering citizens with digital legal access, automated document templates, lawyer directory consultation booking, and judicial case tracking.",
    features: [
      "Automated Legal Notice & Affidavit Template Generator",
      "Verified Legal Advocate & Expert Directory",
      "Judicial Case Tracking & Hearing Date Reminders",
      "Multilingual Legal Knowledge Base in Simple Terms",
      "Encrypted Client-Advocate Document Locker"
    ],
    techStack: ["React Native", "Node.js Microservices", "PostgreSQL", "AWS S3"],
    metrics: [
      { label: "Legal Consultations", value: "10,000+" },
      { label: "Templates Generated", value: "50,000+" },
      { label: "Rating", value: "4.9 / 5" }
    ],
    aboutUrl: "#nyayaconnect/aboutus",
    privacyUrl: "#nyayaconnect/privacypolicy",
    termsUrl: "#nyayaconnect/termscondition"
  }
];
