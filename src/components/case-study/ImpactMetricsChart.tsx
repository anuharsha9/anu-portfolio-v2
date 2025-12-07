'use client'

interface Metric {
  label: string
  value: string
  context?: string
}

interface ImpactMetricsChartProps {
  metrics: Metric[]
  isLightBackground?: boolean
}

// Helper to convert label to technical format (e.g., "Click Reduction" -> "CLICK_REDUCTION")
// Truncates long labels to first 3-4 key words
const toTechnicalLabel = (label: string): string => {
  const words = label
    .toUpperCase()
    .replace(/[^A-Z0-9\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2) // Filter out short words like "to", "in", "of"
    .slice(0, 4) // Take first 4 significant words
  
  return words.join('_')
}

// Helper to extract the numeric/hero part of the value
const extractHeroValue = (value: string): string => {
  // Extract percentage, number, or key metric
  const match = value.match(/(\d+[-–]?\d*%?|\d+[xX]|[≈~]?\d+%?)/);
  if (match) return match[0];
  
  // Handle special cases like "Eliminated entirely"
  if (value.toLowerCase().includes('eliminated')) return '0';
  if (value.toLowerCase().includes('unified')) return '1';
  
  return value.split(' ')[0];
}

export default function ImpactMetricsChart({ metrics }: ImpactMetricsChartProps) {
  // Add context descriptions for each metric
  const metricsWithContext = metrics.map((m) => ({
    ...m,
    context: m.context || getContextForMetric(m.label)
  }))

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header - Centered */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h3 className="font-serif text-slate-900 text-3xl md:text-4xl">
            System Performance
          </h3>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            Quantifiable improvements in efficiency and system load.
          </p>
        </div>

        {/* Grid - Table/Blueprint Look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {metricsWithContext.map((m, i) => {
            const heroValue = extractHeroValue(m.value)
            const technicalLabel = toTechnicalLabel(m.label)
            
            // Calculate border classes for grid lines
            const isLastInRow = (i + 1) % 3 === 0
            const isLastRow = i >= metricsWithContext.length - (metricsWithContext.length % 3 || 3)
            
            return (
              <div 
                key={i} 
                className={`
                  p-6 md:p-8
                  ${!isLastInRow ? 'lg:border-r lg:border-slate-200' : ''}
                  ${!isLastRow ? 'border-b border-slate-200' : ''}
                  ${i % 2 === 0 ? 'md:border-r md:border-slate-200 lg:border-r-0' : ''}
                  ${i < metricsWithContext.length - 2 ? 'md:border-b md:border-slate-200 lg:border-b-0' : ''}
                  ${!isLastInRow && i < metricsWithContext.length - 1 ? 'lg:border-r' : ''}
                  ${i < metricsWithContext.length - 3 ? 'lg:border-b' : ''}
                `}
              >
                {/* Technical Label */}
                <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mb-2">
                  {technicalLabel}
                </div>
                
                {/* Hero Metric */}
                <div className="font-mono text-4xl md:text-5xl font-bold text-[var(--accent-teal)] leading-none mb-3">
                  {heroValue}
                </div>
                
                {/* Full Value (if different from hero) */}
                {heroValue !== m.value && (
                  <div className="font-sans text-sm text-slate-700 font-medium mb-2">
                    {m.value}
                  </div>
                )}
                
                {/* Context */}
                <div className="font-sans text-sm text-slate-600 leading-relaxed">
                  {m.context}
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Footer - System Note */}
        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
          <p className="font-serif italic text-lg text-slate-600 leading-relaxed">
            <span className="font-mono text-slate-400 not-italic text-sm block mb-2">
              {'// SYSTEM_NOTE:'}
            </span>
            The redesign reduced clicks by <span className="font-semibold text-[var(--accent-teal)] not-italic">75%</span> and eliminated multi-tab sprawl. These metrics reflect fundamental architectural changes that made RC accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  )
}

// Helper function to provide context for each metric type
function getContextForMetric(label: string): string {
  const labelLower = label.toLowerCase()
  
  if (labelLower.includes('click') || labelLower.includes('fewer')) {
    return 'For standard schedule creation workflows.'
  }
  if (labelLower.includes('tab') || labelLower.includes('sprawl')) {
    return 'Multi-tab navigation eliminated.'
  }
  if (labelLower.includes('explorer') || labelLower.includes('access')) {
    return 'Direct access to Explorer UI.'
  }
  if (labelLower.includes('speed') || labelLower.includes('faster') || labelLower.includes('completion')) {
    return 'Average time for common tasks.'
  }
  if (labelLower.includes('support') || labelLower.includes('reduction')) {
    return 'Based on support ticket analysis.'
  }
  if (labelLower.includes('unified') || labelLower.includes('consolidated') || labelLower.includes('model')) {
    return 'Subsystems consolidated into one.'
  }
  
  return 'Measured improvement metric.'
}
