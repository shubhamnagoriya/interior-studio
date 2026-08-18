'use client';

import Link from 'next/link';
import ImageReveal from '@/components/ui/ImageReveal';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const DEFAULT_SERVICE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAVPTkNdItZWSYoBQsDy3b25j9Q69XwLSnLxT_jjiDWiEV5LuHVoAyoyHmLSGfxp7U-rUDHTGuvQdj6ih_ZYJFULGAL5Ep7ZKH-M63pAuCryg5_RhV3e7Hp0HYTqxJ1_cahnQv2dDg8Yrq_K2kR-XQwcxQejZeeH1gXQgagDHkoQaifhzDj1NAgyXsRsxaVhFUJ7TgbiM1tvvgAfy6SZIp3u0HJs_roD-PQgoOVaxN0KvG9vVXFF-t1';

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;
  const imageSrc = service.featuredImage || service.image || DEFAULT_SERVICE_IMAGE;

  if (isEven) {
    // Card Layout Variant A (Text overlapping left 4 cols, Image right 8 cols)
    return (
      <section className="px-margin-mobile md:px-margin-page group">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-grid-gutter items-center">
          {/* Text Block */}
          <div className="md:col-span-4 flex flex-col order-2 md:order-1 relative z-10 md:-mr-12">
            <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 shadow-sm">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-label-caps text-label-caps text-on-surface-variant/50">
                  {service.number}
                </span>
                <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface">
                  {service.title}
                </h2>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                {service.description}
              </p>

              {service.details && service.details.length > 0 && (
                <>
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-4 border-b border-outline-variant/30 pb-2 uppercase tracking-widest">
                    Deliverables
                  </h3>
                  <ul className="flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant mb-8">
                    {service.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] mt-1 text-tertiary">
                          check
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link
                href="/portfolio"
                className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest link-underline flex items-center gap-2 w-fit"
              >
                View Projects
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Image Block */}
          <div className="md:col-span-8 order-1 md:order-2">
            <ImageReveal
              src={imageSrc}
              alt={`${service.title} Interior Design`}
              aspectRatio="h-[60vh] md:h-[80vh]"
            />
          </div>
        </div>
      </section>
    );
  }

  // Card Layout Variant B (Image left 7 cols, Spacer 1 col, Text right 4 cols)
  return (
    <section className="px-margin-mobile md:px-margin-page group">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-grid-gutter items-center">
        {/* Image Block */}
        <div className="md:col-span-7">
          <ImageReveal
            src={imageSrc}
            alt={`${service.title} Interior Design`}
            aspectRatio="h-[60vh] md:h-[70vh]"
          />
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:col-span-1" />

        {/* Text Block */}
        <div className="md:col-span-4 flex flex-col">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-label-caps text-label-caps text-on-surface-variant/50">
              {service.number}
            </span>
            <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface">
              {service.title}
            </h2>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            {service.description}
          </p>

          {service.details && service.details.length > 0 && (
            <>
              <h3 className="font-label-caps text-label-caps text-on-surface mb-4 border-b border-outline-variant/30 pb-2 uppercase tracking-widest">
                Deliverables
              </h3>
              <ul className="flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant mb-8">
                {service.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] mt-1 text-tertiary">
                      check
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <Link
            href="/portfolio"
            className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest link-underline flex items-center gap-2 w-fit"
          >
            Explore {service.title}
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
