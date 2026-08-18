'use client';

import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';

export default function FinalCTA() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-page bg-inverse-surface text-inverse-on-surface flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl">
        <AnimatedText delay={0}>
          <h2 className="font-display-xl text-display-lg-mobile md:text-display-xl mb-12 uppercase leading-tight">
            LET&apos;S CREATE SOMETHING TIMELESS.
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <Button
            href="/contact"
            variant="outline"
            className="border-outline-variant text-inverse-on-surface hover:bg-surface-container-lowest hover:text-on-surface px-10 py-5"
            icon
          >
            START A CONVERSATION
          </Button>
        </AnimatedText>
      </div>
    </section>
  );
}
