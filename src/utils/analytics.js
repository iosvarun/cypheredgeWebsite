/**
 * Analytics tracking utility for CypherEdge
 * Supports GA4 and PostHog via environment variables.
 * No hard-coded keys — all config comes from siteConfig.js.
 */

import { SITE_CONFIG, getStoredUtmParams } from '../data/siteConfig.js';

// Event name constants for consistent tracking
export const TRACK_EVENTS = {
  // CTA clicks
  CTA_BOOK_DISCOVERY: 'cta_book_discovery_call',
  CTA_EXPLORE_WORK: 'cta_explore_work',
  CTA_WHATSAPP: 'cta_whatsapp_click',
  CTA_CALENDAR: 'cta_calendar_click',
  CTA_DOWNLOAD_CASE_STUDY: 'cta_download_case_study',

  // Form events
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_FIELD_FOCUS: 'form_field_focus',

  // Estimator
  ESTIMATOR_START: 'estimator_start',
  ESTIMATOR_STEP: 'estimator_step',
  ESTIMATOR_COMPLETE: 'estimator_complete',

  // Lead magnet
  LEAD_MAGNET_VIEW: 'lead_magnet_view',
  LEAD_MAGNET_SUBMIT: 'lead_magnet_submit',

  // Navigation
  PAGE_VIEW: 'page_view',
  NAV_CLICK: 'nav_click',

  // Service interest
  SERVICE_VIEW: 'service_view',
};

/**
 * Track an event with optional properties.
 * Routes to GA4 and/or PostHog based on config.
 */
export function trackEvent(eventName, properties = {}) {
  // Attach UTM params to all events
  const utmParams = getStoredUtmParams();
  const enrichedProps = { ...properties, ...utmParams, timestamp: Date.now() };

  // GA4 via gtag
  if (SITE_CONFIG.ga4Id && typeof window.gtag === 'function') {
    window.gtag('event', eventName, enrichedProps);
  }

  // PostHog
  if (SITE_CONFIG.posthogKey && typeof window.posthog !== 'undefined') {
    window.posthog.capture(eventName, enrichedProps);
  }

  // Development logging
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, enrichedProps);
  }
}

/**
 * Track a page view
 */
export function trackPageView(pagePath, pageTitle) {
  trackEvent(TRACK_EVENTS.PAGE_VIEW, {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

/**
 * Track a CTA click
 */
export function trackCTA(ctaName, location) {
  trackEvent(ctaName, {
    cta_location: location,
  });
}

/**
 * Track form interaction
 */
export function trackForm(eventName, formName, additionalData = {}) {
  trackEvent(eventName, {
    form_name: formName,
    ...additionalData,
  });
}
