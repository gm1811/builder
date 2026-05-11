import { ScrollReveal } from './scroll-reveal';
import { Leaf, CheckCircle2, Trophy } from 'lucide-react';

export function WhyChooseSection() {
  const stats = [
    {
      value: '100+',
      title: 'Completed Projects',
      description: 'Across residential and commercial sectors.'
    },
    {
      icon: <Leaf className="w-10 h-10 mx-auto text-[#D4AF37]" />,
      title: 'Eco-Friendly Materials',
      description: 'Sustainable practices for a greener future.'
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 mx-auto text-[#D4AF37]" />,
      title: 'On-Time Delivery',
      description: 'Guaranteed schedules you can depend on.'
    },
    {
      icon: <Trophy className="w-10 h-10 mx-auto text-[#D4AF37]" />,
      title: 'Award-Winning Design',
      description: 'Recognized for excellence in architecture.'
    }
  ];

  return (
    <section className="py-24 bg-[#0F1B33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
              Why Choose <span className="text-[#D4AF37]">BuildCraft Pro</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.title} className={`delay-${index * 100}`}>
              <div className="p-6 border border-[#2D3748] rounded-sm bg-[#0F1B33] hover:bg-[#1a2b4c] transition-colors h-full flex flex-col justify-center">
                <div className="mb-4">
                  {stat.value ? (
                    <span className="font-montserrat font-bold text-4xl md:text-5xl text-[#D4AF37]">
                      {stat.value}
                    </span>
                  ) : (
                    stat.icon
                  )}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                  {stat.title}
                </h3>
                <p className="font-source-sans text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
