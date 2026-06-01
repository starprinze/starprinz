"use client";
import { motion } from "framer-motion";

const features = [
  {icon:"⚙",title:"Shared AI Infrastructure",desc:"One AI backbone powering graphic generation, video editing, fixture logic, and exam intelligence.",colorDim:"rgba(123,110,246,.12)",colorBorder:"rgba(123,110,246,.25)",color:"var(--accent2)"},
  {icon:"◎",title:"Unified Design System",desc:"Every product speaks the same visual language — tokens, components, and patterns that evolve together.",colorDim:"rgba(45,212,191,.12)",colorBorder:"rgba(45,212,191,.25)",color:"var(--teal)"},
  {icon:"◈",title:"Future-Ready Architecture",desc:"New products plug into existing auth, media, and analytics layers without rebuilding.",colorDim:"rgba(232,185,79,.12)",colorBorder:"rgba(232,185,79,.25)",color:"var(--gold)"},
  {icon:"◆",title:"Clean Product Separation",desc:"Each product is independently deployable and scalable — no tight coupling.",colorDim:"rgba(249,113,104,.12)",colorBorder:"rgba(249,113,104,.25)",color:"var(--coral)"},
];

const ecoProducts = [
  {name:"Sportified",tag:"Tournament OS",dot:"var(--teal)",status:"Live"},
  {name:"Studio",tag:"AI Creative Suite",dot:"var(--accent)",status:"Live"},
  {name:"CBT Exam",tag:"Assessment Platform",dot:"var(--gold)",status:"Live"},
  {name:"Next Product",tag:"Coming Soon",dot:"rgba(255,255,255,.2)",status:"Soon",muted:true},
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" style={{padding:"80px 20px",background:"var(--bg)"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>
          <div style={{fontSize:"11px",fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--accent2)",marginBottom:"12px"}}>Ecosystem Vision</div>
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(28px,7vw,48px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.1,marginBottom:"14px"}}>Built as infrastructure,<br/>not features.</h2>
          <p style={{fontSize:"clamp(13px,4vw,15px)",color:"var(--muted)",lineHeight:1.7,fontWeight:300,maxWidth:"min(480px,100%)"}}>Each product runs independently but inherits a common design language, auth philosophy, and AI backbone.</p>
        </motion.div>

        {/* Diagram — mobile first, full width */}
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.1}}
          style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"16px",padding:"24px",margin:"32px 0"}}>
          <div style={{textAlign:"center",marginBottom:"24px"}}>
            <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"72px",height:"72px",borderRadius:"18px",background:"linear-gradient(135deg,rgba(123,110,246,.2),rgba(45,212,191,.1))",border:"1px solid rgba(123,110,246,.3)",fontFamily:"var(--font-display)",fontSize:"13px",fontWeight:800,letterSpacing:".06em",marginBottom:"10px"}}>SP</div>
            <div style={{fontFamily:"var(--font-display)",fontSize:"17px",fontWeight:700}}>STARPRINZ</div>
            <div style={{fontSize:"11px",color:"var(--muted)",marginTop:"3px"}}>Parent Ecosystem · AI Infrastructure</div>
          </div>
          <hr style={{border:"none",borderTop:"1px dashed rgba(255,255,255,.1)",marginBottom:"20px"}}/>
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            {ecoProducts.map(ep=>(
              <div key={ep.name} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:"10px",opacity:ep.muted?.4:1}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                  <div style={{width:"8px",height:"8px",borderRadius:"50%",background:ep.dot,flexShrink:0}}/>
                  <div>
                    <div style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:600}}>{ep.name}</div>
                    <div style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase"}}>{ep.tag}</div>
                  </div>
                </div>
                <span style={{fontSize:"10px",padding:"3px 9px",borderRadius:"99px",color:ep.muted?"var(--muted)":"var(--green)",background:ep.muted?"var(--surface2)":"rgba(74,222,128,.1)",border:`1px solid ${ep.muted?"var(--border)":"rgba(74,222,128,.2)"}`,letterSpacing:".06em",whiteSpace:"nowrap"}}>{ep.status}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(260px,100%),1fr))",gap:"14px"}}>
          {features.map((f,i)=>(
            <motion.div key={f.title} initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}}
              style={{display:"flex",gap:"14px",alignItems:"flex-start",padding:"18px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",transition:"border-color .2s"}}
              whileHover={{borderColor:"var(--border2)"} as never}>
              <div style={{width:"38px",height:"38px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",flexShrink:0,background:f.colorDim,border:`1px solid ${f.colorBorder}`,color:f.color}}>{f.icon}</div>
              <div>
                <div style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:600,marginBottom:"5px"}}>{f.title}</div>
                <p style={{fontSize:"12px",color:"var(--muted)",lineHeight:1.6}}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
