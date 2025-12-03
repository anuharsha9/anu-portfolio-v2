import { motion } from 'framer-motion'
import { UXPrinciple } from '@/types/caseStudy'

interface UXPrinciplesProps {
  title: string
  intro?: string
  principles: UXPrinciple[]
}

export default function UXPrinciples({ title, intro, principles }: UXPrinciplesProps) {
  return (
    <div className="space-y-6">
      {/* Header - More Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px flex-1 bg-[var(--accent-teal)]/30"></div>
          <h2 className="text-white text-xl md:text-2xl font-serif leading-tight">{title}</h2>
          <div className="h-px flex-1 bg-[var(--accent-teal)]/30"></div>
        </div>
        {intro && <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">{intro}</p>}
      </motion.div>

      {/* Principles Grid - More Compact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/5 rounded-xl p-4 md:p-5 border border-white/10 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(13,148,136,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group"
          >
            <div className="space-y-2.5">
              {/* Decorative line element - Smaller */}
              <div className="flex items-baseline gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-px w-6 bg-[var(--accent-teal)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-wider">
                  Principle {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-white text-base md:text-lg font-serif font-medium group-hover:text-[var(--accent-teal)] transition-colors">{principle.title}</h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">{principle.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

