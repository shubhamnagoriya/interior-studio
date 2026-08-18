export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-12 pt-8 border-t border-outline-variant/50 max-w-sm">
      <div>
        <h3 className="font-label-caps text-label-caps text-outline mb-2 uppercase tracking-widest">
          STUDIO HQ
        </h3>
        <address className="not-italic font-body-md text-body-md text-on-background leading-relaxed">
          1200 Architecture Way,<br />
          Suite 400,<br />
          New York, NY 10012
        </address>
      </div>

      <div>
        <h3 className="font-label-caps text-label-caps text-outline mb-2 uppercase tracking-widest">
          DIRECT INQUIRIES
        </h3>
        <a
          href="mailto:hello@studiointeriors.com"
          className="block font-body-md text-body-md text-on-background hover:text-tertiary transition-colors mb-1"
        >
          hello@studiointeriors.com
        </a>
        <a
          href="tel:+12125550198"
          className="block font-body-md text-body-md text-on-background hover:text-tertiary transition-colors"
        >
          +1 212 555 0198
        </a>
      </div>

      <div>
        <h3 className="font-label-caps text-label-caps text-outline mb-2 uppercase tracking-widest">
          SOCIAL
        </h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="inline-block font-body-md text-body-md text-on-background border-b border-tertiary hover:border-on-background transition-colors pb-0.5"
          >
            Instagram
          </a>
          <a
            href="#"
            className="inline-block font-body-md text-body-md text-on-background border-b border-tertiary hover:border-on-background transition-colors pb-0.5"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-block font-body-md text-body-md text-on-background border-b border-tertiary hover:border-on-background transition-colors pb-0.5"
          >
            Pinterest
          </a>
        </div>
      </div>
    </div>
  );
}
