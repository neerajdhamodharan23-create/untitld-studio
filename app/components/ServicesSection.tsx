import { Fingerprint, Monitor } from "@phosphor-icons/react/dist/ssr";

const brandServices = [
  "Mark & logotype development",
  "Visual identity systems",
  "Brand guidelines & standards",
  "Color & typography systems",
  "Stationery & print design",
  "Brand voice & positioning",
];

const webServices = [
  "UX architecture & wireframing",
  "Visual & interaction design",
  "Responsive component systems",
  "Micro-animation & motion",
  "Design-to-code handoff",
  "CMS & platform integration",
];

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-white-dimmer">
      <div className="flex items-center gap-4 px-8 lg:px-14 py-6 border-b border-white-dimmer">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-body">
          02 / Services
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Brand Identity */}
        <div className="px-8 lg:px-14 py-16 border-b md:border-b-0 md:border-r border-white-dimmer">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-10 border border-lime/30 flex items-center justify-center flex-shrink-0 mt-1">
              <Fingerprint size={18} className="text-lime" weight="light" />
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-wide text-white uppercase mb-2">
                Brand Identity
              </h2>
              <p className="text-sm text-white/45 leading-relaxed font-body font-light">
                We build identities that hold their own in any context — from
                business cards to billboards. Every element is purposeful,
                cohesive, and built to last.
              </p>
            </div>
          </div>

          <ul className="space-y-3 mb-12">
            {brandServices.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 text-sm text-white/55 font-body font-light"
              >
                <span className="w-3 h-px bg-lime flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-white-dimmer">
            <p className="text-[10px] tracking-widest uppercase text-white/30 font-body mb-1">
              Starting from
            </p>
            <p className="font-display text-4xl tracking-wide text-lime uppercase">
              $4,800
            </p>
          </div>
        </div>

        {/* Website Design */}
        <div className="px-8 lg:px-14 py-16">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-10 border border-lime/30 flex items-center justify-center flex-shrink-0 mt-1">
              <Monitor size={18} className="text-lime" weight="light" />
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-wide text-white uppercase mb-2">
                Website Design
              </h2>
              <p className="text-sm text-white/45 leading-relaxed font-body font-light">
                Websites that convert attention into action. We design systems,
                not pages — ensuring every touchpoint communicates the same
                standard of quality.
              </p>
            </div>
          </div>

          <ul className="space-y-3 mb-12">
            {webServices.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 text-sm text-white/55 font-body font-light"
              >
                <span className="w-3 h-px bg-lime flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-white-dimmer">
            <p className="text-[10px] tracking-widest uppercase text-white/30 font-body mb-1">
              Starting from
            </p>
            <p className="font-display text-4xl tracking-wide text-lime uppercase">
              $6,500
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-14 py-8 border-t border-white-dimmer bg-surface">
        <p className="text-sm text-white/30 font-body font-light max-w-xl">
          Most engagements combine both services. We offer bundled pricing for
          full identity + web projects — reach out to discuss your scope.
        </p>
      </div>
    </section>
  );
}
