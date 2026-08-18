import { Project } from '@/types/project';

interface ProjectMetaProps {
  project: Project;
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-outline-variant/30 font-label-caps text-label-caps uppercase tracking-widest my-12">
      {project.client && (
        <div>
          <span className="text-outline block mb-1">CLIENT</span>
          <span className="text-on-surface">{project.client}</span>
        </div>
      )}
      <div>
        <span className="text-outline block mb-1">LOCATION</span>
        <span className="text-on-surface">{project.location || '—'}</span>
      </div>
      <div>
        <span className="text-outline block mb-1">YEAR</span>
        <span className="text-on-surface">{project.year || '—'}</span>
      </div>
      {project.category && (
        <div>
          <span className="text-outline block mb-1">CATEGORY</span>
          <span className="text-on-surface">{project.category}</span>
        </div>
      )}
      {project.services && project.services.length > 0 && (
        <div className="col-span-2 md:col-span-4 border-t border-outline-variant/20 pt-4 mt-2">
          <span className="text-outline block mb-2">SERVICES</span>
          <div className="flex flex-wrap gap-4 text-on-surface">
            {project.services.map((svc, idx) => (
              <span key={idx} className="bg-surface-container px-3 py-1 text-caption font-caption lowercase">
                {svc}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
