"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full transition-colors duration-300 px-4 sm:px-5 lg:px-6 h-14 ${
            scrolled
              ? "bg-black/85 backdrop-blur-md border border-white/10"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#" aria-label="UNTITLD" className="flex items-center shrink-0">
            <Image
              src="/logo-white.svg"
              alt="UNTITLD"
              width={110}
              height={18}
              priority
              className="h-[18px] w-auto"
            />
          </a>

          {/* Center links — desktop only */}
          <div className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] tracking-wide text-white/70 hover:text-lime transition-colors duration-300 font-body"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <a href="#contact" className="pill pill-primary hidden sm:inline-flex">
              Start a Project
              <span className="pill-dot bg-black" />
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white"
              aria-label="Open menu"
            >
              <List size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden bg-black/95 backdrop-blur-lg flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/logo-white.svg"
              alt="UNTITLD"
              width={110}
              height={18}
              className="h-[18px] w-auto"
            />
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl tracking-wide uppercase text-white hover:text-lime py-3 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="pill pill-primary w-full"
              style={{ height: "3rem" }}
            >
              Start a Project
              <span className="pill-dot bg-black" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
