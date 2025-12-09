'use client'

import { motion } from 'framer-motion'

interface ScheduleWorkflowComparisonProps {
  isLightBackground?: boolean
}

export default function ScheduleWorkflowComparison({ isLightBackground = true }: ScheduleWorkflowComparisonProps) {
  const scheduleWorkflow = {
    old: [
      { step: 'Go into hub', clicks: 1 },
      { step: 'Navigate to workspaces', clicks: 1 },
      { step: 'Click plus content button', clicks: 1 },
      { step: 'Drill down in context menu', clicks: 1 },
      { step: 'Select create schedule', clicks: 1 },
      { step: 'Scheduler opens in new tab', clicks: 0, isNewTab: true },
      { step: 'Configure properties', clicks: 1 },
      { step: 'Add task, set distribution, recurrence', clicks: 3 },
      { step: 'Check other settings', clicks: 1 },
    ],
    new: [
      { step: '+ menu → Create Schedule', clicks: 1 },
      { step: 'Add task', clicks: 1 },
      { step: 'Select distribution method', clicks: 1 },
      { step: 'Set recurrence', clicks: 1 },
    ],
    reduction: '83% fewer clicks, no new tabs',
  }

  // Positions for "chaotic" step cards on the left
  const chaosPositions = [
    { rotate: -3, x: -5, y: 0 },
    { rotate: 2, x: 8, y: 2 },
    { rotate: -1, x: -3, y: -1 },
    { rotate: 3, x: 5, y: 3 },
    { rotate: -2, x: -8, y: 1 },
    { rotate: 4, x: 10, y: -2 },
    { rotate: -4, x: -6, y: 4 },
    { rotate: 1, x: 3, y: -3 },
    { rotate: -2, x: -4, y: 2 },
  ]

  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-primary)] p-6 md:p-10 mt-6 shadow-sm">
      <div className="space-y-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
            // CORE_WORKFLOW: MAIN_SCHEDULER
          </span>
          <h4 className="text-[var(--text-heading)] text-xl md:text-2xl font-serif">
            From 9 Clicks to 4 Clicks
          </h4>
          <p className="text-[var(--text-body)] text-sm max-w-2xl mx-auto">
            The Main Scheduler — ReportCaster&apos;s core workflow. The old path required navigating menus, opening new tabs, and mental context switching. The new unified modal eliminates it all.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* BEFORE: Chaotic Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-error)]">
                  ⚠ FRAGMENTED
                </span>
              </div>
              <div className="font-mono text-2xl font-bold text-[var(--text-heading)]">
                9<span className="text-sm text-[var(--text-muted)] ml-1">clicks</span>
              </div>
            </div>

            {/* Chaotic Steps Container */}
            <div className="relative min-h-[420px] bg-[var(--bg-tertiary)] rounded-xl p-4 border border-[var(--border-primary)] overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="chaos-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#chaos-grid)" />
                </svg>
              </div>

              {/* Steps */}
              <div className="relative space-y-2">
                {scheduleWorkflow.old.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, rotate: chaosPositions[idx]?.rotate || 0 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: chaosPositions[idx]?.rotate || 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
                    whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
                    style={{
                      transform: `translateX(${chaosPositions[idx]?.x || 0}px) translateY(${chaosPositions[idx]?.y || 0}px)`,
                    }}
                    className={`relative bg-white border rounded-lg p-3 shadow-sm transition-all duration-200 ${item.isNewTab
                        ? 'border-[var(--color-warning)] bg-amber-50'
                        : 'border-[var(--border-primary)]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-mono text-xs font-bold flex-shrink-0 ${item.isNewTab ? 'bg-[var(--color-warning)]' : 'bg-[var(--border-secondary)]'
                        }`}>
                        {item.isNewTab ? '↗' : idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[var(--text-heading)] text-xs font-medium truncate">{item.step}</p>
                      </div>
                      {item.clicks > 0 && (
                        <span className="font-mono text-[10px] text-[var(--text-muted)] flex-shrink-0">
                          +{item.clicks}
                        </span>
                      )}
                    </div>
                    {item.isNewTab && (
                      <div className="mt-1 text-[10px] text-[var(--color-warning)] font-mono">
                        ⚠ NEW TAB OPENS
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[var(--bg-tertiary)] rounded-lg p-3 border border-[var(--border-primary)]">
              <p className="text-[var(--text-muted)] text-xs text-center">
                New tab opens • Menu drilling • Context switching • Properties scattered
              </p>
            </div>
          </motion.div>

          {/* AFTER: Clean Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-teal)]">
                  STREAMLINED
                </span>
              </div>
              <div className="font-mono text-2xl font-bold text-[var(--accent-teal)]">
                4<span className="text-sm text-[var(--text-muted)] ml-1">clicks</span>
              </div>
            </div>

            {/* Clean Steps Container */}
            <div className="bg-[var(--accent-teal-50)] rounded-xl p-4 border-2 border-[var(--accent-teal)]/30 min-h-[420px] flex flex-col justify-center">
              <div className="space-y-4">
                {scheduleWorkflow.new.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="bg-white border-2 border-[var(--accent-teal)]/40 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent-teal)] flex items-center justify-center text-white font-mono font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-[var(--text-heading)] text-sm font-semibold">{item.step}</p>
                      </div>
                      <span className="font-mono text-sm text-[var(--accent-teal)] font-bold">
                        {item.clicks} click
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[var(--accent-teal)] rounded-lg p-3">
              <p className="text-white text-xs text-center font-medium">
                {scheduleWorkflow.reduction}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Impact Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-[var(--bg-tertiary)] rounded-full px-6 py-3 border border-[var(--border-primary)]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-3xl font-bold text-[var(--text-heading)]">83%</span>
              <span className="text-[var(--text-muted)] text-sm">fewer clicks</span>
            </div>
            <div className="w-px h-6 bg-[var(--border-primary)]"></div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-3xl font-bold text-[var(--accent-teal)]">0</span>
              <span className="text-[var(--text-muted)] text-sm">new tabs</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
