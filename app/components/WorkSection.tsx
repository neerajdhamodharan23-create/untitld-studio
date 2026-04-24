"use client";

import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    name: "Verd Capital",
    type: "Brand Identity",
    year: "2024",
    description: "Complete identity system for a sustainability-focused investment firm.",
    bg: "bg-[#0a0a0a]",
    border: "border border-white/5",
    nameColor: "text-white",
    metaColor: "text-white/30",
    descColor: "text-white/45",
    span: "md:col-span-2 md:row-span-2",
    accentBar: "bg-lime",
  },
  {
    name: "Sola Studio",
    type: "Website Design",
    year: "2024",
    description: "Editorial portfolio site for an architecture and interiors practice.",
    bg: "bg-lime",
    border: "",
    nameColor: "text-black",
    metaColor: "text-black/50",
    descColor: "text-black/60",
    span: "md:col-span-1",
    accentBar: "bg-black",
  },
  {
    name: "Krane Supply",
    type: "Brand System",
    year: "2024",
    description: "Refined industrial brand for a premium materials distributor.",
    bg: "bg-[#111111]",
    border: "border border-white/5",
    nameColor: "text-white",
    metaColor: "text-white/30",
    descColor: "text-white/45",
    span: "md:col-span-1",
    accentBar: "bg-lime",
  },
  {
    name: "Auris",
    type: "Identity + Web",
    year: "2024",
    description: "Full-scope rebrand and digital presence for an audio technology company.",
    bg: "bg-[#0d0d0d]",
    border: "border border-lime/20",
    nameColor: "text-lime",
    metaColor: "text-white/30",
    descColor: "text-white/45",
    span: "md:col-span-2",
    accentBar: "bg-lime",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${project.bg} ${project.border} w-full h-full min-h-[260px] md:min-h-[300px] flex flex-col justify-between p-8 lg:p-10`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-[10px] tracking-[0.22em] uppercase mb-2 font-body font-light ${project.metaColor}`}>
            {project.type}
          </p>
          <h3 className={`font-display text-2xl tracking-wide uppercase ${project.nameColor}`}>
            {project.name}
          </h3>
        </div>
        <div
          className={`w-8 h-8 border flex items-center justify-center transition-all duration-500 ${
            project.nameColor === "text-black"
              ? "border-black/20 text-black"
              : "border-white/15 text-white/60"
          } ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}
        >
          <ArrowUpRight size={14} />
        </div>
      </div>

      <div>
        <p
          className={`text-sm font-body font-light leading-relaxed mb-4 transition-all duration-500 ${project.descColor} ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {project.description}
        </p>
        <p className={`text-[10px] tracking-[0.2em] uppercase font-body ${project.metaColor}`}>
          {project.year}
        </p>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-0.5 ${project.accentBar} transition-all duration-500 ease-out ${
          hovered ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="border-b border-white-dimmer">
      <div className="flex items-center justify-between px-8 lg:px-14 py-6 border-b border-white-dimmer">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-body">
          03 / Selected Work
        </span>
        <a
          href="#contact"
          className="text-[10px] tracking-widest uppercase text-white/30 hover:text-lime font-body transition-colors duration-300"
        >
          All Projects
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`border-b border-r border-white-dimmer ${project.span}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
