import Link from 'next/link';

export function SectionHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#0A0A0A] overflow-hidden text-white pt-24 pb-14 md:pt-32 md:pb-20">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: "url('/img/revita/kevin-matos-Nl_FMFpXo2g-unsplash.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* Content */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          
          {/* Left Column - H1 */}
          <div className="lg:col-span-7">
            <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight text-white">
              Transformamos<br />
              inmuebles en<br />
              <span className="italic border-b-2 border-white pb-1 font-normal">inversiones rentables</span>.
            </h1>
          </div>

          {/* Right Column - Subtitle & CTA */}
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-neutral-800 pb-2">
            <p className="text-lg md:text-xl font-light text-neutral-300 leading-relaxed mb-8 md:mb-10">
              Gestionamos oportunidades de inversión inmobiliaria residencial en Murcia y Levante.
              Diversifica tu capital y alcanza rentabilidades del{' '}
              <strong className="text-white font-medium">8–14% anual</strong> con riesgo controlado.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="#contacto" className="btn btn-primary !bg-white !text-black !border-white hover:!bg-transparent hover:!text-white">
                Habla con un asesor
              </Link>
              <Link href="#proyectos" className="btn-arrow on-dark">
                Ver proyectos
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-neutral-850 text-center w-full flex flex-col items-center justify-center">
          <p className="font-sans font-semibold text-lg md:text-2xl lg:text-[26px] leading-relaxed text-white max-w-[880px] mx-auto">
            Somos una boutique de desarrollo residencial integral.<br />
            Transformamos activos residenciales en inversiones con valor,<br />
            <span className="text-white font-bold">
              desde la adquisición hasta la rehabilitación y comercialización.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
