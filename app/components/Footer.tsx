import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-10 pb-6">
      <Reveal>
      <div className="card p-7 sm:p-8 lg:p-10 border border-rule">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <Image
              src="/logo-white.svg"
              alt="UNTITLD"
              width={140}
              height={22}
              className="h-[22px] w-auto mb-6 logo-dark"
            />
            <Image
              src="/logo-black.svg"
              alt=""
              width={140}
              height={22}
              className="h-[22px] w-auto mb-6 logo-light"
              aria-hidden
            />
            <p className="text-sm text-fg/55 font-body font-light max-w-md leading-relaxed">
              A design studio building brand identities and digital presences
              for companies that intend to lead.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {["Instagram", "Behance", "LinkedIn", "Email"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[12px] tracking-widest uppercase text-fg/55 hover:text-lime transition-colors duration-300 font-body"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] tracking-widest uppercase text-fg/45 font-body">
            UNTITLD Studio &copy; 2025
          </p>
          <div className="flex items-center gap-2">
            <span className="pill-dot bg-lime animate-pulse" />
            <p className="text-[11px] tracking-widest uppercase text-fg/55 font-body">
              Available for new projects
            </p>
          </div>
        </div>
      </div>
      </Reveal>
    </footer>
  );
}
