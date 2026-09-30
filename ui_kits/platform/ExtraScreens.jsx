function EmailMarketing() {
  const campaigns = [
    { name:"Newsletter abril",  subject:"Novedades del mes", sent:"12.000", open:"42.3%", click:"8.1%", status:"Enviada", date:"16 abr" },
    { name:"Promo Otoño",       subject:"Hasta 30% de descuento", sent:"8.400", open:"38.9%", click:"6.2%", status:"Enviada", date:"10 abr" },
    { name:"Bienvenida clientes",subject:"Te damos la bienvenida a Celcom", sent:"2.100", open:"61.0%", click:"14.5%", status:"Activa",  date:"Recurrente" },
    { name:"Encuesta NPS Q1",   subject:"¿Cómo fue tu experiencia?", sent:"—", open:"—", click:"—", status:"Borrador", date:"—" },
  ];
  const stColor = { Enviada:"#15803D", Activa:"#0057B8", Borrador:"#9AACC8" };
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:14, marginBottom:24 }}>
        {[
          { label:"Tasa de apertura", value:"42.3%", hint:"Promedio 30 días" },
          { label:"Tasa de clic",     value:"8.1%",  hint:"↑ 1.4% vs mes pasado" },
          { label:"Rebotes",          value:"1.2%",  hint:"Dentro del rango" },
          { label:"Desuscripciones",  value:"0.3%",  hint:"Saludable" },
        ].map((k,i) => (
          <div key={i} style={{ background:"#fff", borderRadius:12, padding:"18px 20px", border:"1px solid #EEF1F6" }}>
            <p style={{ fontSize:12, color:"#7A8EAD", margin:"0 0 10px" }}>{k.label}</p>
            <p style={{ fontFamily:"Poppins", fontSize:24, fontWeight:700, color:"#0D1B33", margin:0, letterSpacing:"-0.02em" }}>{k.value}</p>
            <p style={{ fontSize:11, color:"#9AACC8", margin:"4px 0 0" }}>{k.hint}</p>
          </div>
        ))}
      </div>
      <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", overflow:"hidden" }}>
        <div style={{ padding:"16px 24px", borderBottom:"1px solid #EEF1F6", display:"flex", alignItems:"center" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:0 }}>Envíos recientes</h3>
          <button style={{ marginLeft:"auto", background:"#0057B8", color:"#fff", border:"none", padding:"7px 14px", borderRadius:7, fontWeight:600, fontSize:12, cursor:"pointer" }}>+ Nuevo envío</button>
        </div>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead><tr style={{ background:"#FAFBFD" }}>
            {["Campaña","Asunto","Enviados","Apertura","Clic","Estado","Fecha"].map(h => <th key={h} style={{ textAlign:"left", padding:"11px 20px", fontSize:11, color:"#7A8EAD", fontWeight:600, textTransform:"uppercase", letterSpacing:".05em" }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {campaigns.map((c,i) => (
              <tr key={i} style={{ borderTop:"1px solid #F4F6FB" }}>
                <td style={{ padding:"14px 20px", fontSize:13, fontWeight:600, color:"#0D1B33" }}>{c.name}</td>
                <td style={{ padding:"14px 20px", fontSize:13, color:"#7A8EAD" }}>{c.subject}</td>
                <td style={{ padding:"14px 20px", fontSize:13, color:"#3A4A6B", fontFeatureSettings:"'tnum'" }}>{c.sent}</td>
                <td style={{ padding:"14px 20px", fontSize:13, color:"#3A4A6B", fontFeatureSettings:"'tnum'" }}>{c.open}</td>
                <td style={{ padding:"14px 20px", fontSize:13, color:"#3A4A6B", fontFeatureSettings:"'tnum'" }}>{c.click}</td>
                <td style={{ padding:"14px 20px", fontSize:12 }}><span style={{ color:stColor[c.status], display:"inline-flex", alignItems:"center", gap:6, fontWeight:500 }}><span style={{ width:6, height:6, borderRadius:"50%", background:stColor[c.status] }}/>{c.status}</span></td>
                <td style={{ padding:"14px 20px", fontSize:12, color:"#9AACC8" }}>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ChatbotsHub() {
  const [view, setView] = React.useState("list"); // list | detail | onboarding | monitor
  if (view === "detail")     return <CelcomChatbotDetail onBack={() => setView("list")} />;
  if (view === "onboarding") return <CelcomChatbotOnboarding onBack={() => setView("list")} />;
  if (view === "monitor")    return <CelcomChatbotMonitor onBack={() => setView("list")} />;

  const bots = [
    { name:"Asistente Farmacia Central", company:"Farmacia Central", plan:"V2", conv:4412, cap:5000, status:"Alerta" },
    { name:"Soporte MegaRetail",         company:"MegaRetail SpA",   plan:"V2", conv:4230, cap:5000, status:"Activo" },
    { name:"Agendamiento Inmob. Norte",  company:"Inmobiliaria Norte", plan:"V1", conv:890, cap:2000, status:"Activo" },
    { name:"Helpdesk TecnoServicios",    company:"TecnoServicios",   plan:"V2", conv:null, cap:3000, status:"Suspendido" },
  ];
  const stColor = { Activo:"#15803D", Alerta:"#D97706", Suspendido:"#B91C1C" };
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      {/* Sub-nav */}
      <div style={{ display:"flex", gap:8, marginBottom:20, alignItems:"center" }}>
        <button onClick={() => setView("monitor")} style={{ background:"#fff", color:"#3A4A6B", border:"1px solid #EEF1F6", padding:"8px 14px", borderRadius:7, fontWeight:500, fontSize:12, cursor:"pointer", fontFamily:"Inter", display:"inline-flex", alignItems:"center", gap:6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
          Monitor global
        </button>
        <button onClick={() => setView("onboarding")} style={{ marginLeft:"auto", background:"#0057B8", color:"#fff", border:"none", padding:"8px 14px", borderRadius:7, fontWeight:600, fontSize:12, cursor:"pointer", fontFamily:"Inter", display:"inline-flex", alignItems:"center", gap:6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          Nuevo chatbot
        </button>
      </div>

      {/* Bot list */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:14, marginBottom:20 }}>
        {bots.map((b,i) => {
          const pct = b.conv ? Math.round(b.conv/b.cap*100) : 0;
          const barColor = b.status === "Alerta" ? "#D97706" : b.status === "Suspendido" ? "#C7D2E6" : "#0057B8";
          return (
            <button key={i} onClick={() => setView("detail")} style={{ textAlign:"left", background:"#fff", borderRadius:12, padding:"20px 22px", border:"1px solid #EEF1F6", cursor:"pointer", fontFamily:"Inter" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                <div style={{ width:36, height:36, borderRadius:9, background:"#F4F6FB", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3A4A6B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4M8 14h.01M16 14h.01M9 18h6"/></svg>
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:13, fontWeight:600, color:"#0D1B33", margin:0, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{b.name}</p>
                  <p style={{ fontSize:11, color:"#7A8EAD", margin:"2px 0 0" }}>{b.company} · Plan {b.plan}</p>
                </div>
                <span style={{ color:stColor[b.status], fontSize:10, fontWeight:500, display:"inline-flex", alignItems:"center", gap:5 }}><span style={{ width:6, height:6, borderRadius:"50%", background:stColor[b.status] }}/>{b.status}</span>
              </div>
              <div style={{ borderTop:"1px solid #F4F6FB", paddingTop:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6, fontSize:11 }}>
                  <span style={{ color:"#7A8EAD" }}>Consumo mensual</span>
                  <span style={{ color:"#0D1B33", fontWeight:600, fontFeatureSettings:"'tnum'" }}>{b.conv ? `${b.conv.toLocaleString()} / ${b.cap.toLocaleString()}` : `— / ${b.cap.toLocaleString()}`}</span>
                </div>
                <div style={{ background:"#F4F6FB", borderRadius:9999, height:5, overflow:"hidden" }}>
                  <div style={{ width:`${pct}%`, height:"100%", background:barColor, borderRadius:9999 }} />
                </div>
              </div>
            </button>
          );
        })}
        <button onClick={() => setView("onboarding")} style={{ background:"#fff", borderRadius:12, padding:20, border:"1.5px dashed #C7D2E6", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6, color:"#7A8EAD", fontSize:13, fontFamily:"Inter" }}>
          <span style={{ fontSize:22, color:"#9AACC8" }}>＋</span>
          Nuevo chatbot
        </button>
      </div>

      <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"22px 24px" }}>
        <div style={{ display:"flex", alignItems:"center", marginBottom:14 }}>
          <div>
            <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:0 }}>Árbol de conversación — Asistente Farmacia Central</h3>
            <p style={{ fontSize:12, color:"#7A8EAD", margin:"2px 0 0" }}>Vista simplificada de nodos activos.</p>
          </div>
          <button onClick={() => setView("detail")} style={{ marginLeft:"auto", background:"none", border:"none", color:"#0057B8", fontSize:12, fontWeight:600, cursor:"pointer" }}>Ver configuración →</button>
        </div>
        {[
          { lvl:0, text:"Bienvenida — ¿en qué podemos ayudarte?" },
          { lvl:1, text:"1. Consultar disponibilidad de medicamento" },
          { lvl:2, text:"→ Solicitar nombre del medicamento" },
          { lvl:1, text:"2. Horarios y sucursales" },
          { lvl:2, text:"→ Responder desde base de conocimiento" },
          { lvl:1, text:"3. Hablar con un agente" },
          { lvl:2, text:"→ Transferir a cola humana" },
        ].map((n,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"7px 0", paddingLeft:n.lvl*22 }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background: n.lvl===0 ? "#0057B8" : "#C7D2E6" }}/>
            <span style={{ fontSize:13, color: n.lvl===0 ? "#0D1B33" : "#3A4A6B", fontWeight: n.lvl===0?600:400 }}>{n.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiKeys() {
  const [visible, setVisible] = React.useState({});
  const keys = [
    { label:"Production API Key", env:"Live", value:"sk_live_celcom_a1b2c3d4e5f6789012345678", used:"hace 2 min" },
    { label:"Sandbox API Key",    env:"Test", value:"sk_test_celcom_z9y8x7w6v5u4321098765432", used:"hace 3 h" },
    { label:"Webhook Secret",     env:"Live", value:"whsec_celcom_m5n4o3p2q1r0987654321abc",   used:"hace 1 día" },
  ];
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"22px 24px", marginBottom:16 }}>
        <div style={{ display:"flex", alignItems:"center", marginBottom:18 }}>
          <div>
            <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:0 }}>Credenciales de API</h3>
            <p style={{ fontSize:12, color:"#7A8EAD", margin:"2px 0 0" }}>Gestiona las claves para integrar con la API de Celcom.</p>
          </div>
          <button style={{ marginLeft:"auto", background:"#0057B8", color:"#fff", border:"none", padding:"8px 14px", borderRadius:7, fontWeight:600, fontSize:12, cursor:"pointer" }}>+ Generar clave</button>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {keys.map((k,i) => {
            const shown = visible[i];
            const masked = "••••••••••••" + k.value.slice(-6);
            return (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", background:"#FAFBFD", border:"1px solid #EEF1F6", borderRadius:8 }}>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                    <span style={{ fontSize:12, fontWeight:600, color:"#0D1B33" }}>{k.label}</span>
                    <span style={{ fontSize:10, fontWeight:500, padding:"2px 7px", borderRadius:9999, background: k.env==="Live"?"#F4F6FB":"#FFF7E0", color: k.env==="Live"?"#3A4A6B":"#B45309" }}>{k.env}</span>
                  </div>
                  <code style={{ fontFamily:"'Fira Code',monospace", fontSize:12, color:"#3A4A6B" }}>{shown ? k.value : masked}</code>
                  <p style={{ fontSize:10, color:"#9AACC8", margin:"4px 0 0" }}>Usada por última vez {k.used}</p>
                </div>
                <button onClick={() => setVisible(v => ({...v, [i]: !v[i]}))} style={{ background:"#fff", border:"1px solid #EEF1F6", padding:"6px 10px", borderRadius:6, fontSize:11, color:"#3A4A6B", cursor:"pointer", fontWeight:500 }}>{shown?"Ocultar":"Mostrar"}</button>
                <button style={{ background:"#fff", border:"1px solid #EEF1F6", padding:"6px 10px", borderRadius:6, fontSize:11, color:"#3A4A6B", cursor:"pointer", fontWeight:500 }}>Copiar</button>
                <button style={{ background:"#fff", border:"1px solid #EEF1F6", padding:"6px 10px", borderRadius:6, fontSize:11, color:"#B91C1C", cursor:"pointer", fontWeight:500 }}>Revocar</button>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"22px 24px" }}>
        <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:"0 0 14px" }}>IPs autorizadas</h3>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {["190.45.128.0/24 — Oficina Santiago","181.72.56.12 — Servidor producción","10.0.0.0/8 — VPN interna"].map((ip,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"9px 14px", background:"#FAFBFD", borderRadius:7, border:"1px solid #EEF1F6" }}>
              <code style={{ fontSize:12, color:"#3A4A6B", fontFamily:"'Fira Code',monospace" }}>{ip}</code>
              <button style={{ background:"none", border:"none", color:"#9AACC8", cursor:"pointer", fontSize:14 }}>×</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <div style={{ display:"grid", gridTemplateColumns:"220px 1fr", gap:24, maxWidth:1000 }}>
        <nav style={{ display:"flex", flexDirection:"column", gap:2 }}>
          {[
            { label:"Cuenta", active:true },
            { label:"Organización" },
            { label:"Miembros" },
            { label:"Notificaciones" },
            { label:"Integraciones" },
            { label:"Seguridad" },
          ].map((it,i) => (
            <button key={i} style={{ textAlign:"left", padding:"9px 14px", border:"none", borderRadius:7, background: it.active?"#fff":"transparent", border: it.active?"1px solid #EEF1F6":"1px solid transparent", fontSize:13, fontWeight: it.active?600:500, color: it.active?"#0D1B33":"#7A8EAD", cursor:"pointer", fontFamily:"Inter" }}>{it.label}</button>
          ))}
        </nav>
        <div>
          <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"24px 28px", marginBottom:16 }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:600, color:"#0D1B33", margin:"0 0 4px" }}>Perfil</h3>
            <p style={{ fontSize:12, color:"#7A8EAD", margin:"0 0 20px" }}>Actualiza tus datos personales.</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {[
                { label:"Nombre completo", value:"Miguel San Martín R." },
                { label:"Correo",          value:"miguel@celcom.cl" },
                { label:"Teléfono",        value:"+56 9 8123 4567" },
                { label:"Cargo",           value:"Admin" },
              ].map((f,i) => (
                <div key={i}>
                  <label style={{ fontSize:11, fontWeight:600, color:"#3A4A6B", display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:".04em" }}>{f.label}</label>
                  <input defaultValue={f.value} style={{ width:"100%", padding:"9px 12px", borderRadius:7, border:"1px solid #EEF1F6", background:"#FAFBFD", fontSize:13, fontFamily:"Inter", color:"#0D1B33", boxSizing:"border-box", outline:"none" }}/>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", gap:8, marginTop:20, borderTop:"1px solid #F4F6FB", paddingTop:18 }}>
              <button style={{ background:"#0057B8", color:"#fff", border:"none", padding:"8px 16px", borderRadius:7, fontWeight:600, fontSize:12, cursor:"pointer", fontFamily:"Inter" }}>Guardar cambios</button>
              <button style={{ background:"#fff", color:"#3A4A6B", border:"1px solid #EEF1F6", padding:"8px 16px", borderRadius:7, fontWeight:500, fontSize:12, cursor:"pointer", fontFamily:"Inter" }}>Cancelar</button>
            </div>
          </div>
          <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"24px 28px" }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:600, color:"#0D1B33", margin:"0 0 16px" }}>Preferencias</h3>
            {[
              { label:"Notificaciones por email", desc:"Recibe alertas cuando una campaña finalice.", on:true },
              { label:"Resumen semanal",          desc:"Reporte de métricas cada lunes a las 9am.", on:true },
              { label:"Alertas de saldo bajo",    desc:"Avisarnos cuando queden menos de 1.000 SMS.", on:false },
            ].map((p,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", padding:"12px 0", borderBottom: i<2?"1px solid #F4F6FB":"none" }}>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:13, fontWeight:500, color:"#0D1B33", margin:0 }}>{p.label}</p>
                  <p style={{ fontSize:11, color:"#7A8EAD", margin:"2px 0 0" }}>{p.desc}</p>
                </div>
                <div style={{ width:34, height:20, borderRadius:9999, background: p.on?"#0057B8":"#E8EDF5", position:"relative", cursor:"pointer", transition:"background 150ms" }}>
                  <div style={{ position:"absolute", top:2, left: p.on?16:2, width:16, height:16, borderRadius:"50%", background:"#fff", transition:"left 150ms", boxShadow:"0 1px 2px rgba(0,0,0,.15)" }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Billing() {
  const invoices = [
    { id:"INV-2026-04", period:"Abril 2026", amount:"$149.00", status:"Pagada", date:"01 abr" },
    { id:"INV-2026-03", period:"Marzo 2026", amount:"$149.00", status:"Pagada", date:"01 mar" },
    { id:"INV-2026-02", period:"Febrero 2026", amount:"$149.00", status:"Pagada", date:"01 feb" },
    { id:"INV-2026-05", period:"Mayo 2026", amount:"$149.00", status:"Pendiente", date:"Vence 01 may" },
  ];
  const stColor = { Pagada:"#15803D", Pendiente:"#D97706", Fallida:"#B91C1C" };
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:16, marginBottom:16 }}>
        <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"22px 24px" }}>
          <p style={{ fontSize:11, color:"#7A8EAD", textTransform:"uppercase", letterSpacing:".06em", margin:"0 0 6px", fontWeight:600 }}>Plan actual</p>
          <div style={{ display:"flex", alignItems:"baseline", gap:10, marginBottom:6 }}>
            <h2 style={{ fontFamily:"Poppins", fontSize:26, fontWeight:700, color:"#0D1B33", margin:0, letterSpacing:"-0.02em" }}>Pro</h2>
            <span style={{ fontSize:13, color:"#7A8EAD" }}>$149 USD / mes</span>
          </div>
          <p style={{ fontSize:12, color:"#7A8EAD", margin:"0 0 14px" }}>Próxima renovación: 1 de mayo de 2026</p>
          <div style={{ display:"flex", gap:8 }}>
            <button style={{ background:"#0057B8", color:"#fff", border:"none", padding:"8px 14px", borderRadius:7, fontWeight:600, fontSize:12, cursor:"pointer" }}>Cambiar plan</button>
            <button style={{ background:"#fff", color:"#3A4A6B", border:"1px solid #EEF1F6", padding:"8px 14px", borderRadius:7, fontWeight:500, fontSize:12, cursor:"pointer" }}>Cancelar suscripción</button>
          </div>
        </div>
        <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"22px 24px" }}>
          <p style={{ fontSize:11, color:"#7A8EAD", textTransform:"uppercase", letterSpacing:".06em", margin:"0 0 6px", fontWeight:600 }}>Método de pago</p>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:8 }}>
            <div style={{ width:44, height:30, borderRadius:5, background:"#0D1B33", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:9, fontWeight:700, letterSpacing:".05em" }}>VISA</div>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:13, fontWeight:500, color:"#0D1B33", margin:0, fontFeatureSettings:"'tnum'" }}>•••• •••• •••• 4242</p>
              <p style={{ fontSize:11, color:"#7A8EAD", margin:"2px 0 0" }}>Vence 08/28</p>
            </div>
            <button style={{ background:"#fff", color:"#3A4A6B", border:"1px solid #EEF1F6", padding:"6px 12px", borderRadius:6, fontSize:11, fontWeight:500, cursor:"pointer" }}>Cambiar</button>
          </div>
        </div>
      </div>
      <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", overflow:"hidden" }}>
        <div style={{ padding:"16px 24px", borderBottom:"1px solid #EEF1F6" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:0 }}>Historial de facturación</h3>
        </div>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead><tr style={{ background:"#FAFBFD" }}>
            {["Factura","Periodo","Monto","Estado","Fecha",""].map(h => <th key={h} style={{ textAlign:"left", padding:"11px 24px", fontSize:11, color:"#7A8EAD", fontWeight:600, textTransform:"uppercase", letterSpacing:".05em" }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {invoices.map((r,i) => (
              <tr key={i} style={{ borderTop:"1px solid #F4F6FB" }}>
                <td style={{ padding:"14px 24px", fontSize:13, fontWeight:600, color:"#0D1B33", fontFamily:"'Fira Code',monospace" }}>{r.id}</td>
                <td style={{ padding:"14px 24px", fontSize:13, color:"#3A4A6B" }}>{r.period}</td>
                <td style={{ padding:"14px 24px", fontSize:13, color:"#3A4A6B", fontFeatureSettings:"'tnum'" }}>{r.amount}</td>
                <td style={{ padding:"14px 24px", fontSize:12 }}><span style={{ color:stColor[r.status], display:"inline-flex", alignItems:"center", gap:6, fontWeight:500 }}><span style={{ width:6, height:6, borderRadius:"50%", background:stColor[r.status] }}/>{r.status}</span></td>
                <td style={{ padding:"14px 24px", fontSize:12, color:"#7A8EAD" }}>{r.date}</td>
                <td style={{ padding:"14px 24px" }}><button style={{ background:"none", border:"none", color:"#0057B8", fontSize:12, fontWeight:500, cursor:"pointer" }}>Descargar PDF</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

window.CelcomEmailMarketing = EmailMarketing;
window.CelcomChatbots = ChatbotsHub;
window.CelcomApiKeys = ApiKeys;
window.CelcomSettings = Settings;
window.CelcomBilling = Billing;
