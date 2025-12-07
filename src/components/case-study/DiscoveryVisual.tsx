'use client'

import { motion } from 'framer-motion'

interface DiscoveryVisualProps {
  isLightBackground?: boolean
}

export default function DiscoveryVisual({ isLightBackground = true }: DiscoveryVisualProps) {
  // Challenge metrics for the Data Strip
  const challengeMetrics = [
    { 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: '50+',
      unit: 'years',
      label: 'Legacy codebase age'
    },
    { 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      metric: '0',
      unit: 'docs',
      label: 'Zero documentation'
    },
    { 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      metric: '13M+',
      unit: 'daily',
      label: 'Schedules processed (1 customer)'
    },
    { 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      metric: '1',
      unit: 'person',
      label: 'Engineer who understood it'
    },
  ]

  // Subsystems for the Before/After visualization
  const subsystems = [
    { id: 1, name: 'Scheduling', short: 'Schedule' },
    { id: 2, name: 'Distribution', short: 'Distribute' },
    { id: 3, name: 'Access List', short: 'Access' },
    { id: 4, name: 'RC Explorer', short: 'Explorer' },
    { id: 5, name: 'RC Status', short: 'Status' },
  ]

  // Card positions and rotations for the "chaos" effect
  const cardTransforms = [
    { rotate: -6, translateY: 8, left: '5%' },
    { rotate: 4, translateY: -16, left: '22%' },
    { rotate: -3, translateY: 24, left: '40%' },
    { rotate: 5, translateY: -8, left: '58%' },
    { rotate: -4, translateY: 12, left: '76%' },
  ]

  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-primary)] p-8 md:p-12 shadow-sm">
      <div className="space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
              // AHA_MOMENT
            </span>
            <h3 className="text-[var(--text-heading)] text-2xl md:text-3xl font-serif mt-2">
              Discovering Why It Kept Getting Deferred
            </h3>
            <p className="text-[var(--text-body)] text-base md:text-lg max-w-3xl mx-auto mt-3">
              Five independent subsystems scattered across the product, each with its own entry point and mental model.
            </p>
          </motion.div>
        </div>

        {/* STEP 1: Data Strip - Challenge Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {challengeMetrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="text-[var(--border-secondary)] mb-3 flex justify-center">
                {item.icon}
              </div>
              
              {/* Hero Metric */}
              <div className="font-mono font-bold text-4xl md:text-5xl text-[var(--text-heading)] leading-none">
                {item.metric}
              </div>
              <div className="font-mono text-sm text-[var(--text-muted)] mt-1">
                {item.unit}
              </div>
              
              {/* Label */}
              <p className="text-[var(--text-muted)] text-sm mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--border-primary)]"></div>
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
            The Discovery
          </span>
          <div className="h-px flex-1 bg-[var(--border-primary)]"></div>
        </div>

        {/* STEP 2: Before State - Chaos Cluster */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Floating Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-error)]">
              ⚠ FRAGMENTED EXPERIENCE
            </span>
          </div>

          {/* Scattered Pile Container */}
          <div className="relative h-48 md:h-56">
            {subsystems.map((sub, i) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, scale: 0.8, rotate: cardTransforms[i].rotate * 2 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: cardTransforms[i].rotate,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
                className="absolute w-28 md:w-32 cursor-pointer"
                style={{
                  left: cardTransforms[i].left,
                  top: '50%',
                  transform: `translateY(calc(-50% + ${cardTransforms[i].translateY}px)) rotate(${cardTransforms[i].rotate}deg)`,
                }}
              >
                <div className="bg-white border border-[var(--border-primary)] shadow-md rounded-lg p-3 md:p-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] flex items-center justify-center font-mono font-bold text-sm mb-2">
                    {sub.id}
                  </div>
                  <p className="text-[var(--text-heading)] text-xs md:text-sm font-semibold leading-tight">
                    {sub.short}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Caption */}
          <p className="text-center text-[var(--text-muted)] text-sm italic">
            Scattered across the product • Different entry points • Separate mental models
          </p>
        </motion.div>

        {/* Funnel Connector */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            {/* Vertical Line */}
            <div className="w-px h-16 bg-gradient-to-b from-[var(--border-secondary)] to-[var(--accent-teal)] mx-auto"></div>
            
            {/* Arrow Point */}
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[var(--accent-teal)] mx-auto"></div>
          </motion.div>
        </div>

        {/* STEP 3: After State - Unified Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          {/* Unified Card */}
          <div className="flex justify-center">
            <div className="bg-[var(--accent-teal-50)] border-2 border-[var(--accent-teal)]/30 rounded-2xl p-6 md:p-8 text-center max-w-2xl w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg className="w-6 h-6 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-teal)]">
                  UNIFIED SOLUTION
                </span>
              </div>
              
              <h4 className="text-[var(--accent-teal-900)] text-xl md:text-2xl font-bold font-serif">
                One Unified Workflow
              </h4>
              <p className="text-[var(--text-body)] text-base mt-2 mb-6">
                All five subsystems accessible from a single, predictable entry point
              </p>
              
              {/* Mini subsystem pills */}
              <div className="flex flex-wrap justify-center gap-2">
                {subsystems.map((sub) => (
                  <div 
                    key={sub.id} 
                    className="bg-white/80 border border-[var(--accent-teal)]/20 rounded-full px-3 py-1"
                  >
                    <span className="text-[var(--text-heading)] text-xs font-medium">
                      {sub.short}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-[var(--text-muted)] text-sm italic">
            Platform-native • Modal-based workflows • Unified mental model
          </p>
        </motion.div>

        {/* Insight Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-[var(--bg-tertiary)] rounded-xl p-6 border border-[var(--border-primary)]"
        >
          <p className="text-[var(--text-heading)] text-base leading-relaxed text-center">
            <span className="font-semibold text-[var(--accent-teal)]">The insight:</span>{' '}
            This fragmentation explained the deferral. Unifying them became the path forward.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
