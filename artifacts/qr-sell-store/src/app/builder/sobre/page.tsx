import { Link } from 'wouter';
import { RevitaNav } from '../components/revita-nav';
import { RevitaFooter } from '../components/revita-footer';

export default function SobrePage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-black selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .vision-grid{
              display:grid;grid-template-columns:repeat(3, 1fr);
              gap:0;border-top:1px solid var(--gray-200);border-bottom:1px solid var(--gray-200);
              margin-top:40px;
            }
            .vision-card{
              padding:28px 20px;border-right:1px solid var(--gray-200);
            }
            .vision-card:last-child{border-right:none}
            .vision-num{
              font-family:var(--font-fraunces),serif;font-size:13px;color:var(--gray-500);
              letter-spacing:2px;margin-bottom:20px;display:block;
            }
            .vision-card p{
              font-family:var(--font-fraunces),serif;font-weight:300;font-style:italic;
              font-size:22px;line-height:1.4;color:var(--black);
              letter-spacing:-0.01em;
            }

            .data-grid{
              display:grid;grid-template-columns:repeat(4, 1fr);
              gap:0;border:1px solid var(--gray-300);background:var(--white);
              margin-top:40px;
            }
            .data-item{
              padding:24px 16px;border-right:1px solid var(--gray-200);
            }
            .data-item:last-child{border-right:none}
            .data-num{font-family:var(--font-fraunces),serif;font-size:13px;color:var(--gray-500);letter-spacing:2px;margin-bottom:20px;display:block}
            .data-value{font-family:var(--font-fraunces),serif;font-weight:300;font-size:54px;color:var(--black);line-height:1;margin-bottom:12px;letter-spacing:-0.03em}
            .data-value em{font-style:italic}
            .data-label{font-size:12px;color:var(--gray-700);letter-spacing:2px;text-transform:uppercase;font-weight:500;line-height:1.5}

            .team-grid{display:grid;grid-template-columns:repeat(2, 1fr);gap:40px;margin-top:40px}
            .team-card{position:relative}
            .team-photo{
              width:100%;aspect-ratio:4/5;
              background:
                linear-gradient(135deg, rgba(255,255,255,0.04) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.04) 75%, transparent 75%),
                var(--gray-900);
              background-size:20px 20px;border:1px solid rgba(255,255,255,0.15);
              margin-bottom:24px;display:flex;align-items:center;justify-content:center;
              position:relative;overflow:hidden;
            }
            .team-photo-initials{font-family:var(--font-fraunces),serif;font-size:200px;font-weight:300;color:rgba(255,255,255,0.12);letter-spacing:-0.05em;line-height:1}
            .team-num{position:absolute;top:24px;right:24px;font-family:var(--font-fraunces),serif;font-size:13px;color:rgba(255,255,255,0.4);letter-spacing:2px}
            .team-name{font-family:var(--font-fraunces),serif;font-size:38px;font-weight:400;color:var(--white);margin-bottom:10px;letter-spacing:-0.02em;line-height:1.1}
            .team-role{font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.6);text-transform:uppercase;margin-bottom:20px;font-weight:500}
            .team-bio{font-size:16px;line-height:1.75;color:rgba(255,255,255,0.75);font-weight:300}

            .quote-block{
              padding:70px 0;background:var(--white);position:relative;
            }
            .quote-block blockquote{
              font-family:var(--font-fraunces),serif;font-weight:300;font-style:italic;
              font-size:clamp(28px, 3.5vw, 44px);line-height:1.3;
              color:var(--black);letter-spacing:-0.02em;
              border-left:1px solid var(--black);padding-left:48px;
              max-width:900px;
            }
            .quote-block cite{
              display:block;margin-top:24px;font-family:var(--font-inter),sans-serif;
              font-style:normal;font-size:11px;letter-spacing:3px;
              text-transform:uppercase;color:var(--gray-700);font-weight:500;
            }

            .cta-final{padding:80px 0;text-align:center;background:var(--paper);border-top:1px solid var(--gray-200)}
            .cta-final h2{font-family:var(--font-fraunces),serif;font-weight:300;font-size:clamp(42px, 6vw, 72px);line-height:1.05;margin-bottom:30px;letter-spacing:-0.03em}
            .cta-final h2 em{font-style:italic}

            /* Layout & generic elements from original reference */
            .page-hero{padding:70px 0 50px;border-bottom:1px solid var(--gray-200);position:relative}
            .page-hero-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:40px;align-items:end}
            .page-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--gray-700);margin-bottom:24px}
            .page-eyebrow::before{content:"";width:32px;height:1px;background:var(--black)}
            .page-h1{font-family:var(--font-fraunces),serif;font-weight:300;font-size:clamp(40px, 5.5vw, 78px);line-height:1.02;letter-spacing:-0.03em;color:var(--black);margin-bottom:0}
            .page-h1 em{font-style:italic;font-weight:300}
            .page-intro{border-left:1px solid var(--gray-300);padding-left:48px;padding-bottom:12px}
            .page-intro p{font-size:17px;line-height:1.65;font-weight:300;color:var(--gray-700);margin-bottom:24px}

            .section{padding:70px 0;position:relative}
            .section-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--gray-700);margin-bottom:24px}
            .section-eyebrow::before{content:"";width:32px;height:1px;background:var(--black)}
            .section-title{font-family:var(--font-fraunces),serif;font-weight:300;font-size:clamp(36px, 4.5vw, 64px);line-height:1.05;color:var(--black);margin-bottom:24px;letter-spacing:-0.025em;max-width:900px}
            .section-title em{font-style:italic;font-weight:300}
            .section-subtitle{font-size:18px;color:var(--gray-700);max-width:680px;line-height:1.65;margin-bottom:40px;font-weight:300}

            .section-label{position:absolute;top:24px;right:40px;z-index:5;background:transparent;color:var(--gray-500);padding:0;font-size:10px;font-weight:500;letter-spacing:3px;text-transform:uppercase;display:flex;align-items:center;gap:10px}
            .section-label::before{content:"";width:24px;height:1px;background:var(--gray-300)}
            .section-label.on-dark{color:rgba(255,255,255,0.5)}
            .section-label.on-dark::before{background:rgba(255,255,255,0.3)}

            .dark{background:var(--black);color:var(--white)}
            .dark .section-title{color:var(--white)}
            .dark .section-subtitle{color:rgba(255,255,255,0.65)}
            .dark .section-eyebrow{color:rgba(255,255,255,0.6)}
            .dark .section-eyebrow::before{background:var(--white)}

            @media(max-width:900px){
              .vision-grid, .data-grid, .team-grid{grid-template-columns:1fr;gap:0}
              .team-grid{gap:24px}
              .vision-card, .data-item{border-right:none;border-bottom:1px solid var(--gray-200)}
              .vision-card:last-child, .data-item:last-child{border-bottom:none}
              .page-hero-grid{grid-template-columns:1fr;gap:24px}
              .page-intro{border-left:none;border-top:1px solid var(--gray-300);padding-left:0;padding-top:24px}
              .section, .page-hero{padding:40px 0}
            }
          `,
        }}
      />

      <RevitaNav />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="page-eyebrow">Sobre Revita</span>
              <h1 className="page-h1 serif">
                Plataforma de desarrollo<br />residencial <em>integral</em>.
              </h1>
            </div>
            <div className="page-intro">
              <p>
                Transformamos activos residenciales en Murcia y Levante y conectamos a inversores cualificados con
                oportunidades de rehabilitación cuidadosamente seleccionadas. Construimos la inversión sobre un margen de
                seguridad real.
              </p>
              <Link href="/builder/contacto" className="btn btn-primary">
                Habla con nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER IMAGE */}
      <section className="w-full relative h-[90vh] md:h-[130vh] bg-neutral-100 overflow-hidden border-b border-[#E5E5E5]">
        <img
          src="/img/revita/spacejoy-c0JoR_-2x3E-unsplash.jpg"
          alt="Revita Espacio"
          className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0"
          style={{ objectPosition: '50% 90%' }}
        />
      </section>

      <section className="section">
        <div className="container">
          <span className="section-eyebrow">Nuestra visión</span>
          <h2 className="section-title serif">
            Tres principios<br /><em>no negociables</em>.
          </h2>

          <div className="vision-grid">
            <div className="vision-card">
              <p>Aportar al mercado vivienda rehabilitada a precios razonables, contribuyendo a la regeneración del parque residencial español.</p>
            </div>
            <div className="vision-card">
              <p>Construir relaciones duraderas con nuestros inversores, basadas en honestidad, transparencia y alineación de intereses real.</p>
            </div>
            <div className="vision-card">
              <p>Generar retornos ajustados al riesgo superiores a la media del mercado, mediante un proceso vertical y profesional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <span className="section-eyebrow">Revita en datos</span>
          <h2 className="section-title serif">
            Cifras que <em>respaldan</em><br />el modelo.
          </h2>

          <div className="data-grid">
            <div className="data-item">
              <div className="data-value">+30</div>
              <div className="data-label">Activos analizados<br />al año</div>
            </div>
            <div className="data-item">
              <div className="data-value serif"><em>Murcia</em></div>
              <div className="data-label">Foco geográfico:<br />Murcia y Levante</div>
            </div>
            <div className="data-item">
              <div className="data-value">100%</div>
              <div className="data-label">Plataforma integrada<br />verticalmente</div>
            </div>
            <div className="data-item">
              <div className="data-value">SPV</div>
              <div className="data-label">Vehículo dedicado<br />por proyecto</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <span className="section-eyebrow">El equipo detrás de Revita</span>
          <h2 className="section-title serif">
            Experiencia, rigor<br />y <em>compromiso personal</em>.
          </h2>
          <p className="section-subtitle">
            Solo lanzamos proyectos en los que nosotros mismos invertimos. No buscamos volumen, buscamos excelencia.
          </p>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">
                <span className="team-num">— 01 / 02</span>
                <span className="team-photo-initials serif">JL</span>
              </div>
              <h3 className="team-name serif">John Lomax</h3>
              <div className="team-role">Co-fundador · CFO</div>
              <p className="team-bio">
                Tras años como director financiero en empresas cotizadas, John aprendió que los grandes resultados nacen del
                rigor. En Revita aporta esa mentalidad analítica para que cada inversión sea sólida. No busca el control por
                el control, sino la precisión necesaria para que los objetivos del inversor se cumplan sin sobresaltos.
              </p>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <span className="team-num">— 02 / 02</span>
                <span className="team-photo-initials serif">DG</span>
              </div>
              <h3 className="team-name serif">David Gálvez</h3>
              <div className="team-role">Co-fundador · COO</div>
              <p className="team-bio">
                Obsesionado con el detalle. Implacable en la ejecución. David lidera desde el centro de la acción,
                supervisando cada fase hasta que el resultado es perfecto. Mientras otros ven problemas, él construye
                soluciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-block">
        <div className="container">
          <blockquote>
            &quot;Solo lanzamos proyectos en los que nosotros mismos invertimos. No buscamos volumen, buscamos excelencia.
            Cada operación es seleccionada, analizada y ejecutada con el mismo rigor que si fuera nuestro único proyecto del
            año.&quot;
            <cite>— Equipo fundador, Revita</cite>
          </blockquote>
        </div>
      </section>

      <section className="cta-final">
        <div className="container-narrow">
          <h2 className="serif">¿<em>Hablamos</em>?</h2>
          <Link href="/builder/contacto" className="btn btn-primary">
            Habla con un asesor →
          </Link>
        </div>
      </section>

      <RevitaFooter />
    </main>
  );
}
