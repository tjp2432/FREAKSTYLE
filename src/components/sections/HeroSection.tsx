import { siteConfig } from "@/config/site";
import { ParticleMist } from "./ParticleMist";

const basePath = process.env.NODE_ENV === "production" ? "/FREAKSTYLE" : "";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-graphite/50" />
      <ParticleMist />

      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <img
            src={`${basePath}/images/fs-01-blanco.png`}
            alt="Freak Style"
            className="w-48 h-auto object-contain sm:w-64 md:w-80"
          />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-light-gray sm:text-lg md:text-xl font-medium">
          &ldquo;Materializamos tus ideas para expresar tu identidad.&rdquo;
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-brand-light-gray/70 sm:text-base">
          Freak Style Corp es una empresa de diseño, manufactura creativa e innovación especializada en el desarrollo de productos personalizados, textiles, objetos y soluciones visuales.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#servicios"
            className="inline-flex h-10 items-center justify-center rounded-md bg-brand-white px-6 text-sm font-semibold text-brand-black transition-transform hover:scale-105"
          >
            Ver servicios
          </a>
          <a
            href="#contacto"
            className="inline-flex h-10 items-center justify-center rounded-md border border-brand-white/20 px-6 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-white/10"
          >
            Contactar
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent" />
    </section>
  );
}
