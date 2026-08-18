'use client';

import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';

export default function FounderProfile() {
  return (
    <section id="founder" className="px-margin-mobile md:px-margin-page mb-section-gap">
      <Container clean className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <div className="md:col-span-6 h-[80vh] overflow-hidden">
            <ImageReveal
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALEFJuod4n8aZ0ErqOM-IYuiO7rvqGYId8Gj4w9FvXTDOCqfRTETfcv_DJvOclNToLQ737lNbjvoyGeq9nbgqsKwBWRApF3nM_48FNk_G6HNuBkvESsdidAvGIGPPJhNME2sC6kDURFrB6tHqRS4fTUwXKZ0pFkzEMqZAfCY7wes9zRCLTIcJxMpvNNWU3_dscNNyPiLbw01JnBdpen0JLp2eWbE2uxfTZXZc-NfcFIY69Rs1D5Yeh"
              alt="Elena Rostova Founder portrait"
              aspectRatio="h-[80vh]"
            />
          </div>

          <div className="md:col-span-4 md:col-start-8 mt-12 md:mt-0">
            <AnimatedText delay={0.2}>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block mb-4">
                Creative Direction
              </span>
              <h2 className="font-display-lg md:text-display-lg text-display-lg-mobile text-on-surface mb-2 leading-tight">
                Elena Rostova
              </h2>
              <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest mb-8">
                Founder &amp; Principal Architect
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 font-light">
                With over two decades of experience spanning residential and boutique hospitality, Elena founded STUDIO on a singular premise: that our surroundings dictate our state of mind.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 font-normal">
                Her work has been recognized globally for its uncompromising commitment to minimalism and material integrity, turning vast architectural shells into intimate, soulful sanctuaries.
              </p>
            </AnimatedText>
          </div>
        </div>
      </Container>
    </section>
  );
}
