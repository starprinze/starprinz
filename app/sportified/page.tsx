"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  {icon:"⊟",label:"Dashboard",active:true},
  {icon:"⊠",label:"Tournaments",badge:"12"},
  {icon:"◫",label:"Fixtures"},
  {icon:"▦",label:"Standings"},
  {icon:"◉",label:"Teams"},
  {icon:"◎",label:"Players"},
  {icon:"▲",label:"Leaderboards"},
  {icon:"▣",label:"Media"},
  {icon:"✦",label:"Predictions"},
];

const fixtures = [
  {home:"FC Horizon",hc:"FH",away:"Atlas United",ac:"AU",score:"2 – 1",live:true,status:"68'"},
  {home:"Storm XI",hc:"SX",away:"Delta FC",ac:"DF",score:"0 – 0",live:true,status:"41'"},
  {home:"Vortex SC",hc:"VS",away:"Iron City",ac:"IC",score:"3 – 2",live:false,status:"FT"},
  {home:"Zenith FC",hc:"ZF",away:"Nova Stars",ac:"NS",score:"1 – 1",live:false,status:"FT"},
];

const standings = [
  {rank:1,code:"FH",name:"FC Horizon",pts:34,gd:"+12",form:["W","W","D","W","W"]},
  {rank:2,code:"AU",name:"Atlas United",pts:29,gd:"+7",form:["W","L","W","W","D"]},
  {rank:3,code:"SX",name:"Storm XI",pts:26,gd:"+4",form:["D","W","W","L","W"]},
  {rank:4,code:"VS",name:"Vortex SC",pts:22,gd:"-2",form:["W","D","L","D","W"]},
];

