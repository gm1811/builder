'use client';

import { useState } from 'react';

export function SectionLead() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Robot detected!
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section className="bg-neutral-50 py-12 md:py-16 border-b border-[#E5E5E5]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight text-[#1A1A1A] mb-5 tracking-tight">
            Descárgate el documento de <span className="italic">nuestro modelo de negocio</span>.
          </h2>
          <p className="text-neutral-600 font-light max-w-[520px] mx-auto mb-10">
            Déjanos tu nombre y correo y te enviamos el dossier con las próximas oportunidades de inversión.
          </p>

          {status === 'success' ? (
            <div className="bg-white border border-[#C8C8C8] p-8 md:p-12 text-center animate-fade-in">
              <span className="text-2xl mb-4 block">✓</span>
              <h3 className="font-serif text-2xl mb-2">¡Dossier enviado!</h3>
              <p className="text-sm text-neutral-600 font-light">
                Hemos enviado el dossier del modelo de negocio a <strong>{email}</strong>. Por favor, revisa tu bandeja de entrada.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-[520px] mx-auto">
              {/* Honeypot field */}
              <input
                type="text"
                name="website_url"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                autoComplete="off"
              />

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-neutral-300 py-3.5 text-sm font-light text-[#1A1A1A] placeholder-neutral-500 focus:outline-none focus:border-black rounded-none"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Correo electrónico*"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  required
                  className="w-full bg-transparent border-b border-neutral-300 py-3.5 text-sm font-light text-[#1A1A1A] placeholder-neutral-500 focus:outline-none focus:border-black rounded-none"
                />
                {status === 'error' && (
                  <p className="text-left text-xs text-red-500 mt-1">Por favor introduce un email válido.</p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary whitespace-nowrap justify-center mt-4 sm:mt-0"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
