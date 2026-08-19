import AboutHero from '@/components/about/AboutHero';
import StudioPhilosophy from '@/components/about/StudioPhilosophy';
import Process from '@/components/home/Process';
import FounderProfile from '@/components/about/FounderProfile';
import CorePrinciples from '@/components/about/CorePrinciples';
import FullWidthVisual from '@/components/home/FullWidthVisual';
import AboutCTA from '@/components/about/AboutCTA';

import { getServices } from '@/lib/wordpress/services';
import { valuesData } from '@/data/values';

export const metadata = {
  title: 'About Studio | STUDIO INTERIORS',
  description: 'Learn about our practice, creative leadership, material philosophy, and architectural design principles.',
};

export const revalidate = 60;

export default async function AboutPage() {
  const services = await getServices();

  return (
    <div className="pt-32 md:pt-48 pb-section-gap">
      <AboutHero />
      <StudioPhilosophy />
      <Process services={services} />
      <FounderProfile />
      <CorePrinciples values={valuesData} />
      <FullWidthVisual />
      <AboutCTA />
    </div>
  );
}
