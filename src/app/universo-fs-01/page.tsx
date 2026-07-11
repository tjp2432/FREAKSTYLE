import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Universo FS-01",
  description:
    "Universo FS-01: Tecnología, innovación y diseño en personalización textil. Conocé nuestro mundo.",
};

export default function UniversePage() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-accent-neon-green/30 bg-accent-neon-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-neon-green">
            FS-01
          </span>

          <h1 className="mt-6 text-display-sm font-bold sm:text-display-md">
            Universo <span className="gradient-text">FS-01</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-light-gray">
            FS-01 es nuestra línea tecnológica. Innovación aplicada a la personalización textil con
            los más altos estándares de calidad y precisión.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Tecnología DTF",
              desc: "Impresión directa al film con colores vibrantes y durabilidad extrema.",
            },
            {
              title: "Precisión Digital",
              desc: "Estampados con resolución de alta definición y detalles milimétricos.",
            },
            {
              title: "Materiales Premium",
              desc: "Insumos de primera calidad para resultados profesionales.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-6 text-center"
            >
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-light-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
