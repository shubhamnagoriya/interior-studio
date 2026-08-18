import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  clean?: boolean;
}

export default function Container({ children, className = '', clean = false, ...props }: ContainerProps) {
  if (clean) {
    return <div className={`w-full ${className}`} {...props}>{children}</div>;
  }

  return (
    <div className={`w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-page ${className}`} {...props}>
      {children}
    </div>
  );
}
