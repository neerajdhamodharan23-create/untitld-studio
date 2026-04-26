"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(stored);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  // Avoid hydration mismatch — render placeholder until theme is read
  if (theme === null) {
    return <div className="w-10 h-10 rounded-full border border-rule-strong" aria-hidden />;
  }

  const isLight = theme === "light";

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-rule-strong text-fg hover:border-lime hover:text-lime transition-colors duration-300"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isLight ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"
        }`}
      >
        <Moon size={16} weight="fill" />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isLight ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
        }`}
      >
        <Sun size={16} weight="fill" />
      </span>
    </button>
  );
}
