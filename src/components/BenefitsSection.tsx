const benefits = [
  {
    icon: '💬',
    title: 'Fale com Segurança',
    desc: 'Pratique conversação real desde a primeira aula',
  },
  {
    icon: '🚀',
    title: 'Oportunidades Profissionais',
    desc: 'Inglês fluente abre portas em qualquer carreira',
  },
  {
    icon: '✈️',
    title: 'Viagens Sem Barreiras',
    desc: 'Explore o mundo com autonomia e confiança',
  },
  {
    icon: '📈',
    title: 'Evolução Real',
    desc: 'Plano personalizado com metas e acompanhamento',
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-brand-yellow py-14" aria-label="Benefícios do curso">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="text-3xl mb-3" aria-hidden="true">{b.icon}</div>
              <h3 className="font-display font-bold text-brand-dark text-base mb-1">{b.title}</h3>
              <p className="text-sm text-brand-dark text-opacity-70 leading-snug">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
