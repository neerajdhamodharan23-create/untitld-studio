const steps = [
  {
    number: "01",
    name: "Discovery",
    description:
      "We begin every engagement with deep listening — understanding your market, audience, competitors, and ambition before a single mark is made.",
  },
  {
    number: "02",
    name: "Strategy",
    description:
      "Positioning, naming direction, and visual territory are defined. This phase creates the strategic foundation every design decision is grounded in.",
  },
  {
    number: "03",
    name: "Design",
    description:
      "With strategy as the compass, we develop identity systems and digital experiences with craft, precision, and obsessive attention to detail.",
  },
  {
    number: "04",
    name: "Delivery",
    description:
      "Complete brand guidelines, asset libraries, and production-ready files — everything needed to deploy your new identity with confidence.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="border-b border-white-dimmer">
      <div className="flex items-center gap-4 px-8 lg:px-14 py-6 border-b border-white-dimmer">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-body">
          04 / Process
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className={`px-8 lg:px-10 py-12 ${
              i < steps.length - 1
                ? "border-b lg:border-b-0 lg:border-r border-white-dimmer"
                : ""
            }`}
          >
            <p className="font-display text-5xl text-lime/30 mb-6 tracking-wide">
              {step.number}
            </p>
            <h3 className="font-display text-2xl tracking-wide text-white uppercase mb-4">
              {step.name}
            </h3>
            <p className="text-sm text-white/40 leading-relaxed font-body font-light">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="px-8 lg:px-14 py-12 border-t border-white-dimmer bg-surface">
        <p className="text-[clamp(1.1rem,2.8vw,1.8rem)] font-body font-light text-white/35 max-w-3xl leading-relaxed italic">
          &ldquo;Good design doesn&rsquo;t announce itself. It just makes
          everything feel inevitable.&rdquo;
        </p>
      </div>
    </section>
  );
}
