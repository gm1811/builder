import { NavBar } from './components/nav-bar';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ServicesSection } from './components/services-section';
import { PortfolioSection } from './components/portfolio-section';
import { WhyChooseSection } from './components/why-choose-section';
import { TestimonialsSection } from './components/testimonials-section';
import { ContactSection } from './components/contact-section';
import { FooterSection } from './components/footer-section';

export default function BuilderPage() {
  return (
    <main className="font-sans min-h-screen relative">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
