'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';

export default function StudioIntro() {
  return (
    <section className="py-section-gap bg-surface">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <AnimatedText delay={0}>
              <h2 className="font-label-caps text-label-caps text-outline tracking-[0.2em] uppercase">
                THE STUDIO
              </h2>
            </AnimatedText>
          </div>

          <div className="md:col-span-9 md:col-start-4">
            <AnimatedText delay={0.1}>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-8 max-w-4xl uppercase">
                WE CREATE INTERIORS WITH A DISTINCT SENSE OF PLACE.
              </h3>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
                Our practice is rooted in the belief that an interior should be a natural extension of its architecture. We approach each project with a quiet restraint, favoring pure materials, considered proportions, and a meticulous attention to detail over fleeting trends. The result is spaces that feel both elevated and entirely unpretentious—environments designed to age gracefully alongside those who inhabit them.
              </p>
            </AnimatedText>
          </div>
        </div>
      </Container>
    </section>
  );
}
