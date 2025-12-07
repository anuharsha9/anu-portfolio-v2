'use client'

import { motion } from 'framer-motion'

interface EntryPointTransformationProps {
  isLightBackground?: boolean
}

export default function EntryPointTransformation({ isLightBackground = true }: EntryPointTransformationProps) {
  const oldPath = [
    { step: 'Click on + menu', clicks: 1 },
    { step: 'Click on create data flow', clicks: 1 },
    { step: 'New reporting server tab opens', clicks: 0, isNewTab: true },
    { step: 'Drag a data on the data flow', clicks: 1 },
    { step: 'Navigate to Train models plugin', clicks: 1 },
    { step: 'Drag and drop problem type', clicks: 1 },
    { step: 'Select target in popup', clicks: 1 },
    { step: 'Select predictors underneath', clicks: 1 },
    { step: 'Click play button for training', clicks: 1 },
    { step: 'Click to close compare models popup', clicks: 1 },
    { step: 'Right-click for 3-level cascading menu', clicks: 1 },
    { step: 'Save model icon on each tab', clicks: 1 },
  ]

  const newPath = [
    { step: 'Right-click dataset → Predict Data', clicks: 2 },
    { step: 'Click CTA: Train new Model', clicks: 1 },
    { step: 'Step 1-4: Problem, Target, Predictors, Config', clicks: '4-6' },
    { step: 'Land on Compare Models tab', clicks: 0 },
    { step: 'Navigate between model tabs', clicks: 1 },
    { step: 'Save model from any tab', clicks: 1 },
  ]

  const entryPoints = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      ),
      method: 'Right-click on dataset', 
      description: 'Access Predict Data directly from data source' 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      method: 'Right-click on folder', 
      description: 'Access Predict Data from folder context menu' 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      method: '+Data button menu', 
      description: 'Predict Data as first-class feature in Hub' 
    },
  ]

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
            // ENTRY_POINT_TRANSFORMATION
          </span>
          <h3 className="text-[var(--text-heading)] text-2xl md:text-3xl font-serif">
            12+ Clicks → 7-9 Clicks
          </h3>
          <p className="text-[var(--text-body)] text-base md:text-lg max-w-3xl mx-auto">
            Right-click entry points driven by the Techy Analyst persona: &ldquo;I&apos;m in the data, now let me run ML on it.&rdquo;
          </p>
        </motion.div>

        {/* Hero Metrics */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-6 bg-[var(--bg-tertiary)] rounded-full px-8 py-4 border border-[var(--border-primary)]"
          >
            <div className="text-center">
              <div className="font-mono text-4xl font-bold text-[var(--text-muted)] line-through decoration-[var(--color-error)]">12+</div>
              <div className="text-xs text-[var(--text-muted)]">Old clicks</div>
            </div>
            <div className="text-3xl text-[var(--text-muted)]">→</div>
            <div className="text-center">
              <div className="font-mono text-4xl font-bold text-[var(--accent-teal)]">7-9</div>
              <div className="text-xs text-[var(--accent-teal)]">New clicks</div>
            </div>
            <div className="w-px h-12 bg-[var(--border-primary)]"></div>
            <div className="text-center">
              <div className="font-mono text-4xl font-bold text-[var(--color-success)]">~40%</div>
              <div className="text-xs text-[var(--text-muted)]">Reduction</div>
            </div>
          </motion.div>
        </div>

        {/* Workflow Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* OLD: Chaotic Path */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-error)]">
                ⚠ OLD: 12+ CLICKS
              </span>
            </div>
            
            <div className="bg-[var(--bg-tertiary)] rounded-xl p-4 border border-[var(--border-primary)] max-h-[400px] overflow-y-auto">
              <div className="space-y-1.5">
                {oldPath.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + idx * 0.03 }}
                    className={`flex items-center gap-2 p-2 rounded-lg text-xs ${
                      item.isNewTab 
                        ? 'bg-amber-50 border border-amber-200' 
                        : 'bg-white border border-[var(--border-primary)]'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0 ${
                      item.isNewTab 
                        ? 'bg-[var(--color-warning)] text-white' 
                        : 'bg-[var(--border-secondary)] text-white'
                    }`}>
                      {item.isNewTab ? '↗' : idx + 1}
                    </div>
                    <span className="text-[var(--text-body)] flex-1 truncate">{item.step}</span>
                    {item.clicks > 0 && (
                      <span className="text-[var(--text-muted)] font-mono">+{item.clicks}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-[var(--bg-tertiary)] rounded-lg p-3 border border-[var(--border-primary)]">
              <p className="text-[var(--text-muted)] text-xs text-center">
                New tab opens • 3-level cascading menus • Multiple mental hops
              </p>
            </div>
          </motion.div>

          {/* NEW: Streamlined Path */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-teal)]">
                NEW: 7-9 CLICKS
              </span>
            </div>
            
            <div className="bg-[var(--accent-teal-50)] rounded-xl p-4 border-2 border-[var(--accent-teal)]/30 min-h-[400px] flex flex-col justify-center">
              <div className="space-y-3">
                {newPath.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 bg-white border-2 border-[var(--accent-teal)]/40 rounded-xl hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-teal)] flex items-center justify-center text-white font-mono text-sm font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-[var(--text-heading)] text-sm font-medium flex-1">{item.step}</span>
                    {item.clicks !== 0 && (
                      <span className="text-[var(--accent-teal)] font-mono text-sm font-bold">
                        {typeof item.clicks === 'string' ? item.clicks : `+${item.clicks}`}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-[var(--accent-teal)] rounded-lg p-3">
              <p className="text-white text-xs text-center font-medium">
                Smooth, linear progression with guided 4-step flow
              </p>
            </div>
          </motion.div>
        </div>

        {/* Multiple Entry Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h4 className="text-[var(--text-heading)] text-lg font-serif mb-2">Multiple Entry Points</h4>
            <p className="text-[var(--text-muted)] text-sm">
              All paths lead to the same unified experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {entryPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-[var(--border-primary)] rounded-xl p-5 text-center hover:shadow-md hover:border-[var(--accent-teal)]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent-teal-50)] flex items-center justify-center text-[var(--accent-teal)] mx-auto mb-3">
                  {p.icon}
                </div>
                <h5 className="text-[var(--text-heading)] text-sm font-semibold mb-1">{p.method}</h5>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Validation Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[var(--accent-teal-50)] rounded-xl p-6 border-l-4 border-l-[var(--accent-teal)]"
        >
          <div className="flex items-start gap-4">
            <div className="font-mono text-4xl font-bold text-[var(--accent-teal)]">
              100%
            </div>
            <div>
              <p className="text-[var(--text-heading)] font-semibold mb-1">Discoverability</p>
              <p className="text-[var(--text-body)] text-sm leading-relaxed">
                All 5 SMEs found Predict Data from right-click without being told — validating the entry point strategy driven by the Techy Analyst persona.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
