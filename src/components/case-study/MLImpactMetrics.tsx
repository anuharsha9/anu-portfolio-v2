'use client'

import { getTheme } from '@/lib/design-system'

interface MLImpactMetricsProps {
  isLightBackground?: boolean
}

export default function MLImpactMetrics({ isLightBackground = false }: MLImpactMetricsProps) {
  const t = getTheme(isLightBackground)

  const metrics = [
    { label: 'Discoverability', value: '5 / 5', description: 'SMEs found Predict Data from right-click without help', improvement: '100%' },
    { label: 'Steps to ML', value: 'From 12+ → 7-9', description: 'Old: 12+ clicks via data flows + cascading menus + mental hops. New: right-click → Predict Data → smooth guided 4-step flow (7-9 clicks from entry to training, more if configuring hyperparameters)', improvement: '25-42%' },
    { label: 'Hyperparameter Access', value: 'Hidden → Step 4', description: 'From post-hoc-only settings to explicit Step 4 in guided flow', improvement: 'Visible' },
    { label: 'Dead-End Errors', value: 'Zero', description: 'Eliminated "results not generated" confusion through inline validation', improvement: '100%' },
    { label: 'User Feedback', value: '5 / 5', description: 'All SMEs described new workflow as "much easier" and "more guiding"', improvement: '100%' },
    { label: 'Demo Readiness', value: 'First time', description: 'ML in WebFOCUS felt demo-ready for 150–200 person org-wide sessions', improvement: 'New' },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Impact & Validation</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            Validation from SME usability tests and internal org-wide demos confirmed that the design philosophy and implementation decisions had transformed an intimidating, error-prone flow into something understandable, navigable, and trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-l-4 p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg`} style={{ borderLeftColor: t.accentVar }}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>{m.label}</span>
                  {m.improvement && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${t.textAccent}`} style={{ backgroundColor: `${t.accentVar}20` }}>
                      ↑ {m.improvement}
                    </span>
                  )}
                </div>
                <div>
                  <p className={`text-2xl font-bold mb-1 ${t.textAccent}`}>{m.value}</p>
                  <p className={`${t.textMuted} text-xs leading-relaxed`}>{m.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border ${t.border} mt-8`}>
          <p className={`${t.text} text-sm leading-relaxed text-center`}>
            <span className={`font-semibold ${t.textAccent}`}>The result:</span> ML Functions became a gateway for broader ML adoption across teams, rather than a niche expert-only feature. Seamless workflow integration meant users stayed inside WebFOCUS instead of bouncing between tools.
          </p>
        </div>
      </div>
    </div>
  )
}
