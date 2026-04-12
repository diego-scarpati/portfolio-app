# Portfolio Design Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio with Playfair Display + Inter typography, vivid blue color expansion, immersive liquid glass surfaces, and motion-driven scroll animations.

**Architecture:** Section-by-section delivery starting from shared tokens (globals.css, layout.tsx), then outward to each component. Glass surfaces use `backdrop-filter: blur()` + translucent rgba backgrounds. Scroll animations use `IntersectionObserver` (no scroll-jacking). Parallax blobs use a passive scroll listener. No test runner exists — verification is `next build` (TypeScript + ESLint) plus manual browser checks.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4 (CSS-first, no config file), no testing framework

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/app/globals.css` | Modify | New tokens, keyframes, reveal CSS classes |
| `src/app/layout.tsx` | Modify | Swap fonts, wire ScrollProgress |
| `src/components/ui/ScrollProgress.tsx` | **Create** | Fixed 2px progress bar |
| `src/components/ui/Navbar.tsx` | Modify | Pill glass nav |
| `src/components/sections/HeroSection.tsx` | Modify | Glass band, parallax blobs, staggered entrance |
| `src/components/sections/WorkSection.tsx` | Modify | Glass cards, staggered reveal, cursor glow |
| `src/components/sections/ExperienceSection.tsx` | Modify | Divider list, left-accent hover, reveal |
| `src/components/sections/PlansSection.tsx` | Modify | Glass cards, updated tokens |
| `src/components/sections/AboutSection.tsx` | Modify | Font token update only |
| `src/components/sections/ContactSection.tsx` | Modify | Font token update, remove var(--font-syne) |

---

### Task 0: Update .gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add .superpowers to .gitignore**

Open `.gitignore` and add at the bottom:

```
# Brainstorm session files
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm sessions"
```

---

### Task 1: Design Tokens + Fonts

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace the full contents of `src/app/globals.css`**

```css
@import "tailwindcss";
@source "../../";

@theme {
  --color-big-stone-50: #f5f7fa;
  --color-big-stone-100: #eaeef4;
  --color-big-stone-200: #cfd9e8;
  --color-big-stone-300: #a5bad4;
  --color-big-stone-400: #7596bb;
  --color-big-stone-500: #5378a4;
  --color-big-stone-600: #405f89;
  --color-big-stone-700: #354d6f;
  --color-big-stone-800: #2f425d;
  --color-big-stone-900: #243042;
  --color-big-stone-950: #1d2634;
}

/* ─── Light theme (default) ─── */
:root {
  --bg-primary: #eaeef4;
  --bg-secondary: #f5f7fa;
  --bg-card: #ffffff;
  --border: #cfd9e8;
  --text-primary: #1d2634;
  --text-secondary: #354d6f;
  --text-muted: #5378a4;
  --accent: #243042;
  --accent-2: #2563EB;
  --accent-hover: #354d6f;
  --accent-text: #eaeef4;
  --tag-bg: #eaeef4;
  --tag-text: #405f89;
  --tag-border: #cfd9e8;
  --glass-bg: rgba(255, 255, 255, 0.65);
  --glass-border: rgba(0, 0, 0, 0.08);
}

/* ─── Dark theme ─── */
[data-theme="dark"] {
  --bg-primary: #151e2d;
  --bg-secondary: #1d2a3e;
  --bg-card: #243348;
  --border: #2d4060;
  --text-primary: #eaeef4;
  --text-secondary: #8faac8;
  --text-muted: #4d6a8a;
  --accent: #3B82F6;
  --accent-2: #60A5FA;
  --accent-hover: #2563EB;
  --accent-text: #ffffff;
  --tag-bg: #1a2638;
  --tag-text: #6a95c8;
  --tag-border: #2d4060;
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.09);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.25s ease, color 0.25s ease;
}

body {
  font-family: var(--font-body), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

/* Grain texture overlay */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 300px 300px;
}

