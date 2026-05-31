"use client";

import { motion } from "framer-motion";

const stackItems = [
  { icon: "▲", name: "Next.js", desc: "App router, SSR, and edge functions for fast, SEO-optimised delivery across all products.", bg: "rgba(255,255,255,0.05)", border: "var(--border)", color: "var(--text)" },
  { icon: "◎", name: "TailwindCSS", desc: "Utility-first styling powering the shared design token layer across the ecosystem.", bg: "rgba(45,212,191,0.1)", border: "rgba(45,212,191,0.2)", color: "var(--teal)" },
  { icon: "◆", name: "Framer Motion", desc: "Cinematic animations, scroll-driven effects, and layout transitions throughout every UI.", bg: "rgba(249,113,104,0.1)", border: "rgba(249,113,104,0.2)", color: "var(--coral)" },
  { icon: "⚡", name: "Supabase", desc: "Postgres, realtime subscriptions, and auth — the shared data backbone for all products.", bg: "rgba(123,110,246,0.1)", border: "rgba(123,110,246,0.2)", color: "var(--accent2)" },
  { icon: "◈", name: "AI APIs", desc: "OpenAI, Replicate, and custom fine-tuned models for graphic generation, video editing, and smart assessment.", bg: "rgba(232,185,79,0.1)", border: "rgba(232,185,79,0.2)", color: "var(--gold)" },
  { icon: "✦", name: "Cloudinary", desc: "Global media storage, on-the-fly transforms, and video pipeline for the Studio product.", bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.2)", color: "var(--green)" },
  { icon: "⬡", name: "Node.js", desc: "Event-driven backend services, webhook handlers, and scheduled jobs across the ecosystem.", bg: "rgba(255,255,255,0.05)", border: "var(--border)", color: "var(--muted)" },
  { icon: "☁", name: "Edge / CDN", desc: "Vercel Edge Network for sub-100ms global delivery, ISR, and seamless preview environments.", bg: "rgba(45,212,191,0.1)", border: "rgba(45,212,191,0.2)", color: "var(--teal)" },
];

export default function LiveAndStack() {
  return (
    <>
      {/* LIVE EXPERIENCE */}
      <section id="vision" style={{ padding: "120px 48px", background: "var(--bg2)" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "16px" }}>
            Live Experience
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Everything running. Right now.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "480px", margin: "16px auto 0", lineHeight: 1.7, fontWeight: 300 }}>
            Real-time tournaments, AI-generated posters, and active exam sessions — the ecosystem is always on.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "20px", maxWidth: "1100px", margin: "0 auto" }}>
          {/* Fixtures */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600 }}>Sportified — Live Fixtures</span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px", fontWeight: 500, color: "var(--coral)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--coral)", display: "inline-block", animation: "blink 1s ease-in-out infinite" }} />
                Live
              </span>
            </div>
            <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
            {[
              { home: "FC Horizon", away: "Atlas United", score: "2 – 1", status: "Live 68'", live: true },
              { home: "Storm XI", away: "Delta FC", score: "0 – 0", status: "Live 41'", live: true },
              { home: "Vortex SC", away: "Iron City", score: "3 – 2", status: "FT", live: false },
              { home: "Zenith FC", away: "Nova Stars", score: "1 – 1", status: "FT", live: false },
            ].map((m) => (
              <div key={m.home} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, width: "110px" }}>{m.home}</span>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700 }}>{m.score}</span>
                  <div>
                    <span style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "99px", color: m.live ? "var(--coral)" : "var(--muted)", background: m.live ? "rgba(249,113,104,0.1)" : "rgba(255,255,255,0.04)", border: `1px solid ${m.live ? "rgba(249,113,104,0.2)" : "var(--border)"}` }}>
                      {m.live ? `● ${m.status}` : m.status}
                    </span>
                  </div>
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, width: "110px", textAlign: "right" }}>{m.away}</span>
              </div>
            ))}
          </motion.div>

          {/* AI Studio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600 }}>Studio — AI Generator</span>
              <span style={{ fontSize: "11px", color: "var(--accent2)", fontWeight: 500 }}>✦ AI</span>
            </div>
            <div
              style={{
                flex: 1,
                background: "linear-gradient(135deg, #0d0a1a, #1a0d2d, #0d1a2d)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "28px",
                minHeight: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", width: "120px", height: "120px", background: "radial-gradient(circle, rgba(123,110,246,0.4) 0%, transparent 70%)", top: "-20px", right: "-20px" }} />
              <div
                style={{
                  width: "120px",
                  height: "160px",
                  background: "linear-gradient(135deg, #1a0d2d, #2d0a1f, #0d1a2d)",
                  borderRadius: "10px",
                  border: "1px solid rgba(123,110,246,0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>Match Day Finals</div>
                <div style={{ width: "60%", height: "2px", background: "linear-gradient(90deg, var(--accent), var(--teal))", borderRadius: "99px" }} />
                <div style={{ fontSize: "9px", color: "var(--accent2)", letterSpacing: "0.08em" }}>FC Horizon vs Atlas</div>
              </div>
            </div>
            <div style={{ padding: "16px 20px" }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                {["Match poster", "Sports flyer", "Player card"].map((c) => (
                  <span key={c} style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "99px", background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--muted)" }}>{c}</span>
                ))}
              </div>
              <button
                style={{
                  width: "100%",
                  padding: "11px",
                  background: "linear-gradient(135deg, var(--accent), rgba(45,212,191,0.6))",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                  fontFamily: "var(--font-body)",
                }}
              >
                ✦ Generate with AI
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" style={{ padding: "120px 48px", background: "var(--bg)" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "16px" }}>
            Tech Stack
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Modern, scalable, AI-native.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "480px", margin: "16px auto 0", lineHeight: 1.7, fontWeight: 300 }}>
            Built on the most capable open-source and cloud primitives — designed to scale from MVP to millions.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", maxWidth: "1100px", margin: "0 auto" }}>
          {stackItems.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px",
                transition: "border-color 0.2s",
              }}
              onHoverStart={(e) => { (e.target as HTMLElement).style.borderColor = "var(--border2)"; }}
              onHoverEnd={(e) => { (e.target as HTMLElement).style.borderColor = "var(--border)"; }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", marginBottom: "12px", background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
                {s.icon}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, marginBottom: "6px" }}>{s.name}</div>
              <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, letterSpacing: "0.12em", background: "linear-gradient(135deg, #fff, var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            STARPRINZ
          </div>
          <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>Powering the next generation of digital experiences.</div>
        </div>
        <ul style={{ display: "flex", gap: "28px", listStyle: "none" }}>
          {["Sportified", "Studio", "CBT", "Careers"].map((l) => (
            <li key={l}>
              <a href="#" style={{ fontSize: "13px", color: "var(--muted)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >{l}</a>
            </li>
          ))}
        </ul>
        <div style={{ fontSize: "12px", color: "var(--muted2)" }}>© 2025 Starprinz. All rights reserved.</div>
      </footer>
    </>
  );
}
