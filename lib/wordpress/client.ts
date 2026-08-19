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

  if (!envUrl || typeof envUrl !== 'string') {
    return null;
  }

  const cleaned = envUrl
    .trim()
    .replace(/^["']|["']$/g, '')
    .replace(/\/+$/, '');

  if (!cleaned || cleaned === '' || cleaned.includes('YOUR-WORDPRESS-DOMAIN.com')) {
    return null;
  }

  return cleaned;
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

    const fullUrl = url.toString();
    console.log(`[WordPress API] Requesting: ${fullUrl}`);

    const res = await fetch(fullUrl, {
      next: { revalidate: 60 },
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 NextJS/14',
      },
    });

    clearTimeout(timeoutId);

    console.log(`[WordPress API] Response HTTP ${res.status} for ${url.pathname}`);

    if (!res.ok) {
      console.warn(`[WordPress API] Failed HTTP ${res.status} ${res.statusText} at ${url.pathname}`);
      return null;
    }

    const data = (await res.json()) as T;
    const count = Array.isArray(data) ? data.length : data ? 1 : 0;
    console.log(`[WordPress API] Successfully parsed ${count} item(s) from ${url.pathname}`);

    return data;
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.warn(`[WordPress API] Request timed out (15s) for endpoint: ${endpoint}`);
    } else {
      console.warn(`[WordPress API] Connection issue for ${endpoint}:`, error?.message || error);
    }
    return null;
  }
}