/* Typography — Playfair Display for all headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display), Georgia, serif;
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* ─── Scroll reveal classes (used by client components) ─── */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Keyframe animations ─── */
@media (prefers-reduced-motion: no-preference) {
  @keyframes heroIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; }
    50%       { opacity: 0.8; }
  }

  @keyframes ping {
    75%, 100% { transform: scale(2); opacity: 0; }
  }

  .animate-hero-in {
    animation: heroIn var(--hero-duration, 0.6s) var(--hero-delay, 0s) ease both;
  }

  .animate-scroll-pulse {
    animation: scrollPulse 2s ease-in-out infinite;
  }
}

@layer utilities {
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1rem;
    font-family: var(--font-body), system-ui, sans-serif;
  }

  .section-label::before {
    content: '';
    display: block;
    width: 2rem;
    height: 1px;
    background-color: var(--text-muted);
    flex-shrink: 0;
  }

  .font-display {
    font-family: var(--font-display), Georgia, serif;
  }
}
```

- [ ] **Step 2: Replace the font imports in `src/app/layout.tsx`**

Replace the top of the file (lines 1–19):

```tsx
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

// Display font — editorial, premium, serif
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

// Body font — clean, neutral, readable
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})
```

- [ ] **Step 3: Update the body className and add ScrollProgress in `layout.tsx`**

Replace the `RootLayout` return value:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/diegoscarpati/Portfolio/portfolio-app && npm run build
```

Expected: build fails with "Cannot find module '@/components/ui/ScrollProgress'" — that's correct, ScrollProgress doesn't exist yet. This confirms the import is wired.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: design tokens — Playfair Display + Inter, vivid blue expansion, glass vars"
```

---

### Task 2: ScrollProgress Component

**Files:**
- Create: `src/components/ui/ScrollProgress.tsx`

- [ ] **Step 1: Create `src/components/ui/ScrollProgress.tsx`**

```tsx
'use client'

import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const update = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      const pct = total > 0 ? scrolled / total : 0
      bar.style.transform = `scaleX(${pct})`
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={barRef}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 200,
        transformOrigin: 'left',
        transform: 'scaleX(0)',
        background: 'linear-gradient(90deg, #1D4ED8, #3B82F6, #60A5FA)',
        pointerEvents: 'none',
      }}
    />
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: build succeeds with no errors.

- [ ] **Step 3: Manual check**

```bash
npm run dev
```

Open http://localhost:3000. Scroll down — the 2px gradient bar at the top should grow from left to right. Scroll back to top — it should shrink to zero.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/ScrollProgress.tsx
git commit -m "feat: ScrollProgress — fixed 2px gradient bar driven by scroll position"
```

---

### Task 3: Navbar — Pill Glass

**Files:**
- Modify: `src/components/ui/Navbar.tsx`

- [ ] **Step 1: Replace the full contents of `src/components/ui/Navbar.tsx`**

```tsx
'use client'

