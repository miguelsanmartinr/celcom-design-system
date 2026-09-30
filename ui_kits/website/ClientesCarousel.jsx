function ClientesCarousel() {
  const clients = ["Penta Vida", "abastible", "AGUAS ANDINAS", "enjoy", "Falabella", "Ripley"];
  return (
    <section style={{ background:"#fff", padding:"50px 0" }}>
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"0 32px" }}>
        <h2 style={{ fontFamily:"Poppins", fontSize:24, fontWeight:700, color:"#0D1B33", textAlign:"center", margin:"0 0 30px" }}>Nuestros clientes</h2>
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          <button style={{ width:36, height:36, borderRadius:"50%", border:"none", background:"#FFB800", color:"#001F5B", fontSize:16, fontWeight:700, cursor:"pointer" }}>‹</button>
          <div style={{ flex:1, display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:24 }}>
            {clients.slice(0,4).map((c,i) => (
              <div key={i} style={{ height:60, background:"#F4F6FB", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Poppins", fontWeight:700, color:"#7A8EAD", fontSize:13 }}>{c}</div>
            ))}
          </div>
          <button style={{ width:36, height:36, borderRadius:"50%", border:"none", background:"#FFB800", color:"#001F5B", fontSize:16, fontWeight:700, cursor:"pointer" }}>›</button>
        </div>
      </div>
    </section>
  );
}

function TestimonioSlider() {
  return (
    <section style={{ background:"#0057B8", padding:"60px 0" }}>
      <div style={{ maxWidth:900, margin:"0 auto", padding:"0 32px" }}>
        <h3 style={{ fontFamily:"Poppins", fontSize:22, fontWeight:700, color:"#fff", textAlign:"center", margin:"0 0 36px", lineHeight:1.3 }}>
          Y estas son las experiencias que han tenido<br/>desde que son parte de Celcom
        </h3>
        <div style={{ display:"flex", alignItems:"center", gap:20 }}>
          <button style={{ width:40, height:40, borderRadius:"50%", border:"none", background:"#FFB800", color:"#001F5B", fontSize:18, fontWeight:700, cursor:"pointer", flexShrink:0 }}>‹</button>
          <div style={{ flex:1, display:"grid", gridTemplateColumns:"1fr 2fr", gap:30, alignItems:"center" }}>
            <div style={{ background:"#fff", borderRadius:12, padding:"20px 24px", textAlign:"center" }}>
              <p style={{ fontFamily:"Poppins", fontWeight:800, fontSize:22, color:"#0057B8", margin:0 }}>FIDELIS</p>
              <p style={{ fontSize:10, color:"#7A8EAD", margin:"4px 0 0" }}>Marketing Relacional</p>
            </div>
            <div style={{ color:"#fff" }}>
              <p style={{ fontFamily:"Poppins", fontSize:18, fontWeight:700, margin:"0 0 2px" }}>Paula Marín</p>
              <p style={{ fontSize:12, color:"rgba(255,255,255,.7)", margin:"0 0 10px" }}>Jefa de proyectos Fidelis</p>
              <p style={{ fontSize:13, lineHeight:1.6, margin:0, color:"rgba(255,255,255,.9)" }}>
                Para nosotros, trabajar con la plataforma Celcom SMS ha sido de mucha importancia, ya que nos ha facilitado la comunicación hacia nuestros clientes.
              </p>
            </div>
          </div>
          <button style={{ width:40, height:40, borderRadius:"50%", border:"none", background:"#FFB800", color:"#001F5B", fontSize:18, fontWeight:700, cursor:"pointer", flexShrink:0 }}>›</button>
        </div>
      </div>
    </section>
  );
}

window.CelcomClientesCarousel = ClientesCarousel;
window.CelcomTestimonioSlider = TestimonioSlider;
