import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import ProjectMeta from '@/components/portfolio/ProjectMeta';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import ProjectCard from '@/components/portfolio/ProjectCard';
import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';
import WordPressContent from '@/components/ui/WordPressContent';

import {
  getProjectBySlug,
  getProjects,
  getRelatedProjects,
  getNextProject,
} from '@/lib/wordpress/projects';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | STUDIO INTERIORS`,
    description: project.excerpt,
  };
}

export default async function SingleProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const [relatedProjects, nextProject] = await Promise.all([
    getRelatedProjects(project.slug, project.category, 2),
    getNextProject(project.slug),
  ]);

  return (
    <div className="pt-32 md:pt-48 pb-section-gap">
      <Container clean className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 mb-12 uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Selected Projects
        </Link>

        {/* Project Hero Title & Introduction */}
        <AnimatedText delay={0}>
          <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-on-surface uppercase leading-tight max-w-5xl mb-6">
            {project.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl font-light">
            {project.excerpt}
          </p>
        </AnimatedText>

        {/* Project Metadata */}
        <ProjectMeta project={project} />

        {/* Featured Image */}
        {project.featuredImage && (
          <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-surface-dim my-12">
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        {/* Detailed Narrative & Design Details */}
        {(project.designNarrative || project.content || project.description) && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter my-20">
            <div className="md:col-span-4">
              <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-4">
                THE DESIGN NARRATIVE
              </h3>
              {project.designNarrative && (
                <h4 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface font-light leading-snug">
                  {project.designNarrative}
                </h4>
              )}
            </div>
            <div className="md:col-span-8">
              <WordPressContent content={project.content || project.description || ''} />
            </div>
          </div>
        )}

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <ProjectGallery images={project.gallery} title={project.title} />
        )}

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-outline-variant/30 pt-20 mt-24">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2">
                  CURATED SELECTION
                </span>
                <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
                  Related Commissions
                </h3>
              </div>
              <Link
                href="/portfolio"
                className="font-label-caps text-label-caps link-underline uppercase tracking-widest text-on-surface pb-1"
              >
                View Archive
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.id} project={rel} colSpan="col-span-1" aspectRatio="aspect-[4/3]" />
              ))}
            </div>
          </div>
        )}

        {/* Next Project Navigation */}
        {nextProject && (
          <div className="border-t border-outline-variant/30 pt-16 mt-20 flex flex-col md:flex-row justify-between items-center gap-8 bg-surface-container p-8 md:p-12">
            <div>
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2">
                NEXT PROJECT
              </span>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                {nextProject.title}
              </h4>
              <p className="font-caption text-caption text-on-surface-variant uppercase tracking-widest mt-1">
                {[nextProject.location, nextProject.category].filter(Boolean).join(' · ')}
              </p>
            </div>

            <Button href={`/portfolio/${nextProject.slug}`} variant="outline" icon>
              View Next Case Study
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
