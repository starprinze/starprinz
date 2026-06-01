"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const students = [
  {initials:"AO",name:"Amara Okafor",score:92,grade:"A",status:"Completed"},
  {initials:"CN",name:"Chidi Nwachukwu",score:78,grade:"B",status:"Completed"},
  {initials:"ZM",name:"Zainab Musa",score:85,grade:"A",status:"Completed"},
  {initials:"EE",name:"Emeka Eze",score:61,grade:"C",status:"In Progress"},
  {initials:"FI",name:"Fatima Ibrahim",score:0,grade:"—",status:"Pending"},
];

export default function CBTPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selected, setSelected] = useState<number|null>(1);

  return (
    <div style={{background:"var(--bg)",color:"var(--text)",fontFamily:"var(--font-body)",minHeight:"100vh"}}>
      {/* Nav */}
      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",height:"56px",background:"rgba(6,6,8,.95)",borderBottom:"1px solid var(--border)",backdropFilter:"blur(16px)",position:"sticky",top:0,zIndex:100}}>
        <Link href="/" style={{fontSize:"13px",color:"var(--muted)",textDecoration:"none"}}>← Home</Link>
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <div style={{width:"7px",height:"7px",borderRadius:"50%",background:"var(--gold)",boxShadow:"0 0 8px var(--gold)"}}/>
          <span style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:700,letterSpacing:".05em"}}>CBT EXAM</span>
        </div>
        <button style={{padding:"6px 12px",borderRadius:"8px",fontSize:"12px",fontWeight:600,cursor:"pointer",background:"var(--gold)",border:"none",color:"#412402"}}>Create</button>
      </nav>

      {/* Hero */}
      <div style={{background:"linear-gradient(135deg,#1a160a,#2d2308,#1a1a0a)",borderBottom:"1px solid var(--border)",padding:"32px 20px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",width:"300px",height:"200px",background:"radial-gradient(ellipse,rgba(232,185,79,.12) 0%,transparent 70%)",top:"-40px",right:"-40px",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{fontSize:"10px",fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"8px"}}>Digital Assessment Platform</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(26px,7vw,48px)",fontWeight:800,letterSpacing:"-.02em",lineHeight:1.08,marginBottom:"10px"}}>Smarter exams.<br/>Clearer outcomes.</h1>
          <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.65,marginBottom:"20px",maxWidth:"480px"}}>Online exams, dashboards, results and analytics for institutions that demand reliability.</p>
          <div style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
            {[["3,204","Sessions"],["98","Schools"],["12,500","Students"]].map(([v,l])=>(
              <div key={l}><div style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--gold)"}}>{v}</div><div style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".06em",textTransform:"uppercase",marginTop:"2px"}}>{l}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{background:"var(--bg2)",borderBottom:"1px solid var(--border)",display:"flex",overflowX:"auto",scrollbarWidth:"none",padding:"0 8px"}}>
        {[["dashboard","⊟ Dashboard"],["exam","◈ Live Exam"],["results","▦ Results"]].map(([id,label])=>(
          <button key={id} onClick={()=>setActiveTab(id)} style={{padding:"13px 16px",background:"transparent",border:"none",borderBottom:`2px solid ${activeTab===id?"var(--gold)":"transparent"}`,color:activeTab===id?"var(--text)":"var(--muted)",fontSize:"13px",fontWeight:activeTab===id?500:400,cursor:"pointer",whiteSpace:"nowrap",transition:"color .2s"}}>
            {label}
          </button>
        ))}
      </div>

      <div style={{padding:"20px"}}>

        {/* DASHBOARD */}
        {activeTab==="dashboard" && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.3}}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",marginBottom:"20px"}}>
              {[
                {label:"Active Exams",value:"8",sub:"● Running now",color:"var(--coral)"},
                {label:"Avg Score",value:"74%",sub:"↑ 3% this term",color:"var(--text)"},
                {label:"Pass Rate",value:"88%",sub:"↑ 5% vs last",color:"var(--green)"},
                {label:"Pending",value:"42",sub:"Submissions",color:"var(--gold)"},
              ].map(s=>(
                <div key={s.label} style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",padding:"14px"}}>
                  <div style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".07em",textTransform:"uppercase",marginBottom:"6px"}}>{s.label}</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:s.color}}>{s.value}</div>
                  <div style={{fontSize:"11px",color:"var(--green)",marginTop:"4px"}}>{s.sub}</div>
                </div>
              ))}
            </div>

            <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden"}}>
              <div style={{padding:"14px 16px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"13px",fontWeight:600}}>Student Results</span>
                <button style={{fontSize:"11px",padding:"5px 10px",borderRadius:"6px",background:"rgba(232,185,79,.12)",border:"1px solid rgba(232,185,79,.25)",color:"var(--gold)",cursor:"pointer"}}>↓ Export</button>
              </div>
              {students.map(s=>(
                <div key={s.name} style={{display:"flex",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid var(--border)",gap:"10px"}}>
                  <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"rgba(232,185,79,.12)",border:"1px solid rgba(232,185,79,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,color:"var(--gold)",fontFamily:"var(--font-display)",flexShrink:0}}>{s.initials}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:"13px",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.name}</div>
                    <div style={{marginTop:"4px",display:"flex",alignItems:"center",gap:"6px"}}>
                      <div style={{width:"60px",height:"3px",borderRadius:"99px",background:"var(--border)",overflow:"hidden"}}>
                        <div style={{width:`${s.score}%`,height:"100%",background:s.score>=80?"var(--green)":s.score>=60?"var(--gold)":"var(--coral)",borderRadius:"99px"}}/>
                      </div>
                      <span style={{fontSize:"11px",fontWeight:600,color:s.score>=80?"var(--green)":s.score>=60?"var(--gold)":s.score>0?"var(--coral)":"var(--muted)"}}>{s.score>0?`${s.score}%`:"—"}</span>
                    </div>
                  </div>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"15px",fontWeight:700,color:s.grade==="A"?"var(--green)":s.grade==="B"?"var(--teal)":s.grade==="C"?"var(--gold)":"var(--muted)",flexShrink:0}}>{s.grade}</span>
                  <span style={{fontSize:"10px",padding:"3px 7px",borderRadius:"99px",color:s.status==="Completed"?"var(--green)":s.status==="In Progress"?"var(--gold)":"var(--muted)",background:s.status==="Completed"?"rgba(74,222,128,.1)":s.status==="In Progress"?"rgba(232,185,79,.1)":"rgba(255,255,255,.04)",border:`1px solid ${s.status==="Completed"?"rgba(74,222,128,.2)":s.status==="In Progress"?"rgba(232,185,79,.2)":"var(--border)"}`,whiteSpace:"nowrap",flexShrink:0}}>{s.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* LIVE EXAM */}
        {activeTab==="exam" && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.3}}>
            {/* Header */}
            <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",padding:"16px",marginBottom:"16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <div style={{fontFamily:"var(--font-display)",fontSize:"14px",fontWeight:600}}>Data Structures & Algorithms</div>
                <div style={{fontSize:"11px",color:"var(--muted)",marginTop:"3px"}}>Question 1 of 30 · Section A</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--gold)"}}>29:14</div>
                <div style={{fontSize:"10px",color:"var(--muted)"}}>Remaining</div>
              </div>
            </div>

            {/* Progress */}
            <div style={{height:"4px",background:"var(--border)",borderRadius:"99px",marginBottom:"20px",overflow:"hidden"}}>
              <div style={{width:"3.3%",height:"100%",background:"linear-gradient(90deg,var(--gold),rgba(232,185,79,.5))",borderRadius:"99px"}}/>
            </div>

            {/* Question */}
            <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",padding:"20px",marginBottom:"16px"}}>
              <div style={{fontSize:"10px",color:"var(--gold)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:"12px"}}>Question 1</div>
              <p style={{fontSize:"15px",fontWeight:500,lineHeight:1.6,marginBottom:"20px"}}>Which data structure uses LIFO (Last In, First Out) order?</p>
              <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                {["Queue","Stack","Linked List","Binary Tree"].map((opt,i)=>(
                  <button key={opt} onClick={()=>setSelected(i)}
                    style={{padding:"13px 16px",background:selected===i?"rgba(232,185,79,.1)":"var(--surface2)",border:`1px solid ${selected===i?"rgba(232,185,79,.4)":"var(--border)"}`,borderRadius:"10px",color:selected===i?"var(--gold)":"var(--text)",fontSize:"14px",textAlign:"left",cursor:"pointer",fontFamily:"var(--font-body)",display:"flex",alignItems:"center",gap:"12px",transition:"all .15s",width:"100%"}}>
                    <div style={{width:"24px",height:"24px",borderRadius:"50%",border:`2px solid ${selected===i?"var(--gold)":"var(--border2)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:600,color:selected===i?"var(--gold)":"var(--muted)",flexShrink:0}}>
                      {String.fromCharCode(65+i)}
                    </div>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div style={{display:"flex",gap:"10px"}}>
              <button style={{flex:1,padding:"13px",background:"transparent",border:"1px solid var(--border2)",borderRadius:"10px",color:"var(--muted)",fontSize:"13px",cursor:"pointer",fontFamily:"var(--font-body)"}}>← Previous</button>
              <button style={{flex:1,padding:"13px",background:"var(--gold)",border:"none",borderRadius:"10px",color:"#412402",fontSize:"13px",fontWeight:600,cursor:"pointer",fontFamily:"var(--font-body)"}}>Next →</button>
            </div>
          </motion.div>
        )}

        {/* RESULTS */}
        {activeTab==="results" && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{textAlign:"center",padding:"60px 20px"}}>
            <div style={{fontSize:"48px",marginBottom:"16px"}}>▦</div>
            <h2 style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,marginBottom:"10px"}}>Analytics Dashboard</h2>
            <p style={{fontSize:"14px",color:"var(--muted)"}}>Full class-wide performance reports, item analysis, and export — coming soon.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
