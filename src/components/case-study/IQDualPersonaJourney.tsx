'use client'

import { motion } from 'framer-motion'
import { getTheme } from '@/lib/design-system'

interface IQDualPersonaJourneyProps {
  isLightBackground?: boolean
}

export default function IQDualPersonaJourney({ isLightBackground = false }: IQDualPersonaJourneyProps) {
  const t = getTheme(true) // Force light background

  const systemDirectives = [
    {
      tag: 'DIRECTIVE_01: COGNITIVE_OFFLOADING',
      body: "Don't just hide complexity; manage it. Wizards absorb the 'Thinking Cost' for 80% of use cases.",
    },
    {
      tag: 'DIRECTIVE_02: COMPLEXITY_ABSTRACTION',
      body: "Progressive Disclosure is the firewall. Advanced settings exist but require an explicit 'sudo' action to access.",
    },
    {
      tag: 'DIRECTIVE_03: PATTERN_PARITY',
      body: "Predictable inputs. Whether asking a question or training a model, the interaction cost remains constant.",
    },
  ]

  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-xs text-[var(--accent-teal)] uppercase tracking-widest">
          // INTERFACE_ARCHITECTURE
        </span>
        <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>
          Architecting the Polymorphic Interface
        </h3>
        <p className={`${t.textMuted} text-sm md:text-base max-w-3xl mx-auto`}>
          The challenge: How to serve diametrically opposed needs (Speed vs. Control) without forking the codebase?
          <span className="font-semibold text-slate-700"> The Solution: A Dual-Mode Abstraction Layer.</span>
        </p>
      </motion.div>

      {/* The Split-Screen Visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-xl overflow-hidden"
      >
        {/* Left Pane - Novice / Guided */}
        <div className="bg-slate-50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200">
          <div className="space-y-5">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest">
              // MODE_A: GUIDED_ABSTRACTION
            </span>
            <h4 className="text-slate-900 text-xl font-serif font-semibold">
              The Wizard Layer
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Wraps complex ML logic in plain-english questions. Prioritizes <span className="font-semibold text-slate-900">Completion</span> over Configuration.
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-sm mt-0.5">→</span>
                <p className="text-slate-600 text-sm">Step-by-step flows with contextual help</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-sm mt-0.5">→</span>
                <p className="text-slate-600 text-sm">Auto-generated explanations in plain language</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-sm mt-0.5">→</span>
                <p className="text-slate-600 text-sm">Smart defaults that "just work"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pane - Expert / Direct */}
        <div className="bg-white p-6 md:p-8">
          <div className="space-y-5">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
              // MODE_B: DIRECT_CONTROL
            </span>
            <h4 className="text-slate-900 text-xl font-serif font-semibold">
              The Parameter Layer
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Exposes raw model settings and SQL generation. Prioritizes <span className="font-semibold text-slate-900">Precision</span> over Simplicity.
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-2">
                <span className="text-slate-400 text-sm mt-0.5">→</span>
                <p className="text-slate-600 text-sm">Hyperparameter configuration access</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-400 text-sm mt-0.5">→</span>
                <p className="text-slate-600 text-sm">Query syntax visibility and editing</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-400 text-sm mt-0.5">→</span>
                <p className="text-slate-600 text-sm">Keyboard shortcuts and batch operations</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* System Directives Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block text-center">
          // SYSTEM_INVARIANTS
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {systemDirectives.map((directive, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="bg-white border border-slate-200 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest block mb-3">
                &gt; {directive.tag}
              </span>
              <p className="text-slate-600 text-sm leading-relaxed">
                {directive.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Outcome Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-sm text-emerald-400 flex-shrink-0">
            &gt; ARCHITECTURAL_OUTCOME:
          </span>
          <p className="text-slate-300 text-sm leading-relaxed">
            One codebase. One component library. <span className="text-emerald-400 font-medium">Two interaction modes</span> that
            share state but present different affordances based on user context. The interface becomes polymorphic—same structure, different expressions.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
