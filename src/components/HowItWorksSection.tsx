import { trackCTAClick } from '@/utils/analytics';

const steps = [
  {
    num: '1',
    title: 'Agende Online ou via WhatsApp',
    desc: 'Em menos de 2 minutos, escolha o melhor horário para você. Sem burocracia.',
    icon: '📅',
  },
  {
    num: '2',
    title: 'Conheça a Escola e o Método',
    desc: 'Venha até nossa unidade em Limeira, conheça o espaço, os professores e experimente uma aula real de conversação.',
    icon: '🏫',
  },
  {
    num: '3',
    title: 'Receba Seu Plano Personalizado',
    desc: 'Após a aula demo, você recebe gratuitamente um plano de evolução personalizado para atingir seus objetivos.',
    icon: '🗺️',
  },
];

export default function HowItWorksSection() {
  const handleCTA = () => {
    trackCTAClick('how_it_works_cta');
    document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-blue-light bg-blue-50" aria-label="Como funciona a aula demonstrativa gratuita">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-blue bg-opacity-10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            É muito simples
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark mb-4">
            Como Funciona a Aula Demonstrativa Gratuita
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Do agendamento ao seu plano personalizado em 3 passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="reveal relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-brand-blue opacity-20 z-0" style={{ width: 'calc(100% - 2.5rem)', left: '80%' }} />
              )}
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 relative z-10 h-full">
                <div className="w-12 h-12 bg-brand-yellow rounded-2xl flex items-center justify-center font-display font-bold text-brand-dark text-lg mb-5">
                  {step.num}
                </div>
                <div className="text-2xl mb-3" aria-hidden="true">{step.icon}</div>
                <h3 className="font-display font-bold text-brand-dark text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <button
            onClick={handleCTA}
            aria-label="Quero agendar minha aula grátis"
            className="bg-brand-blue text-white font-semibold text-base px-10 py-4 rounded-2xl hover:bg-blue-700 active:scale-95 transition-all duration-150 shadow-lg shadow-blue-500/20"
          >
            Quero Agendar Minha Aula Grátis
          </button>
          <p className="text-gray-400 text-sm mt-3">100% gratuito · Sem compromisso · Sem cartão de crédito</p>
        </div>
      </div>
    </section>
  );
}
