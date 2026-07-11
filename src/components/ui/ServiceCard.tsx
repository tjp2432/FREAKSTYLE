import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-6 transition-all duration-300 hover:border-brand-white/20 hover:bg-brand-graphite sm:p-8">
      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-brand-light-gray/10 text-sm font-bold text-brand-light-gray">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="mb-3 text-lg font-semibold text-brand-white">
        {service.title}
      </h3>

      <p className="text-sm leading-relaxed text-brand-light-gray">
        {service.description}
      </p>

      <div className="mt-5 h-px w-0 bg-brand-white transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
