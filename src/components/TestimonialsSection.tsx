import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-cream" aria-label="Depoimentos de alunos">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-blue bg-opacity-10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Quem já destravou
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark mb-4">
            Histórias reais de transformação
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Não acredite só na nossa palavra — veja o que nossos alunos conquistaram
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="reveal bg-white rounded-3xl p-7 shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 estrelas">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-brand-yellow fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Result badge */}
              <div className="inline-block self-start bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                ✓ {t.result}
              </div>

              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold ${t.color === 'bg-brand-yellow' ? 'text-brand-dark' : 'text-white'}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Authority bar */}
        <div className="mt-14 reveal bg-brand-blue rounded-3xl p-8 text-center">
          <p className="text-white font-display font-bold text-2xl md:text-3xl mb-2">
            +500 alunos transformados em Limeira e região
          </p>
          <p className="text-blue-200 text-base">
            Metodologia comprovada · Professores qualificados · Estrutura moderna em Limeira/SP
          </p>
        </div>
      </div>
    </section>
  );
}
