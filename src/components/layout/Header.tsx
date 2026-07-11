"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/lib/constants";

const basePath = process.env.NODE_ENV === "production" ? "/FREAKSTYLE" : "";

const VISIBLE_ITEMS = 6;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const nav = siteConfig.navigation;
  const visible = nav.slice(0, VISIBLE_ITEMS);
  const overflow = nav.slice(VISIBLE_ITEMS);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowMore(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-light-gray/10 bg-brand-black/80 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href={ROUTES.home} className="flex items-center shrink-0">
          <img
            src={`${basePath}/images/logo-header.jpeg`}
            alt={siteConfig.name}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <ul className="flex items-center gap-1">
            {visible.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-brand-light-gray transition-colors hover:bg-brand-white/5 hover:text-brand-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {overflow.length > 0 && (
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-brand-light-gray transition-colors hover:bg-brand-white/5 hover:text-brand-white"
                >
                  Más
                  <svg
                    className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showMore && (
                  <div className="absolute right-0 top-full mt-1 w-56 rounded-lg border border-brand-light-gray/10 bg-brand-graphite p-2 shadow-xl">
                    {overflow.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setShowMore(false)}
                        className="block rounded-md px-3 py-2 text-sm text-brand-light-gray transition-colors hover:bg-brand-white/10 hover:text-brand-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )}
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
                className="rounded-md px-3 py-2 text-sm font-medium text-brand-light-gray transition-colors hover:bg-brand-white/10 hover:text-brand-white"
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
