import { ScrollReveal } from './scroll-reveal';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/builder/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B33]/90 via-[#0F1B33]/70 to-[#0F1B33]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white leading-tight mb-6 tracking-tight">
            Building the Future, <br className="hidden md:block" />
            <span className="text-gold">One Structure at a Time</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal className="delay-100">
          <p className="font-source-sans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium residential and commercial construction services, merging innovative design with uncompromising craftsmanship.
          </p>
        </ScrollReveal>

        <ScrollReveal className="delay-200">
          <a
            href="#contact"
            className="inline-block bg-gold text-[#0F1B33] px-8 py-4 rounded-sm font-montserrat font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-gold/20"
          >
            Schedule a Consultation
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
