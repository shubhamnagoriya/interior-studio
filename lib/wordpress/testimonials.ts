import { Testimonial } from '@/types/testimonial';
import { testimonialsData } from '@/data/testimonials';
import { fetchWPData, getWordPressBaseUrl } from './client';
import { WPPost } from '@/types/wordpress';
import { decodeHtmlEntities, cleanHtml, extractFeaturedImage } from './utils';

/**
 * Returns typed local mock testimonials.
 */
export async function getLocalTestimonials(): Promise<Testimonial[]> {
  return [...testimonialsData];
}

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
 * Falls back to local data if no WordPress URL is configured or on connection failure.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  if (!getWordPressBaseUrl()) {
    return getLocalTestimonials();
  }

  const wpTestimonials = await fetchWPData<WPPost[]>({
    endpoint: 'testimonials',
    query: { per_page: 100, status: 'publish' },
  });

  // If fetch failed completely (network/server error), fallback gracefully
  if (wpTestimonials === null) {
    return getLocalTestimonials();
  }

  // If WordPress returned an empty list, return empty array for empty states
  if (wpTestimonials.length === 0) {
    return [];
  }

  return wpTestimonials.map((post) => mapWPTestimonial(post));
}
