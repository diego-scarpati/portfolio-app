'use client'

import { useLayoutEffect, useState } from 'react'

function resolveTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return (stored ? stored === 'dark' : prefersDark) ? 'dark' : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(resolveTheme)

  useLayoutEffect(() => {
    // Re-apply in case React hydration stripped data-theme from <html>
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  // Both icons are always in the DOM — CSS shows/hides via [data-theme="dark"].
  // Server renders theme='light', client may resolve 'dark', but the HTML output
  // is identical (both icons present), so React has nothing to reconcile → no re-render on load.
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 34,
        height: 34,
        borderRadius: 999,
        border: '1px solid var(--nav-border)',
        background: 'transparent',
        color: 'var(--nav-muted)',
        cursor: 'pointer',
        transition: 'color 0.2s, border-color 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--nav-text)'; e.currentTarget.style.borderColor = 'var(--nav-text)' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'var(--nav-muted)'; e.currentTarget.style.borderColor = 'var(--nav-border)' }}
    >
      {/* Sun — visible in dark mode */}
      <svg className="theme-icon-sun" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
      {/* Moon — visible in light mode */}
      <svg className="theme-icon-moon" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
  )
}
