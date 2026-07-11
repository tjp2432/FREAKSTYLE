import { ROUTES, type NavItem } from "@/lib/constants";

export const siteConfig = {
  name: "Freak Style",
  tagline: "Personalización que marca la diferencia",
  description:
    "Transformamos tus ideas en prendas y productos personalizados con la más alta calidad. Servicios para consumidores, marcas, empresas y eventos.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contact: {
    email: "info@freakstyle.com",
    phone: "+54 11 1234-5678",
    whatsapp: "+5491123456789",
    whatsappLink: "https://wa.me/5491123456789",
    address: "Buenos Aires, Argentina",
    instagram: "@freakstyle",
  },
  navigation: [
    { label: "Inicio", href: ROUTES.home },
    { label: "Nosotros", href: ROUTES.about },
    { label: "Servicios", href: ROUTES.services },
    { label: "Soluciones para Empresas", href: ROUTES.business },
    { label: "Portfolio", href: ROUTES.portfolio },
    { label: "Tienda", href: ROUTES.store },
    { label: "Universo FS-01", href: ROUTES.universe },
    { label: "Blog", href: ROUTES.blog },
    { label: "Experiencia", href: ROUTES.experience },
    { label: "Contacto", href: ROUTES.contact },
  ] satisfies NavItem[],
  services: [
    {
      id: "indumentaria-personalizada",
      title: "Indumentaria Personalizada",
      description:
        "Diseñamos y estampamos prendas únicas para consumidores, marcas y eventos. Calidad premium con tecnología DTF y vinilo textil.",
      icon: "Shirt",
    },
    {
      id: "dtf-por-metro",
      title: "DTF por metro",
      description:
        "Transferencia Digital Directa al Film. Ideal para producción en serie con colores vibrantes y durabilidad excepcional.",
      icon: "Roller",
    },
    {
      id: "estampados-vinilo-textil-premium",
      title: "Estampados vinilo textil premium",
      description:
        "Vinilos de alta gama para estampados duraderos con acabado profesional. Perfectos para uniformes y colecciones.",
      icon: "Layers",
    },
    {
      id: "impresiones-gran-escala",
      title: "Impresiones a gran escala",
      description:
        "Impresión de gran formato para lonas, banners, cartelería y decoración de espacios comerciales y eventos.",
      icon: "Maximize",
    },
    {
      id: "telas-decorativas",
      title: "Telas Decorativas",
      description:
        "Telas estampadas con diseño personalizado para decoración de interiores, cortinas, tapicería y proyectos creativos.",
      icon: "ScrollText",
    },
    {
      id: "banderas-tapices",
      title: "Banderas y Tapices",
      description:
        "Fabricación de banderas institucionales, promocionales y tapices decorativos con estampado de alta definición.",
      icon: "Flag",
    },
    {
      id: "egresados",
      title: "Egresados",
      description:
        "Colecciones completas para promociones de egresados. Diseño, producción y personalización de prendas únicas.",
      icon: "GraduationCap",
    },
    {
      id: "uniformes-trabajo",
      title: "Uniformes de trabajo",
      description:
        "Uniforme corporativo personalizado con la identidad de tu marca. Calidad, confort y durabilidad para tu equipo.",
      icon: "Building2",
    },
    {
      id: "diseno-grafico",
      title: "Diseño Gráfico",
      description:
        "Servicio profesional de diseño gráfico para estampados, branding y comunicación visual. De tu idea al producto final.",
      icon: "PenTool",
    },
  ] as const,
} as const;

export type Service = (typeof siteConfig.services)[number];
