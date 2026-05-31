"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "Live Matches", value: "6", sub: "● Broadcasting now", pct: "60%", color: "var(--coral)" },
  { label: "Teams Active", value: "248", sub: "↑ 14 this week", pct: "78%", color: "var(--text)" },
  { label: "Goals This Week", value: "317", sub: "↑ 42 from last", pct: "65%", color: "var(--text)" },
  { label: "Completion Rate", value: "94%", sub: "↑ 3% vs last month", pct: "94%", color: "var(--text)" },
];

const fixtures = [
  { home: "FC Horizon", homeCode: "FH", away: "Atlas United", awayCode: "AU", score: "2 – 1", status: "Live 68'", live: true },
  { home: "Storm XI", homeCode: "SX", away: "Delta FC", awayCode: "DF", score: "0 – 0", status: "Live 41'", live: true },
  { home: "Vortex SC", homeCode: "VS", away: "Iron City", awayCode: "IC", score: "3 – 2", status: "FT", live: false },
  { home: "Zenith FC", homeCode: "ZF", away: "Nova Stars", awayCode: "NS", score: "1 – 1", status: "FT", live: false },
  { home: "Pinnacle", homeCode: "PR", away: "Blaze Rovers", awayCode: "BR", score: "vs", status: "18:00", live: false, upcoming: true },
];

const standings = [
  { rank: 1, code: "FH", name: "FC Horizon", pts: 34, gd: "+12", form: ["W","W","D","W","W"] },
  { rank: 2, code: "AU", name: "Atlas United", pts: 29, gd: "+7", form: ["W","L","W","W","D"] },
  { rank: 3, code: "SX", name: "Storm XI", pts: 26, gd: "+4", form: ["D","W","W","L","W"] },
  { rank: 4, code: "VS", name: "Vortex SC", pts: 22, gd: "-2", form: ["W","D","L","D","W"] },
];

const features = [
  { icon: "⊞", name: "Auto Fixtures", desc: "Round-robin, knockout, and group stage formats generated in seconds.", color: "var(--teal)", bg: "rgba(45,212,191,0.12)", border: "rgba(45,212,191,0.25)" },
  { icon: "◉", name: "Team Profiles", desc: "Rich pages per team — roster, stats, form, media, and history.", color: "var(--accent2)", bg: "rgba(123,110,246,0.12)", border: "rgba(123,110,246,0.25)" },
  { icon: "▣", name: "Event Gallery", desc: "Auto-tagged media uploads with AI-generated event recaps.", color: "var(--gold)", bg: "rgba(232,185,79,0.12)", border: "rgba(232,185,79,0.25)" },
  { icon: "◈", name: "Live Scores", desc: "Realtime match updates, live leaderboards, and public shareable links.", color: "var(--coral)", bg: "rgba(249,113,104,0.12)", border: "rgba(249,113,104,0.25)" },
];

const navItems = [
  { icon: "⊟", label: "Dashboard", active: true },
  { icon: "⊠", label: "Tournaments", badge: "12" },
  { icon: "◫", label: "Fixtures" },
  { icon: "▦", label: "Standings" },
  { icon: "◉", label: "Teams" },
  { icon: "◎", label: "Players" },
  { icon: "▲", label: "Leaderboards" },
  { icon: "▣", label: "Media Gallery" },
  { icon: "✦", label: "Predictions" },
  { icon: "⚙", label: "Settings" },
];

