'use client'

import { useEffect, useRef } from 'react'

const FACTS = [
  { label: 'Location', value: 'Sydney, Northern Beaches' },
  { label: 'Stack', value: 'Next.js · React · TS · Node · Python · Solidity' },
  { label: 'Currently', value: 'Freelance & contract work' },
  {
    label: 'LinkedIn',
    value: '@diego-scarpati',
    href: 'https://www.linkedin.com/in/diego-scarpati/',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: 'inline', marginRight: '0.3rem', verticalAlign: 'middle' }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: '@diego-scarpati',
    href: 'https://github.com/diego-scarpati',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: 'inline', marginRight: '0.3rem', verticalAlign: 'middle' }}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const asideRef = useRef<HTMLElement>(null)

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

    const els = [sectionRef.current, copyRef.current, asideRef.current]
    els.forEach((el) => { if (el) observer.observe(el) })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="reveal-on-scroll py-32 md:py-40 flex flex-col justify-center"
      style={{ background: 'var(--bg-primary)', minHeight: '100dvh' }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">05 / About</p>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-12">

          {/* Copy */}
          <div
            ref={copyRef}
            className="reveal-card"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <p>
              I&apos;m a Senior Fullstack Developer based in Sydney&apos;s Northern Beaches. I specialise in building production-grade web applications, landing pages, and Web3 products for Australian businesses and startups.
            </p>
            <p>
              Before switching to engineering, I spent years as a senior accountant at EY. That background shapes how I work — I think in systems, measure what matters, and take deadlines seriously.
            </p>
            <p>
              I work with Next.js, React, TypeScript, Supabase, Node.js, Python, and Solidity. When I&apos;m not building, I&apos;m surfing the Northern Beaches.
            </p>
            <p>
              The switch from accounting to engineering wasn&apos;t accidental — I genuinely wanted to build things. That mix of financial rigour and product thinking tends to come in handy when scoping what&apos;s actually worth building. I work best with founders and small teams who need a technical partner, not just a pair of hands.
            </p>
          </div>

          {/* Facts card */}
          <aside
            ref={asideRef}
            className="reveal-card h-fit"
            style={{
              transitionDelay: '90ms',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid var(--glass-border)',
              padding: '1.75rem',
              borderRadius: 20,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
              }}
            >
              Quick facts
            </p>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {f.label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {f.href ? (
                      <a
                        href={f.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--accent-2)', textDecoration: 'none', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      >
                        {'icon' in f && f.icon}{f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
