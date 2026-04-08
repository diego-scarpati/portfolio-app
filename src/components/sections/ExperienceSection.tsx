import { workItems } from '@/data/work'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
            03 / Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Where I&apos;ve worked
          </h2>
        </div>

        <ol className="relative border-l border-[var(--border)] ml-2 space-y-12">
          {workItems.map((item) => (
            <li key={`${item.employer}-${item.start}`} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {item.employer} ↗
                </a>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  {item.start} – {item.end}
                </span>
              </div>
              <p className="text-sm text-[var(--accent)] font-medium mb-3">
                {item.title}
              </p>
              <p className="text-[var(--text-secondary)] mb-4">{item.brief}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--tag-border)] px-2 py-0.5 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
