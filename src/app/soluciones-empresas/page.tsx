import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Soluciones para Empresas",
  description:
    "Soluciones corporativas de personalización para marcas, empresas y eventos. Uniformes, merchandising y producción en serie.",
};

export default function BusinessPage() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-sm font-bold sm:text-display-md">
            Soluciones para <span className="gradient-text">Empresas</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-brand-light-gray">
            Ofrecemos soluciones integrales de personalización para marcas, empresas y eventos corporativos.
            Producción en serie con la más alta calidad y tiempos de entrega ajustados a tus necesidades.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Uniforme Corporativo",
                desc: "Vestimenta laboral personalizada con la identidad de tu marca.",
              },
              {
                title: "Merchandising",
                desc: "Productos promocionales y regalos corporativos personalizados.",
              },
              {
                title: "Eventos",
                desc: "Producción completa para lanzamientos, ferias y eventos empresariales.",
              },
              {
                title: "Producción en Serie",
                desc: "Fabricación a escala con calidad consistente y tiempos optimizados.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-6"
              >
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-light-gray">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brand-white px-6 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
