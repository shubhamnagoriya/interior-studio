import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ServicesList from '@/components/services/ServicesList';
import { getServices } from '@/lib/wordpress/services';

export const metadata = {
  title: 'Our Expertise - Studio Interiors',
  description: 'We approach every space as a bespoke architectural canvas. Full-service interior architecture for residential, commercial, and hospitality spaces.',
};

export const revalidate = 60;

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="pt-32 md:pt-48">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-page mb-section-gap">
        <Container clean className="max-w-4xl">
          <AnimatedText delay={0}>
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">
              Practice Areas
            </p>
            <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-on-surface mb-8 leading-tight">
              OUR EXPERTISE
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
              We approach every space as a bespoke architectural canvas. Our services are tailored to discerning clients who demand meticulous attention to detail, material purity, and an editorial aesthetic across diverse typologies.
            </p>
          </AnimatedText>
        </Container>
      </section>

      {/* Services List Container */}
      <ServicesList services={services} />
    </div>
  );
}
