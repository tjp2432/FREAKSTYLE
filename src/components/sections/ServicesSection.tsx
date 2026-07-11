import { siteConfig } from "@/config/site";

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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.serviceCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="mb-4 text-lg font-semibold text-brand-white">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.id}>
                    <p className="text-sm font-medium text-brand-light-gray">
                      {item.title}
                    </p>
                    <p className="text-xs leading-relaxed text-brand-light-gray/60">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
