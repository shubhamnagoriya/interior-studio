'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  priority = false,
}: ImageRevealProps) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden bg-surface-dim ${aspectRatio} ${className}`}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full relative"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[10s] group-hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
}
