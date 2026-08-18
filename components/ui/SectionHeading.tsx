import React from 'react';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = 'left',
  className = '',
  dark = false,
}: SectionHeadingProps) {
  const alignmentClass =
    align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignmentClass} ${className}`}>
      {overline && (
        <span
          className={`font-label-caps text-label-caps uppercase tracking-[0.2em] mb-4 ${
            dark ? 'text-tertiary-fixed' : 'text-outline'
          }`}
        >
          {overline}
        </span>
      )}
      <h2
        className={`font-display-lg text-display-lg-mobile md:text-display-lg leading-tight ${
          dark ? 'text-inverse-on-surface' : 'text-on-surface'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body-lg text-body-lg max-w-2xl mt-6 ${
            dark ? 'text-inverse-on-surface/80' : 'text-on-surface-variant'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
