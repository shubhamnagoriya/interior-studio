import { Project } from '@/types/project';
import { projectsData } from '@/data/projects';
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
 * Returns typed local mock projects for offline development/fallback.
 */
export async function getLocalProjects(): Promise<Project[]> {
  return [...projectsData];
}

/**
 * Maps raw WordPress Custom Post Type into the exact Project model.
 * Native fields:
 *   title.rendered → title
 *   slug → slug
 *   excerpt.rendered → excerpt
 *   content.rendered → content
 *   featured image (_embedded['wp:featuredmedia']) → featuredImage
 * ACF fields:
 *   location → location (mapped if available, undefined otherwise)
 *   year → year (mapped if available, undefined otherwise)
 *   gallery → gallery (mapped from acf.photo_gallery.image_gallery or acf.gallery)
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

  // Exact ACF fields mapping - handles both flat fields and nested groups (e.g. project_details)
  const details = post.acf?.project_details || post.acf?.projectDetails || {};

  const rawLocation =
    details.project_location ??
    details.location ??
    post.acf?.project_location ??
    post.acf?.location ??
    post.acf?.projectLocation ??
    null;
  const location =
    rawLocation !== null && rawLocation !== undefined && String(rawLocation).trim() !== ''
      ? String(rawLocation).trim()
      : null;

  const rawYear =
    details.project_year ??
    details.year ??
    post.acf?.project_year ??
    post.acf?.year ??
    post.acf?.projectYear ??
    null;
  const year =
    rawYear !== null && rawYear !== undefined && String(rawYear).trim() !== ''
      ? String(rawYear).trim()
      : null;

  const rawNarrative =
    details.design_narrative ??
    details.narrative ??
    post.acf?.design_narrative ??
    post.acf?.narrative ??
    post.acf?.designNarrative ??
    null;
  const designNarrative =
    rawNarrative !== null && rawNarrative !== undefined && String(rawNarrative).trim() !== ''
      ? decodeHtmlEntities(String(rawNarrative).trim())
      : null;

  const client = details.client ?? post.acf?.client ? String(details.client || post.acf?.client) : undefined;
  const rawServices = details.services_provided ?? details.services ?? post.acf?.services_provided ?? post.acf?.services;
  const services = Array.isArray(rawServices)
    ? rawServices
    : typeof rawServices === 'string'
    ? rawServices.split('\n').map((s: string) => s.trim()).filter(Boolean)
    : undefined;

  const isFeatured = Boolean(
    details.featured_project ??
    details.featured ??
    post.acf?.featured_project ??
    post.acf?.featured
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
  };
}

/**
 * Retrieves all projects from WordPress REST API (/wp-json/wp/v2/projects).
 * Falls back to local data only if no WordPress URL is configured or on connection failure.
 */
export async function getProjects(): Promise<Project[]> {
  if (!getWordPressBaseUrl()) {
    return getLocalProjects();
  }

  const wpProjects = await fetchWPData<WPPost[]>({
    endpoint: 'projects',
    query: { per_page: 100, status: 'publish' },
  });

  // If fetch failed completely (network/server error), fallback gracefully
  if (wpProjects === null) {
    return getLocalProjects();
  }

  // If WordPress returned an empty list, return empty array for empty states
  if (wpProjects.length === 0) {
    return [];
  }

  return wpProjects.map((post) => mapWPProject(post));
}

/**
 * Retrieves a single project by slug.
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  if (!getWordPressBaseUrl()) {
    const local = await getLocalProjects();
    return local.find((p) => p.slug === slug);
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
 * Retrieves featured projects for the homepage.
 * Prioritizes projects with ACF featured: true, or takes the first 3 projects.
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getProjects();
  const explicitFeatured = allProjects.filter((p) => p.featured === true);

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
