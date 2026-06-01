"use client";
import { motion } from "framer-motion";

const stackItems = [
  {icon:"▲",name:"Next.js",desc:"App router, SSR, edge functions for fast delivery.",bg:"rgba(255,255,255,.05)",border:"var(--border)",color:"var(--text)"},
  {icon:"◎",name:"TailwindCSS",desc:"Utility-first styling across the full ecosystem.",bg:"rgba(45,212,191,.1)",border:"rgba(45,212,191,.2)",color:"var(--teal)"},
  {icon:"◆",name:"Framer Motion",desc:"Cinematic animations and scroll-driven effects.",bg:"rgba(249,113,104,.1)",border:"rgba(249,113,104,.2)",color:"var(--coral)"},
  {icon:"⚡",name:"Supabase",desc:"Postgres, realtime, auth — shared data backbone.",bg:"rgba(123,110,246,.1)",border:"rgba(123,110,246,.2)",color:"var(--accent2)"},
  {icon:"◈",name:"AI APIs",desc:"Stable Diffusion, custom models for generation.",bg:"rgba(232,185,79,.1)",border:"rgba(232,185,79,.2)",color:"var(--gold)"},
  {icon:"✦",name:"Cloudinary",desc:"Global media storage and video pipeline.",bg:"rgba(74,222,128,.1)",border:"rgba(74,222,128,.2)",color:"var(--green)"},
  {icon:"⬡",name:"Node.js",desc:"Backend services, webhooks, scheduled jobs.",bg:"rgba(255,255,255,.05)",border:"var(--border)",color:"var(--muted)"},
  {icon:"☁",name:"Vercel Edge",desc:"Sub-100ms global delivery and preview deploys.",bg:"rgba(45,212,191,.1)",border:"rgba(45,212,191,.2)",color:"var(--teal)"},
];

