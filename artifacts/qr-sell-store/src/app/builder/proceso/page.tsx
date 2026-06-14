import { Link } from 'wouter';
import { RevitaNav } from '../components/revita-nav';
import { RevitaFooter } from '../components/revita-footer';

export default function ProcesoPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-black selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .timeline{margin-top:40px;position:relative}
            .timeline::before{
              content:"";position:absolute;left:50px;top:80px;bottom:80px;
              width:1px;background:var(--gray-200);
            }
            .step{
              display:grid;grid-template-columns:120px 1fr;gap:48px;
              padding:48px 0;border-bottom:1px solid var(--gray-200);
              position:relative;
            }
            .step:last-child{border-bottom:none}
            .step-num{
              font-family:var(--font-fraunces),serif;font-size:14px;
              color:var(--gray-500);letter-spacing:3px;
              position:relative;padding-left:0;
            }
            .step-num::before{
              content:"";position:absolute;left:46px;top:4px;
              width:10px;height:10px;background:var(--white);
              border:2px solid var(--black);border-radius:50%;z-index:2;
            }
            .step-content h3{
              font-family:var(--font-fraunces),serif;font-weight:400;
              font-size:32px;color:var(--black);
              margin-bottom:18px;line-height:1.1;letter-spacing:-0.015em;
            }
            .step-content h3 em{font-style:italic}
            .step-content p{
              font-size:16px;color:var(--gray-700);line-height:1.7;
              font-weight:300;max-width:680px;
            }

             .intro-text{padding:60px 0;background:var(--paper);border-top:1px solid var(--gray-200)}
            .intro-text p{
              font-family:var(--font-fraunces),serif;font-weight:300;font-style:italic;
              font-size:clamp(22px, 2.5vw, 32px);line-height:1.45;
              color:var(--ink);letter-spacing:-0.01em;max-width:880px;
            }

            .contact-section{padding:70px 0;background:var(--white);border-top:1px solid var(--gray-200)}

            /* Layout & generic elements from original reference */
            .page-hero{padding:70px 0 50px;border-bottom:1px solid var(--gray-200);position:relative}
            .page-hero-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:80px;align-items:end}
            .page-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--gray-700);margin-bottom:48px}
            .page-eyebrow::before{content:"";width:32px;height:1px;background:var(--black)}
            .page-h1{font-family:var(--font-fraunces),serif;font-weight:300;font-size:clamp(40px, 5.5vw, 78px);line-height:1.02;letter-spacing:-0.03em;color:var(--black);margin-bottom:0}
            .page-h1 em{font-style:italic;font-weight:300}
            .page-h1 .underlined{border-bottom:2px solid var(--black);padding-bottom:4px}
            .page-intro{border-left:1px solid var(--gray-300);padding-left:48px;padding-bottom:12px}
            .page-intro p{font-size:17px;line-height:1.65;font-weight:300;color:var(--gray-700);margin-bottom:32px}

            .section{padding:70px 0;position:relative}
            .section-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--gray-700);margin-bottom:32px}
            .section-eyebrow::before{content:"";width:32px;height:1px;background:var(--black)}
            .section-title{font-family:var(--font-fraunces),serif;font-weight:300;font-size:clamp(36px, 4.5vw, 64px);line-height:1.05;color:var(--black);margin-bottom:32px;letter-spacing:-0.025em;max-width:900px}
            .section-title em{font-style:italic;font-weight:300}
            
            .section-label{position:absolute;top:24px;right:40px;z-index:5;background:transparent;color:var(--gray-500);padding:0;font-size:10px;font-weight:500;letter-spacing:3px;text-transform:uppercase;display:flex;align-items:center;gap:10px}
            .section-label::before{content:"";width:24px;height:1px;background:var(--gray-300)}

            @media (max-width:900px){
              .step{grid-template-columns:1fr;gap:16px}
              .timeline::before{display:none}
              .step-num::before{display:none}
              .page-hero-grid{grid-template-columns:1fr;gap:48px}
              .page-intro{border-left:none;border-top:1px solid var(--gray-300);padding-left:0;padding-top:32px}
              .section, .page-hero{padding:40px 0}
            }
          `,
        }}
      />

      <RevitaNav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <span className="section-label">3.1 — Header</span>
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="page-eyebrow">Proceso de inversión</span>
              <h1 className="page-h1 serif">
                Un proceso<br /><em>verticalizado</em>,<br />eficiente y <span className="underlined">controlado</span>.
              </h1>
            </div>
            <div className="page-intro">
              <p>
                Gestionamos cada etapa del ciclo de inversión inmobiliaria: desde la identificación del activo hasta la
                comercialización. Con un enfoque vertical, controlamos los riesgos y optimizamos cada decisión para maximizar
                la rentabilidad del inversor.
              </p>
              <Link href="/builder/contacto" className="btn btn-primary">
                Habla con un asesor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="intro-text">
        <span className="section-label">3.2 — Introducción</span>
        <div className="container-text">
          <p>
            Cada operación recorre los <strong style={{ color: 'var(--black)', fontWeight: 500, fontStyle: 'normal' }}>mismos seis pasos</strong>. Sin atajos. Sin matices. Es el rigor del proceso lo que hace predecible el resultado.
          </p>
        </div>
      </section>

      {/* TIMELINE 6 PASOS */}
      <section className="section">
        <span className="section-label">3.3 — Pasos</span>
        <div className="container">
          <span className="section-eyebrow">Cómo trabajamos</span>
          <h2 className="section-title serif">
            Nuestro proceso<br /><em>paso a paso</em>.
          </h2>

          <div className="timeline">
            <div className="step">
              <div className="step-num">— 01 / 06</div>
              <div className="step-content">
                <h3 className="serif">Identificación de la <em>oportunidad</em></h3>
                <p>
                  Localizamos activos en zonas con demanda acreditada (Murcia y Levante). Nuestro equipo evalúa decenas de
                  inmuebles cada mes y solo elevamos al siguiente paso aquellos con un margen de seguridad real.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">— 02 / 06</div>
              <div className="step-content">
                <h3 className="serif">Análisis y <em>due diligence</em></h3>
                <p>
                  Análisis técnico (estado del inmueble, presupuesto de obra), legal (cargas, situación registral, licencias) y
                  financiero (precio compra, costes, salida objetivo). Solo avanzamos con los proyectos que cumplen nuestros
                  criterios.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">— 03 / 06</div>
              <div className="step-content">
                <h3 className="serif">Estructuración de la <em>inversión</em></h3>
                <p>
                  Constituimos un SPV (Sociedad de Propósito Especial) por proyecto. Definimos el modo de inversión: plazo,
                  condiciones de salida y garantías aplicables al proyecto.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">— 04 / 06</div>
              <div className="step-content">
                <h3 className="serif">Captación del <em>capital</em></h3>
                <p>
                  El proyecto se publica en la plataforma con toda la documentación (KIID, dossier, valoración independiente). Los
                  inversores suscriben digitalmente, con firma electrónica avanzada.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">— 05 / 06</div>
              <div className="step-content">
                <h3 className="serif">Ejecución de <em>obra</em></h3>
                <p>
                  Desembolso por tramos según avance de obra. Reporting mensual al inversor con fotos, presupuestos y desviaciones
                  reales. Sin sorpresas.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">— 06 / 06</div>
              <div className="step-content">
                <h3 className="serif">Venta y <em>devolución</em></h3>
                <p>
                  Comercialización del activo terminado. Con la venta, el SPV devuelve el principal más los intereses al
                  inversor. Cerramos el ciclo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contact-section">
        <span className="section-label">3.4 — Contacto</span>
        <div className="container-text" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>¿Tienes preguntas?</span>
          <h2 className="section-title serif" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Reserva una llamada<br /><em>privada</em> con un asesor.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--gray-700)', maxWidth: '560px', margin: '0 auto 48px', lineHeight: 1.65, fontWeight: 300 }}>
            30 minutos. Sin compromiso. Te explicamos en detalle cualquier paso del proceso y las próximas oportunidades disponibles.
          </p>
          <Link href="/builder/contacto" className="btn btn-primary">
            Habla con un asesor →
          </Link>
        </div>
      </section>

      <RevitaFooter />
    </main>
  );
}
