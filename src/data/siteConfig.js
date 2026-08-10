/**
 * CypherEdge Site Configuration
 * All configurable business values in one place.
 * Override via Vite environment variables (VITE_*) for production.
 */

export const SITE_CONFIG = {
  // Company
  companyName: 'CypherEdge Private Limited',
  companyShortName: 'CypherEdge',
  siteUrl: 'https://www.cypheredge.in',
  email: 'admin@cypheredge.in',
  location: 'India & Global Remote Delivery',

  // WhatsApp — set VITE_WHATSAPP_NUMBER in .env (format: country code + number, e.g. 919876543210)
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919999598474',
  whatsappMessage: "Hi CypherEdge, I'd like to discuss a project.",

  // Calendar booking — set VITE_CALENDLY_URL in .env
  calendlyUrl: import.meta.env.VITE_CALENDLY_URL || '',

  // Analytics — set VITE_GA4_ID or VITE_POSTHOG_KEY in .env
  ga4Id: import.meta.env.VITE_GA4_ID || '',
  posthogKey: import.meta.env.VITE_POSTHOG_KEY || '',
  posthogHost: import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com',

  // Social & Review profiles (update with real URLs)
  socialLinks: {
    linkedin: '',
    twitter: '',
    github: 'https://github.com/iosvarun',
    clutch: '',
    goodfirms: '',
    googleBusiness: '',
  },

  // Response time (only set if operationally true)
  responseTimeHours: 24,

  // Trust indicators (only include if factually true)
  trustIndicators: [
    'NDA-Friendly',
    'Global Remote Delivery',
    'Direct Access to Senior Engineers',
  ],

  // Low-risk entry offers (subject to business approval)
  entryOffers: [
    {
      title: 'Discovery Workshop',
      description: 'A focused session to define scope, architecture, and feasibility for your project.',
      duration: 'Typically 1–2 hours',
    },
    {
      title: 'Architecture Review',
      description: 'Senior engineers audit your existing codebase or system design and deliver a recommendations report.',
      duration: 'Delivered within 1 week',
    },
    {
      title: 'AI Feasibility Sprint',
      description: 'A short sprint to evaluate whether AI/RAG is viable for your use case, with a proof-of-concept.',
      duration: '1–2 weeks',
    },
    {
      title: 'MVP Planning Sprint',
      description: 'Product scoping, wireframes, technical architecture, and a delivery roadmap for your MVP.',
      duration: '1–2 weeks',
    },
    {
      title: 'Dedicated Team Trial',
      description: 'Start with a small dedicated team to evaluate fit before scaling. Subject to availability.',
      duration: 'Flexible — typically 2 weeks',
    },
  ],
};

/**
 * Generate a WhatsApp chat URL
 */
export function getWhatsAppUrl(customMessage) {
  const number = SITE_CONFIG.whatsappNumber;
  if (!number) return null;
  const message = encodeURIComponent(customMessage || SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${number}?text=${message}`;
}

/**
 * Capture UTM parameters from current URL and store in sessionStorage
 */
export function captureUtmParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const utmData = {};
    let hasUtm = false;

    utmKeys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        utmData[key] = val;
        hasUtm = true;
      }
    });

    if (hasUtm) {
      sessionStorage.setItem('ce_utm', JSON.stringify(utmData));
    }
  } catch {
    // sessionStorage may not be available
  }
}

/**
 * Get stored UTM parameters
 */
export function getStoredUtmParams() {
  try {
    const stored = sessionStorage.getItem('ce_utm');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}
