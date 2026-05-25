import { ScrollReveal } from './scroll-reveal';

export function SectionModels() {
  const models = [
    {
      num: '01 / 02',
      label: 'Modelo de retorno',
      title: (
        <>
          Transformación <span className="italic">residencial</span>
        </>
      ),
      desc: 'Adquirimos, rehabilitamos y comercializamos viviendas con alto potencial de revalorización. Tres estrategias: Volumen, Foco y Oportunidad.',
      img: '/img/revita/dan-gold-ZH0p_FV1GWc-unsplash.jpg',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-12 h-12">
          <path d="M3 21V9l9-7 9 7v12M9 21v-7h6v7" />
        </svg>
      ),
    },
    {
      num: '02 / 02',
      label: 'Modelo de patrimonio',
      title: (
        <>
          Carteras <span className="italic">Patrimonialistas</span>
        </>
      ),
      desc: 'Identificamos y estructuramos activos residenciales para mantener como patrimonio: rentas estables, revalorización del capital y un activo tangible.',
      img: '/img/revita/spacejoy-9M66C_w_ToM-unsplash.jpg',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-12 h-12">
          <path d="M2 22h20M4 22V10l8-6 8 6v12M9 22v-8h6v8M9 6h.01M15 6h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-neutral-50 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <span className="inline-flex items-center gap-3 text-xs tracking-[3px] uppercase text-neutral-600 mb-8 font-medium">
            <span className="w-8 h-[1px] bg-[#1A1A1A]" />
            Modelos de inversión
          </span>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-16 tracking-tight">
            Dos modelos de inversión,<br />
            <span className="italic">con distintas estrategias.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 md:gap-8">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="group bg-white border border-neutral-300 hover:border-black transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Card Header (Image with icon overlay) */}
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                <img
                  src={model.img}
                  alt="Modelo"
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 font-serif text-[10px] md:text-xs text-neutral-500 group-hover:text-white tracking-widest bg-white/90 group-hover:bg-black/40 px-2 py-1 md:px-3 md:py-1.5 backdrop-blur-sm transition-all duration-300">
                  {model.num}
                </div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white bg-black/40 p-2 md:p-3 backdrop-blur-sm scale-75 md:scale-100 origin-bottom-left">
                  {model.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[9px] md:text-[11px] font-medium tracking-[2px] md:tracking-[3px] uppercase text-neutral-500 mb-2 md:mb-4">
                    {model.label}
                  </div>
                  <h3 className="font-serif text-sm sm:text-lg md:text-3xl font-light text-black mb-3 md:mb-5 tracking-tight group-hover:italic transition-all duration-300">
                    {model.title}
                  </h3>
                  <p className="text-neutral-600 font-light text-xs md:text-base leading-relaxed mb-6">
                    {model.desc}
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 md:gap-3 text-[9px] md:text-xs tracking-[1.5px] md:tracking-[2px] uppercase text-[#1A1A1A] font-medium border-b border-black pb-1 transition-all duration-300 group-hover:gap-4 md:group-hover:gap-5">
                    Ver detalle →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
