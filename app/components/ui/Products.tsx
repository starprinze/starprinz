"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    slug: "sportified",
    category: "Sports & Events",
    name: "Sportified",
    desc: "A complete tournament operating system — from fixture generation and live standings to team profiles, match schedules, and event media management.",
    color: "var(--teal)",
    colorDim: "rgba(45,212,191,0.12)",
    colorBorder: "rgba(45,212,191,0.25)",
    icon: "⚡",
    bg: "linear-gradient(135deg, #0a1a1a 0%, #0d2d2d 50%, #0a1f1f 100%)",
    bars: ["80%", "55%", "92%"],
    barColor: "linear-gradient(90deg, var(--teal), rgba(45,212,191,0.4))",
    glowColor: "rgba(45,212,191,0.06)",
  },
  {
    slug: "studio",
    category: "AI Creative Suite",
    name: "Studio",
    desc: "AI graphic generator, cinematic video builder, and creator workspace. Turn prompts into broadcast-quality sports posters, reels, and brand kits instantly.",
    color: "var(--accent2)",
    colorDim: "rgba(123,110,246,0.12)",
    colorBorder: "rgba(123,110,246,0.25)",
    icon: "✦",
    bg: "linear-gradient(135deg, #0d0a1a 0%, #1a0d2d 50%, #0d0a20 100%)",
    bars: ["65%", "90%", "45%"],
    barColor: "linear-gradient(90deg, var(--accent), rgba(167,139,250,0.4))",
    glowColor: "rgba(123,110,246,0.08)",
  },
  {
    slug: "cbt",
    category: "Education Tech",
    name: "CBT Exam",
    desc: "A digital assessment platform for institutions — online exams, practice tests, school dashboards, automated result systems, and deep student analytics.",
    color: "var(--gold)",
    colorDim: "rgba(232,185,79,0.12)",
    colorBorder: "rgba(232,185,79,0.25)",
    icon: "◈",
    bg: "linear-gradient(135deg, #1a160a 0%, #2d2308 50%, #1a1a0a 100%)",
    bars: ["70%", "40%", "85%"],
    barColor: "linear-gradient(90deg, var(--gold), rgba(232,185,79,0.4))",
    glowColor: "rgba(232,185,79,0.06)",
  },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: "120px 48px", background: "var(--bg2)" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "16px" }}>
          Products
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Three systems. One ecosystem.
        </h2>
        <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "520px", margin: "16px auto 0", lineHeight: 1.7, fontWeight: 300 }}>
          Independent, enterprise-grade products — each built to scale, all powered by the Starprinz AI infrastructure.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {products.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
            onHoverStart={(e) => {
              (e.target as HTMLElement).style.borderColor = "var(--border2)";
            }}
            onHoverEnd={(e) => {
              (e.target as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            {/* Preview */}
            <div
              style={{
                height: "180px",
                background: p.bg,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse at 50% 0%, ${p.glowColor} 0%, transparent 70%)`,
                }}
              />
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  background: p.colorDim,
                  border: `1px solid ${p.colorBorder}`,
                  color: p.color,
                  zIndex: 1,
                }}
              >
                {p.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "70%", zIndex: 1 }}>
                {p.bars.map((w, j) => (
                  <div key={j} style={{ height: "6px", borderRadius: "99px", background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                    <div style={{ width: w, height: "100%", background: p.barColor, borderRadius: "99px" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "24px" }}>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "99px",
                  display: "inline-block",
                  marginBottom: "12px",
                  color: p.color,
                  background: p.colorDim,
                  border: `1px solid ${p.colorBorder}`,
                }}
              >
                {p.category}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "10px",
                }}
              >
                {p.name}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65, marginBottom: "20px" }}>
                {p.desc}
              </p>
              <Link
                href={`/${p.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "9px 18px",
                  borderRadius: "8px",
                  border: "1px solid var(--border2)",
                  color: "var(--text)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = p.color;
                  (e.currentTarget as HTMLElement).style.color = p.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text)";
                }}
              >
                Open Product →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
