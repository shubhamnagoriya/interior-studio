import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ImageReveal from '@/components/ui/ImageReveal';
import ContactInfo from '@/components/contact/ContactInfo';
import InquiryForm from '@/components/contact/InquiryForm';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'Contact & Inquiries | STUDIO INTERIORS',
  description: 'Inquire about private residential, commercial, or hospitality architectural interior commissions.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 md:pt-44">
      {/* Hero & Contact Grid */}
      <section className="px-margin-mobile md:px-margin-page pb-section-gap w-full max-w-[1920px] mx-auto">
        <Container clean>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-grid-gutter">
            {/* Left Column: Heading & Contact Info */}
            <div className="md:col-span-5 md:col-start-1 flex flex-col justify-start z-10 relative">
              <AnimatedText delay={0}>
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 uppercase leading-tight max-w-[12ch]">
                  LET&apos;S TALK ABOUT YOUR SPACE.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-16 max-w-md font-light">
                  We take on a limited number of commissions annually to ensure uncompromising quality across all phases of design.
                </p>
              </AnimatedText>

              <ContactInfo />
            </div>

            {/* Right Column: Inquiry Form Canvas */}
            <div className="md:col-span-6 md:col-start-7 relative z-20">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Architectural Image Block (Studio Location Visual) */}
      <section className="pb-section-gap px-margin-mobile md:px-margin-page w-full max-w-[1920px] mx-auto">
        <Container clean>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-grid-gutter">
            <div className="md:col-span-8 md:col-start-3 relative h-[60vh] md:h-[80vh] overflow-hidden">
              <ImageReveal
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO1MxhkMWegKNyukWwtEFeaTsm9aHM3euoOzh5NWGnW8HpRIPuEMDcS96Wmsap9E6Ou_PjM1ywnfD50JB59kWMHk8dxt7E0nXaxim1SYhZJSkIehKwzdaUEG8EDyzlg6BZp0-7dGnxOkTxVUqEsPaPnX1EYeO_B4sfwXwY_oOpvdYfaBq0svmGSIPPp4qH7uhSAo6HiqCX5KU4h4Fy81E8g0roSk2qY-wqz3fL80FNSMTSLQHnEl1c"
                alt="Travertine stone architectural corner"
                aspectRatio="h-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
