"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const modules = [
  { id: "graphics", label: "AI Graphics", icon: "✦" },
  { id: "video", label: "Video Builder", icon: "◆" },
  { id: "workspace", label: "Creator Workspace", icon: "⊟" },
];

const posterTypes = ["Sports Poster", "Match Graphic", "Event Flyer", "Player Card", "Team Brand Kit", "Tournament Banner"];
const styles = ["Cinematic Dark", "Bold & Vibrant", "Minimal Clean", "Retro Futuristic"];
const formats = ["Portrait 4:5", "Square 1:1", "Landscape 16:9", "Story 9:16"];

interface GalleryImage {
  id: number;
  image_url: string;
  prompt: string;
  output_type: string;
  style: string;
  created_at: string;
}

export default function StudioPage() {
  const [activeModule, setActiveModule] = useState("graphics");
  const [prompt, setPrompt] = useState("");
  const [selectedType, setSelectedType] = useState("Sports Poster");
  const [selectedStyle, setSelectedStyle] = useState("Cinematic Dark");
  const [selectedFormat, setSelectedFormat] = useState("Portrait 4:5");
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [retrying, setRetrying] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const retryTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetchGallery();
    return () => { if (retryTimeout.current) clearTimeout(retryTimeout.current); };
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (data.images) setGallery(data.images);
    } catch {
      console.error("Gallery fetch failed");
    } finally {
      setLoadingGallery(false);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt first.");
      return;
    }
    setGenerating(true);
    setError(null);
    setGeneratedImage(null);
    setStatusMsg("Sending to AI model...");

    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          style: selectedStyle,
          format: selectedFormat,
          outputType: selectedType,
        }),
      });

      const data = await res.json();

      if (res.status === 503 && data.loading) {
        // Model cold start — retry after 20s
        setStatusMsg("AI model is warming up... retrying in 20s");
        setRetrying(true);
        retryTimeout.current = setTimeout(async () => {
          setRetrying(false);
          setStatusMsg("Retrying generation...");
          const retry = await fetch("/api/generate-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt, style: selectedStyle, format: selectedFormat, outputType: selectedType }),
          });
          const retryData = await retry.json();
          if (retryData.imageUrl) {
            setGeneratedImage(retryData.imageUrl);
            fetchGallery();
          } else {
            setError(retryData.error || "Generation failed. Please try again.");
          }
          setGenerating(false);
          setStatusMsg("");
        }, 20000);
        return;
      }

      if (!res.ok || data.error) {
        setError(data.error || "Generation failed. Please try again.");
        setGenerating(false);
        setStatusMsg("");
        return;
      }

      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
        if (data.demo) {
          setStatusMsg("Demo mode — add HUGGINGFACE_API_KEY for real AI generation");
        } else {
          setStatusMsg("✓ Generated successfully!");
          fetchGallery();
        }
      }
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      if (!retrying) {
        setGenerating(false);
      }
    }
  };

  const handleDownload = async () => {
    if (!generatedImage) return;
    const a = document.createElement("a");
    a.href = generatedImage;
    a.download = `starprinz-studio-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
        textarea::placeholder { color: rgba(240,240,245,0.3); }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: "60px", background: "rgba(6,6,8,0.95)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 100 }}>
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
      <div style={{ background: "linear-gradient(135deg,#0d0a1a,#1a0d2d,#0d0a20)", borderBottom: "1px solid var(--border)", padding: "56px 40px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "600px", height: "400px", background: "radial-gradient(ellipse,rgba(123,110,246,.15) 0%,transparent 70%)", top: "-100px", right: "-100px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "12px" }}>AI Creative Production Suite</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,5vw,58px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.06, marginBottom: "14px" }}>
            Create anything.<br />
            <span style={{ background: "linear-gradient(135deg, var(--accent2), var(--teal))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Powered by AI.</span>
          </h1>
          <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "520px", lineHeight: 1.7, fontWeight: 300 }}>
            Describe your graphic, pick a style, and watch Stable Diffusion XL generate broadcast-quality sports art in seconds — completely free.
          </p>
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "0 40px", display: "flex", gap: "4px" }}>
        {modules.map((m) => (
          <button key={m.id} onClick={() => setActiveModule(m.id)}
            style={{ padding: "16px 24px", background: "transparent", border: "none", borderBottom: `2px solid ${activeModule === m.id ? "var(--accent)" : "transparent"}`, color: activeModule === m.id ? "var(--text)" : "var(--muted)", fontSize: "13px", fontWeight: activeModule === m.id ? 500 : 400, cursor: "pointer", fontFamily: "var(--font-body)", transition: "all 0.2s", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>{m.icon}</span>{m.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "32px 40px", maxWidth: "1200px" }}>
        {activeModule === "graphics" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "24px" }}>

            {/* LEFT — Prompt Panel */}
            <div>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "24px", marginBottom: "16px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>✦ AI Graphic Generator</div>

                {/* Prompt */}
                <label style={{ fontSize: "12px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Describe your graphic</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. FC Horizon vs Atlas United match day poster, dramatic stadium lights, electric atmosphere..."
                  onKeyDown={(e) => { if (e.key === "Enter" && e.metaKey) handleGenerate(); }}
                  style={{ width: "100%", height: "100px", background: "var(--surface2)", border: "1px solid var(--border2)", borderRadius: "10px", padding: "12px", color: "var(--text)", fontSize: "13px", resize: "none", outline: "none", fontFamily: "var(--font-body)", lineHeight: 1.6, marginBottom: "16px", transition: "border-color 0.2s" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border2)")}
                />

                {/* Output Type */}
                <label style={{ fontSize: "12px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Output Type</label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                  {posterTypes.map((t) => (
                    <button key={t} onClick={() => setSelectedType(t)}
                      style={{ fontSize: "11px", padding: "5px 12px", borderRadius: "99px", cursor: "pointer", fontFamily: "var(--font-body)", transition: "all 0.15s", background: selectedType === t ? "rgba(123,110,246,0.2)" : "var(--surface2)", border: `1px solid ${selectedType === t ? "rgba(123,110,246,0.4)" : "var(--border)"}`, color: selectedType === t ? "var(--accent2)" : "var(--muted)" }}>
                      {t}
                    </button>
                  ))}
                </div>

                {/* Style + Format */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ fontSize: "12px", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Style</label>
                    <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}
                      style={{ width: "100%", background: "var(--surface2)", border: "1px solid var(--border2)", borderRadius: "8px", padding: "9px 12px", color: "var(--text)", fontSize: "13px", fontFamily: "var(--font-body)", outline: "none" }}>
                      {styles.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", color: "var(--muted)", display: "block", marginBottom: "6px" }}>Format</label>
                    <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}
                      style={{ width: "100%", background: "var(--surface2)", border: "1px solid var(--border2)", borderRadius: "8px", padding: "9px 12px", color: "var(--text)", fontSize: "13px", fontFamily: "var(--font-body)", outline: "none" }}>
                      {formats.map(f => <option key={f}>{f}</option>)}
                    </select>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div style={{ padding: "12px 14px", background: "rgba(249,113,104,0.1)", border: "1px solid rgba(249,113,104,0.25)", borderRadius: "8px", color: "var(--coral)", fontSize: "13px", marginBottom: "16px", lineHeight: 1.5 }}>
                    ⚠ {error}
                  </div>
                )}

                {/* Status */}
                {statusMsg && !error && (
                  <div style={{ padding: "10px 14px", background: "rgba(123,110,246,0.1)", border: "1px solid rgba(123,110,246,0.2)", borderRadius: "8px", color: "var(--accent2)", fontSize: "12px", marginBottom: "16px", animation: "pulse 2s ease-in-out infinite" }}>
                    {statusMsg}
                  </div>
                )}

                {/* Generate Button */}
                <button onClick={handleGenerate} disabled={generating}
                  style={{ width: "100%", padding: "14px", background: generating ? "rgba(123,110,246,0.4)" : "linear-gradient(135deg, var(--accent), var(--accent2))", border: "none", borderRadius: "10px", color: "#fff", fontSize: "14px", fontWeight: 600, cursor: generating ? "not-allowed" : "pointer", letterSpacing: "0.03em", fontFamily: "var(--font-body)", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                  {generating ? (
                    <>
                      <div style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid #fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      Generating...
                    </>
                  ) : "✦ Generate Graphic"}
                </button>
                <div style={{ fontSize: "11px", color: "var(--muted2)", textAlign: "center", marginTop: "8px" }}>
                  Powered by Stable Diffusion XL · Free tier · ~15–30s
                </div>
              </div>

              {/* Brand Kits */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, marginBottom: "14px" }}>Team Brand Kits</div>
                {[
                  { code: "FH", name: "FC Horizon", color: "var(--teal)", bg: "rgba(45,212,191,0.15)", border: "rgba(45,212,191,0.3)", prompt: "FC Horizon football team, teal and black colors" },
                  { code: "AU", name: "Atlas United", color: "var(--gold)", bg: "rgba(232,185,79,0.15)", border: "rgba(232,185,79,0.3)", prompt: "Atlas United football club, gold and dark colors" },
                  { code: "SX", name: "Storm XI", color: "var(--accent2)", bg: "rgba(167,139,250,0.15)", border: "rgba(167,139,250,0.3)", prompt: "Storm XI football team, purple and silver colors" },
                ].map((kit) => (
                  <div key={kit.code} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: kit.bg, border: `1px solid ${kit.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: kit.color, fontFamily: "var(--font-display)" }}>{kit.code}</div>
                      <span style={{ fontSize: "13px" }}>{kit.name}</span>
                    </div>
                    <button onClick={() => setPrompt(kit.prompt)}
                      style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--muted)", cursor: "pointer", fontFamily: "var(--font-body)", transition: "all 0.15s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = kit.color; (e.currentTarget as HTMLElement).style.color = kit.color; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}>
                      Use Kit
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Preview Panel */}
            <div>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600 }}>Preview</span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {generatedImage && (
                      <button onClick={handleDownload}
                        style={{ fontSize: "11px", padding: "5px 14px", borderRadius: "6px", background: "rgba(123,110,246,0.15)", border: "1px solid rgba(123,110,246,0.3)", color: "var(--accent2)", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 500 }}>
                        ↓ Download
                      </button>
                    )}
                    <button onClick={() => { setGeneratedImage(null); setError(null); setStatusMsg(""); }}
                      style={{ fontSize: "11px", padding: "5px 12px", borderRadius: "6px", background: "var(--surface2)", border: "1px solid var(--border2)", color: "var(--muted)", cursor: "pointer", fontFamily: "var(--font-body)" }}>
                      ⊕ Clear
                    </button>
                  </div>
                </div>

                <div style={{ background: "linear-gradient(135deg,#0d0a1a,#2d0a1f,#0d1a2d)", minHeight: "440px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  {/* Background glows */}
                  <div style={{ position: "absolute", width: "200px", height: "200px", background: "radial-gradient(circle,rgba(123,110,246,.35) 0%,transparent 70%)", top: "-40px", right: "-40px" }} />
                  <div style={{ position: "absolute", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(45,212,191,.2) 0%,transparent 70%)", bottom: "-20px", left: "40px" }} />

                  {generating ? (
                    <div style={{ textAlign: "center", zIndex: 1, padding: "40px" }}>
                      <div style={{ width: "48px", height: "48px", border: "3px solid rgba(123,110,246,0.3)", borderTop: "3px solid var(--accent)", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 20px" }} />
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>Generating your graphic</div>
                      <div style={{ fontSize: "13px", color: "var(--muted)", animation: "pulse 2s ease-in-out infinite" }}>{statusMsg || "Stable Diffusion XL is working..."}</div>
                      <div style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "8px" }}>This takes 15–30 seconds</div>
                    </div>
                  ) : generatedImage ? (
                    <div style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", justifyContent: "center", padding: "20px" }}>
                      <img src={generatedImage} alt="AI Generated" style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "8px", boxShadow: "0 0 40px rgba(123,110,246,0.3)" }} />
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", zIndex: 1, padding: "40px", opacity: 0.7 }}>
                      <div style={{ fontSize: "48px", marginBottom: "16px" }}>✦</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>Your AI graphic appears here</div>
                      <div style={{ fontSize: "13px", color: "var(--muted)" }}>Enter a prompt and click Generate</div>
                      <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "8px", maxWidth: "280px", margin: "24px auto 0" }}>
                        {["FC Horizon match day finals poster", "Champion's league trophy graphic", "Player of the year award card"].map((ex) => (
                          <button key={ex} onClick={() => setPrompt(ex)}
                            style={{ fontSize: "12px", padding: "8px 14px", borderRadius: "8px", background: "rgba(123,110,246,0.1)", border: "1px solid rgba(123,110,246,0.2)", color: "var(--accent2)", cursor: "pointer", fontFamily: "var(--font-body)", textAlign: "left", transition: "all 0.15s" }}
                            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(123,110,246,0.2)"}
                            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(123,110,246,0.1)"}>
                            "{ex}"
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ padding: "14px 20px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>{selectedFormat} · {selectedStyle}</span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {["PNG", "JPG", "WebP"].map((fmt) => (
                      <span key={fmt} style={{ fontSize: "10px", padding: "3px 8px", borderRadius: "99px", background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--muted)" }}>{fmt}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div style={{ marginTop: "16px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>Recent Generations</span>
                  <span style={{ fontSize: "12px", color: "var(--muted)", fontFamily: "var(--font-body)", fontWeight: 400 }}>{gallery.length} images</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                  {loadingGallery ? (
                    Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} style={{ aspectRatio: "4/5", borderRadius: "8px", background: "var(--surface2)", border: "1px solid var(--border)", animation: "pulse 1.5s ease-in-out infinite" }} />
                    ))
                  ) : gallery.slice(0, 8).map((img) => (
                    <div key={img.id} onClick={() => setGeneratedImage(img.image_url)}
                      style={{ aspectRatio: "4/5", borderRadius: "8px", border: "1px solid var(--border)", overflow: "hidden", cursor: "pointer", transition: "all 0.2s", position: "relative" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
                      <img src={img.image_url} alt={img.prompt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px", background: "linear-gradient(transparent, rgba(0,0,0,0.8))", fontSize: "10px", color: "rgba(255,255,255,0.8)" }}>
                        {img.output_type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeModule !== "graphics" && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>{modules.find(m => m.id === activeModule)?.icon}</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, marginBottom: "10px" }}>
              {modules.find(m => m.id === activeModule)?.label}
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)" }}>Under active development — coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
