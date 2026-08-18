export interface Testimonial {
  id: number | string;
  name: string;
  content: string;
  image: string | null;

  // UI presentation & compatibility fields
  quote?: string;
  clientName?: string;
  projectName?: string;
  location?: string;
}
