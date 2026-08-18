'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';

export default function AboutHero() {
  return (
    <section className="px-margin-mobile md:px-margin-page mb-section-gap">
      <Container clean className="max-w-6xl mx-auto">
        <AnimatedText delay={0}>
          <h1 className="font-display-xl md:text-display-xl text-display-lg-mobile text-on-surface mb-8 max-w-4xl leading-tight uppercase">
            WE CREATE SPACES WITH SOUL.
          </h1>
        </AnimatedText>

        <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden mt-12">
          <ImageReveal
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP9hYK5UHTY-LLDVCawMOnSd3zPmYKvKn6qPveyIXFvt0GvepaoTdDUG2HXzZdoUOphIhgcL6fNbuHmdc53RO-ih0Rsqr1ra4c4vhT2zUe2cS-JGR5SfOHQD376sv95KKFBOOMzBOjfKVXi1FbjS09Is7_r5f8hbiwOxMcAUM-AbnN8rDKSM4TNBquioDMJXfauPODEypef4x_mdH7RYx5LfxzWclec9crlu_oKGp6ALJZXF7zaATY"
            alt="Studio Interiors living space architectural photography"
            aspectRatio="h-full"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
