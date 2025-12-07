'use client'

import { motion } from 'framer-motion'

interface NavigateForwardContentProps {
  isLightBackground?: boolean
}

export default function NavigateForwardContent({ isLightBackground = true }: NavigateForwardContentProps) {
  return (
    <div className="space-y-12">
      
      {/* 1. THE IMPACT PULL QUOTE (The Headline) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center py-8"
      >
        {/* Giant Quotation Marks */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-[120px] md:text-[180px] text-[var(--accent-teal-100)] font-serif leading-none select-none pointer-events-none">
          &ldquo;
        </span>
        
        {/* Quote Text */}
        <blockquote className="relative z-10 max-w-4xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-slate-900 italic leading-tight">
            The request was for a visual refresh. I delivered a foundational system architecture.
          </p>
        </blockquote>
      </motion.div>

      {/* 2. THE AUTHORITY STAT (The Badge) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center"
      >
        <div className="bg-white border border-slate-200 shadow-sm p-6 md:p-8 rounded-xl text-center max-w-lg">
          {/* Label */}
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-3">
            // THE_SYSTEM_AUTHORITY
          </p>
          
          {/* Metric */}
          <div className="font-serif text-4xl md:text-5xl font-bold text-[var(--accent-blue)] mb-4">
            Zero to One
          </div>
          
          {/* Body */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Others held fragments of tribal knowledge. I was the first to investigate, map, and document the complete end-to-end ecosystem—turning 50 years of oral history into a single source of truth.
          </p>
        </div>
      </motion.div>

      {/* 3. THE NARRATIVE (The Remainder - Max 2 paragraphs) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto space-y-4"
      >
        <p className="text-slate-600 text-lg leading-relaxed">
          Before, the team relied on &ldquo;who knows this?&rdquo; to move forward. After, they could rely on <strong className="text-slate-900">the system spec</strong>. I didn&apos;t just design a UI—I structured the knowledge so the team could finally move fast without waiting for tribal experts.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed">
          The architecture I created allowed the PM to add new features after launch without breaking the mental model. I had designed for extensibility, not just for the current release.
        </p>
      </motion.div>

      {/* 4. THE KEY INSIGHT FOOTER (The Lesson - Terminal Style) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-slate-900 rounded-xl p-6 md:p-8">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            <span className="ml-2 font-mono text-xs text-slate-500">insight.md</span>
          </div>
          
          {/* Content */}
          <div className="font-mono text-sm leading-relaxed">
            <span className="text-emerald-400">&gt; KEY_INSIGHT:</span>
            <p className="text-slate-300 mt-2">
              Chaos is just undocumented architecture. Turn oral history into a spec, and you turn a team that asks &ldquo;who knows?&rdquo; into a team that says &ldquo;check the doc.&rdquo;
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


