import ServiceCard from './ServiceCard';
import { Service } from '@/types/service';

interface ServicesListProps {
  services: Service[];
}

export default function ServicesList({ services }: ServicesListProps) {
  if (!services || services.length === 0) {
    return (
      <div className="py-24 text-center px-margin-mobile">
        <p className="font-headline-sm text-headline-sm text-on-surface-variant font-light">
          No services available.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-section-gap mb-section-gap">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
}
