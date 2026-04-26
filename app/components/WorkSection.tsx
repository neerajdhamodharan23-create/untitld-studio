"use client";

import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    name: "Verd Capital",
    type: "Brand Identity",
    featured: true,
    bg: "bg-gradient-to-br from-[#0d1d0d] via-[#1a2818] to-[#243024]",
    glow: "bg-lime/15",
    glowPos: "right-0 top-0",
  },
  {
    name: "Signal Spark",
    type: "Branding Design",
    featured: true,
    bg: "bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#000000]",
    glow: "bg-white/5",
    glowPos: "left-0 bottom-0",
  },
  {
    name: "Lumenhaus",
    type: "Web Development",
    featured: false,
    bg: "bg-gradient-to-br from-[#1a1410] via-[#2a1f15] to-[#0f0a05]",
    glow: "bg-amber-500/10",
    glowPos: "right-0 bottom-0",
  },
  {
    name: "Drift Bloom",
    type: "Branding Design",
    featured: false,
    bg: "bg-lime",
    glow: "",
    glowPos: "",
    light: true,
  },
  {
    name: "Krane Supply",
    type: "Brand System",
    featured: false,
    bg: "bg-gradient-to-br from-[#101a1f] via-[#0a1418] to-[#050a0d]",
    glow: "bg-cyan-500/10",
    glowPos: "left-0 top-0",
  },
  {
    name: "Auris",
    type: "Identity + Web",
    featured: true,
    bg: "bg-gradient-to-br from-[#1f1414] via-[#2a1a1a] to-[#0d0808]",
    glow: "bg-rose-500/10",
    glowPos: "right-1/4 top-1/4",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [hovered, setHovered] = useState(false);
  const isLight = project.light;

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] cursor-pointer transition-transform duration-500 ${project.bg} ${
        hovered ? "scale-[1.01]" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-[280px] lg:h-[320px] flex flex-col justify-between p-7">
        {/* Glow */}
        {project.glow && (
          <div
            className={`absolute ${project.glowPos} w-[260px] h-[260px] rounded-full ${project.glow} blur-[80px] pointer-events-none`}
          />
        )}

        {/* Top row */}
        <div className="relative z-10 flex items-start justify-between">
          {project.featured && (
            <span
              className={`pill text-[10px] py-1.5 px-3 ${
                isLight
                  ? "bg-black text-white"
                  : "bg-lime/15 text-lime border border-lime/30"
              }`}
            >
              <span
                className={`pill-dot ${isLight ? "bg-lime" : "bg-lime"}`}
              />
              Featured
            </span>
          )}
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center ml-auto transition-all duration-500 ${
              isLight
                ? "bg-black/10 text-black"
                : "bg-white/10 text-white"
            } ${
              hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            <ArrowUpRight size={14} weight="bold" />
          </div>
        </div>

        {/* Decorative slash mark */}
        {!isLight && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
            <svg viewBox="0 0 26.03 32" fill="#fff" className="w-32 h-40">
              <polygon points="6.99 32 0 32 19.04 0 26.03 0 6.99 32" />
              <path d="M20.15,32c-1.02,0-1.9-.36-2.63-1.09-.73-.73-1.09-1.61-1.09-2.63s.36-1.88,1.09-2.61c.73-.72,1.61-1.09,2.63-1.09s1.86.36,2.61,1.09,1.12,1.59,1.12,2.61c0,.68-.17,1.31-.52,1.87-.35.56-.8,1.01-1.36,1.35-.56.34-1.17.5-1.85.5Z" />
            </svg>
          </div>
        )}

        {/* Bottom info */}
        <div className="relative z-10">
          <h3
            className={`font-display text-2xl lg:text-3xl tracking-wide uppercase mb-1 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            {project.name}
          </h3>
          <p
            className={`text-[12px] tracking-widest uppercase font-body font-light ${
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
    <section id="work" className="px-6 lg:px-10 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="pill-dot bg-lime" />
              <p className="text-[11px] tracking-[0.22em] uppercase text-lime font-body">
                Selected Works
              </p>
            </div>
            <h2 className="font-display uppercase tracking-wide text-[clamp(3rem,7vw,6rem)] leading-[0.92] text-white">
              Works.
            </h2>
            <p className="text-sm text-white/45 font-body font-light mt-3 max-w-md">
              A curated collection of bold brands and websites — built to
              inspire, connect, and perform.
            </p>
          </div>
          <p className="text-[11px] tracking-widest uppercase text-white/35 font-body">
            2020 — 2025
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-12">
          <a href="#contact" className="pill pill-secondary">
            View All Projects
            <span className="pill-dot bg-lime" />
          </a>
        </div>
      </div>
    </section>
  );
}
