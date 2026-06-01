"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const posterTypes = ["Sports Poster","Match Graphic","Event Flyer","Player Card","Team Brand Kit","Tournament Banner"];
const styles = ["Cinematic Dark","Bold & Vibrant","Minimal Clean","Retro Futuristic"];
const formats = ["Portrait 4:5","Square 1:1","Landscape 16:9","Story 9:16"];

interface GalleryImage { id:number;image_url:string;prompt:string;output_type:string;style:string;created_at:string }

export default function StudioPage() {
  const [activeModule, setActiveModule] = useState("generate");
  const [prompt, setPrompt] = useState("");
  const [selectedType, setSelectedType] = useState("Sports Poster");
  const [selectedStyle, setSelectedStyle] = useState("Cinematic Dark");
  const [selectedFormat, setSelectedFormat] = useState("Portrait 4:5");
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [statusMsg, setStatusMsg] = useState("");
  const retryRef = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(()=>{
    fetchGallery();
    return ()=>{ if(retryRef.current) clearTimeout(retryRef.current); };
  },[]);

  const fetchGallery = async () => {
    try { const r = await fetch("/api/gallery"); const d = await r.json(); if(d.images) setGallery(d.images); }
    catch{} finally { setLoadingGallery(false); }
  };

  const handleGenerate = async () => {
    if(!prompt.trim()){ setError("Please enter a prompt first."); return; }
    setGenerating(true); setError(null); setGeneratedImage(null); setStatusMsg("Sending to AI...");
    try {
      const res = await fetch("/api/generate-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt,style:selectedStyle,format:selectedFormat,outputType:selectedType})});
      const data = await res.json();
      if(res.status===503&&data.loading){
        setStatusMsg("Model warming up... retrying in 20s");
        retryRef.current = setTimeout(async()=>{
          setStatusMsg("Retrying...");
          const r2 = await fetch("/api/generate-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt,style:selectedStyle,format:selectedFormat,outputType:selectedType})});
          const d2 = await r2.json();
          if(d2.imageUrl){ setGeneratedImage(d2.imageUrl); fetchGallery(); }
          else setError(d2.error||"Generation failed.");
          setGenerating(false); setStatusMsg("");
        },20000);
        return;
      }
      if(!res.ok||data.error){ setError(data.error||"Generation failed."); setGenerating(false); setStatusMsg(""); return; }
      if(data.imageUrl){ setGeneratedImage(data.imageUrl); setStatusMsg(data.demo?"Demo mode — add HF key for real AI":"✓ Generated!"); if(!data.demo) fetchGallery(); }
    } catch { setError("Network error — please try again."); }
    finally { setGenerating(false); }
  };

  const handleDownload = () => {
    if(!generatedImage) return;
    const a = document.createElement("a"); a.href=generatedImage; a.download=`starprinz-${Date.now()}.png`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  return (
    <div style={{background:"var(--bg)",color:"var(--text)",fontFamily:"var(--font-body)",minHeight:"100vh",paddingBottom:"40px"}}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}} @keyframes shimmer{0%,100%{opacity:.5}50%{opacity:1}} textarea::placeholder{color:rgba(240,240,245,.3)}`}</style>

      {/* Nav */}
      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",height:"56px",background:"rgba(6,6,8,.95)",borderBottom:"1px solid var(--border)",backdropFilter:"blur(16px)",position:"sticky",top:0,zIndex:100}}>
        <Link href="/" style={{fontSize:"13px",color:"var(--muted)",textDecoration:"none"}}>← Home</Link>
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <div style={{width:"7px",height:"7px",borderRadius:"50%",background:"var(--accent2)",boxShadow:"0 0 8px var(--accent)"}}/>
          <span style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:700,letterSpacing:".05em"}}>STUDIO</span>
        </div>
        <button style={{padding:"6px 12px",borderRadius:"8px",fontSize:"12px",fontWeight:600,cursor:"pointer",background:"var(--accent)",border:"none",color:"#fff"}}>Create</button>
      </nav>

      {/* Hero */}
      <div style={{background:"linear-gradient(135deg,#0d0a1a,#1a0d2d,#0d0a20)",borderBottom:"1px solid var(--border)",padding:"32px 20px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",width:"300px",height:"200px",background:"radial-gradient(ellipse,rgba(123,110,246,.15) 0%,transparent 70%)",top:"-40px",right:"-40px",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--accent2)",marginBottom:"8px"}}>AI Creative Suite</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(26px,7vw,48px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.08,marginBottom:"10px"}}>
            Create anything.<br/><span style={{background:"linear-gradient(135deg,var(--accent2),var(--teal))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Powered by AI.</span>
          </h1>
          <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.65,maxWidth:"480px"}}>Stable Diffusion XL · Free · 15–30s per image</p>
        </div>
      </div>

      {/* Module tabs */}
      <div style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",display:"flex",overflowX:"auto",scrollbarWidth:"none",padding:"0 8px"}}>
        {[["generate","✦ Generate"],["gallery","▣ Gallery"],["kits","◉ Brand Kits"]].map(([id,label])=>(
          <button key={id} onClick={()=>setActiveModule(id)} style={{padding:"13px 16px",background:"transparent",border:"none",borderBottom:`2px solid ${activeModule===id?"var(--accent)":"transparent"}`,color:activeModule===id?"var(--text)":"var(--muted)",fontSize:"13px",fontWeight:activeModule===id?500:400,cursor:"pointer",whiteSpace:"nowrap",transition:"color .2s"}}>
            {label}
          </button>
        ))}
      </div>

      <div style={{padding:"20px"}}>

        {/* GENERATE TAB */}
        {activeModule==="generate" && (
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            {/* Prompt panel */}
            <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"14px",padding:"18px"}}>
              <div style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:600,marginBottom:"16px"}}>✦ AI Graphic Generator</div>

              <label style={{fontSize:"11px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Describe your graphic</label>
              <textarea value={prompt} onChange={e=>setPrompt(e.target.value)}
                placeholder="e.g. FC Horizon vs Atlas United match day poster, dramatic stadium lights..."
                style={{width:"100%",height:"90px",background:"var(--surface2)",border:"1px solid var(--border2)",borderRadius:"10px",padding:"11px",color:"var(--text)",fontSize:"13px",resize:"none",outline:"none",lineHeight:1.6,marginBottom:"14px",transition:"border-color .2s"}}
                onFocus={e=>(e.target.style.borderColor="var(--accent)")}
                onBlur={e=>(e.target.style.borderColor="var(--border2)")}/>

              <label style={{fontSize:"11px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Output Type</label>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"14px"}}>
                {posterTypes.map(t=>(
                  <button key={t} onClick={()=>setSelectedType(t)} style={{fontSize:"11px",padding:"5px 10px",borderRadius:"99px",cursor:"pointer",transition:"all .15s",background:selectedType===t?"rgba(123,110,246,.2)":"var(--surface2)",border:`1px solid ${selectedType===t?"rgba(123,110,246,.4)":"var(--border)"}`,color:selectedType===t?"var(--accent2)":"var(--muted)"}}>
                    {t}
                  </button>
                ))}
              </div>

              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"16px"}}>
                <div>
                  <label style={{fontSize:"11px",color:"var(--muted)",display:"block",marginBottom:"5px"}}>Style</label>
                  <select value={selectedStyle} onChange={e=>setSelectedStyle(e.target.value)} style={{width:"100%",background:"var(--surface2)",border:"1px solid var(--border2)",borderRadius:"8px",padding:"8px 10px",color:"var(--text)",fontSize:"13px",outline:"none"}}>
                    {styles.map(s=><option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{fontSize:"11px",color:"var(--muted)",display:"block",marginBottom:"5px"}}>Format</label>
                  <select value={selectedFormat} onChange={e=>setSelectedFormat(e.target.value)} style={{width:"100%",background:"var(--surface2)",border:"1px solid var(--border2)",borderRadius:"8px",padding:"8px 10px",color:"var(--text)",fontSize:"13px",outline:"none"}}>
                    {formats.map(f=><option key={f}>{f}</option>)}
                  </select>
                </div>
              </div>

              {/* Quick prompts */}
              <div style={{marginBottom:"14px"}}>
                <label style={{fontSize:"11px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Quick Start</label>
                <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                  {["FC Horizon match day finals poster","Champion's league trophy ceremony graphic","Player of the year award card"].map(ex=>(
                    <button key={ex} onClick={()=>setPrompt(ex)} style={{fontSize:"12px",padding:"8px 12px",borderRadius:"8px",background:"rgba(123,110,246,.08)",border:"1px solid rgba(123,110,246,.15)",color:"var(--accent2)",cursor:"pointer",textAlign:"left",transition:"background .15s"}}>
                      "{ex}"
                    </button>
                  ))}
                </div>
              </div>

              {error && <div style={{padding:"10px 12px",background:"rgba(249,113,104,.1)",border:"1px solid rgba(249,113,104,.2)",borderRadius:"8px",color:"var(--coral)",fontSize:"12px",marginBottom:"12px",lineHeight:1.5}}>⚠ {error}</div>}
              {statusMsg && !error && <div style={{padding:"9px 12px",background:"rgba(123,110,246,.1)",border:"1px solid rgba(123,110,246,.2)",borderRadius:"8px",color:"var(--accent2)",fontSize:"12px",marginBottom:"12px",animation:"shimmer 2s ease-in-out infinite"}}>{statusMsg}</div>}

              <button onClick={handleGenerate} disabled={generating} style={{width:"100%",padding:"14px",background:generating?"rgba(123,110,246,.4)":"linear-gradient(135deg,var(--accent),var(--accent2))",border:"none",borderRadius:"10px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:generating?"not-allowed":"pointer",letterSpacing:".03em",transition:"all .2s",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                {generating?<><div style={{width:"16px",height:"16px",border:"2px solid rgba(255,255,255,.3)",borderTop:"2px solid #fff",borderRadius:"50%",animation:"spin .8s linear infinite"}}/>Generating...</>:"✦ Generate Graphic"}
              </button>
              <div style={{fontSize:"11px",color:"var(--muted2)",textAlign:"center",marginTop:"6px"}}>Stable Diffusion XL · Free · ~20s</div>
            </div>

            {/* Preview */}
            <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"14px",overflow:"hidden"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid var(--border)"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"13px",fontWeight:600}}>Preview</span>
                <div style={{display:"flex",gap:"8px"}}>
                  {generatedImage&&<button onClick={handleDownload} style={{fontSize:"11px",padding:"5px 12px",borderRadius:"6px",background:"rgba(123,110,246,.15)",border:"1px solid rgba(123,110,246,.3)",color:"var(--accent2)",cursor:"pointer",fontWeight:500}}>↓ Save</button>}
                  <button onClick={()=>{setGeneratedImage(null);setError(null);setStatusMsg("");}} style={{fontSize:"11px",padding:"5px 10px",borderRadius:"6px",background:"var(--surface2)",border:"1px solid var(--border)",color:"var(--muted)",cursor:"pointer"}}>Clear</button>
                </div>
              </div>
              <div style={{background:"linear-gradient(135deg,#0d0a1a,#2d0a1f,#0d1a2d)",minHeight:"280px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",padding:"20px"}}>
                <div style={{position:"absolute",width:"160px",height:"160px",background:"radial-gradient(circle,rgba(123,110,246,.35) 0%,transparent 70%)",top:"-30px",right:"-30px"}}/>
                <div style={{position:"absolute",width:"120px",height:"120px",background:"radial-gradient(circle,rgba(45,212,191,.2) 0%,transparent 70%)",bottom:"-10px",left:"30px"}}/>
                {generating?(
                  <div style={{textAlign:"center",zIndex:1}}>
                    <div style={{width:"44px",height:"44px",border:"3px solid rgba(123,110,246,.3)",borderTop:"3px solid var(--accent)",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 16px"}}/>
                    <div style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:600,marginBottom:"6px"}}>Generating...</div>
                    <div style={{fontSize:"12px",color:"var(--muted)",animation:"shimmer 2s ease-in-out infinite"}}>{statusMsg}</div>
                  </div>
                ):generatedImage?(
                  <img src={generatedImage} alt="AI Generated" style={{maxWidth:"100%",maxHeight:"400px",objectFit:"contain",borderRadius:"8px",boxShadow:"0 0 40px rgba(123,110,246,.3)",position:"relative",zIndex:1}}/>
                ):(
                  <div style={{textAlign:"center",zIndex:1,opacity:.7}}>
                    <div style={{fontSize:"40px",marginBottom:"12px"}}>✦</div>
                    <div style={{fontFamily:"var(--font-display)",fontSize:"16px",fontWeight:700,marginBottom:"6px"}}>Your graphic appears here</div>
                    <div style={{fontSize:"12px",color:"var(--muted)"}}>Enter a prompt above and tap Generate</div>
                  </div>
                )}
              </div>
              <div style={{padding:"10px 16px",borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:"11px",color:"var(--muted)"}}>{selectedFormat} · {selectedStyle}</span>
                <div style={{display:"flex",gap:"6px"}}>
                  {["PNG","JPG","WebP"].map(f=><span key={f} style={{fontSize:"10px",padding:"2px 7px",borderRadius:"99px",background:"var(--surface2)",border:"1px solid var(--border)",color:"var(--muted)"}}>{f}</span>)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GALLERY TAB */}
        {activeModule==="gallery" && (
          <div>
            <div style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:600,marginBottom:"14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>Recent Generations</span>
              <span style={{fontSize:"12px",color:"var(--muted)",fontFamily:"var(--font-body)",fontWeight:400}}>{gallery.length} images</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"}}>
              {loadingGallery?Array.from({length:6}).map((_,i)=>(
                <div key={i} style={{aspectRatio:"4/5",borderRadius:"10px",background:"var(--surface2)",border:"1px solid var(--border)",animation:"shimmer 1.5s ease-in-out infinite"}}/>
              )):gallery.length===0?(
                <div style={{gridColumn:"1/-1",textAlign:"center",padding:"60px 20px"}}>
                  <div style={{fontSize:"36px",marginBottom:"12px"}}>✦</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"16px",fontWeight:600,marginBottom:"6px"}}>No images yet</div>
                  <div style={{fontSize:"13px",color:"var(--muted)"}}>Generate your first graphic to see it here</div>
                </div>
              ):gallery.map(img=>(
                <div key={img.id} onClick={()=>{setGeneratedImage(img.image_url);setActiveModule("generate");}}
                  style={{aspectRatio:"4/5",borderRadius:"10px",border:"1px solid var(--border)",overflow:"hidden",cursor:"pointer",position:"relative",transition:"all .2s"}}>
                  <img src={img.image_url} alt={img.prompt} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                  <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"8px",background:"linear-gradient(transparent,rgba(0,0,0,.85))"}}>
                    <div style={{fontSize:"10px",color:"rgba(255,255,255,.9)",fontWeight:500}}>{img.output_type}</div>
                    <div style={{fontSize:"9px",color:"rgba(255,255,255,.5)",marginTop:"1px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{img.prompt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BRAND KITS TAB */}
        {activeModule==="kits" && (
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"14px",overflow:"hidden"}}>
            <div style={{padding:"16px",borderBottom:"1px solid var(--border)"}}>
              <div style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:600,marginBottom:"4px"}}>Team Brand Kits</div>
              <div style={{fontSize:"12px",color:"var(--muted)"}}>Tap a kit to auto-fill the prompt</div>
            </div>
            {[
              {code:"FH",name:"FC Horizon",color:"var(--teal)",bg:"rgba(45,212,191,.15)",border:"rgba(45,212,191,.3)",prompt:"FC Horizon football team, teal and black colors, dynamic sports poster"},
              {code:"AU",name:"Atlas United",color:"var(--gold)",bg:"rgba(232,185,79,.15)",border:"rgba(232,185,79,.3)",prompt:"Atlas United football club, gold and dark colors, cinematic match poster"},
              {code:"SX",name:"Storm XI",color:"var(--accent2)",bg:"rgba(167,139,250,.15)",border:"rgba(167,139,250,.3)",prompt:"Storm XI football team, purple and silver colors, dramatic sports graphic"},
              {code:"VS",name:"Vortex SC",color:"var(--green)",bg:"rgba(74,222,128,.15)",border:"rgba(74,222,128,.3)",prompt:"Vortex SC football team, green and dark colors, bold sports poster"},
            ].map(kit=>(
              <div key={kit.code} onClick={()=>{setPrompt(kit.prompt);setActiveModule("generate");}}
                style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px",borderBottom:"1px solid var(--border)",cursor:"pointer",transition:"background .15s"}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.02)"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}>
                <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                  <div style={{width:"40px",height:"40px",borderRadius:"10px",background:kit.bg,border:`1px solid ${kit.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:700,color:kit.color,fontFamily:"var(--font-display)"}}>{kit.code}</div>
                  <div>
                    <div style={{fontSize:"14px",fontWeight:500}}>{kit.name}</div>
                    <div style={{fontSize:"11px",color:"var(--muted)",marginTop:"2px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"200px"}}>{kit.prompt.slice(0,40)}...</div>
                  </div>
                </div>
                <span style={{fontSize:"12px",color:"var(--accent2)",flexShrink:0}}>Use →</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
