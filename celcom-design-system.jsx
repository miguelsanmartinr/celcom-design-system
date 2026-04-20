import { useState } from "react";

// ============================================================
// CELCOM LATAM — DESIGN SYSTEM v1.1
// celcomlatam.com · Actualizado Abril 2026
// ============================================================

const tokens = {
  colors: {
    brand: {
      primary:     "#0057B8",
      primaryDark: "#003D82",
      primaryLight:"#3A82D4",
      secondary:   "#001F5B",
      accent:      "#FFB800",   // ← Amarillo Celcom
      accentDark:  "#CC9200",
      accentLight: "#FFD966",
    },
    neutral: {
      white: "#FFFFFF",
      50:    "#FAFBFF",
      100:   "#F4F6FB",
      200:   "#E8EDF5",
      300:   "#C7D2E6",
      400:   "#9AACC8",
      500:   "#7A8EAD",
      700:   "#3A4A6B",
      900:   "#0D1B33",
    },
    semantic: {
      success: "#22C55E",
      warning: "#F59E0B",
      error:   "#EF4444",
      info:    "#3A82D4",
    },
    channels: {
      whatsapp: "#25D366",
      sms:      "#0057B8",
      email:    "#FFB800",
      chatbot:  "#8B5CF6",
    },
  },
  typography: {
    families: {
      heading: "'Poppins','Montserrat',sans-serif",
      body:    "'Inter','Open Sans',sans-serif",
      mono:    "'Fira Code',monospace",
    },
    scale: {
      "2xs": "0.625rem",
      xs:    "0.75rem",
      sm:    "0.875rem",
      base:  "1rem",
      lg:    "1.125rem",
      xl:    "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    weights: { regular:400, medium:500, semibold:600, bold:700, extrabold:800 },
    lineHeights: { tight:1.2, normal:1.5, relaxed:1.75 },
  },
  spacing: {1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",8:"32px",10:"40px",12:"48px",16:"64px",20:"80px"},
  radii:   { none:"0",sm:"4px",md:"8px",lg:"12px",xl:"16px","2xl":"24px",full:"9999px" },
  shadows: {
    xs:  "0 1px 2px rgba(0,0,0,0.06)",
    sm:  "0 1px 3px rgba(0,0,0,0.08)",
    md:  "0 4px 12px rgba(0,87,184,0.10)",
    lg:  "0 8px 24px rgba(0,87,184,0.14)",
    xl:  "0 16px 48px rgba(0,87,184,0.18)",
    accent: "0 4px 16px rgba(255,184,0,0.30)",
  },
  motion: { fast:"150ms ease", normal:"250ms ease", slow:"400ms ease-in-out" },
};

const T = tokens;
const C = T.colors;
const navItems = ["Tokens","Tipografía","Componentes","SaaS","Patrones","Canales"];

// ─── HELPERS ──────────────────────────────────────────────
function Section({ title, subtitle, children }) {
  return (
    <div style={{ marginBottom:56 }}>
      <h2 style={{ fontSize:T.typography.scale["2xl"], fontWeight:T.typography.weights.bold,
        color:C.neutral[900], margin:"0 0 4px" }}>{title}</h2>
      {subtitle && <p style={{ color:C.neutral[500], fontSize:T.typography.scale.sm,
        margin:"0 0 28px" }}>{subtitle}</p>}
      {children}
    </div>
  );
}
function Grid({ cols=3, gap=16, children }) {
  return <div style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap }}>{children}</div>;
}
function Card({ children, style={} }) {
  return <div style={{ background:C.neutral.white, border:`1px solid ${C.neutral[200]}`,
    borderRadius:T.radii.lg, padding:20, ...style }}>{children}</div>;
}
function Label({ children, color=C.neutral[500] }) {
  return <p style={{ fontSize:T.typography.scale.xs, color, fontWeight:T.typography.weights.semibold,
    textTransform:"uppercase", letterSpacing:"0.06em", margin:"0 0 10px" }}>{children}</p>;
}
function Chip({ children, color=C.brand.primary, bg }) {
  return <span style={{ display:"inline-flex", alignItems:"center", padding:"3px 10px",
    borderRadius:T.radii.full, background: bg || color+"18", color,
    fontSize:T.typography.scale.xs, fontWeight:T.typography.weights.semibold }}>{children}</span>;
}
function Divider() {
  return <div style={{ height:1, background:C.neutral[200], margin:"28px 0" }} />;
}

// ─── BUTTONS ──────────────────────────────────────────────
function Btn({ variant="primary", size="md", children, disabled, icon, fullWidth }) {
  const vs = {
    primary:  { bg:C.brand.primary,  text:"#fff",           border:C.brand.primary },
    accent:   { bg:C.brand.accent,   text:C.brand.secondary, border:C.brand.accent },
    secondary:{ bg:"transparent",    text:C.brand.primary,   border:C.brand.primary },
    ghost:    { bg:"transparent",    text:C.neutral[700],    border:C.neutral[300] },
    danger:   { bg:C.semantic.error, text:"#fff",            border:C.semantic.error },
    dark:     { bg:C.brand.secondary,text:"#fff",            border:C.brand.secondary },
  };
  const sz = {
    xs: { px:"10px", py:"5px",  fs:T.typography.scale.xs },
    sm: { px:"14px", py:"7px",  fs:T.typography.scale.sm },
    md: { px:"20px", py:"10px", fs:T.typography.scale.base },
    lg: { px:"28px", py:"13px", fs:T.typography.scale.lg },
  };
  const s=vs[variant]; const z=sz[size];
  return (
    <button style={{ background: disabled ? C.neutral[200] : s.bg,
      color: disabled ? C.neutral[400] : s.text,
      border:`2px solid ${disabled ? C.neutral[200] : s.border}`,
      padding:`${z.py} ${z.px}`, fontSize:z.fs,
      fontWeight:T.typography.weights.semibold,
      fontFamily:T.typography.families.body,
      borderRadius:T.radii.md, cursor: disabled ? "not-allowed" : "pointer",
      transition:T.motion.fast, display:"inline-flex",
      alignItems:"center", gap:6, width: fullWidth ? "100%" : undefined,
      justifyContent: fullWidth ? "center" : undefined,
    }}>{icon && <span>{icon}</span>}{children}</button>
  );
}

