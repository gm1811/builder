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
    <footer id="contacto" className="bg-[#0A0A0A] text-neutral-400 py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 pb-20 border-b border-neutral-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/builder" className="flex items-center gap-3 mb-8 group w-fit">
              <div className="w-9 h-9 bg-white flex items-center justify-center font-serif text-xl font-normal text-black italic transition-transform group-hover:scale-105">
                R
              </div>
              <span className="font-serif font-normal text-2xl tracking-[4px] text-white">
                REVITA
              </span>
            </Link>
            <p className="font-serif font-light text-xl text-white italic mb-8 leading-relaxed">
              Plataforma de desarrollo<br />
              residencial integral.
            </p>
            <div className="text-xs font-light space-y-2 leading-relaxed text-neutral-500">
              <p>Murcia, España</p>
              <p>inversores@revita.es</p>
              <p>+34 XXX XX XX XX</p>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-8">
              Inversiones
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link href="#" className="text-white hover:text-neutral-300 transition-colors">
                  Transformación residencial
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-neutral-300 transition-colors">
                  Carteras Patrimonialistas
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="text-white hover:text-neutral-300 transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-white hover:text-neutral-300 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-neutral-300 transition-colors">
                  Sobre Revita
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-8">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-light">
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

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-8">
              Newsletter
            </h4>
            <p className="text-sm font-light text-neutral-500 leading-relaxed mb-6">
              Recibe las próximas oportunidades antes que nadie.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="bg-neutral-900 border border-neutral-850 p-6 text-center">
                <span className="text-xl mb-2 block text-white">✓</span>
                <h5 className="text-white text-sm font-medium mb-1">¡Suscrito con éxito!</h5>
                <p className="text-xs text-neutral-500 font-light">
                  Te avisaremos en cuanto publiquemos nuevas oportunidades.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
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
                  className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-600 focus:outline-none rounded-none"
                />
                {newsletterStatus === 'error' && (
                  <p className="text-xs text-red-400 mt-1">Por favor, introduce datos válidos.</p>
                )}
                <button
                  type="submit"
                  disabled={newsletterStatus === 'submitting'}
                  className="bg-white hover:bg-neutral-200 text-black text-[11px] font-semibold tracking-[2.5px] uppercase py-3.5 mt-4 transition-colors duration-300"
                >
                  {newsletterStatus === 'submitting' ? 'Suscribiendo...' : 'Suscribirme'}
                </button>
              </form>
            )}

            {/* Contact Form */}
            <div className="mt-12 pt-12 border-t border-neutral-900">
              <h4 className="text-[10px] font-semibold tracking-[3px] uppercase text-neutral-500 mb-8">
                Contacto
              </h4>
              
              {contactStatus === 'success' ? (
                <div className="bg-neutral-900 border border-neutral-850 p-6 text-center">
                  <span className="text-xl mb-2 block text-white">✓</span>
                  <h5 className="text-white text-sm font-medium mb-1">¡Mensaje enviado!</h5>
                  <p className="text-xs text-neutral-500 font-light">
                    Gracias por ponerte en contacto. Te responderemos lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={contactName}
                    onChange={(e) => {
                      setContactName(e.target.value);
                      if (contactStatus === 'error') setContactStatus('idle');
                    }}
                    required
                    className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-600 focus:outline-none rounded-none"
                  />
                  <input
                    type="text"
                    placeholder="Apellidos"
                    value={contactLastName}
                    onChange={(e) => {
                      setContactLastName(e.target.value);
                      if (contactStatus === 'error') setContactStatus('idle');
                    }}
                    required
                    className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-600 focus:outline-none rounded-none"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={contactPhone}
                    onChange={(e) => {
                      setContactPhone(e.target.value);
                      if (contactStatus === 'error') setContactStatus('idle');
                    }}
                    required
                    className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-600 focus:outline-none rounded-none"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={contactEmail}
                    onChange={(e) => {
                      setContactEmail(e.target.value);
                      if (contactStatus === 'error') setContactStatus('idle');
                    }}
                    required
                    className="bg-transparent border-b border-neutral-800 focus:border-white py-3 text-sm font-light text-white placeholder-neutral-600 focus:outline-none rounded-none"
                  />
                  
                  <label className="flex items-start gap-3 cursor-pointer text-xs font-light text-neutral-500 hover:text-neutral-400 mt-3 select-none">
                    <input
                      type="checkbox"
                      required
                      checked={contactPolicy}
                      onChange={(e) => setContactPolicy(e.target.checked)}
                      className="mt-1 rounded-none border-neutral-800 accent-white bg-transparent focus:ring-0 focus:outline-none cursor-pointer w-4 h-4 shrink-0"
                    />
                    <span>He leído y acepto la política de privacidad</span>
                  </label>

                  {contactStatus === 'error' && (
                    <p className="text-xs text-red-400 mt-1">Por favor, introduce un correo electrónico válido.</p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={contactStatus === 'submitting'}
                    className="bg-white hover:bg-neutral-200 text-black text-[11px] font-semibold tracking-[2.5px] uppercase py-3.5 mt-4 transition-colors duration-300"
                  >
                    {contactStatus === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
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
