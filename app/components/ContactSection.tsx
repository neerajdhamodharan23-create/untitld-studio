"use client";

import { useState } from "react";
import { Quotes } from "@phosphor-icons/react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email.trim() && form.name.trim()) setSent(true);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span className="pill-dot bg-lime" />
          <p className="text-[11px] tracking-[0.22em] uppercase text-lime font-body">
            Contact
          </p>
        </div>

        {/* Two-column card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* LEFT — heading + quote */}
          <div className="card p-7 sm:p-8 lg:p-12 flex flex-col">
            <h2 className="font-display uppercase tracking-wide text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-white mb-6">
              Contact.
            </h2>
            <p className="text-base text-white/55 font-body font-light leading-relaxed mb-auto pb-12 max-w-md">
              We&rsquo;d love to hear from you. Drop us a message and let&rsquo;s
              start the conversation.
            </p>

            {/* Quote card */}
            <div className="card-raised p-7 mt-auto">
              <Quotes size={28} weight="fill" className="text-lime mb-5" />
              <p className="text-[15px] text-white/75 font-body font-light leading-relaxed mb-6">
                Great brands aren&rsquo;t built by playing it safe. They&rsquo;re
                born from bold ideas, fearless execution, and the will to stand
                out. If you&rsquo;re ready to create something that demands
                attention, let&rsquo;s make it happen together.
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-lime/20 border border-lime/30 flex items-center justify-center font-display text-lime tracking-wider text-sm">
                  N
                </div>
                <div>
                  <p className="text-sm text-white font-body">Neeraj D.</p>
                  <p className="text-[11px] tracking-widest uppercase text-white/40 font-body font-light">
                    Founder of UNTITLD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="card-raised p-7 sm:p-8 lg:p-10">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-14 h-14 rounded-full bg-lime/15 border border-lime/30 flex items-center justify-center mb-6">
                  <span className="pill-dot bg-lime w-3 h-3" />
                </div>
                <h3 className="font-display text-3xl tracking-wide uppercase text-white mb-3">
                  Message sent
                </h3>
                <p className="text-sm text-white/50 font-body font-light max-w-xs">
                  Thanks for reaching out. We&rsquo;ll get back within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Field label="Name">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Smith"
                    className="form-input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="yourname@email.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Company Name">
                  <input
                    type="text"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Enter your company name"
                    className="form-input"
                  />
                </Field>
                <Field label="Message">
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your project"
                    className="form-input resize-none"
                  />
                </Field>

                <button type="submit" className="pill pill-primary w-full justify-center py-4">
                  Submit
                  <span className="pill-dot bg-black" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background-color: #050505;
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-family: var(--font-bahnschrift), system-ui, sans-serif;
          font-size: 14px;
          padding: 14px 16px;
          border-radius: 12px;
          outline: none;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.3); }
        .form-input:focus { border-color: #ccff00; background-color: #080808; }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-widest uppercase text-white/45 font-body mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
