import React from 'react'
import SignatureLogo from './SignatureLogo'

interface CaseStudySignatureBadgeProps {
  className?: string
}

/**
 * Case study footer badge.
 * Tiny logo + "Designed & led by Anuja Harsha" text.
 */
export default function CaseStudySignatureBadge({ className = '' }: CaseStudySignatureBadgeProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Tiny Logo */}
      <div className="w-5 h-5 flex-shrink-0">
        <SignatureLogo className="w-full h-full text-[var(--text-muted-light)] dark:text-[var(--text-muted-dark)]" />
      </div>

      {/* Text */}
      <p className="text-xs md:text-sm text-[var(--text-muted-light)] dark:text-[var(--text-muted-dark)] font-sans">
        Designed & led by <span className="font-medium">Anuja Harsha</span>
      </p>
    </div>
  )
}

