import { ScrollReveal } from './scroll-reveal';
import { Home, Building2, Hammer, ClipboardCheck } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-[#D4AF37]" />,
      title: 'Custom Home Construction',
      description: 'We turn your dream home into reality with bespoke designs and high-end finishes, ensuring every detail reflects your lifestyle.',
      link: '#contact'
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#D4AF37]" />,
      title: 'Commercial Developments',
      description: 'State-of-the-art office spaces, retail centers, and industrial facilities built for functionality, efficiency, and scale.',
      link: '#contact'
    },
    {
      icon: <Hammer className="w-10 h-10 text-[#D4AF37]" />,
      title: 'Renovations & Remodeling',
      description: 'Transforming existing structures with modern upgrades while preserving architectural integrity and enhancing property value.',
      link: '#contact'
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-[#D4AF37]" />,
      title: 'Project Management',
      description: 'End-to-end oversight ensuring projects are delivered safely, on schedule, and within budget with complete transparency.',
      link: '#contact'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-[#0F1B33] inline-block gold-underline pb-2">
              Our Services
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} className={`delay-${index * 100}`}>
              <div className="group bg-[#F1F5F9] p-8 rounded-sm border border-transparent hover:border-l-4 hover:border-l-[#D4AF37] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-[#0F1B33] mb-4">
                  {service.title}
                </h3>
                <p className="font-source-sans text-[#64748B] mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href={service.link}
                  className="font-montserrat font-bold text-[#0F1B33] group-hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2 mt-auto"
                >
                  Learn More <span className="text-xl">→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
