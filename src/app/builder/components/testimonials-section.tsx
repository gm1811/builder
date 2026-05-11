'use client';

import { useState, useRef, useEffect } from 'react';
import { ScrollReveal } from './scroll-reveal';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      quote: "BuildCraft Pro didn't just build our headquarters; they realized our vision. Their attention to detail and commitment to sustainability is unmatched in the industry.",
      author: 'Sarah Jenkins',
      title: 'CEO, Horizon Technologies',
      image: '/img/builder/testimonial-1.jpg'
    },
    {
      id: 2,
      quote: "The team's project management kept everything running smoothly. We were updated constantly, and the final residential complex was delivered ahead of schedule.",
      author: 'David Chen',
      title: 'Lead Developer, Prime Estates',
      image: '/img/builder/testimonial-2.jpg'
    },
    {
      id: 3,
      quote: "Renovating a historic building comes with unexpected challenges, but BuildCraft handled every hurdle with professionalism and deep architectural respect.",
      author: 'Marcus Thorne',
      title: 'Director, Heritage Trust',
      image: '/img/builder/testimonial-3.jpg'
    }
  ];

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % testimonials.length;
        if (carouselRef.current) {
          carouselRef.current.scrollTo({
            left: next * carouselRef.current.clientWidth,
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Sync scroll with dots
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.clientWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.clientWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-[#0F1B33] inline-block gold-underline pb-2">
              Client Testimonials
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Decorative Quotes */}
            <div className="absolute text-[#D4AF37] opacity-20 text-[120px] font-serif leading-none -top-10 -left-6 z-0">
              &ldquo;
            </div>

            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="testimonial-carousel relative z-10"
              onScroll={handleScroll}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide p-6 md:p-10">
                  <div className="bg-white rounded-sm shadow-xl p-8 md:p-12 text-center h-full flex flex-col items-center justify-center border-t-4 border-[#0F1B33]">
                    <p className="font-source-sans text-xl md:text-2xl text-[#64748B] italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto flex flex-col items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#D4AF37]"
                      />
                      <h4 className="font-montserrat font-bold text-[#0F1B33]">
                        {testimonial.author}
                      </h4>
                      <span className="font-source-sans text-sm text-[#64748B]">
                        {testimonial.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute text-[#D4AF37] opacity-20 text-[120px] font-serif leading-none -bottom-16 -right-6 z-0 rotate-180">
              &ldquo;
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#D4AF37] w-8' : 'bg-[#CBD5E1] hover:bg-[#94A3B8]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
