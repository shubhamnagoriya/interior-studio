import { Testimonial } from '@/types/testimonial';
import { fetchWPData, getWordPressBaseUrl } from './client';
import { WPPost } from '@/types/wordpress';
import { decodeHtmlEntities, cleanHtml, extractFeaturedImage } from './utils';

/**
 * Maps raw WordPress Custom Post Type into a clean Testimonial object.
 */
export function mapWPTestimonial(post: WPPost): Testimonial {
  const cleanName = decodeHtmlEntities(post.title?.rendered || 'Client');
  const rawContent = post.content?.rendered || '';
  const cleanQuote = cleanHtml(rawContent);
  const image = extractFeaturedImage(post);
  const projectName = post.acf?.project_name ? String(post.acf.project_name) : undefined;
  const location = post.acf?.location ? String(post.acf.location) : undefined;

  return {
    id: post.id,
    name: cleanName,
    clientName: cleanName,
    content: rawContent,
    quote: cleanQuote,
    image,
    projectName,
    location,
  };
}

/**
 * Retrieves all testimonials from WordPress REST API (/wp-json/wp/v2/testimonials).
 * Returns empty array on error or if no testimonials found to allow graceful UI empty states.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  if (!getWordPressBaseUrl()) {
    console.warn('[WordPress API] Base URL not configured.');
    return [];
  }

  const wpTestimonials = await fetchWPData<WPPost[]>({
    endpoint: 'testimonials',
    query: { per_page: 100 },
  });

  if (wpTestimonials === null || wpTestimonials.length === 0) {
    return [];
  }

  return wpTestimonials.map((post) => mapWPTestimonial(post));
}

