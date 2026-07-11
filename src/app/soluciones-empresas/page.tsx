import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Soluciones para Empresas",
  description:
    "Soluciones corporativas de personalización para marcas, empresas y eventos. Uniformes, merchandising y producción en serie.",
};

const categories = [
  {
    title: "Identidad Corporativa",
    items: [
      "Uniformes de trabajo",
      "Indumentaria institucional",
      "Merchandising corporativo",
      "Kits de bienvenida para empleados",
      "Regalos empresariales",
    ],
  },
  {
    title: "Marketing y Eventos",
    items: [
      "Banderas",
      "Banners",
      "Material para ferias y exposiciones",
    ],
  },
  {
    title: "Producción Textil",
    items: [
      "DTF por metro",
      "Vinilo textil",
      "Producción de colecciones",
      "Tiradas cortas y medianas",
      "Prototipos",
    ],
  },
  {
    title: "Diseño",
    items: [
      "Diseño gráfico",
      "Desarrollo de identidad visual",
      "Diseño textil",
      "Adaptación de archivos para producción",
    ],
  },
  {
    title: "Decoración Comercial",
    items: [
      "Telas decorativas",
      "Vinilos",
      "Ambientación de locales",
      "Tapices",
      "Elementos gráficos para oficinas y comercios",
    ],
  },
  {
    title: "Producción Especial",
    items: [
      "Proyectos a medida",
      "Objetos impresos en 3D",
      "Productos personalizados",
      "Soluciones para campañas específicas",
    ],
  },
];

export default function BusinessPage() {
  return (
    <section className="section-padding pt-16">
      <div className="section-container">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-display-sm font-bold sm:text-display-md">
            Soluciones para <span className="gradient-text">Empresas</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-brand-light-gray">
            Ofrecemos soluciones integrales de personalización para marcas, empresas y eventos corporativos.
            Producción en serie con la más alta calidad y tiempos de entrega ajustados a tus necesidades.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex flex-col items-center justify-center rounded-lg border border-brand-light-gray/10 card-rivets p-6 text-center"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-white">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center gap-2 text-sm leading-relaxed text-brand-light-gray"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-white/40" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
