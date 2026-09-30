# Celcom Design System

Sistema de diseño para **Celcom Latam** y sus productos digitales tipo SaaS.

Celcom es un **integrador móvil de valor agregado** que ofrece plataformas bidireccionales de contactabilidad basadas en mensajería A2P (aplicativo–persona): **SMS Masivo, WhatsApp API, Email Marketing, VMS y Chatbots**. Sus clientes son empresas (B2B) en LATAM — Chile, Perú, México, Colombia, Bolivia — con casos de uso en marketing, ventas, atención al cliente y automatización tecnológica.

Dos superficies de producto:
1. **celcomlatam.com** — sitio de marketing corporativo (hero + servicios + soluciones + clientes + testimonios + formulario + footer).
2. **Celcom Platform (SaaS)** — panel omnicanal para gestionar campañas SMS/WhatsApp/Email, chatbots, métricas, facturación y API keys.

---

## Fuentes consultadas

| Fuente | Ubicación | Uso |
|---|---|---|
| Repo design system | `miguelsanmartinr/celcom-design-system` (`celcom-design-system.jsx`) | **Fuente primaria** de tokens, componentes, patrones. |
| Logo corporativo (wordmark) | `uploads/logo_celcom_azul-2.svg` → `assets/logo-celcom.svg` | Marca azul principal. |
| Logo de app (iso) | `uploads/logoapp.jpg` → `assets/logo-celcom-app.jpg` | Isotipo "C" blanco sobre azul con formas amarillas. |
| Screen capture celcomlatam.com | `uploads/screencapture-celcomlatam-2026-04-20-12_40_52.pdf` → `assets/reference-home-*.png` | Referencia visual del sitio marketing. |

---

## Índice del folder raíz

- `colors_and_type.css` — variables CSS de color + tipografía + spacing + shadows + radii.
- `celcom-design-system.jsx` — fuente primaria del repo: tokens + componentes en JSX.
- `SKILL.md` — manifest Agent Skill (usable en Claude Code).
- `assets/` — logos, referencia del sitio, isotipo de app.
- `preview/` — cards para el Design System tab (tokens, type, color, componentes).
- `ui_kits/website/` — UI kit del sitio de marketing (celcomlatam.com).
- `ui_kits/platform/` — UI kit del panel SaaS (Celcom Platform).

---

## CONTENT FUNDAMENTALS

**Idioma:** Español (LATAM / Chile). Neutral pero cálido. Nunca usar "vosotros"; usar **"tú" (tuteo)** con el cliente empresarial — es cercano pero profesional.

**Voz y tono:**
- **Humana y colaborativa**, no corporativa fría. Celcom se describe a sí mismo como "el puente" entre la comunicación del cliente y las herramientas para lograrla.
- **Directa y consultiva**: ofrece soluciones antes que productos ("de acuerdo a tu objetivo tenemos soluciones ideales para cumplirlo").
- **Empática con el vendedor/marketer**: habla de lograr metas, incrementar ingresos, dar a conocer campañas.

**Casing:**
- Títulos y headings: **Sentence case** ("¿Quiénes somos?", "Nuestras soluciones", "Estos son nuestros servicios"). No Title Case en español.
- CTAs de botón: mayúscula inicial, corto y en primera persona del presente/infinitivo desde el lado del cliente: "Quiero usarla", "Quiero posicionar", "Quiero vender", "Quiero mejorar", "Quiero eficientar", "Escríbenos", "Comenzar gratis".
- Overlines / labels: UPPERCASE con tracking 0.06em ("SERVICIO CHATBOT · SMS MASIVO · WHATSAPP API").

**Pronombres y persona:**
- La marca habla en **"nosotros"** ("Nos hemos comprometido", "Contamos con…", "Somos el puente").
- Al usuario se le habla en **"tú"** ("tus clientes", "te has planteado").
- Testimonios en primera persona del cliente ("Para nosotros, trabajar con la plataforma Celcom ha sido de mucha importancia…").

**Emoji:** Uso **moderado** en el SaaS para aligerar iconografía funcional (📱 💬 ✉️ 🤖 ⚠ ✓ ★ 🚀). **No** en el sitio corporativo, excepto el acento ★ como marca visual del "destacado". No usar en copywriting formal.

