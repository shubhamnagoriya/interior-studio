import { Service } from '@/types/service';
import { servicesData } from '@/data/services';
import { fetchWPData, getWordPressBaseUrl } from './client';
import { WPPost } from '@/types/wordpress';
import {
  decodeHtmlEntities,
  cleanHtml,
  extractFeaturedImage,
  extractDetailsList,
} from './utils';

/**
 * Returns typed local mock services.
 */
export async function getLocalServices(): Promise<Service[]> {
  return [...servicesData].sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Maps raw WordPress Custom Post Type into a clean Service object.
 */
export function mapWPService(post: WPPost, index = 0): Service {
  const cleanTitle = decodeHtmlEntities(post.title?.rendered || 'Untitled Service');
  const cleanExcerpt = cleanHtml(post.excerpt?.rendered || '');
  const rawContent = post.content?.rendered || '';
  const cleanDescription = cleanHtml(rawContent) || cleanExcerpt;
  const image = extractFeaturedImage(post);
  const details = extractDetailsList(post);

  return {
    id: post.id,
    slug: post.slug,
    title: cleanTitle,
    excerpt: cleanExcerpt,
    content: rawContent,
    featuredImage: image,
    image,
    number: String(index + 1).padStart(2, '0'),
    shortDescription: post.acf?.short_description || cleanExcerpt,
    description: cleanDescription,
    details,
    order: post.acf?.order ?? (index + 1),
    featured: Boolean(post.acf?.featured),
  };
}

/**
 * Retrieves all services from WordPress REST API (/wp-json/wp/v2/services).
 * Falls back to local data if no WordPress URL is configured or on connection failure.
 */
export async function getServices(): Promise<Service[]> {
  if (!getWordPressBaseUrl()) {
    return getLocalServices();
  }

  const wpServices = await fetchWPData<WPPost[]>({
    endpoint: 'services',
    query: { per_page: 100, status: 'publish' },
  });

  // If fetch failed completely (network/server error), fallback gracefully
  if (wpServices === null) {
    return getLocalServices();
  }

  // If WordPress returned an empty list, return empty array for empty states
  if (wpServices.length === 0) {
    return [];
  }

  return wpServices
    .map((post, idx) => mapWPService(post, idx))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Retrieves a single service by slug.
 */
export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  if (!getWordPressBaseUrl()) {
    const local = await getLocalServices();
    return local.find((s) => s.slug === slug);
  }

  const wpServices = await fetchWPData<WPPost[]>({
    endpoint: 'services',
    query: { slug, status: 'publish' },
  });

  if (wpServices && wpServices.length > 0) {
    return mapWPService(wpServices[0], 0);
  }

  // Fallback check in local data if not found or on API error
  const fallback = await getLocalServices();
  return fallback.find((s) => s.slug === slug);
}
