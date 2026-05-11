import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-[#0F1B33] pt-20 pb-10 border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Logo & Tagline */}
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold font-montserrat text-white">
                BuildCraft<span className="text-[#D4AF37]">Pro</span>
              </span>
            </div>
            <p className="font-source-sans text-gray-400 mb-6 max-w-sm">
              Building the future, one structure at a time. Premium residential and commercial construction services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 font-source-sans text-gray-400">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-lg text-white mb-6">Contact Info</h4>
            <ul className="space-y-4 font-source-sans text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>123 Construction Blvd, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>info@buildcraftpro.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2D3748] text-center font-source-sans text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BuildCraft Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
