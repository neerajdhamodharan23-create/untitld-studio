/* Animated in-card illustrations inspired by Bravana's Why Us section.
   Each one is a self-contained looping CSS animation — pure SVG +
   keyframes, no JavaScript runtime cost. */

export function BoldGridIllustration() {
  // 3x3 grid of squares with the slash mark bouncing in the centre.
  // Cells fade in and out in a wave, suggesting "every detail intentional".
  const cells = Array.from({ length: 9 });
  return (
    <div className="illus-tile">
      <div className="illus-grid">
        {cells.map((_, i) => (
          <span
            key={i}
            className="illus-cell"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
        <span className="illus-mark">
          <svg viewBox="0 0 26.03 32" fill="currentColor" className="w-full h-full">
            <polygon points="6.99 32 0 32 19.04 0 26.03 0 6.99 32" />
            <path d="M20.15,32c-1.02,0-1.9-.36-2.63-1.09-.73-.73-1.09-1.61-1.09-2.63s.36-1.88,1.09-2.61c.73-.72,1.61-1.09,2.63-1.09s1.86.36,2.61,1.09,1.12,1.59,1.12,2.61c0,.68-.17,1.31-.52,1.87-.35.56-.8,1.01-1.36,1.35-.56.34-1.17.5-1.85.5Z" />
          </svg>
        </span>
      </div>

      <style>{`
        .illus-tile {
          width: 100%;
          height: 200px;
          border-radius: 1rem;
          background: var(--icon-tile-bg);
          border: 1px solid var(--icon-tile-border);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .illus-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 8px;
          width: 144px;
          height: 144px;
        }
        .illus-cell {
          background-color: var(--icon-mark);
          opacity: 0.18;
          border-radius: 6px;
          animation: illus-cell-pulse 2.4s ease-in-out infinite;
        }
        @keyframes illus-cell-pulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(0.94); }
        }
        .illus-mark {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: 36px; height: 44px;
          color: var(--icon-mark);
          animation: illus-mark-bounce 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        }
        @keyframes illus-mark-bounce {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50%      { transform: translate(-50%, -55%) scale(1.05) rotate(-3deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .illus-cell, .illus-mark { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

export function ScaleStackIllustration() {
  // Four nested square outlines that scale up from the center, suggesting
  // a brand system that grows from an atomic mark to a full system.
  return (
    <div className="illus-tile-2">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="ring"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
      <span className="core">
        <svg viewBox="0 0 26.03 32" fill="currentColor" className="w-full h-full">
          <polygon points="6.99 32 0 32 19.04 0 26.03 0 6.99 32" />
          <path d="M20.15,32c-1.02,0-1.9-.36-2.63-1.09-.73-.73-1.09-1.61-1.09-2.63s.36-1.88,1.09-2.61c.73-.72,1.61-1.09,2.63-1.09s1.86.36,2.61,1.09,1.12,1.59,1.12,2.61c0,.68-.17,1.31-.52,1.87-.35.56-.8,1.01-1.36,1.35-.56.34-1.17.5-1.85.5Z" />
        </svg>
      </span>

      <style>{`
        .illus-tile-2 {
          width: 100%;
          height: 200px;
          border-radius: 1rem;
          background: var(--icon-tile-bg);
          border: 1px solid var(--icon-tile-border);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .ring {
          position: absolute;
          left: 50%; top: 50%;
          width: 40px; height: 40px;
          border: 1.5px solid var(--icon-mark);
          border-radius: 8px;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.6);
          animation: ring-grow 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes ring-grow {
          0%   { opacity: 0;    transform: translate(-50%, -50%) scale(0.4); }
          30%  { opacity: 0.65; }
          100% { opacity: 0;    transform: translate(-50%, -50%) scale(3.2); }
        }
        .core {
          position: relative;
          width: 28px; height: 34px;
          color: var(--icon-mark);
          z-index: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .ring { animation: none !important; opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

export function SharpDeliveryIllustration() {
  // Three timeline ticks (01 → 02 → 03) that highlight in sequence,
  // suggesting brisk, on-tempo delivery.
  const steps = [
    { n: "01", label: "Brief" },
    { n: "02", label: "Make" },
    { n: "03", label: "Ship" },
  ];
  return (
    <div className="illus-tile-3">
      <div className="ticks">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="tick"
            style={{ animationDelay: `${i * 0.7}s` }}
          >
            <span className="tick-num">{s.n}</span>
            <span className="tick-label">{s.label}</span>
          </div>
        ))}
        <span className="track" />
      </div>

      <style>{`
        .illus-tile-3 {
          width: 100%;
          height: 200px;
          border-radius: 1rem;
          background: var(--icon-tile-bg);
          border: 1px solid var(--icon-tile-border);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .ticks {
          display: flex;
          gap: 18px;
          align-items: center;
          position: relative;
          padding-bottom: 18px;
        }
        .track {
          position: absolute;
          left: 8px; right: 8px;
          bottom: 26px;
          height: 1px;
          background-color: var(--icon-mark);
          opacity: 0.18;
        }
        .tick {
          width: 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-family: var(--font-rift), "Rift", sans-serif;
          font-style: italic;
          font-weight: 700;
          color: var(--icon-mark);
          opacity: 0.32;
          transform: translateY(0);
          animation: tick-pulse 2.1s ease-in-out infinite;
        }
        .tick::after {
          content: "";
          width: 6px; height: 6px; border-radius: 999px;
          background: var(--icon-mark);
          margin-top: 4px;
          opacity: 0.6;
        }
        @keyframes tick-pulse {
          0%, 100% { opacity: 0.32; transform: translateY(0); }
          25%      { opacity: 1;    transform: translateY(-2px); }
          50%      { opacity: 0.32; transform: translateY(0); }
        }
        .tick-num { font-size: 26px; line-height: 1; letter-spacing: 0.02em; }
        .tick-label {
          font-family: var(--font-bahnschrift), system-ui, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        @media (prefers-reduced-motion: reduce) {
          .tick { animation: none !important; opacity: 0.55; }
        }
      `}</style>
    </div>
  );
}
