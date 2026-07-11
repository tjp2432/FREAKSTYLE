import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Conocé la experiencia Freak Style: desde el diseño hasta el producto final, acompañamos cada paso.",
};

export default function ExperiencePage() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-sm font-bold sm:text-display-md">
            La experiencia <span className="gradient-text">Freak Style</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-brand-light-gray">
            Te acompañamos en cada etapa del proceso, desde la idea inicial hasta el producto final.
            Nuestra metodología de trabajo garantiza resultados que superan expectativas.
          </p>

          <div className="mt-16 space-y-8">
            {[
              {
                step: "01",
                title: "Consultá",
                desc: "Contactanos y contanos tu proyecto. Te asesoramos sobre las mejores opciones.",
              },
              {
                step: "02",
                title: "Diseñamos",
                desc: "Nuestro equipo de diseño transforma tu idea en un producto listo para producir.",
              },
              {
                step: "03",
                title: "Producimos",
                desc: "Fabricamos con tecnología de última generación y control de calidad en cada etapa.",
              },
              {
                step: "04",
                title: "Recibí",
                desc: "Coordinamos la entrega para que recibas tu pedido en tiempo y forma.",
              },
            ].map((item) => (
              <div key={item.step} className="group flex items-start gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brand-light-gray/10 text-sm font-bold text-brand-light-gray transition-colors group-hover:border-brand-white/30">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-light-gray">{item.desc}</p>
                </div>
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
              Empezá tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
