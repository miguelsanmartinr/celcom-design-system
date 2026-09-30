/* global React */
const { useState } = React;

function Header() {
  const [active, setActive] = React.useState("Home");
  const items = ["Home", "Servicios", "Soluciones", "Negocios", "Equipo", "Blog"];
  return (
    <header style={{ background:"#fff", borderBottom:"1px solid #E8EDF5", padding:"14px 0", position:"sticky", top:0, zIndex:10 }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 32px", display:"flex", alignItems:"center", gap:32 }}>
        <img src="../../assets/logo-celcom.svg" alt="Celcom" style={{ height:26 }} />
        <nav style={{ display:"flex", gap:24, marginLeft:"auto" }}>
          {items.map(it => {
            const isActive = active === it;
            return (
              <a key={it} onClick={() => setActive(it)} style={{
                fontSize:14, fontWeight:500, color:isActive?"#0057B8":"#3A4A6B",
                textDecoration:"none", cursor:"pointer", position:"relative",
                borderBottom: isActive ? "2px solid #0057B8" : "2px solid transparent",
                paddingBottom:4,
              }}>
                {it}{(it==="Servicios"||it==="Soluciones"||it==="Negocios") && <span style={{ marginLeft:4, fontSize:10 }}>▾</span>}
              </a>
            );
          })}
        </nav>
        <button style={{
          background:"#FFB800", color:"#001F5B", border:"none", padding:"10px 20px",
          borderRadius:8, fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"Inter"
        }}>Compra de créditos SMS</button>
      </div>
    </header>
  );
}

window.CelcomHeader = Header;
