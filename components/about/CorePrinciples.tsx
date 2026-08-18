'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import { StudioValue } from '@/types/value';

interface CorePrinciplesProps {
  values: StudioValue[];
}

export default function CorePrinciples({ values }: CorePrinciplesProps) {
  return (
    <section className="px-margin-mobile md:px-margin-page mb-section-gap">
      <Container clean className="max-w-4xl mx-auto">
        <AnimatedText delay={0}>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-16 text-center">
            Core Principles
          </h2>
        </AnimatedText>

        <div className="flex flex-col border-t border-outline-variant/30">
          {values.map((val, idx) => (
            <AnimatedText key={val.id} delay={0.1 * (idx + 1)}>
              <div className="py-10 border-b border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer hover:bg-surface-container-highest transition-colors duration-500 px-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface md:w-1/3">
                  {val.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant md:w-1/2 mt-4 md:mt-0">
                  {val.description}
                </p>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors hidden md:block">
                  arrow_forward
                </span>
              </div>
            </AnimatedText>
          ))}
        </div>
      </Container>
    </section>
  );
}
