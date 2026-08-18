import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'link' | 'solid';
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}

export default function Button({
  variant = 'outline',
  href,
  children,
  className = '',
  icon = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    'font-label-caps text-label-caps uppercase tracking-widest transition-all duration-500 inline-flex items-center justify-center gap-3 cursor-pointer';

  let variantClasses = '';
  if (variant === 'outline') {
    variantClasses = 'px-8 py-4 border border-outline text-on-surface hover:bg-primary hover:text-on-primary';
  } else if (variant === 'solid') {
    variantClasses = 'px-8 py-4 bg-primary text-on-primary border border-primary hover:bg-on-surface hover:text-surface';
  } else if (variant === 'link') {
    variantClasses = 'link-underline pb-1 text-on-surface hover:opacity-70';
  }

  const content = (
    <>
      {children}
      {icon && (
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {content}
    </button>
  );
}
