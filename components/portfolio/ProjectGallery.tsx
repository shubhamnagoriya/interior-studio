'use client';

import ImageReveal from '@/components/ui/ImageReveal';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-16 my-16">
      {images.map((img, index) => (
        <div key={index} className="w-full">
          <ImageReveal
            src={img}
            alt={`${title} Gallery view ${index + 1}`}
            aspectRatio="h-[60vh] md:h-[80vh]"
          />
        </div>
      ))}
    </div>
  );
}
