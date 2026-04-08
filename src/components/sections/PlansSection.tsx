import { servicePlans, retainerPlans } from '@/data/services'

export function PlansSection() {
  return (
    <section id="plans" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
            02 / What I Build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-3">
            Transparent pricing.
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">No surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {servicePlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[var(--bg-card)] rounded-lg p-6 flex flex-col border ${
                plan.popular
                  ? 'border-[var(--accent)] shadow-lg'
                  : 'border-[var(--border)]'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 bg-[var(--accent)] text-[var(--accent-text)] text-xs font-bold tracking-wider uppercase px-2 py-1 rounded">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-[var(--accent)] mb-1">
                from ${plan.startingPrice.toLocaleString()} {plan.currency}
              </p>
              <p className="text-xs text-[var(--text-muted)] mb-4">{plan.timeline}</p>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                {plan.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="text-sm text-[var(--text-secondary)] flex items-start gap-2"
                  >
                    <span className="text-[var(--accent)] mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-[var(--border)] text-[var(--text-secondary)] rounded hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                Send a Brief →
              </a>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-16 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
            Ongoing Collaboration
          </h3>
          <p className="text-[var(--text-secondary)]">
            Retainers for teams that need dedicated development capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {retainerPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-[var(--accent)] mb-1">
                ${plan.pricePerMonth.toLocaleString()} {plan.currency}
                <span className="text-sm text-[var(--text-muted)] font-normal"> / month</span>
              </p>
              <p className="text-xs text-[var(--text-muted)] mb-4">
                {plan.hoursPerMonth} hours / month
              </p>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                {plan.description}
              </p>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="text-sm text-[var(--text-secondary)] flex items-start gap-2"
                  >
                    <span className="text-[var(--accent)] mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="block w-full text-center px-6 py-4 text-sm font-semibold tracking-wider uppercase bg-[var(--accent)] text-[var(--accent-text)] rounded hover:bg-[var(--accent-hover)] transition-colors duration-200"
        >
          Start a Project →
        </a>
      </div>
    </section>
  )
}
