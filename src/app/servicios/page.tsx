import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conocé todos nuestros servicios de personalización: indumentaria, DTF, vinilos, impresiones, telas y más.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}
