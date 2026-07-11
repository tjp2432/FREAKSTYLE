import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-graphite/50" />

      <div className="section-container relative z-10 text-center">
        <h1 className="text-display-sm font-bold tracking-tight sm:text-display-md md:text-display-lg lg:text-display-xl">
          <span className="gradient-text">{siteConfig.name}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-light-gray sm:text-lg">
          {siteConfig.tagline}
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-light-gray/70">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#servicios"
            className="inline-flex h-12 items-center justify-center rounded-md bg-brand-white px-8 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
          >
            Ver servicios
          </a>
          <a
            href="#contacto"
            className="inline-flex h-12 items-center justify-center rounded-md border border-brand-white/20 px-8 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-white/10"
          >
            Contactar
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent" />
    </section>
  );
}
