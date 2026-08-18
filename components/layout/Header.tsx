'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Studio', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        id="top-nav"
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-page transition-all duration-300 ease-in-out ${
          scrolled
            ? 'nav-scrolled py-2.5 md:py-3'
            : 'bg-transparent top-nav-initial py-3.5 md:py-4'
        }`}
      >
        <Link
          href="/"
          className="font-display-lg text-2xl md:text-3xl tracking-tighter text-on-surface hover:opacity-70 transition-opacity duration-500 leading-none"
        >
          STUDIO
        </Link>

        <nav className="hidden md:flex gap-8 items-center font-label-caps text-label-caps uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 link-underline ${
                  isActive
                    ? 'text-primary border-b border-primary pb-0.5 font-semibold'
                    : 'text-on-surface-variant hover:text-primary hover:opacity-70'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="font-label-caps text-label-caps px-5 py-2 border border-outline text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-300 uppercase tracking-widest inline-block"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex items-center justify-center p-1.5 text-on-surface focus:outline-none"
          aria-label="Open Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        pathname={pathname}
      />
    </>
  );
}
