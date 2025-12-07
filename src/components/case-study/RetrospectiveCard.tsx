'use client'

import { motion } from 'framer-motion'
import { Trophy, Lightbulb } from 'lucide-react'

interface RetrospectiveCardProps {
  win: string
  lesson: string
  isLightBackground?: boolean
}

export default function RetrospectiveCard({ 
  win = 'Modal architecture scaled to 3 new products.',
  lesson = 'Would have involved QA automation earlier to speed up regression testing.',
  isLightBackground = true 
}: RetrospectiveCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 rounded-2xl p-8 md:p-10 shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase">
          // RETROSPECTIVE
        </span>
        <div className="h-px flex-1 bg-slate-700"></div>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        {/* The Win */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-emerald-400">
              The Win
            </h4>
          </div>
          <p className="text-white text-lg md:text-xl leading-relaxed font-serif">
            {win}
          </p>
        </div>

        {/* The Lesson */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-amber-400" />
            </div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-amber-400">
              The Lesson
            </h4>
          </div>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-serif">
            {lesson}
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 pt-6 border-t border-slate-700">
        <p className="font-mono text-xs text-slate-500 text-center">
          // Every project teaches something. The best designers iterate on themselves.
        </p>
      </div>
    </motion.div>
  )
}
