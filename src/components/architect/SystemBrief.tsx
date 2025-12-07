'use client'

import { motion } from 'framer-motion'
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react'

type BriefVariant = 'info' | 'insight' | 'constraint' | 'success'

interface SystemBriefProps {
  children: React.ReactNode
  variant?: BriefVariant
  label?: string
  className?: string
}

const variantConfig: Record<BriefVariant, {
  borderColor: string
  bgColor: string
  labelColor: string
  icon: typeof Info
  defaultLabel: string
}> = {
  info: {
    borderColor: 'border-l-blue-500',
    bgColor: 'bg-blue-50/50',
    labelColor: 'text-blue-600',
    icon: Info,
    defaultLabel: 'TL;DR',
  },
  insight: {
    borderColor: 'border-l-[var(--accent-teal)]',
    bgColor: 'bg-[var(--accent-teal-50)]/50',
    labelColor: 'text-[var(--accent-teal)]',
    icon: Lightbulb,
    defaultLabel: 'KEY_INSIGHT',
  },
  constraint: {
    borderColor: 'border-l-amber-400',
    bgColor: 'bg-amber-50/50',
    labelColor: 'text-amber-600',
    icon: AlertTriangle,
    defaultLabel: 'CONSTRAINT',
  },
  success: {
    borderColor: 'border-l-emerald-500',
    bgColor: 'bg-emerald-50/50',
    labelColor: 'text-emerald-600',
    icon: CheckCircle,
    defaultLabel: 'OUTCOME',
  },
}

/**
 * System Brief - The "TL;DR" component
 * 
 * A visually distinct text block for summaries and key insights.
 * Uses border-l-4 with semantic colors based on variant.
 * 
 * @example
 * <SystemBrief variant="info">
 *   This is the quick summary of the section.
 * </SystemBrief>
 */
export default function SystemBrief({ 
  children, 
  variant = 'info', 
  label,
  className = '' 
}: SystemBriefProps) {
  const config = variantConfig[variant]
  const Icon = config.icon
  const displayLabel = label || config.defaultLabel

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`border-l-4 ${config.borderColor} ${config.bgColor} pl-6 py-4 rounded-r-lg ${className}`}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <Icon className={`w-4 h-4 ${config.labelColor} flex-shrink-0 mt-0.5`} />
        
        <div className="flex-1 space-y-2">
          {/* Label */}
          <span className={`font-mono text-[10px] ${config.labelColor} uppercase tracking-widest`}>
            // {displayLabel}
          </span>
          
          {/* Content */}
          <div className="text-slate-700 text-sm md:text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

