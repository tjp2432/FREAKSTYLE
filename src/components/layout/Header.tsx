"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/lib/constants";

const basePath = process.env.NODE_ENV === "production" ? "/FREAKSTYLE" : "";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const nav = siteConfig.navigation;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-light-gray/10 bg-brand-black/80 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href={ROUTES.home} className="flex items-center shrink-0">
          <img
            src={`${basePath}/images/fs-01-blanco.png`}
            alt={siteConfig.name}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-md px-2 py-2 text-xs font-medium whitespace-nowrap transition-colors hover:bg-brand-white/5 ${
                    item.href === ROUTES.universe
                      ? "text-accent-neon-green hover:text-accent-neon-green"
                      : "text-brand-light-gray hover:text-brand-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className={`block h-0.5 w-6 bg-brand-white transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-brand-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-brand-white transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-brand-light-gray/10 bg-brand-graphite lg:hidden">
          <div className="section-container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-white/10 ${
                  item.href === ROUTES.universe
                    ? "text-accent-neon-green hover:text-accent-neon-green"
                    : "text-brand-light-gray hover:text-brand-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

          </div>
        </nav>
      )}
    </header>
  );
}
