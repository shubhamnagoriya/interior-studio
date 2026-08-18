export interface WPMediaSize {
  file?: string;
  width?: number;
  height?: number;
  source_url: string;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text?: string;
  title?: {
    rendered: string;
  };
  media_details?: {
    sizes?: {
      full?: WPMediaSize;
      large?: WPMediaSize;
      medium_large?: WPMediaSize;
      medium?: WPMediaSize;
      thumbnail?: WPMediaSize;
    };
  };
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WPPost {
  id: number;
  date?: string;
  modified?: string;
  slug: string;
  status?: string;
  type?: string;
  link?: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
    'wp:term'?: WPTerm[][];
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
  };
  acf?: Record<string, any>;
}

export interface WPFetchOptions {
  endpoint: string;
  query?: Record<string, string | number | boolean | undefined>;
  embed?: boolean;
}
