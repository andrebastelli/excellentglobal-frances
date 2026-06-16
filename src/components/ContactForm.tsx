import { useState } from 'react';
import { trackFormSubmit, trackCTAClick } from '@/utils/analytics';

const WHATSAPP_URL =
  'https://wa.me/5519987837602?text=Ol%C3%A1!%20Quero%20agendar%20minha%20aula%20demonstrativa%20gr%C3%A1tis%20na%20Excellent%20Global.';

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState({ nome: '', whatsapp: '', motivacao: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formspreeId = (import.meta as { env?: Record<string, string> }).env?.VITE_FORMSPREE_ID || 'xxxxxxxxxxx';
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          whatsapp: form.whatsapp,
          motivacao: form.motivacao,
          _subject: `Nova lead - Aula Demo Grátis: ${form.nome}`,
        }),
      });

      if (res.ok) {
        trackFormSubmit();
        onSuccess?.();
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch {
      setError('Ops! Algo deu errado. Tente via WhatsApp abaixo.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    trackCTAClick('form_section_whatsapp');
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="agendar"
      className="py-20 bg-white"
      aria-label="Formulário de agendamento"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="reveal">
            <span className="inline-block bg-brand-yellow bg-opacity-20 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Comece agora
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-brand-dark mb-5 leading-tight">
              Agende sua Aula Demonstrativa Gratuita
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Preencha o formulário ao lado — nossa equipe entra em contato em até 2 horas para confirmar o melhor horário para você.
            </p>

            <div className="space-y-4">
              {[
                { icon: '⚡', text: 'Resposta em até 2 horas' },
                { icon: '🔒', text: 'Seus dados estão seguros' },
                { icon: '🎁', text: '100% gratuito, sem compromisso' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-600">
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp alternative */}
            <div className="mt-8 p-5 bg-green-50 rounded-2xl border border-green-100">
              <p className="text-gray-700 font-medium mb-3">Prefere falar agora?</p>
              <button
                onClick={handleWhatsApp}
                aria-label="Agendar pelo WhatsApp agora"
                className="flex items-center gap-3 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 active:scale-95 transition-all duration-150 w-full justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Agendar pelo WhatsApp Agora
              </button>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
              noValidate
              aria-label="Formulário de agendamento de aula grátis"
            >
              <h3 className="font-display font-bold text-brand-dark text-xl mb-6">
                Garanta sua Vaga Gratuita
              </h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Seu nome completo *
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue focus:ring-opacity-20 outline-none transition-all bg-white text-brand-dark placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                    Seu WhatsApp com DDD *
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="(19) 99999-9999"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue focus:ring-opacity-20 outline-none transition-all bg-white text-brand-dark placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="motivacao" className="block text-sm font-semibold text-gray-700 mb-2">
                    Por que você quer aprender francês? <span className="text-gray-400 font-normal">(opcional)</span>
                  </label>
                  <select
                    id="motivacao"
                    name="motivacao"
                    value={form.motivacao}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue focus:ring-opacity-20 outline-none transition-all bg-white text-brand-dark"
                  >
                    <option value="">Selecione (opcional)</option>
                    <option value="carreira">Crescimento na carreira</option>
                    <option value="viagem">Viagens e turismo</option>
                    <option value="conversacao">Melhorar a conversação</option>
                    <option value="intercambio">Intercâmbio / morar fora</option>
                    <option value="outros">Outros motivos</option>
                  </select>
                </div>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 rounded-xl p-3" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading || !form.nome || !form.whatsapp}
                  aria-label="Agendar minha aula grátis agora"
                  className="w-full bg-brand-yellow text-brand-dark font-semibold text-base py-4 rounded-xl hover:bg-yellow-400 active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-yellow-400/20"
                >
                  {loading ? 'Agendando...' : 'Agendar Minha Aula Grátis Agora →'}
                </button>

                <p className="text-gray-400 text-xs text-center">
                  Ao enviar, você concorda com nossa{' '}
                  <a href="/privacidade" className="underline hover:text-gray-600">
                    Política de Privacidade
                  </a>
                  . Nenhum spam, prometemos.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
