'use client'

import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { label: 'Plans', href: '#plans' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[var(--bg-primary)] border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-bold tracking-widest text-[var(--text-primary)] uppercase"
          onClick={closeMobile}
        >
          DS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[var(--accent)] text-[var(--accent-text)] rounded hover:bg-[var(--accent-hover)] transition-colors"
          >
            Hire Me
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
          >
            <span className="relative block w-4 h-4">
              <span
                className={`absolute left-0 w-4 h-0.5 bg-current transition-all duration-200 ${
                  mobileOpen ? 'top-1.5 rotate-45' : 'top-0.5'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 w-4 h-0.5 bg-current transition-opacity duration-200 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 w-4 h-0.5 bg-current transition-all duration-200 ${
                  mobileOpen ? 'top-1.5 -rotate-45' : 'top-2.5'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="py-3 text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors border-b border-[var(--border)] last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-3 inline-flex items-center justify-center px-4 py-3 text-xs font-semibold tracking-wider uppercase bg-[var(--accent)] text-[var(--accent-text)] rounded hover:bg-[var(--accent-hover)] transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
