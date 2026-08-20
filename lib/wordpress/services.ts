import { Service } from '@/types/service';
import { fetchWPData, getWordPressBaseUrl } from './client';
import { WPPost } from '@/types/wordpress';
import {
  decodeHtmlEntities,
  cleanHtml,
  extractFeaturedImage,
  extractDetailsList,
} from './utils';

// Fallback high-resolution architectural image if media is missing
const DEFAULT_SERVICE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAVPTkNdItZWSYoBQsDy3b25j9Q69XwLSnLxT_jjiDWiEV5LuHVoAyoyHmLSGfxp7U-rUDHTGuvQdj6ih_ZYJFULGAL5Ep7ZKH-M63pAuCryg5_RhV3e7Hp0HYTqxJ1_cahnQv2dDg8Yrq_K2kR-XQwcxQejZeeH1gXQgagDHkoQaifhzDj1NAgyXsRsxaVhFUJ7TgbiM1tvvgAfy6SZIp3u0HJs_roD-PQgoOVaxN0KvG9vVXFF-t1';

/**
 * Maps raw WordPress Custom Post Type into a clean Service object.
 */
export function mapWPService(post: WPPost, index = 0): Service {
  const cleanTitle = decodeHtmlEntities(post.title?.rendered || 'Untitled Service');
  const cleanExcerpt = cleanHtml(post.excerpt?.rendered || '');
  const rawContent = post.content?.rendered || '';
  const cleanDescription = cleanHtml(rawContent) || cleanExcerpt;
  const image = extractFeaturedImage(post);
  const featuredImage = image || DEFAULT_SERVICE_IMAGE;
  const details = extractDetailsList(post);

  return {
    id: post.id,
    slug: post.slug,
    title: cleanTitle,
    excerpt: cleanExcerpt,
    content: rawContent,
    featuredImage,
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
 * Returns empty array on error or if no services found to allow graceful UI empty states.
 */
export async function getServices(): Promise<Service[]> {
  if (!getWordPressBaseUrl()) {
    console.warn('[WordPress API] Base URL not configured.');
    return [];
  }

  const wpServices = await fetchWPData<WPPost[]>({
    endpoint: 'services',
    query: { per_page: 100 },
  });

  if (wpServices === null || wpServices.length === 0) {
    return [];
  }

  return wpServices
    .map((post, idx) => mapWPService(post, idx))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Retrieves a single service by slug from WordPress REST API.
 */
export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  if (!getWordPressBaseUrl()) {
    return undefined;
  }

  const wpServices = await fetchWPData<WPPost[]>({
    endpoint: 'services',
    query: { slug, status: 'publish' },
  });

  if (wpServices && wpServices.length > 0) {
    return mapWPService(wpServices[0], 0);
  }

  return undefined;
}

