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
      className="reveal-on-scroll py-24 md:py-32 flex flex-col justify-center"
      style={{ background: 'var(--bg-primary)', minHeight: '100dvh' }}
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
