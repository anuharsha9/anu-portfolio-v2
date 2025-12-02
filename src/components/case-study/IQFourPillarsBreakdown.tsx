'use client'

interface IQFourPillarsBreakdownProps {
  isLightBackground?: boolean
}

export default function IQFourPillarsBreakdown({ isLightBackground = false }: IQFourPillarsBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const pillars = [
    {
      name: 'Automated Insights',
      description: 'Instant summaries and patterns from a dataset without writing queries',
      features: [
        'Clear entry points from hub or reports',
        'Simple controls: select dataset, choose insight types',
        'Visual explanations in plain language',
      ],
      icon: '💡',
    },
    {
      name: 'Ask a Question (NLQ)',
      description: 'Type natural language questions and get answers from your data',
      features: [
        'Intent parsing mapped to data structures',
        'Forgiving interface with suggestions',
        'Clear examples for first-time users',
      ],
      icon: '❓',
    },
    {
      name: 'Predict Data',
      description: 'Guided ML experience integrated from ML Functions work',
      features: [
        '4-step guided flow for non-technical users',
        'Advanced options for analysts',
        'Seamless integration with IQ',
      ],
      icon: '🔮',
    },
    {
      name: 'Discover Page',
      description: 'Educational hub for learning and exploration',
      features: [
        'Overview of all IQ features',
        'Sample data and example questions',
        'Community and documentation links',
        'Embedded tutorials and videos',
      ],
      icon: '📚',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            The Final IQ Experience: Four Interconnected Pillars
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            The final IQ experience breaks down into four interconnected pillars, each designed to feel like part of the same system with consistent interaction patterns, navigation, and visual language.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{pillar.icon}</span>
                  <div>
                    <h4 className={`${textColor} text-xl font-semibold`}>{pillar.name}</h4>
                    <p className={`${mutedColor} text-sm mt-1`}>{pillar.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                    Key Features
                  </span>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, fIndex) => (
                      <li key={fIndex} className={`${textColor} text-sm flex items-start gap-2`}>
                        <span className="text-[var(--accent-teal)] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consistency Note */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: accentColor }}>
          <p className={`${textColor} text-sm leading-relaxed`}>
            <span className="font-semibold" style={{ color: accentColor }}>Consistent mental models:</span> All four pillars use the same interaction patterns, navigation, and visual language — making IQ feel like one cohesive system, not four separate tools.
          </p>
        </div>
      </div>
    </div>
  )
}

