import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rift = localFont({
  src: [
    { path: "./fonts/Rift-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "./fonts/Rift-Bold.otf",        weight: "700", style: "normal" },
    { path: "./fonts/Rift-Demi.otf",        weight: "600", style: "normal" },
    { path: "./fonts/Rift-DemiItalic.otf",  weight: "600", style: "italic" },
    { path: "./fonts/Rift-Medium.otf",      weight: "500", style: "normal" },
    { path: "./fonts/Rift-Regular.otf",     weight: "400", style: "normal" },
  ],
  variable: "--font-rift",
  display: "swap",
});

const bahnschrift = localFont({
  src: "./fonts/Bahnschrift.ttf",
  variable: "--font-bahnschrift",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNTITLD — Brand Identity & Website Design",
  description:
    "A design studio building brand identities and digital presences for companies that intend to lead.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rift.variable} ${bahnschrift.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
