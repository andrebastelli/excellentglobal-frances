import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50" aria-label="Perguntas frequentes">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-brand-blue bg-opacity-10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 text-lg">
            Respondemos tudo antes de você decidir
          </p>
        </div>

        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-brand-blue bg-white shadow-sm' : 'border-gray-200 bg-white'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-semibold text-base pr-4 ${open === i ? 'text-brand-blue' : 'text-brand-dark'}`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    open === i ? 'bg-brand-blue text-white rotate-45' : 'bg-gray-100 text-gray-500'
                  }`}
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-5 pb-5"
                  role="region"
                  aria-label={faq.question}
                >
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
