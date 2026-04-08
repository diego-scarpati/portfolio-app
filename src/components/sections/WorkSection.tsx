import { projects } from '@/data/projects'

export function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
            04 / Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Recent projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 flex flex-col hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                  ↗
                </span>
              </div>
              <p
                className="text-sm text-[var(--text-secondary)] mb-4 flex-1"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {project.brief}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--tag-border)] px-2 py-0.5 rounded text-xs"
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
