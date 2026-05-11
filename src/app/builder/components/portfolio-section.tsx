import { ScrollReveal } from './scroll-reveal';
import { MapPin } from 'lucide-react';

export function PortfolioSection() {
  const projects = [
    {
      id: 1,
      name: 'The Horizon Villa',
      location: 'Malibu, CA',
      type: 'Residential',
      image: '/img/builder/portfolio-1.jpg'
    },
    {
      id: 2,
      name: 'Apex Corporate Center',
      location: 'Downtown Seattle, WA',
      type: 'Commercial',
      image: '/img/builder/portfolio-2.jpg'
    },
    {
      id: 3,
      name: 'Heritage Brick Restoration',
      location: 'Boston, MA',
      type: 'Renovation',
      image: '/img/builder/portfolio-3.jpg'
    },
    {
      id: 4,
      name: 'Azure Waterfront Towers',
      location: 'Miami, FL',
      type: 'Residential',
      image: '/img/builder/portfolio-4.jpg'
    },
    {
      id: 5,
      name: 'Eco-Park Community Hub',
      location: 'Portland, OR',
      type: 'Civic',
      image: '/img/builder/portfolio-5.jpg'
    },
    {
      id: 6,
      name: 'Industrial Loft Conversions',
      location: 'Brooklyn, NY',
      type: 'Mixed-Use',
      image: '/img/builder/portfolio-6.jpg'
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-[#0F1B33] inline-block gold-underline pb-2">
              Our Portfolio
            </h2>
            <p className="font-source-sans text-[#64748B] mt-6 max-w-2xl mx-auto">
              Explore our diverse range of successful projects, showcasing our commitment to excellence across various sectors.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} className={`delay-${(index % 3) * 100}`}>
              <div className="portfolio-card h-80 rounded-sm cursor-pointer shadow-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-text">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#0F1B33] text-xs font-bold font-montserrat tracking-wider uppercase mb-3 rounded-sm">
                      {project.type}
                    </span>
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="font-source-sans text-gray-300 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal className="mt-12 text-center delay-300">
          <a
            href="#contact"
            className="inline-block border-2 border-[#0F1B33] text-[#0F1B33] px-8 py-3 rounded-sm font-montserrat font-bold text-sm hover:bg-[#0F1B33] hover:text-white transition-colors"
          >
            View All Projects
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
