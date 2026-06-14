'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function RevitaNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] transition-all duration-300">
      <div className="max-w-[1320px] mx-auto px-4 md:px-10 flex flex-wrap md:flex-nowrap justify-between items-center py-3 md:py-5 gap-4 relative">
        {/* Logo */}
        <Link href="/builder" className="flex items-center group shrink-0">
          <img 
            src="/img/revita/Logos/Icon + Text Transp.png" 
            alt="Revita" 
            className="h-12 md:h-16 w-auto object-contain bg-transparent transition-transform group-hover:scale-103"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 md:gap-6">
          <Link
            href="/builder/sobre"
            className="text-[#1A1A1A] hover:text-neutral-500 text-[10px] md:text-xs tracking-wider uppercase font-medium transition-colors"
          >
            ¿Quienes somos?
          </Link>
          <Link
            href="/builder/carteras"
            className="text-[#1A1A1A] hover:text-neutral-500 text-[10px] md:text-xs tracking-wider uppercase font-medium transition-colors"
          >
            Carteras patrimonialistas
          </Link>
          <Link
            href="/builder/proceso"
            className="text-[#1A1A1A] hover:text-neutral-500 text-[10px] md:text-xs tracking-wider uppercase font-medium transition-colors"
          >
            Proceso de inversión
          </Link>
          <Link
            href="/builder/transformacion"
            className="text-[#1A1A1A] hover:text-neutral-500 text-[10px] md:text-xs tracking-wider uppercase font-medium transition-colors"
          >
            Transformación residencial
          </Link>
          <Link
            href="/builder/blog"
            className="text-[#1A1A1A] hover:text-neutral-500 text-[10px] md:text-xs tracking-wider uppercase font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/builder/contacto"
            className="text-[#1A1A1A] hover:text-neutral-500 text-[10px] md:text-xs tracking-wider uppercase font-medium transition-colors"
          >
            Contacto
          </Link>
          <Link href="/builder/contacto" className="btn btn-primary !py-2 !px-3 md:!py-2.5 md:!px-5 text-[9px] md:text-[11px] shrink-0">
            Habla con un asesor
          </Link>
        </nav>
      </div>
    </header>
  );
}
