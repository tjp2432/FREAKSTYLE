import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Galeria de trabajos realizados por Freak Style. Prendas personalizadas, estampados y más.",
};

export default function PortfolioPage() {
  const items = [
    { category: "Indumentaria", count: "150+" },
    { category: "DTF por metro", count: "500+" },
    { category: "Vinilos", count: "200+" },
    { category: "Banderas", count: "80+" },
    { category: "Uniformes", count: "300+" },
    { category: "Eventos", count: "40+" },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-sm font-bold sm:text-display-md">
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-brand-light-gray">
            Cada proyecto es único. Conocé algunos de los trabajos que realizamos para nuestros clientes.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.category}
              className="rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-8 text-center transition-colors hover:border-brand-white/20"
            >
              <p className="text-3xl font-bold text-brand-white">{item.count}</p>
              <p className="mt-1 text-sm text-brand-light-gray">{item.category}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm text-brand-light-gray">
            ¿Querés sumar tu proyecto a nuestro portfolio?
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-white px-6 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
          >
            Trabajemos juntos
          </a>
        </div>
      </div>
    </section>
  );
}
