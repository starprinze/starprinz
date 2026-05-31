import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STARPRINZ — Powering the next generation of digital experiences",
  description:
    "Starprinz is an AI-powered ecosystem building intelligent systems for creators, sports organisations, and education.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
