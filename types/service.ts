export interface Service {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  image?: string | null;

  // UI presentation & compatibility fields
  number?: string;
  shortDescription?: string;
  description?: string;
  details?: string[];
  order?: number;
  featured?: boolean;
}
