'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RevitaNav } from '../components/revita-nav';
import { RevitaFooter } from '../components/revita-footer';

export default function ContactoPage() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [schedule, setSchedule] = useState('Mañanas');
  const [message, setMessage] = useState('');
  const [policy, setPolicy] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!policy) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setPolicy(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-black selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .contact-hero{
              padding:70px 0 40px;text-align:left;
              border-bottom:1px solid var(--gray-200);
            }
            .contact-hero h1{
              font-family:var(--font-fraunces),serif;font-weight:300;
              font-size:clamp(56px, 8vw, 120px);line-height:0.95;letter-spacing:-0.04em;
              color:var(--black);margin-bottom:24px;
            }
            .contact-hero h1 em{font-style:italic}
            .contact-hero p{
              font-size:19px;color:var(--gray-700);max-width:680px;line-height:1.6;font-weight:300;
            }

            .contact-grid{
              display:grid;grid-template-columns:1.3fr 1fr;gap:40px;
              padding:60px 0;border-bottom:1px solid var(--gray-200);
            }
            .contact-form-wrap h2{
              font-family:var(--font-fraunces),serif;font-weight:300;font-size:36px;
              color:var(--black);margin-bottom:24px;letter-spacing:-0.02em;line-height:1.1;
            }
            .contact-form-wrap h2 em{font-style:italic}

            .contact-info{padding-left:48px;border-left:1px solid var(--gray-200)}
            .contact-info-block{margin-bottom:24px}
            .contact-info-label{
              font-size:10px;font-weight:600;letter-spacing:2.5px;
              text-transform:uppercase;color:var(--gray-500);margin-bottom:14px;
            }
            .contact-info-value{
              font-family:var(--font-fraunces),serif;font-size:22px;font-weight:400;
              color:var(--black);line-height:1.35;letter-spacing:-0.01em;
            }
            .contact-info-value a{color:inherit;text-decoration:none;border-bottom:1px solid var(--gray-300);padding-bottom:2px}
            .contact-info-value a:hover{border-bottom-color:var(--black)}

            .trust-strip{
              background:var(--paper);padding:40px 0;border-bottom:1px solid var(--gray-200);
            }
            .trust-grid{
              display:grid;grid-template-columns:repeat(3, 1fr);gap:0;
              border:1px solid var(--gray-300);background:var(--white);
            }
            .trust-item{
              padding:20px 16px;border-right:1px solid var(--gray-200);
              display:flex;align-items:flex-start;gap:20px;
            }
            .trust-item:last-child{border-right:none}
            .trust-icon{
              width:32px;height:32px;flex-shrink:0;
              border:1px solid var(--black);border-radius:50%;
              display:flex;align-items:center;justify-content:center;
              font-size:14px;color:var(--black);
            }
            .trust-text{
              font-family:var(--font-fraunces),serif;font-weight:400;font-style:italic;
              font-size:17px;line-height:1.35;color:var(--black);
              letter-spacing:-0.005em;
            }

            /* Layout & generic elements from original reference */
            .page-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--gray-700);margin-bottom:24px}
            .page-eyebrow::before{content:"";width:32px;height:1px;background:var(--black)}

            .section-label{position:absolute;top:24px;right:40px;z-index:5;background:transparent;color:var(--gray-500);padding:0;font-size:10px;font-weight:500;letter-spacing:3px;text-transform:uppercase;display:flex;align-items:center;gap:10px}
            .section-label::before{content:"";width:24px;height:1px;background:var(--gray-300)}

            /* FORMULARIO CONTACT BASE */
            .contact-form{
              display:grid;grid-template-columns:1fr 1fr;gap:24px;
              max-width:880px;margin:0 auto;
            }
            .contact-form .full{grid-column:1 / -1}
            .contact-form label{
              display:block;font-size:10px;font-weight:500;letter-spacing:2px;
              text-transform:uppercase;color:var(--gray-700);margin-bottom:8px;
            }
            .contact-form input,
            .contact-form select,
            .contact-form textarea{
              width:100%;background:transparent;border:none;
              border-bottom:1px solid var(--gray-300);
              padding:12px 0;font-size:15px;font-family:inherit;font-weight:300;
              color:var(--black);border-radius:0;
            }
            .contact-form input:focus,
            .contact-form select:focus,
            .contact-form textarea:focus{outline:none;border-bottom-color:var(--black)}
            .contact-form textarea{resize:vertical;min-height:100px}
            .contact-form .check-row{
              display:flex;align-items:flex-start;gap:12px;font-size:13px;
              color:var(--gray-700);font-weight:300;line-height:1.6;
            }
            .contact-form .check-row input{width:auto;margin-top:4px}
            .contact-form .check-row a{color:var(--black);text-decoration:underline}
            .contact-form .submit-row{text-align:left;margin-top:16px}

            @media(max-width:900px){
              .contact-grid{grid-template-columns:1fr;gap:24px}
              .contact-info{border-left:none;border-top:1px solid var(--gray-200);padding-left:0;padding-top:24px}
              .trust-grid{grid-template-columns:1fr}
              .trust-item{border-right:none;border-bottom:1px solid var(--gray-200)}
              .trust-item:last-child{border-bottom:none}
              .contact-form{grid-template-columns:1fr;gap:16px}
            }
          `,
        }}
      />

      <RevitaNav />

      {/* HERO */}
      <section className="contact-hero">
        <span className="section-label">7.1 — Header</span>
        <div className="container">
          <span className="page-eyebrow">Habla con un asesor</span>
          <h1 className="serif"><em>Hablemos</em>.</h1>
          <p>Cuéntanos qué buscas y te informamos de las oportunidades de inversión disponibles que mejor encajen con tu perfil. Sin compromiso.</p>
        </div>
      </section>

      {/* FORMULARIO + INFO */}
      <section style={{ position: 'relative' }}>
        <span className="section-label">7.2 — Formulario y contacto directo</span>
        <div className="container">
          <div className="contact-grid">

            <div className="contact-form-wrap">
              <h2 className="serif">Cuéntanos<br /><em>quién eres</em>.</h2>
              
              {status === 'success' ? (
                <div className="bg-neutral-50 border border-neutral-200 p-8 text-center max-w-[880px] mx-auto">
                  <span className="text-3xl mb-4 block text-black">✓</span>
                  <h3 className="text-black text-lg font-serif mb-2">¡Mensaje enviado con éxito!</h3>
                  <p className="text-sm text-neutral-650 font-light leading-relaxed">
                    Hemos recibido tus datos correctamente. Uno de nuestros asesores se pondrá en contacto contigo en el horario preferido.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div>
                    <label>Nombre *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                    />
                  </div>
                  <div>
                    <label>Apellidos *</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                    />
                  </div>
                  <div>
                    <label>Teléfono *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                    />
                  </div>
                  <div>
                    <label>Correo electrónico *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                    />
                  </div>
                  <div className="full">
                    <label>Horario preferente de contacto</label>
                    <select
                      value={schedule}
                      onChange={(e) => setSchedule(e.target.value)}
                    >
                      <option value="Mañanas">Mañanas</option>
                      <option value="Tardes">Tardes</option>
                      <option value="Indistinto">Indistinto</option>
                    </select>
                  </div>
                  <div className="full">
                    <label>Mensaje</label>
                    <textarea
                      placeholder="¿Hay algo que quieras contarnos antes de la llamada?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="full check-row">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={policy}
                      onChange={(e) => setPolicy(e.target.checked)}
                      className="accent-black w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="privacy" style={{ margin: 0, letterSpacing: 0, textTransform: 'none', fontSize: '13px', color: 'var(--gray-700)', fontWeight: 305 }}>
                      He leído y acepto la <Link href="#">Política de Privacidad</Link>. *
                    </label>
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-500 mt-1 col-span-2">Por favor, introduce un correo electrónico válido.</p>
                  )}

                  <div className="full submit-row">
                    <button type="submit" disabled={status === 'submitting'} className="btn btn-primary">
                      {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje →'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="contact-info-block">
                <div className="contact-info-label">Dirección</div>
                <div className="contact-info-value serif">Murcia,<br />España</div>
              </div>
              <div className="contact-info-block">
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value serif">
                  <a href="mailto:inversores@gruporevita.com">inversores@gruporevita.com</a>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="contact-info-label">Teléfono</div>
                <div className="contact-info-value serif">
                  <a href="tel:+34">+34 XXX XX XX XX</a>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="contact-info-label">Horario</div>
                <div className="contact-info-value serif">Lunes a viernes<br />9:00 — 18:00</div>
              </div>
              <div className="contact-info-block">
                <div className="contact-info-label">Social</div>
                <div className="contact-info-value serif">
                  <Link href="#">LinkedIn ↗</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <span className="section-label">7.3 — Sello de confianza</span>
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div className="trust-text">Respondemos en menos de 24 horas laborables.</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div className="trust-text">Trato directo con los fundadores.</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div className="trust-text">Información clara y sin presión comercial.</div>
            </div>
          </div>
        </div>
      </section>

      <RevitaFooter />
    </main>
  );
}
