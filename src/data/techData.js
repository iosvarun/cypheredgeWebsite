export const TECH_CATEGORIES = [
  "All Technologies",
  "Artificial Intelligence",
  "Mobile Engineering",
  "Backend & APIs",
  "Cloud & DevOps",
  "Databases & Security",
  "Frontend Web"
];

export const TECH_ITEMS = [
  // AI & ML
  {
    name: "PyTorch & TensorFlow",
    category: "Artificial Intelligence",
    iconName: "BrainCircuit",
    color: "#EE4C2C",
    businessValue: "Custom deep learning model training, computer vision, and neural network fine-tuning."
  },
  {
    name: "LLMs (OpenAI, Claude, Llama 3)",
    category: "Artificial Intelligence",
    iconName: "Cpu",
    color: "#10A37F",
    businessValue: "Autonomous AI agents, conversational interfaces, and automated reasoning engines."
  },
  {
    name: "RAG & Vector DBs (Qdrant, Pinecone)",
    category: "Artificial Intelligence",
    iconName: "Database",
    color: "#06B6D4",
    businessValue: "Instant semantic search over millions of internal enterprise documents with 99%+ accuracy."
  },
  {
    name: "LangChain & CrewAI",
    category: "Artificial Intelligence",
    iconName: "Workflow",
    color: "#8B5CF6",
    businessValue: "Multi-agent task orchestration, autonomous decision loops, and tool execution."
  },

  // Mobile
  {
    name: "Swift & SwiftUI (iOS)",
    category: "Mobile Engineering",
    iconName: "Smartphone",
    color: "#F05138",
    businessValue: "High-performance native Apple iOS apps with 60 FPS fluid animations and CoreData/SwiftData."
  },
  {
    name: "Kotlin & Jetpack Compose (Android)",
    category: "Mobile Engineering",
    iconName: "Smartphone",
    color: "#7F52FF",
    businessValue: "Modern, robust native Android applications following clean architecture standards."
  },
  {
    name: "Flutter & Dart",
    category: "Mobile Engineering",
    iconName: "Layers",
    color: "#02569B",
    businessValue: "Cross-platform mobile apps for iOS & Android with a single codebase and native performance."
  },
  {
    name: "Apple Metal & AVFoundation",
    category: "Mobile Engineering",
    iconName: "Zap",
    color: "#EAB308",
    businessValue: "Hardware GPU video/photo compression, camera processing, and 3D graphics acceleration."
  },

  // Backend
  {
    name: "Node.js & Express / NestJS",
    category: "Backend & APIs",
    iconName: "Server",
    color: "#339933",
    businessValue: "High-throughput asynchronous microservices handling thousands of requests per second."
  },
  {
    name: "Python (FastAPI & Django)",
    category: "Backend & APIs",
    iconName: "Code2",
    color: "#3776AB",
    businessValue: "Rapid AI API integration, scientific data processing, and enterprise backend systems."
  },
  {
    name: "Go (Golang)",
    category: "Backend & APIs",
    iconName: "Terminal",
    color: "#00ADD8",
    businessValue: "Ultra-fast, low-latency microservices with minimal memory footprint and concurrent execution."
  },

  // Cloud & DevOps
  {
    name: "AWS & Google Cloud Platform",
    category: "Cloud & DevOps",
    iconName: "Cloud",
    color: "#FF9900",
    businessValue: "Auto-scaling serverless infrastructure, load balancing, S3 storage, and global CDN delivery."
  },
  {
    name: "Docker & Kubernetes",
    category: "Cloud & DevOps",
    iconName: "Box",
    color: "#2496ED",
    businessValue: "Containerized application packaging, automated deployment, and resilient cluster orchestration."
  },
  {
    name: "Terraform & GitHub Actions",
    category: "Cloud & DevOps",
    iconName: "GitBranch",
    color: "#844FBA",
    businessValue: "Infrastructure-as-Code (IaC) and zero-downtime automated CI/CD deployment pipelines."
  },

  // Databases & Security
  {
    name: "PostgreSQL & Redis",
    category: "Databases & Security",
    iconName: "Database",
    color: "#4169E1",
    businessValue: "ACID-compliant relational storage combined with lightning-fast in-memory caching."
  },
  {
    name: "AES-256 & Zero-Trust Security",
    category: "Databases & Security",
    iconName: "ShieldCheck",
    color: "#10B981",
    businessValue: "End-to-end data encryption, SOC2 readiness, OAuth2/SSO, and local privacy architecture."
  },

  // Frontend
  {
    name: "React 19 & Next.js App Router",
    category: "Frontend Web",
    iconName: "Layout",
    color: "#61DAFB",
    businessValue: "SEO-optimized, server-side rendered web portals with ultra-fast page loads and code splitting."
  },
  {
    name: "TypeScript & Tailwind CSS",
    category: "Frontend Web",
    iconName: "Palette",
    color: "#3178C6",
    businessValue: "Type-safe codebases with luxury, responsive UI styling and custom glassmorphism design systems."
  }
];
