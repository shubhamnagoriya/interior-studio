'use client';

import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { Project } from '@/types/project';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // Extract unique categories dynamically from project data (WordPress terms or category field)
  const categories = useMemo(() => {
    const catList: string[] = [];
    projects.forEach((p) => {
      if (p.categories && p.categories.length > 0) {
        p.categories.forEach((c) => catList.push(c.name.toUpperCase()));
      } else if (p.category) {
        catList.push(p.category.toUpperCase());
      }
    });
    const unique = Array.from(new Set(catList));
    return ['ALL', ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory.toUpperCase() === 'ALL') {
      return projects;
    }
    return projects.filter((p) => {
      if (p.categories && p.categories.length > 0) {
        return p.categories.some(
          (c) =>
            c.name.toUpperCase() === activeCategory.toUpperCase() ||
            c.slug.toUpperCase() === activeCategory.toUpperCase()
        );
      }
      return p.category.toUpperCase() === activeCategory.toUpperCase();
    });
  }, [projects, activeCategory]);

  if (!projects || projects.length === 0) {
    return (
      <div className="py-24 text-center px-margin-mobile">
        <p className="font-headline-sm text-headline-sm text-on-surface-variant font-light">
          No projects available.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full">
      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center px-margin-mobile">
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
            No projects found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter md:gap-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              colSpan="col-span-1"
              aspectRatio="aspect-[4/5]"
            />
          ))}
        </div>
      )}
    </section>
  );
}
