"use client";

import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <section id="contact" className="bg-black">
      <div className="flex items-center gap-4 px-8 lg:px-14 py-6 border-b border-white-dimmer">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-body">
          06 / Contact
        </span>
      </div>

      <div className="px-8 lg:px-14 py-20 lg:py-28 border-b border-white-dimmer">
        <h2 className="font-display text-[clamp(3rem,10vw,9rem)] tracking-wide leading-[0.88] text-white uppercase mb-10 max-w-5xl">
          Let&rsquo;s build
          <br />
          something worth
          <br />
          <span className="text-lime">remembering.</span>
        </h2>

        <p className="text-base text-white/35 font-body font-light max-w-md leading-relaxed mb-14">
          We take on a limited number of projects each quarter. If you have an
          upcoming rebrand or new digital project, let&rsquo;s talk.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="mailto:hello@untitld.studio"
            className="group flex items-center gap-3 font-display text-2xl tracking-wide uppercase text-white hover:text-lime transition-colors duration-300"
          >
            hello@untitld.studio
            <ArrowUpRight
              size={22}
              className="text-lime transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <span className="hidden sm:block w-px h-6 bg-white/10" />
          <span className="text-xs tracking-widest uppercase text-white/20 font-body font-light">
            Response within 24h
          </span>
        </div>
      </div>

      <div className="px-8 lg:px-14 py-10 border-b border-white-dimmer">
        <p className="text-xs tracking-widest uppercase text-white/25 font-body mb-6 font-light">
          Or leave your email — we&rsquo;ll reach out
        </p>
        {sent ? (
          <p className="text-sm text-lime font-body font-light tracking-wide">
            Got it. We&rsquo;ll be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-transparent border border-white/10 text-white/70 placeholder:text-white/20 text-sm px-4 py-3 outline-none focus:border-lime transition-colors duration-300 font-body font-light"
            />
            <button
              type="submit"
              className="border border-l-0 border-white/10 px-5 py-3 text-xs tracking-widest uppercase font-body text-white/30 hover:text-black hover:bg-lime hover:border-lime transition-all duration-300"
            >
              Send
            </button>
          </form>
        )}
      </div>

      <div className="px-8 lg:px-14 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs tracking-widest uppercase text-white/15 font-body font-light">
          UNTITLD Studio &copy; 2024
        </p>
        <div className="flex items-center gap-8">
          {["Instagram", "Behance", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs tracking-widest uppercase text-white/20 hover:text-lime transition-colors duration-300 font-body font-light"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
