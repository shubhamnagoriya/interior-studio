'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  colSpan?: string;
  aspectRatio?: string;
  marginTop?: string;
}

const DEFAULT_PROJECT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAtaX4RaZLK3sEauXvMC1DGCGKXIH_uXpICQfAYzuZsE4_wW8FJzIAC7XH02MrVYec7wN1NgpoAFICf8izRF5AF8yzIHsFpIdyTpkxE2Kt7KvOJ4J9JJUay6iIgfxX1ui7m5Aiel6t3ZcZcWO5C5Vy0aPURBRpimNsOJFN3TCtUxyS_57K4y6KZl7scSFApSgJ7ces9OoDI_f-hZm5o74CuXtSrnqpnCn9GFnUd38fUdX0lCcgdqdAz';

export default function ProjectCard({
  project,
  colSpan = 'col-span-1',
  aspectRatio = 'aspect-[4/5]',
  marginTop = '',
}: ProjectCardProps) {
  const imageSrc = project.featuredImage || DEFAULT_PROJECT_IMAGE;

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`project-card group cursor-pointer flex flex-col ${colSpan} ${marginTop}`}
    >
      <div className={`relative w-full overflow-hidden bg-surface-container-highest ${aspectRatio}`}>
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="project-image object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="project-image-overlay absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Overlay Metadata on Hover matching Stitch */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 project-meta bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <h3 className="font-headline-md text-headline-md text-white mb-1">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 font-label-caps text-label-caps text-white/80 uppercase tracking-widest">
            {project.location && <span>{project.location}</span>}
            {project.location && project.category && <span className="w-1 h-1 bg-white/40 rounded-full" />}
            {project.category && <span>{project.category}</span>}
            {project.year && (
              <>
                {(project.location || project.category) && <span className="w-1 h-1 bg-white/40 rounded-full" />}
                <span>{project.year}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Standard Text Below Card for Clean Mobile Display */}
      <div className="flex justify-between items-start mt-4 md:hidden">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
            {project.title}
          </h3>
          <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            {[project.location, project.category].filter(Boolean).join(' · ')}
          </p>
        </div>
        {project.year && <span className="font-caption text-caption text-outline">{project.year}</span>}
      </div>
    </Link>
  );
}
