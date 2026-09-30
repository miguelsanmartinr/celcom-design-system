function ChatbotDetail({ onBack }) {
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <button onClick={onBack} style={{ background:"none", border:"none", color:"#7A8EAD", fontSize:12, cursor:"pointer", padding:0, marginBottom:16, display:"inline-flex", alignItems:"center", gap:6 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
        Chatbots
      </button>
      <div style={{ display:"flex", alignItems:"flex-start", marginBottom:22 }}>
        <div>
          <h2 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:700, color:"#0D1B33", margin:0, letterSpacing:"-0.01em" }}>Asistente Farmacia Central</h2>
          <p style={{ fontSize:12, color:"#7A8EAD", margin:"4px 0 0" }}>Bot Sucursal Centro · +56 2 2345 6789 · N8N ID <code style={{ fontFamily:"'Fira Code',monospace", background:"#F4F6FB", padding:"1px 5px", borderRadius:4 }}>wf_fc_001</code></p>
        </div>
        <div style={{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" }}>
          <span style={{ fontSize:11, color:"#15803D", display:"inline-flex", alignItems:"center", gap:6, padding:"5px 10px", background:"#fff", border:"1px solid #EEF1F6", borderRadius:9999 }}><span style={{ width:6, height:6, borderRadius:"50%", background:"#15803D" }}/>N8N activo</span>
          <button style={{ background:"#0057B8", color:"#fff", border:"none", padding:"8px 14px", borderRadius:7, fontWeight:600, fontSize:12, cursor:"pointer" }}>Guardar cambios</button>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        {/* Left — config */}
        <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"22px 24px" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:"0 0 16px" }}>Datos del bot</h3>
          <Field label="Nombre del bot" value="Asistente Farmacia Central" />
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <Field label="Idioma" value="Español (Chile)" />
            <Field label="Tono" value="Profesional y cercano" />
          </div>
          <div style={{ marginBottom:12 }}>
            <label style={lbl}>Prompt del sistema</label>
            <textarea defaultValue="Eres el asistente virtual de Farmacia Central. Tu objetivo es ayudar a los clientes con consultas sobre medicamentos, horarios de sucursales y disponibilidad. Responde en español, con tono amable. Si el cliente solicita hablar con una persona, escala la conversación." style={{ ...inp, height:100, resize:"none", fontFamily:"Inter", lineHeight:1.5 }} />
          </div>
          <div>
            <label style={lbl}>Fuente de conocimiento (Google Drive)</label>
            <div style={{ display:"flex", gap:8 }}>
              <input defaultValue="Base_Conocimiento_FC_v3.pdf" style={{ ...inp, flex:1 }} />
              <button style={btnSec}>Cambiar</button>
            </div>
            <p style={{ fontSize:11, color:"#9AACC8", margin:"6px 0 0" }}>Última sincronización: hace 2 horas</p>
          </div>
        </div>

        {/* Right — stacked */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"20px 22px" }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:"0 0 12px" }}>Estado de integraciones</h3>
            {[
              { label:"N8N workflow: activo y sin errores", ok:true },
              { label:"Gupshup: +56 2 2345 6789 conectado", ok:true },
              { label:"Google Drive: sincronizado (hace 2h)", ok:true },
            ].map((i,k) => (
              <div key={k} style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 10px", background:"#F6FBF5", borderRadius:7, marginBottom:6, fontSize:12, color:"#15803D" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 13l4 4L19 7"/></svg>
                {i.label}
              </div>
            ))}
          </div>

          <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"20px 22px" }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:"0 0 14px" }}>Límites y consumo</h3>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6, fontSize:12 }}>
              <span style={{ color:"#3A4A6B" }}>Este mes</span>
              <span style={{ fontWeight:600, color:"#0D1B33", fontFeatureSettings:"'tnum'" }}>4.412 / 5.000</span>
            </div>
            <div style={{ background:"#F4F6FB", borderRadius:9999, height:5, overflow:"hidden", marginBottom:8 }}>
              <div style={{ width:"88%", height:"100%", background:"#D97706" }} />
            </div>
            <p style={{ fontSize:11, color:"#B45309", margin:"0 0 14px" }}>Alerta activada al 80% — excedente estimado: 180 conv.</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              <Field label="Tope mensual" value="5000" />
              <Field label="Alerta al (%)" value="80" />
            </div>
          </div>

          <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"20px 22px" }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:"0 0 12px" }}>Historial de versiones</h3>
            {[
              { date:"10 abr", author:"Carlos M.", change:"Actualización prompt" },
              { date:"02 abr", author:"Fernanda R.", change:"Nueva base conocimiento" },
              { date:"01 feb", author:"Carlos M.", change:"Creación inicial" },
            ].map((h,i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"9px 0", borderBottom: i<2?"1px solid #F4F6FB":"none", fontSize:12 }}>
                <span style={{ color:"#7A8EAD" }}>{h.date} · {h.author}</span>
                <span style={{ color:"#0D1B33" }}>{h.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const lbl = { fontSize:11, fontWeight:600, color:"#3A4A6B", display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:".04em" };
const inp = { width:"100%", padding:"9px 12px", borderRadius:7, border:"1px solid #EEF1F6", background:"#FAFBFD", fontSize:13, fontFamily:"Inter", color:"#0D1B33", boxSizing:"border-box", outline:"none" };
const btnSec = { background:"#fff", color:"#3A4A6B", border:"1px solid #EEF1F6", padding:"8px 14px", borderRadius:7, fontWeight:500, fontSize:12, cursor:"pointer", fontFamily:"Inter" };

function Field({ label, value, placeholder }) {
  return (
    <div style={{ marginBottom:12 }}>
      <label style={lbl}>{label}</label>
      <input defaultValue={value} placeholder={placeholder} style={inp} />
    </div>
  );
}

function ChatbotOnboarding({ onBack }) {
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <button onClick={onBack} style={{ background:"none", border:"none", color:"#7A8EAD", fontSize:12, cursor:"pointer", padding:0, marginBottom:16, display:"inline-flex", alignItems:"center", gap:6 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
        Chatbots
      </button>
      <div style={{ display:"flex", alignItems:"flex-start", marginBottom:22 }}>
        <div>
          <h2 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:700, color:"#0D1B33", margin:0, letterSpacing:"-0.01em" }}>Nuevo chatbot</h2>
          <p style={{ fontSize:12, color:"#7A8EAD", margin:"4px 0 0" }}>Configura empresa, plan, bot y administrador en un solo flujo.</p>
        </div>
        <div style={{ marginLeft:"auto", display:"flex", gap:8 }}>
          <button style={btnSec}>Cancelar</button>
          <button style={{ background:"#0057B8", color:"#fff", border:"none", padding:"8px 14px", borderRadius:7, fontWeight:600, fontSize:12, cursor:"pointer" }}>Crear y enviar accesos</button>
        </div>
      </div>

      <div style={{ maxWidth:760, display:"flex", flexDirection:"column", gap:14 }}>
        <Step n={1} title="Datos de la empresa">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <Field label="Nombre de la empresa *" placeholder="Ej: Clínica del Sol SpA" />
            <Field label="RUT *" placeholder="76.XXX.XXX-X" />
            <Field label="Contacto principal *" placeholder="Nombre completo" />
            <Field label="Email *" placeholder="contacto@empresa.cl" />
          </div>
        </Step>

        <Step n={2} title="Plan y configuración comercial">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div>
              <label style={lbl}>Plan contratado *</label>
              <select style={inp}><option>V2 — Plataforma de Clientes</option><option>V1 — Básico</option><option>V3 — Enterprise</option></select>
            </div>
            <div>
              <label style={lbl}>Ejecutivo Celcom *</label>
              <select style={inp}><option>Carlos Merino</option><option>Ana Morales</option></select>
            </div>
            <Field label="Fecha de inicio *" value="2026-04-22" />
            <Field label="Tope mensual conversaciones" placeholder="5000" />
          </div>
        </Step>

        <Step n={3} title="Configuración del bot inicial">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <Field label="Nombre del bot" placeholder="Ej: Asistente Clínica del Sol" />
            <Field label="Número WhatsApp *" placeholder="+56 2 XXXX XXXX" />
          </div>
          <div style={{ marginBottom:12 }}>
            <label style={lbl}>Prompt inicial del sistema</label>
            <textarea placeholder="Rol, objetivo, tono y restricciones del bot..." style={{ ...inp, height:80, resize:"none", fontFamily:"Inter" }} />
          </div>
          <div>
            <label style={lbl}>Base de conocimiento (Google Drive)</label>
            <div style={{ display:"flex", gap:8 }}>
              <input placeholder="URL del archivo en Google Drive" style={{ ...inp, flex:1 }} />
              <button style={btnSec}>Vincular</button>
            </div>
          </div>
        </Step>

        <Step n={4} title="Usuario administrador del cliente">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
            <Field label="Nombre *" placeholder="Nombre del administrador" />
            <Field label="Email *" placeholder="admin@empresa.cl" />
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 14px", background:"#FAFBFD", border:"1px solid #EEF1F6", borderRadius:7, fontSize:12, color:"#3A4A6B" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A8EAD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            El usuario recibirá un email con sus credenciales de acceso al portal una vez creado.
          </div>
        </Step>
      </div>
    </div>
  );
}

function Step({ n, title, children }) {
  return (
    <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"22px 24px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
        <span style={{ width:22, height:22, borderRadius:"50%", background:"#E7EEF8", color:"#0057B8", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700 }}>{n}</span>
        <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ChatbotMonitor({ onBack }) {
  const clients = [
    { name:"MegaRetail SpA",       plan:"V2", state:"Activo",    conv:4230, cap:5000 },
    { name:"Farmacia Central",     plan:"V2", state:"Alerta",    conv:4412, cap:5000 },
    { name:"Inmobiliaria Norte",   plan:"V1", state:"Activo",    conv:890,  cap:2000 },
    { name:"TecnoServicios",       plan:"V2", state:"Suspendido",conv:null, cap:3000 },
  ];
  const stColor = { Activo:"#15803D", Alerta:"#D97706", Suspendido:"#B91C1C" };
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <button onClick={onBack} style={{ background:"none", border:"none", color:"#7A8EAD", fontSize:12, cursor:"pointer", padding:0, marginBottom:16, display:"inline-flex", alignItems:"center", gap:6 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
        Chatbots
      </button>
      <h2 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:700, color:"#0D1B33", margin:"0 0 4px", letterSpacing:"-0.01em" }}>Monitor global</h2>
      <p style={{ fontSize:12, color:"#7A8EAD", margin:"0 0 22px" }}>Estado consolidado de todos los clientes contratantes.</p>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:14, marginBottom:20 }}>
        {[
          { label:"Clientes activos",   value:"24",    hint:"+2 este mes", up:true },
          { label:"Conversaciones hoy", value:"1.847", hint:"+12% vs ayer", up:true },
          { label:"Resolución auto.",   value:"78%",   hint:"+3pp este mes", up:true },
          { label:"Alertas pendientes", value:"4",     hint:"2 sobre 80%", warn:true },
        ].map((k,i) => (
          <div key={i} style={{ background:"#fff", borderRadius:12, padding:"18px 20px", border:"1px solid #EEF1F6" }}>
            <p style={{ fontSize:12, color:"#7A8EAD", margin:"0 0 10px" }}>{k.label}</p>
            <p style={{ fontFamily:"Poppins", fontSize:24, fontWeight:700, color: k.warn?"#B45309":"#0D1B33", margin:0, letterSpacing:"-0.02em" }}>{k.value}</p>
            <p style={{ fontSize:11, color: k.warn?"#B45309":"#15803D", margin:"4px 0 0" }}>{k.up?"↑ ":k.warn?"⚠ ":""}{k.hint}</p>
          </div>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:16 }}>
        <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", overflow:"hidden" }}>
          <div style={{ padding:"16px 24px", borderBottom:"1px solid #EEF1F6", display:"flex", alignItems:"center" }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:0 }}>Clientes — estado general</h3>
          </div>
          <table style={{ width:"100%", borderCollapse:"collapse" }}>
            <thead><tr style={{ background:"#FAFBFD" }}>
              {["Empresa","Plan","Estado","Consumo","Tope",""].map(h => <th key={h} style={{ textAlign:"left", padding:"11px 24px", fontSize:11, color:"#7A8EAD", fontWeight:600, textTransform:"uppercase", letterSpacing:".05em" }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {clients.map((c,i) => {
                const pct = c.conv ? Math.round(c.conv/c.cap*100) : 0;
                return (
                  <tr key={i} style={{ borderTop:"1px solid #F4F6FB" }}>
                    <td style={{ padding:"14px 24px", fontSize:13, fontWeight:600, color:"#0D1B33" }}>{c.name}</td>
                    <td style={{ padding:"14px 24px" }}><span style={{ background:"#F4F6FB", color:"#3A4A6B", fontSize:11, fontWeight:500, padding:"3px 9px", borderRadius:6 }}>{c.plan}</span></td>
                    <td style={{ padding:"14px 24px", fontSize:12 }}><span style={{ color:stColor[c.state], display:"inline-flex", alignItems:"center", gap:6, fontWeight:500 }}><span style={{ width:6, height:6, borderRadius:"50%", background:stColor[c.state] }}/>{c.state}{c.state==="Alerta" && " 88%"}</span></td>
                    <td style={{ padding:"14px 24px", fontSize:13, color:"#3A4A6B", fontFeatureSettings:"'tnum'" }}>{c.conv ? c.conv.toLocaleString() : "—"}</td>
                    <td style={{ padding:"14px 24px", fontSize:13, color:"#7A8EAD", fontFeatureSettings:"'tnum'" }}>{c.cap.toLocaleString()}</td>
                    <td style={{ padding:"14px 24px" }}><button style={{ background:"none", border:"none", color:"#0057B8", fontSize:12, fontWeight:500, cursor:"pointer" }}>Ver</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", padding:"20px 22px" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:"0 0 14px" }}>Salud del sistema</h3>
          {[
            { text:"N8N: 24/24 bots activos", ok:true },
            { text:"Gupshup API: operativo", ok:true },
            { text:"2 clientes sobre 80% tope", warn:true },
            { text:"Google Drive: sincronizado", ok:true },
          ].map((s,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 10px", background: s.warn?"#FFF7E0":"#F6FBF5", borderRadius:7, marginBottom:6, fontSize:12, color: s.warn?"#B45309":"#15803D" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">{s.warn ? <><path d="M12 2L2 20h20L12 2z"/><path d="M12 10v4M12 18h.01"/></> : <path d="M5 13l4 4L19 7"/>}</svg>
              {s.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.CelcomChatbotDetail = ChatbotDetail;
window.CelcomChatbotOnboarding = ChatbotOnboarding;
window.CelcomChatbotMonitor = ChatbotMonitor;
