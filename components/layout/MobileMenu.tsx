'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  pathname: string;
}

export default function MobileMenu({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface text-inverse-on-surface flex flex-col justify-between p-8 md:hidden transition-all duration-500">
      <div className="flex justify-between items-center">
        <Link href="/" onClick={onClose} className="font-display-lg text-display-lg-mobile text-inverse-on-surface">
          STUDIO
        </Link>
        <button onClick={onClose} className="p-2 text-inverse-on-surface" aria-label="Close Menu">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>

      <nav className="flex flex-col gap-8 items-start my-auto font-display-lg text-headline-md">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`transition-colors duration-300 ${
                isActive ? 'text-tertiary-fixed-dim underline' : 'text-inverse-on-surface hover:text-tertiary-fixed-dim'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col gap-6 pt-6 border-t border-outline-variant/30">
        <Link
          href="/contact"
          onClick={onClose}
          className="font-label-caps text-label-caps text-center px-8 py-4 border border-outline-variant text-inverse-on-surface hover:bg-surface-container-lowest hover:text-on-surface transition-colors duration-500 uppercase tracking-widest"
        >
          Start an Inquiry
        </Link>
        <p className="font-caption text-caption text-outline text-center">
          © {new Date().getFullYear()} STUDIO INTERIORS
        </p>
      </div>
    </div>
  );
}
