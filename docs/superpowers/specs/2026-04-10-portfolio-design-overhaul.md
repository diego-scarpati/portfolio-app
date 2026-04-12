# Portfolio Design Overhaul — Spec

**Date:** 2026-04-10  
**Branch:** `feature/portfolio-v2`  
**Approach:** Section-by-section — Hero → Navbar → Work cards → remaining sections

---

## Summary

Visual redesign of the portfolio. Existing architecture (Next.js 15, Tailwind v4, single-page sections) is unchanged. This spec covers design tokens, typography, motion system, and component-level changes only.

---

## 1. Typography

Replace `Syne + DM Sans` with `Playfair Display + Inter`.

| Role | Font | Weights |
|------|------|---------|
| Headings (h1–h6) | Playfair Display | 400, 600, 700 |
| Body / UI | Inter | 300, 400, 500, 600 |

**`layout.tsx` changes:**
- Remove `Syne` and `DM_Sans` imports
- Add `Playfair_Display` → `--font-display`
- Add `Inter` → `--font-body`

**`globals.css` changes:**
- Update `h1, h2, h3, h4, h5, h6` rule: `font-family: var(--font-display)`
- Letter spacing for headings: `-0.02em` (h1), `-0.01em` (h2/h3)
- Body line-height: `1.7`

---

## 2. Color Palette

Keep the full `big-stone` scale unchanged. Add a vivid blue expansion as new semantic tokens.

### New tokens (dark theme additions)

```css
/* Vivid blue expansion */
--vb-300: #93c5fd;
--vb-400: #60A5FA;   /* accent-2: highlights, hover states, role labels */
--vb-500: #3B82F6;   /* accent: CTAs, active borders, progress bar */
--vb-600: #2563EB;   /* accent-hover: button hover */
--vb-700: #1D4ED8;   /* accent-deep: gradient start */
```

### Updated semantic tokens (dark theme)

```css
--accent:       #3B82F6;   /* was #4a72a8 */
--accent-hover: #2563EB;   /* was #5a84bc */
--accent-text:  #ffffff;
```

Light theme retains existing `big-stone` accent values — no change.

---

## 3. Navbar

**Current:** Full-width fixed bar, solid background on scroll.  
**New:** Floating pill, centred, always visible with glass effect.

### Specs
- Position: `fixed`, `top: 1.25rem`, centred via `left: 50% / transform: translateX(-50%)`
- Shape: `border-radius: 999px`
- Background: `rgba(15,24,37,0.6)` + `backdrop-filter: blur(20px)`
- Border: `1px solid rgba(255,255,255,0.09)`
- Height: auto (padding `0.65rem 1.5rem`)
- Logo: Playfair Display, 700, 1rem
- Nav links: Inter, 0.62rem, `letter-spacing: 0.14em`, uppercase
- Hire Me CTA: pill shape (`border-radius: 999px`), `background: #3B82F6`
- Mobile: collapses to hamburger at `md` breakpoint (existing logic, re-styled)
- Remove: scroll-triggered background change (pill is always glass)

---

## 4. Hero Section

**Current:** Full-width, no container, `min-height: 100vh`.  
**New:** Content inside a glass band, exactly one screen tall.

### Layout
- Container: `height: 100dvh`, `display: flex`, `justify-content: center`, `padding: 5rem 2rem 2.5rem`
- Glass band: `max-width: 860px`, `border-radius: 28px`, `padding: 2.5rem 3rem`
- Glass style: `background: rgba(255,255,255,0.04)`, `backdrop-filter: blur(14px)`, `border: 1px solid rgba(255,255,255,0.09)`

### Background blobs (3-layer parallax)
```
blob-1: 520×520px, rgba(59,130,246,0.18), top-right, data-speed="0.15"
blob-2: 320×320px, rgba(29,78,216,0.15),  bottom-left, data-speed="0.08"
blob-3: 200×200px, rgba(96,165,250,0.12), centre, data-speed="0.12"
```
Parallax via `scroll` event → `translateY(scrollY * speed)` on each blob.

### Content inside glass band (top to bottom)
1. Availability pill (existing green ping dot)
2. `h1`: Playfair Display 700, `clamp(3rem, 7.5vw, 6.5rem)`, "Diego" plain + "Scarpati" in `#60A5FA`
3. Role line: Inter 0.75rem, `letter-spacing: 0.22em`, uppercase, `var(--text-3)`
4. Description: Inter 0.95rem, `line-height: 1.7`, `max-width: 420px`
5. CTAs: pill-shaped buttons (`border-radius: 999px`) — primary filled `#3B82F6`, secondary ghost
6. Tech tags: pill badges (`border-radius: 999px`), `rgba(255,255,255,0.05)` background

### Entrance animations (staggered, `animation-fill-mode: both`)
| Element | Delay |
|---------|-------|
| Availability pill | 100ms |
| h1 | 200ms |
| Role | 350ms |
| Description | 450ms |
| CTAs | 550ms |
| Tech tags | 650ms |

