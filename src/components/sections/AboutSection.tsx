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
  return (
    <section id="about" className="py-24 md:py-32 flex flex-col justify-center" style={{ background: 'var(--bg-primary)', minHeight: '100dvh' }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16">

          {/* Copy */}
          <div
            className="space-y-6"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}
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
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Quick facts
            </p>
            <dl className="space-y-5">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {f.label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {f.href ? (
                      <a
                        href={f.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity duration-200"
                        style={{ color: "var(--accent)" }}
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
