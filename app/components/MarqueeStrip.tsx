const items = [
  "Brand Identity",
  "Visual Systems",
  "Website Design",
  "Digital Presence",
  "Mark & Logotype",
  "UX Architecture",
  "Brand Guidelines",
  "Motion Design",
];

export default function MarqueeStrip() {
  const repeated = [...items, ...items];

  return (
    <div className="bg-lime border-y border-lime overflow-hidden py-3.5 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-[11px] tracking-[0.22em] uppercase text-black font-body font-semibold"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-black/40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
