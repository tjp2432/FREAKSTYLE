export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

export const ROUTES = {
  home: "/",
  services: "/#servicios",
  business: "/soluciones-empresas",
  portfolio: "/portfolio",
  store: "/tienda",
  universe: "/universo-fs-01",
  blog: "/blog",
  contact: "/contacto",
  about: "/#nosotros",
  experience: "/experiencia",
} as const;

export const API_PREFIX = "/api/v1";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};
