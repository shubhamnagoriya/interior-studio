import { WPPost } from '@/types/wordpress';
import { ProjectCategory } from '@/types/project';

/**
 * Decodes common HTML character entities to their plain text equivalents.
 */
export function decodeHtmlEntities(text: string): string {
  if (!text) return '';
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&nbsp;/g, ' ');
}

/**
 * Strips HTML tags and returns cleaned, decoded plain text.
 */
export function cleanHtml(html: string): string {
  if (!html) return '';
  const stripped = html.replace(/<[^>]+>/g, '');
  return decodeHtmlEntities(stripped).trim();
}

/**
 * Extracts featured image URL from WordPress embedded media, ACF, or custom fields.
 */
export function extractFeaturedImage(post: WPPost): string | null {
  // 1. Embedded media from ?_embed request
  const embeddedMedia = post._embedded?.['wp:featuredmedia']?.[0];
  if (embeddedMedia?.source_url) {
    return embeddedMedia.source_url;
  }

  // 2. ACF featured_image field (can be URL string or media object)
  if (post.acf?.featured_image) {
    if (typeof post.acf.featured_image === 'string') return post.acf.featured_image;
    if (post.acf.featured_image?.url) return post.acf.featured_image.url;
  }

  // 3. ACF image / client_photo field
  if (post.acf?.image) {
    if (typeof post.acf.image === 'string') return post.acf.image;
    if (post.acf.image?.url) return post.acf.image.url;
  }

  return null;
}

/**
 * Extracts gallery image URLs from ACF photo_gallery, image_gallery, or embedded media.
 * Supports nested arrays, objects with full_image_url, and ID resolutions.
 */
export function extractGallery(post: WPPost): string[] {
  if (post.acf) {
    const rawGallery =
      post.acf.photo_gallery?.image_gallery ||
      post.acf.photo_gallery ||
      post.acf.image_gallery ||
      post.acf.gallery;

    if (Array.isArray(rawGallery)) {
      const flattened = rawGallery.flat(Infinity);
      const galleryUrls = flattened
        .map((item: any) => {
          if (typeof item === 'string') return item;
          if (item?.full_image_url) return item.full_image_url;
          if (item?.url) return item.url;
          if (item?.source_url) return item.source_url;
          return '';
        })
        .filter(Boolean);

      if (galleryUrls.length > 0) {
        return galleryUrls;
      }
    }
  }

  // Fallback to featured image if available
  const featured = extractFeaturedImage(post);
  return featured ? [featured] : [];
}

/**
 * Extracts structured category objects from WordPress embedded terms (e.g. project-categories) or ACF.
 */
export function extractCategoryObjects(post: WPPost): ProjectCategory[] {
  // 1. From embedded terms
  if (post._embedded?.['wp:term']) {
    const terms = post._embedded['wp:term'].flat();
    const categories: ProjectCategory[] = terms
      .filter((t) => t && t.name)
      .map((t) => ({
        id: t.id,
        name: decodeHtmlEntities(t.name),
        slug: t.slug || t.name.toLowerCase().replace(/\s+/g, '-'),
      }));

    if (categories.length > 0) {
      // Return unique categories by id/slug
      const seen = new Set<string>();
      return categories.filter((c) => {
        if (seen.has(c.slug)) return false;
        seen.add(c.slug);
        return true;
      });
    }
  }

  // 2. From ACF fields if any
  if (post.acf?.category) {
    const catName = decodeHtmlEntities(String(post.acf.category));
    return [{ id: 1, name: catName, slug: catName.toLowerCase().replace(/\s+/g, '-') }];
  }

  return [{ id: 1, name: 'Residential', slug: 'residential' }];
}

/**
 * Extracts all category names (as strings) for backwards-compatibility helper functions.
 */
export function extractCategories(post: WPPost): string[] {
  return extractCategoryObjects(post).map((c) => c.name);
}

/**
 * Extracts primary single category name for display in project cards and metadata.
 */
export function extractPrimaryCategory(post: WPPost): string {
  const cats = extractCategoryObjects(post);
  return cats.length > 0 ? cats[0].name : 'Residential';
}

/**
 * Extracts deliverable or feature items list from ACF or HTML list items.
 */
export function extractDetailsList(post: WPPost): string[] {
  if (post.acf?.details) {
    if (Array.isArray(post.acf.details)) return post.acf.details;
    if (typeof post.acf.details === 'string') {
      return post.acf.details.split('\n').map((s) => s.trim()).filter(Boolean);
    }
  }

  // Extract from HTML <li> items if present in content
  if (post.content?.rendered) {
    const matches = post.content.rendered.match(/<li[^>]*>(.*?)<\/li>/gi);
    if (matches && matches.length > 0) {
      return matches.map((item) => cleanHtml(item)).filter(Boolean);
    }
  }

  return [];
}
