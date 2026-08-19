export interface ProjectCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Project {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  location: string | null;
  year: string | number | null;
  designNarrative: string | null;
  gallery: string[];
  categories: ProjectCategory[];

  // UI presentation & compatibility fields
  category: string;
  image?: string | null;
  description?: string;
  client?: string;
  services?: string[];
  featured?: boolean;
  featuredProject?: boolean;
}
