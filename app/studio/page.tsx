"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const modules = [
  { id: "graphics", label: "AI Graphics", icon: "✦" },
  { id: "video", label: "Video Builder", icon: "◆" },
  { id: "workspace", label: "Creator Workspace", icon: "⊟" },
];

const posterTypes = ["Sports Poster", "Match Graphic", "Event Flyer", "Player Card", "Team Brand Kit", "Tournament Banner"];

export default function StudioPage() {
  const [activeModule, setActiveModule] = useState("graphics");
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}} @keyframes shimmer{0%,100%{opacity:.4}50%{opacity:.9}}`}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: "60px", background: "rgba(6,6,8,0.9)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontSize: "13px", color: "var(--muted)", textDecoration: "none" }}>← STARPRINZ</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent2)", boxShadow: "0 0 8px var(--accent)" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, letterSpacing: "0.05em" }}>STUDIO</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ padding: "7px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 500, cursor: "pointer", background: "transparent", border: "1px solid var(--border2)", color: "var(--muted)", fontFamily: "var(--font-body)" }}>Sign In</button>
          <button style={{ padding: "7px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, cursor: "pointer", background: "var(--accent)", border: "none", color: "#fff", fontFamily: "var(--font-body)" }}>Start Creating</button>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#0d0a1a 0%,#1a0d2d 50%,#0d0a20 100%)", borderBottom: "1px solid var(--border)", padding: "56px 40px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "600px", height: "400px", background: "radial-gradient(ellipse,rgba(123,110,246,0.15) 0%,transparent 70%)", top: "-100px", right: "-100px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "12px" }}>AI Creative Production Suite</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,5vw,58px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.06, marginBottom: "14px" }}>
            Create anything.<br />
            <span style={{ background: "linear-gradient(135deg, var(--accent2), var(--teal))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Powered by AI.</span>
          </h1>
          <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "520px", lineHeight: 1.7, fontWeight: 300 }}>
            From prompt to broadcast-quality poster in seconds. Generate graphics, build cinematic videos, and manage your creative workflow — all in one place.
          </p>
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "0 40px", display: "flex", gap: "4px" }}>
        {modules.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveModule(m.id)}
            style={{
              padding: "16px 24px",
              background: "transparent",
              border: "none",
              borderBottom: `2px solid ${activeModule === m.id ? "var(--accent)" : "transparent"}`,
              color: activeModule === m.id ? "var(--text)" : "var(--muted)",
              fontSize: "13px",
              fontWeight: activeModule === m.id ? 500 : 400,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.2s",
              fontFamily: "var(--font-body)",
            }}
          >
            <span>{m.icon}</span> {m.label}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div style={{ padding: "32px 40px", maxWidth: "1200px" }}>
        {activeModule === "graphics" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "24px" }}>
              {/* Prompt panel */}
              <div>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "24px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>✦ AI Graphic Generator</div>

                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "12px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Prompt</label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="A dramatic football match poster with FC Horizon vs Atlas United, dark cinematic style, electric blue tones..."
                      style={{ width: "100%", height: "100px", background: "var(--surface2)", border: "1px solid var(--border2)", borderRadius: "10px", padding: "12px", color: "var(--text)", fontSize: "13px", resize: "none", outline: "none", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
                    />
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "12px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Output Type</label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {posterTypes.map((t, i) => (
                        <button key={t} style={{ fontSize: "11px", padding: "5px 12px", borderRadius: "99px", background: i === 0 ? "rgba(123,110,246,0.2)" : "var(--surface2)", border: `1px solid ${i === 0 ? "rgba(123,110,246,0.4)" : "var(--border)"}`, color: i === 0 ? "var(--accent2)" : "var(--muted)", cursor: "pointer", fontFamily: "var(--font-body)" }}>{t}</button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                    <div>
                      <label style={{ fontSize: "12px", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Style</label>
                      <select style={{ width: "100%", background: "var(--surface2)", border: "1px solid var(--border2)", borderRadius: "8px", padding: "8px 12px", color: "var(--text)", fontSize: "13px", fontFamily: "var(--font-body)", outline: "none" }}>
                        <option>Cinematic Dark</option>
                        <option>Bold & Vibrant</option>
                        <option>Minimal Clean</option>
                        <option>Retro Futuristic</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: "12px", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Format</label>
                      <select style={{ width: "100%", background: "var(--surface2)", border: "1px solid var(--border2)", borderRadius: "8px", padding: "8px 12px", color: "var(--text)", fontSize: "13px", fontFamily: "var(--font-body)", outline: "none" }}>
                        <option>Portrait 4:5</option>
                        <option>Square 1:1</option>
                        <option>Landscape 16:9</option>
                        <option>Story 9:16</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    style={{ width: "100%", padding: "13px", background: generating ? "rgba(123,110,246,0.5)" : "linear-gradient(135deg, var(--accent), var(--accent2))", border: "none", borderRadius: "10px", color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer", letterSpacing: "0.03em", fontFamily: "var(--font-body)", transition: "all 0.2s" }}
                  >
                    {generating ? "✦ Generating..." : "✦ Generate Graphic"}
                  </button>
                </div>

                {/* Brand kits */}
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "20px", marginTop: "16px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, marginBottom: "14px" }}>Team Brand Kits</div>
                  {["FC Horizon", "Atlas United", "Storm XI"].map((team, i) => (
                    <div key={team} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: ["rgba(45,212,191,0.15)", "rgba(232,185,79,0.15)", "rgba(167,139,250,0.15)"][i], border: `1px solid ${["rgba(45,212,191,0.3)", "rgba(232,185,79,0.3)", "rgba(167,139,250,0.3)"][i]}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: ["var(--teal)", "var(--gold)", "var(--accent2)"][i] }}>
                          {team.split(" ").map(w => w[0]).join("")}
                        </div>
                        <span style={{ fontSize: "13px" }}>{team}</span>
                      </div>
                      <button style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--muted)", cursor: "pointer", fontFamily: "var(--font-body)" }}>Use Kit</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview panel */}
              <div>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600 }}>Preview</span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {["↓ Export", "⊕ Edit"].map((btn) => (
                        <button key={btn} style={{ fontSize: "11px", padding: "5px 12px", borderRadius: "6px", background: "var(--surface2)", border: "1px solid var(--border2)", color: "var(--muted)", cursor: "pointer", fontFamily: "var(--font-body)" }}>{btn}</button>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: "linear-gradient(135deg, #0d0a1a, #2d0a1f, #0d1a2d)", minHeight: "420px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(123,110,246,0.4) 0%, transparent 70%)", top: "-40px", right: "-40px" }} />
                    <div style={{ position: "absolute", width: "150px", height: "150px", background: "radial-gradient(circle, rgba(45,212,191,0.2) 0%, transparent 70%)", bottom: "-20px", left: "40px" }} />

                    <div style={{ textAlign: "center", zIndex: 1, padding: "40px" }}>
                      {generating ? (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                          <div style={{ width: "40px", height: "40px", border: "2px solid rgba(123,110,246,0.3)", borderTop: "2px solid var(--accent)", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                          <span style={{ fontSize: "13px", color: "var(--muted)", animation: "shimmer 1.5s ease-in-out infinite" }}>Generating your graphic...</span>
                        </div>
                      ) : (
                        <>
                          <div style={{ fontSize: "12px", color: "var(--accent2)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>Grand Final</div>
                          <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, lineHeight: 1.1, marginBottom: "12px" }}>
                            FC Horizon<br />
                            <span style={{ fontSize: "16px", color: "var(--muted2)", fontWeight: 400 }}>vs</span><br />
                            Atlas United
                          </div>
                          <div style={{ width: "80px", height: "2px", background: "linear-gradient(90deg, var(--accent), var(--teal))", borderRadius: "99px", margin: "16px auto" }} />
                          <div style={{ fontSize: "13px", color: "var(--muted)", letterSpacing: "0.08em" }}>Saturday · 18:00 · Arena Stadium</div>
                          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "16px" }}>
                            {["STARPRINZ", "SPORTIFIED"].map((b) => (
                              <span key={b} style={{ fontSize: "9px", letterSpacing: "0.15em", color: "var(--muted2)", textTransform: "uppercase" }}>{b}</span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: "14px 20px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", color: "var(--muted)" }}>Portrait · 1080×1350px</span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {["PNG", "JPG", "WebP"].map((fmt) => (
                        <span key={fmt} style={{ fontSize: "10px", padding: "3px 8px", borderRadius: "99px", background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--muted)", cursor: "pointer" }}>{fmt}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
                  {["#0d1a2d", "#1a0d2d", "#0a1a1a", "#2d2308"].map((bg, i) => (
                    <div key={i} style={{ aspectRatio: "4/5", background: `linear-gradient(135deg, ${bg}, rgba(0,0,0,0.8))`, borderRadius: "8px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "10px", color: "var(--muted2)" }}>
                      Recent {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeModule !== "graphics" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>{modules.find(m => m.id === activeModule)?.icon}</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, marginBottom: "10px" }}>
              {modules.find(m => m.id === activeModule)?.label}
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)" }}>Coming soon — this module is under active development.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
