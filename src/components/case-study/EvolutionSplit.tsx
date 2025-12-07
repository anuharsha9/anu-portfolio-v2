'use client'

import { motion } from 'framer-motion'

interface EvolutionSplitProps {
  isLightBackground?: boolean
}

export default function EvolutionSplit({ isLightBackground = true }: EvolutionSplitProps) {
  const epiphanies = [
    {
      number: '01',
      title: 'Complexity Was Defensive',
      body: "This wasn't a bad product — it was a defensive structure. Each subsystem was built to solve a specific crisis, and the complexity was a side effect of 50 years of patch-on-patch evolution.",
    },
    {
      number: '02',
      title: 'Documentation Is Design',
      body: 'I realized that documenting the system *was* designing it. The act of mapping forced me to see the unified mental model that no one else could articulate.',
    },
    {
      number: '03',
      title: 'Trust Comes Before Autonomy',
      body: 'Only after I became the system expert did the team give me creative freedom. Understanding earned me the right to propose radical change.',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
    >
      {/* LEFT COLUMN: The Mentorship Narrative */}
      <div className="bg-slate-50 border-l-4 border-[var(--accent-violet)] p-8 rounded-r-xl">
        {/* Label */}
        <span className="font-mono text-[var(--accent-violet-600)] text-xs uppercase tracking-widest mb-4 block">
          // PERSONAL_EVOLUTION
        </span>

        {/* Headline */}
        <h3 className="font-serif text-slate-900 text-2xl md:text-3xl italic mb-6">
          WebFOCUS changed me.
        </h3>

        {/* Body */}
        <div className="text-slate-600 text-base leading-relaxed space-y-4">
          <p>
            I joined out of my depth. My survival strategy was <strong className="text-slate-900">radical curiosity</strong>—talking to everyone, learning obsessively, earning trust through understanding.
          </p>
          <p>
            A Director saw my potential before I did. He transformed me from a designer executing tickets into a <strong className="text-slate-900">UX Leader</strong> driving strategy.
          </p>
          <p>
            The lesson: <strong className="text-slate-900">trust is the currency of innovation.</strong> Understanding earns creative freedom.
          </p>
        </div>

        {/* Footer Tag */}
        <span className="font-mono bg-white border border-slate-200 px-3 py-1.5 text-[10px] text-slate-500 rounded mt-6 inline-block">
          [GROWTH_VECTOR: EXPONENTIAL]
        </span>
      </div>

      {/* RIGHT COLUMN: The Paradigm Shifts */}
      <div className="space-y-8">
        {/* Header */}
        <div>
          <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest mb-2 block">
            // PARADIGM_SHIFTS
          </span>
          <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
            The Epiphanies.
          </h3>
        </div>

        {/* Epiphanies List */}
        <div className="space-y-6">
          {epiphanies.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="flex gap-4"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="font-mono text-4xl font-bold text-[var(--accent-teal-100)]">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <h4 className="font-serif text-lg text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  &ldquo;{item.body}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insight Footer */}
        <div className="bg-slate-900 rounded-xl p-6 mt-8">
          <div className="font-mono text-sm leading-relaxed">
            <span className="text-emerald-400">&gt; RETROSPECTIVE_INSIGHT:</span>
            <p className="text-slate-300 mt-2">
              The best designers don&apos;t just solve problems — they reframe what the problem actually is. ReportCaster wasn&apos;t a UI refresh. It was an architectural convergence.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

