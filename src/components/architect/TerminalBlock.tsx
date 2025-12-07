'use client'

import { motion } from 'framer-motion'

type TerminalVariant = 'outcome' | 'insight' | 'command' | 'error'

interface TerminalBlockProps {
  children: React.ReactNode
  variant?: TerminalVariant
  label?: string
  className?: string
}

const variantConfig: Record<TerminalVariant, {
  prefix: string
  prefixColor: string
}> = {
  outcome: {
    prefix: 'SYSTEM_OUTCOME',
    prefixColor: 'text-emerald-400',
  },
  insight: {
    prefix: 'KEY_INSIGHT',
    prefixColor: 'text-blue-400',
  },
  command: {
    prefix: 'EXECUTE',
    prefixColor: 'text-amber-400',
  },
  error: {
    prefix: 'ERROR',
    prefixColor: 'text-red-400',
  },
}

/**
 * Terminal Block - Dark mode outcome/result component
 * 
 * Used to end sections or summarize results with a
 * terminal/code aesthetic. Always renders in dark mode.
 * 
 * @example
 * <TerminalBlock variant="outcome">
 *   44-56% fewer clicks. Multi-tab sprawl eliminated.
 * </TerminalBlock>
 */
export default function TerminalBlock({ 
  children, 
  variant = 'outcome',
  label,
  className = '' 
}: TerminalBlockProps) {
  const config = variantConfig[variant]
  const displayLabel = label || config.prefix

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-slate-900 rounded-xl p-6 md:p-8 ${className}`}
    >
      {/* Terminal Header Dots */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
        <span className="ml-2 font-mono text-xs text-slate-500">terminal</span>
      </div>
      
      {/* Content */}
      <div className="font-mono text-sm md:text-base leading-relaxed">
        <span className={`${config.prefixColor}`}>&gt; {displayLabel}:</span>
        <div className="text-slate-300 mt-2">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

