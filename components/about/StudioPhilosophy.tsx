'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';

export default function StudioPhilosophy() {
  return (
    <section className="px-margin-mobile md:px-margin-page mb-section-gap">
      <Container clean>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter max-w-7xl mx-auto">
          {/* Empty space for editorial feel */}
          <div className="hidden md:block md:col-span-2" />
          <div className="md:col-span-4">
            <AnimatedText delay={0}>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block mb-4">
                Philosophy
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
                Restraint over ornamentation.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 font-light">
                We believe that true luxury whispers. It is found in the meticulous selection of materials, the precision of architectural alignment, and the deliberate curation of space. Our design philosophy is rooted in creating serene environments that serve as a quiet backdrop for life.
              </p>
              <a href="#founder" className="link-underline font-label-caps text-label-caps text-on-surface uppercase pb-1 inline-block">
                Read Full Manifesto
              </a>
            </AnimatedText>
          </div>

          <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 h-[500px]">
            <ImageReveal
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnGHm3JjIiF3o3kMM_eVKTZd5KUYHQOYA0sGuqWIiNtBQgSADGMe5qvqYxZo7RUofLp_vu6X7TDcruSPoFkFXArpQSIyHojuRT82x3ZYDBEZjj1m4VyVhVDEZcZI4JTctbcKIXycw_oDfxdhWLIX7EXKT0cmwT9BLEPMKWWHJmZA3y0EX9qo2v5mXVdW1tqdgShrbZQTJ5QO1XIvgBDobKiRPTNJPWUumsPEQe54qwBRGfE8Uc7iGM"
              alt="Material texture swatches travertine and linen"
              aspectRatio="h-[500px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
