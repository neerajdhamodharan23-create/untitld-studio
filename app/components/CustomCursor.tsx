"use client";

import { useEffect, useRef, useState } from "react";

const MAGNETIC_SELECTOR = "a.pill, button.pill, .magnetic";
const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, [role='button'], .interactive";
const PROXIMITY_PX = 90;        // start pulling cursor when within this distance of edge
const CURSOR_PULL = 0.55;       // 0 = no pull, 1 = snap to center
const BUTTON_PULL = 0.25;       // how much the button itself drifts toward the cursor

type MagneticTarget = {
  el: HTMLElement;
  cx: number;
  cy: number;
  rect: DOMRect;
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouse = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const lastButtonRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const findMagneticNear = (x: number, y: number): MagneticTarget | null => {
      const elements = document.querySelectorAll<HTMLElement>(MAGNETIC_SELECTOR);
      let best: MagneticTarget | null = null;
      let bestDist = Infinity;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        // bbox-with-proximity check first (cheap)
        if (
          x < rect.left - PROXIMITY_PX ||
          x > rect.right + PROXIMITY_PX ||
          y < rect.top - PROXIMITY_PX ||
          y > rect.bottom + PROXIMITY_PX
        ) {
          return;
        }
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(x - cx, y - cy);
        if (dist < bestDist) {
          best = { el, cx, cy, rect };
          bestDist = dist;
        }
      });
      return best;
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const magnet = findMagneticNear(e.clientX, e.clientY);

      // Reset previously-pulled button
      if (lastButtonRef.current && lastButtonRef.current !== magnet?.el) {
        lastButtonRef.current.style.transform = "";
        lastButtonRef.current = null;
      }

      if (magnet) {
        // Pull cursor toward element center
        target.current.x = e.clientX + (magnet.cx - e.clientX) * CURSOR_PULL;
        target.current.y = e.clientY + (magnet.cy - e.clientY) * CURSOR_PULL;
        // Pull button slightly toward cursor
        const dx = (e.clientX - magnet.cx) * BUTTON_PULL;
        const dy = (e.clientY - magnet.cy) * BUTTON_PULL;
        magnet.el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        lastButtonRef.current = magnet.el;
      } else {
        target.current.x = e.clientX;
        target.current.y = e.clientY;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(INTERACTIVE_SELECTOR)) setIsHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(INTERACTIVE_SELECTOR)) setIsHovering(false);
    };
    const onLeaveWindow = () => {
      if (lastButtonRef.current) {
        lastButtonRef.current.style.transform = "";
        lastButtonRef.current = null;
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeaveWindow);

    let raf = 0;
    const loop = () => {
      // Dot tracks the raw mouse with high responsiveness
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.7;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.7;
      // Ring follows the magnetic target with smoother lerp
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    document.documentElement.classList.add("cursor-hidden");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-hidden");
      if (lastButtonRef.current) lastButtonRef.current.style.transform = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-lime transition-[width,height,background-color] duration-300 ease-out ${
          isHovering ? "w-12 h-12 bg-lime/15" : "w-9 h-9 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-lime transition-[width,height,opacity] duration-200 ease-out ${
          isHovering ? "w-0 h-0 opacity-0" : "w-1.5 h-1.5 opacity-100"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
