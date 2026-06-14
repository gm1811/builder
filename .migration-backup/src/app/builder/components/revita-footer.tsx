'use client';

import { useState } from 'react';
import Link from 'next/link';

export function RevitaFooter() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [contactName, setContactName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPolicy, setContactPolicy] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setNewsletterStatus('error');
      return;
    }

    // Phone validation (numeric, optional but if present must be digits/spaces/plus)
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    if (phone && !phoneRegex.test(phone)) {
      setNewsletterStatus('error');
      return;
    }

    setNewsletterStatus('submitting');
    setTimeout(() => {
      setNewsletterStatus('success');
    }, 1200);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPolicy) return;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      setContactStatus('error');
      return;
    }

    setContactStatus('submitting');
    setTimeout(() => {
      setContactStatus('success');
      setContactName('');
      setContactLastName('');
      setContactPhone('');
      setContactEmail('');
      setContactPolicy(false);
    }, 1200);
  };

  return (
    <footer id="contacto" className="bg-[#0A0A0A] text-neutral-400 py-12 md:py-16 border-t border-neutral-900">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 gap-12 lg:gap-20 mb-16 pb-16 border-b border-neutral-900">
          
          {/* Contact Column */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-6">
              Contacto
            </h4>
            <p className="text-sm font-light text-neutral-500 leading-relaxed mb-6">
              ¿Quieres hablar con nosotros? Reserva una llamada privada de 30 minutos sin compromiso.
            </p>
            <Link
              href="/builder/contacto"
              className="bg-white hover:bg-neutral-200 text-black text-[11px] font-semibold tracking-[2.5px] uppercase py-3.5 px-6 text-center transition-colors duration-300 block w-full max-w-[320px]"
            >
              Habla con un asesor
            </Link>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-6">
              Newsletter
            </h4>
            <p className="text-sm font-light text-neutral-500 leading-relaxed mb-6">
              Recibe las próximas oportunidades antes que nadie.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="bg-neutral-900 border border-neutral-850 p-6 text-center max-w-[420px]">
                <span className="text-xl mb-2 block text-white">✓</span>
                <h5 className="text-white text-sm font-medium mb-1">¡Suscrito con éxito!</h5>
                <p className="text-xs text-neutral-500 font-light">
                  Te avisaremos en cuanto publiquemos nuevas oportunidades.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 max-w-[420px]">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="footer_website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  autoComplete="off"
                />

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (newsletterStatus === 'error') setNewsletterStatus('idle');
                  }}
                  required
                  className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-600 focus:outline-none rounded-none"
                />
                <input
                  type="tel"
                  placeholder="Teléfono (Opcional)"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (newsletterStatus === 'error') setNewsletterStatus('idle');
                  }}
                  className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-655 focus:outline-none rounded-none"
                />
                {newsletterStatus === 'error' && (
                  <p className="text-xs text-red-400 mt-1">Por favor, introduce datos válidos.</p>
                )}
                <button
                  type="submit"
                  disabled={newsletterStatus === 'submitting'}
                  className="bg-white hover:bg-neutral-200 text-black text-[11px] font-semibold tracking-[2.5px] uppercase py-3.5 mt-4 transition-colors duration-300 w-full"
                >
                  {newsletterStatus === 'submitting' ? 'Suscribiendo...' : 'Suscribirme'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Brand & Legal side-by-side */}
        <div className="grid grid-cols-2 gap-12 lg:gap-20 mb-12 pb-12 border-b border-neutral-900 items-end">
          {/* Brand Block */}
          <div>
            <Link href="/builder" className="flex items-center group w-fit mb-6">
              <img 
                src="/img/revita/Logos/Icon + Text Transp.png" 
                alt="Revita" 
                className="h-16 w-auto object-contain bg-transparent invert transition-transform group-hover:scale-103"
              />
            </Link>
            <p className="font-serif font-light text-xl text-white italic mb-6 leading-relaxed">
              Plataforma de desarrollo<br />
              residencial integral.
            </p>
            <div className="text-xs font-light space-y-2 leading-relaxed text-neutral-500">
              <p>Murcia, España</p>
              <p>inversores@gruporevita.com</p>
              <p>+34 XXX XX XX XX</p>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="#" className="text-white hover:text-neutral-300 transition-colors">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-neutral-300 transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-neutral-300 transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-neutral-300 transition-colors">
                  Inversor
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-600 mb-6">
          <div>© {new Date().getFullYear()} Revita, S.L. — Todos los derechos reservados</div>
          <div>
            <Link href="#" className="hover:text-white transition-colors">
              LinkedIn ↗
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-[800px] text-[11px] leading-relaxed text-neutral-700 italic font-light">
          La inversión en proyectos inmobiliarios conlleva riesgos, incluida la posible pérdida total o parcial del capital. 
          La rentabilidad histórica o estimada no garantiza rentabilidades futuras.
        </div>
      </div>
    </footer>
  );
}
