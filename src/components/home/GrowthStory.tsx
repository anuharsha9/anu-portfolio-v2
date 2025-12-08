'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Users, Quote } from 'lucide-react'

export default function GrowthStory() {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32 relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-teal)] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
            // THE_GROWTH
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left - Big Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 w-16 h-16 text-[var(--accent-teal)] opacity-30" />
              <h3 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                WebFOCUS<br />
                <span className="text-[var(--accent-teal)]">changed me.</span>
              </h3>
            </div>
            
            {/* Transformation badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-white/80 text-sm font-medium">Radical Curiosity</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-white/80 text-sm font-medium">Immense Growth</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-violet-400" />
                <span className="text-white/80 text-sm font-medium">Now I Mentor</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              {/* Story content */}
              <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
                <p>
                  I joined this team and quickly realized I was out of my depth. My only option was{' '}
                  <span className="text-white font-semibold">radical curiosity</span>—talking to everyone, 
                  learning obsessively, earning trust through understanding.
                </p>
                <p>
                  That curiosity earned me everything:{' '}
                  <span className="text-[var(--accent-teal)]">autonomy</span>,{' '}
                  <span className="text-[var(--accent-teal)]">respect</span>, and{' '}
                  <span className="text-[var(--accent-teal)]">immense growth</span>.
                </p>
                <div className="border-l-2 border-[var(--accent-teal)] pl-6 py-2">
                  <p className="text-white/90">
                    My Director of Design became my anchor. Daily 1:1s. He taught me to lead, to present, 
                    to believe in myself. He called me a <span className="font-semibold">UX Leader</span> before 
                    I could call myself one.
                  </p>
                </div>
                <p className="text-white font-medium">
                  Today, I mentor others because he mentored me.
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest">
                  OUTCOME: TRANSFORMED
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    GROWTH_MULTIPLIER: ∞
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
