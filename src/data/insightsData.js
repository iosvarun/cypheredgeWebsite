/**
 * Insights/Resources data structure.
 * Content metadata for case studies, architecture explainers, staffing guides, etc.
 * Actual article content would be added as individual entries.
 */

export const INSIGHTS_CATEGORIES = [
  'All',
  'Engineering',
  'AI & ML',
  'IT Staffing',
  'Project Planning',
  'Architecture',
  'Mobile',
];

export const INSIGHTS_DATA = [
  {
    slug: 'how-rag-systems-work',
    title: 'How RAG Systems Work: A Practical Guide for Business Leaders',
    description: 'Understand Retrieval-Augmented Generation without the jargon. Learn when RAG adds value, what it costs, and how to evaluate if it fits your use case.',
    category: 'AI & ML',
    author: 'CypherEdge Engineering',
    date: '2026-07-15',
    readingTime: '8 min',
    featured: true,
  },
  {
    slug: 'dedicated-team-vs-freelancers',
    title: 'Dedicated Development Team vs. Freelancers: What Actually Works',
    description: 'A practical comparison of hiring models for software projects. Cost, accountability, knowledge retention, and when each approach makes sense.',
    category: 'IT Staffing',
    author: 'CypherEdge Engineering',
    date: '2026-07-10',
    readingTime: '6 min',
    featured: true,
  },
  {
    slug: 'estimating-software-project-cost',
    title: 'How to Estimate Software Project Costs (Without Getting Burned)',
    description: 'A straightforward guide to understanding software development pricing — fixed vs. time-and-materials, scope management, and red flags to watch for.',
    category: 'Project Planning',
    author: 'CypherEdge Engineering',
    date: '2026-07-05',
    readingTime: '7 min',
    featured: false,
  },
  {
    slug: 'microservices-vs-monolith',
    title: 'Microservices vs. Monolith: Making the Right Architecture Choice',
    description: 'When monoliths actually work better, when to break things apart, and how to avoid the distributed monolith trap.',
    category: 'Architecture',
    author: 'CypherEdge Engineering',
    date: '2026-06-28',
    readingTime: '9 min',
    featured: false,
  },
  {
    slug: 'ios-app-performance-optimization',
    title: 'iOS App Performance: Lessons from Building 9 Production Apps',
    description: 'Practical performance techniques from our production app suite — 60 FPS animations, memory management, and hardware acceleration.',
    category: 'Mobile',
    author: 'CypherEdge Engineering',
    date: '2026-06-20',
    readingTime: '10 min',
    featured: false,
  },
  {
    slug: 'scaling-engineering-team',
    title: 'Scaling Your Engineering Team: A Founder\'s Practical Guide',
    description: 'When to hire in-house, when to use dedicated teams, and how to maintain quality as your team grows from 2 to 20 engineers.',
    category: 'IT Staffing',
    author: 'CypherEdge Engineering',
    date: '2026-06-15',
    readingTime: '7 min',
    featured: false,
  },
];
