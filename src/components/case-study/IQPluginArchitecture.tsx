'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { getTheme } from '@/lib/design-system'

interface IQPluginArchitectureProps {
  isLightBackground?: boolean
}

export default function IQPluginArchitecture({ isLightBackground = true }: IQPluginArchitectureProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const t = getTheme(true) // Force light background

  const features = [
    { id: 'insights', title: 'Automated Insights', description: 'Surfacing patterns and highlights automatically', status: 'Unified' },
    { id: 'nlq', title: 'Natural Language Query', description: 'Ask questions in plain language and get charts back', status: 'Unified' },
    { id: 'predict', title: 'Predict Data / ML Functions', description: 'Step-based ML workflow embedded directly in IQ', status: 'Connected' },
  ]

  return (
    <div className="bg-[var(--bg-light)]">
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className={`h-px flex-1 ${t.divider}`}></div>
            <h3 className={`${t.text} text-lg md:text-xl font-serif font-semibold whitespace-nowrap`}>The Three DSML Features</h3>
            <div className={`h-px flex-1 ${t.divider}`}></div>
            <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
          </div>

          <div className="space-y-6">
            <p className={`${t.textMuted} text-sm md:text-base leading-relaxed`}>
              DSML features were fragmented across the product — Automated Insights, NLQ, and Predict Data existed but were scattered, invisible to business users, and inconsistent in UX.
            </p>

            <div className={`${t.cardBg} rounded-lg p-4 md:p-5 border ${t.border} shadow-sm`}>
              <div className="space-y-3">
                <div className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>Before: Fragmented</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {features.map((feature) => (
                    <div key={feature.id} className={`bg-black/5 rounded p-3 border ${t.border}`}>
                      <div className={`${t.text} text-sm font-semibold mb-1`}>{feature.title}</div>
                      <div className={`${t.textMuted} text-xs`}>Scattered across different parts of platform</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${t.cardBg} rounded-lg p-4 md:p-5 border-2 border-[var(--accent-teal)] shadow-sm`}>
              <div className="space-y-3">
                <div className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>After: Unified in IQ Plugin</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4 }}
                      className={`bg-[var(--accent-teal)]/10 rounded p-3 border border-[var(--accent-teal)]/30 cursor-pointer transition-all duration-300 ${hoveredId === feature.id ? 'bg-[var(--accent-teal)]/20 border-[var(--accent-teal)]/50 shadow-lg' : ''}`}
                      whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setHoveredId(feature.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className={`${t.text} text-sm font-semibold mb-1 transition-colors ${hoveredId === feature.id ? 'text-[var(--accent-teal)]' : ''}`}>{feature.title}</div>
                      <div className={`${t.textAccent} text-xs font-medium`}>{feature.status}</div>
                      {hoveredId === feature.id && (
                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className={`${t.textMuted} text-xs mt-2 pt-2 border-t border-[var(--accent-teal)]/20`}>
                          {feature.description}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
