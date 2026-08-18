import Hero from '@/components/home/Hero';
import StudioIntro from '@/components/home/StudioIntro';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import DesignApproach from '@/components/home/DesignApproach';
import ServicesPreview from '@/components/home/ServicesPreview';
import FullWidthVisual from '@/components/home/FullWidthVisual';
import AboutStudioPreview from '@/components/home/AboutStudioPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Process from '@/components/home/Process';
import JournalPreview from '@/components/home/JournalPreview';
import FinalCTA from '@/components/home/FinalCTA';

import { getFeaturedProjects } from '@/lib/wordpress/projects';
import { getServices } from '@/lib/wordpress/services';
import { getTestimonials } from '@/lib/wordpress/testimonials';
import { getJournalPosts } from '@/lib/wordpress/journal';

export const revalidate = 60;

export default async function HomePage() {
  const [featuredProjects, services, testimonials, journalPosts] = await Promise.all([
    getFeaturedProjects(),
    getServices(),
    getTestimonials(),
    getJournalPosts(),
  ]);

  return (
    <>
      <Hero />
      <StudioIntro />
      <FeaturedProjects projects={featuredProjects} />
      <DesignApproach />
      <ServicesPreview services={services} />
      <FullWidthVisual />
      <AboutStudioPreview />
      <TestimonialsSection testimonials={testimonials} />
      <Process services={services} />
      <JournalPreview posts={journalPosts} />
      <FinalCTA />
    </>
  );
}
