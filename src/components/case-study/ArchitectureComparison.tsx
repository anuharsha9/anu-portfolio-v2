'use client'

interface ArchitectureComparisonProps {
  isLightBackground?: boolean
}

export default function ArchitectureComparison({ isLightBackground = false }: ArchitectureComparisonProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const versions = [
    {
      id: 'v1',
      label: 'V1',
      title: 'Independent Product',
      description: 'Standalone RC environment similar to other complex tools',
      approach: 'Full independent tab',
      pros: ['Consistent with platform patterns', 'Scalable for future features', 'Reduced context switching'],
      cons: ['Takes users outside the hub', 'Rejected: strategic constraint'],
      status: 'rejected',
    },
    {
      id: 'v2',
      label: 'V2',
      title: 'Hub Plugin',
      description: 'RC as a plugin inside the hub environment',
      approach: 'First-class hub plugin',
      pros: ['Fully integrated navigation', 'Consolidated subsystems', 'Future-proof IA'],
      cons: ['Too much engineering effort', 'Rejected: resourcing constraint'],
      status: 'rejected',
    },
    {
      id: 'v3',
      label: 'V3',
      title: 'Platform-Native',
      description: 'Modal-based workflows from + menu',
      approach: 'Platform-native modals',
      pros: ['Minimal engineering risk', 'Matches platform conventions', 'Reduced cognitive load', 'Scalable pattern'],
      cons: [],
      status: 'shipped',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Three Architectural Approaches
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            Each version represented a different architectural philosophy. V3 succeeded by aligning with platform patterns while respecting engineering constraints.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {versions.map((version) => (
            <div
              key={version.id}
              className={`${bgColor} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-105 ${
                version.status === 'shipped'
                  ? 'border-[var(--accent-teal)] shadow-lg'
                  : `border-opacity-50 ${borderColor}`
              }`}
            >
              {/* Version Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-lg font-bold ${
                      version.status === 'shipped' ? 'text-[var(--accent-teal)]' : mutedColor
                    }`}
                  >
                    {version.label}
                  </span>
                  {version.status === 'shipped' && (
                    <span className="text-[var(--accent-teal)] text-xs font-semibold uppercase tracking-wider bg-[var(--accent-teal)]/10 px-2 py-1 rounded">
                      Shipped
                    </span>
                  )}
                  {version.status === 'rejected' && (
                    <span className={`${mutedColor} text-xs font-semibold uppercase tracking-wider`}>
                      Rejected
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h4 className={`${textColor} text-lg font-serif mb-2`}>{version.title}</h4>
              <p className={`${mutedColor} text-sm mb-4 leading-relaxed`}>{version.description}</p>

              {/* Approach */}
              <div className="mb-4">
                <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Approach</span>
                <p className={`${textColor} text-sm font-medium mt-1`}>{version.approach}</p>
              </div>

              {/* Pros */}
              {version.pros.length > 0 && (
                <div className="mb-4">
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Pros</span>
                  <ul className="mt-2 space-y-1">
                    {version.pros.map((pro, index) => (
                      <li key={index} className={`${mutedColor} text-xs flex items-start gap-2`}>
                        <span className="text-[var(--accent-teal)] mt-1">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Cons */}
              {version.cons.length > 0 && (
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Cons</span>
                  <ul className="mt-2 space-y-1">
                    {version.cons.map((con, index) => (
                      <li key={index} className={`${mutedColor} text-xs flex items-start gap-2`}>
                        <span className="text-[#666666] mt-1">×</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
            <p className={`${textColor} text-base leading-relaxed`}>
              <span className="font-serif italic">Key insight:</span> V3 succeeded not because it was the most ambitious, but because it{' '}
              <span className="font-semibold">aligned with platform architecture</span> while respecting engineering constraints. The + menu pattern wasn&apos;t just UI — it was how the platform structured creation workflows.
            </p>
        </div>
      </div>
    </div>
  )
}

