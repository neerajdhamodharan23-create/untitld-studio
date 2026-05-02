import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { getProject, projects } from "../../lib/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects
    .filter((p) => p.gallery.length > 0)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Params },
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project — UNTITLD" };
  return {
    title: `${project.name} — UNTITLD`,
    description: project.intro || `${project.name} ${project.type}`,
  };
}

const aspectMap: Record<string, string> = {
  video: "aspect-[16/9]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.gallery.length === 0) notFound();

  // Find adjacent project for the "Next project" link
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects.slice(idx + 1).find((p) => p.gallery.length > 0)
    ?? projects.find((p) => p.gallery.length > 0 && p.slug !== project.slug);

  return (
    <main>
      <Nav />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-fg/55 hover:text-lime transition-colors duration-300 font-body mb-10"
            >
              <ArrowLeft size={14} />
              Back to all work
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-body mb-4 flex items-center gap-2">
              <span className="pill-dot bg-lime" />
              {project.type}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="font-display uppercase tracking-wide text-[clamp(3rem,9vw,7rem)] leading-[0.9] text-fg mb-6">
              {project.name}
            </h1>
          </Reveal>

          {project.tagline && (
            <Reveal delay={220}>
              <p className="text-lg sm:text-xl font-body font-light text-fg/65 max-w-2xl mb-12">
                {project.tagline}
              </p>
            </Reveal>
          )}

          {/* Meta strip */}
          <Reveal delay={300}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 pt-8 pb-12 border-t border-rule">
              {project.meta.map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] tracking-widest uppercase text-fg/45 font-body mb-2">
                    {m.label}
                  </p>
                  <p className="text-sm text-fg font-body">{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-4 sm:px-6 lg:px-10 mb-16 sm:mb-20">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="scale-in" duration={1000}>
            <div className="relative aspect-[16/9] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
              <Image
                src={project.gallery[0].src}
                alt={project.gallery[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1280px"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Long copy */}
      {(project.background || project.approach || project.intro) && (
        <section className="px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20">
            <Reveal>
              <p className="text-[10px] tracking-widest uppercase text-fg/45 font-body lg:sticky lg:top-28">
                Project Overview
              </p>
            </Reveal>

            <div className="space-y-8 max-w-3xl">
              {project.intro && (
                <Reveal delay={80}>
                  <p className="text-xl sm:text-2xl font-body font-light text-fg leading-relaxed">
                    {project.intro}
                  </p>
                </Reveal>
              )}
              {project.background && (
                <Reveal delay={160}>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-accent font-body mb-3">
                      Background
                    </p>
                    <p className="text-base text-fg/70 font-body font-light leading-relaxed">
                      {project.background}
                    </p>
                  </div>
                </Reveal>
              )}
              {project.approach && (
                <Reveal delay={240}>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-accent font-body mb-3">
                      Approach
                    </p>
                    <p className="text-base text-fg/70 font-body font-light leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery — skip the first image since we used it as the hero */}
      <section className="px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {project.gallery.slice(1).map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 60}
              className={img.span ?? "md:col-span-1"}
            >
              <figure
                className={`relative ${
                  aspectMap[img.aspect ?? "video"]
                } rounded-[1.25rem] overflow-hidden border border-rule`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {img.caption && (
                  <figcaption className="absolute bottom-3 left-4 text-[10px] tracking-widest uppercase text-white/70 font-body bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next project */}
      {next && (
        <section className="px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <Link
                href={`/work/${next.slug}`}
                className="card-raised p-8 sm:p-12 lg:p-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 group transition-all duration-500 hover:-translate-y-1 hover:border-lime/30"
              >
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-fg/45 font-body mb-3">
                    Next project
                  </p>
                  <h2 className="font-display uppercase tracking-wide text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-fg group-hover:text-lime transition-colors duration-500">
                    {next.name}
                  </h2>
                  <p className="text-sm text-fg/55 font-body font-light mt-2">
                    {next.type}
                  </p>
                </div>
                <ArrowUpRight
                  size={36}
                  className="text-fg/45 group-hover:text-lime transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
