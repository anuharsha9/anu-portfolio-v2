'use client'

import { getTheme } from '@/lib/design-system'

interface IQChallengeBreakdownProps {
  isLightBackground?: boolean
}

export default function IQChallengeBreakdown({ isLightBackground = false }: IQChallengeBreakdownProps) {
  const t = getTheme(isLightBackground)

  const challenges = [
    { title: 'Fragmented DSML Features', description: 'Automated Insights, NLQ, and Predict Data were scattered across WebFOCUS', impact: 'Hard to discover, intimidating for non-technical users', icon: '🔀' },
    { title: 'Low Discoverability', description: "Users didn't know DSML capabilities existed or how to access them", impact: 'Features underutilized, missed opportunities', icon: '🔍' },
    { title: 'Intimidating for Non-Technical Users', description: 'DSML features required technical knowledge or weeks of training', impact: 'Barrier to adoption, limited user base', icon: '😰' },
    { title: 'Market Gap', description: 'Competitors (Power BI, Tableau, Qlik) had DSML but were too technical', impact: 'Opportunity to differentiate with approachable DSML', icon: '📊' },
  ]

  const solution = {
    title: 'IQ Plugin: Unified DSML Entry Point',
    description: 'Centralized all DSML capabilities into one cohesive, approachable experience',
    benefits: ['Single entry point for all DSML features', 'Guided experiences for non-technical users', 'Advanced controls for technical users', 'Discover page for learning and exploration'],
  }

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Why IQ Needed to Exist</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            WebFOCUS had DSML features, but they were fragmented, hard to discover, and intimidating. IQ unified everything into one approachable entry point.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((c, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{c.icon}</span>
                  <h4 className={`${t.text} text-lg font-semibold`}>{c.title}</h4>
                </div>
                <p className={`${t.textMuted} text-sm leading-relaxed`}>{c.description}</p>
                <div className={`${t.bg} rounded-lg p-3 border ${t.border}`}>
                  <p className={`text-xs font-medium ${t.textAccent}`}>Impact: {c.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${t.cardBg} rounded-lg border-l-4 p-6 mt-8`} style={{ borderLeftColor: t.accentVar }}>
          <div className="space-y-4">
            <div>
              <h4 className={`text-xl font-semibold mb-2 ${t.textAccent}`}>{solution.title}</h4>
              <p className={`${t.textMuted} text-sm leading-relaxed`}>{solution.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {solution.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`text-sm mt-0.5 ${t.textAccent}`}>✓</span>
                  <p className={`${t.text} text-sm`}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
