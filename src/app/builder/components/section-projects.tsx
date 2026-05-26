import { ScrollReveal } from './scroll-reveal';
import Link from 'next/link';

export function SectionProjects() {
  const projects = [
    {
      num: '№ 001',
      badge: 'Disponible',
      badgeClass: 'bg-white text-black border border-black',
      location: 'Murcia · El Carmen',
      name: 'Calle Sociedad, 14',
      img: '/img/revita/florian-schmid-wVUeIivpmoM-unsplash.jpg',
      stats: [
        { label: 'TIR', value: '+10%' },
        { label: 'Plazo', value: '12m' },
        { label: 'Mínimo', value: '—' },
      ],
    },
    {
      num: '№ 002',
      badge: 'En ejecución',
      badgeClass: 'bg-black text-white border border-black',
      location: 'Murcia · Vistalegre',
      name: 'Av. del Progreso, 22',
      img: '/img/revita/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg',
      stats: [
        { label: 'TIR', value: '+11%' },
        { label: 'Plazo', value: '14m' },
        { label: 'Mínimo', value: '—' },
      ],
    },
    {
      num: '№ 003',
      badge: 'Cerrado',
      badgeClass: 'bg-transparent text-neutral-400 border border-neutral-300',
      location: 'Molina de Segura · Centro',
      name: 'Calle Mayor, 8',
      img: '/img/revita/spacejoy-c0JoR_-2x3E-unsplash.jpg',
      stats: [
        { label: 'TIR final', value: '+12%' },
        { label: 'Plazo', value: '9m' },
        { label: 'Estado', value: 'Finalizado' },
      ],
    },
  ];

  return (
    <section id="proyectos" className="py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-[#E5E5E5] pb-8 mb-16">
            <div>
              <span className="inline-flex items-center gap-3 text-xs tracking-[3px] uppercase text-neutral-600 mb-6 font-medium">
                <span className="w-8 h-[1px] bg-[#1A1A1A]" />
                Inversiones realizadas
              </span>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-[#1A1A1A] leading-tight tracking-tight">
                Últimos proyectos<br />
                <span className="italic">inmobiliarios.</span>
              </h2>
            </div>
            <Link href="#" className="btn-arrow">
              Ver todos
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-3 md:gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <Link key={idx} href="#" className="group block text-decoration-none text-inherit">
              {/* Project Image */}
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-4 md:mb-6">
                <span className={`absolute top-2 left-2 md:top-5 md:left-5 z-10 px-1.5 py-0.5 md:px-3.5 md:py-1.5 text-[7px] md:text-[9px] font-medium tracking-[1.5px] md:tracking-[2.5px] uppercase ${project.badgeClass}`}>
                  {project.badge}
                </span>
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-104 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <span className="absolute bottom-2 right-2 md:bottom-5 md:right-5 font-serif text-[10px] md:text-[13px] text-neutral-500 group-hover:text-white tracking-widest bg-white/95 group-hover:bg-black/40 px-1.5 py-0.5 md:px-2 md:py-1 backdrop-blur-sm transition-all duration-300">
                  {project.num}
                </span>
              </div>

              {/* Project Meta */}
              <div className="text-[8px] md:text-[11px] font-semibold tracking-[1.5px] md:tracking-[3px] uppercase text-neutral-500 mb-1 md:mb-2">
                {project.location}
              </div>
              <h3 className="font-serif text-sm sm:text-base md:text-2xl font-normal text-black leading-snug tracking-tight mb-3 md:mb-5 group-hover:italic transition-all duration-300">
                {project.name}
              </h3>

              {/* Project Stats */}
              <div className="flex border-t border-[#E5E5E5] pt-3 md:pt-4 gap-2 md:gap-6">
                {project.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex-1">
                    <strong className="font-serif font-normal text-[10px] sm:text-xs md:text-base text-[#1A1A1A] block">
                      {stat.value}
                    </strong>
                    <span className="text-[7px] md:text-[9px] tracking-[0.5px] md:tracking-[1.5px] uppercase text-neutral-400 font-semibold block mt-0.5 md:mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
