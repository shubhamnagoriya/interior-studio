'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import { Service } from '@/types/service';

interface ServicesPreviewProps {
  services: Service[];
}

export default function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="py-section-gap bg-surface border-t border-outline-variant/30">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <AnimatedText delay={0}>
            <div>
              <span className="font-label-caps text-label-caps text-outline tracking-[0.2em] mb-4 uppercase block">
                WHAT WE DO
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-2xl leading-tight">
                Architectural Interiors &amp; Curation
              </h2>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Link
              href="/services"
              className="font-label-caps text-label-caps link-underline pb-1 flex items-center gap-2 uppercase tracking-widest text-on-surface"
            >
              Explore All Services{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </AnimatedText>
        </div>

        {services.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-headline-sm text-headline-sm text-on-surface-variant font-light">
              No services available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
            {services.slice(0, 3).map((service, idx) => (
              <AnimatedText key={service.id} delay={0.1 * (idx + 1)}>
                <div className="bg-surface-container p-8 md:p-12 border border-outline-variant/30 h-full flex flex-col justify-between group hover:border-tertiary transition-colors duration-500">
                  <div>
                    <span className="font-label-caps text-label-caps text-tertiary block mb-6 tracking-widest">
                      {service.number}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 group-hover:text-tertiary transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant font-light mb-8">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="/services"
                    className="font-label-caps text-label-caps text-on-surface link-underline pb-0.5 inline-flex items-center gap-2 uppercase tracking-widest self-start mt-auto"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </AnimatedText>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
