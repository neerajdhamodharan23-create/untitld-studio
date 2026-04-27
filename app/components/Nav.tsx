"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "about", href: "#studio" },
  { label: "works", href: "#work" },
  { label: "connect", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              ? "bg-bg/85 backdrop-blur-md border border-rule"
              : "bg-transparent"
          }`}
        >
          <a href="#" aria-label="UNTITLD" className="flex items-center shrink-0 logo-wrap">
            {/* Both logos rendered, theme CSS shows the right one */}
            <Image
              src="/logo-white.svg"
              alt="UNTITLD"
              width={110}
              height={18}
              priority
              className="h-[18px] w-auto logo-dark"
            />
            <Image
              src="/logo-black.svg"
              alt=""
              width={110}
              height={18}
              priority
              className="h-[18px] w-auto logo-light"
              aria-hidden
            />
          </a>

          <div className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] tracking-wide text-fg/65 hover:text-lime transition-colors duration-300 font-body"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="pill pill-primary hidden sm:inline-flex">
              Start a Project
              <span className="pill-dot bg-black" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-rule-strong text-fg"
              aria-label="Open menu"
            >
              <List size={18} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden bg-bg/95 backdrop-blur-lg flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/logo-white.svg"
              alt="UNTITLD"
              width={110}
              height={18}
              className="h-[18px] w-auto logo-dark"
            />
            <Image
              src="/logo-black.svg"
              alt=""
              width={110}
              height={18}
              className="h-[18px] w-auto logo-light"
              aria-hidden
            />
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-rule-strong text-fg"
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
                className="font-display text-5xl tracking-wide uppercase text-fg hover:text-lime py-3 transition-colors"
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

      {/* Logo theme swap */}
      <style>{`
        .logo-light { display: none; }
        [data-theme="light"] .logo-dark { display: none; }
        [data-theme="light"] .logo-light { display: inline-block; }
      `}</style>
    </>
  );
}
