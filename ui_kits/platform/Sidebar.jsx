function Sidebar({ active, onSelect }) {
  const groups = [
    { label: "Principal", items: [
      { icon:"grid",   label:"Dashboard", id:"dashboard" },
      { icon:"send",   label:"Campañas",  id:"campaigns" },
      { icon:"chat",   label:"WhatsApp",  id:"whatsapp", badge:"3" },
      { icon:"mail",   label:"Email",     id:"email" },
      { icon:"bot",    label:"Chatbots",  id:"chatbots" },
    ]},
    { label: "Configuración", items: [
      { icon:"key",    label:"API Keys",    id:"api" },
      { icon:"cog",    label:"Ajustes",     id:"settings" },
      { icon:"card",   label:"Facturación", id:"billing", dot:true },
    ]},
  ];

  const Icon = ({ name, color }) => {
    const common = { width:18, height:18, stroke: color, fill:"none", strokeWidth:1.7, strokeLinecap:"round", strokeLinejoin:"round", viewBox:"0 0 24 24" };
    const paths = {
      grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
      send: <><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></>,
      chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
      mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
      bot:  <><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4M8 14h.01M16 14h.01M9 18h6"/></>,
      key:  <><circle cx="8" cy="15" r="3"/><path d="M10.5 13L21 2.5M17 6l3 3M15 8l2 2"/></>,
      cog:  <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.36.16.68.4.94.71"/></>,
      card: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>,
    };
    return <svg {...common}>{paths[name]}</svg>;
  };

  return (
    <aside style={{ width:232, minHeight:"100vh", background:"#FFFFFF", borderRight:"1px solid #EEF1F6", padding:"20px 12px", display:"flex", flexDirection:"column", gap:4, flexShrink:0 }}>
      {/* Logo */}
      <div style={{ padding:"4px 12px 18px", display:"flex", alignItems:"center", gap:10, borderBottom:"1px solid #F4F6FB", marginBottom:14 }}>
        <img src={(window.__resources && window.__resources.logoApp) || "../../assets/logo-celcom-app.jpg"} style={{ width:30, height:30, borderRadius:7 }} alt=""/>
        <div>
          <p style={{ fontWeight:700, fontSize:15, fontFamily:"Poppins", margin:0, color:"#0D1B33", letterSpacing:"-0.01em" }}>celcom</p>
          <p style={{ color:"#9AACC8", fontSize:10, margin:0, letterSpacing:".06em", textTransform:"uppercase" }}>Plataforma</p>
        </div>
      </div>

      {groups.map(g => (
        <div key={g.label} style={{ marginBottom:12 }}>
          <p style={{ color:"#9AACC8", fontSize:10, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em", padding:"0 12px", margin:"0 0 6px" }}>{g.label}</p>
          {g.items.map(it => {
            const isActive = active === it.id;
            return (
              <button key={it.id} onClick={() => onSelect(it.id)} style={{
                width:"100%", display:"flex", alignItems:"center", gap:10, padding:"8px 12px",
                background: isActive ? "#F4F6FB" : "transparent",
                border:"none", borderRadius:8, cursor:"pointer", textAlign:"left", marginBottom:1,
                position:"relative",
                transition:"background 150ms ease"
              }}
              onMouseEnter={e => { if(!isActive) e.currentTarget.style.background = "#FAFBFD"; }}
              onMouseLeave={e => { if(!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                {isActive && <span style={{ position:"absolute", left:0, top:8, bottom:8, width:3, background:"#0057B8", borderRadius:2 }} />}
                <Icon name={it.icon} color={isActive ? "#0057B8" : "#7A8EAD"} />
                <span style={{ flex:1, fontSize:13, fontWeight: isActive?600:500, color: isActive?"#0D1B33":"#3A4A6B" }}>{it.label}</span>
                {it.badge && <span style={{ background:"#F4F6FB", color:"#3A4A6B", fontSize:10, fontWeight:700, padding:"1px 7px", borderRadius:9999, minWidth:18, textAlign:"center" }}>{it.badge}</span>}
                {it.dot && <span style={{ width:6, height:6, borderRadius:"50%", background:"#FFB800" }} />}
              </button>
            );
          })}
        </div>
      ))}

      {/* Usage mini-widget */}
      <div style={{ marginTop:"auto", padding:"14px", background:"#FAFBFD", border:"1px solid #EEF1F6", borderRadius:10 }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
          <span style={{ fontSize:11, color:"#3A4A6B", fontWeight:600 }}>Plan Pro</span>
          <span style={{ fontSize:10, color:"#7A8EAD" }}>86%</span>
        </div>
        <div style={{ background:"#EEF1F6", borderRadius:9999, height:4, overflow:"hidden", marginBottom:10 }}>
          <div style={{ width:"86%", height:"100%", background:"#0057B8" }} />
        </div>
        <button style={{ width:"100%", background:"#0D1B33", color:"#fff", border:"none", padding:"7px 10px", borderRadius:7, fontWeight:600, fontSize:11, cursor:"pointer", fontFamily:"Inter" }}>Actualizar plan</button>
      </div>

      {/* User */}
      <div style={{ marginTop:12, paddingTop:12, borderTop:"1px solid #F4F6FB", display:"flex", alignItems:"center", gap:10, padding:"12px 10px 2px" }}>
        <div style={{ width:30, height:30, background:"#0057B8", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:"#fff" }}>M</div>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ color:"#0D1B33", fontSize:12, fontWeight:600, margin:0, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>Miguel SM</p>
          <p style={{ color:"#9AACC8", fontSize:10, margin:0 }}>miguel@celcom.cl</p>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AACC8" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </aside>
  );
}

function Topbar({ title, subtitle }) {
  return (
    <div style={{ padding:"20px 32px", background:"#fff", borderBottom:"1px solid #EEF1F6", display:"flex", alignItems:"center", gap:20 }}>
      <div>
        <h1 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:700, color:"#0D1B33", margin:0, letterSpacing:"-0.01em" }}>{title}</h1>
        {subtitle && <p style={{ fontSize:12, color:"#7A8EAD", margin:"2px 0 0" }}>{subtitle}</p>}
      </div>
      <div style={{ marginLeft:"auto", display:"flex", gap:10, alignItems:"center" }}>
        <div style={{ position:"relative" }}>
          <svg style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AACC8" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input placeholder="Buscar…" style={{ padding:"8px 14px 8px 32px", borderRadius:8, border:"1px solid #EEF1F6", fontSize:13, width:240, fontFamily:"Inter", background:"#FAFBFD", color:"#3A4A6B", outline:"none" }} />
        </div>
        <button style={{ background:"#fff", color:"#3A4A6B", border:"1px solid #EEF1F6", width:36, height:36, borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span style={{ position:"absolute", top:7, right:9, width:6, height:6, borderRadius:"50%", background:"#FFB800", border:"1.5px solid #fff" }} />
        </button>
        <button style={{ background:"#0057B8", color:"#fff", border:"none", padding:"9px 16px", borderRadius:8, fontWeight:600, fontSize:13, cursor:"pointer", fontFamily:"Inter", display:"inline-flex", alignItems:"center", gap:6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          Nueva campaña
        </button>
      </div>
    </div>
  );
}

window.CelcomSidebar = Sidebar;
window.CelcomTopbar = Topbar;