export default function SportifiedPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("fixtures");

  return (
    <div style={{background:"var(--bg)",color:"var(--text)",fontFamily:"var(--font-body)",minHeight:"100vh"}}>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}`}</style>

      {/* Top Nav */}
      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",height:"56px",background:"rgba(6,6,8,.95)",borderBottom:"1px solid var(--border)",backdropFilter:"blur(16px)",position:"sticky",top:0,zIndex:100}}>
        <Link href="/" style={{fontSize:"13px",color:"var(--muted)",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"}}>← Home</Link>
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <div style={{width:"7px",height:"7px",borderRadius:"50%",background:"var(--teal)",boxShadow:"0 0 8px var(--teal)"}}/>
          <span style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:700,letterSpacing:".05em"}}>SPORTIFIED</span>
        </div>
        <button onClick={()=>setSidebarOpen(o=>!o)} style={{padding:"6px 12px",borderRadius:"8px",fontSize:"12px",fontWeight:600,cursor:"pointer",background:"var(--teal)",border:"none",color:"#04342C"}}>Menu</button>
      </nav>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div style={{position:"fixed",inset:0,zIndex:200,display:"flex"}}>
          <div style={{width:"260px",background:"var(--bg2)",borderRight:"1px solid var(--border)",padding:"16px 0",overflowY:"auto"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px 16px",borderBottom:"1px solid var(--border)",marginBottom:"12px"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:700}}>Navigation</span>
              <button onClick={()=>setSidebarOpen(false)} style={{background:"transparent",border:"none",color:"var(--muted)",fontSize:"20px",cursor:"pointer",lineHeight:1}}>×</button>
            </div>
            {navItems.map(item=>(
              <div key={item.label} onClick={()=>setSidebarOpen(false)} style={{display:"flex",alignItems:"center",gap:"10px",padding:"11px 16px",fontSize:"14px",color:item.active?"var(--teal)":"var(--muted)",cursor:"pointer",background:item.active?"rgba(45,212,191,.08)":"transparent"}}>
                <span>{item.icon}</span>{item.label}
                {item.badge&&<span style={{marginLeft:"auto",fontSize:"10px",padding:"2px 7px",borderRadius:"99px",background:"rgba(45,212,191,.12)",color:"var(--teal)",border:"1px solid rgba(45,212,191,.25)"}}>{item.badge}</span>}
              </div>
            ))}
          </div>
          <div onClick={()=>setSidebarOpen(false)} style={{flex:1,background:"rgba(0,0,0,.6)"}}/>
        </div>
      )}

      {/* Hero band */}
      <div style={{background:"linear-gradient(135deg,#050e0e,#081a1a,#060e10)",borderBottom:"1px solid var(--border)",padding:"32px 20px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",width:"300px",height:"200px",background:"radial-gradient(ellipse,rgba(45,212,191,.12) 0%,transparent 70%)",top:"-40px",left:"-40px",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--teal)",marginBottom:"8px"}}>Tournament OS</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(26px,7vw,48px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.08,marginBottom:"10px"}}>Run every competition.<br/>Own every moment.</h1>
          <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.65,marginBottom:"20px",maxWidth:"480px"}}>From fixture generation to live standings, team profiles, and event media.</p>
          <div style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
            {[["128","Tournaments"],["4,210","Teams"],["892","Matches"]].map(([v,l])=>(
              <div key={l}><div style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--teal)"}}>{v}</div><div style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase",marginTop:"2px"}}>{l}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",display:"flex",overflowX:"auto",scrollbarWidth:"none",padding:"0 8px"}}>
        {[["fixtures","Fixtures"],["standings","Standings"],["predict","AI Predict"],["features","Features"]].map(([id,label])=>(
          <button key={id} onClick={()=>setActiveTab(id)} style={{padding:"13px 16px",background:"transparent",border:"none",borderBottom:`2px solid ${activeTab===id?"var(--teal)":"transparent"}`,color:activeTab===id?"var(--text)":"var(--muted)",fontSize:"13px",fontWeight:activeTab===id?500:400,cursor:"pointer",whiteSpace:"nowrap",transition:"color .2s"}}>
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{padding:"20px"}}>

        {/* Stats */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",marginBottom:"20px"}}>
          {[
            {label:"Live Matches",value:"6",sub:"● Broadcasting",color:"var(--coral)"},
            {label:"Teams Active",value:"248",sub:"↑ 14 this week",color:"var(--text)"},
            {label:"Goals Today",value:"317",sub:"↑ 42 from last",color:"var(--text)"},
            {label:"Completion",value:"94%",sub:"↑ 3% vs last",color:"var(--green)"},
          ].map(s=>(
            <motion.div key={s.label} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.4}}
              style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",padding:"14px"}}>
              <div style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".07em",textTransform:"uppercase",marginBottom:"6px"}}>{s.label}</div>
              <div style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:s.color}}>{s.value}</div>
              <div style={{fontSize:"11px",color:"var(--green)",marginTop:"4px"}}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* FIXTURES TAB */}
        {activeTab==="fixtures" && (
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden"}}>
            <div style={{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:600}}>Live Fixtures</span>
              <span style={{fontSize:"11px",color:"var(--muted)"}}>View all →</span>
            </div>
            {fixtures.map(f=>(
              <div key={f.home} style={{display:"flex",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid var(--border)",gap:"8px"}}>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"12px",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.home}</div>
                  <div style={{fontSize:"10px",color:"var(--muted)",marginTop:"2px"}}>{f.hc}</div>
                </div>
                <div style={{textAlign:"center",flexShrink:0,minWidth:"80px"}}>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:700}}>{f.score}</div>
                  <span style={{fontSize:"9px",padding:"2px 6px",borderRadius:"99px",color:f.live?"var(--coral)":"var(--muted)",background:f.live?"rgba(249,113,104,.1)":"rgba(255,255,255,.04)",border:`1px solid ${f.live?"rgba(249,113,104,.2)":"var(--border)"}`,whiteSpace:"nowrap"}}>
                    {f.live?`● ${f.status}`:f.status}
                  </span>
                </div>
                <div style={{flex:1,minWidth:0,textAlign:"right"}}>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"12px",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.away}</div>
                  <div style={{fontSize:"10px",color:"var(--muted)",marginTop:"2px"}}>{f.ac}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STANDINGS TAB */}
        {activeTab==="standings" && (
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden"}}>
            <div style={{padding:"14px 16px",borderBottom:"1px solid var(--border)"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:600}}>League Standings</span>
            </div>
            {standings.map(s=>(
              <div key={s.name} style={{display:"flex",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid var(--border)",gap:"10px"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"13px",fontWeight:700,width:"18px",color:s.rank===1?"var(--gold)":"var(--muted)"}}>{s.rank}</span>
                <div style={{width:"28px",height:"28px",borderRadius:"7px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:700,fontFamily:"var(--font-display)",background:"rgba(45,212,191,.12)",color:"var(--teal)",border:"1px solid rgba(45,212,191,.2)",flexShrink:0}}>{s.code}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:"13px",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.name}</div>
                  <div style={{display:"flex",gap:"3px",marginTop:"3px"}}>
                    {s.form.map((f,i)=><div key={i} style={{width:"7px",height:"7px",borderRadius:"50%",background:f==="W"?"var(--teal)":f==="L"?"var(--coral)":"var(--muted2)"}}/>)}
                  </div>
                </div>
                <div style={{textAlign:"right",flexShrink:0}}>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:700,color:s.rank===1?"var(--teal)":"var(--text)"}}>{s.pts}</div>
                  <div style={{fontSize:"10px",color:s.gd.startsWith("+")?"var(--green)":"var(--coral)"}}>{s.gd} GD</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI PREDICTION TAB */}
        {activeTab==="predict" && (
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden"}}>
            <div style={{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:600}}>AI Match Prediction</span>
              <span style={{fontSize:"11px",color:"var(--accent2)",fontWeight:500}}>✦ AI</span>
            </div>
            <div style={{padding:"20px"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"}}>
                <div style={{textAlign:"center"}}>
                  <div style={{width:"44px",height:"44px",borderRadius:"10px",background:"rgba(45,212,191,.15)",border:"1px solid rgba(45,212,191,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:700,color:"var(--teal)",fontFamily:"var(--font-display)",margin:"0 auto 6px"}}>FH</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"13px",fontWeight:600}}>FC Horizon</div>
                  <div style={{fontSize:"11px",color:"var(--muted)"}}>1st Place</div>
                </div>
                <div style={{fontSize:"13px",color:"var(--muted2)",letterSpacing:".1em"}}>VS</div>
                <div style={{textAlign:"center"}}>
                  <div style={{width:"44px",height:"44px",borderRadius:"10px",background:"rgba(232,185,79,.15)",border:"1px solid rgba(232,185,79,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:700,color:"var(--gold)",fontFamily:"var(--font-display)",margin:"0 auto 6px"}}>AU</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"13px",fontWeight:600}}>Atlas United</div>
                  <div style={{fontSize:"11px",color:"var(--muted)"}}>2nd Place</div>
                </div>
              </div>
              <div style={{marginBottom:"16px"}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"var(--muted)",marginBottom:"6px"}}><span>64% Win</span><span>36% Win</span></div>
                <div style={{height:"8px",borderRadius:"99px",background:"var(--border)",overflow:"hidden"}}>
                  <div style={{width:"64%",height:"100%",background:"linear-gradient(90deg,var(--teal),rgba(45,212,191,.5))",borderRadius:"99px"}}/>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px"}}>
                {[["Home Win","1.55","var(--teal)"],["Draw","3.20","var(--text)"],["Away Win","4.80","var(--text)"]].map(([l,v,c])=>(
                  <div key={l} style={{textAlign:"center",background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:"8px",padding:"10px 0"}}>
                    <div style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase"}}>{l}</div>
                    <div style={{fontFamily:"var(--font-display)",fontSize:"18px",fontWeight:700,marginTop:"4px",color:c}}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FEATURES TAB */}
        {activeTab==="features" && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(200px,100%),1fr))",gap:"12px"}}>
            {[
              {icon:"⊞",name:"Auto Fixtures",desc:"Round-robin, knockout, and group stage formats generated instantly.",color:"var(--teal)",bg:"rgba(45,212,191,.12)",border:"rgba(45,212,191,.25)"},
              {icon:"◉",name:"Team Profiles",desc:"Rich pages per team — roster, stats, form, media, and history.",color:"var(--accent2)",bg:"rgba(123,110,246,.12)",border:"rgba(123,110,246,.25)"},
              {icon:"▣",name:"Event Gallery",desc:"Auto-tagged media with AI-generated event recaps and highlights.",color:"var(--gold)",bg:"rgba(232,185,79,.12)",border:"rgba(232,185,79,.25)"},
              {icon:"◈",name:"Live Scores",desc:"Realtime updates, live leaderboards, and public shareable links.",color:"var(--coral)",bg:"rgba(249,113,104,.12)",border:"rgba(249,113,104,.25)"},
            ].map(f=>(
              <div key={f.name} style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",padding:"18px"}}>
                <div style={{width:"36px",height:"36px",borderRadius:"9px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",marginBottom:"10px",background:f.bg,border:`1px solid ${f.border}`,color:f.color}}>{f.icon}</div>
                <div style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:600,marginBottom:"5px"}}>{f.name}</div>
                <p style={{fontSize:"12px",color:"var(--muted)",lineHeight:1.5}}>{f.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
