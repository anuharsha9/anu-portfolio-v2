'use client'

interface Metric {
  label: string
  value: string
  numericValue?: number // For chart visualization
}

interface ImpactMetricsChartProps {
  metrics: Metric[]
  isLightBackground?: boolean
}

export default function ImpactMetricsChart({
  metrics,
  isLightBackground = false,
}: ImpactMetricsChartProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  // Extract numeric values for visualization
  const metricsWithNumbers = metrics.map((metric) => {
    // Try to extract number from value string (e.g., "≈75% fewer clicks" -> 75)
    const match = metric.value.match(/(\d+)/)
    const numericValue = match ? parseInt(match[1], 10) : null
    return { ...metric, numericValue }
  })

  // Find max value for scaling
  const maxValue = Math.max(
    ...metricsWithNumbers
      .map((m) => m.numericValue)
      .filter((v): v is number => v !== null)
  )

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>Impact Metrics</h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            Measurable improvements in user efficiency, system accessibility, and support load reduction.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const numericValue = metricsWithNumbers[index]?.numericValue
            const hasChart = numericValue !== null

            return (
              <div
                key={index}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-l-4 p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg`}
                style={{ borderLeftColor: accentColor }}
              >
                {/* Value */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className={`${textColor} text-lg md:text-xl font-bold`}
                      style={{ color: accentColor }}
                    >
                      {metric.value}
                    </div>
                    {/* Trend indicator for reductions/improvements */}
                    {metric.value.toLowerCase().includes('fewer') || 
                     metric.value.toLowerCase().includes('reduction') || 
                     metric.value.toLowerCase().includes('eliminated') ||
                     metric.value.toLowerCase().includes('faster') ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[var(--accent-teal)]"
                      >
                        <path
                          d="M7 13L12 18L17 13M7 6L12 11L17 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </div>
                  <div className={`${mutedColor} text-xs font-medium`}>{metric.label}</div>
                </div>

                {/* Bar Chart (if numeric value exists) */}
                {hasChart && (
                  <div className="mt-4">
                    <div className={`h-2 ${isLightBackground ? 'bg-black/10' : 'bg-white/10'} rounded-full overflow-hidden`}>
                      <div
                        className="h-full transition-all duration-500 ease-out"
                        style={{
                          width: `${(numericValue / maxValue) * 100}%`,
                          backgroundColor: accentColor,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: accentColor }}>
          <p className={`${textColor} text-sm leading-relaxed text-center`}>
            The redesign reduced clicks by <span className="font-semibold" style={{ color: accentColor }}>75%</span> and eliminated multi-tab sprawl. These metrics reflect not just UI improvements, but fundamental architectural changes that made RC accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  )
}


