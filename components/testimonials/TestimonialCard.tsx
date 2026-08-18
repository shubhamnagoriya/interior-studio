import Image from 'next/image';
import { Testimonial } from '@/types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const clientName = testimonial.name || testimonial.clientName || 'Client';
  const quote = testimonial.content
    ? testimonial.quote || testimonial.content.replace(/<[^>]+>/g, '').trim()
    : testimonial.quote;

  return (
    <div className="bg-surface-container p-8 md:p-10 border border-outline-variant/30 flex flex-col justify-between h-full">
      <blockquote className="font-serif text-lg md:text-xl text-on-surface mb-8 not-italic font-normal leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4 mt-auto">
        {testimonial.image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-outline-variant/50 bg-surface-dim">
            <Image
              src={testimonial.image}
              alt={clientName}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
            {clientName}
          </h4>
          {(testimonial.projectName || testimonial.location) && (
            <p className="font-caption text-caption text-outline mt-1">
              {[testimonial.projectName, testimonial.location].filter(Boolean).join(' — ')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
