'use client'

interface MLImpactMetricsProps {
  isLightBackground?: boolean
}

export default function MLImpactMetrics({ isLightBackground = false }: MLImpactMetricsProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const metrics = [
    {
      label: 'Discoverability',
      value: '5 / 5',
      description: 'SMEs found Predict Data from right-click without help',
      improvement: '100%',
    },
    {
      label: 'Steps to ML',
      value: 'From 12+ → 7-9',
      description: 'Old: 12+ clicks via data flows + cascading menus + mental hops. New: right-click → Predict Data → smooth guided 4-step flow (7-9 clicks from entry to training, more if configuring hyperparameters)',
      improvement: '25-42%',
    },
    {
      label: 'Hyperparameter Access',
      value: 'Hidden → Step 4',
      description: 'From post-hoc-only settings to explicit Step 4 in guided flow',
      improvement: 'Visible',
    },
    {
      label: 'Dead-End Errors',
      value: 'Zero',
      description: 'Eliminated "results not generated" confusion through inline validation',
      improvement: '100%',
    },
    {
      label: 'User Feedback',
      value: '5 / 5',
      description: 'All SMEs described new workflow as "much easier" and "more guiding"',
      improvement: '100%',
    },
    {
      label: 'Demo Readiness',
      value: 'First time',
      description: 'ML in WebFOCUS felt demo-ready for 150–200 person org-wide sessions',
      improvement: 'New',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Impact & Validation
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            Validation from SME usability tests and internal org-wide demos confirmed that the design philosophy and implementation decisions had transformed an intimidating, error-prone flow into something understandable, navigable, and trustworthy.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-l-4 p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg`}
              style={{ borderLeftColor: accentColor }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>{metric.label}</span>
                  {metric.improvement && (
                    <span className={`${textColor} text-xs font-semibold px-2 py-1 rounded`} style={{ backgroundColor: accentColor + '20', color: accentColor }}>
                      ↑ {metric.improvement}
                    </span>
                  )}
                </div>
                <div>
                  <p className={`${textColor} text-2xl font-bold mb-1`} style={{ color: accentColor }}>
                    {metric.value}
                  </p>
                  <p className={`${mutedColor} text-xs leading-relaxed`}>{metric.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
          <p className={`${textColor} text-sm leading-relaxed text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>The result:</span> ML Functions became a gateway for broader ML adoption across teams, rather than a niche expert-only feature. Seamless workflow integration meant users stayed inside WebFOCUS instead of bouncing between tools.
          </p>
        </div>
      </div>
    </div>
  )
}

