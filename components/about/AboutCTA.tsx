'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import Button from '@/components/ui/Button';

export default function AboutCTA() {
  return (
    <section className="px-margin-mobile md:px-margin-page mb-20 text-center">
      <Container clean className="max-w-4xl mx-auto">
        <AnimatedText delay={0}>
          <h2 className="font-display-lg md:text-display-lg text-display-lg-mobile text-on-surface mb-8 leading-tight">
            Begin a Dialogue
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 font-light">
            We take on a limited number of commissions annually to ensure uncompromising quality across all phases of design.
          </p>
          <Button href="/contact" variant="outline" className="px-10 py-4">
            Inquire About a Project
          </Button>
        </AnimatedText>
      </Container>
    </section>
  );
}
