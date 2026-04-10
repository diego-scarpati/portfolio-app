import { servicePlans, retainerPlans } from '@/data/services'

export function PlansSection() {
  return (
    <section id="plans" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="section-label">02 / What I Build</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}
          >
            Transparent pricing.<br />No surprises.
          </h2>
          <p className="text-[var(--text-secondary)]">
            Fixed packages with clear deliverables. You know what you&apos;re getting before we start.
          </p>
        </div>

        {/* Service plan cards — 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {servicePlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-7 border transition-all duration-200 group hover:-translate-y-1 ${
                plan.popular
                  ? 'border-[var(--accent)]'
                  : 'border-[var(--glass-border)] hover:border-[var(--accent)]'
              }`}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: 20,
              }}
            >
              {plan.popular && (
                <span className="absolute top-0 right-7 -translate-y-1/2 bg-[var(--accent)] text-[var(--accent-text)] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                    {plan.timeline}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl font-bold text-[var(--accent)] leading-none">
                    ${plan.startingPrice.toLocaleString()}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{plan.currency}</p>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-[var(--text-secondary)] flex items-start gap-2.5">
                    <span className="text-[var(--accent)] mt-0.5 shrink-0 text-base leading-tight">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)]'
                    : 'border border-[var(--glass-border)] text-[var(--text-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--text-primary)]'
                }`}
                style={{ borderRadius: 999 }}
              >
                Send a Brief →
              </a>
            </div>
          ))}
        </div>

        {/* Retainer section */}
        <div className="border-t border-[var(--border)] pt-14">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
              Ongoing Collaboration
            </h3>
            <p className="text-[var(--text-secondary)]">
              Dedicated development capacity on a monthly basis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {retainerPlans.map((plan) => (
              <div
                key={plan.id}
                className="border border-[var(--glass-border)] hover:border-[var(--accent)] transition-colors duration-200"
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: 20,
                  padding: '1.75rem',
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">
                    {plan.name}
                  </h4>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-bold text-[var(--accent)] leading-none">
                      ${plan.pricePerMonth.toLocaleString()}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                      {plan.currency} / month
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  {plan.hoursPerMonth} hours / month
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-[var(--text-secondary)] flex items-start gap-2.5">
                      <span className="text-[var(--accent)] mt-0.5 shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="block w-full text-center py-4 text-sm font-bold tracking-widest uppercase bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)] transition-colors duration-200"
            style={{ borderRadius: 999 }}
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  )
}
