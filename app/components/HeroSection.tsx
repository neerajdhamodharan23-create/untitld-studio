"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const mediaRef = useRef<HTMLVideoElement>(null);

  // Subtle parallax — video translates up as you scroll past the hero.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        if (Math.abs(y - last) < 1) return;
        last = y;
        if (mediaRef.current) {
          mediaRef.current.style.transform = `scale(1.05) translateY(${y * 0.18}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Pause the video when it's offscreen — saves battery and CPU on long pages.
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hero" className="px-4 sm:px-6 lg:px-10 pt-1 pb-4 lg:pb-6">
      <div className="media-card relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] min-h-[84dvh] flex flex-col">
        {/* Background video with scale-in entrance + parallax on scroll */}
        <div className="absolute inset-0 hero-image-wrap">
          <video
            ref={mediaRef}
            src="/hero-video.mp4"
            poster="/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            className="w-full h-full object-cover select-none pointer-events-none"
            style={{ objectPosition: "center", transform: "scale(1.05)" }}
          />
        </div>

        {/* Bottom-rising dark fade — keeps the headline crisp */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 40%, transparent 65%)",
          }}
        />

        {/* Soft right-side darkening for the description block */}
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

        {/* Bottom-left massive headline — word stagger */}
        <div className="relative z-10 mt-auto px-6 sm:px-8 lg:px-14 pb-8 lg:pb-14">
          <h1 className="font-display uppercase tracking-wide text-[clamp(3rem,11vw,10rem)] leading-[0.85] text-white">
            <span className="word-rise" style={{ animationDelay: "0.20s" }}>
              We
            </span>{" "}
            <span className="word-rise" style={{ animationDelay: "0.30s" }}>
              shape
            </span>
            <br />
            <span className="word-rise text-lime" style={{ animationDelay: "0.40s" }}>
              brand
            </span>{" "}
            <span className="word-rise" style={{ animationDelay: "0.50s" }}>
              presence.
            </span>
          </h1>
        </div>
      </div>

      <style>{`
        .hero-image-wrap video {
          opacity: 0;
          animation: heroImageIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
          will-change: transform, opacity;
        }
        @keyframes heroImageIn {
          0%   { opacity: 0; transform: scale(1.12) translateY(0); }
          100% { opacity: 1; transform: scale(1.05) translateY(0); }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(16px);
          animation: heroFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.55s; }
        @keyframes heroFade {
          to { opacity: 1; transform: translateY(0); }
        }

        .word-rise {
          display: inline-block;
          opacity: 0;
          transform: translateY(40%);
          animation: wordRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        @keyframes wordRise {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image-wrap video,
          .fade-in,
          .word-rise {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
