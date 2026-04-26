"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 px-6 lg:px-10 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`flex items-center justify-between rounded-full transition-all duration-500 px-6 lg:px-8 h-14 ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl border border-white/10"
            : "bg-transparent"
        }`}
      >
        <a href="#" className="flex items-center">
          <Image
            src="/logo-white.svg"
            alt="UNTITLD"
            width={110}
            height={18}
            priority
            className="h-[18px] w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {[
            { label: "Work", href: "#work" },
            { label: "Services", href: "#services" },
            { label: "Studio", href: "#studio" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[12px] tracking-wide text-white/70 hover:text-lime transition-colors duration-300 font-body"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="pill pill-primary">
          Start a Project
          <span className="pill-dot bg-black" />
        </a>
      </nav>
    </header>
  );
}
