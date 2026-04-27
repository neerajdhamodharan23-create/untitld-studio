import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    name: "Discovery",
    description: "Deep listening — your market, audience, and ambition.",
  },
  {
    number: "02",
    name: "Strategy",
    description: "Positioning and visual territory are defined and aligned.",
  },
  {
    number: "03",
    name: "Design",
    description: "Identity systems built with craft and obsessive precision.",
  },
  {
    number: "04",
    name: "Delivery",
    description: "Complete guidelines, assets, and production-ready files.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-2 mb-5">
            <span className="pill-dot bg-lime" />
            <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-body">
              Process
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display uppercase tracking-wide text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-fg mb-14 max-w-3xl">
            How we <span className="text-lime">build.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={180 + i * 90}>
              <div className="card-raised p-6 sm:p-7 hover:-translate-y-1 hover:border-lime/30 transition-all duration-500">
                <p className="font-display text-5xl tracking-wide text-lime/40 mb-8">
                  {step.number}
                </p>
                <h3 className="font-display text-xl lg:text-2xl tracking-wide text-fg uppercase mb-3">
                  {step.name}
                </h3>
                <p className="text-[13px] text-fg/55 font-body font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-12 sm:mt-14 card-raised p-7 sm:p-8 lg:p-12 border-lime/20">
            <p className="font-body text-[clamp(1.2rem,2.4vw,1.7rem)] font-light text-fg/80 max-w-3xl leading-relaxed italic">
              &ldquo;Good design doesn&rsquo;t announce itself. It just makes
              everything feel inevitable.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="pill-dot bg-lime" />
              <p className="text-[11px] tracking-widest uppercase text-fg/55 font-body">
                UNTITLD Design Principle
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
