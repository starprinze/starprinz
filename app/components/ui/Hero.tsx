"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" as const } },
});

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(123,110,246,0.35) 0%, transparent 70%)", top: "-200px", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)", animation: "pulseOrb 7s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(45,212,191,0.18) 0%, transparent 70%)", bottom: "0", left: "-100px", filter: "blur(80px)", animation: "pulseOrb 6s 2s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,185,79,0.12) 0%, transparent 70%)", bottom: "100px", right: "-80px", filter: "blur(80px)", animation: "pulseOrb 8s 4s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)" }} />
      </div>

      <style>{`
        @keyframes pulseOrb { 0%,100%{opacity:.45;transform:scale(1)} 50%{opacity:.65;transform:scale(1.06)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
      `}</style>

      {/* Badge */}
      <motion.div {...fadeUp(0)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", border: "1px solid rgba(123,110,246,0.3)", borderRadius: "100px", fontSize: "12px", fontWeight: 500, color: "var(--accent2)", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "32px", background: "rgba(123,110,246,0.08)", position: "relative", zIndex: 1 }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent2)", display: "inline-block", animation: "blink 2s ease-in-out infinite" }} />
        AI-Powered Digital Ecosystem — Now Live
      </motion.div>

      {/* Headline */}
      <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px, 6vw, 88px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.025em", position: "relative", zIndex: 1, maxWidth: "960px" }}>
        <span style={{ background: "linear-gradient(135deg, #fff 30%, var(--accent2) 65%, var(--teal) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Powering the next generation
        </span>
        <br />of digital experiences.
      </motion.h1>

      {/* Sub */}
      <motion.p {...fadeUp(0.2)} style={{ fontSize: "18px", fontWeight: 300, color: "var(--muted)", maxWidth: "580px", margin: "28px auto 0", lineHeight: 1.75, position: "relative", zIndex: 1 }}>
        Starprinz is an AI-native ecosystem building intelligent systems for creators, sports organisations, and education — all connected by one powerful infrastructure.
      </motion.p>

      {/* CTA */}
      <motion.div {...fadeUp(0.3)} style={{ display: "flex", gap: "16px", marginTop: "48px", position: "relative", zIndex: 1 }}>
        <button
          style={{ padding: "14px 32px", background: "var(--accent)", color: "#fff", fontSize: "14px", fontWeight: 500, borderRadius: "10px", border: "none", cursor: "pointer", letterSpacing: "0.03em", boxShadow: "0 0 40px rgba(123,110,246,0.35)", transition: "all 0.2s", fontFamily: "var(--font-body)" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(123,110,246,0.55)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(123,110,246,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
        >
          Explore Ecosystem
        </button>
        <button
          style={{ padding: "14px 32px", background: "transparent", color: "var(--text)", fontSize: "14px", fontWeight: 500, borderRadius: "10px", border: "1px solid var(--border2)", cursor: "pointer", letterSpacing: "0.03em", transition: "all 0.2s", fontFamily: "var(--font-body)" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent2)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
        >
          View Products →
        </button>
      </motion.div>

      {/* Dashboard preview */}
      <motion.div {...fadeUp(0.45)} style={{ position: "relative", zIndex: 1, marginTop: "80px", width: "100%", maxWidth: "900px" }}>
        <div style={{ background: "var(--bg2)", border: "1px solid var(--border2)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 0 80px rgba(123,110,246,0.12), 0 0 200px rgba(123,110,246,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
            {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />)}
            <span style={{ fontSize: "12px", color: "var(--muted)", marginLeft: "8px" }}>starprinz.com — Ecosystem Overview</span>
          </div>
          <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}>
            {[
              { label: "Active Tournaments", value: "128", sub: "↑ 24 this week", pct: "72%" },
              { label: "AI Designs Generated", value: "9,410", sub: "↑ 1.2k today", pct: "88%" },
              { label: "Exam Sessions", value: "3,204", sub: "↑ 340 today", pct: "55%" },
            ].map(s => (
              <div key={s.label} style={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "14px" }}>
                <div style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "8px" }}>{s.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: "11px", color: "var(--green)", marginTop: "4px" }}>{s.sub}</div>
                <div style={{ marginTop: "10px", height: "4px", borderRadius: "99px", background: "var(--border)", overflow: "hidden" }}>
                  <div style={{ width: s.pct, height: "100%", background: "linear-gradient(90deg, var(--accent), var(--teal))", borderRadius: "99px" }} />
                </div>
              </div>
            ))}
            <div style={{ gridColumn: "1 / 4", background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "14px" }}>
              <div style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "8px" }}>Active Products</div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                {["Sportified","Studio — AI Graphics","Studio — Video Builder","CBT Exam","+ More coming"].map((t, i) => (
                  <span key={t} style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "99px", background: "rgba(123,110,246,0.12)", color: "var(--accent2)", border: "1px solid rgba(123,110,246,0.2)", opacity: i === 4 ? 0.5 : 1 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
