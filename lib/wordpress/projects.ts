import { Project } from '@/types/project';
import { fetchWPData, getWordPressBaseUrl } from './client';
import { WPPost } from '@/types/wordpress';
import {
  decodeHtmlEntities,
  cleanHtml,
  extractFeaturedImage,
  extractGallery,
  extractCategoryObjects,
  extractPrimaryCategory,
} from './utils';

// Fallback high-resolution architectural image if media is missing
const DEFAULT_PROJECT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAtaX4RaZLK3sEauXvMC1DGCGKXIH_uXpICQfAYzuZsE4_wW8FJzIAC7XH02MrVYec7wN1NgpoAFICf8izRF5AF8yzIHsFpIdyTpkxE2Kt7KvOJ4J9JJUay6iIgfxX1ui7m5Aiel6t3ZcZcWO5C5Vy0aPURBRpimNsOJFN3TCtUxyS_57K4y6KZl7scSFApSgJ7ces9OoDI_f-hZm5o74CuXtSrnqpnCn9GFnUd38fUdX0lCcgdqdAz';

/**
 * Maps raw WordPress Custom Post Type into the exact Project model.
 * Native fields:
 *   title.rendered → title
 *   slug → slug
 *   excerpt.rendered → excerpt
 *   content.rendered → content
 *   featured image (_embedded['wp:featuredmedia']) → featuredImage
 * ACF fields:
 *   project_location → location
 *   project_year → year
 *   design_narrative → designNarrative (using acf.design_narrative)
 *   photo_gallery → gallery (mapped from photo_gallery.image_gallery or photo_gallery)
 *   featured_project → featured
 * Categories:
 *   _embedded['wp:term'] → categories ({ id, name, slug }[])
 */
export function mapWPProject(post: WPPost): Project {
  const cleanTitle = decodeHtmlEntities(post.title?.rendered || 'Untitled Project');
  const cleanExcerpt = cleanHtml(post.excerpt?.rendered || '');
  const rawContent = post.content?.rendered || '';
  const cleanDescription = cleanHtml(rawContent) || cleanExcerpt;
  const image = extractFeaturedImage(post);
  const featuredImage = image || DEFAULT_PROJECT_IMAGE;
  const gallery = extractGallery(post);
  const categories = extractCategoryObjects(post);
  const primaryCategory = extractPrimaryCategory(post);

  // Exact ACF fields mapping
  const rawLocation =
    post.acf?.project_location ??
    post.acf?.location ??
    post.acf?.project_details?.project_location ??
    null;
  const location =
    rawLocation !== null && rawLocation !== undefined && String(rawLocation).trim() !== ''
      ? String(rawLocation).trim()
      : null;

  const rawYear =
    post.acf?.project_year ??
    post.acf?.year ??
    post.acf?.project_details?.project_year ??
    null;
  const year =
    rawYear !== null && rawYear !== undefined && String(rawYear).trim() !== ''
      ? String(rawYear).trim()
      : null;

  // Uses acf.design_narrative as explicitly required
  const rawNarrative =
    post.acf?.design_narrative ??
    post.acf?.narrative ??
    post.acf?.project_details?.design_narrative ??
    null;
  const designNarrative =
    rawNarrative !== null && rawNarrative !== undefined && String(rawNarrative).trim() !== ''
      ? decodeHtmlEntities(String(rawNarrative).trim())
      : null;

  const client = post.acf?.client ? String(post.acf.client) : undefined;
  const rawServices = post.acf?.services_provided ?? post.acf?.services;
  const services = Array.isArray(rawServices)
    ? rawServices
    : typeof rawServices === 'string' && rawServices.trim() !== ''
    ? rawServices.split('\n').map((s: string) => s.trim()).filter(Boolean)
    : undefined;

  const isFeatured = Boolean(
    post.acf?.featured_project ??
    post.acf?.featured ??
    post.acf?.featuredProject ??
    post.acf?.project_details?.featured_project
  );

  return {
    id: post.id,
    slug: post.slug,
    title: cleanTitle,
    category: primaryCategory,
    categories,
    location,
    year,
    designNarrative,
    excerpt: cleanExcerpt,
    content: rawContent,
    description: cleanDescription,
    image,
    featuredImage,
    gallery: gallery.length > 0 ? gallery : (image ? [image] : []),
    client,
    services,
    featured: isFeatured,
    featuredProject: isFeatured,
  };
}

/**
 * Retrieves all projects from WordPress REST API (/wp-json/wp/v2/projects).
 * Returns empty array on error or if no projects found to allow graceful UI empty states.
 */
export async function getProjects(): Promise<Project[]> {
  if (!getWordPressBaseUrl()) {
    console.warn('[WordPress API] Base URL not configured.');
    return [];
  }

  const wpProjects = await fetchWPData<WPPost[]>({
    endpoint: 'projects',
    query: { per_page: 100, status: 'publish' },
  });

  if (wpProjects === null || wpProjects.length === 0) {
    return [];
  }

  return wpProjects.map((post) => mapWPProject(post));
}

/**
 * Retrieves a single project by slug from WordPress REST API.
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  if (!getWordPressBaseUrl()) {
    return undefined;
  }

  const wpProjects = await fetchWPData<WPPost[]>({
    endpoint: 'projects',
    query: { slug, status: 'publish' },
  });

  if (wpProjects && wpProjects.length > 0) {
    return mapWPProject(wpProjects[0]);
  }

  return undefined;
}

/**
 * Retrieves featured projects for the homepage from live WordPress data.
 * Prioritizes projects with ACF featured_project: true, or takes the first 3 projects.
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getProjects();
  if (allProjects.length === 0) return [];

  const explicitFeatured = allProjects.filter(
    (p) => p.featured === true || p.featuredProject === true
  );

  if (explicitFeatured.length >= 3) {
    return explicitFeatured.slice(0, 3);
  }

  if (explicitFeatured.length > 0) {
    const remaining = allProjects.filter((p) => !explicitFeatured.includes(p));
    return [...explicitFeatured, ...remaining].slice(0, 3);
  }

  return allProjects.slice(0, 3);
}

/**
 * Retrieves related projects in the same category (or adjacent commissions).
 */
export async function getRelatedProjects(
  currentSlug: string,
  category: string,
  limit = 2
): Promise<Project[]> {
  const projects = await getProjects();
  if (projects.length === 0) return [];

  const filtered = projects.filter(
    (p) => p.slug !== currentSlug && p.category.toLowerCase() === category.toLowerCase()
  );

  if (filtered.length >= limit) {
    return filtered.slice(0, limit);
  }

  // Fallback to remaining projects if same category count is low
  const remaining = projects.filter((p) => p.slug !== currentSlug && !filtered.includes(p));
  return [...filtered, ...remaining].slice(0, limit);
}

/**
 * Retrieves the next project in sequence for bottom navigation.
 */
export async function getNextProject(currentSlug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  if (projects.length === 0) return undefined;

  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0];
  }

  return projects[currentIndex + 1];
}

