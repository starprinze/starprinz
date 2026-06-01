"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:200,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"0 16px",height:"var(--nav-h)",
        background: scrolled ? "rgba(6,6,8,0.95)" : "rgba(6,6,8,0.6)",
        backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
        borderBottom:"1px solid var(--border)",transition:"background .3s"
      }}>
        <Link href="/" style={{textDecoration:"none"}} onClick={()=>setMenuOpen(false)}>
          <span style={{fontFamily:"var(--font-display)",fontSize:"16px",fontWeight:800,letterSpacing:".1em",background:"linear-gradient(135deg,#fff,var(--accent2))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
            STARPRINZ
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{display:"flex",gap:"28px",listStyle:"none",margin:0,padding:0}} className="desktop-nav">
          {[["/#ecosystem","Ecosystem"],["/#products","Products"],["/#vision","Vision"],["/#stack","Stack"]].map(([h,l])=>(
            <li key={l}><Link href={h} style={{fontSize:"13px",color:"var(--muted)",textDecoration:"none",letterSpacing:".04em",transition:"color .2s"}}
              onMouseEnter={e=>((e.target as HTMLElement).style.color="var(--text)")}
              onMouseLeave={e=>((e.target as HTMLElement).style.color="var(--muted)")}>{l}</Link></li>
          ))}
        </ul>

        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <button style={{fontSize:"12px",fontWeight:500,color:"var(--text)",background:"var(--surface2)",border:"1px solid var(--border2)",padding:"7px 16px",borderRadius:"8px",cursor:"pointer",letterSpacing:".03em",whiteSpace:"nowrap"}}>
            Get Access
          </button>
          {/* Hamburger */}
          <button onClick={()=>setMenuOpen(o=>!o)}
            style={{display:"flex",flexDirection:"column",gap:"5px",padding:"6px",background:"transparent",border:"none",cursor:"pointer",zIndex:201}}
            className="hamburger">
            {[0,1,2].map(i=>(
              <span key={i} style={{display:"block",width:"20px",height:"2px",background:"var(--text)",borderRadius:"2px",transition:"all .25s",
                transform: menuOpen ? (i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"scaleX(0)") : "none",
                opacity: menuOpen && i===1 ? 0 : 1
              }}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{position:"fixed",inset:0,zIndex:199,background:"rgba(6,6,8,0.98)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px"}}>
          {[["/#ecosystem","Ecosystem"],["/#products","Products"],["/#vision","Vision"],["/#stack","Stack"],["/sportified","Sportified"],["/studio","Studio"],["/cbt","CBT Exam"]].map(([h,l])=>(
            <Link key={l} href={h} onClick={()=>setMenuOpen(false)}
              style={{fontSize:"28px",fontFamily:"var(--font-display)",fontWeight:700,color:"var(--text)",textDecoration:"none",padding:"12px 24px",letterSpacing:"-.01em",transition:"color .15s"}}
              onMouseEnter={e=>((e.target as HTMLElement).style.color="var(--accent2)")}
              onMouseLeave={e=>((e.target as HTMLElement).style.color="var(--text)")}>
              {l}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .hamburger { display: flex !important; }
        .desktop-nav { display: none !important; }
        @media(min-width:768px){
          .desktop-nav { display: flex !important; }
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
