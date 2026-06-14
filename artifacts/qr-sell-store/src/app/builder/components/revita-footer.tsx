'use client';

import { useState } from 'react';
import { Link } from 'wouter';

export function RevitaFooter() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { setNewsletterStatus('error'); return; }

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    if (phone && !phoneRegex.test(phone)) { setNewsletterStatus('error'); return; }

    setNewsletterStatus('submitting');
    setTimeout(() => setNewsletterStatus('success'), 1200);
  };

  return (
    <footer id="contacto" className="bg-[#0A0A0A] text-neutral-400 py-12 md:py-16 border-t border-neutral-900">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">

        {/* Top: Contact + Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 mb-12 pb-12 border-b border-neutral-900">
          <div>
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-5">
              Contacto
            </h4>
            <p className="text-sm font-light text-neutral-500 leading-relaxed mb-6">
              ¿Quieres hablar con nosotros? Reserva una llamada privada de 30 minutos sin compromiso.
            </p>
            <Link
              href="/builder/contacto"
              className="bg-white hover:bg-neutral-200 text-black text-[11px] font-semibold tracking-[2.5px] uppercase py-3.5 px-6 text-center transition-colors duration-300 inline-block"
            >
              Habla con un asesor
            </Link>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-5">
              Newsletter
            </h4>
            <p className="text-sm font-light text-neutral-500 leading-relaxed mb-6">
              Recibe las próximas oportunidades antes que nadie.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="bg-neutral-900 p-6 text-center">
                <span className="text-xl mb-2 block text-white">✓</span>
                <h5 className="text-white text-sm font-medium mb-1">¡Suscrito con éxito!</h5>
                <p className="text-xs text-neutral-500 font-light">
                  Te avisaremos en cuanto publiquemos nuevas oportunidades.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input type="text" name="footer_website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" autoComplete="off" />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (newsletterStatus === 'error') setNewsletterStatus('idle'); }}
                  required
                  className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-600 focus:outline-none rounded-none"
                />
                <input
                  type="tel"
                  placeholder="Teléfono (Opcional)"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); if (newsletterStatus === 'error') setNewsletterStatus('idle'); }}
                  className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-600 focus:outline-none rounded-none"
                />
                {newsletterStatus === 'error' && (
                  <p className="text-xs text-red-400 mt-1">Por favor, introduce datos válidos.</p>
                )}
                <button
                  type="submit"
                  disabled={newsletterStatus === 'submitting'}
                  className="bg-white hover:bg-neutral-200 text-black text-[11px] font-semibold tracking-[2.5px] uppercase py-3.5 mt-3 transition-colors duration-300 w-full"
                >
                  {newsletterStatus === 'submitting' ? 'Suscribiendo...' : 'Suscribirme'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle: Brand + Legal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 mb-10 pb-10 border-b border-neutral-900">
          <div>
            <Link href="/builder" className="flex items-center group w-fit mb-5">
              <img
                src="/img/revita/Logos/Icon + Text Transp.png"
                alt="Revita"
                className="h-14 w-auto object-contain bg-transparent invert transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="font-serif font-light text-lg text-white italic mb-5 leading-relaxed">
              Plataforma de desarrollo<br />residencial integral.
            </p>
            <div className="text-xs font-light space-y-2 leading-relaxed text-neutral-500">
              <p>Murcia, España</p>
              <p>inversores@gruporevita.com</p>
              <p>+34 XXX XX XX XX</p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-5">
              Legal
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {['Aviso legal', 'Privacidad', 'Cookies', 'Inversor'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white hover:text-neutral-300 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-neutral-600 mb-6">
          <div>© {new Date().getFullYear()} Revita, S.L. — Todos los derechos reservados</div>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn ↗</Link>
        </div>

        <div className="max-w-[800px] text-[11px] leading-relaxed text-neutral-700 italic font-light">
          La inversión en proyectos inmobiliarios conlleva riesgos, incluida la posible pérdida total o parcial del capital.
          La rentabilidad histórica o estimada no garantiza rentabilidades futuras.
        </div>
      </div>
    </footer>
  );
}
