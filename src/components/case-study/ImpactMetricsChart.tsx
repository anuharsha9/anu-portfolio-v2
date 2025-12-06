'use client'

import { getTheme } from '@/lib/design-system'

interface Metric {
  label: string
  value: string
  numericValue?: number
}

interface ImpactMetricsChartProps {
  metrics: Metric[]
  isLightBackground?: boolean
}

export default function ImpactMetricsChart({ metrics, isLightBackground = false }: ImpactMetricsChartProps) {
  const t = getTheme(isLightBackground)

  const metricsWithNumbers = metrics.map((m) => {
    const match = m.value.match(/(\d+)/)
    return { ...m, numericValue: match ? parseInt(match[1], 10) : null }
  })

  const maxValue = Math.max(...metricsWithNumbers.map((m) => m.numericValue).filter((v): v is number => v !== null))

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-6 md:p-8`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Impact Metrics</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            Measurable improvements in user efficiency, system accessibility, and support load reduction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => {
            const numericValue = metricsWithNumbers[i]?.numericValue
            const hasChart = numericValue !== null

            return (
              <div key={i} className={`${t.cardBg} rounded-lg border-l-4 p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg`} style={{ borderLeftColor: t.accentVar }}>
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`text-lg md:text-xl font-bold ${t.textAccent}`}>{m.value}</div>
                    {(m.value.toLowerCase().includes('fewer') || m.value.toLowerCase().includes('reduction') || m.value.toLowerCase().includes('eliminated') || m.value.toLowerCase().includes('faster')) && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={t.textAccent}>
                        <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div className={`${t.textMuted} text-xs font-medium`}>{m.label}</div>
                </div>

                {hasChart && (
                  <div className="mt-4">
                    <div className={`h-2 ${isLightBackground ? 'bg-black/10' : 'bg-white/10'} rounded-full overflow-hidden`}>
                      <div className="h-full transition-all duration-500 ease-out" style={{ width: `${(numericValue / maxValue) * 100}%`, backgroundColor: t.accentVar }} />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: t.accentVar }}>
          <p className={`${t.text} text-sm leading-relaxed text-center`}>
            The redesign reduced clicks by <span className={`font-semibold ${t.textAccent}`}>75%</span> and eliminated multi-tab sprawl. These metrics reflect not just UI improvements, but fundamental architectural changes that made RC accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  )
}
