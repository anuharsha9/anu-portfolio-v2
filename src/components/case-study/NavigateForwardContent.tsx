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
            // SYSTEM_DOCUMENTATION
          </p>

          {/* Metric */}
          <div className="font-serif text-4xl md:text-5xl font-bold text-[var(--accent-blue)] mb-4">
            Zero to One
          </div>

          {/* Body */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Others held fragments of tribal knowledge. I investigated, mapped, and documented the complete end-to-end ecosystem—turning 50 years of oral history into a single source of truth.
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

      {/* 4. LASTING IMPACT (The Legacy) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6 md:p-8 rounded-xl">
          {/* Tag */}
          <span className="font-mono text-slate-500 text-xs uppercase tracking-widest mb-4 block">
            // LASTING_IMPACT
          </span>

          {/* Timeline */}
          <div className="flex flex-wrap gap-4 md:gap-8 mb-6 text-sm">
            <div>
              <span className="text-slate-400 block">My work</span>
              <span className="font-semibold text-slate-900">Sept 2022 – Nov 2023</span>
            </div>
            <div>
              <span className="text-slate-400 block">Shipped</span>
              <span className="font-semibold text-[var(--accent-blue)]">April 16, 2024</span>
            </div>
            <div>
              <span className="text-slate-400 block">Impact</span>
              <span className="font-semibold text-slate-900">20M+ weekly schedules</span>
            </div>
          </div>

          {/* Director Quote */}
          <blockquote className="font-serif text-lg md:text-xl text-slate-900 italic leading-relaxed mb-4 border-l-2 border-[var(--accent-blue)] pl-4">
            &ldquo;The architecture became the pattern for everything.&rdquo;
          </blockquote>
          <p className="text-slate-500 text-sm mb-6">— Director, on my ReportCaster contribution</p>

          {/* Body */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            When I see my work being demoed on the <strong className="text-slate-900">public YouTube channel to enterprise customers</strong> — that&apos;s the moment it becomes real. The architecture is exactly as I designed it. It shipped 5 months after I transitioned — because I had left a seamless handoff.
          </p>

          {/* Breadth callout */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-slate-500 text-sm leading-relaxed">
              <strong className="text-slate-700">While ReportCaster shipped</strong>, I was already leading ML Functions and IQ Plugin. On a 6-person design team, I onboarded and enabled 3 other designers across these projects.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 5. THINK BIG (Platform-wide Pattern) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 md:p-8 rounded-r-xl">
          {/* Tag */}
          <span className="font-mono text-purple-600 text-xs uppercase tracking-widest mb-3 block">
            // THINK_BIG
          </span>

          {/* Quote */}
          <blockquote className="font-serif text-xl md:text-2xl text-slate-900 italic leading-relaxed mb-4">
            &ldquo;This is the pattern we should use for everything.&rdquo;
          </blockquote>

          {/* Attribution */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            The Explorer filter view I designed for ReportCaster wasn&apos;t just for scheduling assets — it was <strong className="text-slate-900">a scalable pattern for all asset types on the platform</strong>. Leadership recognized this immediately. The architecture I created became the template for how the entire platform would handle asset browsing and management.
          </p>

          {/* Context */}
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            I didn&apos;t just solve ReportCaster — I solved a platform-wide problem. That&apos;s the difference between feature design and systems thinking.
          </p>
        </div>
      </motion.div>

      {/* 6. CUSTOMER PRAISE STORY (Success & Scale LP) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-[var(--accent-blue-soft)] border-l-4 border-[var(--accent-blue)] p-6 md:p-8 rounded-r-xl">
          {/* Tag */}
          <span className="font-mono text-[var(--accent-blue)] text-xs uppercase tracking-widest mb-3 block">
            // SUCCESS_AT_SCALE
          </span>

          {/* Quote */}
          <blockquote className="font-serif text-xl md:text-2xl text-slate-900 italic leading-relaxed mb-4">
            &ldquo;So what are you going to do next?&rdquo;
          </blockquote>

          {/* Attribution */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            During a Virtual User Group session, a long-time enterprise customer publicly praised the redesign and asked me directly what I planned to do next for ReportCaster. That moment made it clear: <strong className="text-slate-900">when your work impacts users at scale, the responsibility doesn&apos;t end when the project ends.</strong>
          </p>

          {/* Context */}
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Even after transitioning to other projects, I remained the person engineers and PMs came to for clarity on edge cases, logic, and workflows — because I had mapped every screen, every error, every condition. I still felt accountable for its success long after my role officially ended.
          </p>
        </div>
      </motion.div>

      {/* 7. THE KEY INSIGHT FOOTER (The Lesson - Terminal Style) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
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


