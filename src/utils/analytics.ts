declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

export function pushEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackWhatsAppClick(location: string) {
  pushEvent('whatsapp_click', { click_location: location });
}

export function trackFormSubmit() {
  pushEvent('form_submit', { form_name: 'lead_form' });
  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
}

export function trackCTAClick(cta_label: string) {
  pushEvent('cta_click', { cta_label });
}

export function trackScrollDepth(depth: number) {
  pushEvent('scroll_depth', { percent: depth });
}

// Scroll depth tracker
export function initScrollDepth() {
  const depths = [25, 50, 75, 100];
  const fired = new Set<number>();

  const handler = () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    depths.forEach((d) => {
      if (scrolled >= d && !fired.has(d)) {
        fired.add(d);
        trackScrollDepth(d);
      }
    });
  };

  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}
