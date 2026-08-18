'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';
import { Service } from '@/types/service';

interface ProcessProps {
  services: Service[];
}

export default function Process({ services }: ProcessProps) {
  return (
    <section className="px-margin-mobile md:px-margin-page mb-section-gap bg-surface-container-highest py-32">
      <Container clean>
        <div className="mb-20 text-center">
          <AnimatedText delay={0}>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block mb-4">
              Our Approach
            </span>
            <h2 className="font-display-lg md:text-display-lg text-display-lg-mobile text-on-surface leading-tight">
              The Process of Purity
            </h2>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center max-w-7xl mx-auto">
          <div className="md:col-span-5 order-2 md:order-1 mt-12 md:mt-0">
            <ImageReveal
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo_WuOijMOr5q8nI4YvVUZCkdy1ugUUCqy_a2FRplWxVmoeSjUyd62_4kLrt-OTWkN-6ttXGQegYo7VYFFMfUWF77TD1wa7wnqU9qP1GAhfcod7yq9jnXDz31xydFnpexpzW0ftH1R2SCZFs2c2hU6ojmnBc5dOBD28eu0_DHDIMIDAHH73CbK1Jnv-8YusAdIAzIhZq7phat2Mtjlvm8fnJkLWEZ4NbM8EViYk9ZEUZ0qpuxzs9sI"
              alt="Calacatta marble kitchen detail"
              aspectRatio="h-[600px]"
            />
          </div>

          <div className="md:col-span-5 md:col-start-7 order-1 md:order-2">
            <div className="space-y-16">
              {services.map((service, idx) => (
                <AnimatedText key={service.id} delay={0.1 * (idx + 1)}>
                  <div className="border-b border-outline-variant/30 pb-6">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                      {service.number}. {service.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
