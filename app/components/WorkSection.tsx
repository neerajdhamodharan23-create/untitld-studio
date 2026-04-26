"use client";

import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

type Project = {
  name: string;
  type: string;
  featured: boolean;
  bgGradient: string;
  light?: boolean;
};

const projects: Project[] = [
  {
    name: "Verd Capital",
    type: "Brand Identity",
    featured: true,
    bgGradient:
      "radial-gradient(circle at 90% 10%, rgba(204,255,0,0.18), transparent 55%), linear-gradient(135deg, #0d1d0d, #243024)",
  },
  {
    name: "Signal Spark",
    type: "Branding Design",
    featured: true,
    bgGradient:
      "radial-gradient(circle at 10% 90%, rgba(255,255,255,0.07), transparent 55%), linear-gradient(135deg, #1a1a1a, #000000)",
  },
  {
    name: "Lumenhaus",
    type: "Web Development",
    featured: false,
    bgGradient:
      "radial-gradient(circle at 90% 90%, rgba(245,158,11,0.16), transparent 55%), linear-gradient(135deg, #1a1410, #0f0a05)",
  },
  {
    name: "Drift Bloom",
    type: "Branding Design",
    featured: false,
    bgGradient: "linear-gradient(135deg, #ccff00, #b3e600)",
    light: true,
  },
  {
    name: "Krane Supply",
    type: "Brand System",
    featured: false,
    bgGradient:
      "radial-gradient(circle at 10% 10%, rgba(34,211,238,0.14), transparent 55%), linear-gradient(135deg, #101a1f, #050a0d)",
  },
  {
    name: "Auris",
    type: "Identity + Web",
    featured: true,
    bgGradient:
      "radial-gradient(circle at 75% 25%, rgba(244,63,94,0.16), transparent 55%), linear-gradient(135deg, #1f1414, #0d0808)",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const isLight = project.light;

  return (
    <div
      className="relative overflow-hidden rounded-[1.5rem] transition-transform duration-500 hover:scale-[1.01]"
      style={{ background: project.bgGradient, willChange: "transform" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-[260px] sm:h-[280px] lg:h-[320px] flex flex-col justify-between p-6 sm:p-7">
        <div className="relative z-10 flex items-start justify-between">
          {project.featured ? (
            <span
              className={`pill pill-sm ${
                isLight
                  ? "bg-black text-white"
                  : "bg-lime/15 text-lime border border-lime/30"
              }`}
            >
              <span className="pill-dot bg-lime" />
              Featured
            </span>
          ) : (
            <span />
          )}
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
              isLight ? "bg-black/10 text-black" : "bg-white/10 text-white"
            } ${
              hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            <ArrowUpRight size={14} weight="bold" />
          </div>
        </div>

        {!isLight && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
            <svg viewBox="0 0 26.03 32" fill="#fff" className="w-24 sm:w-32 h-auto">
              <polygon points="6.99 32 0 32 19.04 0 26.03 0 6.99 32" />
              <path d="M20.15,32c-1.02,0-1.9-.36-2.63-1.09-.73-.73-1.09-1.61-1.09-2.63s.36-1.88,1.09-2.61c.73-.72,1.61-1.09,2.63-1.09s1.86.36,2.61,1.09,1.12,1.59,1.12,2.61c0,.68-.17,1.31-.52,1.87-.35.56-.8,1.01-1.36,1.35-.56.34-1.17.5-1.85.5Z" />
            </svg>
          </div>
        )}

        <div className="relative z-10">
          <h3
            className={`font-display text-2xl lg:text-3xl tracking-wide uppercase mb-1 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            {project.name}
          </h3>
          <p
            className={`text-[11px] sm:text-[12px] tracking-widest uppercase font-body font-light ${
              isLight ? "text-black/60" : "text-white/40"
            }`}
          >
            {project.type}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 sm:mb-12 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="pill-dot bg-lime" />
              <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-body">
                Selected Works
              </p>
            </div>
            <h2 className="font-display uppercase tracking-wide text-[clamp(2.6rem,7vw,6rem)] leading-[0.92] text-fg">
              Works.
            </h2>
            <p className="text-sm text-fg/55 font-body font-light mt-3 max-w-md">
              A curated collection of bold brands and websites — built to
              inspire, connect, and perform.
            </p>
          </div>
          <p className="text-[11px] tracking-widest uppercase text-fg/45 font-body">
            2020 — 2025
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <a href="#contact" className="pill pill-secondary">
            View All Projects
            <span className="pill-dot bg-lime" />
          </a>
        </div>
      </div>
    </section>
  );
}
