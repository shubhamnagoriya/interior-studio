import { JournalPost } from '@/types/journal';
import { journalData } from '@/data/journal';
import { fetchWPData, getWordPressBaseUrl } from './client';
import { WPPost } from '@/types/wordpress';
import { decodeHtmlEntities, cleanHtml, extractFeaturedImage } from './utils';

const DEFAULT_JOURNAL_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBnGHm3JjIiF3o3kMM_eVKTZd5KUYHQOYA0sGuqWIiNtBQgSADGMe5qvqYxZo7RUofLp_vu6X7TDcruSPoFkFXArpQSIyHojuRT82x3ZYDBEZjj1m4VyVhVDEZcZI4JTctbcKIXycw_oDfxdhWLIX7EXKT0cmwT9BLEPMKWWHJmZA3y0EX9qo2v5mXVdW1tqdgShrbZQTJ5QO1XIvgBDobKiRPTNJPWUumsPEQe54qwBRGfE8Uc7iGM';

export async function getJournalPosts(): Promise<JournalPost[]> {
  if (!getWordPressBaseUrl()) {
    return journalData;
  }

  const wpPosts = await fetchWPData<WPPost[]>({
    endpoint: 'posts',
    query: { per_page: 10, status: 'publish' },
  });

  if (wpPosts && wpPosts.length > 0) {
    return wpPosts.map((post) => {
      const dateStr = post.date
        ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase()
        : 'OCTOBER 2026';

      return {
        id: String(post.id),
        slug: post.slug,
        title: decodeHtmlEntities(post.title?.rendered || 'Untitled Article'),
        category: post.acf?.category || 'Essays',
        date: dateStr,
        excerpt: cleanHtml(post.excerpt?.rendered || ''),
        featuredImage: extractFeaturedImage(post) || DEFAULT_JOURNAL_IMAGE,
        author: post.acf?.author || 'Studio Team',
        readTime: post.acf?.read_time || '5 min read',
      };
    });
  }

  return journalData;
}
