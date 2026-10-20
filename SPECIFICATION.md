# VRPI TECH SOLUTIONS — Website Build Specification (v2)

### 0. BRAND POSITIONING

- **Category**: Full-stack digital engineering partner (web, mobile, AI, cloud, enterprise) — positioned between a boutique studio and an enterprise consultancy.
- **Tone of voice**: Precise, confident, understated. Short declarative sentences. No buzzword stacking ("synergy," "next-gen," "cutting-edge" — banned words).
- **Visual metaphor**: *Infrastructure, not decoration.* Every 3D element should look like it's rendering real systems (networks, pipelines, data flow) — never abstract art for its own sake.
- **One-sentence brand promise**: "We turn complexity into working software."

---

### 1. TECH STACK (pinned versions + rationale)

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router) | Server Components by default |
| Language | TypeScript (strict mode) | `noUncheckedIndexedAccess`, `strictNullChecks` on |
| Styling | Tailwind CSS + CSS variables | Design tokens as CSS vars, not hardcoded hex in components |
| UI primitives | Radix / accessible primitives | Only for accessible primitives (dialog, dropdown, tabs) — not visual styling |
| Animation | Motion (Framer Motion successor) | Declarative reveal/hover; GSAP reserved for scroll-pinning only |
| Scroll | Lenis + GSAP ScrollTrigger | Smooth scroll & synced scroll states |
| 3D | Three.js / React Three Fiber / Drei | `<Canvas frameloop="demand">` where possible to cut idle GPU cost |
| Icons | Lucide React | Tree-shaken, no icon-font |
| Fonts | `next/font` — Geist Sans + Geist Mono | Self-hosted, zero layout shift |
| Forms | React Hook Form + Zod | Contact form validation |
| Analytics | Cookie-free telemetry ready | No GA4 — avoid consent-banner complexity |
| Deployment | Vercel / Static Edge | Edge caching for static sections |
| Testing | Accessibility & reduced-motion checks | Quality & performance budgets |

---

### 2. DESIGN TOKEN SYSTEM

```css
:root {
  /* Surface */
  --bg-primary: #080B10;
  --bg-secondary: #0D1117;
  --bg-elevated: #10151C;
  --fg-primary: #F5F7FA;
  --fg-muted: #94A3B8;
  --fg-subtle: #64748B;

  /* Accent — used at <10% surface coverage, never as full backgrounds */
  --accent-cyan: #55D6FF;
  --accent-blue: #5B7CFF;
  --accent-violet: #8B7CFF;

  /* Semantic */
  --state-success: #4ADE80;
  --state-warning: #FBBF24;
  --state-error: #F87171;

  /* Glass */
  --glass-bg: rgba(255,255,255,0.05);
  --glass-border: rgba(255,255,255,0.10);
  --glass-blur: 24px;
  --glass-highlight: rgba(255,255,255,0.08); /* top inner edge, 1px inset */

  /* Spacing scale (4px base, capped growth) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-24: 96px; --space-32: 128px; --space-40: 160px;

  /* Radius — restrained, not "everything rounded" */
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-full: 999px;

  /* Elevation */
  --shadow-glass: 0 8px 32px rgba(0,0,0,0.35);

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
  --duration-fast: 180ms; --duration-base: 320ms; --duration-slow: 600ms; --duration-cinematic: 1200ms;

  --z-nav: 50; --z-cursor: 60; --z-drawer: 70; --z-modal: 80;
}
```

**Rule**: accent color may only touch — CTA border/glow, active nav indicator, hover state on interactive elements, node/line highlights in 3D. Never a full-bleed background.

---

### 3. TYPOGRAPHY SCALE

| Token | Size | Weight | Tracking |
|---|---|---|---|
| Display (hero) | `clamp(2.75rem, 6vw, 6.5rem)` | 600 | -0.02em |
| H1 (section) | `clamp(2rem, 4vw, 3.5rem)` | 600 | -0.01em |
| H2 | `clamp(1.5rem, 2.5vw, 2.25rem)` | 500 | -0.005em |
| Body-lg | `1.125rem` / line-height 1.6 | 400 | 0 |
| Body | `1rem` / line-height 1.65 | 400 | 0 |
| Eyebrow/label | `0.75rem` | 500 | 0.14em, uppercase |

Max line length for body copy: **65–75 characters** (`max-w-prose`).

---

### 4. NAVBAR SPECIFICATION

- At scroll `y = 0`: fully transparent, no border, logo + text full opacity.
- At `y > 80px`: background transitions to `--glass-bg`, border fades in, navbar height shrinks from `88px → 64px` over `--duration-base` with `--ease-out-expo`.
- Active section indicator: a `2px` cyan underline that slides between nav items using a shared layout animation.
- Mobile drawer: full-screen, staggered link reveal, closes on route change and `Escape`, focus trapped while open.
- Keyboard: full tab order, visible focus ring using `--accent-cyan` at 2px offset.

---

### 5. HERO SPECIFICATION

- Eyebrow: `VRPI TECH SOLUTIONS`
- Headline: `Engineering the\nDigital Future.`
- Subhead: `We build intelligent digital products, scalable software platforms, and technology solutions that help businesses move faster.`
- Primary CTA: `Explore Solutions` → `#solutions`
- Secondary CTA: `Start a Conversation` → `#contact`
- Scroll cue: small animated line + `Scroll to explore`
- HeroScene: instanced interactive node network with camera damping, autonomous idle drift, and reduced-motion/low-power fallbacks.

---

### 6. SECTIONS & COPY DECK

- **Intro/Trust**: "Technology should simplify complexity."
- **Services (6 core pillars)**:
  1. Web Development
  2. Mobile Applications
  3. AI & Automation
  4. Cloud & DevOps
  5. Enterprise Software
  6. Digital Transformation
- **AI Section**: "Intelligence, engineered." Real system pipeline visualization.
- **Why VRPI (4 principles)**:
  1. Engineering Excellence
  2. Human-Centered Design
  3. Scalable Architecture
  4. Continuous Innovation
- **Tech Ecosystem / Digital Lab**: Architecture, stack integration, performance benchmarks.
- **Featured Projects**: Production systems case studies with metrics.
- **Contact & Inquiry**: Enterprise consultation form with Zod validation.
- **Final CTA**: "Have an idea worth building? Let's turn your vision into a scalable digital product."
