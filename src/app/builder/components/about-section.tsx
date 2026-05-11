import { ScrollReveal } from './scroll-reveal';
import { Shield, Lightbulb, Leaf } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Integrity',
      description: 'Honest communication and transparent practices in every project.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Innovation',
      description: 'Leveraging modern techniques and cutting-edge technology.',
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Sustainability',
      description: 'Building for the future with eco-friendly materials and methods.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <ScrollReveal>
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/img/builder/about-team.jpg)' }}
              />
              <div className="absolute inset-0 bg-[#0F1B33]/10" />
            </div>
          </ScrollReveal>

          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#0F1B33] mb-6">
                Building Legacies <br />
                <span className="text-[#D4AF37]">Since 1998</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal className="delay-100">
              <p className="font-source-sans text-lg text-[#64748B] mb-10 leading-relaxed">
                At BuildCraft Pro, we don't just construct buildings; we create the spaces where life happens and businesses thrive. With decades of industry expertise, our team merges architectural vision with meticulous engineering to deliver projects that stand the test of time, on schedule and within budget.
              </p>
            </ScrollReveal>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} className={`delay-${(index + 2) * 100}`}>
                  <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-[#D4AF37] hover:-translate-y-1 transition-transform">
                    <div className="mb-4 bg-[#F1F5F9] w-14 h-14 rounded-full flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-lg text-[#0F1B33] mb-2">
                      {value.title}
                    </h3>
                    <p className="font-source-sans text-sm text-[#64748B]">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
