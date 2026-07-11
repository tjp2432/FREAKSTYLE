export function AboutSection() {
  const items = [
    { title: "Freak Style Studio" },
    { title: "Freak Style Textil Lab" },
    { title: "Freak Style Print Lab" },
    { title: "Freak Style Fabric Design" },
    { title: "Freak Style 3D Lab" },
  ];

  return (
    <section id="nosotros" className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-sm font-bold sm:text-display-md">
            Sobre <span className="gradient-text">Nosotros</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-light-gray">
            En Freak Style transformamos ideas en productos personalizados de alta calidad.
            Trabajamos con consumidores, marcas, empresas y eventos, ofreciendo soluciones
            integrales en estampados y personalización textil.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-6 text-left">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-white">
                Misión
              </h3>
              <p className="text-sm leading-relaxed text-brand-light-gray">
                Ofrecer productos personalizados de la más alta calidad, combinando tecnología
                de última generación con diseño exclusivo.
              </p>
            </div>
            <div className="rounded-lg border border-brand-light-gray/10 bg-brand-graphite/50 p-6 text-left">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-white">
                Visión
              </h3>
              <p className="text-sm leading-relaxed text-brand-light-gray">
                Ser la empresa de referencia en personalización textil en Argentina, reconocida
                por nuestra calidad, innovación y servicio.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-brand-light-gray">
            Conocé nuestras áreas de especialización y el corazón de Freak Style.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="w-80 rounded-xl border border-brand-light-gray/10 card-rivets p-6 text-center transition-all duration-300 hover:border-brand-white/20"
            >
              <h3 className="text-lg font-bold text-brand-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
