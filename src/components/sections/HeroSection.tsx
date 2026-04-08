const TECH = ['Next.js', 'React', 'TypeScript', 'Supabase', 'Node.js', 'Solidity', 'AWS', 'Python']

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, var(--bg-secondary) 0%, transparent 60%)',
          opacity: 0.6,
        }}
      />
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="max-w-3xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-xs text-[var(--text-secondary)] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for freelance · Sydney, AU
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Diego Scarpati
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--accent)] mb-6">
            Senior Fullstack Developer
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl">
            Building production-grade web apps, landing pages & Web3 products for Australian businesses.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
            <a
              href="#plans"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wider uppercase bg-[var(--accent)] text-[var(--accent-text)] rounded hover:bg-[var(--accent-hover)] transition-colors duration-200"
            >
              View Plans ↓
            </a>
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wider uppercase border border-[var(--border)] text-[var(--text-secondary)] rounded hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              See My Work ↓
            </a>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {TECH.map((t) => (
              <span
                key={t}
                className="bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--tag-border)] px-2 py-0.5 rounded text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
