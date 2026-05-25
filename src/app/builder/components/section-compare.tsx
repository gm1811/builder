import { ScrollReveal } from './scroll-reveal';

export function SectionCompare() {
  const comparisonData = [
    {
      concept: 'Estrategia',
      revita: 'Plan a tu medida.',
      solo: 'Incertidumbre y falta de criterio.',
    },
    {
      concept: 'Compromiso',
      revita: 'Co-inversión: ponemos nuestro capital contigo.',
      solo: 'Todo el riesgo recae sobre tus hombros.',
    },
    {
      concept: 'Transparencia',
      revita: 'Informes de avance y acceso a números reales.',
      solo: 'Opacidad y sorpresas financieras.',
    },
    {
      concept: 'Operativa',
      revita: 'Gestión directa de obra y proveedores.',
      solo: 'Estrés constante, retrasos y agobios.',
    },
    {
      concept: 'Tu tiempo',
      revita: 'Libertad. Nosotros nos ocupamos de todo.',
      solo: 'Horas perdidas en gestión.',
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-t border-[#E5E5E5] border-b border-[#E5E5E5]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <span className="inline-flex items-center gap-3 text-xs tracking-[3px] uppercase text-neutral-600 mb-8 font-medium">
            <span className="w-8 h-[1px] bg-[#1A1A1A]" />
            Por qué Revita
          </span>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-8 tracking-tight max-w-[900px]">
            La diferencia entre invertir<br />
            <span className="italic">con criterio</span> o sin él.
          </h2>
          <p className="text-neutral-600 font-light text-lg md:text-xl max-w-[680px] leading-relaxed mb-16">
            Entre un equipo verticalmente integrado y hacerlo en solitario hay un mundo.
          </p>
        </ScrollReveal>

        {/* Table Container */}
        <div className="border-t border-black border-b border-black max-w-[1200px] mx-auto">
          {/* Header Row (Desktop Only) */}
          <div className="hidden md:grid grid-cols-12 border-b border-black font-serif text-lg">
            <div className="col-span-3 py-8 px-7 text-xs font-sans tracking-[3px] uppercase text-neutral-400 font-medium">
              Concepto
            </div>
            <div className="col-span-4 py-8 px-7 font-normal text-black">
              Con Revita
            </div>
            <div className="col-span-5 py-8 px-7 text-xs font-sans tracking-[3px] uppercase text-neutral-400 font-medium">
              Por tu cuenta
            </div>
          </div>

          {/* Data Rows */}
          {comparisonData.map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E5E5E5] last:border-b-0">
              {/* Concept Title */}
              <div className="col-span-1 md:col-span-3 py-4 md:py-7 px-6 md:px-7 font-serif font-normal italic text-lg text-black bg-neutral-900 md:bg-transparent text-white md:text-black flex items-center">
                {row.concept}
              </div>
              
              {/* Comparison Cells Container */}
              <div className="col-span-1 md:col-span-9 grid grid-cols-2 md:grid-cols-9">
                {/* Revita Cell */}
                <div className="col-span-1 md:col-span-4 py-6 md:py-7 px-4 md:px-7 text-sm font-light leading-relaxed flex items-start gap-3 md:gap-4 border-r border-[#E5E5E5] md:border-r-0">
                  <span className="w-3.5 h-3.5 rounded-full bg-black shrink-0 mt-1" />
                  <div>
                    <span className="md:hidden font-medium text-xs text-neutral-400 uppercase tracking-widest block mb-1">Con Revita</span>
                    {row.revita}
                  </div>
                </div>

                {/* Solo Cell */}
                <div className="col-span-1 md:col-span-5 py-6 md:py-7 px-4 md:px-7 text-sm font-light leading-relaxed text-neutral-400 line-through decoration-neutral-300 flex items-start gap-3 md:gap-4">
                  <span className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0 mt-1" />
                  <div>
                    <span className="md:hidden font-medium text-xs text-neutral-450 uppercase tracking-widest block mb-1">Por tu cuenta</span>
                    {row.solo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
