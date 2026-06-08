import { useEffect } from 'react';
import { pushEvent } from '@/utils/analytics';

const WHATSAPP_URL =
  'https://wa.me/5519987837602?text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20formul%C3%A1rio%20e%20quero%20confirmar%20minha%20aula%20demonstrativa%20gr%C3%A1tis%20na%20Excellent%20Global.';

interface ThankYouProps {
  onBackClick?: () => void;
}

export default function ThankYou({ onBackClick }: ThankYouProps) {

  useEffect(() => {
    // Fire conversion event
    pushEvent('agendamento_confirmado', { page: 'thank_you' });

    // Meta Pixel conversion
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'CompleteRegistration');
    }

    // GA4 conversion
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXXXX' });
    }
  }, []);

  return (
    <main className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
          Solicitação Recebida!
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Nossa equipe vai entrar em contato em até <strong className="text-white">2 horas</strong> para confirmar o melhor horário para a sua aula gratuita.
        </p>

        <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl p-6 mb-8">
          <p className="text-gray-400 text-sm mb-4">Quer confirmar agora pelo WhatsApp?</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Confirmar agendamento pelo WhatsApp agora"
            className="flex items-center justify-center gap-3 bg-green-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-600 active:scale-95 transition-all duration-150"
            onClick={() => pushEvent('thank_you_whatsapp_click')}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Confirmar pelo WhatsApp
          </a>
        </div>

        <button
          onClick={onBackClick}
          className="text-gray-500 text-sm hover:text-gray-300 transition-colors underline"
        >
          Voltar ao início
        </button>
      </div>
    </main>
  );
}
