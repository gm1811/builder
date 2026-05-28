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
    <section id="proceso" className="pt-2 pb-12 md:pt-4 md:pb-16 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-6 tracking-tight max-w-[900px]">
            Controlamos cada etapa.<br />
            <span className="italic">Sin intermediarios.</span>
          </h2>
          <p className="text-neutral-600 font-light text-lg md:text-xl max-w-[680px] leading-relaxed mb-12">
            Operamos como una plataforma integral: desde la identificación del activo hasta la comercialización. Esta verticalización es la base de la rentabilidad.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-3 md:gap-8">
          {steps.map((step, idx) => {
            const isInverted = idx === 1;
            return (
              <div
                key={idx}
                className={`p-4 md:p-10 rounded-md flex flex-col justify-start min-h-[180px] md:min-h-[220px] transition-all duration-350 ${
                  isInverted
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-[#E0E0E0] hover:border-black'
                }`}
              >
                <h3
                  className={`font-sans font-medium text-xs sm:text-lg md:text-2xl mb-2 md:mb-4 leading-snug ${
                    isInverted ? 'text-white' : 'text-[#1A1A1A]'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`font-sans font-light text-[9px] sm:text-xs md:text-sm leading-relaxed ${
                    isInverted ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
