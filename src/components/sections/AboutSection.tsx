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
  },
  {
    label: 'GitHub',
    value: '@diego-scarpati',
    href: 'https://github.com/diego-scarpati',
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
                        style={{ color: 'var(--accent-2)', textDecoration: 'none', transition: 'opacity 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      >
                        {f.value} ↗
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
