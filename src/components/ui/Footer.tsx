const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/diego-scarpati/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/diego-scarpati',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/61499404825',
  },
  {
    label: 'Download CV',
    href: '/Diego_Scarpati_Resume.docx',
    external: false,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="#"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.08em",
            color: "var(--text-primary)",
          }}
        >
          DS
        </a>

        <div className="flex flex-wrap gap-6 justify-center">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external === false ? undefined : '_blank'}
              rel={s.external === false ? undefined : 'noopener noreferrer'}
              className="text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              {s.label} {s.external === false ? '↓' : '↗'}
            </a>
          ))}
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Diego Scarpati
        </p>
      </div>
    </footer>
  )
}
