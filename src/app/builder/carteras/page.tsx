import Link from 'next/link';
import { RevitaNav } from '../components/revita-nav';
import { RevitaFooter } from '../components/revita-footer';

export default function CarterasPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-black selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* ===== Bloque "Qué es" — texto editorial ===== */
            .concept-block{padding:70px 0;background:var(--paper);border-bottom:1px solid var(--gray-200)}
            .concept-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start}
            .concept-title{position:sticky;top:120px}
            .concept-title h2{
              font-family:var(--font-fraunces),serif;font-weight:300;
              font-size:clamp(36px, 4.5vw, 56px);line-height:1.05;
              color:var(--black);letter-spacing:-0.025em;
            }
            .concept-title h2 em{font-style:italic}
            .concept-text p{
              font-size:18px;line-height:1.75;color:var(--ink);font-weight:300;
              margin-bottom:24px;
            }
            .concept-text p:first-of-type::first-letter{
              font-family:var(--font-fraunces),serif;font-style:italic;font-weight:300;
              font-size:72px;float:left;line-height:0.85;
              margin:8px 14px 0 0;color:var(--black);
            }
            .concept-text strong{color:var(--black);font-weight:500;font-style:normal}

            /* ===== Tabla comparativa Transformación vs Patrimonio ===== */
            .compare-models{background:var(--white)}
            .compare-models-table{
              border-top:1px solid var(--black);border-bottom:1px solid var(--black);
              max-width:1200px;margin:40px auto 0;
            }
            .compare-models-row{
              display:grid;grid-template-columns:0.7fr 1.4fr 1.4fr;
              border-bottom:1px solid var(--gray-200);
            }
            .compare-models-row:last-child{border-bottom:none}
            .compare-models-head{border-bottom:1px solid var(--black)}
            .compare-models-head > div{
              padding:32px 28px;
              font-family:var(--font-fraunces),serif;font-size:22px;font-weight:400;
              color:var(--black);letter-spacing:-0.01em;
            }
            .compare-models-head > div:first-child{
              font-family:var(--font-inter),sans-serif;font-size:11px;
              letter-spacing:3px;text-transform:uppercase;color:var(--gray-500);font-weight:500;
            }
            .compare-models-head em{font-style:italic}
            .compare-models-cell{
              padding:28px;font-size:15px;line-height:1.65;font-weight:300;
            }
            .compare-models-cell.label{
              font-family:var(--font-fraunces),serif;font-weight:400;font-style:italic;
              color:var(--black);font-size:18px;background:var(--paper);
            }
            .compare-models-cell.val{color:var(--ink);position:relative;padding-left:56px}
            .compare-models-cell.val::before{
              content:"";position:absolute;left:28px;top:34px;
              width:8px;height:8px;border-radius:50%;background:var(--black);
            }

            /* ===== Beneficios grid 2x2 ===== */
            .benefits-grid{
              display:grid;grid-template-columns:repeat(2, 1fr);
              gap:0;border:1px solid var(--gray-300);background:var(--white);
              margin-top:40px;
            }
            .benefit{
              padding:32px 28px;border-right:1px solid var(--gray-200);
              border-bottom:1px solid var(--gray-200);
              transition:background 0.3s ease;
            }
            .benefit:nth-child(2n){border-right:none}
            .benefit:nth-last-child(-n+2){border-bottom:none}
            .benefit:hover{background:var(--paper)}
            .benefit-icon{
              width:48px;height:48px;display:flex;align-items:center;justify-content:center;
              border:1px solid var(--black);border-radius:50%;
              margin-bottom:32px;color:var(--black);
            }
            .benefit-icon svg{width:22px;height:22px}
            .benefit-num{
              font-family:var(--font-fraunces),serif;font-size:13px;color:var(--gray-500);
              letter-spacing:2px;margin-bottom:12px;display:block;
            }
            .benefit h3{
              font-family:var(--font-fraunces),serif;font-weight:400;font-size:30px;
              color:var(--black);margin-bottom:20px;line-height:1.1;letter-spacing:-0.015em;
            }
            .benefit h3 em{font-style:italic}
            .benefit p{
              font-size:16px;color:var(--gray-700);line-height:1.7;font-weight:300;
            }

            /* ===== Tipologías ===== */
            .types{background:var(--paper)}
            .types-list{margin-top:40px}
            .type-row{
              display:grid;grid-template-columns:140px 1fr 200px;gap:48px;
              padding:24px 0;border-bottom:1px solid var(--gray-200);
              align-items:center;transition:padding 0.3s ease;
            }
            .type-row:first-child{border-top:1px solid var(--gray-200)}
            .type-row:hover{padding-left:24px}
            .type-num{
              font-family:var(--font-fraunces),serif;font-size:15px;color:var(--gray-500);
              letter-spacing:3px;
            }
            .type-content h3{
              font-family:var(--font-fraunces),serif;font-weight:400;font-size:28px;
              color:var(--black);margin-bottom:10px;line-height:1.15;letter-spacing:-0.015em;
            }
            .type-content h3 em{font-style:italic}
            .type-content p{
              font-size:15px;color:var(--gray-700);line-height:1.7;
              font-weight:300;max-width:640px;
            }
            .type-ticket{
              text-align:right;font-family:var(--font-fraunces),serif;font-size:14px;
              color:var(--gray-500);letter-spacing:1.5px;font-style:italic;
            }

            /* ===== Proceso 5 pasos horizontal ===== */
            .process-horizontal{margin-top:40px}
            .process-track{
              display:grid;grid-template-columns:repeat(5, 1fr);gap:0;
              border-top:1px solid var(--gray-200);border-bottom:1px solid var(--gray-200);
            }
            .process-step{
              padding:24px 12px;border-right:1px solid var(--gray-200);
              position:relative;
            }
            .process-step:last-child{border-right:none}
            .process-step-num{
              font-family:var(--font-fraunces),serif;font-size:48px;font-weight:300;
              color:var(--gray-300);line-height:1;margin-bottom:32px;letter-spacing:-0.04em;
              transition:color 0.3s ease;
            }
            .process-step:hover .process-step-num{color:var(--black)}
            .process-step h4{
              font-family:var(--font-fraunces),serif;font-weight:400;font-size:18px;
              color:var(--black);margin-bottom:14px;line-height:1.25;letter-spacing:-0.01em;
            }
            .process-step h4 em{font-style:italic}
            .process-step p{
              font-size:14px;color:var(--gray-700);line-height:1.65;font-weight:300;
            }

            /* ===== Quote / posicionamiento ===== */
            .quote-block{
              padding:70px 0;background:var(--white);position:relative;
              border-top:1px solid var(--gray-200);border-bottom:1px solid var(--gray-200);
            }
            .quote-block blockquote{
              font-family:var(--font-fraunces),serif;font-weight:300;font-style:italic;
              font-size:clamp(26px, 3.2vw, 40px);line-height:1.3;
              color:var(--black);letter-spacing:-0.02em;
              border-left:1px solid var(--black);padding-left:48px;
              max-width:900px;
            }
            .quote-block cite{
              display:block;margin-top:32px;font-family:var(--font-inter),sans-serif;
              font-style:normal;font-size:11px;letter-spacing:3px;
              text-transform:uppercase;color:var(--gray-700);font-weight:500;
            }

            /* ===== CTA Final ===== */
            .cta-final{
              padding:80px 0;text-align:center;background:var(--black);color:var(--white);
            }
            .cta-final h2{
              font-family:var(--font-fraunces),serif;font-weight:300;color:var(--white);
              font-size:clamp(40px, 5.5vw, 72px);line-height:1.05;
              margin-bottom:32px;letter-spacing:-0.03em;
            }
            .cta-final h2 em{font-style:italic}
            .cta-final p{
              font-size:18px;color:rgba(255,255,255,0.7);max-width:560px;
              margin:0 auto 48px;line-height:1.65;font-weight:300;
            }

            /* ===== Layout & generic elements from original reference ===== */
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
            .section-subtitle{font-size:18px;color:var(--gray-700);max-width:680px;line-height:1.65;margin-bottom:80px;font-weight:300}

            .section-label{position:absolute;top:24px;right:40px;z-index:5;background:transparent;color:var(--gray-500);padding:0;font-size:10px;font-weight:500;letter-spacing:3px;text-transform:uppercase;display:flex;align-items:center;gap:10px}
            .section-label::before{content:"";width:24px;height:1px;background:var(--gray-300)}
            .section-label.on-dark{color:rgba(255,255,255,0.5)}
            .section-label.on-dark::before{background:rgba(255,255,255,0.3)}

            @media (max-width:900px){
              .concept-grid{grid-template-columns:1fr;gap:32px}
              .concept-title{position:static}
              .compare-models-row{grid-template-columns:1fr}
              .compare-models-head{display:none}
              .compare-models-cell.label{background:var(--black);color:var(--white);padding:18px 24px;font-size:14px;letter-spacing:1px}
              .benefits-grid{grid-template-columns:1fr}
              .benefit{border-right:none}
              .benefit:nth-last-child(-n+2){border-bottom:1px solid var(--gray-200)}
              .benefit:last-child{border-bottom:none}
              .type-row{grid-template-columns:1fr;gap:16px;padding:32px 0}
              .type-row:hover{padding-left:0}
              .type-ticket{text-align:left}
              .process-track{grid-template-columns:1fr}
              .process-step{border-right:none;border-bottom:1px solid var(--gray-200)}
              .process-step:last-child{border-bottom:none}
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
        <span className="section-label">2B.1 — Header</span>
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="page-eyebrow">Carteras Patrimonialistas</span>
              <h1 className="page-h1 serif">
                Activos residenciales<br />que tu <em>patrimonio</em><br /><span className="underlined">sostiene</span> en el tiempo.
              </h1>
            </div>
            <div className="page-intro">
              <p>
                Identificamos y estructuramos oportunidades de inversión residencial pensadas para mantenerse en cartera.
                Rentas estables, revalorización del capital y un activo tangible que protege tu patrimonio.
              </p>
              <Link href="/builder/contacto" className="btn btn-primary">
                Habla con un asesor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* §2B.2 — QUÉ ES UNA CARTERA PATRIMONIALISTA */}
      <section className="concept-block">
        <span className="section-label">2B.2 — Qué es una cartera patrimonialista</span>
        <div className="container">
          <div className="concept-grid">
            <div className="concept-title">
              <span className="section-eyebrow">El concepto</span>
              <h2 className="serif">
                El inmueble<br />como <em>patrimonio</em>,<br />no como producto.
              </h2>
            </div>
            <div className="concept-text">
              <p>
                Una cartera patrimonialista no busca la rotación del activo, sino su <strong>permanencia</strong>. Compramos
                viviendas y edificios residenciales en zonas con demanda sólida, los ponemos en condiciones óptimas y los
                mantenemos en explotación: alquiler residencial, renta estable y revalorización a largo plazo.
              </p>
              <p>
                La estrategia complementa la inversión de transformación: si <strong>Transformación</strong> genera retorno por
                la salida, <strong>Patrimonio</strong> genera retorno por permanencia. Son dos lógicas distintas que pueden
                convivir dentro de una misma cartera inversora.
              </p>
              <p>
                Trabajamos junto al inversor para diseñar una cartera adaptada a su horizonte, su capital y su tolerancia al
                riesgo. La gestión del activo queda en nuestras manos: tú mantienes la propiedad económica y recibes el
                rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla comparativa Transformación vs Patrimonio */}
      <section className="section compare-models">
        <span className="section-label">2B.2.bis — Diferencia con Transformación</span>
        <div className="container">
          <span className="section-eyebrow">Dos lógicas, un mismo rigor</span>
          <h2 className="section-title serif">
            Transformación vs. <em>Patrimonio</em>.
          </h2>
          <p className="section-subtitle">
            Cómo se distingue una operación de cada modelo y por qué se complementan dentro de la estrategia global del
            inversor.
          </p>

          <div className="compare-models-table">
            <div className="compare-models-row compare-models-head">
              <div>Concepto</div>
              <div>Transformación <em>residencial</em></div>
              <div>Carteras <em>Patrimonialistas</em></div>
            </div>
            <div className="compare-models-row">
              <div className="compare-models-cell label">Origen del retorno</div>
              <div className="compare-models-cell val">Por la salida: venta del activo rehabilitado.</div>
              <div className="compare-models-cell val">Por la permanencia: renta + revalorización.</div>
            </div>
            <div className="compare-models-row">
              <div className="compare-models-cell label">Horizonte temporal</div>
              <div className="compare-models-cell val">6 – 18 meses por operación.</div>
              <div className="compare-models-cell val">5 – 10 años como inversión patrimonial.</div>
            </div>
            <div className="compare-models-row">
              <div className="compare-models-cell label">Estrategias</div>
              <div className="compare-models-cell val">Volumen · Foco · Oportunidad.</div>
              <div className="compare-models-cell val">Alquiler residencial estable y diversificado.</div>
            </div>
            <div className="compare-models-row">
              <div className="compare-models-cell label">Perfil ideal</div>
              <div className="compare-models-cell val">Inversor que busca retorno con horizonte corto.</div>
              <div className="compare-models-cell val">Inversor que prioriza patrimonio y rentas predecibles.</div>
            </div>
            <div className="compare-models-row">
              <div className="compare-models-cell label">Activo</div>
              <div className="compare-models-cell val">Producto: se rehabilita y se vende.</div>
              <div className="compare-models-cell val">Patrimonio: se mantiene y se gestiona.</div>
            </div>
          </div>
        </div>
      </section>

      {/* §2B.3 — BENEFICIOS */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <span className="section-label">2B.3 — Beneficios</span>
        <div className="container">
          <span className="section-eyebrow">Por qué mantener inmueble</span>
          <h2 className="section-title serif">
            Cuatro razones para que el <em>inmueble</em><br />sea parte de tu patrimonio.
          </h2>

          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <span className="benefit-num">— 01 / 04</span>
              <h3 className="serif">Rentas <em>estables</em></h3>
              <p>
                Ingresos recurrentes derivados del alquiler residencial. Flujo de caja predecible y respaldado por
                contratos firmes, con índices de ocupación elevados en las zonas que seleccionamos.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M3 17l6-6 4 4 8-8M17 7h4v4" />
                </svg>
              </div>
              <span className="benefit-num">— 02 / 04</span>
              <h3 className="serif">Revalorización</h3>
              <p>
                El inmueble bien ubicado y bien mantenido se aprecia con el tiempo. La inversión patrimonialista combina
                renta corriente con plusvalía latente: dos motores trabajando en paralelo.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M3 21V9l9-7 9 7v12M9 21v-7h6v7" />
                </svg>
              </div>
              <span className="benefit-num">— 03 / 04</span>
              <h3 className="serif">Activo <em>tangible</em></h3>
              <p>
                A diferencia de productos financieros, el inmueble es un activo real, identificable y registrado a nombre del
                vehículo. Protección frente a inflación y refugio en escenarios de volatilidad.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M20 7h-7M14 17H4M14 7L7 7m13 10l-7 0" />
                  <circle cx="17" cy="7" r="3" />
                  <circle cx="7" cy="17" r="3" />
                </svg>
              </div>
              <span className="benefit-num">— 04 / 04</span>
              <h3 className="serif">Gestión <em>delegada</em></h3>
              <p>
                Nos ocupamos de la búsqueda, adquisición, rehabilitación, alquiler y administración del activo. Tú mantienes
                la propiedad económica y recibes el rendimiento, sin gestión operativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* §2B.4 — TIPOS DE ACTIVOS */}
      <section className="section types">
        <span className="section-label">2B.4 — Tipos de activos</span>
        <div className="container">
          <span className="section-eyebrow">Qué buscamos</span>
          <h2 className="section-title serif">
            Cuatro tipologías que<br />forman <em>una cartera Revita</em>.
          </h2>
          <p className="section-subtitle">
            No todo activo encaja en este modelo. Filtramos por demanda, ubicación, estado y capacidad de gestión para
            construir carteras sólidas.
          </p>

          <div className="types-list">
            <div className="type-row">
              <div className="type-num">— 01 / 04</div>
              <div className="type-content">
                <h3 className="serif">Vivienda residencial en <em>ciudad consolidada</em></h3>
                <p>
                  Pisos en barrios con demanda sostenida (centro de Murcia, Vistalegre, La Flota, El Carmen). Demanda
                  residencial estable, alquiler fluido y precios resilientes en ciclos bajistas.
                </p>
              </div>
              <div className="type-ticket">
                150.000 – 400.000 €<br />por activo
              </div>
            </div>

            <div className="type-row">
              <div className="type-num">— 02 / 04</div>
              <div className="type-content">
                <h3 className="serif">Edificios residenciales <em>completos</em></h3>
                <p>
                  Edificios pequeños/medianos (4–12 unidades) susceptibles de rehabilitación integral y posterior explotación
                  en alquiler. Permiten economías de escala en gestión y mantenimiento.
                </p>
              </div>
              <div className="type-ticket">
                800.000 – 3 M €<br />por edificio
              </div>
            </div>

            <div className="type-row">
              <div className="type-num">— 03 / 04</div>
              <div className="type-content">
                <h3 className="serif">Locales <em>residencializables</em></h3>
                <p>
                  Activos terciarios bien ubicados con potencial de cambio de uso a residencial. Requieren expertise técnico y
                  legal, pero ofrecen entrada a precios por debajo del mercado residencial.
                </p>
              </div>
              <div className="type-ticket">
                200.000 – 700.000 €<br />por activo
              </div>
            </div>

            <div className="type-row">
              <div className="type-num">— 04 / 04</div>
              <div className="type-content">
                <h3 className="serif">Cartera <em>mixta seleccionada</em></h3>
                <p>
                  Combinación de varios activos en distintas ubicaciones para diversificar riesgo de zona y de inquilino.
                  Pensada para inversores que buscan exposición patrimonial diversificada desde la primera operación.
                </p>
              </div>
              <div className="type-ticket">
                Desde 500.000 €<br />cartera mínima
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §2B.5 — CÓMO FUNCIONA */}
      <section className="section">
        <span className="section-label">2B.5 — Cómo funciona</span>
        <div className="container">
          <span className="section-eyebrow">El proceso</span>
          <h2 className="section-title serif">
            Cinco pasos para construir<br />tu <em>cartera patrimonialista</em>.
          </h2>

          <div className="process-horizontal">
            <div className="process-track">
              <div className="process-step">
                <div className="process-step-num">01</div>
                <h3 className="serif">Perfil <em>patrimonial</em></h3>
                <p>
                  Definimos juntos el capital disponible, el horizonte temporal, el perfil de riesgo y los objetivos de renta
                  del inversor.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step-num">02</div>
                <h3 className="serif">Identificación</h3>
                <p>
                  Localizamos activos que encajan con el perfil. Te presentamos las oportunidades con análisis técnico,
                  financiero y renta esperada.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step-num">03</div>
                <h3 className="serif">Estructuración</h3>
                <p>
                  Constituimos un vehículo dedicado (SPV) que mantiene la titularidad del activo. Tu participación queda
                  formalizada.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step-num">04</div>
                <h3 className="serif">Puesta en <em>explotación</em></h3>
                <p>
                  Ejecutamos las reformas necesarias y ponemos el activo en alquiler. Comienza el flujo de rentas mensuales
                  al inversor.
                </p>
              </div>
              <div className="process-step">
                <div className="process-step-num">05</div>
                <h3 className="serif">Gestión <em>continua</em></h3>
                <p>
                  Gestionamos el activo durante toda la vida de la inversión: alquileres, mantenimiento, reporting trimestral
                  y revisión anual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE / POSICIONAMIENTO */}
      <section className="quote-block">
        <span className="section-label">2B.5.bis — Posicionamiento</span>
        <div className="container">
          <blockquote>
            &quot;Una cartera patrimonialista bien construida no se nota en el día a día. Se nota diez años después, cuando el
            inmueble sigue produciendo y vale más de lo que costó.&quot;
            <cite>— Equipo fundador, Revita</cite>
          </blockquote>
        </div>
      </section>

      {/* §2B.6 — CTA / CONTACTO */}
      <section className="cta-final">
        <span className="section-label on-dark">2B.6 — Contacto</span>
        <div className="container-narrow">
          <h2 className="serif">
            ¿Quieres construir tu propia<br /><em>cartera patrimonialista</em>?
          </h2>
          <p>
            Reserva una llamada privada de 30 minutos. Sin compromiso. Diseñamos contigo el perfil de cartera que mejor
            encaje con tu patrimonio.
          </p>
          <Link href="/builder/contacto" className="btn btn-light">
            Habla con un asesor →
          </Link>
        </div>
      </section>

      <RevitaFooter />
    </main>
  );
}
