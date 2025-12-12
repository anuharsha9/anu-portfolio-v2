'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Lightbulb } from 'lucide-react'

interface ExpandableInsightProps {
  trigger: string // The visible text/question
  insight: string // The expanded content
  variant?: 'inline' | 'block'
  accentColor?: string
}

/**
 * ExpandableInsight - Elegant expandable content for design decisions
 * "Why this?" moments that respect the user's time
 */
export default function ExpandableInsight({
  trigger,
  insight,
  variant = 'inline',
  accentColor = 'var(--accent-teal)'
}: ExpandableInsightProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (variant === 'inline') {
    return (
      <span className="inline">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1 text-[var(--accent-teal)] hover:text-[var(--accent-teal-dark)] transition-colors cursor-pointer font-medium"
          style={{ color: accentColor }}
        >
          <span className="border-b border-dashed border-current">{trigger}</span>
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block mt-2 pl-4 border-l-2 text-slate-600 text-sm leading-relaxed"
              style={{ borderColor: accentColor }}
            >
              {insight}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    )
  }

  // Block variant
  return (
    <div className="my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 w-full text-left p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all"
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${accentColor}15` }}
        >
          <Lightbulb className="w-4 h-4" style={{ color: accentColor }} />
        </div>
        <span className="flex-grow font-medium text-slate-700 group-hover:text-slate-900">
          {trigger}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="p-4 mt-2 bg-white border border-slate-200 rounded-xl text-slate-600 leading-relaxed"
              style={{ borderLeftWidth: '3px', borderLeftColor: accentColor }}
            >
              {insight}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

