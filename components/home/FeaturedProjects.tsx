'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { Project } from '@/types/project';

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  // Take top 3 projects for the home page asymmetrical grid
  const featuredList = projects.slice(0, 3);

  return (
    <section className="py-section-gap bg-surface-container-highest">
      <Container>
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <AnimatedText delay={0}>
            <div>
              <h2 className="font-label-caps text-label-caps text-outline tracking-[0.2em] mb-4 uppercase">
                SELECTED WORK
              </h2>
              <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-2xl leading-tight">
                Spaces That Speak Without Saying a Word.
              </h3>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Link
              href="/portfolio"
              className="font-label-caps text-label-caps link-underline pb-1 flex items-center gap-2 uppercase tracking-widest text-on-surface"
            >
              View All Projects{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </AnimatedText>
        </div>

        {featuredList.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-headline-sm text-headline-sm text-on-surface-variant font-light">
              No projects available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-grid-gutter">
            {featuredList.map((project, idx) => {
              let colSpan = 'md:col-span-8';
              let aspectRatio = 'h-[60vh] md:h-[80vh]';
              let marginTop = '';

              if (idx === 1) {
                colSpan = 'md:col-span-4';
                aspectRatio = 'h-[50vh]';
                marginTop = 'md:mt-48';
              } else if (idx === 2) {
                colSpan = 'md:col-span-6 md:col-start-4';
                aspectRatio = 'h-[60vh]';
                marginTop = 'mt-12 md:mt-24';
              }

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  colSpan={colSpan}
                  aspectRatio={aspectRatio}
                  marginTop={marginTop}
                />
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
