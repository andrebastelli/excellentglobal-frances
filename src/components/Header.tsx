import { useState, useEffect } from 'react';
import { trackCTAClick } from '@/utils/analytics';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleCTA = () => {
    trackCTAClick('header_cta');
    const el = document.getElementById('agendar');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Excellent Global - Página inicial">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-yellow rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-brand-dark text-sm">EG</span>
            </div>
            <div className="leading-tight">
              <span
                className={`font-display font-bold text-lg block leading-none transition-colors ${
                  scrolled ? 'text-brand-dark' : 'text-white'
                }`}
              >
                Excellent
              </span>
              <span
                className={`font-display font-bold text-lg block leading-none transition-colors ${
                  scrolled ? 'text-brand-blue' : 'text-brand-yellow'
                }`}
              >
                Global
              </span>
            </div>
          </div>
        </a>

        {/* CTA */}
        <button
          onClick={handleCTA}
          aria-label="Agendar aula grátis"
          className="bg-brand-yellow text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-400 active:scale-95 transition-all duration-150 shadow-sm"
        >
          Agendar Aula Grátis
        </button>
      </div>
    </header>
  );
}
