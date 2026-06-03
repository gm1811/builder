import { ScrollReveal } from './scroll-reveal';
import Link from 'next/link';

export function SectionModels() {
  const models = [
    {
      label: 'Compra · Reforma · Venta',
      title: (
        <>
          Transformación <span className="italic">Residencial</span>
        </>
      ),
      desc: 'Adquirimos, rehabilitamos y comercializamos viviendas con alto potencial de revalorización. Tres estrategias: Volumen, Foco y Oportunidad. El inversor obtiene su retorno por la venta del activo.',
      img: '/img/revita/dan-gold-ZH0p_FV1GWc-unsplash.jpg',
      link: '/builder/transformacion',
    },
    {
      label: 'Compra · Reforma · Explotación',
      title: (
        <>
          Carteras <span className="italic">Patrimonialistas</span>
        </>
      ),
      desc: 'Identificamos y estructuramos activos inmobiliarios para mantener como patrimonio: cashflow estable, revalorización del capital y un activo tangible.',
      img: '/img/revita/danist-soh-8Gg2Ne_uTcM-unsplash.jpg',
      link: '/builder/carteras',
    },
  ];

  return (
    <section className="bg-neutral-50 py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal>
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
              {/* Card Header (Image overlay removed) */}
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                <img
                  src={model.img}
                  alt="Modelo"
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
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
                  <Link
                    href={model.link}
                    className="inline-flex items-center gap-2 md:gap-3 text-[9px] md:text-xs tracking-[1.5px] md:tracking-[2px] uppercase text-[#1A1A1A] font-medium border-b border-black pb-1 transition-all duration-300 group-hover:gap-4 md:group-hover:gap-5 hover:text-neutral-500 hover:border-neutral-500"
                  >
                    Ver detalle →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
