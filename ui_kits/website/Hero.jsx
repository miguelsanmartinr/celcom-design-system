function Hero() {
  return (
    <section style={{ background:"#0057B8", padding:"80px 0", overflow:"hidden" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 32px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center" }}>
        <div>
          <h1 style={{
            fontFamily:"Poppins", fontSize:44, fontWeight:800, color:"#fff",
            lineHeight:1.15, margin:"0 0 28px", letterSpacing:"-0.01em"
          }}>
            Somos el puente entre la comunicación que deseas y las herramientas que necesitas para lograrlo
          </h1>
          <button style={{
            background:"#FFB800", color:"#001F5B", border:"none", padding:"13px 28px",
            borderRadius:8, fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"Inter",
            boxShadow:"0 4px 16px rgba(255,184,0,0.3)"
          }}>Escríbenos</button>
        </div>
        <div style={{ position:"relative", height:320, display:"flex", alignItems:"center", justifyContent:"center" }}>
          {/* Phone mock */}
          <div style={{
            width:140, height:260, background:"#0D1B33", borderRadius:22, border:"6px solid #1a2745",
            boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative", zIndex:3
          }}>
            <div style={{ position:"absolute", top:10, left:"50%", transform:"translateX(-50%)",
              width:40, height:4, background:"#1a2745", borderRadius:2 }} />
            <div style={{ padding:"26px 14px" }}>
              <div style={{ background:"#FFB800", borderRadius:10, padding:10, marginBottom:8 }}>
                <div style={{ height:3, background:"rgba(0,31,91,.3)", borderRadius:2, marginBottom:5, width:"70%" }} />
                <div style={{ height:3, background:"rgba(0,31,91,.3)", borderRadius:2, width:"45%" }} />
              </div>
              <div style={{ background:"rgba(255,255,255,.12)", borderRadius:10, padding:10 }}>
                <div style={{ height:3, background:"rgba(255,255,255,.3)", borderRadius:2, marginBottom:5, width:"80%" }} />
                <div style={{ height:3, background:"rgba(255,255,255,.3)", borderRadius:2, width:"60%" }} />
              </div>
            </div>
          </div>
          {/* Blobs */}
          <div style={{ position:"absolute", width:180, height:180, background:"#FFB800",
            borderRadius:"42% 58% 60% 40% / 55% 40% 60% 45%", left:"45%", top:"15%", opacity:.9, zIndex:1 }} />
          <div style={{ position:"absolute", width:40, height:40, background:"#FFD966", borderRadius:"50%",
            right:"12%", top:"20%", zIndex:2 }} />
          <div style={{ position:"absolute", width:24, height:24, background:"#fff", borderRadius:"50%",
            right:"22%", top:"45%", zIndex:2, opacity:.95 }} />
          <div style={{ position:"absolute", width:30, height:18, background:"#FFB800",
            borderRadius:4, left:"12%", top:"35%", transform:"rotate(-20deg)", zIndex:2 }} />
          <div style={{ position:"absolute", width:44, height:44, background:"#fff",
            borderRadius:"50%", right:"8%", bottom:"20%", zIndex:2, opacity:.9 }} />
          <div style={{ position:"absolute", width:24, height:24, background:"#FFB800",
            borderRadius:"50%", left:"18%", bottom:"18%", zIndex:2 }} />
        </div>
      </div>
    </section>
  );
}

window.CelcomHero = Hero;
