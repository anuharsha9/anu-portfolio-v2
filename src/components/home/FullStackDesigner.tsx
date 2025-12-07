'use client'

import { motion } from 'framer-motion'

/**
 * FullStackDesigner - Section explaining the evolution into code
 * Positions coding as NEW skill, not something used in past projects
 */
export default function FullStackDesigner() {
  return (
    <section id="full-stack-designer" className="bg-white py-16 md:py-24 lg:py-32 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left - Editorial Text */}
          <div className="space-y-6">
            {/* Section Label */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-wider">
                The Next Chapter
              </span>
              <div className="h-px flex-1 bg-slate-200 max-w-xs"></div>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
              Why I learned to code.
            </h2>

            {/* Body Copy - The Evolution Narrative */}
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                After years of designing enterprise systems like ReportCaster, I realized 
                I wanted more control over the final output. Static mockups weren&apos;t enough.
              </p>
              <p>
                That&apos;s why I built this portfolio from scratch using React and AI. 
                It represents the <span className="text-slate-900 font-medium">next evolution</span> of 
                my skillset — bringing the same systems thinking to code that I brought to design.
              </p>
            </div>

            {/* Signature - What I bring to the next role */}
            <div className="pt-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-mono text-slate-500 text-xs uppercase tracking-wider mb-2">
                What I bring to your team
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                A designer who can prototype in code, validate feasibility early, and 
                collaborate with engineering as a peer — not just a hand-off partner.
              </p>
            </div>
          </div>

          {/* Right - Visual/Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '📐', label: 'Figma', desc: 'Design Systems', isCore: true },
              { icon: '🧠', label: 'Systems Thinking', desc: 'Complexity → Clarity', isCore: true },
              { icon: '⚛️', label: 'React', desc: 'Now Learning', isCore: false },
              { icon: '🤖', label: 'AI Tools', desc: 'Cursor, Claude', isCore: false },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className={`border rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group ${
                  item.isCore 
                    ? 'bg-[#0BA2B5]/5 border-[#0BA2B5]/20 hover:border-[#0BA2B5]/40' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className={`font-medium text-base transition-colors ${
                  item.isCore ? 'text-[#0BA2B5]' : 'text-slate-900 group-hover:text-[#0BA2B5]'
                }`}>
                  {item.label}
                </h4>
                <p className="text-slate-500 text-sm mt-1">
                  {item.desc}
                </p>
                {!item.isCore && (
                  <span className="inline-block mt-2 text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    NEW
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
