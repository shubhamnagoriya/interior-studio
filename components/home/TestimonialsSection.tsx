'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import { Testimonial } from '@/types/testimonial';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-section-gap bg-surface-container-low border-t border-outline-variant/30">
      <Container>
        <AnimatedText delay={0}>
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-outline tracking-[0.2em] mb-4 uppercase block">
              CLIENT VOICES
            </span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
              Refinement Recognized
            </h2>
          </div>
        </AnimatedText>

        {testimonials.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-headline-sm text-headline-sm text-on-surface-variant font-light">
              No client voices available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
            {testimonials.map((t, idx) => (
              <AnimatedText key={t.id} delay={0.1 * (idx + 1)}>
                <TestimonialCard testimonial={t} />
              </AnimatedText>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
