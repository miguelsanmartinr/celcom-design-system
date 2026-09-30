function CampaignsTable() {
  const rows = [
    { name:"Promo Otoño SMS",   channel:"SMS",      sent:"47.320", delivered:"98.2%", status:"Enviada", date:"19 abr" },
    { name:"Recordatorio cita", channel:"WhatsApp", sent:"3.200",  delivered:"96.5%", status:"Activa",  date:"18 abr" },
    { name:"Newsletter abril",  channel:"Email",    sent:"12.000", delivered:"89.1%", status:"Enviada", date:"16 abr" },
    { name:"Follow-up Ventas",  channel:"SMS",      sent:"800",    delivered:"—",     status:"Borrador",date:"15 abr" },
    { name:"Encuesta NPS",      channel:"WhatsApp", sent:"5.400",  delivered:"94.0%", status:"Pausada", date:"12 abr" },
  ];
  const stColor = { Enviada:"#15803D", Activa:"#0057B8", Borrador:"#9AACC8", Pausada:"#D97706" };
  return (
    <div style={{ padding:32, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", overflow:"hidden" }}>
        <div style={{ padding:"16px 24px", borderBottom:"1px solid #EEF1F6", display:"flex", alignItems:"center" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:600, color:"#0D1B33", margin:0 }}>Campañas</h3>
          <div style={{ marginLeft:"auto", display:"flex", gap:4, background:"#FAFBFD", padding:3, borderRadius:8, border:"1px solid #EEF1F6" }}>
            {["Todas","Activas","Borradores"].map((t,i) => (
              <button key={i} style={{ padding:"5px 12px", borderRadius:6, border:"none", background: i===0?"#fff":"transparent", color: i===0?"#0D1B33":"#7A8EAD", fontSize:12, fontWeight:500, cursor:"pointer", boxShadow: i===0?"0 1px 2px rgba(0,0,0,.05)":"none" }}>{t}</button>
            ))}
          </div>
        </div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontFamily:"Inter" }}>
          <thead>
            <tr style={{ background:"#FAFBFD" }}>
              <th style={th}>Campaña</th><th style={th}>Canal</th><th style={th}>Enviados</th><th style={th}>Entrega</th><th style={th}>Estado</th><th style={th}>Fecha</th><th style={th}></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i) => (
              <tr key={i} style={{ borderTop:"1px solid #F4F6FB" }}>
                <td style={td}><strong style={{ color:"#0D1B33", fontWeight:600 }}>{r.name}</strong></td>
                <td style={td}><span style={{ background:"#F4F6FB", color:"#3A4A6B", fontSize:11, fontWeight:500, padding:"3px 9px", borderRadius:6 }}>{r.channel}</span></td>
                <td style={{...td, fontFeatureSettings:"'tnum'"}}>{r.sent}</td>
                <td style={{...td, fontFeatureSettings:"'tnum'"}}>{r.delivered}</td>
                <td style={td}><span style={{ color: stColor[r.status], fontWeight:500, fontSize:12, display:"inline-flex", alignItems:"center", gap:6 }}><span style={{ width:6, height:6, borderRadius:"50%", background:stColor[r.status] }}/>{r.status}</span></td>
                <td style={{...td, color:"#7A8EAD"}}>{r.date}</td>
                <td style={td}><button style={{ background:"none", border:"none", color:"#9AACC8", cursor:"pointer", fontSize:16, padding:4 }}>⋯</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const th = { textAlign:"left", padding:"11px 24px", fontSize:11, color:"#7A8EAD", fontWeight:600, textTransform:"uppercase", letterSpacing:".05em" };
const td = { padding:"14px 24px", fontSize:13, color:"#3A4A6B" };

function WhatsAppInbox() {
  const [active, setActive] = React.useState(0);
  const convos = [
    { name:"Juan Pérez", phone:"+56 9 8123 4567", last:"Gracias por la info", time:"10:42", unread:2 },
    { name:"María González", phone:"+56 9 9234 5678", last:"¿Cuándo llega?", time:"10:15", unread:0 },
    { name:"Carlos Ruiz", phone:"+51 9 1234 5678", last:"Confirmo la cita", time:"09:30", unread:1 },
    { name:"Ana López", phone:"+52 55 5555 5555", last:"Perfecto", time:"ayer", unread:0 },
  ];
  const msgs = [
    { me:false, text:"Hola, quiero información sobre sus planes", t:"10:38" },
    { me:true, text:"¡Hola Juan! Claro, nuestro plan Pro incluye 50.000 SMS y WhatsApp API.", t:"10:39" },
    { me:false, text:"¿Cuánto cuesta?", t:"10:40" },
    { me:true, text:"$149 USD/mes. ¿Te agendo una llamada con un especialista?", t:"10:41" },
    { me:false, text:"Gracias por la info", t:"10:42" },
  ];
  return (
    <div style={{ padding:24, background:"#FAFBFD", minHeight:"calc(100vh - 73px)" }}>
      <div style={{ display:"grid", gridTemplateColumns:"300px 1fr", gap:0, background:"#fff", borderRadius:12, border:"1px solid #EEF1F6", overflow:"hidden", height:"calc(100vh - 130px)" }}>
        <div style={{ borderRight:"1px solid #EEF1F6", display:"flex", flexDirection:"column" }}>
          <div style={{ padding:"14px 16px", borderBottom:"1px solid #EEF1F6" }}>
            <input placeholder="Buscar conversación…" style={{ width:"100%", padding:"8px 12px", borderRadius:7, border:"1px solid #EEF1F6", fontSize:12, fontFamily:"Inter", background:"#FAFBFD", boxSizing:"border-box", outline:"none" }} />
          </div>
          <div style={{ flex:1, overflow:"auto" }}>
            {convos.map((c,i) => (
              <button key={i} onClick={() => setActive(i)} style={{ width:"100%", padding:"12px 16px", border:"none", textAlign:"left", background: active===i?"#FAFBFD":"#fff", cursor:"pointer", borderBottom:"1px solid #F4F6FB", display:"flex", gap:10, borderLeft: active===i ? "2px solid #0057B8" : "2px solid transparent" }}>
                <div style={{ width:34, height:34, borderRadius:"50%", background:"#F4F6FB", color:"#3A4A6B", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:600, fontSize:13, flexShrink:0 }}>{c.name[0]}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", justifyContent:"space-between" }}>
                    <span style={{ fontSize:13, fontWeight: c.unread?600:500, color:"#0D1B33" }}>{c.name}</span>
                    <span style={{ fontSize:10, color:"#9AACC8" }}>{c.time}</span>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:2 }}>
                    <span style={{ fontSize:11, color:"#7A8EAD", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.last}</span>
                    {c.unread>0 && <span style={{ background:"#0057B8", color:"#fff", fontSize:9, fontWeight:700, padding:"1px 6px", borderRadius:9999 }}>{c.unread}</span>}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", background:"#FAFBFD" }}>
          <div style={{ padding:"14px 20px", background:"#fff", borderBottom:"1px solid #EEF1F6", display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:34, height:34, borderRadius:"50%", background:"#F4F6FB", color:"#3A4A6B", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:600 }}>{convos[active].name[0]}</div>
            <div><p style={{ fontWeight:600, fontSize:13, color:"#0D1B33", margin:0 }}>{convos[active].name}</p><p style={{ fontSize:11, color:"#7A8EAD", margin:0 }}>{convos[active].phone} · en línea</p></div>
          </div>
          <div style={{ flex:1, padding:20, overflow:"auto", display:"flex", flexDirection:"column", gap:8 }}>
            {msgs.map((m,i) => (
              <div key={i} style={{ alignSelf: m.me?"flex-end":"flex-start", maxWidth:"70%", background: m.me?"#E7EEF8":"#fff", color:"#0D1B33", padding:"9px 13px", borderRadius:10, fontSize:13, border:"1px solid #EEF1F6" }}>
                {m.text}<div style={{ fontSize:9, color:"#9AACC8", textAlign:"right", marginTop:3 }}>{m.t}</div>
              </div>
            ))}
          </div>
          <div style={{ padding:12, background:"#fff", borderTop:"1px solid #EEF1F6", display:"flex", gap:8 }}>
            <input placeholder="Escribe un mensaje…" style={{ flex:1, padding:"9px 14px", borderRadius:9999, border:"1px solid #EEF1F6", fontSize:13, fontFamily:"Inter", background:"#FAFBFD", outline:"none" }} />
            <button style={{ background:"#0057B8", color:"#fff", border:"none", padding:"9px 18px", borderRadius:9999, fontWeight:600, fontSize:13, cursor:"pointer" }}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.CelcomCampaignsTable = CampaignsTable;
window.CelcomWhatsAppInbox = WhatsAppInbox;
