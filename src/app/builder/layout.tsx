import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './builder.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Revita | Plataforma de Desarrollo Residencial Integral',
  description: 'Transformamos inmuebles en inversiones con valor. Gestionamos oportunidades de inversión residencial en Murcia y Levante.',
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-[#1A1A1A] bg-white">
        {children}
      </body>
    </html>
  );
}
