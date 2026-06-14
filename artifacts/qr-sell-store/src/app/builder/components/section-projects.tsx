import { ScrollReveal } from './scroll-reveal';
import { Link } from 'wouter';

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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#E5E5E5] pb-8 mb-10 md:mb-16">
            <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1A1A1A] leading-tight tracking-tight">
              Últimos proyectos<br />
              <span className="italic">inmobiliarios.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <Link key={idx} href="#" className="group block">
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-4 md:mb-6">
                <span className={`absolute top-3 left-3 md:top-5 md:left-5 z-10 px-2.5 py-1 md:px-3.5 md:py-1.5 text-[9px] md:text-[9px] font-medium tracking-[2px] uppercase ${project.badgeClass}`}>
                  {project.badge}
                </span>
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>

              <div className="text-[10px] md:text-[11px] font-semibold tracking-[2px] md:tracking-[3px] uppercase text-neutral-500 mb-1 md:mb-2">
                {project.location}
              </div>
              <h3 className="font-serif text-lg md:text-2xl font-normal text-black leading-snug tracking-tight mb-3 md:mb-5 group-hover:italic transition-all duration-300">
                {project.name}
              </h3>

              <div className="grid grid-cols-3 gap-2 md:gap-2.5 mt-4">
                {project.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="bg-neutral-50 border border-neutral-200/60 p-2.5 md:p-3 text-center transition-all duration-300 group-hover:bg-neutral-100/80 group-hover:border-neutral-300">
                    <strong className="font-serif font-normal text-lg md:text-2xl text-[#1A1A1A] block leading-tight">
                      {stat.value}
                    </strong>
                    <span className="text-[9px] md:text-[10px] tracking-[1px] uppercase text-neutral-500 font-semibold block mt-1">
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
