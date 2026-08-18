import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'STUDIO | Architecture & Interior Design',
  description: 'Contemporary interiors shaped by architecture, materiality, and timeless design. A luxury interior design practice.',
  keywords: ['Interior Design', 'Architectural Interiors', 'Quiet Luxury', 'Residential Design', 'Hospitality Design'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-background text-on-background antialiased font-body-md min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
