import type { Metadata } from 'next';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import './builder.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BuildCraft Pro | Premium Construction Services',
  description: 'Building the Future, One Structure at a Time. Premium residential and commercial construction services.',
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased text-[#2D3748] bg-[#FAFAFA]">
        {children}
      </body>
    </html>
  );
}
