import { ScrollReveal } from './scroll-reveal';

export function SectionVertical() {
  const steps = [
    {
      num: '01 / 03',
      title: 'Adquisición y análisis',
      desc: 'Equipo dedicado a localizar las mejores oportunidades en Murcia y la costa del Levante. Análisis financiero, técnico y legal exhaustivo antes de comprar.',
    },
    {
      num: '02 / 03',
      title: 'Construcción y arquitectura',
      desc: 'Rehabilitación integral con procesos industrializados que reducen plazos y costes sin comprometer la calidad del resultado final.',
    },
    {
      num: '03 / 03',
      title: 'Servicios inmobiliarios',
      desc: 'Gestión, comercialización y, cuando aplica, explotación del activo. Cierre del ciclo y devolución al inversor.',
    },
  ];

  return (
    <section id="proceso" className="py-24 md:py-32 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <span className="inline-flex items-center gap-3 text-xs tracking-[3px] uppercase text-neutral-600 mb-8 font-medium">
            <span className="w-8 h-[1px] bg-[#1A1A1A]" />
            Integración vertical de procesos
          </span>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-8 tracking-tight max-w-[900px]">
            Controlamos cada etapa.<br />
            <span className="italic">Sin intermediarios.</span>
          </h2>
          <p className="text-neutral-600 font-light text-lg md:text-xl max-w-[680px] leading-relaxed mb-16">
            Operamos como una plataforma integral: desde la identificación del activo hasta la comercialización. Esta verticalización es la base de la rentabilidad.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 border-t border-[#E5E5E5] border-b border-[#E5E5E5]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="py-6 px-3 sm:py-14 sm:px-10 border-r last:border-r-0 border-[#E5E5E5] hover:bg-neutral-50 transition-colors duration-300"
            >
              <span className="font-serif text-[9px] sm:text-xs text-neutral-400 tracking-widest block mb-4 sm:mb-12">
                — {step.num}
              </span>
              <h3 className="font-serif font-normal text-xs sm:text-2xl text-[#1A1A1A] mb-2 sm:mb-6 leading-snug">
                {step.title}
              </h3>
              <p className="text-neutral-600 font-light text-[9px] sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
