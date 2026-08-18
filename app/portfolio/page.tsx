import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ProjectGrid from '@/components/portfolio/ProjectGrid';
import { getProjects } from '@/lib/wordpress/projects';

export const metadata = {
  title: 'STUDIO | Selected Projects',
  description: 'Explore our architectural interior portfolio spanning luxury residential, commercial, hospitality, and retail spaces.',
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="pt-32 md:pt-48 pb-section-gap">
      <section className="px-margin-mobile md:px-margin-page mb-12">
        <Container clean className="max-w-7xl mx-auto">
          <AnimatedText delay={0}>
            <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-primary max-w-4xl leading-tight uppercase">
              SELECTED PROJECTS
            </h1>
          </AnimatedText>
        </Container>
      </section>

      <section className="px-margin-mobile md:px-margin-page">
        <Container clean className="max-w-7xl mx-auto">
          <ProjectGrid projects={projects} />
        </Container>
      </section>
    </div>
  );
}
