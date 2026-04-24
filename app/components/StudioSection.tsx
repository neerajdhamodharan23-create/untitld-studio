const capabilities = [
  "Brand Strategy",
  "Visual Identity",
  "Logotype Design",
  "Identity Systems",
  "Brand Guidelines",
  "Web Design",
  "UX Architecture",
  "Interaction Design",
  "Motion Design",
  "Design Systems",
];

export default function StudioSection() {
  return (
    <section id="studio" className="bg-surface border-b border-white-dimmer">
      <div className="flex items-center gap-4 px-8 lg:px-14 py-6 border-b border-white-dimmer">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-body">
          05 / Studio
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] border-b border-white-dimmer">
        {/* Left */}
        <div className="px-8 lg:px-14 py-16 border-b lg:border-b-0 lg:border-r border-white-dimmer">
          <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] tracking-wide text-white uppercase leading-[0.92] mb-10">
            We are
            <br />
            <span className="text-lime">UNTITLD.</span>
          </h2>

          <div className="space-y-5 max-w-lg">
            <p className="text-base text-white/40 leading-relaxed font-body font-light">
              A boutique design studio founded on the belief that every brand
              deserves to look and feel like it belongs at the top of its
              category.
            </p>
            <p className="text-base text-white/40 leading-relaxed font-body font-light">
              We work with a small number of clients at a time — never
              compromising on craft or attention. Each engagement is treated as
              a long-term investment in your brand&rsquo;s future.
            </p>
            <p className="text-base text-white/40 leading-relaxed font-body font-light">
              Our work spans sectors — from finance and technology to
              architecture and consumer goods. What unites our clients is a
              shared commitment to doing things properly.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white-dimmer grid grid-cols-2 gap-8">
            {[
              { value: "40+", label: "Projects delivered" },
              { value: "3", label: "Years operating" },
              { value: "18", label: "Industries worked in" },
              { value: "100%", label: "Client retention rate" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-4xl tracking-wide text-lime mb-1 uppercase">
                  {value}
                </p>
                <p className="text-xs tracking-widest uppercase text-white/25 font-body font-light">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — capabilities */}
        <div className="w-full lg:w-64 px-8 lg:px-10 py-16">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-body mb-8">
            Capabilities
          </p>
          <ul className="space-y-3">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-center gap-3 text-sm text-white/40 font-body font-light"
              >
                <span className="w-3 h-px bg-lime flex-shrink-0" />
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
