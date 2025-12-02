import React from 'react'
import SignatureLogo from './SignatureLogo'

interface SignatureLockupHorizontalProps {
  compact?: boolean
  className?: string
}

/**
 * Horizontal lockup for nav/footer.
 * Structure: small logo + divider + text (full name or compact).
 */
export default function SignatureLockupHorizontal({
  compact = false,
  className = '',
}: SignatureLockupHorizontalProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo */}
      <div className="w-7 h-7 flex-shrink-0">
        <SignatureLogo className="w-full h-full text-white dark:text-white" />
      </div>

      {/* Divider */}
      <div className="h-4 w-px bg-white/20 dark:bg-white/20" />

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-sm md:text-base font-medium text-white dark:text-white leading-tight tracking-wide">
          {compact ? 'Anuja Harsha' : 'Anuja Harsha  Nimmagadda'}
        </span>
      </div>
    </div>
  )
}

