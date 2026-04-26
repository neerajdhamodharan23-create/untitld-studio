"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { ...spring, delay },
});

export default function HeroSection() {
  return (
    <section id="hero" className="px-6 lg:px-10 pt-2 pb-6">
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-[2rem] min-h-[78dvh] flex flex-col">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-[#1a1a1a]" />

        {/* Decorative giant slash logo */}
        <div className="absolute -right-32 -top-20 lg:-right-20 lg:-top-12 opacity-[0.06] pointer-events-none select-none">
          <svg viewBox="0 0 26.03 32" className="w-[680px] h-[840px]" fill="#ccff00">
            <polygon points="6.99 32 0 32 19.04 0 26.03 0 6.99 32" />
            <path d="M20.15,32c-1.02,0-1.9-.36-2.63-1.09-.73-.73-1.09-1.61-1.09-2.63s.36-1.88,1.09-2.61c.73-.72,1.61-1.09,2.63-1.09s1.86.36,2.61,1.09,1.12,1.59,1.12,2.61c0,.68-.17,1.31-.52,1.87-.35.56-.8,1.01-1.36,1.35-.56.34-1.17.5-1.85.5Z" />
          </svg>
        </div>

        {/* Ambient lime glow */}
        <div className="absolute -left-40 -bottom-40 w-[600px] h-[600px] rounded-full bg-lime/[0.07] blur-[120px] pointer-events-none" />

        {/* Top-right description block */}
        <motion.div
          {...fadeUp(0.15)}
          className="relative z-10 self-end mt-12 lg:mt-16 mr-8 lg:mr-14 max-w-md"
        >
          <p className="text-sm lg:text-base text-white/70 font-body font-light leading-relaxed text-right mb-6">
            UNTITLD helps you shape brand identities and digital presences,
            built for studios and founders ready to lead.
          </p>
          <div className="flex justify-end">
            <a href="#contact" className="pill pill-primary">
              Let&rsquo;s Talk
              <span className="pill-dot bg-black" />
            </a>
          </div>
        </motion.div>

        {/* Bottom-left massive headline */}
        <motion.div
          {...fadeUp(0.25)}
          className="relative z-10 mt-auto px-8 lg:px-14 pb-10 lg:pb-14"
        >
          <h1 className="font-display uppercase tracking-wide text-[clamp(4rem,12vw,11rem)] leading-[0.85] text-white">
            We shape
            <br />
            <span className="text-lime">brand</span> presence.
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
