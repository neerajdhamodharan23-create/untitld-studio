import { Stack, Lightning, Sparkle } from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    icon: Sparkle,
    title: "Bold & purposeful",
    description:
      "Our identities make a statement. Every line, mark, and detail is chosen with intention to create brands that feel inevitable.",
  },
  {
    icon: Stack,
    title: "Built to scale",
    description:
      "We deliver complete systems, not single artifacts. Every brand we make is structured to grow across products, channels, and contexts.",
  },
  {
    icon: Lightning,
    title: "Sharp delivery",
    description:
      "We move efficiently without compromising quality. Tight feedback loops, fixed timelines, and ruthless attention to detail.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="pill-dot bg-lime" />
          <p className="text-[11px] tracking-[0.22em] uppercase text-lime font-body">
            Why Choose Us
          </p>
        </div>

        <h2 className="font-display uppercase tracking-wide text-[clamp(2.6rem,6vw,5rem)] leading-[0.92] text-fg text-center mb-5">
          Why studios choose
          <br />
          <span className="text-lime">UNTITLD.</span>
        </h2>

        <p className="text-base text-fg/55 font-body font-light text-center max-w-xl mx-auto mb-14 leading-relaxed">
          A handful of reasons our clients keep coming back — and keep
          recommending us to their network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="card-raised p-7 sm:p-8 group hover:border-lime/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center mb-8 group-hover:bg-lime group-hover:border-lime transition-all duration-500">
                <Icon
                  size={20}
                  weight="light"
                  className="text-lime group-hover:text-black transition-colors duration-500"
                />
              </div>
              <h3 className="font-display text-2xl tracking-wide uppercase text-fg mb-3">
                {title}
              </h3>
              <p className="text-sm text-fg/55 font-body font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
