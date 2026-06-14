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
    <section className="bg-white py-10 md:py-16 border-t border-[#E5E5E5] border-b border-[#E5E5E5]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <h2 className="font-serif font-light text-3xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-4 md:mb-8 tracking-tight max-w-[900px]">
            La diferencia entre invertir<br />
            <span className="italic">con criterio</span> o sin él.
          </h2>
          <p className="text-neutral-600 font-light text-base md:text-xl max-w-[680px] leading-relaxed mb-8 md:mb-16">
            Entre un equipo verticalmente integrado y hacerlo en solitario hay un mundo.
          </p>
        </ScrollReveal>

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
            <div key={idx} className="border-b border-[#E5E5E5] last:border-b-0">
              {/* Mobile layout: stacked */}
              <div className="md:hidden px-4 py-5">
                <div className="font-serif font-normal italic text-base text-black mb-3">
                  {row.concept}
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
                  <div>
                    <span className="font-semibold text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">Con Revita</span>
                    <span className="text-sm font-light text-black leading-relaxed">{row.revita}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-neutral-400 line-through decoration-neutral-300">
                  <span className="w-2 h-2 rounded-full border border-neutral-300 shrink-0 mt-1.5" />
                  <div>
                    <span className="font-semibold text-[10px] uppercase tracking-widest block mb-1 no-underline" style={{textDecoration:'none'}}>Por tu cuenta</span>
                    <span className="text-sm font-light leading-relaxed">{row.solo}</span>
                  </div>
                </div>
              </div>

              {/* Desktop layout: grid */}
              <div className="hidden md:grid grid-cols-12">
                <div className="col-span-3 py-7 px-7 font-serif font-normal italic text-lg text-black flex items-start">
                  {row.concept}
                </div>
                <div className="col-span-9 grid grid-cols-9">
                  <div className="col-span-4 py-7 px-7 text-[18px] md:text-[20px] font-light leading-relaxed flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0 mt-2" />
                    <div>
                      <span className="font-medium text-[11px] text-neutral-400 uppercase tracking-widest block mb-1">Con Revita</span>
                      {row.revita}
                    </div>
                  </div>
                  <div className="col-span-5 py-7 px-7 text-[18px] md:text-[20px] font-light leading-relaxed text-neutral-400 line-through decoration-neutral-300 flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full border border-neutral-300 shrink-0 mt-2" />
                    <div>
                      <span className="font-medium text-[11px] text-neutral-400 uppercase tracking-widest block mb-1">Por tu cuenta</span>
                      {row.solo}
                    </div>
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
