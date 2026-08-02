export const SERVICES_DATA = [
  {
    id: "ai-agents-llm",
    title: "AI Agents & RAG Systems",
    shortDesc: "Custom AI agents, RAG knowledge systems, LLM integration, and automated multi-agent workflows that reduce manual effort and unlock enterprise data.",
    icon: "Bot",
    color: "#06B6D4",
    businessOutcome: "Automate knowledge work and reduce manual document processing by up to 80%.",
    problemSolved: "Businesses spend thousands of manual hours parsing docs, handling tier-1 customer queries, and processing unstructured data.",
    solution: "We build domain-specific AI agents that integrate with your APIs and execute multi-step business workflows — from document parsing to decision support.",
    deliverables: [
      "Custom Enterprise RAG Architecture (Pinecone / Qdrant / Milvus)",
      "Autonomous Multi-Agent Orchestration (LangChain / CrewAI / AutoGen)",
      "LLM Fine-Tuning & On-Premise Deployment (Ollama / Llama-3 / Claude / GPT-4)",
      "Intelligent Document Processing (OCR + Semantic Extraction)",
      "Voice AI & Natural Language Conversational Interfaces"
    ],
    techStack: ["Python", "FastAPI", "PyTorch", "OpenAI / Claude API", "LangChain", "Qdrant Vector DB", "Docker"],
    typicalTimeline: "3–8 Weeks",
    targetIndustries: ["FinTech", "Healthcare", "Legal Tech", "Enterprise Operations", "E-Commerce"],
    featuredCaseStudy: "RAG Engine indexing 1M+ internal compliance documents for instantaneous legal queries."
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    shortDesc: "End-to-end product engineering for startups and enterprises — from concept and architecture to production deployment and ongoing support.",
    icon: "Code2",
    color: "#3B82F6",
    businessOutcome: "Go from idea to production-ready software with a team that builds and operates its own products.",
    problemSolved: "Businesses need reliable engineering partners who understand product thinking — not just code shops that deliver specs without strategic input.",
    solution: "We act as your extended product engineering team. We handle architecture, development, QA, deployment, and post-launch iteration across web, mobile, and backend.",
    deliverables: [
      "Full product architecture and technical planning",
      "Frontend, backend, and database engineering",
      "Quality assurance and automated testing pipelines",
      "CI/CD deployment and infrastructure setup",
      "Post-launch maintenance and feature iteration"
    ],
    techStack: ["React", "Next.js", "Node.js", "Python", "Swift", "Kotlin", "PostgreSQL", "AWS"],
    typicalTimeline: "6–16 Weeks",
    targetIndustries: ["Startups", "Enterprise", "FinTech", "Healthcare", "E-Commerce", "EdTech"],
    featuredCaseStudy: "Digital Dukaan: Full POS platform serving 30,000+ merchants with $10M+ in transactions."
  },
  {
    id: "saas-product-engineering",
    title: "SaaS Product Development",
    shortDesc: "From zero to revenue: Turn your SaaS concept into a production-ready web application with modern architecture, auth, payments, and multi-tenancy.",
    icon: "Layers",
    color: "#8B5CF6",
    businessOutcome: "Launch a market-ready SaaS product with subscription billing, auth, and multi-tenant infrastructure.",
    problemSolved: "Founders struggle to bridge the gap between initial designs and scalable production code, delaying launch by months.",
    solution: "As product creators ourselves, we handle product strategy, UI/UX architecture, frontend engineering, payment integrations, and DevOps launch execution.",
    deliverables: [
      "Modern Web Applications (React 19, Next.js App Router, TypeScript)",
      "Multi-Tenant Architecture & Workspace Management",
      "Stripe / Razorpay Payment & Recurring Subscription Infrastructure",
      "User Authentication (Clerk, NextAuth, OAuth2, SAML/SSO)",
      "Real-time Collaboration & WebSocket Engines"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Stripe"],
    typicalTimeline: "4–10 Weeks",
    targetIndustries: ["Enterprise B2B", "Developer Tools", "E-Commerce", "FinTech", "EdTech"],
    featuredCaseStudy: "Aurikaa Jewels: Headless e-commerce platform delivering 98/100 Lighthouse performance."
  },
  {
    id: "mobile-app-engineering",
    title: "Mobile App Development",
    shortDesc: "Native iOS (Swift/SwiftUI), Android (Kotlin), and cross-platform apps engineered for performance, retention, and App Store success.",
    icon: "Smartphone",
    color: "#10B981",
    businessOutcome: "Ship high-performance apps that achieve strong App Store ratings and retain users.",
    problemSolved: "Sluggish, clunky mobile apps suffer low retention, high crash rates, and poor App Store review ratings.",
    solution: "We engineer pixel-perfect, native-grade mobile applications with fluid animations, offline-first sync, local hardware acceleration, and subscription monetization.",
    deliverables: [
      "Native iOS Development (Swift, SwiftUI, CoreData/SwiftData, Combine)",
      "Native Android Engineering (Kotlin, Jetpack Compose, Coroutines)",
      "Cross-Platform Apps (Flutter, React Native)",
      "Hardware Acceleration (Metal API, Camera Engine, VisionKit, CoreHaptics)",
      "App Store Optimization (ASO) & Subscription Funnel Growth"
    ],
    techStack: ["Swift", "SwiftUI", "Kotlin", "Flutter", "React Native", "StoreKit 2", "Firebase"],
    typicalTimeline: "4–12 Weeks",
    targetIndustries: ["Consumer Utility", "Fitness & Health", "FinTech", "E-Commerce", "SaaS"],
    featuredCaseStudy: "ShrinkLab: Hardware-accelerated media compressor scaling to 500+ TB user storage saved."
  },
  {
    id: "enterprise-backend-cloud",
    title: "Enterprise Cloud & DevOps",
    shortDesc: "Scalable microservices, resilient cloud infrastructure, automated CI/CD, security audits, and cost-optimized AWS/GCP platforms.",
    icon: "Server",
    color: "#F59E0B",
    businessOutcome: "Eliminate downtime, reduce cloud costs, and scale infrastructure to handle traffic spikes.",
    problemSolved: "Monolithic systems freeze under traffic spikes, leak database connections, and create huge cloud cost overheads.",
    solution: "We design resilient microservice architectures with caching, event-driven messaging, auto-scaling clusters, zero-downtime CI/CD, and infrastructure monitoring.",
    deliverables: [
      "Distributed Microservice Architecture (Node.js, Go, Python)",
      "High-Throughput GraphQL & RESTful API Engineering",
      "Database Optimization (PostgreSQL, Redis, MongoDB)",
      "Containerization & Orchestration (Docker, Kubernetes, Helm)",
      "Automated CI/CD Pipelines, Security Audits & Cloud Cost Optimization"
    ],
    techStack: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Terraform"],
    typicalTimeline: "4–16 Weeks",
    targetIndustries: ["Financial Services", "Retail", "Healthcare", "Logistics", "SaaS"],
    featuredCaseStudy: "Cloud infrastructure migration reducing monthly hosting costs by 42% while doubling bandwidth."
  },
  {
    id: "it-staffing-dedicated-teams",
    title: "IT Staffing & Dedicated Teams",
    shortDesc: "Hire dedicated developers or full engineering pods — AI, frontend, backend, mobile, QA, DevOps, and product talent — with fast onboarding and flexible engagement.",
    icon: "Users",
    color: "#EC4899",
    businessOutcome: "Scale your engineering capacity in weeks, not months — with senior talent and transparent communication.",
    problemSolved: "Hiring in-house engineers is slow and expensive. Freelancers lack accountability. Agencies rotate junior developers without context.",
    solution: "We provide dedicated developers or complete engineering pods that integrate with your team, follow your processes, and deliver like an in-house extension.",
    deliverables: [
      "Dedicated Individual Developers (AI, Frontend, Backend, Mobile, QA, DevOps)",
      "Full Engineering Pods (2–8 engineers with a tech lead)",
      "Flexible Engagement Models (Monthly, Quarterly, Project-Based)",
      "Fast Onboarding (Typically within 1–2 weeks)",
      "Daily Standups, Sprint Planning & Transparent Reporting"
    ],
    techStack: ["React", "Node.js", "Python", "Swift", "Kotlin", "AWS", "Docker", "LangChain"],
    typicalTimeline: "Onboarding in 1–2 Weeks",
    staffingDetails: {
      roles: [
        "AI / ML Engineers",
        "Frontend Engineers (React, Next.js, Vue)",
        "Backend Engineers (Node.js, Python, Go)",
        "Mobile Developers (iOS, Android, Flutter)",
        "QA & Test Automation Engineers",
        "DevOps & Cloud Engineers",
        "Product Managers & Designers"
      ],
      engagementModels: [
        { model: "Dedicated Developer", description: "A single engineer embedded in your team, working exclusively on your project." },
        { model: "Engineering Pod", description: "A self-contained team of 2–8 engineers with a tech lead, handling end-to-end delivery." },
        { model: "Project-Based", description: "A fixed-scope engagement with a dedicated team for a defined deliverable and timeline." }
      ],
      advantages: [
        "Senior-level engineers with product-building experience",
        "No recruitment overhead or HR burden",
        "Direct communication — no layers of account managers",
        "Knowledge continuity across sprints",
        "Scale up or down based on project needs",
        "NDA-protected, IP ownership transferred to you"
      ]
    },
    targetIndustries: ["Startups", "Enterprise", "FinTech", "Healthcare", "SaaS", "E-Commerce"],
    featuredCaseStudy: "Scaling a fintech startup's engineering team from 2 to 8 dedicated developers within 3 weeks."
  }
];
