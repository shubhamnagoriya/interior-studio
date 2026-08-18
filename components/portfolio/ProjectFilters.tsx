'use client';

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProjectFilters({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFiltersProps) {
  return (
    <div className="mt-12 w-full border-t border-outline-variant/30 pt-6 flex flex-wrap gap-8 font-label-caps text-label-caps uppercase tracking-widest mb-16">
      {categories.map((cat) => {
        const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`transition-colors duration-300 cursor-pointer ${
              isActive
                ? 'text-primary border-b border-primary pb-1 font-semibold'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
