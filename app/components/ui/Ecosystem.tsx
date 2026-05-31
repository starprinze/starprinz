"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚙",
    title: "Shared AI Infrastructure",
    desc: "One AI backbone powering graphic generation, video editing, fixture logic, and exam intelligence — shared across all products.",
    colorDim: "rgba(123,110,246,0.12)",
    colorBorder: "rgba(123,110,246,0.25)",
    color: "var(--accent2)",
  },
  {
    icon: "◎",
    title: "Unified Design System",
    desc: "Every product speaks the same visual language — tokens, components, and interaction patterns that evolve together.",
    colorDim: "rgba(45,212,191,0.12)",
    colorBorder: "rgba(45,212,191,0.25)",
    color: "var(--teal)",
  },
  {
    icon: "◈",
    title: "Future-Ready Architecture",
    desc: "Built to expand. New products can join the ecosystem without rebuilding — they plug into existing auth, media, and analytics layers.",
    colorDim: "rgba(232,185,79,0.12)",
    colorBorder: "rgba(232,185,79,0.25)",
    color: "var(--gold)",
  },
  {
    icon: "◆",
    title: "Clean Product Separation",
    desc: "Each product is independently deployable, scalable, and saleable — no tight coupling, no shared database dependencies.",
    colorDim: "rgba(249,113,104,0.12)",
    colorBorder: "rgba(249,113,104,0.25)",
    color: "var(--coral)",
  },
];

const ecoProducts = [
  { name: "Sportified", tag: "Tournament OS", dot: "var(--teal)", status: "Live" },
  { name: "Studio", tag: "AI Creative Suite", dot: "var(--accent)", status: "Live" },
  { name: "CBT Exam", tag: "Assessment Platform", dot: "var(--gold)", status: "Live" },
  { name: "Next Product", tag: "Coming Soon", dot: "rgba(255,255,255,0.2)", status: "Soon", muted: true },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" style={{ padding: "120px 48px", background: "var(--bg)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "16px" }}>
              Ecosystem Vision
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Built as infrastructure,<br />not features.
            </h2>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>
              Starprinz operates as a shared AI layer underneath — each product runs independently, but inherits a common design language, auth philosophy, and AI backbone.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "40px" }}>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  padding: "20px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  transition: "border-color 0.2s",
                }}
                whileHover={{ borderColor: "var(--border2)" } as never}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    flexShrink: 0,
                    background: f.colorDim,
                    border: `1px solid ${f.colorBorder}`,
                    color: f.color,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, marginBottom: "6px" }}>
                    {f.title}
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: "sticky", top: "100px" }}
        >
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            {/* Center badge */}
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(123,110,246,0.2), rgba(45,212,191,0.1))",
                  border: "1px solid rgba(123,110,246,0.3)",
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  marginBottom: "12px",
                }}
              >
                SP
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700 }}>STARPRINZ</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>Parent Ecosystem · AI Infrastructure</div>
            </div>

            <hr style={{ border: "none", borderTop: "1px dashed rgba(255,255,255,0.1)", marginBottom: "24px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {ecoProducts.map((ep) => (
                <div
                  key={ep.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    opacity: ep.muted ? 0.4 : 1,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: ep.dot }} />
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600 }}>{ep.name}</div>
                      <div style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{ep.tag}</div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      padding: "3px 9px",
                      borderRadius: "99px",
                      color: ep.muted ? "var(--muted)" : "var(--green)",
                      background: ep.muted ? "var(--surface2)" : "rgba(74,222,128,0.1)",
                      border: ep.muted ? "1px solid var(--border)" : "1px solid rgba(74,222,128,0.2)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {ep.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
