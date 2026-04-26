import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const stats = [
  { value: "40+", label: "Projects launched" },
  { value: "100%", label: "Client retention rate" },
  { value: "18", label: "Industries worked in" },
];

export default function AboutSection() {
  return (
    <section id="studio" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span className="pill-dot bg-lime" />
          <p className="text-[11px] tracking-[0.22em] uppercase text-lime font-body">
            About Us
          </p>
        </div>

        <h2 className="font-display uppercase tracking-wide text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95] text-white mb-14 max-w-4xl">
          UNTITLD helps creatives grow,
          <br />
          and we&rsquo;ve helped many{" "}
          <span className="inline-block align-middle mx-2">
            <svg
              viewBox="0 0 26.03 32"
              fill="#ccff00"
              className="w-8 h-10 lg:w-10 lg:h-12 inline-block"
            >
              <polygon points="6.99 32 0 32 19.04 0 26.03 0 6.99 32" />
              <path d="M20.15,32c-1.02,0-1.9-.36-2.63-1.09-.73-.73-1.09-1.61-1.09-2.63s.36-1.88,1.09-2.61c.73-.72,1.61-1.09,2.63-1.09s1.86.36,2.61,1.09,1.12,1.59,1.12,2.61c0,.68-.17,1.31-.52,1.87-.35.56-.8,1.01-1.36,1.35-.56.34-1.17.5-1.85.5Z" />
            </svg>
          </span>
          do it with <span className="text-lime">confidence.</span>
        </h2>

        {/* Image card with stats overlay */}
        <div className="relative rounded-[2rem] overflow-hidden mb-10">
          {/* Stylized background instead of photo */}
          <div
            className="relative h-[360px] sm:h-[420px] lg:h-[480px]"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(204,255,0,0.10), transparent 50%), radial-gradient(circle at 25% 90%, rgba(204,255,0,0.06), transparent 50%), linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #080808 100%)",
            }}
          >
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Centered slash mark — viewBox extended on the right/bottom so the
                visual centroid of the slash + dot composition lands at the
                geometric center of the SVG, not the polygon centroid alone. */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="-1.4 -2 28.83 36"
                fill="#ccff00"
                className="w-32 h-40 lg:w-44 lg:h-56 opacity-90"
                preserveAspectRatio="xMidYMid meet"
              >
                <polygon points="6.99 32 0 32 19.04 0 26.03 0 6.99 32" />
                <path d="M20.15,32c-1.02,0-1.9-.36-2.63-1.09-.73-.73-1.09-1.61-1.09-2.63s.36-1.88,1.09-2.61c.73-.72,1.61-1.09,2.63-1.09s1.86.36,2.61,1.09,1.12,1.59,1.12,2.61c0,.68-.17,1.31-.52,1.87-.35.56-.8,1.01-1.36,1.35-.56.34-1.17.5-1.85.5Z" />
              </svg>
            </div>

            {/* Stats bar at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 border-t border-white/10">
              <div className="grid grid-cols-3 divide-x divide-white/10">
                {stats.map(({ value, label }) => (
                  <div key={label} className="px-3 sm:px-6 lg:px-10 py-5 sm:py-7 text-center">
                    <p className="font-display text-2xl sm:text-3xl lg:text-5xl tracking-wide text-lime uppercase mb-1">
                      {value}
                    </p>
                    <p className="text-[9px] sm:text-[11px] tracking-widest uppercase text-white/40 font-body font-light leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Two-column copy + button */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-end">
          <a href="#contact" className="pill pill-secondary border-lime/30 text-lime">
            About Us
            <span className="pill-dot bg-lime" />
          </a>
          <div className="space-y-4 max-w-3xl">
            <p className="text-[15px] text-white/55 font-body font-light leading-relaxed">
              UNTITLD isn&rsquo;t just a design studio — it&rsquo;s a
              launchpad for bold ideas and brave brands. Whether you&rsquo;re
              just starting or scaling, we give you the structure and
              language you need to show your best work and tell your story
              with impact.
            </p>
            <p className="text-[15px] text-white/55 font-body font-light leading-relaxed">
              Trusted by independent creatives and growing teams alike, our
              process makes it easier to build a lasting presence — both
              online and off. We focus on what matters: your vision, your
              voice, and your next move.
            </p>
          </div>
          <a
            href="#work"
            className="hidden lg:flex items-center gap-2 text-[12px] tracking-widest uppercase text-white/60 hover:text-lime transition-colors font-body whitespace-nowrap"
          >
            View Work
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
