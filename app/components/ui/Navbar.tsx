"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: "64px",
        background: scrolled
          ? "rgba(6,6,8,0.85)"
          : "rgba(6,6,8,0.4)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            background: "linear-gradient(135deg, #fff 0%, var(--accent2) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          STARPRINZ
        </span>
      </Link>

      <ul style={{ display: "flex", gap: "36px", listStyle: "none" }}>
        {[
          { label: "Ecosystem", href: "/#ecosystem" },
          { label: "Products", href: "/#products" },
          { label: "Vision", href: "/#vision" },
          { label: "Stack", href: "/#stack" },
        ].map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "var(--muted)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "var(--text)",
          background: "var(--surface2)",
          border: "1px solid var(--border2)",
          padding: "8px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          letterSpacing: "0.03em",
          transition: "all 0.2s",
          fontFamily: "var(--font-body)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
        }}
      >
        Get Early Access →
      </button>
    </nav>
  );
}