export default function SportifiedPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}`}</style>

      {/* Top Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: "60px", background: "rgba(6,6,8,0.9)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontSize: "13px", color: "var(--muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
          ← STARPRINZ
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--teal)", boxShadow: "0 0 8px var(--teal)" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, letterSpacing: "0.05em" }}>SPORTIFIED</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ padding: "7px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 500, cursor: "pointer", background: "transparent", border: "1px solid var(--border2)", color: "var(--muted)", fontFamily: "var(--font-body)" }}>Sign In</button>
          <button style={{ padding: "7px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, cursor: "pointer", background: "var(--teal)", border: "none", color: "#04342C", fontFamily: "var(--font-body)" }}>Create Tournament</button>
        </div>
      </nav>

      {/* Hero Band */}
      <div style={{ background: "linear-gradient(135deg,#050e0e 0%,#081a1a 50%,#060e10 100%)", borderBottom: "1px solid var(--border)", padding: "56px 40px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "500px", height: "300px", background: "radial-gradient(ellipse,rgba(45,212,191,0.12) 0%,transparent 70%)", top: "-60px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "12px" }}>Tournament & Event Operating System</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,5vw,58px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.06, marginBottom: "14px" }}>
            Run every competition.<br />Own every moment.
          </h1>
          <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "500px", lineHeight: 1.7, fontWeight: 300, marginBottom: "28px" }}>
            From fixture generation to live standings, team profiles, and event media — Sportified is the complete operating system for modern sport.
          </p>
          <div style={{ display: "flex", gap: "40px" }}>
            {[["128", "Active Tournaments"], ["4,210", "Teams Registered"], ["892", "Matches Played"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, color: "var(--teal)" }}>{v}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "2px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr" }}>
        {/* Sidebar */}
        <aside style={{ background: "var(--bg2)", borderRight: "1px solid var(--border)", padding: "20px 0", minHeight: "calc(100vh - 60px - 200px)" }}>
          {[
            { label: "Main", items: navItems.slice(0, 4) },
            { label: "Teams", items: navItems.slice(4, 7) },
            { label: "Event", items: navItems.slice(7) },
          ].map((section) => (
            <div key={section.label} style={{ padding: "0 16px", marginBottom: "24px" }}>
              <div style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted2)", padding: "0 8px", marginBottom: "8px" }}>{section.label}</div>
              {section.items.map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "8px", fontSize: "13px", color: item.active ? "var(--teal)" : "var(--muted)", cursor: "pointer", marginBottom: "2px", background: item.active ? "rgba(45,212,191,0.1)" : "transparent", border: item.active ? "1px solid rgba(45,212,191,0.25)" : "1px solid transparent" }}>
                  <span style={{ fontSize: "15px" }}>{item.icon}</span>
                  {item.label}
                  {item.badge && (
                    <span style={{ marginLeft: "auto", fontSize: "10px", padding: "2px 7px", borderRadius: "99px", background: "rgba(45,212,191,0.12)", color: "var(--teal)", border: "1px solid rgba(45,212,191,0.25)" }}>{item.badge}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div style={{ padding: "28px 32px", background: "var(--bg)" }}>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginBottom: "24px" }}>
            {stats.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "18px 20px" }}>
                <div style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "10px" }}>{s.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: "11px", color: "var(--green)", marginTop: "6px" }}>{s.sub}</div>
                <div style={{ height: "3px", borderRadius: "99px", background: "var(--border)", marginTop: "12px" }}>
                  <div style={{ width: s.pct, height: "100%", background: "linear-gradient(90deg,var(--teal),rgba(45,212,191,.4))", borderRadius: "99px" }} />
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "16px", marginBottom: "16px" }}>
            {/* Fixtures table */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600 }}>Live Fixtures</span>
                <span style={{ fontSize: "12px", color: "var(--muted)", cursor: "pointer" }}>View all →</span>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Home", "Score", "Away", "Status"].map((h) => (
                      <th key={h} style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted2)", padding: "10px 20px", textAlign: h === "Score" ? "center" : "left", borderBottom: "1px solid var(--border)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fixtures.map((f) => (
                    <tr key={f.home} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "12px 20px", fontSize: "13px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "26px", height: "26px", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, fontFamily: "var(--font-display)", background: "rgba(45,212,191,0.12)", color: "var(--teal)", border: "1px solid rgba(45,212,191,0.2)" }}>{f.homeCode}</div>
                          {f.home}
                        </div>
                      </td>
                      <td style={{ padding: "12px 20px", textAlign: "center", fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: f.upcoming ? "var(--muted2)" : "var(--text)" }}>{f.score}</td>
                      <td style={{ padding: "12px 20px", fontSize: "13px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "26px", height: "26px", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, fontFamily: "var(--font-display)", background: "rgba(232,185,79,0.12)", color: "var(--gold)", border: "1px solid rgba(232,185,79,0.2)" }}>{f.awayCode}</div>
                          {f.away}
                        </div>
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <span style={{ fontSize: "10px", padding: "3px 8px", borderRadius: "99px", color: f.live ? "var(--coral)" : f.upcoming ? "var(--gold)" : "var(--muted)", background: f.live ? "rgba(249,113,104,0.1)" : f.upcoming ? "rgba(232,185,79,0.1)" : "rgba(255,255,255,0.04)", border: `1px solid ${f.live ? "rgba(249,113,104,0.2)" : f.upcoming ? "rgba(232,185,79,0.2)" : "var(--border)"}` }}>
                          {f.live ? `● ${f.status}` : f.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Standings */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600 }}>League Standings</span>
                  <span style={{ fontSize: "12px", color: "var(--muted)", cursor: "pointer" }}>Full table →</span>
                </div>
                {standings.map((s) => (
                  <div key={s.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 20px", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, width: "18px", textAlign: "center", color: s.rank === 1 ? "var(--gold)" : "var(--muted)" }}>{s.rank}</span>
                      <div style={{ width: "26px", height: "26px", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, background: "rgba(45,212,191,0.12)", color: "var(--teal)", border: "1px solid rgba(45,212,191,0.2)" }}>{s.code}</div>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 500 }}>{s.name}</div>
                        <div style={{ display: "flex", gap: "3px", marginTop: "3px" }}>
                          {s.form.map((f, i) => (
                            <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: f === "W" ? "var(--teal)" : f === "L" ? "var(--coral)" : "var(--muted2)" }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: s.rank === 1 ? "var(--teal)" : "var(--text)" }}>{s.pts}</div>
                      <div style={{ fontSize: "11px", color: s.gd.startsWith("+") ? "var(--green)" : "var(--coral)" }}>{s.gd} GD</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Prediction */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600 }}>AI Prediction</span>
                  <span style={{ fontSize: "11px", color: "var(--accent2)", fontWeight: 500 }}>✦ Powered by AI</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px" }}>
                  {[{ code: "FH", name: "FC Horizon", sub: "1st Place" }, { code: "AU", name: "Atlas United", sub: "2nd Place" }].map((team, i) => (
                    <div key={team.code} style={{ textAlign: i === 1 ? "right" : "left" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, background: i === 0 ? "rgba(45,212,191,0.15)" : "rgba(232,185,79,0.15)", color: i === 0 ? "var(--teal)" : "var(--gold)", border: `1px solid ${i === 0 ? "rgba(45,212,191,0.3)" : "rgba(232,185,79,0.3)"}`, margin: i === 1 ? "0 0 6px auto" : "0 auto 6px 0" }}>{team.code}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600 }}>{team.name}</div>
                      <div style={{ fontSize: "11px", color: "var(--muted)" }}>{team.sub}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "0 20px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--muted)", marginBottom: "6px" }}><span>64% Win</span><span>36% Win</span></div>
                  <div style={{ height: "6px", borderRadius: "99px", background: "var(--border)", overflow: "hidden" }}>
                    <div style={{ width: "64%", height: "100%", background: "linear-gradient(90deg, var(--teal), rgba(45,212,191,0.5))", borderRadius: "99px" }} />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", padding: "0 20px 16px" }}>
                  {[["Home Win", "1.55", "var(--teal)"], ["Draw", "3.20", "var(--text)"], ["Away Win", "4.80", "var(--text)"]].map(([label, val, color]) => (
                    <div key={label} style={{ flex: 1, textAlign: "center", background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: "8px", padding: "10px 0" }}>
                      <div style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, marginTop: "4px", color }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }}>
            {features.map((f) => (
              <motion.div key={f.name} whileHover={{ y: -3 }}
                style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", transition: "border-color .2s" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "12px", background: f.bg, border: `1px solid ${f.border}`, color: f.color }}>{f.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}>{f.name}</div>
                <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
