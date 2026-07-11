import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog de Freak Style: Tips de personalización, tendencias en estampados, guías y novedades.",
};

export default function BlogPage() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-sm font-bold sm:text-display-md">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-brand-light-gray">
            Tips, tendencias y novedades sobre personalización textil, estampados y diseño.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-12 text-center">
            <p className="text-5xl mb-4">📝</p>
            <h3 className="text-lg font-semibold text-brand-white">
              Pronto tendremos contenido nuevo
            </h3>
            <p className="mt-2 text-sm text-brand-light-gray">
              Estamos preparando artículos sobre técnicas de estampado, cuidados de prendas personalizadas
              y las últimas tendencias en personalización textil.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl text-center">
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-brand-white/20 px-6 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-white/10"
          >
            Seguinos en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
