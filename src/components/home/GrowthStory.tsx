'use client'

import { motion } from 'framer-motion'

export default function GrowthStory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-slate-50 border-l-4 border-violet-500 border-y border-r border-slate-200 p-8 md:p-10 rounded-r-xl"
        >
          {/* Label */}
          <span className="font-mono text-violet-600 text-[10px] uppercase tracking-widest block mb-4">
            // THE_GROWTH
          </span>
          
          {/* Headline */}
          <h3 className="font-serif text-slate-900 text-xl md:text-2xl italic mb-6">
            WebFOCUS changed me.
          </h3>
          
          {/* Body */}
          <div className="text-slate-600 text-base leading-relaxed space-y-4 mb-8">
            <p>
              I joined this team and quickly realized I was out of my depth. My only option was <strong className="text-slate-900">radical curiosity</strong>—talking to everyone, learning obsessively, earning trust through understanding. That curiosity earned me everything: autonomy, respect, and immense growth.
            </p>
            <p>
              My Director of Design became my anchor. Daily 1:1s. He taught me to lead, to present, to believe in myself. He took raw potential and polished it. He called me a <strong className="text-slate-900">UX Leader</strong> before I could call myself one. Today, I mentor others because he mentored me.
            </p>
          </div>
          
          {/* Footer Tag */}
          <span className="inline-block font-mono text-[10px] text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-4 py-2 rounded">
            OUTCOME: TRANSFORMED
          </span>
        </motion.div>
      </div>
    </section>
  )
}

