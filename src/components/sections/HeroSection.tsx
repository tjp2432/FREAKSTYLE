import { siteConfig } from "@/config/site";
import { ParticleMist } from "./ParticleMist";
import { GreenFog } from "./GreenFog";

const basePath = "/FREAKSTYLE";

export function HeroSection() {
  const planets = [
    { size: 280, top: "12%", left: "6%", opacity: 0.25 },
    { size: 120, top: "18%", right: "12%", opacity: 0.18, ring: true },
    { size: 70, bottom: "30%", left: "18%", opacity: 0.2 },
    { size: 180, bottom: "15%", right: "18%", opacity: 0.15 },
  ];

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-graphite/50" />
      <GreenFog />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {planets.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: p.top,
              left: p.left,
              right: p.right,
              bottom: p.bottom,
              opacity: p.opacity,
              background: "radial-gradient(circle at 32% 30%, #d0d0d0, #4a4a4a 55%, #141414)",
              boxShadow: "inset -12px -12px 30px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)",
            }}
          >
            {p.ring && (
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
                style={{
                  width: `${p.size * 1.9}px`,
                  height: `${p.size * 0.55}px`,
                  border: "2px solid rgba(255,255,255,0.15)",
                  transform: "translate(-50%, -50%) rotate(-18deg)",
                  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <ParticleMist />

      <div className="hidden sm:absolute sm:top-[85%] sm:left-3 sm:z-10 sm:flex sm:flex-col sm:items-center sm:gap-2">
        <span className="text-xs tracking-wider text-brand-light-gray/50 uppercase">Desliza para más información</span>
        <svg className="h-5 w-5 animate-bounce text-brand-light-gray/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <img
            src={`${basePath}/images/freak-style-texto-blanco.png`}
            alt="Freak Style"
            className="w-64 h-auto object-contain sm:w-80 md:w-96"
          />
          <img
            src={`${basePath}/images/fs-01-blanco.png`}
            alt="FS-01"
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

        <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
          <span className="text-xs tracking-wider text-brand-light-gray/50 uppercase">Desliza para más información</span>
          <svg className="h-5 w-5 animate-bounce text-brand-light-gray/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent" />
    </section>
  );
}
