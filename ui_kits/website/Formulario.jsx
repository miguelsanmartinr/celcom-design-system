function Formulario() {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background:"#F4F6FB", padding:"70px 0" }}>
      <div style={{ maxWidth:900, margin:"0 auto", padding:"0 32px" }}>
        <p style={{ textAlign:"center", fontSize:14, color:"#3A4A6B", lineHeight:1.6, margin:"0 0 8px", maxWidth:600, marginInline:"auto" }}>
          Estamos seguros de que somos el partner que estás buscando, así que déjanos tus datos y nuestro equipo se comunicará contigo en menos de 24 horas. <strong style={{ color:"#0D1B33" }}>Es una promesa.</strong>
        </p>
        <h2 style={{ fontFamily:"Poppins", fontSize:24, fontWeight:700, color:"#0D1B33", textAlign:"center", margin:"20px 0 32px" }}>Formulario general</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, alignItems:"center" }}>
          <div style={{ height:260, background:"#fff", borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:72 }}>🖥️</div>
          <div style={{ background:"#0057B8", borderRadius:20, padding:"28px 26px" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"40px 20px", color:"#fff" }}>
                <div style={{ fontSize:36, marginBottom:10 }}>✓</div>
                <p style={{ fontFamily:"Poppins", fontWeight:700, fontSize:18, margin:"0 0 6px" }}>¡Gracias!</p>
                <p style={{ fontSize:13, margin:0, opacity:.75 }}>Nos comunicaremos contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                <input placeholder="Nombre" style={inp} />
                <input placeholder="Apellido" style={inp} />
                <input placeholder="Teléfono" style={inp} />
                <input placeholder="Email" style={inp} />
                <input placeholder="País" style={{ ...inp, gridColumn:"span 2" }} />
                <input placeholder="Empresa" style={inp} />
                <input placeholder="Cargo" style={inp} />
                <select style={{ ...inp, gridColumn:"span 2" }}><option>Servicio</option><option>WhatsApp API</option><option>SMS Masivo</option><option>Email Marketing</option><option>Chatbot</option></select>
                <textarea placeholder="Mensaje" rows={3} style={{ ...inp, gridColumn:"span 2", resize:"none", fontFamily:"Inter" }} />
                <button style={{ gridColumn:"span 2", background:"#FFB800", color:"#001F5B", border:"none", padding:"11px 22px", borderRadius:8, fontWeight:700, fontSize:14, cursor:"pointer", justifySelf:"start" }}>Cotizar</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inp = {
  padding:"9px 12px", borderRadius:6, border:"none", fontSize:13,
  background:"#fff", color:"#0D1B33", fontFamily:"Inter", outline:"none"
};

function ChatWidget() {
  const [open, setOpen] = React.useState(true);
  if (!open) return (
    <button onClick={() => setOpen(true)} style={{ position:"fixed", right:20, bottom:20, width:56, height:56, borderRadius:"50%", background:"#0057B8", color:"#fff", border:"none", fontSize:24, cursor:"pointer", zIndex:50, boxShadow:"0 8px 24px rgba(0,87,184,.3)" }}>💬</button>
  );
  return (
    <div style={{ position:"fixed", right:20, bottom:20, width:280, background:"#fff", borderRadius:12, boxShadow:"0 16px 48px rgba(0,87,184,.25)", overflow:"hidden", zIndex:50 }}>
      <div style={{ background:"#0057B8", padding:"10px 14px", color:"#fff", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontWeight:700, fontSize:13 }}>💬 Asistente Comercial Celcom</span>
        <button onClick={() => setOpen(false)} style={{ background:"none", border:"none", color:"#fff", cursor:"pointer", fontSize:16 }}>×</button>
      </div>
      <div style={{ padding:"14px", background:"#0057B8", color:"#fff" }}>
        <p style={{ fontSize:12, margin:"0 0 10px" }}>Estoy aquí para ayudarte 24/7.</p>
      </div>
      <div style={{ padding:"40px 16px 20px", textAlign:"center", background:"#fff" }}>
        <button style={{ background:"#FFB800", color:"#001F5B", border:"none", padding:"10px 20px", borderRadius:8, fontWeight:700, fontSize:13, cursor:"pointer" }}>Iniciar conversación</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background:"#001F5B", color:"#fff", padding:"50px 0 30px" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 32px", display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr", gap:40 }}>
        <div>
          <img src="../../assets/logo-celcom.svg" alt="Celcom" style={{ height:22, filter:"brightness(0) invert(1)", marginBottom:18 }} />
          <p style={{ fontSize:12, color:"rgba(255,255,255,.7)", margin:"0 0 16px", lineHeight:1.6 }}>General Holley 133, Providencia,<br/>Santiago, Chile.</p>
          <div style={{ display:"flex", gap:10 }}>
            <a style={socialStyle}>f</a>
            <a style={socialStyle}>in</a>
          </div>
        </div>
        <div>
          <p style={{ fontWeight:700, fontSize:13, margin:"0 0 14px" }}>Contacto</p>
          <p style={footerLink}>📧 contacto@celcom.cl</p>
          <p style={footerLink}>📱 +56 9 5800 3634</p>
          <p style={{ ...footerLink, fontWeight:600, marginTop:14 }}>Centro de ayuda</p>
          <p style={footerLink}>📞 +56 2 2712 5911</p>
        </div>
        <div>
          <p style={{ fontWeight:700, fontSize:13, margin:"0 0 14px" }}>Servicios</p>
          <p style={footerLink}>SMS Marketing</p>
          <p style={footerLink}>WhatsApp API</p>
          <p style={footerLink}>Email Marketing</p>
          <p style={footerLink}>Chatbot</p>
          <p style={{ ...footerLink, marginTop:14, textDecoration:"underline" }}>Términos y condiciones</p>
        </div>
      </div>
      <div style={{ maxWidth:1160, margin:"30px auto 0", padding:"20px 32px 0", borderTop:"1px solid rgba(255,255,255,.1)", display:"flex", gap:20, alignItems:"center", fontSize:11, color:"rgba(255,255,255,.5)" }}>
        <span>🇨🇱 Chile</span><span>🇵🇪 Perú</span><span>🇲🇽 México</span><span>🇨🇴 Colombia</span><span>🇧🇴 Bolivia</span>
      </div>
    </footer>
  );
}

const socialStyle = { width:30, height:30, borderRadius:"50%", background:"rgba(255,255,255,.1)", display:"inline-flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12, fontWeight:700, cursor:"pointer", textDecoration:"none" };
const footerLink = { fontSize:12, color:"rgba(255,255,255,.7)", margin:"0 0 6px", cursor:"pointer" };

window.CelcomFormulario = Formulario;
window.CelcomChatWidget = ChatWidget;
window.CelcomFooter = Footer;
