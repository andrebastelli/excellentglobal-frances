const diferenciais = [
  { icon: '🎯', title: 'Foco 100% em Conversação', desc: 'Você pratica falando, não decorando.' },
  { icon: '👤', title: 'Acompanhamento Individual', desc: 'Plano personalizado para o seu ritmo e objetivos.' },
  { icon: '📊', title: 'Plano de Evolução Claro', desc: 'Metas definidas, progresso visível a cada mês.' },
  { icon: '👨‍🏫', title: 'Professores Qualificados', desc: 'Equipe especializada em destravamento de fala.' },
  { icon: '🏢', title: 'Estrutura em Limeira/SP', desc: 'Escola física com ambiente imersivo e moderno.' },
  { icon: '🔄', title: 'Método Comprovado', desc: 'Centenas de alunos que passaram de travar a falar.' },
];

export default function DiferenciaisSection() {
  return (
    <section className="py-20 bg-white" aria-label="Nossos diferenciais">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-yellow bg-opacity-20 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Por que a Excellent Global?
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark mb-4">
            O que nos torna diferentes
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Não somos mais um curso de francês. Somos o método que funciona quando os outros não funcionaram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((d, i) => (
            <div
              key={i}
              className="reveal group bg-gray-50 hover:bg-brand-blue hover:text-white rounded-2xl p-6 transition-all duration-300 cursor-default border border-transparent hover:border-brand-blue"
            >
              <div className="text-3xl mb-4" aria-hidden="true">{d.icon}</div>
              <h3 className="font-display font-bold text-brand-dark group-hover:text-white text-base mb-2 transition-colors">
                {d.title}
              </h3>
              <p className="text-gray-500 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
