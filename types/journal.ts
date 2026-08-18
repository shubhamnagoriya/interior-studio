export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  author?: string;
  readTime?: string;
}
