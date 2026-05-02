"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { projects, type Project } from "../lib/projects";

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const isLight = project.cardLight;
  const hasThumbnail = !!project.thumbnail;
  const isClickable = project.gallery.length > 0;

  const sharedClassName = `block relative overflow-hidden rounded-[1.5rem] transition-transform duration-500 ${
    isClickable ? "hover:scale-[1.01]" : ""
  }`;
  const sharedStyle = hasThumbnail
    ? undefined
    : { background: project.cardBg, willChange: "transform" as const };

  const inner = (
    <>
      {/* Photo thumbnail (if provided) */}
      {hasThumbnail && (
        <div className="absolute inset-0">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out"
            style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
          />
          {/* Subtle dark fade at the bottom for the title legibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 45%)",
            }}
          />
        </div>
      )}

      <div className="relative h-[260px] sm:h-[280px] lg:h-[320px] flex flex-col justify-between p-6 sm:p-7">
        <div className="relative z-10 flex items-start justify-between">
          {project.featured ? (
            <span
              className={`pill pill-sm ${
                isLight ? "bg-black text-white" : "pill-featured"
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

        {/* Decorative slash mark for non-thumbnail dark cards */}
        {!isLight && !hasThumbnail && (
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
              isLight ? "text-black/60" : "text-white/60"
            }`}
          >
            {project.type}
          </p>
        </div>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <Link
        href={`/work/${project.slug}`}
        className={sharedClassName}
        style={sharedStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </Link>
    );
  }
  return (
    <div
      className={sharedClassName}
      style={sharedStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 sm:mb-12 flex-wrap gap-6">
          <Reveal>
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
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[11px] tracking-widest uppercase text-fg/45 font-body">
              2020 — 2025
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="flex justify-center mt-10 sm:mt-12">
            <a href="#contact" className="pill pill-secondary">
              View All Projects
              <span className="pill-dot bg-lime" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
