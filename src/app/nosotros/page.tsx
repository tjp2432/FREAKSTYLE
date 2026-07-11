import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conocé más sobre Freak Style y nuestra pasión por la personalización.",
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-sm font-bold sm:text-display-md">
            Sobre <span className="gradient-text">Nosotros</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-brand-light-gray">
            En Freak Style transformamos ideas en productos personalizados de alta calidad.
            Trabajamos con consumidores, marcas, empresas y eventos, ofreciendo soluciones
            integrales en estampados y personalización textil.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-white">
                Misión
              </h3>
              <p className="text-sm leading-relaxed text-brand-light-gray">
                Ofrecer productos personalizados de la más alta calidad, combinando tecnología
                de última generación con diseño exclusivo.
              </p>
            </div>

            <div className="rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-white">
                Visión
              </h3>
              <p className="text-sm leading-relaxed text-brand-light-gray">
                Ser la empresa de referencia en personalización textil en Argentina, reconocida
                por nuestra calidad, innovación y servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
