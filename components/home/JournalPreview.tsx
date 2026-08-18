'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimatedText from '@/components/ui/AnimatedText';
import { JournalPost } from '@/types/journal';

interface JournalPreviewProps {
  posts: JournalPost[];
}

export default function JournalPreview({ posts }: JournalPreviewProps) {
  return (
    <section className="py-section-gap bg-surface border-t border-outline-variant/30">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <AnimatedText delay={0}>
            <div>
              <span className="font-label-caps text-label-caps text-outline tracking-[0.2em] mb-4 uppercase block">
                JOURNAL &amp; ESSAYS
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-2xl leading-tight">
                Architectural Perspectives
              </h2>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Link
              href="/about#journal"
              className="font-label-caps text-label-caps link-underline pb-1 flex items-center gap-2 uppercase tracking-widest text-on-surface"
            >
              Read All Articles{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
          {posts.map((post, idx) => (
            <AnimatedText key={post.id} delay={0.1 * (idx + 1)}>
              <article className="group cursor-pointer flex flex-col h-full">
                <div className="relative overflow-hidden mb-6 bg-surface-dim aspect-[16/10]">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 font-label-caps text-label-caps text-outline mb-2 uppercase">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-tertiary transition-colors">
                  {post.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 font-label-caps text-label-caps text-on-surface link-underline pb-0.5 uppercase tracking-widest self-start">
                  Read Essay
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </article>
            </AnimatedText>
          ))}
        </div>
      </Container>
    </section>
  );
}
