'use client'

import { motion } from 'framer-motion'

interface TeamOnboardingProcessProps {
  isLightBackground?: boolean
}

export default function TeamOnboardingProcess({ isLightBackground = true }: TeamOnboardingProcessProps) {
  // Stakeholder clusters organized by function
  const stakeholderClusters = [
    {
      header: 'ENGINEERING',
      items: ['Lead Architect', 'Lead Engineer', 'Engineering Squad'],
    },
    {
      header: 'PRODUCT_STRATEGY',
      items: ['New PM', 'Leadership', 'SMEs'],
    },
    {
      header: 'QUALITY_&_SUPPORT',
      items: ['QA Team', 'Documentation', 'Support'],
    },
  ]

  const activities = [
    { phase: 'Discovery', items: ['Dozens of demos (old vs new)', 'Legacy quirks walkthroughs', 'Failure logic explanations'] },
    { phase: 'Alignment', items: ['IA & structural decisions', 'Interactive prototypes', 'Workflow documentation'] },
    { phase: 'Execution', items: ['Mediate engineer conflicts', 'Edge case documentation', 'Team handoff'] },
  ]

  // Arrow component for process flow
  const ProcessArrow = () => (
    <div className="hidden md:flex items-center justify-center">
      <svg className="w-8 h-8 text-[var(--border-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
  )

  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-primary)] p-8 md:p-12 shadow-sm">
      <div className="space-y-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
            // STAKEHOLDER_MAP
          </span>
          <h3 className="text-[var(--text-heading)] text-2xl md:text-3xl font-serif">
            Onboarding 9 Stakeholder Groups
          </h3>
          <p className="text-[var(--text-body)] text-base md:text-lg max-w-2xl mx-auto">
            Most had never seen RC end-to-end. I became the person who could explain it all.
          </p>
        </motion.div>

        {/* Stakeholder Clusters - 3 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h4 className="text-[var(--text-heading)] text-lg font-serif text-center">
            Cross-Functional Reach
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stakeholderClusters.map((cluster, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="space-y-3"
              >
                {/* Cluster Header */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[var(--accent-teal)] uppercase tracking-widest">
                    // {cluster.header}
                  </span>
                </div>
                
                {/* Cluster Items */}
                <div className="flex flex-wrap gap-2">
                  {cluster.items.map((item, j) => (
                    <motion.div
                      key={j}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white border border-[var(--border-primary)] rounded-full px-4 py-2 text-sm font-medium text-[var(--text-heading)] hover:border-[var(--accent-teal)]/50 hover:shadow-sm transition-all duration-200"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Onboarding Activities - Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="text-center">
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
              // PROCESS_FLOW
            </span>
            <h4 className="text-[var(--text-heading)] text-lg font-serif mt-2">
              Onboarding Activities
            </h4>
          </div>
          
          {/* Process Flow with Arrows */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
            {activities.map((a, i) => (
              <>
                <motion.div
                  key={`activity-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl border border-[var(--border-primary)] p-5 hover:shadow-md hover:border-[var(--accent-teal)]/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Phase Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-mono text-sm font-bold bg-[var(--accent-teal)]">
                        {i + 1}
                      </div>
                      <h5 className="text-[var(--text-heading)] font-serif font-semibold">{a.phase}</h5>
                    </div>
                    
                    {/* Items */}
                    <ul className="space-y-2">
                      {a.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-[var(--border-secondary)] font-mono text-xs mt-0.5 flex-shrink-0">→</span>
                          <span className="text-[var(--text-body)] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Arrow between cards (not after the last one) */}
                {i < activities.length - 1 && <ProcessArrow key={`arrow-${i}`} />}
              </>
            ))}
          </div>
        </motion.div>

        {/* Result Block - Dark Theme Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-slate-900 rounded-2xl p-6 md:p-8 relative overflow-hidden"
        >
          {/* Award Icon - Top Right */}
          <div className="absolute top-4 right-4 text-emerald-400/30">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
              // TRANSFORMATION_RESULT
            </div>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Engineers who initially intimidated me became collaborators I respected — and who respected me. 
              <span className="text-slate-400 block mt-2">
                I became the youngest in the room with unspoken authority on the experience of RC.
              </span>
            </p>
          </div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </div>
  )
}
