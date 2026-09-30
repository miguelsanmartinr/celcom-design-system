function ServiciosTabs() {
  const [active, setActive] = React.useState(0);
  const tabs = [
    { icon:"💬", name:"Whatsapp API", title:"WhatsApp API Business",
      desc:"Conecta con tus clientes a través de la app de mensajería más utilizada en el mundo con las ventajas de la versión business.", cta:"Quiero usarla" },
    { icon:"📱", name:"SMS Masivo", title:"SMS Masivo",
      desc:"Envía mensajes de texto a miles de clientes en segundos. Ideal para alertas, promociones y confirmaciones.", cta:"Quiero usarlo" },
    { icon:"✉️", name:"Email Marketing", title:"Email Marketing",
      desc:"Campañas de correo con segmentación avanzada, plantillas y analítica en tiempo real.", cta:"Quiero usarlo" },
    { icon:"🤖", name:"Chatbot", title:"Chatbots inteligentes",
      desc:"Automatiza respuestas, agenda citas y deriva a un agente humano cuando haga falta.", cta:"Quiero uno" },
  ];
  return (
    <section style={{ background:"#fff", padding:"60px 0" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 32px" }}>
        <h2 style={{ fontFamily:"Poppins", fontSize:28, fontWeight:700, color:"#0D1B33", textAlign:"center", margin:"0 0 40px" }}>Estos son nuestros servicios</h2>
        <div style={{ display:"grid", gridTemplateColumns:"240px 1fr", gap:24 }}>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {tabs.map((t,i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                textAlign:"left", padding:"14px 16px", border:"none", cursor:"pointer",
                background: active===i ? "#FAFBFF" : "transparent",
                borderLeft: active===i ? "3px solid #0057B8" : "3px solid transparent",
                fontSize:14, fontWeight: active===i ? 700 : 500,
                color: active===i ? "#0057B8" : "#3A4A6B",
                display:"flex", alignItems:"center", gap:10,
                fontFamily:"Inter",
                borderBottom:"1px solid #E8EDF5",
              }}>
                <span style={{ fontSize:14 }}>{t.icon}</span>{t.name}
              </button>
            ))}
          </div>
          <div style={{ background:"#E8EDF5", borderRadius:16, padding:40, display:"flex", gap:24, alignItems:"center" }}>
            <div style={{ flex:1 }}>
              <h3 style={{ fontFamily:"Poppins", fontSize:22, fontWeight:700, color:"#0D1B33", margin:"0 0 12px" }}>{tabs[active].title}</h3>
              <p style={{ fontSize:15, color:"#3A4A6B", lineHeight:1.6, margin:"0 0 20px" }}>{tabs[active].desc}</p>
              <button style={{ background:"transparent", color:"#FFB800", border:"none", fontWeight:700, fontSize:13, cursor:"pointer", padding:0 }}>
                {tabs[active].cta} →
              </button>
            </div>
            <div style={{ width:220, height:180, background:"#fff", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:64 }}>
              {tabs[active].icon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolucionesGrid() {
  const solutions = [
    { title:"Marketing", desc:"Queremos que puedas dar a conocer tus campañas creativas a través de herramientas precisas y confiables.", cta:"Quiero posicionar", emoji:"📢", bg:"#FFF6E0" },
    { title:"Ventas", desc:"Si estás buscando que tus ingresos incrementen y darle al omnicanal que necesitas, llegaste al lugar correcto.", cta:"Quiero vender", emoji:"📈", bg:"#FFF6E0" },
    { title:"Atención al cliente", desc:"Responder a tu cliente ágil y eficientemente es algo que puedes lograr sin importar la hora o el lugar.", cta:"Quiero mejorar", emoji:"🎧", bg:"#FFF6E0" },
    { title:"Tecnología", desc:"Si lo que necesitas es automatizar tu comunicación a través de plataformas efectivas y analíticas, sabemos cómo.", cta:"Quiero eficientar", emoji:"⚙️", bg:"#FFF6E0" },
  ];
  return (
    <section style={{ background:"#fff", padding:"60px 0" }}>
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"0 32px" }}>
        <h2 style={{ fontFamily:"Poppins", fontSize:28, fontWeight:700, color:"#0D1B33", textAlign:"center", margin:"0 0 40px" }}>Nuestras soluciones</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
          {solutions.map((s,i) => (
            <div key={i} style={{ background:"#fff", border:"1px solid #E8EDF5", borderRadius:16, padding:"24px 28px", boxShadow:"0 2px 8px rgba(0,87,184,.06)" }}>
              <div style={{ background:s.bg, borderRadius:12, width:"100%", height:150, display:"flex", alignItems:"center", justifyContent:"center", fontSize:72, marginBottom:16 }}>{s.emoji}</div>
              <h3 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:700, color:"#0D1B33", margin:"0 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize:13, color:"#7A8EAD", lineHeight:1.5, margin:"0 0 16px" }}>{s.desc}</p>
              <button style={{ background:"#0057B8", color:"#fff", border:"none", padding:"8px 16px", borderRadius:8, fontWeight:600, fontSize:12, cursor:"pointer" }}>{s.cta} →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.CelcomServiciosTabs = ServiciosTabs;
window.CelcomSolucionesGrid = SolucionesGrid;
