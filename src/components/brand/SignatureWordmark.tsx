import React from 'react'
import SignatureLogo from './SignatureLogo'

interface SignatureWordmarkProps {
  headline?: string
  subline?: string
  className?: string
}

/**
 * Vertical lockup for About page and brand moments.
 * Layout: signature mark on top, full name below.
 */
export default function SignatureWordmark({
  headline = 'Anuja Harsha Nimmagadda',
  subline = 'Designer · Strategist · Systems Thinker',
  className = '',
}: SignatureWordmarkProps) {
  return (
    <div className={`flex flex-col items-center gap-4 md:gap-6 ${className}`}>
      {/* Signature Logo - larger on desktop */}
      <div className="w-20 h-20 md:w-28 md:h-28">
        <SignatureLogo className="w-full h-full text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]" />
      </div>

      {/* Name and Tagline */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)] leading-tight">
          {headline}
        </h1>
        <p className="text-sm md:text-base text-[var(--text-muted-light)] dark:text-[var(--text-muted-dark)] font-sans">
          {subline}
        </p>
      </div>
    </div>
  )
}

