// Single source of truth for the project portfolio. The Works grid and the
// dynamic /work/[slug] detail page both consume this list.

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Aspect ratio class — "video" (16:9), "square", or "portrait" (4:5) */
  aspect?: "video" | "square" | "portrait";
  /** Tailwind grid span — e.g. "md:col-span-2" for wide rows */
  span?: string;
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  year: string;
  client: string;
  tagline: string;
  /** Used as the card thumbnail in the Works grid */
  thumbnail: string;
  /** Card-level styling for the Works grid */
  cardBg?: string;
  cardLight?: boolean;
  featured?: boolean;
  /** Long-form copy for the detail page */
  intro: string;
  background: string;
  approach: string;
  /** Image gallery, rendered in order */
  gallery: ProjectImage[];
  meta: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "mectron-industries",
    name: "Mectron Industries",
    type: "Brand Identity",
    year: "2025",
    client: "Mectron Industries",
    tagline: "Engineering Tomorrow, Today.",
    thumbnail: "/projects/mectron-industries/hero.png",
    featured: true,
    intro:
      "A complete brand identity for Mectron Industries — an industrial automation company building intelligent machines and precision systems for the next generation of manufacturing.",
    background:
      "Mectron approached UNTITLD needing an identity that could hold its own across heavy-machinery factories, polished investor decks, and digital-first product surfaces. The brief: project authority, precision, and forward motion without the cliché of generic tech-blue.",
    approach:
      "We built the mark on a strict modular grid — every chamfer, every angle exists at a defined ratio. The 'M' reads as a horizon line crested by twin peaks: industrial structure with a hint of skyline. The deep cobalt blue and high-contrast white do the heavy lifting; the system stays disciplined whether it lands on a billboard, a wristwatch, or a hangtag.",
    gallery: [
      {
        src: "/projects/mectron-industries/hero.png",
        alt: "Mectron Industries primary brand reveal — wordmark on gradient blue",
        aspect: "video",
        span: "md:col-span-2",
      },
      {
        src: "/projects/mectron-industries/grid.png",
        alt: "Logomark constructed on a modular grid",
        aspect: "video",
        caption: "01 — Constructed on a modular grid",
        span: "md:col-span-2",
      },
      {
        src: "/projects/mectron-industries/logo.png",
        alt: "Mark on cobalt with directional gradient",
        aspect: "video",
        caption: "02 — Primary mark study",
      },
      {
        src: "/projects/mectron-industries/banner.png",
        alt: "Lockup banner with the rounded cobalt panel",
        aspect: "video",
        caption: "03 — Banner lockup",
      },
      {
        src: "/projects/mectron-industries/email-banner.png",
        alt: "Email signature banner with contact details",
        aspect: "video",
        caption: "04 — Email signature system",
        span: "md:col-span-2",
      },
      {
        src: "/projects/mectron-industries/billboard.png",
        alt: "Out-of-home billboard mockup against a concrete wall",
        aspect: "video",
        caption: "05 — Out-of-home",
        span: "md:col-span-2",
      },
      {
        src: "/projects/mectron-industries/app-icon.png",
        alt: "iOS app icon and home-screen application",
        aspect: "video",
        caption: "06 — App icon",
      },
      {
        src: "/projects/mectron-industries/watch.png",
        alt: "Mark on a smartwatch face",
        aspect: "video",
        caption: "07 — Wearable surface",
      },
      {
        src: "/projects/mectron-industries/hangtag.png",
        alt: "Black and white hangtag mockup on cobalt",
        aspect: "video",
        caption: "08 — Hangtags",
        span: "md:col-span-2",
      },
      {
        src: "/projects/mectron-industries/business-card.png",
        alt: "Business card front and back on concrete",
        aspect: "video",
        caption: "09 — Business cards",
      },
      {
        src: "/projects/mectron-industries/signage.png",
        alt: "Building-scale signage on a corrugated facade",
        aspect: "video",
        caption: "10 — Architectural signage",
      },
      {
        src: "/projects/mectron-industries/laptop.png",
        alt: "Marketing site landing page on a laptop",
        aspect: "video",
        caption: "11 — Digital surface",
        span: "md:col-span-2",
      },
    ],
    meta: [
      { label: "Client", value: "Mectron Industries" },
      { label: "Category", value: "Brand Identity" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Mark, system, applications" },
    ],
  },
  {
    slug: "signal-spark",
    name: "Signal Spark",
    type: "Branding Design",
    year: "2024",
    client: "Signal Spark",
    tagline: "",
    thumbnail: "",
    featured: true,
    intro: "",
    background: "",
    approach: "",
    gallery: [],
    meta: [],
    cardBg:
      "radial-gradient(circle at 10% 90%, rgba(255,255,255,0.07), transparent 55%), linear-gradient(135deg, #1a1a1a, #000000)",
  },
  {
    slug: "lumenhaus",
    name: "Lumenhaus",
    type: "Web Development",
    year: "2024",
    client: "Lumenhaus",
    tagline: "",
    thumbnail: "",
    intro: "",
    background: "",
    approach: "",
    gallery: [],
    meta: [],
    cardBg:
      "radial-gradient(circle at 90% 90%, rgba(245,158,11,0.16), transparent 55%), linear-gradient(135deg, #1a1410, #0f0a05)",
  },
  {
    slug: "drift-bloom",
    name: "Drift Bloom",
    type: "Branding Design",
    year: "2024",
    client: "Drift Bloom",
    tagline: "",
    thumbnail: "",
    cardLight: true,
    intro: "",
    background: "",
    approach: "",
    gallery: [],
    meta: [],
    cardBg: "linear-gradient(135deg, #ccff00, #b3e600)",
  },
  {
    slug: "krane-supply",
    name: "Krane Supply",
    type: "Brand System",
    year: "2024",
    client: "Krane Supply",
    tagline: "",
    thumbnail: "",
    intro: "",
    background: "",
    approach: "",
    gallery: [],
    meta: [],
    cardBg:
      "radial-gradient(circle at 10% 10%, rgba(34,211,238,0.14), transparent 55%), linear-gradient(135deg, #101a1f, #050a0d)",
  },
  {
    slug: "auris",
    name: "Auris",
    type: "Identity + Web",
    year: "2024",
    client: "Auris",
    tagline: "",
    thumbnail: "",
    featured: true,
    intro: "",
    background: "",
    approach: "",
    gallery: [],
    meta: [],
    cardBg:
      "radial-gradient(circle at 75% 25%, rgba(244,63,94,0.16), transparent 55%), linear-gradient(135deg, #1f1414, #0d0808)",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
