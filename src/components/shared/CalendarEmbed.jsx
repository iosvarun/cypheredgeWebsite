import { SITE_CONFIG } from '../../data/siteConfig.js';
import { trackCTA, TRACK_EVENTS } from '../../utils/analytics.js';

export default function CalendarEmbed({ inline = false }) {
  const calendlyUrl = SITE_CONFIG?.calendlyUrl;
  const email = SITE_CONFIG?.email || 'contact@cypheredge.com';

  const handleFallbackClick = () => {
    trackCTA(TRACK_EVENTS?.CALENDAR_FALLBACK_CLICK || 'calendar_fallback_click');
    window.location.href = `mailto:${email}`;
  };

  if (!calendlyUrl) {
    return (
      <div className="calendar-fallback glass-panel" style={{ padding: '2rem', textAlign: 'center', borderRadius: '0.75rem' }}>
        <h3>Ready to discuss your project?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Schedule a call — email us at {email}</p>
        <button className="btn-glow" onClick={handleFallbackClick}>
          Email Us Now
        </button>
      </div>
    );
  }

  if (inline) {
    return (
      <div className="calendar-embed-container" style={{ width: '100%', borderRadius: '0.75rem', overflow: 'hidden', background: 'var(--bg-card)' }}>
        <iframe
          src={calendlyUrl}
          width="100%"
          height="600"
          frameBorder="0"
          title="Schedule a discovery call"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Popup button mode (if calendly widget handles popup, or just open in new tab)
  const handlePopupClick = () => {
    trackCTA(TRACK_EVENTS?.CALENDAR_POPUP_CLICK || 'calendar_popup_click');
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button className="btn-glow" onClick={handlePopupClick}>
      Schedule Discovery Call
    </button>
  );
}
