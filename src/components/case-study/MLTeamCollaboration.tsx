'use client'

import { motion } from 'framer-motion'

interface MLTeamCollaborationProps {
  isLightBackground?: boolean
}

export default function MLTeamCollaboration({ isLightBackground = false }: MLTeamCollaborationProps) {
  const team = [
    { role: 'Me', tag: '[UX_OWNER]', responsibility: 'Sole UX owner for ML Functions — end-to-end design leadership' },
    { role: 'Product Manager', tag: '[STRATEGY_LEAD]', responsibility: 'Scope, roadmap, prioritization' },
    { role: 'Principal Data Scientist', tag: '[DOMAIN_EXPERT]', responsibility: 'ML logic, evaluation metrics, domain correctness' },
    { role: 'Engineers', tag: '[EXECUTION_SQUAD]', responsibility: 'Core ML/analytics squad — implemented UI and backend behavior' },
    { role: 'QA Representative', tag: '[QUALITY_GATE]', responsibility: 'Edge cases, regression, error-state coverage' },
    { role: '5 SMEs', tag: '[USER_PROXIES]', responsibility: 'Customer-facing — usability testing and realistic scenarios' },
  ]

  const constraints = [
    { 
      type: 'Technical', 
      tag: '// CONSTRAINT: TECHNICAL',
      style: 'bg-slate-50 border-l-4 border-slate-400',
      items: ['Existing WebFOCUS design system', 'Older architecture', 'Non-negotiable backend behaviors'] 
    },
    { 
      type: 'Resourcing', 
      tag: '// CONSTRAINT: RESOURCING',
      style: 'bg-amber-50 border-l-4 border-amber-400',
      items: ['Limited engineering capacity', 'Realistic sprint constraints', 'Two ML projects simultaneously'] 
    },
    { 
      type: 'Product', 
      tag: '// CONSTRAINT: PRODUCT',
      style: 'bg-[var(--accent-teal-50)] border-l-4 border-[var(--accent-teal-400)]',
      items: ['Keep ML inside WebFOCUS', 'Demo-ready for customer conversations', 'Not just technically correct'] 
    },
  ]

  return (
    <div className="space-y-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          // CROSS_FUNCTIONAL_LEADERSHIP
        </span>
        <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
          Aligning and Leading the Team
        </h3>
        <p className="text-slate-600 text-base max-w-3xl mx-auto">
          This wasn&apos;t just a design project — it was a cross-functional collaboration that I effectively led over 6–8 months of iterative work.
        </p>
      </motion.div>

      {/* Team Composition - Org Matrix (Blueprint Grid) */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
            // ORG_MATRIX
          </span>
          <h4 className="font-serif text-lg text-slate-900">Team Composition</h4>
        </div>

        {/* Grid System Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-slate-200 rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {team.map((m, i) => (
              <div 
                key={i} 
                className={`
                  bg-white p-6 md:p-8
                  ${i < 3 ? 'border-b border-slate-100 md:border-b-0' : ''}
                  ${i < 3 && i < 2 ? 'md:border-r md:border-slate-100' : ''}
                  ${i >= 3 && i < 5 ? 'md:border-r md:border-slate-100 border-b border-slate-100 md:border-b-0' : ''}
                  ${i >= 3 ? 'md:border-t md:border-slate-100' : ''}
                  ${i === 5 ? 'border-b-0' : ''}
                `}
              >
                <span className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest block mb-2">
                  {m.tag}
                </span>
                <h5 className="font-serif text-lg text-slate-900 mb-2">{m.role}</h5>
                <p className="text-slate-500 text-sm leading-relaxed">{m.responsibility}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Constraints - System Boundaries (Keep Alert Block Style) */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
            // SYSTEM_BOUNDARIES
          </span>
          <h4 className="font-serif text-lg text-slate-900">Constraints I Worked Within</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {constraints.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`${c.style} rounded-r-xl p-6`}
            >
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-3">
                {c.tag}
              </span>
              <h5 className="font-serif text-lg text-slate-900 mb-4">{c.type}</h5>
              <ul className="space-y-2">
                {c.items.map((item, j) => (
                  <li key={j} className="text-slate-600 text-sm flex items-start gap-2">
                    <span className="text-slate-400 font-mono text-xs mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Insight - System Outcome Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="font-mono text-sm text-emerald-400 flex-shrink-0">
              &gt; LEADERSHIP_INSIGHT:
            </span>
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-white font-medium">Weekly UX + ML meetings:</span> I led these sessions — asking why certain behaviors were necessary, pushing back when suggestions added complexity without real user value, and clarifying what we would ship now versus what would move to a future release.
            </p>
          </div>
          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-sm leading-relaxed font-mono">
              // At some point, I stopped just asking questions and started saying: &quot;No, we&apos;re not doing that in this release — it adds complexity without value. Let&apos;s park it for v2.&quot; 
              <span className="text-emerald-400"> That&apos;s when it shifted from &quot;designer executing tickets&quot; to &quot;designer leading an ML initiative.&quot;</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
