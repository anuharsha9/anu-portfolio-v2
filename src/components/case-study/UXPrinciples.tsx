import { UXPrinciple } from '@/types/caseStudy'

interface UXPrinciplesProps {
  title: string
  intro?: string
  principles: UXPrinciple[]
}

export default function UXPrinciples({ title, intro, principles }: UXPrinciplesProps) {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-serif leading-tight">{title}</h2>
        {intro && <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">{intro}</p>}
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
                <div className="h-px flex-1 bg-white/10"></div>
                <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white/40 text-xs font-mono uppercase tracking-wider">
                  Principle {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-white text-lg md:text-xl font-serif group-hover:text-[var(--accent-teal)] transition-colors">{principle.title}</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

