const pains = [
  {
    icon: '😰',
    text: 'Você entende francês, mas trava na hora de falar e a vergonha de errar paralisa tudo',
  },
  {
    icon: '😓',
    text: 'Já tentou aplicativos, cursos online e livros, mas ainda não consegue conversar com naturalidade',
  },
  {
    icon: '😔',
    text: 'Sente que o francês está te impedindo de crescer na carreira ou viajar com autonomia',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white" aria-label="Problemas que resolvemos">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-red-50 text-red-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Isso soa familiar?
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark mb-4">
            Você não está sozinho nessa
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Milhares de pessoas em Limeira e região vivem essa frustração todos os dias. O problema não é você — é o método.
          </p>
        </div>

        <div className="space-y-5">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="reveal flex items-start gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5" aria-hidden="true">{pain.icon}</span>
              <p className="text-gray-700 text-base leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="text-brand-blue font-semibold text-lg">
            A Excellent Global tem o método certo para resolver isso. →
          </p>
        </div>
      </div>
    </section>
  );
}
