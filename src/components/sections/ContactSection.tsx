'use client'

import { useState, type FormEvent } from 'react'
import { submitContactForm, type ContactFormData } from '@/app/actions/contact'

const SERVICES = [
  'Landing Page',
  'Web App',
  'Web3 / Smart Contract',
  'MVP Build',
  'Retainer',
  'Other',
]

const BUDGETS = [
  'Under $1,000',
  '$1,000–$3,000',
  '$3,000–$5,000',
  '$5,000–$10,000',
  '$10,000+',
  'Not sure',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full bg-[var(--bg-card)] border border-[var(--border)] rounded px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors'

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = new FormData(e.currentTarget)
    const data: ContactFormData = {
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
      company: (form.get('company') as string) || undefined,
      service: String(form.get('service') ?? ''),
      budget: String(form.get('budget') ?? ''),
      message: String(form.get('message') ?? ''),
    }

    const result = await submitContactForm(data)
    setStatus(result.success ? 'success' : 'error')
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
            06 / Send a Brief
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-3">
            Got a project in mind?
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">Tell me about it.</p>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 md:p-8">
          {status === 'success' ? (
            <div className="py-16 text-center">
              <p className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                Thanks!
              </p>
              <p className="text-[var(--text-secondary)]">
                I&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  className={inputClass}
                  placeholder="Optional"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                  >
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a budget
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                >
                  Project description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={inputClass}
                  placeholder="Tell me about your project, timeline, and goals..."
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto px-6 py-3 text-sm font-semibold tracking-wider uppercase bg-[var(--accent)] text-[var(--accent-text)] rounded hover:bg-[var(--accent-hover)] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Brief →'}
              </button>
            </form>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a
            href="https://www.linkedin.com/in/diego-scarpati/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/diego-scarpati"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://wa.me/61499404825"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            WhatsApp ↗
          </a>
          <a
            href="/Diego_Scarpati_Resume.docx"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  )
}
