'use client'

interface IQCompetitiveAnalysisProps {
  isLightBackground?: boolean
}

export default function IQCompetitiveAnalysis({ isLightBackground = false }: IQCompetitiveAnalysisProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const competitors = [
    {
      name: 'Power BI',
      strengths: ['Deep Azure ML integration', 'Powerful capabilities'],
      weaknesses: ['Too technical for most analysts', 'Steep learning curve for non-technical users'],
      positioning: 'Too Technical',
    },
    {
      name: 'Tableau',
      strengths: ['Python/R integrations', 'Scripting capabilities'],
      weaknesses: ['Required scripting expertise', 'High barrier for business users'],
      positioning: 'Too Technical',
    },
    {
      name: 'Qlik',
      strengths: ['Predictive capabilities', 'Feature-rich'],
      weaknesses: ['Usability issues', 'Inaccessible for many users'],
      positioning: 'Usability Issues',
    },
    {
      name: 'IQ Plugin',
      strengths: ['Feature-rich like leaders', 'Significantly more approachable', 'Guided DSML experience'],
      weaknesses: [],
      positioning: 'Powerful & Approachable',
      isIQ: true,
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Research & Competitive Landscape
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            I studied how leading analytics platforms approached DSML integration. There was a clear gap: platforms were either too technical or had usability issues. IQ could win by being both powerful and approachable.
          </p>
        </div>

        {/* Competitors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitors.map((competitor, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              style={{ 
                borderColor: competitor.isIQ ? accentColor : accentColor + '40',
                borderWidth: competitor.isIQ ? '3px' : '2px',
              }}
            >
              <div className="space-y-4">
                <div>
                  <h4 className={`${textColor} text-lg font-semibold mb-1`}>{competitor.name}</h4>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>
                    {competitor.positioning}
                  </span>
                </div>

                {/* Strengths */}
                {competitor.strengths.length > 0 && (
                  <div>
                    <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                      Strengths
                    </span>
                    <ul className="space-y-1.5">
                      {competitor.strengths.map((strength, sIndex) => (
                        <li key={sIndex} className={`${textColor} text-xs flex items-start gap-2`}>
                          <span className="text-[var(--accent-teal)] mt-1">+</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Weaknesses */}
                {competitor.weaknesses.length > 0 && (
                  <div>
                    <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                      Weaknesses
                    </span>
                    <ul className="space-y-1.5">
                      {competitor.weaknesses.map((weakness, wIndex) => (
                        <li key={wIndex} className={`${mutedColor} text-xs flex items-start gap-2`}>
                          <span className="text-[var(--accent-teal)] mt-1">−</span>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: accentColor }}>
          <p className={`${textColor} text-sm leading-relaxed`}>
            <span className="font-semibold" style={{ color: accentColor }}>IQ&apos;s positioning:</span> Feature-rich like the leaders (Power BI, Tableau), but significantly more approachable for non-technical users. We needed to match the depth while being easier to adopt than Qlik.
          </p>
        </div>
      </div>
    </div>
  )
}

