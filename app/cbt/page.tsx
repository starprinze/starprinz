"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const questions = [
  {
    id: 1,
    q: "Which data structure uses LIFO (Last In, First Out) order?",
    options: ["Queue", "Stack", "Linked List", "Binary Tree"],
    correct: 1,
  },
  {
    id: 2,
    q: "What is the time complexity of binary search?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    correct: 2,
  },
];

const students = [
  { name: "Amara Okafor", score: 92, grade: "A", status: "Completed" },
  { name: "Chidi Nwachukwu", score: 78, grade: "B", status: "Completed" },
  { name: "Zainab Musa", score: 85, grade: "A", status: "Completed" },
  { name: "Emeka Eze", score: 61, grade: "C", status: "In Progress" },
  { name: "Fatima Ibrahim", score: 0, grade: "—", status: "Pending" },
];

export default function CBTPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: "60px", background: "rgba(6,6,8,0.9)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontSize: "13px", color: "var(--muted)", textDecoration: "none" }}>← STARPRINZ</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, letterSpacing: "0.05em" }}>CBT EXAM</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ padding: "7px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 500, cursor: "pointer", background: "transparent", border: "1px solid var(--border2)", color: "var(--muted)", fontFamily: "var(--font-body)" }}>School Login</button>
          <button style={{ padding: "7px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, cursor: "pointer", background: "var(--gold)", border: "none", color: "#412402", fontFamily: "var(--font-body)" }}>Create Exam</button>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#1a160a 0%,#2d2308 50%,#1a1a0a 100%)", borderBottom: "1px solid var(--border)", padding: "56px 40px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "500px", height: "300px", background: "radial-gradient(ellipse,rgba(232,185,79,0.12) 0%,transparent 70%)", top: "-60px", right: "-60px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>Digital CBT & Assessment System</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,5vw,58px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.06, marginBottom: "14px" }}>
            Smarter exams.<br />Clearer outcomes.
          </h1>
          <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "500px", lineHeight: 1.7, fontWeight: 300, marginBottom: "28px" }}>
            Online exams, practice tests, school dashboards, result systems, and deep analytics — built for institutions that demand reliability.
          </p>
          <div style={{ display: "flex", gap: "40px" }}>
            {[["3,204", "Exam Sessions"], ["98", "Schools"], ["12,500", "Students"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, color: "var(--gold)" }}>{v}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "2px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View tabs */}
      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "0 40px", display: "flex", gap: "4px" }}>
        {[["dashboard", "⊟ Dashboard"], ["exam", "◈ Live Exam View"], ["results", "▦ Results"]].map(([id, label]) => (
          <button key={id} onClick={() => setActiveView(id)} style={{ padding: "16px 24px", background: "transparent", border: "none", borderBottom: `2px solid ${activeView === id ? "var(--gold)" : "transparent"}`, color: activeView === id ? "var(--text)" : "var(--muted)", fontSize: "13px", fontWeight: activeView === id ? 500 : 400, cursor: "pointer", fontFamily: "var(--font-body)", transition: "color 0.2s" }}>
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding: "32px 40px" }}>
        {activeView === "dashboard" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginBottom: "28px" }}>
              {[
                { label: "Active Exams", value: "8", sub: "● Running now", color: "var(--coral)" },
                { label: "Avg Score", value: "74%", sub: "↑ 3% this term", color: "var(--text)" },
                { label: "Pass Rate", value: "88%", sub: "↑ 5% vs last", color: "var(--green)" },
                { label: "Pending Review", value: "42", sub: "Submissions", color: "var(--gold)" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "18px 20px" }}>
                  <div style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "10px" }}>{s.label}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: "11px", color: "var(--green)", marginTop: "6px" }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Students table */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600 }}>Student Results — Data Structures Exam</span>
                <button style={{ fontSize: "12px", padding: "6px 14px", borderRadius: "7px", background: "rgba(232,185,79,0.12)", border: "1px solid rgba(232,185,79,0.25)", color: "var(--gold)", cursor: "pointer", fontFamily: "var(--font-body)" }}>↓ Export Results</button>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Student", "Score", "Grade", "Status", "Action"].map((h) => (
                      <th key={h} style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted2)", padding: "10px 20px", textAlign: "left", borderBottom: "1px solid var(--border)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.name} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "12px 20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(232,185,79,0.12)", border: "1px solid rgba(232,185,79,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "var(--gold)" }}>
                            {s.name.split(" ").map(w => w[0]).join("")}
                          </div>
                          <span style={{ fontSize: "13px", fontWeight: 500 }}>{s.name}</span>
                        </div>
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ flex: 1, height: "4px", borderRadius: "99px", background: "var(--border)", maxWidth: "80px", overflow: "hidden" }}>
                            <div style={{ width: `${s.score}%`, height: "100%", background: s.score >= 80 ? "var(--green)" : s.score >= 60 ? "var(--gold)" : "var(--coral)", borderRadius: "99px" }} />
                          </div>
                          <span style={{ fontSize: "13px", fontWeight: 600 }}>{s.score > 0 ? `${s.score}%` : "—"}</span>
                        </div>
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: s.grade === "A" ? "var(--green)" : s.grade === "B" ? "var(--teal)" : s.grade === "C" ? "var(--gold)" : "var(--muted)" }}>{s.grade}</span>
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <span style={{ fontSize: "11px", padding: "3px 9px", borderRadius: "99px", color: s.status === "Completed" ? "var(--green)" : s.status === "In Progress" ? "var(--gold)" : "var(--muted)", background: s.status === "Completed" ? "rgba(74,222,128,0.1)" : s.status === "In Progress" ? "rgba(232,185,79,0.1)" : "rgba(255,255,255,0.04)", border: `1px solid ${s.status === "Completed" ? "rgba(74,222,128,0.2)" : s.status === "In Progress" ? "rgba(232,185,79,0.2)" : "var(--border)"}` }}>{s.status}</span>
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <button style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--muted)", cursor: "pointer", fontFamily: "var(--font-body)" }}>View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeView === "exam" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} style={{ maxWidth: "760px", margin: "0 auto" }}>
            {/* Exam header */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "20px 28px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600 }}>Data Structures & Algorithms</div>
                <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>Question 1 of 30 · Section A</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "var(--gold)" }}>29:14</div>
                <div style={{ fontSize: "11px", color: "var(--muted)" }}>Time Remaining</div>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: "4px", background: "var(--border)", borderRadius: "99px", marginBottom: "28px", overflow: "hidden" }}>
              <div style={{ width: "3.3%", height: "100%", background: "linear-gradient(90deg, var(--gold), rgba(232,185,79,0.5))", borderRadius: "99px" }} />
            </div>

            {questions.slice(0, 1).map((q) => (
              <div key={q.id} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "28px", marginBottom: "20px" }}>
                <div style={{ fontSize: "11px", color: "var(--gold)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>Question {q.id}</div>
                <p style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.6, marginBottom: "24px" }}>{q.q}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      style={{
                        padding: "14px 18px",
                        background: selected === i ? "rgba(232,185,79,0.12)" : "var(--surface2)",
                        border: `1px solid ${selected === i ? "rgba(232,185,79,0.4)" : "var(--border)"}`,
                        borderRadius: "10px",
                        color: selected === i ? "var(--gold)" : "var(--text)",
                        fontSize: "14px",
                        textAlign: "left",
                        cursor: "pointer",
                        fontFamily: "var(--font-body)",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.15s",
                      }}
                    >
                      <div style={{ width: "22px", height: "22px", borderRadius: "50%", border: `2px solid ${selected === i ? "var(--gold)" : "var(--border2)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 600, color: selected === i ? "var(--gold)" : "var(--muted)", flexShrink: 0 }}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button style={{ padding: "12px 24px", background: "transparent", border: "1px solid var(--border2)", borderRadius: "10px", color: "var(--muted)", fontSize: "13px", cursor: "pointer", fontFamily: "var(--font-body)" }}>← Previous</button>
              <button style={{ padding: "12px 24px", background: "var(--gold)", border: "none", borderRadius: "10px", color: "#412402", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-body)" }}>Next Question →</button>
            </div>
          </motion.div>
        )}

        {activeView === "results" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>▦</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, marginBottom: "10px" }}>Analytics Dashboard</h2>
            <p style={{ fontSize: "15px", color: "var(--muted)" }}>Full analytics with class-wide performance reports, item analysis, and export.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
