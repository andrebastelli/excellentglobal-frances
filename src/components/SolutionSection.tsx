export default function SolutionSection() {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden" aria-label="Nossa metodologia">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-blue opacity-10 blur-3xl -translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-yellow opacity-5 blur-3xl translate-x-20 translate-y-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="reveal">
            <span className="inline-block bg-brand-yellow bg-opacity-20 text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Nossa Solução
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6 leading-tight">
              O método que tira seu inglês do papel — de verdade
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Nosso método combina <strong className="text-white">prática intensiva</strong>, acompanhamento individualizado e aulas focadas na conversação. Nada de teoria chata — aqui você fala de verdade desde o primeiro dia.
            </p>
            <div className="bg-brand-yellow bg-opacity-10 border border-brand-yellow border-opacity-30 rounded-2xl p-5">
              <p className="text-brand-yellow font-semibold text-lg">
                🎯 Foco 100% na Conversação desde a primeira aula.
              </p>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-4 reveal">
            {[
              { num: '01', title: 'Conversação Real', desc: 'Simulações de situações do dia a dia, trabalho e viagens desde o início.' },
              { num: '02', title: 'Plano Individual', desc: 'Cada aluno recebe um plano de evolução personalizado com metas claras.' },
              { num: '03', title: 'Professores Qualificados', desc: 'Instrutores com método testado e experiência em destravamento de fala.' },
              { num: '04', title: 'Progresso Mensurável', desc: 'Acompanhamento constante para você ver a evolução acontecer.' },
            ].map((p) => (
              <div
                key={p.num}
                className="flex gap-4 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl p-5 hover:bg-opacity-10 transition-all duration-200"
              >
                <span className="font-display font-bold text-brand-yellow text-xl w-10 flex-shrink-0">{p.num}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
