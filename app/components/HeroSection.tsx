import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="px-4 sm:px-6 lg:px-10 pt-1 pb-4 lg:pb-6">
      {/* Hero card — full-bleed photo background, ~84dvh tall */}
      <div className="media-card relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] min-h-[84dvh] flex flex-col">
        {/* Background photo */}
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1280px"
          className="object-cover select-none"
          style={{ objectPosition: "center 10%" }}
        />

        {/* Bottom-left dark fade — keeps the big headline readable on warm tones */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 40%, transparent 65%)",
          }}
        />

        {/* Subtle right-side darkening for the description block readability */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 pointer-events-none hidden lg:block"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.40) 0%, transparent 100%)",
          }}
        />

        {/* Top-right description */}
        <div className="relative z-10 self-end mt-10 lg:mt-16 mr-5 sm:mr-8 lg:mr-14 max-w-md fade-in delay-100">
          <p className="text-sm lg:text-base text-white/90 font-body font-light leading-relaxed text-right mb-5 sm:mb-6">
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
