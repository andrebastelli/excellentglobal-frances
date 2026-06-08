import { trackCTAClick } from '@/utils/analytics';

export default function FinalCTASection() {
  const handleCTA = () => {
    trackCTAClick('final_cta');
    document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden" aria-label="Chamada final para ação">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-blue opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center reveal">
        <h2 className="font-display text-3xl md:text-5xl text-white mb-5 leading-tight">
          Não perca tempo!
          <br />
          <span className="text-brand-yellow">Comece sua jornada no Inglês agora.</span>
        </h2>

        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
          Cada dia sem praticar é um dia a mais travado. Agende sua aula gratuita e dê o primeiro passo hoje.
        </p>

        <button
          onClick={handleCTA}
          aria-label="Agendar minha aula gratuita agora"
          className="bg-brand-yellow text-brand-dark font-semibold text-lg px-12 py-5 rounded-2xl hover:bg-yellow-400 active:scale-95 transition-all duration-150 shadow-2xl shadow-yellow-400/20 inline-block"
        >
          Agendar Minha Aula Gratuita →
        </button>

        <p className="text-gray-500 text-sm mt-5">
          Gratuito · Sem compromisso · Sem cartão de crédito
        </p>
      </div>
    </section>
  );
}
