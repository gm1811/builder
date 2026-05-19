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
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex justify-between items-center py-5">
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
                href="#"
                className="block px-7 py-3 text-sm text-[#1A1A1A] hover:bg-neutral-50"
              >
                Transformación residencial
              </Link>
              <Link
                href="#"
                className="block px-7 py-3 text-sm text-[#1A1A1A] hover:bg-neutral-50"
              >
                Carteras Patrimonialistas
              </Link>
            </div>
          </div>
          <Link
            href="#proceso"
            className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium"
          >
            Proceso
          </Link>
          <Link
            href="#proyectos"
            className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium"
          >
            Proyectos
          </Link>
          <Link
            href="#"
            className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium"
          >
            Sobre Revita
          </Link>
          <Link
            href="#"
            className="text-[#1A1A1A] hover:text-neutral-500 text-xs tracking-wider uppercase font-medium"
          >
            Blog
          </Link>
          <Link href="#contacto" className="btn btn-primary !py-2.5 !px-5 text-[11px]">
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

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-24 px-6`}
      >
        <nav className="flex flex-col gap-6 text-lg font-serif">
          <div className="border-b border-[#E5E5E5] pb-4">
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-2 font-sans font-medium">
              Inversiones
            </span>
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xl text-[#1A1A1A]"
            >
              Transformación residencial
            </Link>
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xl text-[#1A1A1A]"
            >
              Carteras Patrimonialistas
            </Link>
          </div>
          <Link
            href="#proceso"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-[#1A1A1A]"
          >
            Proceso
          </Link>
          <Link
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-[#1A1A1A]"
          >
            Proyectos
          </Link>
          <Link
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-[#1A1A1A]"
          >
            Sobre Revita
          </Link>
          <Link
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-[#1A1A1A]"
          >
            Blog
          </Link>
          <Link
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary text-center mt-6 py-4"
          >
            Habla con un asesor
          </Link>
        </nav>
      </div>
    </header>
  );
}
