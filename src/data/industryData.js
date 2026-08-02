export const INDUSTRY_DATA = {
  legal: {
    slug: 'legal',
    title: 'Technology Solutions for Legal Firms',
    metaDescription: 'CypherEdge builds AI-powered legal technology — document automation, case tracking, client portals, and RAG-powered legal research for law firms and legal departments.',
    heroHeadline: 'Modernize Your Legal Practice with AI & Custom Software',
    heroSubtitle: 'From document automation to intelligent case research — we help legal firms reduce manual work, improve client communication, and scale operations with purpose-built technology.',
    problems: [
      'Manual document drafting and review consumes hours of billable time',
      'Case research across thousands of precedents is slow and inconsistent',
      'Client communication lacks transparency and self-service options',
      'Legacy case management systems are rigid and expensive to customize',
      'Sensitive client data requires strict compliance and access controls'
    ],
    solutions: [
      { title: 'AI-Powered Legal Research', description: 'RAG systems that index case law, contracts, and internal precedents for instant semantic search.' },
      { title: 'Document Automation', description: 'Template engines that generate contracts, affidavits, and notices from structured inputs.' },
      { title: 'Client Portals', description: 'Secure web and mobile portals for document sharing, case status tracking, and billing.' },
      { title: 'Case Management Systems', description: 'Custom case tracking, deadline management, and workflow automation built for your practice.' }
    ],
    relevantServices: ['ai-agents-llm', 'custom-software-development', 'saas-product-engineering', 'mobile-app-engineering'],
    faqs: [
      { q: 'Can you integrate AI with our existing legal management system?', a: 'Yes. We build API integrations and AI layers that connect with existing platforms like Clio, PracticePanther, or custom-built systems.' },
      { q: 'How do you handle client data confidentiality?', a: 'We sign NDAs before any project discussion. Our systems can be designed for on-premise or private cloud deployment to meet regulatory requirements.' },
      { q: 'Do you have experience with Indian legal frameworks?', a: 'Yes. Our Nyayaconnect platform serves 15,000+ citizens with legal document templates and advocate directory services specifically for Indian courts.' }
    ]
  },
  healthcare: {
    slug: 'healthcare',
    title: 'Technology Solutions for Healthcare',
    metaDescription: 'CypherEdge builds HIPAA-aware healthcare software — patient portals, telemedicine platforms, clinical data systems, and AI-assisted diagnostics.',
    heroHeadline: 'Build Secure, Compliant Healthcare Technology',
    heroSubtitle: 'Patient portals, telemedicine platforms, clinical data management, and AI-assisted workflows — engineered with privacy and compliance at the core.',
    problems: [
      'Patient data management across multiple systems creates fragmentation',
      'Telemedicine adoption requires reliable, user-friendly platforms',
      'Clinical workflows involve manual data entry and paper-based processes',
      'Compliance requirements (HIPAA, DISHA) make technology adoption complex',
      'Patients expect mobile-first access to appointments, records, and billing'
    ],
    solutions: [
      { title: 'Patient Portals & Mobile Apps', description: 'Secure portals for appointment scheduling, health records, prescription management, and billing.' },
      { title: 'Telemedicine Platforms', description: 'Video consultation, scheduling, and record-sharing systems for remote healthcare delivery.' },
      { title: 'Clinical Data Systems', description: 'Custom EHR/EMR integrations, lab management, and clinical workflow automation.' },
      { title: 'AI-Assisted Analysis', description: 'Document processing, diagnostic support tools, and medical data extraction using trained AI models.' }
    ],
    relevantServices: ['ai-agents-llm', 'custom-software-development', 'mobile-app-engineering', 'enterprise-backend-cloud'],
    faqs: [
      { q: 'Do you build HIPAA-compliant systems?', a: 'We can design systems with encryption, access controls, and audit logging that support HIPAA compliance. Final compliance certification depends on your organizational policies and legal review.' },
      { q: 'Can you integrate with existing hospital management systems?', a: 'Yes. We build API integrations with HL7/FHIR standards and can connect with major HMS and EHR platforms.' },
      { q: 'What about data residency requirements?', a: 'We support deployment on region-specific cloud infrastructure (AWS Mumbai, GCP Asia) to meet data residency requirements.' }
    ]
  },
  retail: {
    slug: 'retail',
    title: 'Technology Solutions for Retail & E-Commerce',
    metaDescription: 'CypherEdge builds retail technology — POS systems, e-commerce platforms, inventory management, and AI-powered customer engagement for retail businesses.',
    heroHeadline: 'Scale Your Retail Business with Custom Technology',
    heroSubtitle: 'POS systems, e-commerce platforms, inventory management, and customer analytics — built by a team that operates its own retail platform.',
    problems: [
      'Managing inventory across online and offline channels is error-prone',
      'Generic e-commerce platforms limit customization and brand experience',
      'POS systems often lack offline capability and multi-device support',
      'Customer engagement relies on manual processes without personalization',
      'Scaling operations requires technology that grows with the business'
    ],
    solutions: [
      { title: 'Custom POS Systems', description: 'Offline-first point-of-sale with inventory sync, digital receipts, and credit ledger tracking.' },
      { title: 'E-Commerce Platforms', description: 'Custom-built or headless e-commerce with payment gateways, catalog management, and order fulfillment.' },
      { title: 'Inventory & Supply Chain', description: 'Real-time inventory tracking, multi-warehouse management, and supplier coordination tools.' },
      { title: 'Customer Analytics', description: 'Purchase behavior analysis, personalized recommendations, and retention campaign automation.' }
    ],
    relevantServices: ['custom-software-development', 'saas-product-engineering', 'mobile-app-engineering', 'enterprise-backend-cloud'],
    faqs: [
      { q: 'Have you built retail technology before?', a: 'Yes. Our Digital Dukaan POS platform serves 30,000+ merchants processing $10M+ in transactions with offline-first capability.' },
      { q: 'Can you build a custom e-commerce platform?', a: 'Yes. We built the Aurikaa Jewels e-commerce platform and can develop custom storefronts, headless commerce solutions, or marketplace platforms.' },
      { q: 'Do you support payment gateway integration?', a: 'We integrate with Stripe, Razorpay, PayU, and other payment providers for both domestic and international transactions.' }
    ]
  },
  fintech: {
    slug: 'fintech',
    title: 'Technology Solutions for FinTech',
    metaDescription: 'CypherEdge builds fintech software — payment platforms, lending systems, trading dashboards, and regulatory compliance tools with enterprise-grade security.',
    heroHeadline: 'Build Secure, Scalable FinTech Products',
    heroSubtitle: 'Payment infrastructure, lending platforms, trading systems, and compliance tools — engineered with security, scalability, and regulatory awareness.',
    problems: [
      'Financial systems require strict security, audit trails, and encryption',
      'Regulatory compliance varies by market and changes frequently',
      'Transaction processing demands high throughput with zero data loss',
      'Users expect real-time dashboards, instant settlements, and mobile access',
      'Integrating with banking APIs and payment networks is technically complex'
    ],
    solutions: [
      { title: 'Payment Infrastructure', description: 'Payment processing, settlement engines, and multi-currency transaction platforms with PCI-DSS awareness.' },
      { title: 'Lending & Credit Platforms', description: 'Loan origination, underwriting workflows, credit scoring models, and repayment management.' },
      { title: 'Trading & Portfolio Dashboards', description: 'Real-time market data visualization, portfolio tracking, and order management systems.' },
      { title: 'Compliance & Reporting', description: 'KYC/AML workflow automation, regulatory reporting, and audit trail systems.' }
    ],
    relevantServices: ['custom-software-development', 'enterprise-backend-cloud', 'ai-agents-llm', 'saas-product-engineering'],
    faqs: [
      { q: 'Do you handle PCI-DSS compliance?', a: 'We design systems that support PCI-DSS requirements including encryption, tokenization, and access controls. We work with your compliance team for final certification.' },
      { q: 'Can you integrate with banking APIs?', a: 'Yes. We have experience integrating with payment gateways, banking APIs, and financial data providers.' },
      { q: 'What about real-time transaction processing?', a: 'We design high-throughput architectures using event-driven messaging, Redis caching, and auto-scaling infrastructure to handle transaction volume spikes.' }
    ]
  },
  logistics: {
    slug: 'logistics',
    title: 'Technology Solutions for Logistics & Supply Chain',
    metaDescription: 'CypherEdge builds logistics technology — fleet management, warehouse systems, route optimization, and real-time tracking for supply chain operations.',
    heroHeadline: 'Streamline Operations with Custom Logistics Technology',
    heroSubtitle: 'Fleet management, warehouse systems, route optimization, and real-time tracking — built for operational efficiency and visibility.',
    problems: [
      'Manual dispatch and route planning wastes fuel and delivery time',
      'Warehouse operations lack real-time visibility into stock levels',
      'Customers expect live tracking and accurate delivery estimates',
      'Paper-based proof-of-delivery creates reconciliation delays',
      'Scaling operations across regions requires centralized coordination'
    ],
    solutions: [
      { title: 'Fleet & Delivery Management', description: 'GPS-based fleet tracking, route optimization, driver assignment, and delivery scheduling platforms.' },
      { title: 'Warehouse Management', description: 'Real-time inventory tracking, pick/pack workflows, barcode scanning, and multi-warehouse coordination.' },
      { title: 'Customer Tracking Portals', description: 'Live shipment tracking, delivery notifications, and proof-of-delivery capture for end customers.' },
      { title: 'Analytics & Reporting', description: 'Operational dashboards, performance metrics, cost analysis, and demand forecasting tools.' }
    ],
    relevantServices: ['custom-software-development', 'mobile-app-engineering', 'enterprise-backend-cloud', 'ai-agents-llm'],
    faqs: [
      { q: 'Can you build a driver mobile app with GPS tracking?', a: 'Yes. We build native mobile apps with background GPS tracking, offline support, and real-time sync for delivery teams.' },
      { q: 'Do you integrate with ERP systems?', a: 'We build API integrations with major ERP platforms and can connect warehouse, fleet, and customer-facing systems.' },
      { q: 'What about offline-capable apps for drivers?', a: 'Our offline-first architecture ensures drivers can complete deliveries, capture signatures, and log updates without constant internet — syncing when connectivity returns.' }
    ]
  },
  education: {
    slug: 'education',
    title: 'Technology Solutions for Education',
    metaDescription: 'CypherEdge builds education technology — learning management systems, student portals, assessment platforms, and AI-powered tutoring for educational institutions.',
    heroHeadline: 'Build Modern Education Technology That Engages',
    heroSubtitle: 'Learning management, student portals, assessment platforms, and AI-assisted learning — designed for student engagement and institutional efficiency.',
    problems: [
      'Traditional LMS platforms are rigid and difficult to customize',
      'Student engagement drops without interactive and mobile-friendly content',
      'Assessment and grading workflows are manual and time-consuming',
      'Parents and students lack real-time visibility into academic progress',
      'Scaling content delivery across geographies requires robust infrastructure'
    ],
    solutions: [
      { title: 'Learning Management Systems', description: 'Custom LMS with course creation, progress tracking, certification, and multi-tenant support.' },
      { title: 'Student & Parent Portals', description: 'Mobile and web portals for attendance, grades, assignments, and communication.' },
      { title: 'Assessment Platforms', description: 'Online examination systems, auto-grading, analytics, and plagiarism detection.' },
      { title: 'AI-Assisted Learning', description: 'Personalized learning paths, AI tutoring assistants, and content recommendation engines.' }
    ],
    relevantServices: ['saas-product-engineering', 'custom-software-development', 'ai-agents-llm', 'mobile-app-engineering'],
    faqs: [
      { q: 'Can you build a white-label LMS?', a: 'Yes. We build multi-tenant SaaS platforms that can be white-labeled for different educational institutions or content providers.' },
      { q: 'Do you support mobile-first education apps?', a: 'Yes. We build native and cross-platform mobile apps for student engagement, offline content access, and push notification-based reminders.' },
      { q: 'Can AI personalize the learning experience?', a: 'We can build recommendation engines and adaptive learning paths using AI/ML models that adjust content difficulty based on student performance data.' }
    ]
  },
  manufacturing: {
    slug: 'manufacturing',
    title: 'Technology Solutions for Manufacturing',
    metaDescription: 'CypherEdge builds manufacturing technology — smart factory solutions, IoT integration, supply chain optimization, and industrial automation.',
    heroHeadline: 'Digital Transformation for Manufacturing',
    heroSubtitle: 'Smart factory solutions, IoT integration, supply chain optimization, and industrial automation powered by AI and modern engineering.',
    problems: [
      'Legacy system modernization',
      'Supply chain visibility',
      'Quality control automation',
      'Real-time production monitoring',
      'Predictive maintenance'
    ],
    solutions: [
      { title: 'IoT Integration', description: 'Connect machines and sensors for real-time telemetry and control.' },
      { title: 'Production Dashboards', description: 'Real-time visibility into OEE, downtime, and production metrics.' },
      { title: 'Predictive Maintenance', description: 'AI-driven models to predict equipment failure before it happens.' },
      { title: 'Supply Chain Sync', description: 'End-to-end visibility of raw materials and finished goods.' }
    ],
    relevantServices: ['custom-software-development', 'enterprise-backend-cloud', 'ai-agents-llm', 'mobile-app-engineering'],
    faqs: [
      { q: 'Can you integrate with existing SCADA/PLC systems?', a: 'Yes, we can build middleware to extract data from industrial systems.' },
      { q: 'Do you build on-premise solutions?', a: 'Yes, we understand manufacturing often requires local servers for latency and security.' },
      { q: 'How do you handle IoT device security?', a: 'We use secure MQTT, certificate-based authentication, and encrypted data pipelines.' }
    ]
  },
  travel: {
    slug: 'travel',
    title: 'Technology Solutions for Travel & Hospitality',
    metaDescription: 'CypherEdge builds travel technology — booking platforms, travel management systems, AI recommendations, and mobile experiences.',
    heroHeadline: 'Technology Solutions for Travel & Hospitality',
    heroSubtitle: 'Booking platforms, travel management systems, AI-powered recommendations, and mobile experiences for the travel industry.',
    problems: [
      'Complex booking workflows',
      'Dynamic pricing',
      'Multi-channel distribution',
      'Personalized recommendations',
      'Real-time availability'
    ],
    solutions: [
      { title: 'Booking Platforms', description: 'Custom OTA platforms with real-time inventory and pricing.' },
      { title: 'Travel Management', description: 'Corporate travel booking and expense management tools.' },
      { title: 'AI Recommendations', description: 'Personalized travel itineraries and destination suggestions.' },
      { title: 'Mobile Experiences', description: 'Companion apps for travelers with offline access to bookings.' }
    ],
    relevantServices: ['custom-software-development', 'mobile-app-engineering', 'saas-product-engineering', 'ai-agents-llm'],
    faqs: [
      { q: 'Do you integrate with GDS systems?', a: 'Yes, we integrate with Amadeus, Sabre, and Travelport.' },
      { q: 'Can you handle high booking volume?', a: 'We build scalable cloud architectures that can handle seasonal traffic spikes.' },
      { q: 'Do you support multi-currency payments?', a: 'Yes, we integrate global payment gateways with dynamic currency conversion.' }
    ]
  }
};
