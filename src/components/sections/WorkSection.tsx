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
