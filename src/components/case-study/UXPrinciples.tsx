import { motion } from 'framer-motion'
import { UXPrinciple } from '@/types/caseStudy'

interface UXPrinciplesProps {
  title: string
  intro?: string
  principles: UXPrinciple[]
  isLightBackground?: boolean
}

export default function UXPrinciples({ title, intro, principles, isLightBackground = false }: UXPrinciplesProps) {
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
        <h2 className={`${isLightBackground ? 'text-[var(--text-primary-light)]' : 'text-white'} text-xl md:text-2xl font-serif leading-tight mb-2`}>{title}</h2>
        {intro && <p className={`${isLightBackground ? 'text-[var(--text-muted-light)]' : 'text-white/70'} text-sm md:text-base leading-relaxed max-w-2xl mx-auto`}>{intro}</p>}
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
            className={`${isLightBackground ? 'bg-white' : 'bg-white/5'} rounded-lg border ${isLightBackground ? 'border-refined-light' : 'border-refined-dark'} p-4 md:p-5 hover-lift transition-all duration-normal ${isLightBackground ? 'hover:border-[var(--accent-teal)]/50' : 'hover:border-white/20'} group`}
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`${isLightBackground ? 'text-[var(--text-muted-light)]' : 'text-white/40'} text-[10px] md:text-xs font-mono uppercase tracking-wider`}>
                  Principle {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className={`${isLightBackground ? 'text-[var(--text-primary-light)]' : 'text-white'} text-base md:text-lg font-serif font-medium group-hover:text-[var(--accent-teal)] transition-colors`}>{principle.title}</h3>
              <p className={`${isLightBackground ? 'text-[var(--text-muted-light)]' : 'text-white/70'} text-xs md:text-sm leading-relaxed`}>{principle.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

