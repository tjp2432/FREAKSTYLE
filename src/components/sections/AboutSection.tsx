export function AboutSection() {
  const items = [
    { title: "Freak Style Studio" },
    { title: "Freak Style Textil Lab" },
    { title: "Freak Style Print Lab" },
    { title: "Freak Style Fabric Design" },
    { title: "Freak Style 3D Lab" },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-display-sm font-bold sm:text-display-md">
            Sobre <span className="gradient-text">Nosotros</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-light-gray">
            Conocé nuestras áreas de especialización y el corazón de Freak Style.
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
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
