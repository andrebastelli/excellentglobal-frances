import { trackCTAClick } from '@/utils/analytics';

export default function Hero() {
  const handleCTA = () => {
    trackCTAClick('hero_cta_primary');
    document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    trackCTAClick('hero_cta_whatsapp');
    window.open(
      'https://wa.me/5519987837602?text=Ol%C3%A1!%20Quero%20agendar%20minha%20aula%20demonstrativa%20gr%C3%A1tis%20na%20Excellent%20Global.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      className="relative hero-clip bg-brand-dark noise-bg overflow-hidden min-h-screen flex items-center"
      aria-label="Seção principal"
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue opacity-10 skew-x-12 translate-x-16" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-brand-yellow opacity-5 blur-3xl" />
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-brand-blue opacity-10 blur-2xl" />
        {/* Decorative dots grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #f7cd41 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-yellow bg-opacity-20 border border-brand-yellow border-opacity-40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse-slow" />
            <span className="text-brand-yellow text-sm font-medium">Limeira · SP · Vagas Limitadas</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl xl:text-6xl text-white leading-tight mb-6">
            Destrave Seu Inglês{' '}
            <span className="text-brand-yellow">em Limeira:</span>
            <br />
            Aula Grátis de{' '}
            <span className="relative inline-block">
              Conversação!
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-yellow opacity-60 rounded" />
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Agende sua aula experimental na Excellent Global e comece a falar com confiança para{' '}
            <strong className="text-white">sua carreira, viagens e vida</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={handleCTA}
              aria-label="Agendar aula demonstrativa grátis"
              className="bg-brand-yellow text-brand-dark font-semibold text-base px-8 py-4 rounded-2xl hover:bg-yellow-400 active:scale-95 transition-all duration-150 shadow-lg shadow-yellow-500/20 text-center"
            >
              Agendar Aula Demonstrativa Grátis
            </button>
            <button
              onClick={handleWhatsApp}
              aria-label="Falar com a Excellent Global pelo WhatsApp"
              className="flex items-center justify-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-20 text-white font-medium text-base px-8 py-4 rounded-2xl hover:bg-opacity-20 active:scale-95 transition-all duration-150"
            >
              <svg className="w-5 h-5 fill-current text-green-400" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar no WhatsApp
            </button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-brand-yellow">✓</span> Metodologia comprovada
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-yellow">✓</span> Acompanhamento personalizado
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-yellow">✓</span> Sem compromisso
            </span>
          </div>
        </div>

        {/* Hero image / Visual */}
        <div className="hidden lg:block relative">
          <div className="relative bg-brand-blue bg-opacity-20 rounded-3xl overflow-hidden border border-white border-opacity-10 aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80&fm=webp"
              alt="Alunos em aula de conversação em inglês na Excellent Global em Limeira"
              className="w-full h-full object-cover opacity-80"
              fetchPriority="high"
              width="800"
              height="600"
            />
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['FL', 'RS', 'CT'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-brand-yellow border-2 border-white flex items-center justify-center text-xs font-bold text-brand-dark"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">+500 alunos transformados</p>
                  <p className="text-gray-300 text-xs">em Limeira e região</p>
                </div>
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-brand-yellow text-brand-dark rounded-2xl px-4 py-3 shadow-xl">
            <p className="font-display font-bold text-lg leading-none">GRÁTIS</p>
            <p className="text-xs font-medium">1ª aula</p>
          </div>
        </div>
      </div>
    </section>
  );
}
