"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"calc(var(--nav-h) + 48px) 20px 60px",overflow:"hidden"}}>
      {/* Orbs */}
      <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0}}>
        <div style={{position:"absolute",width:"min(600px,120vw)",height:"min(600px,120vw)",borderRadius:"50%",background:"radial-gradient(circle,rgba(123,110,246,.35) 0%,transparent 70%)",top:"-20%",left:"50%",transform:"translateX(-50%)",filter:"blur(60px)",animation:"pulseOrb 7s ease-in-out infinite"}}/>
        <div style={{position:"absolute",width:"min(350px,80vw)",height:"min(350px,80vw)",borderRadius:"50%",background:"radial-gradient(circle,rgba(45,212,191,.18) 0%,transparent 70%)",bottom:0,left:"-10%",filter:"blur(60px)",animation:"pulseOrb 6s 2s ease-in-out infinite"}}/>
        <div style={{position:"absolute",width:"min(280px,70vw)",height:"min(280px,70vw)",borderRadius:"50%",background:"radial-gradient(circle,rgba(232,185,79,.12) 0%,transparent 70%)",bottom:"10%",right:"-10%",filter:"blur(60px)",animation:"pulseOrb 8s 4s ease-in-out infinite"}}/>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",backgroundSize:"48px 48px",maskImage:"radial-gradient(ellipse 80% 60% at 50% 50%,black 20%,transparent 80%)",WebkitMaskImage:"radial-gradient(ellipse 80% 60% at 50% 50%,black 20%,transparent 80%)"}}/>
      </div>

      {/* Badge */}
      <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7}}
        style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 14px",border:"1px solid rgba(123,110,246,.3)",borderRadius:"100px",fontSize:"11px",fontWeight:500,color:"var(--accent2)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:"24px",background:"rgba(123,110,246,.08)",position:"relative",zIndex:1}}>
        <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--accent2)",display:"inline-block",animation:"blink 2s ease-in-out infinite"}}/>
        AI Ecosystem — Live
      </motion.div>

      {/* Headline */}
      <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}}
        style={{fontFamily:"var(--font-display)",fontSize:"clamp(36px,9vw,80px)",fontWeight:800,lineHeight:1.05,letterSpacing:"-.025em",position:"relative",zIndex:1,maxWidth:"min(860px,95vw)"}}>
        <span style={{background:"linear-gradient(135deg,#fff 30%,var(--accent2) 65%,var(--teal) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
          Powering the next generation
        </span>
        <br/>of digital experiences.
      </motion.h1>

      {/* Sub */}
      <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.2}}
        style={{fontSize:"clamp(14px,4vw,17px)",fontWeight:300,color:"var(--muted)",maxWidth:"min(540px,90vw)",margin:"20px auto 0",lineHeight:1.75,position:"relative",zIndex:1}}>
        AI-native systems for creators, sports organisations, and education — connected by one powerful infrastructure.
      </motion.p>

      {/* CTAs */}
      <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.3}}
        style={{display:"flex",flexDirection:"column",gap:"12px",marginTop:"36px",position:"relative",zIndex:1,width:"100%",maxWidth:"min(320px,90vw)"}}>
        <button style={{padding:"14px 24px",background:"var(--accent)",color:"#fff",fontSize:"14px",fontWeight:600,borderRadius:"12px",border:"none",cursor:"pointer",letterSpacing:".03em",boxShadow:"0 0 40px rgba(123,110,246,.4)",transition:"all .2s",width:"100%"}}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";(e.currentTarget as HTMLElement).style.boxShadow="0 0 60px rgba(123,110,246,.55)"}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="0 0 40px rgba(123,110,246,.4)"}}>
          Explore Ecosystem
        </button>
        <button style={{padding:"13px 24px",background:"transparent",color:"var(--text)",fontSize:"14px",fontWeight:500,borderRadius:"12px",border:"1px solid var(--border2)",cursor:"pointer",letterSpacing:".03em",transition:"all .2s",width:"100%"}}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--accent)";(e.currentTarget as HTMLElement).style.color="var(--accent2)"}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border2)";(e.currentTarget as HTMLElement).style.color="var(--text)"}}>
          View Products →
        </button>
      </motion.div>

      {/* Dashboard preview */}
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.45}}
        style={{position:"relative",zIndex:1,marginTop:"56px",width:"100%",maxWidth:"min(860px,95vw)"}}>
        <div style={{background:"var(--bg2)",border:"1px solid var(--border2)",borderRadius:"16px",overflow:"hidden",boxShadow:"0 0 80px rgba(123,110,246,.12)"}}>
          <div style={{display:"flex",alignItems:"center",gap:"6px",padding:"10px 14px",borderBottom:"1px solid var(--border)",background:"var(--surface)"}}>
            {["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{width:"10px",height:"10px",borderRadius:"50%",background:c}}/>)}
            <span style={{fontSize:"11px",color:"var(--muted)",marginLeft:"6px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>starprinz.com — Ecosystem Overview</span>
          </div>
          <div style={{padding:"14px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"10px"}}>
            {[
              {label:"Active Tournaments",value:"128",sub:"↑ 24 this week",pct:"72%"},
              {label:"AI Designs Generated",value:"9,410",sub:"↑ 1.2k today",pct:"88%"},
              {label:"Exam Sessions",value:"3,204",sub:"↑ 340 today",pct:"55%"},
            ].map(s=>(
              <div key={s.label} style={{background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:"10px",padding:"12px"}}>
                <div style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase",marginBottom:"6px"}}>{s.label}</div>
                <div style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:700}}>{s.value}</div>
                <div style={{fontSize:"11px",color:"var(--green)",marginTop:"4px"}}>{s.sub}</div>
                <div style={{marginTop:"8px",height:"3px",borderRadius:"99px",background:"var(--border)",overflow:"hidden"}}>
                  <div style={{width:s.pct,height:"100%",background:"linear-gradient(90deg,var(--accent),var(--teal))",borderRadius:"99px"}}/>
                </div>
              </div>
            ))}
            <div style={{gridColumn:"1/-1",background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:"10px",padding:"12px"}}>
              <div style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase",marginBottom:"8px"}}>Active Products</div>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                {["Sportified","Studio — AI","Studio — Video","CBT Exam","+ More"].map((t,i)=>(
                  <span key={t} style={{fontSize:"11px",padding:"3px 9px",borderRadius:"99px",background:"rgba(123,110,246,.12)",color:"var(--accent2)",border:"1px solid rgba(123,110,246,.2)",opacity:i===4?.5:1}}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
