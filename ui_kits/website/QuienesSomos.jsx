function QuienesSomos() {
  return (
    <section style={{ background:"#fff", padding:"80px 0" }}>
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"0 32px", textAlign:"center" }}>
        <h2 style={{ fontFamily:"Poppins", fontSize:30, fontWeight:700, color:"#0D1B33", margin:"0 0 50px" }}>¿Quiénes somos?</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center", textAlign:"left" }}>
          <div style={{ position:"relative", height:280 }}>
            {/* Blob 1 */}
            <div style={{ position:"absolute", left:0, top:0, width:150, height:150, background:"#E8EDF5", borderRadius:"60% 40% 55% 45%", zIndex:1 }} />
            <div style={{ position:"absolute", left:30, top:20, width:150, height:110, background:"#f5f5f5", borderRadius:12, zIndex:2, display:"flex", alignItems:"center", justifyContent:"center", color:"#9AACC8", fontSize:12 }}>[Imagen equipo]</div>
            {/* Blob 2 */}
            <div style={{ position:"absolute", right:0, bottom:0, width:180, height:180, background:"#FFB800", borderRadius:"50% 50% 40% 60%", zIndex:1 }} />
            <div style={{ position:"absolute", right:20, bottom:20, width:170, height:140, background:"#f5f5f5", borderRadius:12, zIndex:2, display:"flex", alignItems:"center", justifyContent:"center", color:"#9AACC8", fontSize:12 }}>[Imagen cliente]</div>
          </div>
          <p style={{ fontSize:17, color:"#3A4A6B", lineHeight:1.7, margin:0 }}>
            <strong style={{ color:"#0D1B33", fontWeight:700 }}>Celcom</strong> es un integrador móvil de valor agregado que ofrece plataformas bidireccionales de contactabilidad basadas en mensajería <strong style={{ color:"#0D1B33" }}>A2P</strong> (aplicativo–persona) en <strong style={{ color:"#0D1B33" }}>SMS, WhatsApp API, Email Marketing, VMS y Chatbots</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

function PromesaBanner({ variant="blue" }) {
  const isBlue = variant === "blue";
  return (
    <section style={{ background: isBlue ? "#0057B8" : "#FFB800", padding:"40px 0" }}>
      <div style={{ maxWidth:900, margin:"0 auto", padding:"0 32px", textAlign:"center" }}>
        <p style={{ fontSize:15, fontWeight:700, color: isBlue ? "#fff" : "#001F5B", lineHeight:1.6, margin:"0 0 14px" }}>
          {isBlue ? "Nos hemos comprometido" : "Si no sabes cuál es la solución ideal"} <span style={{ fontWeight:500 }}>
          {isBlue
            ? "con no solo acompañar a nuestros clientes en la implementación de las herramientas; también queremos que puedan sacar el mayor provecho de ellas."
            : "para lograr la meta que te has planteado como empresa, no te preocupes. De acuerdo a tu objetivo tenemos soluciones ideales para cumplirlo."}
          </span>
        </p>
      </div>
    </section>
  );
}

window.CelcomQuienesSomos = QuienesSomos;
window.CelcomPromesaBanner = PromesaBanner;
