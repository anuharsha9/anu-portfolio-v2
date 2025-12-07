'use client'

import { motion } from 'framer-motion'

// Cumulative impact metrics across all 3 WebFOCUS initiatives
const cumulativeMetrics = [
  {
    value: '50yr',
    label: 'Legacy',
    context: 'Technical debt addressed',
  },
  {
    value: '20M+',
    label: 'Reach',
    context: 'Schedules processed weekly',
  },
  {
    value: '75%',
    label: 'Efficiency',
    context: 'Fewer clicks across workflows',
  },
  {
    value: '100%',
    label: 'Validation',
    context: 'SME approval in testing',
  },
]

export default function WebFOCUSImpact() {
  return (
    <section className="w-full border-y border-slate-200 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Desktop: 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 md:divide-x md:divide-slate-200">
          {cumulativeMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="py-8 px-6 text-center"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                // {metric.label}
              </div>
              <div className="text-3xl lg:text-4xl font-serif font-semibold text-[var(--accent-teal)]">
                {metric.value}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {metric.context}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="md:hidden grid grid-cols-2 divide-x divide-y divide-slate-200">
          {cumulativeMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="py-6 px-4 text-center"
            >
              <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-1">
                // {metric.label}
              </div>
              <div className="text-2xl font-serif font-semibold text-[var(--accent-teal)]">
                {metric.value}
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                {metric.context}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

