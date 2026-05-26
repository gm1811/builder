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
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] transition-all duration-300">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex justify-between items-center py-5 relative">
          {/* Logo */}
          <Link href="/builder" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-black flex items-center justify-center font-serif text-xl font-normal text-white italic transition-transform group-hover:scale-105">
              R
            </div>
            <span className="font-serif font-normal text-2xl tracking-[4px] text-black">
              REVITA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            <div className="relative group/dropdown nav-dropdown py-2">
              <button className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium flex items-center gap-1">
                Inversiones <span className="text-[10px] opacity-60">▼</span>
              </button>
              <div className="absolute top-[100%] left-[-24px] bg-white border border-[#E5E5E5] min-w-[260px] py-4 shadow-sm nav-dropdown-menu">
                <Link
                  href="/builder"
                  className="block px-7 py-3 text-sm text-[#1A1A1A] hover:bg-neutral-50"
                >
                  Transformación residencial
                </Link>
                <Link
                  href="/builder/carteras"
                  className="block px-7 py-3 text-sm text-[#1A1A1A] hover:bg-neutral-50"
                >
                  Carteras Patrimonialistas
                </Link>
              </div>
            </div>
            <Link
              href="/builder/proceso"
              className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium"
            >
              Proceso
            </Link>
            <Link
              href="/builder#proyectos"
              className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium"
            >
              Proyectos
            </Link>
            <Link
              href="/builder/sobre"
              className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium"
            >
              Sobre Revita
            </Link>
            <Link
              href="/builder/blog"
              className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium"
            >
              Blog
            </Link>
            <Link href="/builder/contacto" className="btn btn-primary !py-2.5 !px-5 text-[11px]">
              Habla con un asesor
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-4 z-50 relative"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[1px] w-full bg-black transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
              }`}
            />
            <span
              className={`h-[1px] w-full bg-black transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[1px] w-full bg-black transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide Drawer (White box sliding from the right) */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-72 z-50 shadow-2xl md:hidden transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } py-8 px-6 flex flex-col justify-start`}
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Close Button Inside Drawer */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-black text-2xl font-light focus:outline-none"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-1 text-left font-sans font-medium text-sm">
          <Link
            href="/builder/sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 text-[#1A1A1A] hover:text-neutral-500 font-sans font-medium text-sm transition-colors border-b border-[#F2F2F2]"
          >
            ¿Quienes somos?
          </Link>
          <Link
            href="/builder/carteras"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 text-[#1A1A1A] hover:text-neutral-500 font-sans font-medium text-sm transition-colors border-b border-[#F2F2F2]"
          >
            Carteras patrimonialistas
          </Link>
          <Link
            href="/builder/proceso"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 text-[#1A1A1A] hover:text-neutral-500 font-sans font-medium text-sm transition-colors border-b border-[#F2F2F2]"
          >
            Proceso de inversión
          </Link>
          <Link
            href="/builder/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 text-[#1A1A1A] hover:text-neutral-500 font-sans font-medium text-sm transition-colors border-b border-[#F2F2F2]"
          >
            Blog
          </Link>
          <Link
            href="/builder/contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 text-[#1A1A1A] hover:text-neutral-500 font-sans font-medium text-sm transition-colors"
          >
            Contacto
          </Link>
          
          <Link
            href="/builder/contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary text-center mt-8 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-none"
          >
            Habla con un asesor
          </Link>
        </nav>
      </div>
    </>
  );
}
