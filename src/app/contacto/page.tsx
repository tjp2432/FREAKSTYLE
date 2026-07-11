import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactanos para solicitar un presupuesto o consultar por nuestros servicios.",
};

export default function ContactPage() {
  return <ContactSection />;
}
