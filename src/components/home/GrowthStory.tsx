'use client'

import { motion } from 'framer-motion'

export default function GrowthStory() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12">
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
          
          {/* Big Headline */}
          <h3 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-10">
            WebFOCUS <span className="text-[var(--accent-teal)]">changed me.</span>
          </h3>
          
          {/* Two Column Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="text-slate-600 text-lg leading-relaxed">
              <p>
                I joined this team and quickly realized I was out of my depth. My only option was{' '}
                <strong className="text-slate-900">radical curiosity</strong>—talking to everyone, 
                learning obsessively, earning trust through understanding.
              </p>
              <p className="mt-4">
                That curiosity earned me everything: autonomy, respect, and immense growth.
              </p>
            </div>
            
            {/* Right Column */}
            <div className="text-slate-600 text-lg leading-relaxed">
              <p>
                My Director of Design became my anchor. Daily 1:1s. He taught me to lead, to present, 
                to believe in myself. He called me a <strong className="text-slate-900">UX Leader</strong>{' '}
                before I could call myself one.
              </p>
              <p className="mt-4 text-slate-900 font-medium">
                Today, I mentor others because he mentored me.
              </p>
            </div>
          </div>

          {/* Simple footer line */}
          <div className="mt-12 pt-6 border-t border-slate-200">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              OUTCOME: TRANSFORMED
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
