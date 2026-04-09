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
  'w-full border px-4 py-3 text-sm focus:outline-none transition-colors duration-200 bg-[var(--bg-primary)] border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]'

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle')
  const [honeypot, setHoneypot] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | undefined>()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage(undefined)

    const form = new FormData(e.currentTarget)
    const data: ContactFormData = {
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
      company: (form.get('company') as string) || undefined,
      service: String(form.get('service') ?? ''),
      budget: String(form.get('budget') ?? ''),
      message: String(form.get('message') ?? ''),
      honeypot,
    }

    const result = await submitContactForm(data)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMessage(result.error)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">06 / Send a Brief</p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
            className="mb-3"
          >
            Got a project in mind?
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", fontSize: "1.05rem" }}>
            Tell me about it. I respond within 24 hours.
          </p>
        </div>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }} className="p-8 md:p-10">
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
              {/* Honeypot — hidden from real users, bots fill this */}
              <input
                type="text"
                name="website"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
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
                  {errorMessage ?? 'Something went wrong. Please email me directly.'}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  background: "var(--accent)",
                  color: "var(--accent-text)",
                }}
                className="w-full md:w-auto px-8 py-3.5 text-[11px] uppercase hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
