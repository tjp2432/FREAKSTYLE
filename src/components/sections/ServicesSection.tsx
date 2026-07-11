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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.serviceCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl border border-brand-light-gray/10 bg-metallic p-5 transition-all duration-300 hover:border-brand-white/20 sm:p-6"
            >
              <h3 className="mb-4 text-center text-lg font-bold text-brand-white">
                {cat.title}
              </h3>

              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-brand-light-gray/5 bg-brand-black/40 p-3 text-center transition-colors hover:border-brand-white/10"
                  >
                    <p className="text-sm font-semibold text-brand-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-brand-light-gray/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
