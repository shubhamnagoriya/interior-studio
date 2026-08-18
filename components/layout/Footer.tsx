'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface flex flex-col gap-16 px-margin-mobile md:px-margin-page py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
        <div className="md:col-span-6">
          <div className="font-display-lg text-display-lg text-inverse-on-surface mb-4">
            STUDIO
          </div>
          <p className="font-caption text-caption text-outline max-w-md">
            A multidisciplinary practice dedicated to architectural purity, material honesty, and the quiet poetry of space.
          </p>
        </div>

        <div className="md:col-span-6 grid grid-cols-2 gap-8 font-body-md text-body-md">
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-tertiary-fixed tracking-widest uppercase">Social</h4>
            <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-300">
              Instagram
            </a>
            <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-300">
              Pinterest
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-tertiary-fixed tracking-widest uppercase">Studio</h4>
            <Link href="/about" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-300">
              Journal
            </Link>
            <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-300">
              Privacy
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center text-caption font-caption text-on-surface-variant gap-4">
        <p>© {new Date().getFullYear()} STUDIO INTERIORS. ARCHITECTURAL PURITY.</p>
        
        <button
          onClick={scrollToTop}
          className="hover:text-tertiary-fixed-dim transition-colors flex items-center gap-2 group cursor-pointer"
        >
          <span>Back to top</span>
          <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">
            arrow_upward
          </span>
        </button>
      </div>
    </footer>
  );
}
