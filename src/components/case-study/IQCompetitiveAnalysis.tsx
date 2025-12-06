'use client'

import { getTheme } from '@/lib/design-system'

interface IQCompetitiveAnalysisProps {
  isLightBackground?: boolean
}

export default function IQCompetitiveAnalysis({ isLightBackground = false }: IQCompetitiveAnalysisProps) {
  const t = getTheme(isLightBackground)

  const competitors = [
    { name: 'Power BI', strengths: ['Deep Azure ML integration', 'Powerful capabilities'], weaknesses: ['Too technical for most analysts', 'Steep learning curve for non-technical users'], positioning: 'Too Technical' },
    { name: 'Tableau', strengths: ['Python/R integrations', 'Scripting capabilities'], weaknesses: ['Required scripting expertise', 'High barrier for business users'], positioning: 'Too Technical' },
    { name: 'Qlik', strengths: ['Predictive capabilities', 'Feature-rich'], weaknesses: ['Usability issues', 'Inaccessible for many users'], positioning: 'Usability Issues' },
    { name: 'IQ Plugin', strengths: ['Feature-rich like leaders', 'Significantly more approachable', 'Guided DSML experience'], weaknesses: [], positioning: 'Powerful & Approachable', isIQ: true },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Research & Competitive Landscape</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            I studied how leading analytics platforms approached DSML integration. There was a clear gap: platforms were either too technical or had usability issues. IQ could win by being both powerful and approachable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitors.map((c, i) => (
            <div
              key={i}
              className={`${t.cardBg} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              style={{ borderColor: c.isIQ ? t.accentVar : `${t.accentVar}40`, borderWidth: c.isIQ ? '3px' : '2px' }}
            >
              <div className="space-y-4">
                <div>
                  <h4 className={`${t.text} text-lg font-semibold mb-1`}>{c.name}</h4>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>{c.positioning}</span>
                </div>

                {c.strengths.length > 0 && (
                  <div>
                    <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Strengths</span>
                    <ul className="space-y-1.5">
                      {c.strengths.map((s, j) => (
                        <li key={j} className={`${t.text} text-xs flex items-start gap-2`}>
                          <span className={t.textAccent}>+</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {c.weaknesses.length > 0 && (
                  <div>
                    <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Weaknesses</span>
                    <ul className="space-y-1.5">
                      {c.weaknesses.map((w, j) => (
                        <li key={j} className={`${t.textMuted} text-xs flex items-start gap-2`}>
                          <span className={t.textAccent}>−</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: t.accentVar }}>
          <p className={`${t.text} text-sm leading-relaxed`}>
            <span className={`font-semibold ${t.textAccent}`}>IQ&apos;s positioning:</span> Feature-rich like the leaders (Power BI, Tableau), but significantly more approachable for non-technical users. We needed to match the depth while being easier to adopt than Qlik.
          </p>
        </div>
      </div>
    </div>
  )
}
