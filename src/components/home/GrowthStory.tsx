'use client'

import { motion } from 'framer-motion'

export default function GrowthStory() {
  return (
    <section className="bg-slate-50 py-20 md:py-28 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[var(--accent-teal)]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <span className="font-mono text-[var(--accent-teal)] text-[10px] uppercase tracking-widest block mb-6">
            // THE_GROWTH
          </span>
          
          {/* Big Headline with accent */}
          <div className="flex items-start gap-4 mb-10">
            <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-[var(--accent-teal)] to-[var(--accent-teal)]/20 rounded-full mt-2" />
            <h3 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
              WebFOCUS <span className="text-[var(--accent-teal)]">transformed me.</span>
            </h3>
          </div>
          
          {/* Two Column Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="text-slate-600 text-lg leading-relaxed">
              <p>
                When I joined this team, I realized I was out of my depth. My first instinct?{' '}
                <strong className="text-slate-900">Radical curiosity.</strong> Talking to everyone, 
                learning obsessively, earning trust in the process.
              </p>
              <p className="mt-4">
                That earned me a seat at the table. My voice mattered. My opinions shaped decisions.
              </p>
            </div>
            
            {/* Right Column */}
            <div className="text-slate-600 text-lg leading-relaxed">
              <p>
                Through daily mentorship from my Director of Design, I learned to lead, to present, 
                and to carry myself with confidence. He saw something in me I hadn't seen yet. 
                He called me a <strong className="text-slate-900">UX Leader</strong>—before I realized I was one.
              </p>
              <p className="mt-4 text-slate-900 font-medium">
                His investment in me is why I mentor others today. That kind of transformation? Everyone deserves to experience it.
              </p>
            </div>
          </div>

          {/* Footer with visual element */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              OUTCOME: TRANSFORMED
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest">
                2022 → PRESENT
              </span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-slate-300 to-[var(--accent-teal)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
