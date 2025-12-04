'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LetsTalkCTAProps {
  className?: string
  variant?: 'inline' | 'card'
}

export default function LetsTalkCTA({ className = '', variant = 'card' }: LetsTalkCTAProps) {
  if (variant === 'inline') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
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
      </motion.div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`${className} surface-light py-12 md:py-16 border-t border-black/10`}
    >
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-[var(--accent-teal)]/5 rounded-2xl p-8 md:p-12 border border-[var(--accent-teal)]/20 text-center">
          <h3 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif mb-4">
            Let&apos;s talk
          </h3>
          <p className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Interested in discussing this project or working together? I&apos;d love to hear from you.
          </p>
          <Link
            href="/#lets-talk"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-teal)] text-white font-medium hover:bg-[var(--accent-teal)]/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
            aria-label="Contact me - Let's talk"
          >
            <span>Get in touch</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

