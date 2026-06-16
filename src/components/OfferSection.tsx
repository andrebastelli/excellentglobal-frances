import { trackCTAClick } from '@/utils/analytics';

export default function OfferSection() {
  const handleCTA = () => {
    trackCTAClick('offer_section_cta');
    document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-yellow relative overflow-hidden" aria-label="Oferta da aula demonstrativa gratuita">
      {/* Background stripes */}
      <div className="absolute inset-0 stripe-decoration opacity-60" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center reveal">
        <span className="inline-block bg-brand-dark bg-opacity-10 text-brand-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          🔥 Vagas Limitadas Este Mês
        </span>

        <h2 className="font-display text-3xl md:text-5xl text-brand-dark mb-6 leading-tight">
          Aula Demonstrativa de Francês — 100% Gratuita
        </h2>

        <p className="text-brand-dark text-opacity-80 text-lg mb-8 max-w-xl mx-auto">
          Uma experiência completa: conheça o método, a escola e receba seu plano personalizado. Tudo sem custo e sem compromisso.
        </p>

        {/* What's included */}
        <div className="bg-white bg-opacity-60 rounded-3xl p-6 mb-8 text-left max-w-lg mx-auto">
          <p className="font-semibold text-brand-dark mb-4 text-center">O que você ganha na aula gratuita:</p>
          {[
            'Aula real de conversação em francês',
            'Diagnóstico completo do seu nível',
            'Plano personalizado de evolução',
            'Conhecer a escola e os professores',
            'Sem cartão de crédito · Sem compromisso',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
              <span className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-brand-dark text-sm">{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleCTA}
          aria-label="Agendar agora e dar o primeiro passo para a fluência"
          className="bg-brand-dark text-white font-semibold text-lg px-12 py-5 rounded-2xl hover:bg-gray-800 active:scale-95 transition-all duration-150 shadow-2xl shadow-black/20 inline-block"
        >
          Agendar Agora e Dar o Primeiro Passo! →
        </button>

        <p className="text-brand-dark text-opacity-60 text-sm mt-4">
          Restam poucas vagas para este mês. Garanta a sua agora!
        </p>
      </div>
    </section>
  );
}
