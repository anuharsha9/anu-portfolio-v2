'use client'

import { motion } from 'framer-motion'

interface InsightBadgeProps {
  /** The outcome or insight text to display */
  children: React.ReactNode
  /** Optional variant for different contexts */
  variant?: 'default' | 'highlight' | 'subtle'
  /** Optional size */
  size?: 'sm' | 'md' | 'lg'
  /** Optional icon to display before text */
  icon?: React.ReactNode
  /** Whether to animate on mount */
  animate?: boolean
  /** Optional className for customization */
  className?: string
}

/**
 * InsightBadge - A pill-shaped component for highlighting outcomes
 * Light Theme: Swiss Style with teal accent (var(--accent-teal))
 */
export default function InsightBadge({
  children,
  variant = 'default',
  size = 'md',
  icon,
  animate = true,
  className = '',
}: InsightBadgeProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300'

  const variantStyles = {
    default: 'bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] border border-[var(--accent-teal)]/20 hover:bg-[var(--accent-teal)]/15 hover:border-[var(--accent-teal)]/30',
    highlight: 'bg-[var(--accent-teal)] text-white border border-[var(--accent-teal)] hover:bg-[var(--accent-teal-700)]',
    subtle: 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:border-slate-300',
  }

  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (animate) {
    return (
      <motion.span
        className={combinedClassName}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </motion.span>
    )
  }

  return (
    <span className={combinedClassName}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

// Named export for cleaner imports
export { InsightBadge }
