'use client';

import React from 'react';

interface WordPressContentProps {
  content: string;
  className?: string;
}

/**
 * Safely renders WordPress HTML content with luxury editorial typography styling.
 * Supports both HTML-formatted strings (from WordPress) and plain text with linebreaks.
 */
export default function WordPressContent({
  content,
  className = '',
}: WordPressContentProps) {
  if (!content) return null;

  const isHtml = /<[a-z][\s\S]*>/i.test(content);

  if (isHtml) {
    return (
      <div
        className={`wp-content prose prose-stone max-w-none font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed [&>p]:mb-6 [&>p:last-child]:mb-0 [&>h2]:font-headline-md [&>h2]:text-on-surface [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:font-headline-sm [&>h3]:text-on-surface [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>blockquote]:border-l-2 [&>blockquote]:border-tertiary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-8 ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Plain text fallback with paragraph separation
  const paragraphs = content.split(/\n\s*\n/).filter(Boolean);

  return (
    <div className={`font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed space-y-6 ${className}`}>
      {paragraphs.map((para, idx) => (
        <p key={idx}>{para.trim()}</p>
      ))}
    </div>
  );
}
