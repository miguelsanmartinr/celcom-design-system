function Dashboard() {
  const kpis = [
    { icon:"sms",   label:"SMS enviados",    value:"47.320", delta:"12%", up:true },
    { icon:"chat",  label:"Conversaciones",  value:"8.941",  delta:"8%",  up:true },
    { icon:"mail",  label:"Emails entregados",value:"23.100",delta:"3%",  up:false },
    { icon:"bot",   label:"Chatbot hits",    value:"11.500", delta:"21%", up:true },
  ];
  const Ic = ({ name }) => {
    const p = {
      sms: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
      chat:<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>,
      mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
      bot: <><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4M8 14h.01M16 14h.01M9 18h6"/></>,
    };
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A4A6B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{p[name]}</svg>;
  };

  const meters = [
    { label:"SMS Masivo",      used:43200, total:50000, unit:"mensajes",        warn:true },
    { label:"WhatsApp API",    used:6800,  total:10000, unit:"conversaciones" },
    { label:"Email Marketing", used:12000, total:50000, unit:"envíos" },
  ];

  const statuses = [
    { name:"SMS Gateway",      status:"online" },
    { name:"WhatsApp API",     status:"online" },
    { name:"Email Server",     status:"degraded" },
    { name:"Chatbot Engine",   status:"online" },
    { name:"API Pública",      status:"offline" },
  ];

  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      {/* Subtle trial banner */}
      <div style={{ background:"#fff", border:"1px solid #EEF1F6", borderRadius:12, padding:"14px 20px", marginBottom:24, display:"flex", alignItems:"center", gap:14 }}>
        <div style={{ width:36, height:36, borderRadius:9, background:"#FFF7E0", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CC9200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div style={{ flex:1 }}>
          <p style={{ fontWeight:600, color:"#0D1B33", fontSize:13, margin:"0 0 1px" }}>Tu prueba gratuita vence en 5 días</p>
          <p style={{ fontSize:12, color:"#7A8EAD", margin:0 }}>Actualiza para mantener tus flujos de comunicación activos.</p>
        </div>
        <button style={{ background:"transparent", color:"#0057B8", border:"1px solid #EEF1F6", padding:"7px 14px", borderRadius:7, fontWeight:600, fontSize:12, cursor:"pointer", fontFamily:"Inter" }}>Actualizar plan</button>
      </div>

      {/* KPIs — flat cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:14, marginBottom:24 }}>
        {kpis.map((k,i) => (
          <div key={i} style={{ background:"#fff", borderRadius:12, padding:"18px 20px", border:"1px solid #EEF1F6" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
              <Ic name={k.icon} />
              <span style={{ fontSize:12, color:"#7A8EAD" }}>{k.label}</span>
            </div>
            <div style={{ display:"flex", alignItems:"baseline", gap:8 }}>
              <p style={{ fontFamily:"Poppins", fontSize:26, fontWeight:700, color:"#0D1B33", margin:0, letterSpacing:"-0.02em" }}>{k.value}</p>
              <span style={{ fontSize:11, fontWeight:600, color: k.up ? "#15803D" : "#B91C1C", display:"inline-flex", alignItems:"center", gap:2 }}>
                {k.up ? "↑" : "↓"} {k.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Usage + status */}
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:16 }}>
        <div style={{ background:"#fff", borderRadius:12, padding:"22px 24px", border:"1px solid #EEF1F6" }}>
          <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:18 }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:0 }}>Consumo del plan</h3>
            <span style={{ fontSize:11, color:"#9AACC8" }}>Abril 2026</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {meters.map((m,i) => {
              const pct = Math.round(m.used/m.total*100);
              const color = m.warn ? "#D97706" : "#0057B8";
              return (
                <div key={i}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                    <span style={{ fontSize:13, fontWeight:500, color:"#0D1B33" }}>{m.label}</span>
                    <span style={{ fontSize:11, color:"#7A8EAD", fontFeatureSettings:"'tnum'" }}>{m.used.toLocaleString()} / {m.total.toLocaleString()} {m.unit}</span>
                  </div>
                  <div style={{ background:"#F4F6FB", borderRadius:9999, height:5, overflow:"hidden" }}>
                    <div style={{ width:`${pct}%`, height:"100%", background:color, borderRadius:9999 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ background:"#fff", borderRadius:12, padding:"22px 24px", border:"1px solid #EEF1F6" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:"0 0 14px" }}>Estado del sistema</h3>
          {statuses.map((s,i) => {
            const labels = { online:"Online", degraded:"Degradado", offline:"Offline" };
            const colors = { online:"#15803D", degraded:"#D97706", offline:"#B91C1C" };
            const c = colors[s.status];
            return (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"9px 0", borderBottom: i<4?"1px solid #F4F6FB":"none" }}>
                <span style={{ fontSize:12, color:"#3A4A6B" }}>{s.name}</span>
                <span style={{ fontSize:11, color:c, display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:c }} />
                  {labels[s.status]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

window.CelcomDashboard = Dashboard;
