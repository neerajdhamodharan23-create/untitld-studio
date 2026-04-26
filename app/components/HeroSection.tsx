export default function HeroSection() {
  return (
    <section id="hero" className="px-4 sm:px-6 lg:px-10 pt-1 pb-4 lg:pb-6">
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] min-h-[78dvh] flex flex-col bg-gradient-to-br from-black via-[#0c0c0c] to-[#171717]">
        {/* Decorative slash — smaller, no blur */}
        <div className="absolute -right-10 top-12 lg:right-10 lg:top-10 opacity-[0.05] pointer-events-none select-none">
          <svg viewBox="0 0 26.03 32" className="w-[320px] lg:w-[460px] h-auto" fill="#ccff00">
            <polygon points="6.99 32 0 32 19.04 0 26.03 0 6.99 32" />
            <path d="M20.15,32c-1.02,0-1.9-.36-2.63-1.09-.73-.73-1.09-1.61-1.09-2.63s.36-1.88,1.09-2.61c.73-.72,1.61-1.09,2.63-1.09s1.86.36,2.61,1.09,1.12,1.59,1.12,2.61c0,.68-.17,1.31-.52,1.87-.35.56-.8,1.01-1.36,1.35-.56.34-1.17.5-1.85.5Z" />
          </svg>
        </div>

        {/* Single soft lime corner glow — radial gradient is far cheaper than blur() */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 600px 400px at 0% 100%, rgba(204,255,0,0.10), transparent 70%)",
          }}
        />

        {/* Top-right description block */}
        <div className="relative z-10 self-end mt-10 lg:mt-16 mr-5 sm:mr-8 lg:mr-14 max-w-md fade-in delay-100">
          <p className="text-sm lg:text-base text-white/70 font-body font-light leading-relaxed text-right mb-5 sm:mb-6">
            UNTITLD helps you shape brand identities and digital presences,
            built for studios and founders ready to lead.
          </p>
          <div className="flex justify-end">
            <a href="#contact" className="pill pill-primary">
              Let&rsquo;s Talk
              <span className="pill-dot bg-black" />
            </a>
          </div>
        </div>

        {/* Bottom-left massive headline */}
        <div className="relative z-10 mt-auto px-6 sm:px-8 lg:px-14 pb-8 lg:pb-14 fade-in delay-200">
          <h1 className="font-display uppercase tracking-wide text-[clamp(3rem,11vw,10rem)] leading-[0.85] text-white">
            We shape
            <br />
            <span className="text-lime">brand</span> presence.
          </h1>
        </div>
      </div>

      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(16px);
          animation: heroFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.3s; }
        @keyframes heroFade {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
