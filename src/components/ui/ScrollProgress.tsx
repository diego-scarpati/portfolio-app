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
