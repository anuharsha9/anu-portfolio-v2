'use client'

import Link from 'next/link'

interface LetsTalkCTAProps {
  className?: string
  variant?: 'inline' | 'card'
}

export default function LetsTalkCTA({ className = '', variant = 'card' }: LetsTalkCTAProps) {
  if (variant === 'inline') {
    return (
      <div className={className}>
        <Link
          href="/#lets-talk"
          className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-[var(--accent-teal)]/80 transition-colors font-medium group"
          aria-label="Let's talk - Contact me"
        >
          <span>Let&apos;s talk</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    )
  }

  // Compact card variant
  return (
    <section className={`${className} py-8 md:py-10`}>
      <div className="max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-slate-600 text-sm md:text-base">
            Interested in working together?
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/#lets-talk"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-[var(--accent-teal)] transition-colors"
              aria-label="Contact me"
            >
              <span>Get in touch</span>
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/resume.html"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-600 text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition-colors"
              aria-label="Read resume"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
