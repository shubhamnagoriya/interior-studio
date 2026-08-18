'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';
import Button from '@/components/ui/Button';

export default function AboutStudioPreview() {
  return (
    <section className="py-section-gap bg-surface px-margin-mobile md:px-margin-page">
      <Container clean className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <div className="md:col-span-6 h-[70vh] overflow-hidden">
            <ImageReveal
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALEFJuod4n8aZ0ErqOM-IYuiO7rvqGYId8Gj4w9FvXTDOCqfRTETfcv_DJvOclNToLQ737lNbjvoyGeq9nbgqsKwBWRApF3nM_48FNk_G6HNuBkvESsdidAvGIGPPJhNME2sC6kDURFrB6tHqRS4fTUwXKZ0pFkzEMqZAfCY7wes9zRCLTIcJxMpvNNWU3_dscNNyPiLbw01JnBdpen0JLp2eWbE2uxfTZXZc-NfcFIY69Rs1D5Yeh"
              alt="Elena Rostova Principal Architect portrait"
              aspectRatio="h-[70vh]"
            />
          </div>

          <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0">
            <AnimatedText delay={0}>
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-[0.2em] block mb-4">
                CREATIVE DIRECTION
              </span>
              <h2 className="font-display-lg md:text-display-lg text-display-lg-mobile text-on-surface mb-2 leading-tight">
                Elena Rostova
              </h2>
              <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest mb-6">
                Founder &amp; Principal Architect
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 font-light">
                Founded on the premise that our surroundings dictate our state of mind, STUDIO approaches each project with architectural rigor and unyielding material integrity.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Our portfolio spans international private residences and luxury commercial flagships, turning physical shells into serene, enduring environments.
              </p>
              <Button href="/about" variant="outline">
                Learn About Our Studio
              </Button>
            </AnimatedText>
          </div>
        </div>
      </Container>
    </section>
  );
}
