"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white-dimmer"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-8 lg:px-14 h-16">
        <a href="#" className="flex items-center">
          <Image
            src="/logo-white.svg"
            alt="UNTITLD"
            width={120}
            height={19}
            priority
            className="h-5 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Work", "Services", "Studio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-300 font-body"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-1.5 text-xs tracking-widest uppercase font-body border border-lime text-lime px-4 py-2 hover:bg-lime hover:text-black transition-all duration-300"
        >
          Start a Project
          <ArrowUpRight size={12} weight="bold" />
        </a>

        <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Menu">
          <span className="w-5 h-px bg-white block" />
          <span className="w-3 h-px bg-white block" />
        </button>
      </nav>
    </header>
  );
}