// ─── TOKENS TAB ───────────────────────────────────────────
function ColorSwatch({ name, hex, textColor="#fff" }) {
  const [copied,setCopied] = useState(false);
  return (
    <div style={{ borderRadius:T.radii.md, overflow:"hidden", boxShadow:T.shadows.sm,
      cursor:"pointer" }}
      onClick={() => { navigator.clipboard?.writeText(hex); setCopied(true); setTimeout(()=>setCopied(false),1200); }}>
      <div style={{ background:hex, height:60, display:"flex", alignItems:"flex-end", padding:8 }}>
        <span style={{ fontSize:"10px", color:textColor, opacity:0.85 }}>{copied?"✓ copiado":hex}</span>
      </div>
      <div style={{ background:C.neutral.white, padding:"8px 10px", borderTop:`1px solid ${C.neutral[200]}` }}>
        <p style={{ fontSize:T.typography.scale.xs, color:C.neutral[700], fontWeight:600, margin:0 }}>{name}</p>
      </div>
    </div>
  );
}
function TokensTab() {
  const groups = [
    { label:"Marca", cols:7, items:[
      {name:"Primary",     hex:C.brand.primary},
      {name:"Primary Dark",hex:C.brand.primaryDark},
      {name:"Primary Light",hex:C.brand.primaryLight},
      {name:"Secondary",   hex:C.brand.secondary},
      {name:"Accent ★",    hex:C.brand.accent, textColor:C.brand.secondary},
      {name:"Accent Dark", hex:C.brand.accentDark, textColor:C.brand.secondary},
      {name:"Accent Light",hex:C.brand.accentLight, textColor:C.brand.secondary},
    ]},
    { label:"Neutral", cols:7, items:[
      {name:"White",   hex:C.neutral.white,  textColor:"#ccc"},
      {name:"50",      hex:C.neutral[50],    textColor:"#aaa"},
      {name:"100",     hex:C.neutral[100],   textColor:"#999"},
      {name:"200",     hex:C.neutral[200],   textColor:"#888"},
      {name:"300",     hex:C.neutral[300]},
      {name:"500",     hex:C.neutral[500]},
      {name:"900",     hex:C.neutral[900]},
    ]},
    { label:"Semánticos", cols:4, items:[
      {name:"Success",hex:C.semantic.success},
      {name:"Warning",hex:C.semantic.warning,textColor:C.brand.secondary},
      {name:"Error",  hex:C.semantic.error},
      {name:"Info",   hex:C.semantic.info},
    ]},
    { label:"Canales", cols:4, items:[
      {name:"WhatsApp",hex:C.channels.whatsapp},
      {name:"SMS",     hex:C.channels.sms},
      {name:"Email",   hex:C.channels.email, textColor:C.brand.secondary},
      {name:"Chatbot", hex:C.channels.chatbot},
    ]},
  ];
  return (
    <div>
      {/* Accent highlight */}
      <div style={{ background:`linear-gradient(135deg,${C.brand.accent} 0%,${C.brand.accentLight} 100%)`,
        borderRadius:T.radii.xl, padding:"20px 24px", marginBottom:32,
        display:"flex", alignItems:"center", gap:16, boxShadow:T.shadows.accent }}>
        <div style={{ width:56, height:56, background:"rgba(0,0,0,0.12)", borderRadius:T.radii.lg,
          display:"flex", alignItems:"center", justifyContent:"center", fontSize:28 }}>★</div>
        <div>
          <p style={{ fontWeight:800, fontSize:T.typography.scale.lg, color:C.brand.secondary, margin:"0 0 2px" }}>
            Amarillo Celcom — #FFB800
          </p>
          <p style={{ fontSize:T.typography.scale.sm, color:C.brand.secondary, opacity:0.7, margin:0 }}>
            Color de acento principal. Uso en CTAs secundarios, highlights, iconografía y elementos de énfasis.
          </p>
        </div>
        <div style={{ marginLeft:"auto", display:"flex", gap:8 }}>
          {[C.brand.accent,C.brand.accentDark,C.brand.accentLight].map((h,i) => (
            <div key={i} style={{ width:40, height:40, background:h, borderRadius:T.radii.full,
              border:"2px solid rgba(0,0,0,0.1)" }} />
          ))}
        </div>
      </div>

      <Section title="Paleta de Colores" subtitle="Clic en cualquier muestra para copiar el HEX.">
        {groups.map(g => (
          <div key={g.label} style={{ marginBottom:28 }}>
            <Label>{g.label}</Label>
            <div style={{ display:"grid", gridTemplateColumns:`repeat(${g.cols},1fr)`, gap:10 }}>
              {g.items.map(s => <ColorSwatch key={s.name} {...s} />)}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Espaciado" subtitle="Escala basada en múltiplos de 4px.">
        <div style={{ display:"flex", flexWrap:"wrap", gap:12, alignItems:"flex-end" }}>
          {Object.entries(T.spacing).map(([k,v]) => (
            <div key={k} style={{ textAlign:"center" }}>
              <div style={{ background:C.brand.primaryLight, width:v, height:v, borderRadius:4, margin:"0 auto 4px" }} />
              <p style={{ fontSize:10, color:C.neutral[500], margin:"0 0 1px" }}>{k}</p>
              <p style={{ fontSize:10, color:C.neutral[700], fontWeight:600, margin:0 }}>{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Grid cols={2} gap={24}>
        <Section title="Border Radius" subtitle="Curvaturas del sistema.">
          <div style={{ display:"flex", flexWrap:"wrap", gap:14, alignItems:"center" }}>
            {Object.entries(T.radii).map(([k,v]) => (
              <div key={k} style={{ textAlign:"center" }}>
                <div style={{ width:52, height:52, background:`${C.brand.primary}18`,
                  border:`2px solid ${C.brand.primary}`, borderRadius:v }} />
                <p style={{ fontSize:10, color:C.neutral[500], marginTop:4 }}>{k}</p>
                <p style={{ fontSize:10, color:C.neutral[700], fontWeight:600 }}>{v}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Sombras" subtitle="Niveles de elevación.">
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {Object.entries(T.shadows).map(([k,v]) => (
              <div key={k} style={{ background:C.neutral.white, borderRadius:T.radii.md,
                boxShadow:v, padding:"10px 16px", display:"flex", justifyContent:"space-between" }}>
                <span style={{ fontSize:T.typography.scale.sm, fontWeight:600, color:C.neutral[700] }}>shadow-{k}</span>
                <span style={{ fontSize:T.typography.scale.xs, color:C.neutral[400] }}>{v.slice(0,32)}…</span>
              </div>
            ))}
          </div>
        </Section>
      </Grid>
    </div>
  );
}

// ─── TYPOGRAPHY TAB ───────────────────────────────────────
function TypographyTab() {
  const scale = [
    { size:"5xl",  label:"Hero",       weight:"extrabold", sample:"Somos el puente entre la comunicación" },
    { size:"4xl",  label:"H1 Página",  weight:"bold",      sample:"Automatiza tu atención al cliente" },
    { size:"3xl",  label:"H2 Sección", weight:"bold",      sample:"¿Quiénes somos?" },
    { size:"2xl",  label:"H3",         weight:"semibold",  sample:"Servicios de comunicación masiva" },
    { size:"xl",   label:"H4",         weight:"semibold",  sample:"WhatsApp API Business" },
    { size:"lg",   label:"Body Large", weight:"regular",   sample:"Celcom es un integrador móvil de valor agregado que ofrece plataformas bidireccionales de contactabilidad." },
    { size:"base", label:"Body Base",  weight:"regular",   sample:"Conecta con tus clientes a través de la app de mensajería más utilizada en el mundo." },
    { size:"sm",   label:"Caption",    weight:"medium",    sample:"Términos y condiciones · Política de privacidad · SUBTEL" },
    { size:"xs",   label:"Label/Overline",weight:"semibold",sample:"SERVICIO CHATBOT · SMS MASIVO · WHATSAPP API" },
  ];
  return (
    <Section title="Escala Tipográfica" subtitle="Poppins para títulos · Inter para cuerpo · escala 1.25x">
      <div style={{ display:"flex", flexDirection:"column", gap:0, borderRadius:T.radii.xl,
        overflow:"hidden", border:`1px solid ${C.neutral[200]}` }}>
        {scale.map((item, i) => (
          <div key={item.size} style={{ padding:"18px 24px",
            background: i % 2 === 0 ? C.neutral.white : C.neutral[50],
            display:"flex", alignItems:"baseline", gap:24, borderBottom:`1px solid ${C.neutral[200]}` }}>
            <div style={{ minWidth:130, flexShrink:0 }}>
              <Chip color={C.brand.primary}>{item.label}</Chip>
              <p style={{ fontSize:10, color:C.neutral[400], marginTop:4, marginBottom:0 }}>
                {T.typography.scale[item.size]} · {item.weight}
              </p>
            </div>
            <p style={{ fontFamily:T.typography.families.heading,
              fontSize:T.typography.scale[item.size],
              fontWeight:T.typography.weights[item.weight],
              color:C.neutral[900], lineHeight:T.typography.lineHeights.tight,
              margin:0, maxWidth:580 }}>{item.sample}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── BASE COMPONENTS TAB ──────────────────────────────────
function InputField({ label, placeholder, hint, error, type="text" }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
      {label && <label style={{ fontSize:T.typography.scale.sm,
        fontWeight:T.typography.weights.semibold, color:C.neutral[700] }}>{label}</label>}
      <input type={type} placeholder={placeholder} readOnly style={{
        padding:"10px 14px", borderRadius:T.radii.md,
        border:`1.5px solid ${error ? C.semantic.error : C.neutral[300]}`,
        fontSize:T.typography.scale.base, fontFamily:T.typography.families.body,
        color:C.neutral[900], outline:"none", background:C.neutral.white,
      }} />
      {hint && !error && <p style={{ fontSize:T.typography.scale.xs, color:C.neutral[400], margin:0 }}>{hint}</p>}
      {error && <p style={{ fontSize:T.typography.scale.xs, color:C.semantic.error, margin:0 }}>⚠ {error}</p>}
    </div>
  );
}
function AlertBox({ type, title, message }) {
  const map = {
    success:{bg:"#ECFDF5",border:C.semantic.success,icon:"✓"},
    warning:{bg:"#FFFBEB",border:C.semantic.warning,icon:"⚠"},
    error:  {bg:"#FEF2F2",border:C.semantic.error,  icon:"✕"},
    info:   {bg:"#EFF6FF",border:C.semantic.info,   icon:"ℹ"},
    accent: {bg:"#FFFBEB",border:C.brand.accent,    icon:"★"},
  };
  const m=map[type];
  return (
    <div style={{ background:m.bg, border:`1px solid ${m.border}`,
      borderLeft:`4px solid ${m.border}`, borderRadius:T.radii.md, padding:"12px 16px" }}>
      <p style={{ fontWeight:700, color:m.border, fontSize:T.typography.scale.sm, margin:"0 0 2px" }}>{m.icon} {title}</p>
      <p style={{ fontSize:T.typography.scale.sm, color:C.neutral[700], margin:0 }}>{message}</p>
    </div>
  );
}
function ComponentsTab() {
  return (
    <div>
      <Section title="Botones" subtitle="Sistema de botones con acento amarillo como variante secundaria de alto impacto.">
        <Card>
          <Label>Variantes</Label>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:24 }}>
            <Btn variant="primary">Quiero usarla</Btn>
            <Btn variant="accent" icon="★">Comenzar gratis</Btn>
            <Btn variant="secondary">Ver servicios</Btn>
            <Btn variant="ghost">Cancelar</Btn>
            <Btn variant="dark">Plataforma</Btn>
            <Btn variant="danger">Eliminar</Btn>
          </div>
          <Label>Tamaños</Label>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap", alignItems:"center", marginBottom:24 }}>
            <Btn size="xs" variant="accent">XS</Btn>
            <Btn size="sm" variant="accent">Pequeño</Btn>
            <Btn size="md" variant="accent">Mediano</Btn>
            <Btn size="lg" variant="accent">Grande</Btn>
          </div>
          <Label>Estados y uso del acento</Label>
          <div style={{ background:C.brand.secondary, padding:20, borderRadius:T.radii.lg,
            display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}>
            <Btn variant="accent" icon="🚀">Comenzar ahora</Btn>
            <Btn variant="secondary" size="sm">Ver demo</Btn>
            <Btn disabled size="md">Deshabilitado</Btn>
          </div>
        </Card>
      </Section>

      <Section title="Formularios" subtitle="Campos con validación, usados en cotización y contacto.">
        <Card>
          <Grid cols={2} gap={20}>
            <InputField label="Nombre" placeholder="Juan Pérez" hint="Nombre completo" />
            <InputField label="Correo corporativo" placeholder="juan@empresa.com" type="email" />
            <InputField label="Empresa" placeholder="Nombre de tu empresa" />
            <InputField label="Teléfono" placeholder="+56 9 1234 5678" error="Número inválido" />
          </Grid>
        </Card>
      </Section>

      <Section title="Alertas & Notificaciones" subtitle="Feedback del sistema. El acento amarillo para avisos promocionales.">
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          <AlertBox type="accent"   title="¡Nuevo! Celcom Flex disponible" message="Tu plan ahora incluye acceso a la plataforma omnicanal. Actívala sin costo adicional." />
          <AlertBox type="success"  title="Formulario enviado" message="Nuestro equipo se comunicará contigo en menos de 24 horas." />
          <AlertBox type="info"     title="Verificación en proceso" message="Tu número de WhatsApp está siendo validado. Toma entre 7–20 días hábiles." />
          <AlertBox type="warning"  title="Saldo bajo" message="Tu cuenta tiene menos de 500 créditos SMS. Recarga para mantener tus envíos activos." />
          <AlertBox type="error"    title="Error de autenticación" message="Las credenciales no son válidas. Revisa tu service_id y clave." />
        </div>
      </Section>

      <Section title="Chips & Badges" subtitle="Estado, categoría y acento para destacar planes o features.">
        <Card>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            <Chip color={C.brand.accent} bg={C.brand.accent+"22"}>★ Destacado</Chip>
            <Chip color={C.brand.accent} bg={C.brand.accent+"22"}>Pro</Chip>
            <Chip color={C.channels.whatsapp}>WhatsApp</Chip>
            <Chip color={C.channels.sms}>SMS</Chip>
            <Chip color={C.channels.email} bg={C.brand.accent+"22"}>Email</Chip>
            <Chip color={C.channels.chatbot}>Chatbot</Chip>
            <Chip color={C.semantic.success}>Activo</Chip>
            <Chip color={C.semantic.warning} bg={C.semantic.warning+"22"}>Pendiente</Chip>
            <Chip color={C.semantic.error}>Suspendido</Chip>
            <Chip color={C.brand.primaryLight}>Beta</Chip>
            <Chip color={C.neutral[500]}>Archivado</Chip>
          </div>
        </Card>
      </Section>
    </div>
  );
}

// ─── SAAS COMPONENTS TAB ──────────────────────────────────
function ProgressBar({ value, color=C.brand.primary, label, showValue=true }) {
  return (
    <div>
      {(label || showValue) && (
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
          {label && <span style={{ fontSize:T.typography.scale.sm, color:C.neutral[700], fontWeight:500 }}>{label}</span>}
          {showValue && <span style={{ fontSize:T.typography.scale.sm, color:C.neutral[500] }}>{value}%</span>}
        </div>
      )}
      <div style={{ background:C.neutral[200], borderRadius:T.radii.full, height:8, overflow:"hidden" }}>
        <div style={{ width:`${value}%`, height:"100%", background:color,
          borderRadius:T.radii.full, transition:T.motion.slow }} />
      </div>
    </div>
  );
}

function StatusDot({ status }) {
  const map = {
    online:    { color:C.semantic.success, label:"Online" },
    degraded:  { color:C.brand.accent,     label:"Degradado" },
    offline:   { color:C.semantic.error,   label:"Offline" },
    idle:      { color:C.neutral[400],     label:"Inactivo" },
  };
  const m=map[status];
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:6,
      fontSize:T.typography.scale.xs, color:m.color, fontWeight:600 }}>
      <span style={{ width:8, height:8, borderRadius:"50%", background:m.color,
        boxShadow:`0 0 0 2px ${m.color}44`, display:"inline-block" }} />
      {m.label}
    </span>
  );
}

function KpiCard({ icon, label, value, delta, deltaType="up", color=C.brand.primary }) {
  const isUp = deltaType === "up";
  return (
    <div style={{ background:C.neutral.white, borderRadius:T.radii.xl,
      padding:"20px 22px", boxShadow:T.shadows.sm,
      border:`1px solid ${C.neutral[200]}` }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
        <div style={{ width:40, height:40, background:color+"18", borderRadius:T.radii.md,
          display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>{icon}</div>
        {delta && (
          <span style={{ fontSize:T.typography.scale.xs, fontWeight:700,
            color: isUp ? C.semantic.success : C.semantic.error,
            background: (isUp ? C.semantic.success : C.semantic.error)+"15",
            padding:"2px 8px", borderRadius:T.radii.full }}>
            {isUp?"▲":"▼"} {delta}
          </span>
        )}
      </div>
      <p style={{ fontSize:T.typography.scale["2xl"], fontWeight:T.typography.weights.extrabold,
        color:C.neutral[900], margin:"0 0 2px", fontFamily:T.typography.families.heading }}>{value}</p>
      <p style={{ fontSize:T.typography.scale.sm, color:C.neutral[500], margin:0 }}>{label}</p>
    </div>
  );
}

function PricingCard({ plan, price, period="/mes", description, features, cta, highlighted, badge }) {
  return (
    <div style={{ background: highlighted ? C.brand.secondary : C.neutral.white,
      borderRadius:T.radii["2xl"], padding:"28px 24px",
      border: highlighted ? "none" : `1px solid ${C.neutral[200]}`,
      boxShadow: highlighted ? T.shadows.xl : T.shadows.sm,
      position:"relative", display:"flex", flexDirection:"column" }}>
      {badge && (
        <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)",
          background:C.brand.accent, color:C.brand.secondary, fontSize:T.typography.scale.xs,
          fontWeight:800, padding:"4px 16px", borderRadius:T.radii.full,
          boxShadow:T.shadows.accent, whiteSpace:"nowrap" }}>{badge}</div>
      )}
      <p style={{ fontWeight:T.typography.weights.bold, fontSize:T.typography.scale.base,
        color: highlighted ? C.brand.accent : C.brand.primary, margin:"0 0 4px",
        textTransform:"uppercase", letterSpacing:"0.06em" }}>{plan}</p>
      <p style={{ fontSize:T.typography.scale.xs, color: highlighted ? "rgba(255,255,255,0.55)" : C.neutral[500],
        margin:"0 0 16px" }}>{description}</p>
      <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:20 }}>
        <span style={{ fontFamily:T.typography.families.heading, fontSize:T.typography.scale["4xl"],
          fontWeight:800, color: highlighted ? "#fff" : C.neutral[900] }}>{price}</span>
        <span style={{ fontSize:T.typography.scale.sm,
          color: highlighted ? "rgba(255,255,255,0.5)" : C.neutral[400] }}>{period}</span>
      </div>
      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:8, marginBottom:24 }}>
        {features.map((f,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ color: f.inc ? (highlighted ? C.brand.accent : C.semantic.success) : C.neutral[300],
              fontSize:14, flexShrink:0 }}>{f.inc ? "✓" : "✕"}</span>
            <span style={{ fontSize:T.typography.scale.sm,
              color: highlighted ? (f.inc ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)")
                                 : (f.inc ? C.neutral[700] : C.neutral[300]) }}>{f.label}</span>
          </div>
        ))}
      </div>
      <Btn variant={highlighted ? "accent" : "secondary"} fullWidth>{cta}</Btn>
    </div>
  );
}

function StepperFlow({ steps, current=1 }) {
  return (
    <div style={{ display:"flex", alignItems:"flex-start", gap:0 }}>
      {steps.map((step, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center" }}>
            <div style={{ display:"flex", width:"100%", alignItems:"center" }}>
              {i > 0 && <div style={{ flex:1, height:2,
                background: done ? C.brand.accent : C.neutral[200] }} />}
              <div style={{ width:36, height:36, borderRadius:"50%", flexShrink:0,
                background: done ? C.brand.accent : active ? C.brand.primary : C.neutral[200],
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:14, fontWeight:700, color: done ? C.brand.secondary : active ? "#fff" : C.neutral[400],
                boxShadow: active ? T.shadows.md : "none",
                border: active ? `3px solid ${C.brand.primaryLight}` : "none",
                zIndex:1 }}>
                {done ? "✓" : i+1}
              </div>
              {i < steps.length-1 && <div style={{ flex:1, height:2,
                background: done ? C.brand.accent : C.neutral[200] }} />}
            </div>
            <div style={{ textAlign:"center", marginTop:8, padding:"0 4px" }}>
              <p style={{ fontSize:T.typography.scale.xs, fontWeight: active ? 700 : 500,
                color: active ? C.brand.primary : done ? C.neutral[700] : C.neutral[400],
                margin:"0 0 2px" }}>{step.label}</p>
              {step.sub && <p style={{ fontSize:9, color:C.neutral[400], margin:0 }}>{step.sub}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Toast({ type="info", title, message, onClose }) {
  const map = {
    success: { icon:"✓", color:C.semantic.success },
    warning: { icon:"⚠", color:C.brand.accent },
    error:   { icon:"✕", color:C.semantic.error },
    info:    { icon:"ℹ", color:C.semantic.info },
  };
  const m=map[type];
  return (
    <div style={{ background:C.neutral.white, borderRadius:T.radii.lg, boxShadow:T.shadows.xl,
      border:`1px solid ${C.neutral[200]}`, borderLeft:`4px solid ${m.color}`,
      padding:"14px 16px", display:"flex", alignItems:"flex-start", gap:12, width:320 }}>
      <div style={{ width:28, height:28, background:m.color+"18", borderRadius:"50%",
        display:"flex", alignItems:"center", justifyContent:"center",
        color:m.color, fontSize:13, fontWeight:800, flexShrink:0 }}>{m.icon}</div>
      <div style={{ flex:1 }}>
        <p style={{ fontWeight:700, fontSize:T.typography.scale.sm, color:C.neutral[900], margin:"0 0 2px" }}>{title}</p>
        <p style={{ fontSize:T.typography.scale.xs, color:C.neutral[500], margin:0 }}>{message}</p>
      </div>
      <button style={{ background:"none", border:"none", cursor:"pointer", color:C.neutral[400],
        fontSize:16, padding:0, lineHeight:1 }}>×</button>
    </div>
  );
}

function UsageMeter({ label, used, total, unit, color=C.brand.primary, warn=80 }) {
  const pct = Math.round((used/total)*100);
  const barColor = pct >= warn ? C.semantic.error : pct >= warn*0.8 ? C.brand.accent : color;
  return (
    <div style={{ background:C.neutral.white, borderRadius:T.radii.lg, padding:"16px 18px",
      border:`1px solid ${C.neutral[200]}` }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
        <span style={{ fontSize:T.typography.scale.sm, fontWeight:600, color:C.neutral[700] }}>{label}</span>
        <span style={{ fontSize:T.typography.scale.xs, color:C.neutral[500] }}>
          {used.toLocaleString()} / {total.toLocaleString()} {unit}
        </span>
      </div>
      <div style={{ background:C.neutral[200], borderRadius:T.radii.full, height:6, overflow:"hidden" }}>
        <div style={{ width:`${pct}%`, height:"100%", background:barColor, borderRadius:T.radii.full }} />
      </div>
      <div style={{ display:"flex", justifyContent:"flex-end", marginTop:4 }}>
        <span style={{ fontSize:9, color: pct>=warn ? C.semantic.error : C.neutral[400],
          fontWeight: pct>=warn ? 700 : 400 }}>
          {pct}% utilizado{pct>=warn ? " — recarga pronto" : ""}
        </span>
      </div>
    </div>
  );
}

function EmptyState({ icon, title, message, ctaLabel, ctaVariant="accent" }) {
  return (
    <div style={{ textAlign:"center", padding:"48px 24px", display:"flex",
      flexDirection:"column", alignItems:"center", gap:12 }}>
      <div style={{ width:72, height:72, background:C.neutral[100],
        borderRadius:T.radii["2xl"], display:"flex", alignItems:"center",
        justifyContent:"center", fontSize:32 }}>{icon}</div>
      <p style={{ fontFamily:T.typography.families.heading, fontWeight:700,
        fontSize:T.typography.scale.lg, color:C.neutral[900], margin:0 }}>{title}</p>
      <p style={{ fontSize:T.typography.scale.sm, color:C.neutral[500],
        maxWidth:280, lineHeight:1.6, margin:0 }}>{message}</p>
      {ctaLabel && <Btn variant={ctaVariant} size="sm" icon="+">{ctaLabel}</Btn>}
    </div>
  );
}

function ApiKeyRow({ label, keyValue }) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const masked = "••••••••••••" + keyValue.slice(-6);
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10,
      background:C.neutral[50], borderRadius:T.radii.md, padding:"10px 14px",
      border:`1px solid ${C.neutral[200]}` }}>
      <div style={{ flex:1 }}>
        <p style={{ fontSize:T.typography.scale.xs, color:C.neutral[500], fontWeight:600,
          textTransform:"uppercase", letterSpacing:"0.06em", margin:"0 0 2px" }}>{label}</p>
        <code style={{ fontFamily:T.typography.families.mono, fontSize:T.typography.scale.sm,
          color:C.neutral[900] }}>{visible ? keyValue : masked}</code>
      </div>
      <button onClick={() => setVisible(!visible)}
        style={{ background:"none", border:`1px solid ${C.neutral[300]}`, borderRadius:T.radii.sm,
          padding:"4px 10px", cursor:"pointer", fontSize:T.typography.scale.xs,
          color:C.neutral[500] }}>{visible ? "Ocultar" : "Ver"}</button>
      <button onClick={() => { navigator.clipboard?.writeText(keyValue); setCopied(true); setTimeout(()=>setCopied(false),1400); }}
        style={{ background: copied ? C.semantic.success+"18" : C.brand.accent+"18",
          border:`1px solid ${copied ? C.semantic.success : C.brand.accent}`,
          borderRadius:T.radii.sm, padding:"4px 10px", cursor:"pointer",
          fontSize:T.typography.scale.xs,
          color: copied ? C.semantic.success : C.brand.accentDark, fontWeight:600 }}>
        {copied ? "✓ Copiado" : "Copiar"}
      </button>
    </div>
  );
}

function SidebarNav({ activeItem, onSelect }) {
  const groups = [
    { label:"Principal", items:[
      { icon:"📊", label:"Dashboard",  id:"dashboard" },
      { icon:"📱", label:"Campañas",   id:"campaigns" },
      { icon:"💬", label:"WhatsApp",   id:"whatsapp",  badge:"3" },
      { icon:"✉️", label:"Email",      id:"email" },
      { icon:"🤖", label:"Chatbots",   id:"chatbots" },
    ]},
    { label:"Configuración", items:[
      { icon:"🔑", label:"API Keys",   id:"api" },
      { icon:"⚙️", label:"Ajustes",   id:"settings" },
      { icon:"💳", label:"Facturación",id:"billing", badge:"!", badgeColor:C.brand.accent },
    ]},
  ];
  return (
    <div style={{ width:200, background:C.brand.secondary, borderRadius:T.radii.xl,
      padding:"16px 12px", display:"flex", flexDirection:"column", gap:4 }}>
      <div style={{ padding:"8px 12px", marginBottom:8 }}>
        <p style={{ color:C.brand.accent, fontWeight:800, fontSize:T.typography.scale.base,
          fontFamily:T.typography.families.heading, margin:0 }}>celcom</p>
        <p style={{ color:"rgba(255,255,255,0.4)", fontSize:T.typography.scale.xs, margin:0 }}>Plataforma</p>
      </div>
      {groups.map(g => (
        <div key={g.label} style={{ marginBottom:8 }}>
          <p style={{ color:"rgba(255,255,255,0.35)", fontSize:9, fontWeight:700,
            textTransform:"uppercase", letterSpacing:"0.1em", padding:"0 12px", margin:"0 0 4px" }}>{g.label}</p>
          {g.items.map(item => {
            const active = activeItem === item.id;
            return (
              <button key={item.id} onClick={() => onSelect(item.id)} style={{
                width:"100%", display:"flex", alignItems:"center", gap:10, padding:"8px 12px",
                background: active ? C.brand.accent+"22" : "transparent",
                border:"none", borderRadius:T.radii.md, cursor:"pointer",
                textAlign:"left",
              }}>
                <span style={{ fontSize:15 }}>{item.icon}</span>
                <span style={{ flex:1, fontSize:T.typography.scale.sm, fontWeight: active ? 700 : 500,
                  color: active ? C.brand.accent : "rgba(255,255,255,0.7)" }}>{item.label}</span>
                {item.badge && (
                  <span style={{ background: item.badgeColor || C.brand.primaryLight,
                    color: item.badgeColor === C.brand.accent ? C.brand.secondary : "#fff",
                    fontSize:9, fontWeight:800, padding:"1px 6px",
                    borderRadius:T.radii.full }}>{item.badge}</span>
                )}
              </button>
            );
          })}
        </div>
      ))}
      <div style={{ marginTop:"auto", borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:12 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px" }}>
          <div style={{ width:28, height:28, background:C.brand.accent, borderRadius:"50%",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:12, fontWeight:800, color:C.brand.secondary }}>M</div>
          <div>
            <p style={{ color:"rgba(255,255,255,0.85)", fontSize:T.typography.scale.xs,
              fontWeight:600, margin:0 }}>Miguel SM</p>
            <p style={{ color:"rgba(255,255,255,0.35)", fontSize:9, margin:0 }}>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaaSTab() {
  const [currentStep] = useState(2);
  const [sidebarActive, setSidebarActive] = useState("dashboard");

  const plans = [
    { plan:"Starter", price:"$49", description:"Para empresas que inician",
      features:[
        {label:"5.000 SMS/mes",   inc:true},
        {label:"WhatsApp API",    inc:false},
        {label:"Email Marketing", inc:true},
        {label:"1 Chatbot",       inc:false},
        {label:"Soporte básico",  inc:true},
      ], cta:"Comenzar gratis" },
    { plan:"Pro", price:"$149", description:"El más popular para crecer",
      badge:"★ Más popular",
      features:[
        {label:"50.000 SMS/mes",  inc:true},
        {label:"WhatsApp API",    inc:true},
        {label:"Email Marketing", inc:true},
        {label:"3 Chatbots",      inc:true},
        {label:"Soporte prioritario",inc:true},
      ], cta:"Activar plan Pro", highlighted:true },
    { plan:"Enterprise", price:"Custom", period:"", description:"Para grandes volúmenes",
      features:[
        {label:"SMS ilimitados",  inc:true},
        {label:"WhatsApp API",    inc:true},
        {label:"Email Marketing", inc:true},
        {label:"Chatbots ilimitados",inc:true},
        {label:"SLA + soporte dedicado",inc:true},
      ], cta:"Hablar con ventas" },
  ];

  return (
    <div>
      {/* KPI Cards */}
      <Section title="KPI Dashboard Cards" subtitle="Métricas clave para el panel de control SaaS de Celcom.">
        <Grid cols={4} gap={16}>
          <KpiCard icon="📱" label="SMS enviados este mes" value="47.320" delta="12%" deltaType="up" color={C.channels.sms} />
          <KpiCard icon="💬" label="Conversaciones WhatsApp" value="8.941" delta="8%" deltaType="up" color={C.channels.whatsapp} />
          <KpiCard icon="✉️" label="Emails entregados" value="23.100" delta="3%" deltaType="down" color={C.brand.accent} />
          <KpiCard icon="🤖" label="Interacciones chatbot" value="11.500" delta="21%" deltaType="up" color={C.channels.chatbot} />
        </Grid>
      </Section>

      {/* Pricing */}
      <Section title="Pricing Cards" subtitle="Tarjetas de planes. El plan destacado usa el acento amarillo como elemento de confianza.">
        <Grid cols={3} gap={20}>
          {plans.map(p => <PricingCard key={p.plan} {...p} />)}
        </Grid>
      </Section>

      {/* Onboarding Stepper */}
      <Section title="Onboarding Stepper" subtitle="Flujo guiado de activación de servicio (paso actual: 3 de 5).">
        <Card style={{ padding:"28px 32px" }}>
          <StepperFlow current={currentStep} steps={[
            { label:"Crea tu cuenta", sub:"Datos básicos" },
            { label:"Elige un plan",  sub:"Starter / Pro" },
            { label:"Conecta canal",  sub:"WhatsApp / SMS" },
            { label:"Configura bot",  sub:"Árbol de respuestas" },
            { label:"¡Listo!",        sub:"Primer envío" },
          ]} />
          <div style={{ marginTop:28, padding:"20px 24px", background:C.neutral[50],
            borderRadius:T.radii.lg, border:`1px solid ${C.neutral[200]}` }}>
            <p style={{ fontWeight:700, color:C.neutral[900], fontSize:T.typography.scale.base, margin:"0 0 6px" }}>
              Paso 3 — Conecta tu canal de WhatsApp
            </p>
            <p style={{ fontSize:T.typography.scale.sm, color:C.neutral[500], margin:"0 0 16px" }}>
              Ingresa el número de WhatsApp Business que deseas activar. La verificación toma entre 7–20 días hábiles.
            </p>
            <div style={{ display:"flex", gap:10 }}>
              <Btn variant="accent" size="sm" icon="→">Continuar</Btn>
              <Btn variant="ghost" size="sm">Atrás</Btn>
            </div>
          </div>
        </Card>
      </Section>

      {/* Usage Meters */}
      <Section title="Usage Meters" subtitle="Indicadores de consumo de créditos y recursos del plan activo.">
        <Grid cols={2} gap={16}>
          <UsageMeter label="SMS Masivo" used={43200} total={50000} unit="mensajes" color={C.channels.sms} warn={85} />
          <UsageMeter label="WhatsApp API" used={6800} total={10000} unit="conversaciones" color={C.channels.whatsapp} warn={80} />
          <UsageMeter label="Email Marketing" used={12000} total={50000} unit="envíos" color={C.brand.accent} warn={80} />
          <UsageMeter label="Almacenamiento" used={2300} total={5000} unit="MB" color={C.channels.chatbot} warn={80} />
        </Grid>
      </Section>

      {/* Toasts */}
      <Section title="Toast Notifications" subtitle="Feedback contextual flotante del sistema.">
        <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
          <Toast type="success" title="Campaña enviada" message="47.320 SMS entregados correctamente." />
          <Toast type="warning" title="Créditos bajos" message="Te quedan 720 SMS en tu plan actual." />
          <Toast type="error"   title="Fallo en envío" message="45 números no pudieron recibir el mensaje." />
          <Toast type="info"    title="Actualización" message="El sistema estará en mantenimiento el 20/04." />
        </div>
      </Section>

      {/* Status */}
      <Section title="Status Indicators" subtitle="Estado de los canales y la plataforma en tiempo real.">
        <Card>
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {[
              { channel:"SMS Gateway",     status:"online" },
              { channel:"WhatsApp API",     status:"online" },
              { channel:"Email Server",     status:"degraded" },
              { channel:"Chatbot Engine",   status:"online" },
              { channel:"Panel de Control", status:"online" },
              { channel:"API Pública",      status:"offline" },
            ].map((row, i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
                padding:"12px 16px", background: i%2===0 ? C.neutral[50] : C.neutral.white,
                borderBottom: i < 5 ? `1px solid ${C.neutral[200]}` : "none",
                borderRadius: i===0 ? `${T.radii.md} ${T.radii.md} 0 0`
                            : i===5 ? `0 0 ${T.radii.md} ${T.radii.md}` : "none" }}>
                <span style={{ fontSize:T.typography.scale.sm, color:C.neutral[700], fontWeight:500 }}>
                  {row.channel}
                </span>
                <StatusDot status={row.status} />
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* API Keys */}
      <Section title="API Key Manager" subtitle="Gestión de credenciales de integración para la API de Celcom.">
        <Card>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            <ApiKeyRow label="Production API Key" keyValue="sk_live_celcom_a1b2c3d4e5f6789012345678" />
            <ApiKeyRow label="Sandbox API Key"    keyValue="sk_test_celcom_z9y8x7w6v5u4321098765432" />
            <ApiKeyRow label="Webhook Secret"     keyValue="whsec_celcom_m5n4o3p2q1r0987654321abc" />
          </div>
          <div style={{ marginTop:16 }}>
            <Btn variant="accent" size="sm" icon="⊕">Generar nueva clave</Btn>
          </div>
        </Card>
      </Section>

      {/* Empty State */}
      <Section title="Empty States" subtitle="Estados vacíos para secciones sin datos aún.">
        <Grid cols={3} gap={16}>
          <Card style={{ padding:0, overflow:"hidden" }}>
            <EmptyState icon="📱" title="Sin campañas aún"
              message="Crea tu primera campaña de SMS masivo y llega a tus clientes."
              ctaLabel="Nueva campaña" />
          </Card>
          <Card style={{ padding:0, overflow:"hidden" }}>
            <EmptyState icon="💬" title="Conecta WhatsApp"
              message="Aún no tienes un número de WhatsApp Business activado."
              ctaLabel="Activar canal" />
          </Card>
          <Card style={{ padding:0, overflow:"hidden" }}>
            <EmptyState icon="📊" title="Sin datos aún"
              message="Aquí aparecerán las métricas cuando envíes tu primera campaña."
              ctaLabel={null} />
          </Card>
        </Grid>
      </Section>

      {/* Sidebar */}
      <Section title="Sidebar Navigation" subtitle="Menú lateral del panel de control con acceso a módulos y cuenta.">
        <div style={{ display:"flex", gap:16 }}>
          <SidebarNav activeItem={sidebarActive} onSelect={setSidebarActive} />
          <div style={{ flex:1, background:C.neutral[100], borderRadius:T.radii.xl,
            border:`1px dashed ${C.neutral[300]}`, display:"flex", alignItems:"center",
            justifyContent:"center", minHeight:320 }}>
            <p style={{ color:C.neutral[400], fontSize:T.typography.scale.sm }}>
              Contenido del módulo: <strong style={{ color:C.brand.primary }}>{sidebarActive}</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* Trial Banner */}
      <Section title="Trial & Upgrade Banners" subtitle="Banners de contexto para promover el upgrade usando el acento amarillo.">
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <div style={{ background:`linear-gradient(135deg,${C.brand.accent} 0%,${C.brand.accentLight} 100%)`,
            borderRadius:T.radii.xl, padding:"18px 24px",
            display:"flex", alignItems:"center", gap:16, boxShadow:T.shadows.accent }}>
            <span style={{ fontSize:28 }}>⏳</span>
            <div style={{ flex:1 }}>
              <p style={{ fontWeight:800, color:C.brand.secondary, fontSize:T.typography.scale.base, margin:"0 0 2px" }}>
                Tu prueba gratuita vence en 5 días
              </p>
              <p style={{ fontSize:T.typography.scale.sm, color:C.brand.secondary, opacity:0.65, margin:0 }}>
                Actualiza ahora y mantén todos tus flujos de comunicación activos.
              </p>
            </div>
            <Btn variant="dark" size="sm">Actualizar plan →</Btn>
          </div>
          <div style={{ background:C.brand.secondary, borderRadius:T.radii.xl,
            padding:"16px 24px", display:"flex", alignItems:"center", gap:16 }}>
            <span style={{ fontSize:24 }}>🚀</span>
            <div style={{ flex:1 }}>
              <p style={{ fontWeight:700, color:"#fff", fontSize:T.typography.scale.sm, margin:"0 0 2px" }}>
                Desbloquea WhatsApp API en tu plan
              </p>
              <p style={{ fontSize:T.typography.scale.xs, color:"rgba(255,255,255,0.5)", margin:0 }}>
                Con el plan Pro obtienes conversaciones ilimitadas y soporte prioritario.
              </p>
            </div>
            <Btn variant="accent" size="sm">Ver Plan Pro</Btn>
          </div>
        </div>
      </Section>
    </div>
  );
}

// ─── PATTERNS TAB ─────────────────────────────────────────
function PatternsTab() {
  const [activeTab, setActiveTab] = useState("WhatsApp API");
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q:"¿Qué es un chatbot?", a:"Un chatbot es un programa informático que automatiza servicios de chat. Envía respuestas rápidas, recibe mensajes y transfiere conversaciones en tiempo real." },
    { q:"¿Qué canales puedo conectar?", a:"Nuestra plataforma puede conectarse con múltiples canales de forma directa o a través del API." },
    { q:"¿El chatbot puede ser híbrido?", a:"Sí, la operación puede ser 100% personas, 100% bots o híbrida (bot + agente humano)." },
  ];
  return (
    <div>
      <Section title="Hero Section" subtitle="Portada principal con headline, subtítulo y CTA doble (primario + acento).">
        <div style={{ borderRadius:T.radii.xl, overflow:"hidden", boxShadow:T.shadows.xl }}>
          <div style={{ background:`linear-gradient(135deg,${C.brand.primaryDark} 0%,${C.brand.primary} 70%)`,
            padding:"52px 48px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ maxWidth:500 }}>
              <p style={{ color:C.brand.accent, fontWeight:700, fontSize:T.typography.scale.sm,
                textTransform:"uppercase", letterSpacing:"0.1em", margin:"0 0 12px" }}>Celcom Latam</p>
              <h1 style={{ fontFamily:T.typography.families.heading, fontSize:"clamp(1.4rem,2.5vw,2.25rem)",
                fontWeight:800, color:"#fff", lineHeight:1.2, margin:"0 0 14px" }}>
                Somos el puente entre la comunicación que deseas y las herramientas para lograrlo
              </h1>
              <p style={{ color:"rgba(255,255,255,0.65)", fontSize:T.typography.scale.base,
                margin:"0 0 28px", lineHeight:1.6 }}>
                SMS, WhatsApp API, Email Marketing y Chatbots para empresas.
              </p>
              <div style={{ display:"flex", gap:12 }}>
                <Btn variant="accent" size="lg" icon="★">Comenzar gratis</Btn>
                <button style={{ background:"transparent", color:"rgba(255,255,255,0.8)",
                  border:"2px solid rgba(255,255,255,0.3)", padding:"13px 24px",
                  borderRadius:T.radii.md, fontWeight:600, fontSize:T.typography.scale.base, cursor:"pointer" }}>
                  Ver demo
                </button>
              </div>
            </div>
            <div style={{ width:200, height:150, background:"rgba(255,255,255,0.08)",
              borderRadius:T.radii.xl, display:"flex", alignItems:"center",
              justifyContent:"center", fontSize:56, flexShrink:0 }}>📡</div>
          </div>
        </div>
      </Section>

      <Section title="Tabs de Servicios" subtitle="Navegación tabular para selección de canal o servicio.">
        <Card>
          <div style={{ display:"flex", gap:4, borderBottom:`2px solid ${C.neutral[200]}`, marginBottom:20 }}>
            {["WhatsApp API","SMS Masivo","Email Marketing","Chatbot"].map(t => {
              const active = activeTab===t;
              return (
                <button key={t} onClick={()=>setActiveTab(t)} style={{
                  padding:"10px 18px", border:"none", background:"transparent",
                  fontWeight: active ? 700 : 500, cursor:"pointer",
                  color: active ? C.brand.primary : C.neutral[500],
                  borderBottom: active ? `3px solid ${C.brand.accent}` : "3px solid transparent",
                  fontSize:T.typography.scale.sm, fontFamily:T.typography.families.body,
                  marginBottom:-2 }}>
                  {t}
                </button>
              );
            })}
          </div>
          <p style={{ color:C.neutral[700], fontSize:T.typography.scale.sm, margin:0 }}>
            {activeTab==="WhatsApp API" && "Conecta con tus clientes a través de la app de mensajería más utilizada del mundo con las ventajas de la versión Business."}
            {activeTab==="SMS Masivo" && "Llega a donde tu cliente esté a través de mensajería instantánea y potencia tus campañas de marketing."}
            {activeTab==="Email Marketing" && "Potencia tus campañas y mantén a tu cliente al día con los lanzamientos de tu marca."}
            {activeTab==="Chatbot" && "Disponible 24/7 para tus prospectos. Evita perder ventas con bots en tu tono de comunicación."}
          </p>
        </Card>
      </Section>

      <Section title="FAQ Accordion" subtitle="Preguntas frecuentes en páginas de servicio.">
        <Card>
          {faqs.map((f,i) => (
            <div key={i} style={{ borderBottom: i<faqs.length-1 ? `1px solid ${C.neutral[200]}` : "none" }}>
              <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{
                width:"100%", textAlign:"left", padding:"16px 0",
                background:"transparent", border:"none", cursor:"pointer",
                display:"flex", justifyContent:"space-between", alignItems:"center",
                fontWeight:T.typography.weights.semibold, fontSize:T.typography.scale.base,
                color:C.neutral[900], fontFamily:T.typography.families.body }}>
                {f.q}
                <span style={{ color:C.brand.accent, fontSize:20,
                  transform: openFaq===i ? "rotate(45deg)" : "none",
                  transition:T.motion.fast, display:"inline-block", lineHeight:1 }}>+</span>
              </button>
              {openFaq===i && <p style={{ color:C.neutral[500], fontSize:T.typography.scale.sm,
                lineHeight:1.7, paddingBottom:16, margin:0 }}>{f.a}</p>}
            </div>
          ))}
        </Card>
      </Section>

      <Section title="Footer" subtitle="Pie de página completo con navegación, países y contacto.">
        <div style={{ background:C.brand.secondary, borderRadius:T.radii.xl, padding:"36px 36px 20px", color:"#fff" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:36, marginBottom:28 }}>
            <div>
              <p style={{ color:C.brand.accent, fontWeight:800, fontSize:T.typography.scale.lg,
                fontFamily:T.typography.families.heading, margin:"0 0 8px" }}>celcom</p>
              <p style={{ fontSize:T.typography.scale.sm, color:"rgba(255,255,255,0.5)",
                lineHeight:1.6, margin:"0 0 16px" }}>General Holley 133, Providencia, Santiago, Chile.</p>
              <div style={{ display:"flex", gap:10 }}>
                {["🇨🇱","🇵🇪","🇲🇽","🇨🇴","🇧🇴"].map((f,i)=>(
                  <span key={i} style={{ fontSize:20 }}>{f}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontWeight:700, fontSize:T.typography.scale.xs, color:C.brand.accent,
                textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 12px" }}>Servicios</p>
              {["SMS Marketing","WhatsApp API","Email Marketing","Chatbot"].map(s=>(
                <p key={s} style={{ fontSize:T.typography.scale.sm,
                  color:"rgba(255,255,255,0.55)", margin:"0 0 8px" }}>{s}</p>
              ))}
            </div>
            <div>
              <p style={{ fontWeight:700, fontSize:T.typography.scale.xs, color:C.brand.accent,
                textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 12px" }}>Contacto</p>
              <p style={{ fontSize:T.typography.scale.sm, color:"rgba(255,255,255,0.55)", margin:"0 0 8px" }}>contacto@celcom.cl</p>
              <p style={{ fontSize:T.typography.scale.sm, color:"rgba(255,255,255,0.55)", margin:0 }}>+56 9 5900 3934</p>
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:16,
            display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <p style={{ fontSize:T.typography.scale.xs, color:"rgba(255,255,255,0.3)", margin:0 }}>
              Celcom S.A. — Concesionario de Servicios de Telecomunicaciones · SUBTEL
            </p>
            <a href="#" style={{ fontSize:T.typography.scale.xs, color:"rgba(255,255,255,0.3)" }}>
              Términos y condiciones
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

// ─── CHANNELS TAB ─────────────────────────────────────────
function ChannelsTab() {
  const channels = [
    { name:"WhatsApp API", icon:"💬", color:C.channels.whatsapp,
      description:"Canal de mensajería bidireccional. Verificación con Green Check disponible.",
      tags:["Conversacional","Bidireccional","API Business","Green Check"] },
    { name:"SMS Masivo", icon:"📱", color:C.channels.sms,
      description:"Mensajería A2P instantánea con alta tasa de apertura. Para OTP, alertas y campañas.",
      tags:["A2P","Alta apertura","Transaccional","Campañas"] },
    { name:"Email Marketing", icon:"✉️", color:C.brand.accent,
      description:"Correos masivos con analytics. Para newsletters, lanzamientos y lead nurturing.",
      tags:["Segmentación","Analytics","Newsletter","Nurturing"] },
    { name:"Chatbot", icon:"🤖", color:C.channels.chatbot,
      description:"Bot conversacional con IA disponible 24/7. Integrable con CRM y omnicanal.",
      tags:["IA","24/7","Omnicanal","CRM"] },
    { name:"Celcom Flex", icon:"⚡", color:C.brand.primaryLight,
      description:"Plataforma omnicanal que unifica todos los canales en una sola interfaz.",
      tags:["Omnicanal","Plataforma","Unificado"] },
    { name:"HubSpot Sales", icon:"🎯", color:C.brand.primary,
      description:"Integración con HubSpot para gestión de ventas y automatización de comunicaciones.",
      tags:["CRM","Pipeline","Automatización"] },
  ];
  return (
    <div>
      <Section title="Identidad de Canales" subtitle="Sistema de color e iconografía para cada canal de comunicación.">
        <Grid cols={3} gap={16}>
          {channels.map(ch => (
            <Card key={ch.name} style={{ borderLeft:`4px solid ${ch.color}` }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
                <div style={{ width:44, height:44, background:ch.color+"18",
                  borderRadius:T.radii.lg, display:"flex", alignItems:"center",
                  justifyContent:"center", fontSize:22 }}>{ch.icon}</div>
                <div>
                  <p style={{ fontWeight:700, color:C.neutral[900],
                    fontSize:T.typography.scale.base, margin:0 }}>{ch.name}</p>
                  <code style={{ fontSize:T.typography.scale.xs, color:ch.color, fontWeight:600 }}>{ch.color}</code>
                </div>
              </div>
              <p style={{ fontSize:T.typography.scale.sm, color:C.neutral[500],
                lineHeight:1.6, margin:"0 0 12px" }}>{ch.description}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                {ch.tags.map(t=><Chip key={t} color={ch.color}>{t}</Chip>)}
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section title="Comparativa de Canales" subtitle="Guía de selección según objetivo y contexto.">
        <div style={{ borderRadius:T.radii.xl, overflow:"hidden", boxShadow:T.shadows.md }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:T.typography.scale.sm }}>
            <thead>
              <tr style={{ background:C.brand.secondary, color:"#fff" }}>
                {["Canal","Objetivo principal","Entrega","Apertura est.","Ideal para"].map(h=>(
                  <th key={h} style={{ padding:"12px 16px", textAlign:"left",
                    fontWeight:600, fontSize:T.typography.scale.xs,
                    textTransform:"uppercase", letterSpacing:"0.06em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {canal:"💬 WhatsApp API", obj:"Conversaciones 1:1", t:"Inmediata", a:"~98%", m:"Atención, ventas, soporte"},
                {canal:"📱 SMS Masivo",   obj:"Alcance masivo",     t:"Segundos",  a:"~95%", m:"OTP, alertas, campañas"},
                {canal:"✉️ Email",        obj:"Nutrición de leads", t:"Minutos",   a:"~25%", m:"Newsletters, lanzamientos"},
                {canal:"🤖 Chatbot",      obj:"Automatización 24/7",t:"Instant.",  a:"—",    m:"FAQ, calificación"},
              ].map((r,i)=>(
                <tr key={i} style={{ background: i%2===0 ? C.neutral[50] : C.neutral.white }}>
                  <td style={{ padding:"12px 16px", fontWeight:600, color:C.neutral[900] }}>{r.canal}</td>
                  <td style={{ padding:"12px 16px", color:C.neutral[700] }}>{r.obj}</td>
                  <td style={{ padding:"12px 16px", color:C.neutral[700] }}>{r.t}</td>
                  <td style={{ padding:"12px 16px", color:C.semantic.success, fontWeight:700 }}>{r.a}</td>
                  <td style={{ padding:"12px 16px", color:C.neutral[500] }}>{r.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

// ─── APP SHELL ─────────────────────────────────────────────
export default function DesignSystem() {
  const [active, setActive] = useState("Tokens");
  const tabContent = {
    "Tokens":    <TokensTab />,
    "Tipografía":<TypographyTab />,
    "Componentes":<ComponentsTab />,
    "SaaS":      <SaaSTab />,
    "Patrones":  <PatternsTab />,
    "Canales":   <ChannelsTab />,
  };
  return (
    <div style={{ fontFamily:T.typography.families.body, background:C.neutral[100], minHeight:"100vh" }}>
      {/* Header */}
      <div style={{ background:C.brand.secondary, borderBottom:`3px solid ${C.brand.accent}` }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"20px 40px",
          display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <div style={{ width:40, height:40, background:C.brand.accent,
              borderRadius:T.radii.md, display:"flex", alignItems:"center",
              justifyContent:"center", fontWeight:900, fontSize:20,
              color:C.brand.secondary, fontFamily:T.typography.families.heading }}>C</div>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ fontFamily:T.typography.families.heading, fontSize:T.typography.scale["2xl"],
                  fontWeight:800, color:"#fff", letterSpacing:"-0.02em" }}>Celcom</span>
                <span style={{ background:C.brand.accent, color:C.brand.secondary,
                  padding:"2px 10px", borderRadius:T.radii.full,
                  fontSize:T.typography.scale.xs, fontWeight:700 }}>Design System v1.1</span>
              </div>
              <p style={{ color:"rgba(255,255,255,0.4)", fontSize:T.typography.scale.xs, margin:0 }}>
                celcomlatam.com · 6 secciones · 30+ componentes · 35+ tokens
              </p>
            </div>
          </div>
          <div style={{ display:"flex", gap:10, alignItems:"center" }}>
            {[C.brand.primary, C.brand.accent, C.channels.whatsapp, C.channels.chatbot].map((c,i)=>(
              <div key={i} style={{ width:20, height:20, background:c, borderRadius:"50%",
                border:"2px solid rgba(255,255,255,0.2)" }} />
            ))}
          </div>
        </div>
        {/* Tabs */}
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 40px",
          display:"flex", gap:4, borderTop:"1px solid rgba(255,255,255,0.08)" }}>
          {navItems.map(n=>(
            <button key={n} onClick={()=>setActive(n)} style={{
              padding:"12px 20px", border:"none", background:"transparent",
              cursor:"pointer", fontFamily:T.typography.families.body,
              fontSize:T.typography.scale.sm, fontWeight: active===n ? 700 : 500,
              color: active===n ? C.brand.accent : "rgba(255,255,255,0.55)",
              borderBottom: active===n ? `3px solid ${C.brand.accent}` : "3px solid transparent",
              transition:T.motion.fast,
            }}>{n}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"40px 40px 80px" }}>
        {tabContent[active]}
      </div>
    </div>
  );
}
