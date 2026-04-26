import { Fingerprint, Monitor } from "@phosphor-icons/react/dist/ssr";

const brand = [
  "Mark & logotype",
  "Visual identity systems",
  "Brand guidelines",
  "Voice & positioning",
];

const web = [
  "UX architecture",
  "Visual & interaction design",
  "Component systems",
  "Design-to-code handoff",
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 lg:px-10 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span className="pill-dot bg-lime" />
          <p className="text-[11px] tracking-[0.22em] uppercase text-lime font-body">
            Services
          </p>
        </div>

        <h2 className="font-display uppercase tracking-wide text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-white mb-14 max-w-4xl">
          What we do <span className="text-lime">best.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Brand Identity */}
          <ServiceCard
            icon={Fingerprint}
            title="Brand Identity"
            description="We build identities that hold their own in any context — from business cards to billboards. Cohesive, purposeful, and made to last."
            services={brand}
            price="$4,800"
            featured
          />

          {/* Website Design */}
          <ServiceCard
            icon={Monitor}
            title="Website Design"
            description="Websites that turn attention into action. We design systems, not pages — every touchpoint communicates the same standard of quality."
            services={web}
            price="$6,500"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  services,
  price,
  featured,
}: {
  icon: React.ComponentType<{ size?: number; weight?: "light"; className?: string }>;
  title: string;
  description: string;
  services: string[];
  price: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`card-raised p-8 lg:p-10 relative overflow-hidden ${
        featured ? "border-lime/30" : ""
      }`}
    >
      {featured && (
        <div className="absolute right-7 top-7">
          <span className="pill text-[10px] py-1.5 px-3 bg-lime/15 text-lime border border-lime/30">
            <span className="pill-dot bg-lime" />
            Most Popular
          </span>
        </div>
      )}

      <div className="w-12 h-12 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center mb-8">
        <Icon size={20} weight="light" className="text-lime" />
      </div>

      <h3 className="font-display text-3xl lg:text-4xl tracking-wide uppercase text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-white/50 font-body font-light leading-relaxed mb-8 max-w-md">
        {description}
      </p>

      <ul className="space-y-3 mb-10">
        {services.map((s) => (
          <li
            key={s}
            className="flex items-center gap-3 text-sm text-white/65 font-body font-light"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
            {s}
          </li>
        ))}
      </ul>

      <div className="flex items-end justify-between pt-6 border-t border-white/10">
        <div>
          <p className="text-[10px] tracking-widest uppercase text-white/35 font-body mb-1">
            Starting from
          </p>
          <p className="font-display text-3xl tracking-wide text-lime uppercase">
            {price}
          </p>
        </div>
        <a href="#contact" className="pill pill-secondary text-[11px]">
          Inquire
          <span className="pill-dot bg-lime" />
        </a>
      </div>
    </div>
  );
}
