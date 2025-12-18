'use client'

import { motion } from 'framer-motion'

interface ImpactVisualProps {
  isLightBackground?: boolean
}

export default function ImpactVisual({ isLightBackground = true }: ImpactVisualProps) {
  // Entry points data - Old scattered vs New unified
  const entryPoints = {
    old: [
      { feature: 'Create Schedule', location: 'Buried 4 clicks deep' },
      { feature: 'Distribution List', location: 'Separate menu path' },
      { feature: 'Access List', location: 'Another separate path' },
      { feature: 'RC Explorer', location: 'Hamburger menu → hidden' },
      { feature: 'RC Admin', location: 'Management Center → Admin' },
    ],
    new: [
      { feature: 'Create Schedule', location: '+ menu → Create Schedule' },
      { feature: 'Distribution List', location: '+ menu → Distribution List' },
      { feature: 'Access List', location: '+ menu → Access List' },
      { feature: 'RC Explorer', location: 'Home → RC assets filter' },
      { feature: 'RC Admin', location: 'Management Center → RC Admin' },
    ],
  }

  // Click reduction metrics as hero numbers
  const clickMetrics = [
    {
      task: 'Create Schedule',
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      reduction: '5→2',
      oldClicks: '5+',
      newClicks: '2'
    },
    {
      task: 'Access Explorer',
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      reduction: '3→1',
      oldClicks: '3',
      newClicks: '1'
    },
    {
      task: 'View Job Log',
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      reduction: 'In-context',
      oldClicks: 'New tab',
      newClicks: 'Modal'
    },
    {
      task: 'Access Admin',
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      reduction: '3→2',
      oldClicks: '3',
      newClicks: '2'
    },
  ]

  // Validation sources
  const validations = [
    {
      icon: '👥',
      title: 'Internal Feedback',
      quote: 'Engineers and PMs who had never understood RC could now explain it to others.',
      source: 'Engineering Team'
    },
    {
      icon: '💬',
      title: 'Customer Feedback',
      quote: 'Long-time enterprise customer praised the redesign and said he was excited for what was coming next.',
      source: 'Enterprise Customer'
    },
    {
      icon: '🎯',
      title: 'Support Team',
      quote: 'Fewer "how do I..." questions and more "can I do..." questions — a shift from confusion to capability.',
      source: 'Support Analytics'
    },
  ]

  // Scattered card positions for "before" state
  const scatteredPositions = [
    { rotate: -4, translateY: 0 },
    { rotate: 3, translateY: 8 },
    { rotate: -2, translateY: -4 },
    { rotate: 5, translateY: 12 },
    { rotate: -3, translateY: 4 },
  ]

  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-primary)] p-8 md:p-12 shadow-sm">
      <div className="space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
            {'// IMPACT_METRICS'}
          </span>
          <h3 className="text-[var(--text-heading)] text-2xl md:text-3xl font-serif">
            Entry Points, Workflows & Validation
          </h3>
          <p className="text-[var(--text-body)] text-base md:text-lg max-w-2xl mx-auto">
            Unified entry points, streamlined workflows, and validation from multiple sources.
          </p>
        </motion.div>

        {/* Click Reduction Data Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {clickMetrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-[var(--border-primary)] rounded-xl p-4 md:p-5 text-center hover:shadow-md hover:border-[var(--accent-teal)]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-[var(--border-secondary)] mb-3 flex justify-center">
                {item.icon}
              </div>

              {/* Hero Reduction */}
              <div className="font-mono font-bold text-3xl md:text-4xl text-[var(--accent-teal)] leading-none">
                {item.reduction}
              </div>

              {/* Task */}
              <p className="text-[var(--text-heading)] text-sm font-medium mt-2">
                {item.task}
              </p>

              {/* Before/After */}
              <div className="flex items-center justify-center gap-2 mt-3 text-xs">
                <span className="text-[var(--text-muted)] line-through">{item.oldClicks}</span>
                <span className="text-[var(--text-muted)]">→</span>
                <span className="text-[var(--accent-teal)] font-semibold">{item.newClicks}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Entry Points: Before/After */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--border-primary)]"></div>
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
              Entry Point Consolidation
            </span>
            <div className="h-px flex-1 bg-[var(--border-primary)]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* BEFORE: Scattered */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-error)]">
                  ⚠ SCATTERED
                </span>
              </div>

              <div className="relative space-y-2">
                {entryPoints.old.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: scatteredPositions[i].rotate }}
                    whileInView={{ opacity: 1, rotate: scatteredPositions[i].rotate }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    style={{ transform: `translateY(${scatteredPositions[i].translateY}px)` }}
                    className="bg-white border border-[var(--border-primary)] rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <p className="text-[var(--text-heading)] text-sm font-medium">{p.feature}</p>
                    <p className="text-[var(--text-muted)] text-xs mt-1 italic">{p.location}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AFTER: Unified */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-teal)]">
                  UNIFIED
                </span>
              </div>

              <div className="bg-[var(--accent-teal-50)] rounded-xl p-4 border-2 border-[var(--accent-teal)]/30 space-y-2">
                {entryPoints.new.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="bg-white border-2 border-[var(--accent-teal)]/40 rounded-lg p-3 hover:shadow-sm transition-all duration-200"
                  >
                    <p className="text-[var(--text-heading)] text-sm font-medium">{p.feature}</p>
                    <p className="text-[var(--accent-teal)] text-xs mt-1 font-medium">{p.location}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Validation Sources */}
        <div className="space-y-6 pt-8 border-t border-[var(--border-primary)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-2"
          >
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
              {'// VALIDATION_SOURCES'}
            </span>
            <h4 className="text-[var(--text-heading)] text-xl font-serif">
              Feedback Confirms Impact
            </h4>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {validations.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-[var(--border-primary)] rounded-xl p-5 hover:shadow-md hover:border-[var(--accent-teal)]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-teal-50)] flex items-center justify-center text-xl">
                    {v.icon}
                  </div>
                  <div>
                    <h5 className="text-[var(--text-heading)] text-sm font-semibold">{v.title}</h5>
                    <p className="text-[var(--text-muted)] text-xs">{v.source}</p>
                  </div>
                </div>
                <p className="text-[var(--text-body)] text-sm leading-relaxed italic">
                  &ldquo;{v.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