export default function LiveAndStack() {
  return (
    <>
      {/* LIVE EXPERIENCE */}
      <section id="vision" style={{padding:"80px 20px",background:"var(--bg2)"}}>
        <div style={{textAlign:"center",marginBottom:"48px"}}>
          <div style={{fontSize:"11px",fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--accent2)",marginBottom:"12px"}}>Live Experience</div>
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(28px,7vw,48px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1}}>Everything running.<br/>Right now.</h2>
          <p style={{fontSize:"clamp(13px,4vw,15px)",color:"var(--muted)",maxWidth:"min(440px,90vw)",margin:"14px auto 0",lineHeight:1.7,fontWeight:300}}>Real-time tournaments, AI-generated posters, and active exam sessions — always on.</p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(300px,100%),1fr))",gap:"16px",maxWidth:"1100px",margin:"0 auto"}}>
          {/* Fixtures */}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}
            style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"16px",overflow:"hidden"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderBottom:"1px solid var(--border)"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"13px",fontWeight:600}}>Sportified — Live Fixtures</span>
              <span style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"10px",fontWeight:500,color:"var(--coral)",letterSpacing:".08em",textTransform:"uppercase"}}>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--coral)",display:"inline-block",animation:"blink 1s ease-in-out infinite"}}/>Live
              </span>
            </div>
            {[
              {home:"FC Horizon",away:"Atlas United",score:"2 – 1",live:true,status:"68'"},
              {home:"Storm XI",away:"Delta FC",score:"0 – 0",live:true,status:"41'"},
              {home:"Vortex SC",away:"Iron City",score:"3 – 2",live:false,status:"FT"},
              {home:"Zenith FC",away:"Nova Stars",score:"1 – 1",live:false,status:"FT"},
            ].map(m=>(
              <div key={m.home} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",borderBottom:"1px solid var(--border)"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"12px",fontWeight:600,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{m.home}</span>
                <div style={{textAlign:"center",padding:"0 10px",flexShrink:0}}>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:700}}>{m.score}</div>
                  <span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"99px",color:m.live?"var(--coral)":"var(--muted)",background:m.live?"rgba(249,113,104,.1)":"rgba(255,255,255,.04)",border:`1px solid ${m.live?"rgba(249,113,104,.2)":"var(--border)"}`,whiteSpace:"nowrap"}}>
                    {m.live?`● ${m.status}`:m.status}
                  </span>
                </div>
                <span style={{fontFamily:"var(--font-display)",fontSize:"12px",fontWeight:600,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"right"}}>{m.away}</span>
              </div>
            ))}
          </motion.div>

          {/* AI Studio preview */}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.12}}
            style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"16px",overflow:"hidden",display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderBottom:"1px solid var(--border)"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"13px",fontWeight:600}}>Studio — AI Generator</span>
              <span style={{fontSize:"11px",color:"var(--accent2)",fontWeight:500}}>✦ AI</span>
            </div>
            <div style={{flex:1,background:"linear-gradient(135deg,#0d0a1a,#1a0d2d,#0d1a2d)",minHeight:"180px",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",width:"120px",height:"120px",background:"radial-gradient(circle,rgba(123,110,246,.4) 0%,transparent 70%)",top:"-20px",right:"-20px"}}/>
              <div style={{width:"100px",height:"140px",background:"linear-gradient(135deg,#1a0d2d,#2d0a1f,#0d1a2d)",borderRadius:"10px",border:"1px solid rgba(123,110,246,.3)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",position:"relative",zIndex:1}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"10px",fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",textAlign:"center",lineHeight:1.3}}>Match Day Finals</div>
                <div style={{width:"60%",height:"2px",background:"linear-gradient(90deg,var(--accent),var(--teal))",borderRadius:"99px"}}/>
                <div style={{fontSize:"8px",color:"var(--accent2)",letterSpacing:".08em"}}>FC Horizon vs Atlas</div>
              </div>
            </div>
            <div style={{padding:"14px 18px"}}>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"}}>
                {["Match poster","Sports flyer","Player card"].map(c=>(
                  <span key={c} style={{fontSize:"11px",padding:"3px 9px",borderRadius:"99px",background:"var(--surface2)",border:"1px solid var(--border)",color:"var(--muted)"}}>{c}</span>
                ))}
              </div>
              <button style={{width:"100%",padding:"10px",background:"linear-gradient(135deg,var(--accent),rgba(45,212,191,.6))",border:"none",borderRadius:"8px",color:"#fff",fontSize:"13px",fontWeight:600,cursor:"pointer",letterSpacing:".03em"}}>
                ✦ Generate with AI
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" style={{padding:"80px 20px",background:"var(--bg)"}}>
        <div style={{textAlign:"center",marginBottom:"48px"}}>
          <div style={{fontSize:"11px",fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--accent2)",marginBottom:"12px"}}>Tech Stack</div>
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(28px,7vw,48px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1}}>Modern, scalable,<br/>AI-native.</h2>
          <p style={{fontSize:"clamp(13px,4vw,15px)",color:"var(--muted)",maxWidth:"min(440px,90vw)",margin:"14px auto 0",lineHeight:1.7,fontWeight:300}}>Built on the most capable open-source and cloud primitives — designed to scale from MVP to millions.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(200px,calc(50% - 8px)),1fr))",gap:"12px",maxWidth:"1100px",margin:"0 auto"}}>
          {stackItems.map((s,i)=>(
            <motion.div key={s.name} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.05}}
              whileHover={{y:-2}}
              style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",padding:"18px",transition:"border-color .2s"}}
              onHoverStart={e=>{(e.target as HTMLElement).style.borderColor="var(--border2)"}}
              onHoverEnd={e=>{(e.target as HTMLElement).style.borderColor="var(--border)"}}>
              <div style={{width:"34px",height:"34px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"15px",marginBottom:"10px",background:s.bg,border:`1px solid ${s.border}`,color:s.color}}>{s.icon}</div>
              <div style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:600,marginBottom:"5px"}}>{s.name}</div>
              <p style={{fontSize:"11px",color:"var(--muted)",lineHeight:1.5}}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"var(--bg2)",borderTop:"1px solid var(--border)",padding:"40px 20px"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"28px"}}>
          <div>
            <div style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:800,letterSpacing:".12em",background:"linear-gradient(135deg,#fff,var(--accent2))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:"6px"}}>STARPRINZ</div>
            <div style={{fontSize:"13px",color:"var(--muted)"}}>Powering the next generation of digital experiences.</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"}}>
            {[["Sportified","/sportified"],["Studio","/studio"],["CBT","/cbt"],["GitHub","https://github.com/starprinze/starprinz"]].map(([l,h])=>(
              <a key={l} href={h} style={{fontSize:"13px",color:"var(--muted)",textDecoration:"none",padding:"2px 0",transition:"color .2s"}}
                onMouseEnter={e=>((e.target as HTMLElement).style.color="var(--text)")}
                onMouseLeave={e=>((e.target as HTMLElement).style.color="var(--muted)")}>{l}</a>
            ))}
          </div>
          <div style={{fontSize:"12px",color:"var(--muted2)",paddingTop:"16px",borderTop:"1px solid var(--border)"}}>© 2025 Starprinz. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
