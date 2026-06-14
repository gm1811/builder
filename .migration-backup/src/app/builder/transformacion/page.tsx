import Link from 'next/link';
import { RevitaNav } from '../components/revita-nav';
import { RevitaFooter } from '../components/revita-footer';

export default function TransformacionPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-black selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* ============================================
               HERO de la página
               ============================================ */
            .page-hero{
              background:var(--white);
              padding:120px 0 80px;
              border-bottom:1px solid var(--gray-200);
              position:relative;
            }
            .page-eyebrow{
              display:inline-flex;align-items:center;gap:14px;
              font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;
              color:var(--gray-700);margin-bottom:32px;
            }
            .page-eyebrow::before{content:"";width:32px;height:1px;background:var(--black)}
            .page-hero h1{
              font-family:var(--font-fraunces),serif;
              font-weight:600;
              font-size:clamp(48px, 7vw, 96px);
              line-height:1;letter-spacing:-0.025em;
              color:var(--black);margin-bottom:32px;max-width:1100px;
            }
            .page-hero h1 em{font-style:italic;font-weight:600}
            .page-hero h1 .underlined{
              border-bottom:3px solid var(--black);padding-bottom:4px;
              text-decoration:none;
            }
            .hero-sub{
              font-size:18px;color:var(--gray-700);font-weight:300;
              line-height:1.65;max-width:760px;margin-top:24px;
            }

            /* ============================================
               FRANJA NEGRA — "01 / Desarrollo residencial integral"
               ============================================ */
            .intro-strip{
              background:var(--black);color:var(--white);
              padding:80px 0;position:relative;
            }
            .intro-strip-grid{
              display:grid;grid-template-columns:auto 1fr;gap:80px;align-items:end;
            }
            .intro-num{
              font-family:var(--font-fraunces),serif;
              font-weight:600;font-size:120px;line-height:0.85;
              color:var(--white);letter-spacing:-0.04em;
            }
            .intro-body .intro-label{
              font-size:11px;letter-spacing:3px;text-transform:uppercase;
              color:rgba(255,255,255,0.6);margin-bottom:16px;font-weight:500;
            }
            .intro-body h2{
              font-family:var(--font-fraunces),serif;font-weight:600;
              font-size:clamp(28px, 3.5vw, 44px);line-height:1.15;
              color:var(--white);letter-spacing:-0.02em;font-style:italic;
              margin-bottom:20px;
            }
            .intro-body .intro-steps{
              font-size:13px;letter-spacing:2px;text-transform:uppercase;
              color:rgba(255,255,255,0.85);font-weight:500;margin-bottom:24px;
            }
            .intro-body p{
              font-size:16px;line-height:1.7;color:rgba(255,255,255,0.75);
              font-weight:300;max-width:760px;
            }

            /* ============================================
               SECCIÓN: 6 PILARES + 6 KPIs
               ============================================ */
            .section{padding:120px 0;position:relative}
            .section-eyebrow{
              display:inline-flex;align-items:center;gap:14px;
              font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;
              color:var(--gray-700);margin-bottom:24px;
            }
            .section-eyebrow::before{content:"";width:32px;height:1px;background:var(--black)}
            .section-title{
              font-family:var(--font-fraunces),serif;font-weight:600;
              font-size:clamp(38px, 4.8vw, 64px);line-height:1.05;
              color:var(--black);margin-bottom:24px;letter-spacing:-0.025em;max-width:900px;
            }
            .section-title em{font-style:italic}
            .section-subtitle{
              font-size:18px;color:var(--gray-700);max-width:760px;
              line-height:1.65;margin-bottom:64px;font-weight:300;
            }

            .pillars-grid{
              display:grid;grid-template-columns:1.1fr 1fr;gap:64px;align-items:start;
            }
            .pillars-list{counter-reset:p;}
            .pillar{
              display:grid;grid-template-columns:48px 1fr;gap:24px;align-items:start;
              padding:22px 0;border-bottom:1px solid var(--gray-200);
              counter-increment:p;
            }
            .pillar:last-child{border-bottom:none}
            .pillar::before{
              content:counter(p, decimal-leading-zero) ".";
              font-family:var(--font-fraunces),serif;font-weight:600;font-size:22px;
              color:var(--gray-400);font-style:italic;
            }
            .pillar-text{
              font-family:var(--font-fraunces),serif;font-weight:500;
              font-size:22px;line-height:1.35;color:var(--black);
              letter-spacing:-0.01em;
            }

            /* KPI cards stack */
            .kpi-stack{
              display:grid;grid-template-columns:repeat(3, 1fr);gap:0;
              border:1px solid var(--gray-300);background:var(--white);
            }
            .kpi-cell{
              padding:32px 28px;border-right:1px solid var(--gray-200);
              border-bottom:1px solid var(--gray-200);
            }
            .kpi-cell:nth-child(3n){border-right:none}
            .kpi-cell:nth-last-child(-n+3){border-bottom:none}
            .kpi-cell-label{
              font-size:10px;letter-spacing:2.5px;text-transform:uppercase;
              color:var(--gray-500);font-weight:500;margin-bottom:14px;
            }
            .kpi-cell-value{
              font-family:var(--font-fraunces),serif;font-weight:600;
              font-size:36px;line-height:1;color:var(--black);
              letter-spacing:-0.02em;margin-bottom:10px;
            }
            .kpi-cell-note{
              font-size:12px;color:var(--gray-500);font-style:italic;line-height:1.4;
            }

            /* ============================================
               LAS 3 ESTRATEGIAS (FOCO / VOLUMEN / OPORTUNIDAD)
               ============================================ */
            .strategies{background:var(--paper);border-top:1px solid var(--gray-200);border-bottom:1px solid var(--gray-200)}
            .strategies-grid{
              display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;margin-top:32px;
            }
            .strategy-card{
              background:var(--white);border:1px solid var(--gray-300);
              padding:48px 36px;display:flex;flex-direction:column;
              transition:all 0.3s ease;position:relative;
            }
            .strategy-card.dark{background:var(--black);color:var(--white);border-color:var(--black)}
            .strategy-card:hover{transform:translateY(-4px);box-shadow:0 24px 40px -16px rgba(0,0,0,0.15)}
            .strategy-card.dark:hover{box-shadow:0 24px 40px -16px rgba(0,0,0,0.45)}

            .strategy-dots{
              font-family:var(--font-inter),sans-serif;font-size:20px;letter-spacing:6px;
              color:var(--black);margin-bottom:28px;line-height:1;font-weight:600;
            }
            .strategy-card.dark .strategy-dots{color:var(--white)}
            .strategy-name{
              font-family:var(--font-fraunces),serif;font-weight:600;font-style:italic;
              font-size:48px;line-height:1;color:var(--black);
              margin-bottom:32px;letter-spacing:-0.025em;
            }
            .strategy-card.dark .strategy-name{color:var(--white)}

            .strategy-divider{
              width:100%;height:2px;background:var(--black);margin-bottom:28px;
            }
            .strategy-card.dark .strategy-divider{background:var(--white)}

            .strategy-metric{margin-bottom:20px}
            .strategy-metric-label{
              font-size:11px;letter-spacing:2.5px;text-transform:uppercase;
              color:var(--gray-500);font-weight:500;margin-bottom:10px;
            }
            .strategy-card.dark .strategy-metric-label{color:rgba(255,255,255,0.55)}
            .strategy-metric-value{
              font-family:var(--font-fraunces),serif;font-weight:600;
              font-size:42px;line-height:1;color:var(--black);
              letter-spacing:-0.025em;
            }
            .strategy-card.dark .strategy-metric-value{color:var(--white)}

            .strategy-desc{
              margin-top:28px;padding-top:28px;border-top:1px solid var(--gray-200);
              font-size:14.5px;line-height:1.65;color:var(--gray-700);font-weight:300;
              font-style:italic;font-family:var(--font-fraunces),serif;
            }
            .strategy-card.dark .strategy-desc{
              color:rgba(255,255,255,0.7);border-top-color:rgba(255,255,255,0.18);
            }

            .strategies-footnote{
              margin-top:48px;text-align:center;font-size:13px;font-style:italic;
              color:var(--gray-700);font-family:var(--font-fraunces),serif;font-weight:400;
            }

            /* ============================================
               INSTRUMENTOS: PRÉSTAMO vs EQUITY
               ============================================ */
            .instruments-grid{
              display:grid;grid-template-columns:repeat(2, 1fr);gap:24px;margin-top:32px;
            }
            .instrument-card{
              padding:64px 56px;border:1px solid var(--gray-300);
              position:relative;min-height:380px;
              display:flex;flex-direction:column;justify-content:space-between;
              transition:all 0.3s ease;
            }
            .instrument-card.dark{background:var(--black);color:var(--white);border-color:var(--black)}
            .instrument-card:hover{transform:translateY(-4px)}

            .instrument-num{
              font-family:var(--font-fraunces),serif;
              font-weight:600;font-size:110px;line-height:0.85;
              color:var(--black);letter-spacing:-0.04em;margin-bottom:32px;
            }
            .instrument-card.dark .instrument-num{color:var(--white)}

            .instrument-label{
              font-size:11px;letter-spacing:3px;text-transform:uppercase;
              color:var(--gray-700);font-weight:600;margin-bottom:14px;
            }
            .instrument-card.dark .instrument-label{color:rgba(255,255,255,0.6)}

            .instrument-divider{
              width:64px;height:2px;background:var(--black);margin-bottom:28px;
            }
            .instrument-card.dark .instrument-divider{background:var(--white)}

            .instrument-headline{
              font-family:var(--font-fraunces),serif;font-weight:600;font-style:italic;
              font-size:32px;line-height:1.15;color:var(--black);
              letter-spacing:-0.015em;margin-bottom:24px;
            }
            .instrument-card.dark .instrument-headline{color:var(--white)}

            .instrument-meta{
              font-size:12px;font-style:italic;color:var(--gray-500);
              font-family:var(--font-fraunces),serif;
            }
            .instrument-card.dark .instrument-meta{color:rgba(255,255,255,0.5)}

            .instruments-footnote{
              margin-top:32px;text-align:center;font-size:13px;font-style:italic;
              color:var(--gray-700);font-family:var(--font-fraunces),serif;
            }

            /* ============================================
               CTA FINAL
               ============================================ */
            .cta-final{
              background:var(--black);color:var(--white);
              padding:140px 0;text-align:center;
            }
            .cta-final h2{
              font-family:var(--font-fraunces),serif;font-weight:600;font-style:italic;
              font-size:clamp(40px, 5.5vw, 72px);line-height:1.05;
              margin-bottom:32px;letter-spacing:-0.025em;color:var(--white);
            }
            .cta-final p{
              font-size:18px;color:rgba(255,255,255,0.7);max-width:560px;
              margin:0 auto 48px;line-height:1.65;font-weight:300;
            }

            /* Section labels (referencias para el programador) */
            .section-label{
              position:absolute;top:24px;right:40px;z-index:5;
              background:transparent;color:var(--gray-500);
              font-size:10px;font-weight:500;letter-spacing:3px;text-transform:uppercase;
              display:flex;align-items:center;gap:10px;
            }
            .section-label::before{content:"";width:24px;height:1px;background:var(--gray-300)}
            .section-label.on-dark{color:rgba(255,255,255,0.5)}
            .section-label.on-dark::before{background:rgba(255,255,255,0.3)}
            section{position:relative}

            /* ============================================
               RESPONSIVE
               ============================================ */
            @media(max-width:1024px){
              .pillars-grid{grid-template-columns:1fr;gap:48px}
              .kpi-stack{grid-template-columns:repeat(2, 1fr)}
              .kpi-cell:nth-child(3n){border-right:1px solid var(--gray-200)}
              .kpi-cell:nth-child(2n){border-right:none}
            }
            @media(max-width:768px){
              .container,.container-narrow{padding:0 24px}
              .intro-strip-grid{grid-template-columns:1fr;gap:32px}
              .strategies-grid,.instruments-grid{grid-template-columns:1fr;gap:16px}
              .kpi-stack{grid-template-columns:1fr}
              .kpi-cell{border-right:none !important;border-bottom:1px solid var(--gray-200) !important}
              .kpi-cell:last-child{border-bottom:none !important}
              .section{padding:80px 0}
            }
          `,
        }}
      />

      <RevitaNav />

      {/* 1. PAGE HERO */}
      <section className="page-hero">

        <div className="container">
          <span className="page-eyebrow">Inversiones · Transformación residencial</span>
          <h1 className="serif">
            Transformamos<br />
            activos de segunda mano<br />
            en <em>inversiones</em> <span className="underlined">rentables</span>.
          </h1>
          <p className="hero-sub">
            Adquirimos, rehabilitamos y comercializamos viviendas residenciales en Murcia y Levante con horizonte corto (8–18 meses).
            El inversor obtiene su retorno en la salida, con rentabilidades del 8–14 % anual.
          </p>
        </div>
      </section>

      {/* 2. FRANJA NEGRA */}
      <section className="intro-strip">

        <div className="container">
          <div className="intro-strip-grid">
            <div className="intro-num">01</div>
            <div className="intro-body">
              <div className="intro-label">Desarrollo residencial integral</div>
              <h2>Retorno por la venta del activo.</h2>
              <div className="intro-steps">Compra · Reforma · Venta</div>
              <p>
                Optimizamos activos de segunda mano y los vendemos rehabilitados.
                El inversor obtiene su retorno en la salida, con horizonte corto (8–18 meses) y rentabilidades competitivas alineadas con el perfil de cada operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEIS PILARES + SEIS KPIs */}
      <section className="section">

        <div className="container">
          <span className="section-eyebrow">El modelo, en seis puntos</span>
          <h2 className="section-title serif">Desarrollo residencial<br /><em>integral</em>.</h2>
          <p className="section-subtitle">
            Optimizamos activos de segunda mano: adquisición, rehabilitación y venta.
            Todo el ciclo bajo un mismo equipo y un mismo estándar de exigencia.
          </p>

          <div className="pillars-grid">
            <ol className="pillars-list">
              <li className="pillar"><div className="pillar-text">Préstamo participativo y <em>equity</em> con capital privado.</div></li>
              <li className="pillar"><div className="pillar-text">Estrategias: <em>Foco</em>, <em>Volumen</em> y <em>Oportunidad</em>.</div></li>
              <li className="pillar"><div className="pillar-text">Control total sobre la cadena de valor.</div></li>
              <li className="pillar"><div className="pillar-text">Rentabilidades competitivas para el inversor.</div></li>
              <li className="pillar"><div className="pillar-text">Co-inversión de Revita en cada proyecto.</div></li>
              <li className="pillar"><div className="pillar-text"><em>Due Diligence</em> legal, técnica y financiera.</div></li>
            </ol>

            <div className="kpi-stack">
              <div className="kpi-cell">
                <div className="kpi-cell-label">Ticket mín.</div>
                <div className="kpi-cell-value">50K €</div>
                <div className="kpi-cell-note">Inversor cualificado</div>
              </div>
              <div className="kpi-cell">
                <div className="kpi-cell-label">Rentabilidad</div>
                <div className="kpi-cell-value">8–14%</div>
                <div className="kpi-cell-note">Anual variable</div>
              </div>
              <div className="kpi-cell">
                <div className="kpi-cell-label">Plazos</div>
                <div className="kpi-cell-value">8–18 m</div>
                <div className="kpi-cell-note">Compra–reforma–venta</div>
              </div>
              <div className="kpi-cell">
                <div className="kpi-cell-label">LTV máximo</div>
                <div className="kpi-cell-value">70%</div>
                <div className="kpi-cell-note">Sobre venta tasada</div>
              </div>
              <div className="kpi-cell">
                <div className="kpi-cell-label">Margen bruto</div>
                <div className="kpi-cell-value">20%</div>
                <div className="kpi-cell-note">Sobre costes totales</div>
              </div>
              <div className="kpi-cell">
                <div className="kpi-cell-label">Vol. Año 3</div>
                <div className="kpi-cell-value">15 M€</div>
                <div className="kpi-cell-note">Objetivo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAS 3 ESTRATEGIAS */}
      <section className="section strategies">

        <div className="container">
          <span className="section-eyebrow">Tipos de operación</span>
          <h2 className="section-title serif">Tres tipos de operación<br />según las <em>características del activo</em>.</h2>
          <p className="section-subtitle">
            Cada operación se ajusta al perfil del activo y del inversor.
            Todas se estructuran vía SPV independiente, con préstamo participativo o equity según el caso.
          </p>

          <div className="strategies-grid">
            {/* FOCO */}
            <div className="strategy-card">
              <div className="strategy-dots">▮▮<br />▮▮</div>
              <div className="strategy-name serif">Foco</div>
              <div className="strategy-divider"></div>

              <div className="strategy-metric">
                <div className="strategy-metric-label">Rentabilidad anual estimada</div>
                <div className="strategy-metric-value">8–10%</div>
              </div>
              <div className="strategy-metric">
                <div className="strategy-metric-label">Plazo</div>
                <div className="strategy-metric-value" style={{ fontSize: '28px' }}>6–12 m</div>
              </div>
              <div className="strategy-metric">
                <div className="strategy-metric-label">Activo</div>
                <div className="strategy-metric-value" style={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 500 }}>Una unidad residencial</div>
              </div>

              <div className="strategy-desc">Una única unidad residencial. Operación rápida, riesgo concentrado pero gestionable.</div>
            </div>

            {/* VOLUMEN */}
            <div className="strategy-card dark">
              <div className="strategy-dots">▮▮▮<br />▮▮▮</div>
              <div className="strategy-name serif">Volumen</div>
              <div className="strategy-divider"></div>

              <div className="strategy-metric">
                <div className="strategy-metric-label">Rentabilidad anual estimada</div>
                <div className="strategy-metric-value">10–12%</div>
              </div>
              <div className="strategy-metric">
                <div className="strategy-metric-label">Plazo</div>
                <div className="strategy-metric-value" style={{ fontSize: '28px' }}>12–18 m</div>
              </div>
              <div className="strategy-metric">
                <div className="strategy-metric-label">Activo</div>
                <div className="strategy-metric-value" style={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 500 }}>Edificio con varias unidades</div>
              </div>

              <div className="strategy-desc">Edificio con varias unidades. Mayor volumen y economías de escala en obra.</div>
            </div>

            {/* OPORTUNIDAD */}
            <div className="strategy-card">
              <div className="strategy-dots">▮▯▯<br />▮▯▮</div>
              <div className="strategy-name serif">Oportunidad</div>
              <div className="strategy-divider"></div>

              <div className="strategy-metric">
                <div className="strategy-metric-label">Rentabilidad anual estimada</div>
                <div className="strategy-metric-value">12–14%</div>
              </div>
              <div className="strategy-metric">
                <div className="strategy-metric-label">Plazo</div>
                <div className="strategy-metric-value" style={{ fontSize: '28px' }}>12–24 m</div>
              </div>
              <div className="strategy-metric">
                <div className="strategy-metric-label">Activo</div>
                <div className="strategy-metric-value" style={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 500 }}>Distressed o complejo</div>
              </div>

              <div className="strategy-desc">Activos con problemática jurídica, financiera u ocupacional. Mayor margen, gestión más exigente.</div>
            </div>
          </div>

          <p className="strategies-footnote">
            Instrumento: Préstamo participativo (RDL 7/1996, art. 20) o <em>Equity</em> (participaciones SPV) · Estructurado vía SPV dedicado para cada operación.
          </p>
        </div>
      </section>

      {/* 5. INSTRUMENTOS DE INVERSIÓN */}
      <section className="section">

        <div className="container">
          <span className="section-eyebrow">Modalidades de inversión</span>
          <h2 className="section-title serif">Dos formas de invertir<br />en cada <em>proyecto</em>.</h2>
          <p className="section-subtitle">
            Cada operación se estructura con el instrumento más adecuado al activo y al perfil de retorno objetivo.
            El inversor elige cómo participa.
          </p>

          <div className="instruments-grid">
            <div className="instrument-card">
              <div>
                <div className="instrument-num">1</div>
                <div className="instrument-label">Préstamo participativo</div>
                <div className="instrument-divider"></div>
                <div className="instrument-headline serif">Invierte como prestamista con retorno preferente.</div>
              </div>
              <div className="instrument-meta">Marco: RDL 7/1996, art. 20</div>
            </div>

            <div className="instrument-card dark">
              <div>
                <div className="instrument-num">2</div>
                <div className="instrument-label">Equity</div>
                <div className="instrument-divider"></div>
                <div className="instrument-headline serif">Participa como socio del vehículo (SPV).</div>
              </div>
              <div className="instrument-meta">Participación directa en el proyecto</div>
            </div>
          </div>

          <p className="instruments-footnote">La modalidad de cada operación se define en función del activo.</p>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="cta-final">

        <div className="container-narrow">
          <h2 className="serif">Conoce las próximas<br />oportunidades de <em>inversión</em>.</h2>
          <p>Reserva una llamada privada de 30 minutos con un asesor. Sin compromiso. Te explicamos qué operaciones tenemos en pipeline.</p>
          <Link href="/builder/contacto" className="btn btn-light">
            Habla con un asesor →
          </Link>
        </div>
      </section>

      <RevitaFooter />
    </main>
  );
}
