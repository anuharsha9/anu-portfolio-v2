'use client'

interface IQChallengeBreakdownProps {
  isLightBackground?: boolean
}

export default function IQChallengeBreakdown({ isLightBackground = false }: IQChallengeBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const challenges = [
    {
      title: 'Fragmented DSML Features',
      description: 'Automated Insights, NLQ, and Predict Data were scattered across WebFOCUS',
      impact: 'Hard to discover, intimidating for non-technical users',
      icon: '🔀',
    },
    {
      title: 'Low Discoverability',
      description: 'Users didn\'t know DSML capabilities existed or how to access them',
      impact: 'Features underutilized, missed opportunities',
      icon: '🔍',
    },
    {
      title: 'Intimidating for Non-Technical Users',
      description: 'DSML features required technical knowledge or weeks of training',
      impact: 'Barrier to adoption, limited user base',
      icon: '😰',
    },
    {
      title: 'Market Gap',
      description: 'Competitors (Power BI, Tableau, Qlik) had DSML but were too technical',
      impact: 'Opportunity to differentiate with approachable DSML',
      icon: '📊',
    },
  ]

  const solution = {
    title: 'IQ Plugin: Unified DSML Entry Point',
    description: 'Centralized all DSML capabilities into one cohesive, approachable experience',
    benefits: [
      'Single entry point for all DSML features',
      'Guided experiences for non-technical users',
      'Advanced controls for technical users',
      'Discover page for learning and exploration',
    ],
  }

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Why IQ Needed to Exist
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            WebFOCUS had DSML features, but they were fragmented, hard to discover, and intimidating. IQ unified everything into one approachable entry point.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{challenge.icon}</span>
                  <h4 className={`${textColor} text-lg font-semibold`}>{challenge.title}</h4>
                </div>
                <p className={`${mutedColor} text-sm leading-relaxed`}>{challenge.description}</p>
                <div className={`${bgColor} rounded-lg p-3 border ${borderColor}`}>
                  <p className={`${textColor} text-xs font-medium`} style={{ color: accentColor }}>
                    Impact: {challenge.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-l-4 p-6 mt-8`} style={{ borderLeftColor: accentColor }}>
          <div className="space-y-4">
            <div>
              <h4 className={`${textColor} text-xl font-semibold mb-2`} style={{ color: accentColor }}>
                {solution.title}
              </h4>
              <p className={`${mutedColor} text-sm leading-relaxed`}>{solution.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {solution.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className={`${textColor} text-sm mt-0.5`} style={{ color: accentColor }}>✓</span>
                  <p className={`${textColor} text-sm`}>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

