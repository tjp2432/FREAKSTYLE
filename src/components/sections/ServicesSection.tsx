import { siteConfig } from "@/config/site";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicios" className="section-padding">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-display-sm font-bold sm:text-display-md">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-light-gray">
            Soluciones integrales en personalización con la más alta calidad y tecnología.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
