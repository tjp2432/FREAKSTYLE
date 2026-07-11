import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Proximamente: Tienda online de Freak Style. Productos personalizados, indumentaria y más.",
};

export default function StorePage() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-accent-neon-green/30 bg-accent-neon-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-neon-green">
            Próximamente
          </span>

          <h1 className="mt-6 text-display-sm font-bold sm:text-display-md">
            Tienda <span className="gradient-text">Online</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-brand-light-gray">
            Estamos preparando nuestra tienda online para que puedas comprar productos personalizados
            directamente desde la web. Muy pronto vas a poder diseñar y encargar tus prendas favoritas
            con un solo clic.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brand-white px-6 py-3 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
            >
              Consultanos por WhatsApp
            </a>
            <a
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-md border border-brand-white/20 px-6 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-white/10"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
