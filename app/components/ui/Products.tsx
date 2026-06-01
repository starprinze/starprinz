"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {slug:"sportified",category:"Sports & Events",name:"Sportified",desc:"Complete tournament OS — fixtures, live standings, team profiles, match schedules and event media.",color:"var(--teal)",colorDim:"rgba(45,212,191,.12)",colorBorder:"rgba(45,212,191,.25)",icon:"⚡",bg:"linear-gradient(135deg,#0a1a1a,#0d2d2d,#0a1f1f)",bars:["80%","55%","92%"],barColor:"linear-gradient(90deg,var(--teal),rgba(45,212,191,.4))"},
  {slug:"studio",category:"AI Creative Suite",name:"Studio",desc:"AI graphic generator and cinematic video builder. Prompt to broadcast-quality poster in seconds.",color:"var(--accent2)",colorDim:"rgba(123,110,246,.12)",colorBorder:"rgba(123,110,246,.25)",icon:"✦",bg:"linear-gradient(135deg,#0d0a1a,#1a0d2d,#0d0a20)",bars:["65%","90%","45%"],barColor:"linear-gradient(90deg,var(--accent),rgba(167,139,250,.4))"},
  {slug:"cbt",category:"Education Tech",name:"CBT Exam",desc:"Digital assessment platform — online exams, practice tests, dashboards, results and deep analytics.",color:"var(--gold)",colorDim:"rgba(232,185,79,.12)",colorBorder:"rgba(232,185,79,.25)",icon:"◈",bg:"linear-gradient(135deg,#1a160a,#2d2308,#1a1a0a)",bars:["70%","40%","85%"],barColor:"linear-gradient(90deg,var(--gold),rgba(232,185,79,.4))"},
];

export default function Products() {
  return (
    <section id="products" style={{padding:"80px 20px",background:"var(--bg2)"}}>
      <div style={{textAlign:"center",marginBottom:"48px"}}>
        <div style={{fontSize:"11px",fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--accent2)",marginBottom:"12px"}}>Products</div>
        <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(28px,7vw,48px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1}}>Three systems.<br/>One ecosystem.</h2>
        <p style={{fontSize:"clamp(13px,4vw,15px)",color:"var(--muted)",maxWidth:"min(480px,90vw)",margin:"14px auto 0",lineHeight:1.7,fontWeight:300}}>Independent, enterprise-grade products — each built to scale, all powered by Starprinz AI infrastructure.</p>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(300px,100%),1fr))",gap:"16px",maxWidth:"1100px",margin:"0 auto"}}>
        {products.map((p,i)=>(
          <motion.div key={p.slug}
            initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:i*.1}}
            whileHover={{y:-4}}
            style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"16px",overflow:"hidden",cursor:"pointer",transition:"border-color .3s,box-shadow .3s"}}
            onHoverStart={e=>{(e.target as HTMLElement).style.borderColor="var(--border2)";(e.target as HTMLElement).style.boxShadow="0 16px 48px rgba(0,0,0,.4)"}}
            onHoverEnd={e=>{(e.target as HTMLElement).style.borderColor="var(--border)";(e.target as HTMLElement).style.boxShadow="none"}}>
            {/* Preview */}
            <div style={{height:"160px",background:p.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 0%,rgba(${p.slug==="sportified"?"45,212,191":p.slug==="studio"?"123,110,246":"232,185,79"},.08) 0%,transparent 70%)`}}/>
              <div style={{width:"44px",height:"44px",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",background:p.colorDim,border:`1px solid ${p.colorBorder}`,color:p.color,zIndex:1}}>{p.icon}</div>
              <div style={{display:"flex",flexDirection:"column",gap:"5px",width:"65%",zIndex:1}}>
                {p.bars.map((w,j)=>(
                  <div key={j} style={{height:"5px",borderRadius:"99px",background:"rgba(255,255,255,.08)",overflow:"hidden"}}>
                    <div style={{width:w,height:"100%",background:p.barColor,borderRadius:"99px"}}/>
                  </div>
                ))}
              </div>
            </div>
            {/* Body */}
            <div style={{padding:"20px"}}>
              <span style={{fontSize:"10px",fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",padding:"3px 10px",borderRadius:"99px",display:"inline-block",marginBottom:"10px",color:p.color,background:p.colorDim,border:`1px solid ${p.colorBorder}`}}>{p.category}</span>
              <h3 style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:700,letterSpacing:"-.01em",marginBottom:"8px"}}>{p.name}</h3>
              <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.6,marginBottom:"18px"}}>{p.desc}</p>
              <Link href={`/${p.slug}`} style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"13px",fontWeight:500,padding:"9px 18px",borderRadius:"8px",border:"1px solid var(--border2)",color:"var(--text)",textDecoration:"none",transition:"all .2s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=p.color;(e.currentTarget as HTMLElement).style.color=p.color}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border2)";(e.currentTarget as HTMLElement).style.color="var(--text)"}}>
                Open Product →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
