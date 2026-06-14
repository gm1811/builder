'use client';

import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const navLinks = [
  { href: '/builder/sobre', label: '¿Quiénes somos?' },
  { href: '/builder/carteras', label: 'Carteras patrimonialistas' },
  { href: '/builder/proceso', label: 'Proceso de inversión' },
  { href: '/builder/transformacion', label: 'Transformación residencial' },
  { href: '/builder/blog', label: 'Blog' },
  { href: '/builder/contacto', label: 'Contacto' },
];

export function RevitaNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 flex justify-between items-center py-4 md:py-5">

        {/* Logo */}
        <Link href="/builder" onClick={() => setMenuOpen(false)} className="flex items-center group shrink-0">
          <img
            src="/img/revita/Logos/Icon + Text Transp.png"
            alt="Revita"
            className="h-10 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1A1A1A] hover:text-neutral-500 text-[11px] tracking-wider uppercase font-medium transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/builder/contacto"
            className="btn btn-primary !py-2.5 !px-5 text-[11px] shrink-0 whitespace-nowrap"
          >
            Habla con un asesor
          </Link>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 shrink-0 relative z-[60]"
        >
          <span className={`block w-6 h-[2px] bg-[#1A1A1A] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#1A1A1A] transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#1A1A1A] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[65px] bg-white z-40 flex flex-col px-6 pt-8 pb-12 overflow-y-auto transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-base font-medium text-[#1A1A1A] border-b border-[#E5E5E5] tracking-wide hover:text-neutral-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/builder/contacto"
          onClick={() => setMenuOpen(false)}
          className="mt-8 btn btn-primary text-center justify-center text-[13px] py-4 block"
        >
          Habla con un asesor
        </Link>
      </div>
    </header>
  );
}