**Números y unidades:** Punto como separador de miles ("47.320 SMS", "180 clientes"). Monedas con símbolo: `$49 /mes`. Rangos con guion simple ("7–20 días hábiles").

**Ejemplos de copy reales del sitio:**
- Hero: _"Somos el puente entre la comunicación que deseas y las herramientas que necesitas para lograrlo"_.
- Sección: _"¿Quiénes somos?"_ / _"Nuestras soluciones"_ / _"Estos son nuestros servicios"_.
- Banner de compromiso: _"Nos hemos comprometido con no solo acompañar a nuestros clientes…"_.
- Promesa: _"Es una promesa."_ (puntos finales cortos, sin signos de exclamación).
- CTA de plan destacado: _"★ Más popular"_ / _"Activar plan Pro"_.

**Reglas prácticas:**
- No empezar con "¡Bienvenido!" o llamadas excesivamente entusiastas.
- Evitar jerga técnica salvo en contextos de API/developer ("service_id", "webhook secret", "WhatsApp Business").
- Preferir verbos de acción concretos ("Automatiza", "Conecta", "Activa", "Integra") sobre adjetivos abstractos.
- Un claim, un CTA. No acumular beneficios en el mismo párrafo.

---

## VISUAL FOUNDATIONS

### Colores
Paleta compacta de **dos familias** con alta tensión cromática:

- **Azul Celcom** `#0057B8` — color primario, conductor de la marca. Llena fondos enteros de secciones en el sitio y barras de navegación del SaaS.
- **Amarillo Celcom** `#FFB800` — acento único de alto impacto. Reservado para: CTAs de conversión ("Comprar créditos SMS", "Cotizar"), badges "★ Más popular", highlights de iconografía, banners de trial/upgrade. **Nunca** para bloques largos de texto sobre amarillo (fatiga visual).
- **Azul profundo** `#001F5B` — fondos de sidebar SaaS, footer, tarjetas oscuras destacadas.
- Neutrales fríos (con tinte azul) — `#FAFBFF → #0D1B33`. **No** usar grises neutros puros.
- Semánticos estándar (success/warning/error/info) y colores por canal (WhatsApp verde, Chatbot morado).

**Vibe de imagen:** ilustraciones planas estilo _Storyset_-ish con paleta azul + amarillo + blanco y pequeños acentos verde menta. Fotografía de personas en entornos corporativos cálidos. **Nunca** b&w ni grano; siempre **brillante y saturada**.

### Tipografía
- **Poppins** (ExtraBold 800 → Semibold 600) para titulares y headings. Geométrica, amigable, característica de su identidad.
- **Inter** (Regular 400 / Medium 500 / Semibold 600) para cuerpo y UI. Alta legibilidad.
- **Fira Code** para código, API keys, snippets.
- Escala 1.25× modular (10 → 48px). Line-height **tight (1.2)** en titulares, **normal (1.5)** en cuerpo.

### Fondos
- **Full-bleed azul sólido** para hero + secciones de compromiso. Sin gradientes en backgrounds principales.
- **Full-bleed amarillo sólido** para banners de promesa intermedios (el "sandwich" amarillo entre secciones blancas).
- Blanco / `#F4F6FB` para secciones de servicios y formularios.
- Gradientes **solo** para el banner de trial `linear-gradient(135deg, #FFB800 → #FFD966)` y el hero diagonal `linear-gradient(135deg, #003D82 → #0057B8)`.
- **No** se usan patrones repetitivos, texturas, grain ni hand-drawn.
- Ilustraciones flotantes con **blobs orgánicos** azul+amarillo como decoración del hero.

### Animaciones
- `fast: 150ms ease` (hover de botones, chips).
- `normal: 250ms ease` (transiciones de tab, expansión de FAQ).
- `slow: 400ms ease-in-out` (progress bars, onboarding steppers).
- No hay bounces ni spring. No hay parallax. Todo lineal y utilitario.

### Estados interactivos
- **Hover botón primario/accent:** oscurecer a la variante `-dark` (no cambiar opacidad).
- **Hover botón ghost/secundario:** añadir fondo `rgba(primary, 0.06)`.
- **Hover link:** subrayado con `text-underline-offset: 4px` (visible en nav).
- **Press:** sin transform; solo oscurecimiento del bg.
- **Focus:** anillo `2px solid var(--celcom-primary-light)` con offset 2px.
- **Disabled:** bg `n-200`, text `n-400`, cursor `not-allowed`.

