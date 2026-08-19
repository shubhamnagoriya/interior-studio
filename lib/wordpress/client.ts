import { WPFetchOptions } from '@/types/wordpress';

/**
 * Retrieves the WordPress Base URL from environment variables.
 * Prioritizes NEXT_PUBLIC_WORDPRESS_URL as required.
 */
export function getWordPressBaseUrl(): string | null {
  const envUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ||
    process.env.WORDPRESS_URL ||
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!envUrl || envUrl.trim() === '' || envUrl.includes('YOUR-WORDPRESS-DOMAIN.com')) {
    return null;
  }
  return envUrl.trim().replace(/\/+$/, '');
}

/**
 * Reusable WordPress REST API client.
 * Automatically adds _embed=true, handles errors gracefully, and returns typed responses.
 */
export async function fetchWPData<T>({
  endpoint,
  query,
  embed = true,
}: WPFetchOptions): Promise<T | null> {
  const baseUrl = getWordPressBaseUrl();
  if (!baseUrl) {
    console.warn('[WordPress API] Missing NEXT_PUBLIC_WORDPRESS_URL environment variable.');
    return null;
  }

  try {
    // Construct clean REST URL: {baseUrl}/wp-json/wp/v2/{endpoint}
    const cleanEndpoint = endpoint.replace(/^\/+/, '');
    const url = new URL(`${baseUrl}/wp-json/wp/v2/${cleanEndpoint}`);

    // Embed media and taxonomies by default unless explicitly disabled
    if (embed && !url.searchParams.has('_embed')) {
      url.searchParams.append('_embed', 'true');
    }

    // Append custom query parameters
    if (query) {
      Object.entries(query).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
          url.searchParams.set(key, String(val));
        }
      });
    }

    // Use AbortController for reliable timeout protection (15 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 },
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`[WordPress API] HTTP ${res.status} ${res.statusText} at ${url.pathname}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.warn(`[WordPress API] Request timed out (15s) for endpoint: ${endpoint}`);
    } else {
      console.warn(`[WordPress API] Connection issue for ${endpoint}:`, error?.message || error);
    }
    return null;
  }
}

