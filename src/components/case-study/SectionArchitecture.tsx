'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION SHELL - The Master Container
// ═══════════════════════════════════════════════════════════════════════════════
// The foundational wrapper for all case study sections. Provides consistent
// spacing, phase tagging, and typography hierarchy.

interface SectionShellProps {
  id: string        // Section identifier (e.g., "SIMPLIFY", "DISCOVER")
  phase: string     // Phase number (e.g., "01", "02", "03")
  title: string     // Main section title
  subhead?: string  // Optional subtitle/description
  children: ReactNode
  className?: string
}

export function SectionShell({ 
  id, 
  phase, 
  title, 
  subhead, 
  children,
  className = ''
}: SectionShellProps) {
  return (
    <section 
      className={`w-full bg-white py-16 md:py-24 border-b border-slate-100 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Phase Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="font-mono text-xs text-blue-600 uppercase tracking-widest">
            // PHASE_{phase}: {id}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl mb-2"
        >
          {title}
        </motion.h2>

        {/* Subhead */}
        {subhead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg mb-12"
          >
            {subhead}
          </motion.p>
        )}

        {/* Children (Section Content) */}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// SYSTEM BRIEF - The TL;DR Block
// ═══════════════════════════════════════════════════════════════════════════════
// A highlighted callout block for key insights or summaries.
// Uses serif italic for editorial weight, with monospace tags below.

interface SystemBriefProps {
  text: string
  tags?: string[]
  className?: string
}

export function SystemBrief({ text, tags, className = '' }: SystemBriefProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border-l-4 border-blue-500 pl-6 py-4 my-12 bg-slate-50/50 rounded-r-lg ${className}`}
    >
      {/* Brief Text - Serif Italic */}
      <p className="font-serif italic text-lg text-slate-700 leading-relaxed">
        {text}
      </p>
      
      {/* Tags Row - Monospace Pills */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className="font-mono text-[10px] uppercase tracking-widest text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// SYSTEM OUTCOME - The Terminal Footer
// ═══════════════════════════════════════════════════════════════════════════════
// A dark terminal-style block for key outcomes or breakthroughs.
// Positioned at the end of sections to summarize impact.

interface SystemOutcomeProps {
  label?: string // e.g., "SYSTEM_INSIGHT", "OUTCOME", "BREAKTHROUGH"
  text: string
  className?: string
}

export function SystemOutcome({ 
  label = 'SYSTEM_INSIGHT', 
  text,
  className = ''
}: SystemOutcomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-full bg-slate-900 text-slate-300 p-6 rounded-lg mt-16 md:mt-24 shadow-xl ${className}`}
    >
      <div className="flex items-start gap-2">
        <span className="font-mono text-sm text-emerald-400 flex-shrink-0">
          &gt; {label}:
        </span>
        <p className="font-mono text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// CONTENT GRID - Flexible Grid Container
// ═══════════════════════════════════════════════════════════════════════════════
// Standardized grid for diagnostic cards, feature cards, etc.

interface ContentGridProps {
  columns?: 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export function ContentGrid({ 
  columns = 3, 
  gap = 'md',
  children,
  className = ''
}: ContentGridProps) {
  const colsMap = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const gapMap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }

  return (
    <div className={`grid ${colsMap[columns]} ${gapMap[gap]} ${className}`}>
      {children}
    </div>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// SUBSECTION HEADER - For dividing content within a section
// ═══════════════════════════════════════════════════════════════════════════════
// Used to label diagnostic grids, architecture diagrams, etc.

interface SubsectionHeaderProps {
  label: string // e.g., "DIAGNOSTIC", "ARCHITECTURE"
  title?: string
  count?: number | string
  className?: string
}

export function SubsectionHeader({ 
  label, 
  title,
  count,
  className = ''
}: SubsectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`flex items-center justify-between border-b border-slate-200 pb-3 mb-6 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          // {label}
        </span>
        {title && (
          <span className="font-serif text-lg text-slate-900">
            {title}
          </span>
        )}
      </div>
      {count !== undefined && (
        <span className="font-mono text-xs text-slate-400">
          {count} {typeof count === 'number' && count === 1 ? 'ITEM' : 'ITEMS'}
        </span>
      )}
    </motion.div>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// DIAGNOSTIC CARD - For problem/pain point cards
// ═══════════════════════════════════════════════════════════════════════════════

interface DiagnosticCardProps {
  index: string | number
  title: string
  items: string[]
  className?: string
}

export function DiagnosticCard({ 
  index, 
  title, 
  items,
  className = ''
}: DiagnosticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-400 transition-colors ${className}`}
    >
      {/* Index + Title */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-2xl font-bold text-teal-600">
          {String(index).padStart(2, '0')}
        </span>
        <h4 className="font-serif text-lg text-slate-900">{title}</h4>
      </div>
      
      {/* Items List */}
      <ul className="space-y-2">
        {items.map((item, j) => (
          <li key={j} className="flex items-start gap-2">
            <span className="font-mono text-teal-500 text-xs mt-0.5">&gt;</span>
            <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// PIVOT CARD - For before/after architectural decisions
// ═══════════════════════════════════════════════════════════════════════════════

interface PivotCardProps {
  index: string | number
  title: string
  before: string
  after: string
  rationale: string
  className?: string
}

export function PivotCard({ 
  index, 
  title, 
  before, 
  after, 
  rationale,
  className = ''
}: PivotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white border border-slate-200 rounded-xl p-6 flex flex-col ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-2xl font-bold text-amber-500">
          {String(index).padStart(2, '0')}
        </span>
        <h4 className="font-serif text-lg text-slate-900">{title}</h4>
      </div>

      {/* Before Block */}
      <div className="bg-slate-50 border-l-2 border-red-300 p-3 mb-3 rounded-r-md">
        <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest block mb-1">
          LEGACY_PATTERN
        </span>
        <p className="text-slate-600 text-sm leading-relaxed">{before}</p>
      </div>

      {/* After Block */}
      <div className="bg-teal-50 border-l-2 border-teal-500 p-3 mb-5 rounded-r-md">
        <span className="font-mono text-[10px] text-teal-600 uppercase tracking-widest block mb-1">
          NEW_ARCHITECTURE
        </span>
        <p className="text-slate-700 text-sm font-medium leading-relaxed">{after}</p>
      </div>

      {/* Rationale Footer */}
      <div className="mt-auto pt-4 border-t border-slate-100">
        <p className="font-mono text-xs text-slate-500 leading-relaxed">
          <span className="text-slate-400">// RATIONALE:</span> {rationale}
        </p>
      </div>
    </motion.div>
  )
}
