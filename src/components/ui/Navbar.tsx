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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[var(--bg-primary)] border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-bold tracking-widest text-[var(--text-primary)] uppercase"
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
        </div>
      </div>
    </nav>
  )
}