### Bordes, radii, sombras
- Bordes **1–1.5px** en `n-200` (subtle) o `n-300` (strong). Evitar bordes gruesos salvo botones outline (2px).
- **Borde acentuado izquierdo (4px)** solo en alertas/toasts — patrón explícito del sistema.
- **Radii**: `md: 8px` (botones, inputs), `lg: 12px` (cards pequeñas), `xl: 16px` (cards grandes, banners), `2xl: 24px` (pricing cards), `full` (chips, avatares, progress).
- **Sombras tintadas de azul** `rgba(0,87,184, 0.10–0.18)`. Una sombra especial `shadow-accent` con 30% amarillo para CTAs destacadas.
- **No** se usa inner shadow.

### Transparencia y blur
- Transparencia aplicada al texto sobre fondo azul: `rgba(255,255,255, 0.65)` para subtítulo, `0.35` para labels muy secundarios.
- **No** usar backdrop-filter/blur. La interfaz es sólida.
- Tintes del accent: `#FFB800 + alpha (0.15–0.22)` para chips y badges suaves.

### Layout
- Grid 12 columnas con `max-width: 1200px` y gutters 16–24px.
- Spacing base **4px** (escala 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80).
- **Sidebar SaaS fija** a 200px, azul profundo, con grupos semánticos ("Principal" / "Configuración").
- **Header sitio** fijo al scroll, blanco, con CTA amarillo anclado a la derecha.

### Iconografía
- **Emoji como sistema interno** del SaaS (📱 💬 ✉️ 🤖 ★) para aligerar el prototipado — véase ICONOGRAPHY abajo.
- **Iconos custom SVG** en el sitio corporativo (servicios, channels).
- No hay un icon-font propio.

### Cards
- Base: `bg: white`, `border: 1px solid n-200`, `radius: lg (12px)`, `padding: 20px`.
- Highlighted: `bg: secondary (azul profundo)`, sin borde, `shadow-xl`, el contenido usa acento amarillo para acentuar.
- Hover: elevar de `shadow-sm` a `shadow-md`, sin transform ni escala.

---

## ICONOGRAPHY

**Situación actual:** el sistema de Celcom **no cuenta con un icon-font propio ni sprite SVG** en el repo importado. El design-system.jsx usa **emoji Unicode** (📱 💬 ✉️ 🤖 ⚠ ✓ ★ 🚀 🔑 ⚙️ 💳 📊 ⏳) como placeholder/lenguaje visual para:
- Módulos del sidebar SaaS.
- KPI icons en dashboard.
- Badges de estado en alertas.
- Empty states.

**Recomendación de substitución:** para producción, usar **Lucide Icons** (CDN `https://unpkg.com/lucide@latest`) — stroke 2, round caps. Matches el tono amigable geométrico de Poppins. Para canales, usar:
- WhatsApp → `message-circle` / logo oficial (brand guideline de Meta).
- SMS → `smartphone`.
- Email → `mail`.
- Chatbot → `bot`.
- API / Keys → `key`.
- Dashboard → `layout-dashboard`.

**⚠ Substitución flagged:** esta es una decisión nuestra; **pregúntale al equipo de Celcom** si prefieren otra librería (Phosphor, Heroicons) o si tienen un set custom en Figma no incluido en el repo.

**SVG custom del sitio corporativo:** las ilustraciones grandes del sitio (personajes haciendo marketing, ventas, atención, tecnología) son **stock ilustraciones estilo Storyset / Freepik**. Copiadas en `assets/reference-home-*.png` como referencia; no están aisladas. Pide al equipo los archivos originales editables.

**Uso de Unicode:**
- `★` usado como brand-shorthand para "destacado" / "más popular".
- `→` `←` `↑` `↓` como affordances de dirección (breadcrumbs, continuar).
- `·` (middle dot) como separador en copy ("Chile · Perú · México").

---

## Próximos pasos / iteración

- Pedir fuentes en TTF/WOFF2 al equipo si hay licencias. Actualmente servidas desde Google Fonts (Poppins + Inter + Fira Code) — funcionan 100%.
- Confirmar librería de iconos preferida.
- Pedir archivos editables de las ilustraciones del sitio.
- Confirmar estado del producto SaaS — ¿está ya en vivo? ¿hay screenshots reales del panel?