import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { label: 'Plans',   href: '#plans' },
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = () => setMobileOpen(false)

  return (
    <>
      {/* ── Desktop pill nav ── */}
      <div
        className="hidden md:flex"
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '0.65rem 1.5rem',
            background: 'rgba(15,24,37,0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: 999,
            whiteSpace: 'nowrap',
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
          >
            DS
          </a>

          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeToggle />
            <a
              href="#contact"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                background: 'var(--accent)',
                color: 'var(--accent-text)',
                padding: '0.45rem 1rem',
                borderRadius: 999,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-hover)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>

      {/* ── Mobile top bar ── */}
      <nav
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.25rem',
          background: mobileOpen ? 'var(--bg-primary)' : 'rgba(15,24,37,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--glass-border)',
          transition: 'background 0.2s',
        }}
      >
        <a
          href="#"
          onClick={close}
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', textDecoration: 'none' }}
        >
          DS
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
          >
            <span className="relative block w-4 h-4">
              <span className={`absolute left-0 w-4 h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'top-1.5 rotate-45' : 'top-0.5'}`} />
              <span className={`absolute left-0 top-1.5 w-4 h-0.5 bg-current transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 w-4 h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'top-1.5 -rotate-45' : 'top-2.5'}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            zIndex: 99,
            background: 'var(--bg-primary)',
            borderBottom: '1px solid var(--glass-border)',
          }}
        >
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                style={{
                  fontFamily: 'var(--font-body)',
                  padding: '0.875rem 0',
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              style={{
                marginTop: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 1rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'var(--accent)',
                color: 'var(--accent-text)',
                textDecoration: 'none',
                borderRadius: 999,
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  )
}
```

- [ ] **Step 2: Build + visual check**

```bash
npm run build && npm run dev
```

Open http://localhost:3000. Confirm: pill nav floats centred at top, glass effect visible (dark bg required), "Hire Me" pill button present. On mobile (<768px), confirm the top bar + hamburger menu works.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Navbar.tsx
git commit -m "feat: navbar — floating pill glass, always-visible, mobile drawer"
```

---

### Task 4: HeroSection — Glass Band + Parallax + Entrance

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

- [ ] **Step 1: Replace the full contents of `src/components/sections/HeroSection.tsx`**

```tsx
'use client'

import { useEffect, useRef } from 'react'

const TECH = ['Next.js', 'React', 'TypeScript', 'Supabase', 'Node.js', 'Solidity', 'AWS', 'Python']

export function HeroSection() {
  const blob1 = useRef<HTMLDivElement>(null)
  const blob2 = useRef<HTMLDivElement>(null)
  const blob3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (blob1.current) blob1.current.style.transform = `translateY(${y * 0.15}px)`
      if (blob2.current) blob2.current.style.transform = `translateY(${y * 0.08}px)`
      if (blob3.current) blob3.current.style.transform = `translateY(${y * 0.12}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 1.5rem 2.5rem',
      }}
    >
      {/* Parallax blobs — 3 layers */}
      <div ref={blob1} aria-hidden style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', filter: 'blur(70px)', background: 'rgba(59,130,246,0.18)', top: -120, right: -80, pointerEvents: 'none', willChange: 'transform' }} />
      <div ref={blob2} aria-hidden style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', filter: 'blur(70px)', background: 'rgba(29,78,216,0.15)', bottom: 60, left: -60, pointerEvents: 'none', willChange: 'transform' }} />
      <div ref={blob3} aria-hidden style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', filter: 'blur(70px)', background: 'rgba(96,165,250,0.12)', top: '40%', left: '30%', pointerEvents: 'none', willChange: 'transform' }} />

      {/* Glass band */}
      <div
        style={{
          maxWidth: 860,
          margin: '0 auto',
          width: '100%',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid var(--glass-border)',
          borderRadius: 28,
          padding: '2.5rem 3rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Availability pill */}
        <div
          className="animate-hero-in"
          style={{
            '--hero-duration': '0.6s',
            '--hero-delay': '0.1s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1.25rem',
          } as React.CSSProperties}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Available for freelance · Sydney, AU
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-hero-in"
          style={{
            '--hero-duration': '0.7s',
            '--hero-delay': '0.2s',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '0.15em',
          } as React.CSSProperties}
        >
          Diego<br />
          <span style={{ color: 'var(--accent-2)' }}>Scarpati</span>
        </h1>

        {/* Role */}
        <p
          className="animate-hero-in"
          style={{
            '--hero-duration': '0.6s',
            '--hero-delay': '0.35s',
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.62rem, 1.1vw, 0.75rem)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
          } as React.CSSProperties}
        >
          Senior Fullstack Developer
        </p>

        {/* Description */}
        <p
          className="animate-hero-in"
          style={{
            '--hero-duration': '0.6s',
            '--hero-delay': '0.45s',
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: 420,
            marginBottom: '1.75rem',
          } as React.CSSProperties}
        >
          Building production-grade web apps, landing pages &amp; Web3 products for Australian businesses.
        </p>

        {/* CTAs */}
        <div
          className="animate-hero-in"
          style={{
            '--hero-duration': '0.6s',
            '--hero-delay': '0.55s',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
          } as React.CSSProperties}
        >
          <a
            href="#plans"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'var(--accent)',
              color: 'var(--accent-text)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '0.75rem 1.5rem',
              borderRadius: 999,
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            View Plans ↓
          </a>
          <a
            href="#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '0.75rem 1.5rem',
              borderRadius: 999,
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            See My Work ↓
          </a>
        </div>

        {/* Tech tags */}
        <div
          className="animate-hero-in"
          style={{
            '--hero-duration': '0.6s',
            '--hero-delay': '0.65s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
          } as React.CSSProperties}
        >
          {TECH.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-muted)',
                padding: '0.22rem 0.65rem',
                borderRadius: 999,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-2)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint — outside glass band */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: 0.3,
        }}
      >
        <div
          className="animate-scroll-pulse"
          style={{
            width: 1,
            height: 36,
            background: 'linear-gradient(to bottom, var(--accent-2), transparent)',
          }}
        />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build + visual check**

```bash
npm run build && npm run dev
```

Open http://localhost:3000. Confirm:
- Hero fits exactly in one viewport (no scroll needed to see the scroll hint)
- Glass band is visible with soft 28px corners
- Name animates in staggered on load
- Scrolling down slightly moves the blobs at different speeds
- Scroll hint pulses at the bottom

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: hero — glass band, 3-layer parallax blobs, staggered entrance, 100dvh"
```

---

### Task 5: WorkSection — Glass Cards + Staggered Reveal

**Files:**
- Modify: `src/components/sections/WorkSection.tsx`

- [ ] **Step 1: Replace the full contents of `src/components/sections/WorkSection.tsx`**

```tsx
'use client'

import { useEffect, useRef } from 'react'
import { projects } from '@/data/projects'

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) observer.observe(section)
    cardRefs.current.forEach((card) => { if (card) observer.observe(card) })

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      ref={sectionRef}
      id="work"
      className="reveal-on-scroll py-24 md:py-32"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">04 / Selected Work</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            Recent projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <a
              key={project.title}
              ref={(el) => { cardRefs.current[i] = el }}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-card"
              style={{
                transitionDelay: `${i * 90}ms`,
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid var(--glass-border)',
                borderRadius: 20,
                padding: '1.75rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                // CSS custom props for cursor glow — set via mousemove
                '--mx': '50%',
                '--my': '50%',
              } as React.CSSProperties}
              onMouseMove={handleMouseMove}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--glass-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Cursor glow — pseudo-element via CSS variables */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  background: 'radial-gradient(400px circle at var(--mx) var(--my), rgba(59,130,246,0.09), transparent 50%)',
                  pointerEvents: 'none',
                  transition: 'opacity 0.3s',
                }}
              />

              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  color: 'var(--text-muted)',
                  opacity: 0.5,
                  marginBottom: '1.25rem',
                  display: 'block',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <span
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.4rem',
                  color: 'var(--text-muted)',
                  fontSize: '1rem',
                  transition: 'color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-2)'; e.currentTarget.style.transform = 'translate(2px,-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translate(0,0)' }}
              >
                ↗
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                  marginBottom: '0.75rem',
                }}
              >
                {project.title}
              </h3>

              <p
                className="line-clamp-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  flex: 1,
                  marginBottom: '1.25rem',
                }}
              >
                {project.brief}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.57rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-muted)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 999,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build + visual check**

```bash
npm run build && npm run dev
```

Scroll down to the Work section. Confirm:
- Cards fade in with stagger (0 / 90 / 180ms delay)
- Glass surface visible with `border-radius: 20px`
- Hovering a card lifts it 5px and shows a subtle border glow
- Moving the cursor over a card shows a radial gradient following the mouse
- Tags are pill-shaped

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/WorkSection.tsx
git commit -m "feat: work section — glass cards, staggered IntersectionObserver reveal, cursor glow"
```

---

### Task 6: ExperienceSection — Divider List with Reveal

**Files:**
- Modify: `src/components/sections/ExperienceSection.tsx`

- [ ] **Step 1: Replace the full contents of `src/components/sections/ExperienceSection.tsx`**

```tsx
'use client'

import { useEffect, useRef } from 'react'
import { workItems } from '@/data/work'

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) observer.observe(section)
    itemRefs.current.forEach((item) => { if (item) observer.observe(item) })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="reveal-on-scroll py-24 md:py-32"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">03 / Experience</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            Where I&apos;ve worked
          </h2>
        </div>

        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {workItems.map((item, i) => (
            <li key={`${item.employer}-${item.start}`}>
              <div
                ref={(el) => { itemRefs.current[i] = el }}
                className="reveal-card"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  borderTop: '1px solid var(--border)',
                  padding: '1.75rem 0 1.75rem 1.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '0.25rem 2rem',
                  alignItems: 'start',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  const accent = e.currentTarget.querySelector<HTMLDivElement>('[data-accent-bar]')
                  if (accent) accent.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const accent = e.currentTarget.querySelector<HTMLDivElement>('[data-accent-bar]')
                  if (accent) accent.style.opacity = '0'
                }}
              >
                {/* Left accent bar — reveals on hover */}
                <div
                  data-accent-bar
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '1.75rem',
                    bottom: '1.75rem',
                    width: 2,
                    borderRadius: 1,
                    background: 'var(--accent)',
                    opacity: 0,
                    transition: 'opacity 0.25s',
                  }}
                />

                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-block',
                      marginBottom: '0.2rem',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-2)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    {item.employer} ↗
                  </a>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.03em',
                      color: 'var(--accent-2)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      maxWidth: 520,
                    }}
                  >
                    {item.brief}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.75rem' }}>
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.56rem',
                          letterSpacing: '0.07em',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: 999,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                    paddingTop: '0.2rem',
                  }}
                >
                  {item.start} — {item.end}
                </div>
              </div>
            </li>
          ))}
          {/* Bottom border */}
          <li style={{ borderTop: '1px solid var(--border)' }} aria-hidden />
        </ol>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build + visual check**

```bash
npm run build && npm run dev
```

Scroll to Experience. Confirm:
- No card boxes — just rows separated by dividers
- Items stagger-reveal on scroll
- Hovering a row shows a 2px vivid blue left bar
- Employer link turns `accent-2` on hover
- Technology tags are pill-shaped
- Dates right-aligned

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ExperienceSection.tsx
git commit -m "feat: experience — divider list, left-accent hover, staggered reveal, no boxes"
```

---

### Task 7: PlansSection — Glass Cards + Updated Tokens

**Files:**
- Modify: `src/components/sections/PlansSection.tsx`

- [ ] **Step 1: Update card styles in `PlansSection.tsx`**

Replace the `className` on the service plan card `<div>` (currently lines 22–28):

```tsx
<div
  key={plan.id}
  className={`relative flex flex-col p-7 border transition-all duration-200 group hover:-translate-y-1 ${
    plan.popular
      ? 'border-[var(--accent)]'
      : 'border-[var(--glass-border)] hover:border-[var(--accent)]'
  }`}
  style={{
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderRadius: 20,
  }}
>
```

- [ ] **Step 2: Update retainer plan cards (currently line ~92–96)**

Replace the `className` on the retainer `<div>`:

```tsx
<div
  key={plan.id}
  className="border border-[var(--glass-border)] hover:border-[var(--accent)] transition-colors duration-200"
  style={{
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderRadius: 20,
    padding: '1.75rem',
  }}
>
```

- [ ] **Step 3: Update the section heading and "Send a Brief" / "Start a Project" buttons**

Find the section `<h2>` (line ~11–14) and replace its `className`:

```tsx
<h2
  style={{
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: 'var(--text-primary)',
    letterSpacing: '-0.01em',
    lineHeight: 1.1,
    marginBottom: '0.75rem',
  }}
>
  Transparent pricing.<br />No surprises.
</h2>
```

Find the "Send a Brief →" anchor inside each service plan card and update its `className`:

```tsx
<a
  href="#contact"
  className={`block text-center py-3 text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
    plan.popular
      ? 'bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)]'
      : 'border border-[var(--glass-border)] text-[var(--text-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--text-primary)]'
  }`}
  style={{ borderRadius: 999 }}
>
  Send a Brief →
</a>
```

Find the "Start a Project →" anchor (bottom of section) and update:

```tsx
<a
  href="#contact"
  className="block w-full text-center py-4 text-sm font-bold tracking-widest uppercase bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)] transition-colors duration-200"
  style={{ borderRadius: 999 }}
>
  Start a Project →
</a>
```

- [ ] **Step 4: Build + visual check**

```bash
npm run build && npm run dev
```

Scroll to Plans. Confirm:
- Cards have `border-radius: 20px` glass surface
- "Popular" card has accent border
- CTA buttons are pill-shaped
- Heading is in Playfair Display

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/PlansSection.tsx
git commit -m "feat: plans — glass cards, pill CTAs, Playfair Display heading"
```

---

### Task 8: AboutSection + ContactSection — Font Token Updates

**Files:**
- Modify: `src/components/sections/AboutSection.tsx`
- Modify: `src/components/sections/ContactSection.tsx`

- [ ] **Step 1: Update `AboutSection.tsx` heading**

Find the `<h2>` (line 24) and replace:

```tsx
<h2
  style={{
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
    color: 'var(--text-primary)',
    letterSpacing: '-0.01em',
  }}
>
  A bit about me
</h2>
```

Find the `<aside>` "Quick facts" card (line 48–56) and add `borderRadius: 20px`:

```tsx
<aside
  className="h-fit"
  style={{
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid var(--glass-border)',
    padding: '1.75rem',
    borderRadius: 20,
  }}
>
```

- [ ] **Step 2: Update `ContactSection.tsx` heading**

Find the `<h2>` (lines 65–74) which has `fontFamily: "var(--font-syne)"` hardcoded. Replace with:

```tsx
<h2
  style={{
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
  }}
  className="mb-3"
>
  Got a project in mind?
</h2>
```

Find the form wrapper `<div>` (line 81) and add glass + rounded styles:

```tsx
<div
  style={{
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid var(--glass-border)',
    borderRadius: 20,
  }}
  className="p-8 md:p-10"
>
```

Find the submit `<button>` (line 227) and update:

```tsx
<button
  type="submit"
  disabled={status === 'submitting'}
  style={{
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.15em',
    background: 'var(--accent)',
    color: 'var(--accent-text)',
    borderRadius: 999,
  }}
  className="w-full md:w-auto px-8 py-3.5 text-[11px] uppercase hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {status === 'submitting' ? 'Sending...' : 'Send Brief →'}
</button>
```

- [ ] **Step 3: Build + visual check**

```bash
npm run build && npm run dev
```

Check About and Contact sections. Confirm:
- Headings are in Playfair Display
- No `var(--font-syne)` references remain — search to confirm:

```bash
grep -r "font-syne" src/
```

Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/AboutSection.tsx src/components/sections/ContactSection.tsx
git commit -m "feat: about + contact — Playfair Display headings, glass fact card + form wrapper"
```

---

### Task 9: Final Build + Smoke Check

**Files:** None — verification only

- [ ] **Step 1: Clean build**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no TypeScript or ESLint errors.

- [ ] **Step 2: Check for stale font variable references**

```bash
grep -r "font-syne\|font-body.*DM\|Syne\|DM_Sans" src/
```

Expected: no output. Any matches are a bug — update the relevant file to use `var(--font-display)` or `var(--font-body)`.

- [ ] **Step 3: Dark mode visual check**

```bash
npm run dev
```

Open http://localhost:3000 in dark mode (toggle via ThemeToggle). Scroll through all sections. Confirm:
- Pill navbar floats correctly
- Hero glass band, blobs, and staggered entrance work
- ScrollProgress bar grows as you scroll
- Work cards reveal with stagger; cursor glow follows mouse; hover lifts cards
- Experience rows have blue left-accent on hover
- Plans cards have glass surface + pill CTAs
- About "Quick facts" card has glass surface
- Contact heading in Playfair Display; form wrapper has glass surface + rounded corners

- [ ] **Step 4: Light mode visual check**

Toggle to light mode. Confirm:
- Navbar pill remains legible (`rgba(15,24,37,0.6)` still provides contrast against light backgrounds)
- Glass surfaces use `rgba(255,255,255,0.65)` — check cards still readable
- Accent colour is `#243042` (existing light mode value — unchanged per spec)

- [ ] **Step 5: Mobile check (375px)**

In DevTools, set viewport to 375px wide. Confirm:
- Mobile hamburger nav opens/closes correctly
- Hero glass band padding doesn't overflow viewport width
- Work cards stack to single column
- Experience dates wrap without overflow

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: verify — clean build, all sections updated, no stale font refs"
```
