'use client'

import { motion } from 'framer-motion'

interface BlueprintCardProps {
  children: React.ReactNode
  label?: string // Technical section ID (e.g., "SECTION_01", "PHASE_A")
  className?: string
  interactive?: boolean
  onClick?: () => void
}

/**
 * Blueprint Card - The primary card container
 * 
 * Consistent styling for content cards with optional
 * monospace header label. No heavy shadows.
 * 
 * @example
 * <BlueprintCard label="DISCOVERY_PHASE">
 *   <h3>Research Methods</h3>
 *   <p>Content goes here...</p>
 * </BlueprintCard>
 */
export default function BlueprintCard({
  children,
  label,
  className = '',
  interactive = false,
  onClick,
}: BlueprintCardProps) {
  const interactiveClasses = interactive 
    ? 'cursor-pointer hover:shadow-md hover:border-[var(--accent-teal)]/30 hover:-translate-y-0.5 transition-all duration-300' 
    : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`bg-white border border-slate-200 rounded-xl shadow-sm ${interactiveClasses} ${className}`}
    >
      {/* Optional Label Header */}
      {label && (
        <div className="border-b border-slate-100 px-6 py-3">
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            // {label}
          </span>
        </div>
      )}
      
      {/* Content */}
      <div className={label ? 'p-6' : 'p-6 md:p-8'}>
        {children}
      </div>
    </motion.div>
  )
}