All use `fadeUp`: `opacity 0 → 1`, `translateY(20px → 0)`, `0.6–0.7s ease`.

### Scroll hint
- `position: absolute`, `bottom: 1.5rem`, centred
- 1px line, `height: 36px`, gradient `#60A5FA → transparent`
- Pulse animation, `opacity: 0.3`

---

## 5. Scroll Progress Bar

New component: `src/components/ui/ScrollProgress.tsx` (client component).  
Rendered in `layout.tsx` above `{children}`, outside all sections.

- `position: fixed`, `top: 0`, full width, `height: 2px`, `z-index: 200`
- Gradient: `linear-gradient(90deg, #1D4ED8, #3B82F6, #60A5FA)`
- `transform-origin: left`, `scaleX` driven by `window.scrollY / (scrollHeight - innerHeight)`
- Passive scroll listener, `useEffect` cleanup on unmount

---

## 6. Work Section (Cards)

**Current:** Solid `var(--bg-card)` cards, `border-radius` ~0 (square).  
**New:** Glass cards, `border-radius: 20px`, staggered reveal, cursor glow.

### Card styles
- Background: `rgba(255,255,255,0.05)` + `backdrop-filter: blur(16px)`
- Border: `1px solid rgba(255,255,255,0.09)`
- Border-radius: `20px`
- Hover: `translateY(-5px)`, border `rgba(59,130,246,0.3)`, `box-shadow: 0 16px 48px rgba(0,0,0,0.3)`
- Cursor glow: `radial-gradient` via CSS custom properties `--mx / --my` set on `mousemove`
- Card title: Playfair Display 600, 1.05rem
- Tags: pill badges (`border-radius: 999px`)
- `↗` arrow: top-right, animates on hover (`translate(2px, -2px)` + colour → `#60A5FA`)

### Staggered entrance (Intersection Observer, `threshold: 0.1`)
- Card 1: `transition-delay: 0ms`
- Card 2: `transition-delay: 90ms`
- Card 3: `transition-delay: 180ms`
- Animation: `opacity 0 → 1`, `translateY(20px → 0)`, `0.6s ease`

---

## 7. Experience Section

**Current:** Glass card per item.  
**New:** Divider-separated list — no boxes.

### Item layout
- `border-top / border-bottom: 1px solid rgba(255,255,255,0.09)`
- `padding: 1.75rem 0 1.75rem 1.25rem`
- Grid: `1fr auto` (content | dates)
- Hover: vivid blue `2px` left accent line appears (`opacity 0 → 1`)
- Employer: Playfair Display 600, 1.05rem
- Role: Inter, 0.75rem, `#60A5FA`
- Brief + tech pill tags below
- Dates: Inter 0.6rem, `letter-spacing: 0.1em`, right-aligned

### Staggered entrance
- Item 1: `transition-delay: 0ms`
- Item 2: `transition-delay: 100ms`
- Item 3: `transition-delay: 200ms`

---

## 8. Remaining Sections (Plans, About, Contact)

Apply the same token and typography updates:
- Headings → Playfair Display
- Body → Inter
- Tags/badges → pill shape
- Section labels unchanged (existing `.section-label` pattern)
- Plans cards: apply glass surface + `border-radius: 20px` (same as work cards)
- Contact section: no glass box — keep form fields as-is, update font tokens only

---

## 9. Motion System

All scroll-triggered animations use `IntersectionObserver` (`threshold: 0.1`). No scroll-jacking.

```
fadeUp: opacity 0→1, translateY(20px→0), 0.7s ease
```

`prefers-reduced-motion`: wrap all animations in:
```css
@media (prefers-reduced-motion: no-preference) { … }
```

Hover transitions: `150–250ms ease` throughout.

---

## 10. Globals & Shared

- `globals.css`: add vivid blue tokens, update semantic accent vars, update heading `font-family`
- `layout.tsx`: swap font imports
- `.gitignore`: add `.superpowers/` if not present
- Grain texture overlay: keep as-is (`opacity: 0.035`, `z-index: 9999`)
- `border-radius` conventions:
  - Glass bands / section containers: `28px`
  - Cards: `20px`
  - Buttons, tags, pills: `999px`
  - Inputs: `12px`

---

## Delivery Order

1. `globals.css` + `layout.tsx` — tokens, fonts, `ScrollProgress` component wired into layout
2. `components/ui/ScrollProgress.tsx` — new component (fixed bar, scroll-driven `scaleX`)
3. `Navbar.tsx` — pill glass nav
4. `HeroSection.tsx` — glass band, blobs, entrance animations
5. `WorkSection.tsx` — glass cards, staggered reveal, cursor glow
6. `ExperienceSection.tsx` — divider list, no cards
7. `PlansSection.tsx` — glass cards, updated tokens
8. `AboutSection.tsx` + `ContactSection.tsx` — token + font updates only
