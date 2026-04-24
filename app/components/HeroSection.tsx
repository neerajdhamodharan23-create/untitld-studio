"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { ...spring, delay },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] grid grid-cols-[1fr_auto] border-b border-white-dimmer"
    >
      {/* Left — main content */}
      <div className="flex flex-col justify-between px-8 lg:px-14 pt-32 pb-10 border-r border-white-dimmer">
        <motion.p
          {...fadeUp(0.05)}
          className="text-[10px] tracking-[0.25em] uppercase text-white/35 font-body"
        >
          Brand Identity &amp; Website Design
        </motion.p>

        <div className="py-10">
          <motion.h1
            {...fadeUp(0.15)}
            className="font-display text-[clamp(4rem,11vw,10rem)] leading-[0.88] tracking-wide text-white uppercase"
          >
            We shape
            <br />
            how brands
            <br />
            <span className="text-lime">are perceived.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.28)}
            className="mt-8 text-base text-white/50 max-w-sm leading-relaxed font-body font-light"
          >
            A boutique studio crafting brand identities and digital presences
            for companies that intend to lead their category.
          </motion.p>
        </div>

        <motion.div
          {...fadeUp(0.4)}
          className="flex items-end justify-between pt-6 border-t border-white-dimmer"
        >
          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="text-xs tracking-widest uppercase font-body text-white hover:text-lime transition-colors duration-300 underline underline-offset-4"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase font-body text-white/40 hover:text-white transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-white/30 font-body"
          >
            <ArrowDown size={12} />
            Scroll
          </motion.div>
        </motion.div>
      </div>

      {/* Right — vertical info strip */}
      <div className="w-14 lg:w-20 flex flex-col items-center justify-between py-24 lg:py-32">
        <p className="text-[9px] tracking-[0.22em] uppercase text-white/25 font-body [writing-mode:vertical-rl] rotate-180">
          UNTITLD — Studio
        </p>
        <div className="flex flex-col items-center gap-3">
          <span className="w-px h-12 bg-white/10 block" />
          <p className="text-[9px] tracking-[0.18em] uppercase text-lime font-body [writing-mode:vertical-rl] rotate-180">
            Est. 2024
          </p>
        </div>
        <p className="text-[9px] tracking-[0.22em] uppercase text-white/25 font-body [writing-mode:vertical-rl] rotate-180">
          Available
        </p>
      </div>
    </section>
  );
}
