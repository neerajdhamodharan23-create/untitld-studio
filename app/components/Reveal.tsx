"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Variant = "up" | "fade" | "scale-in";

type Props = {
  children: ReactNode;
  delay?: number;        // ms
  duration?: number;     // ms
  variant?: Variant;
  threshold?: number;    // 0..1 fraction of element that must be visible
  once?: boolean;        // disconnect after first reveal (default true)
  as?: ElementType;
  className?: string;
};

const easing = "cubic-bezier(0.16, 1, 0.3, 1)";

const initial: Record<Variant, string> = {
  up: "translateY(28px)",
  fade: "translateY(0)",
  "scale-in": "scale(1.04)",
};

export default function Reveal({
  children,
  delay = 0,
  duration = 800,
  variant = "up",
  threshold = 0.15,
  once = true,
  as: Tag = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : initial[variant],
        transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
