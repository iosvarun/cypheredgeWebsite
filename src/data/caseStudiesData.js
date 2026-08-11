/**
 * CypherEdge Flagship Case Studies
 * Grounded strictly in real products, architecture, and empirical metrics.
 */

export const CASE_STUDIES_DATA = [
  {
    id: "wa-direct-message",
    slug: "wa-direct-message",
    title: "WA Direct Message: Privacy-First Messaging Utility Engine",
    client: "CypherEdge Products Division",
    category: "Mobile Utility & Privacy",
    image: "/assets/ic_directMessage.png",
    color: "#1FB14A",
    summary: "Engineered a zero-backend, 100% on-device mobile utility allowing direct WhatsApp messaging without saving temporary numbers to address books.",
    
    // Structured Case Study Schema
    problem: "Messaging helper apps frequently require uploading phone numbers and contact metadata to remote servers, exposing users to privacy risks, potential data breaches, and high cloud server operating costs.",
    solution: "CypherEdge engineered a 100% on-device local architecture leveraging iOS & Android native deep-link schemes (`whatsapp://send?phone=`), on-device encrypted template storage, and native StoreKit/Google Play subscription funnels.",
    engineering: "Architected using native SwiftUI (iOS) and Kotlin (Android) without any external API server dependencies. Local data is encrypted via CryptoKit / Jetpack Security. Deep link routing is executed in under 50ms with zero network hops.",
    outcome: "Reached 50,000+ active users with a 4.8/5 App Store rating, 100% on-device privacy guarantee, and zero cloud server infrastructure expenses.",
    
    results: [
      { metric: "50,000+", label: "Active Users" },
      { metric: "100%", label: "On-Device Privacy" },
      { metric: "4.8 / 5", label: "App Store Rating" }
    ],
    architecture: [
      "Zero-Backend On-Device Deep-Link Engine",
      "Local Encrypted Template & Phone Number History Storage (CryptoKit)",
      "Native iOS (SwiftUI) & Android (Kotlin) Parallel Architecture",
      "StoreKit 2 & Google Play Billing Subscription Integration"
    ],
    techStack: ["Swift", "SwiftUI", "Kotlin", "CryptoKit", "StoreKit 2", "DeepLink Scheme"],
    ctaText: "Need a privacy-first mobile application?"
  },
  {
    id: "digital-dukaan-pos",
    slug: "digital-dukaan-pos",
    title: "Digital Dukaan: Offline-First Retail POS & Ledger Platform",
    client: "CypherEdge Products Division",
    category: "Business & Enterprise",
    image: "/assets/ic_digitalDukaan.png",
    color: "#3B82F6",
    summary: "Built a robust POS and business management platform enabling retail and wholesale merchants to manage inventory, record sales, and issue digital invoices.",
    
    problem: "Small and medium retail merchants require dependable inventory and sales tracking, but existing cloud-only POS systems freeze or fail during internet outages in high-volume store environments.",
    solution: "CypherEdge engineered an offline-first mobile POS platform with automated background cloud sync, multi-device ledger reconciliation, and instant PDF digital receipt generation.",
    engineering: "Constructed with React Native and an embedded SQLite local database engine. Real-time background sync operates via Firebase Firestore with delta-sync algorithms to minimize payload overhead. Node.js microservices handle multi-device authentication and invoice PDF generation.",
    outcome: "Scaled to 30,000+ active merchants processing over $10M+ in transactions with 99.99% operational platform uptime.",
    
    results: [
      { metric: "30,000+", label: "Active Merchants" },
      { metric: "$10M+", label: "Transactions Processed" },
      { metric: "99.99%", label: "Platform Uptime SLA" }
    ],
    architecture: [
      "Offline-First Architecture with Background Sync",
      "Embedded SQLite Local Storage Engine for Instant Billing",
      "Firebase Firestore Real-time Multi-Device Sync Layer",
      "Node.js API & Thermal / PDF Digital Receipt Generator"
    ],
    techStack: ["React Native", "Firebase Firestore", "SQLite", "Node.js", "TypeScript"],
    ctaText: "Building a scalable business management platform?"
  },
  {
    id: "shrinklab-media-engine",
    slug: "shrinklab-media-engine",
    title: "ShrinkLab: Hardware-Accelerated Media Compression Engine",
    client: "CypherEdge Products Division",
    category: "Media & High-Performance Engineering",
    image: "/assets/media__1780778288868.png",
    color: "#8B5CF6",
    summary: "Developed a hardware-accelerated media compressor that reduces video and image file sizes by up to 90% with zero perceptible quality degradation.",
    
    problem: "Mobile video creators and storage-constrained users face rapid device memory exhaustion, while cloud compression services introduce latency, bandwidth costs, and privacy concerns.",
    solution: "CypherEdge built a native media compression suite utilizing device-level GPU acceleration (AVFoundation & Metal API) to process high-definition video batches locally on device.",
    engineering: "Leverages Apple Metal API and AVFoundation hardware encoders (H.265/HEVC). Implements custom bitrate control algorithms and EXIF/HDR metadata preservation pipelines running on dedicated GPU compute pipelines.",
    outcome: "Saved over 500+ TB of cumulative device storage across 40,000+ downloads with 10x real-time video encoding speed.",
    
    results: [
      { metric: "500+ TB", label: "Device Storage Saved" },
      { metric: "Up to 90%", label: "Compression Ratio" },
      { metric: "10x", label: "Realtime Processing Speed" }
    ],
    architecture: [
      "Metal API GPU Compute Acceleration Pipeline",
      "AVFoundation H.265/HEVC Hardware Video Encoder",
      "100% On-Device Batch Processing (Zero Cloud Latency)",
      "Lossless EXIF, HDR, & Audio Channel Preservation Pipeline"
    ],
    techStack: ["Swift", "AVFoundation", "Metal API", "CoreGraphics", "StoreKit 2"],
    ctaText: "Need high-performance media processing?"
  },
  {
    id: "truth-or-dare-game-engine",
    slug: "truth-or-dare-game-engine",
    title: "Truth or Dare: Haptic Physics & Multiplayer Game Engine",
    client: "CypherEdge Gaming",
    category: "Mobile Gaming & Haptics",
    image: "/assets/media__1780778288892.png",
    color: "#EF4444",
    summary: "Engineered an interactive party game engine featuring CoreHaptics force feedback, 3D wheel physics, custom deck serialization, and multi-language localization.",
    
    problem: "Mobile party games frequently suffer from flat, mechanical UI interactions and static question content, leading to rapid drop-off in user retention.",
    solution: "CypherEdge designed a custom SwiftUI physics-based spin wheel with precise CoreHaptics force feedback patterns, paired with a user-generated deck creation system.",
    engineering: "Built with SwiftUI animation primitives synchronized with CoreHaptics engine patterns. Question decks are serialized via a lightweight JSON engine with dynamic multi-language localization matrices supporting 10+ languages.",
    outcome: "Engaged 100,000+ global players across 2M+ game sessions with a 4.8/5 average App Store rating.",
    
    results: [
      { metric: "100,000+", label: "Global Players" },
      { metric: "2M+", label: "Game Sessions" },
      { metric: "4.8 / 5", label: "App Store Rating" }
    ],
    architecture: [
      "CoreHaptics Force-Feedback Synchronized Spin Engine",
      "Custom SwiftUI 3D Physics Wheel Renderer",
      "Dynamic Deck Serialization & User-Generated Content Engine",
      "Multi-Language Matrix (10+ Languages)"
    ],
    techStack: ["SwiftUI", "CoreHaptics", "Combine Framework", "CoreData", "StoreKit 2"],
    ctaText: "Designing an interactive mobile experience?"
  }
];
