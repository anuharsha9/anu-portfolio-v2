'use client'

import { motion } from 'framer-motion'
import InsightBadge from '@/components/ui/InsightBadge'

const impactStats = [
  {
    value: '20M+',
    label: 'Users Impacted',
    highlight: true,
  },
  {
    value: 'Legacy',
    label: 'Systems Modernized',
    highlight: false,
  },
  {
    value: 'Enterprise',
    label: 'Scale Design',
    highlight: false,
  },
]

/**
 * ImpactBar - Horizontal strip showcasing key impact metrics
 * Light Theme: Swiss Style with subtle borders
 */
export default function ImpactBar() {
  return (
    <section className="bg-white border-y border-slate-200 py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <InsightBadge 
                variant={stat.highlight ? 'highlight' : 'subtle'}
                size="lg"
                animate={false}
              >
                <span className="font-semibold">{stat.value}</span>
                <span className="opacity-70">·</span>
                <span>{stat.label}</span>
              </InsightBadge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
