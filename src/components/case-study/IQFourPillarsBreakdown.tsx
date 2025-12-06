'use client'

import { getTheme } from '@/lib/design-system'

interface IQFourPillarsBreakdownProps {
  isLightBackground?: boolean
}

export default function IQFourPillarsBreakdown({ isLightBackground = false }: IQFourPillarsBreakdownProps) {
  const t = getTheme(isLightBackground)

  const pillars = [
    { name: 'Automated Insights', description: 'Instant summaries and patterns from a dataset without writing queries', features: ['Clear entry points from hub or reports', 'Simple controls: select dataset, choose insight types', 'Visual explanations in plain language'], icon: '💡' },
    { name: 'Ask a Question (NLQ)', description: 'Type natural language questions and get answers from your data', features: ['Intent parsing mapped to data structures', 'Forgiving interface with suggestions', 'Clear examples for first-time users'], icon: '❓' },
    { name: 'Predict Data', description: 'Guided ML experience integrated from ML Functions work', features: ['4-step guided flow for non-technical users', 'Advanced options for analysts', 'Seamless integration with IQ'], icon: '🔮' },
    { name: 'Discover Page', description: 'Educational hub for learning and exploration', features: ['Overview of all IQ features', 'Sample data and example questions', 'Community and documentation links', 'Embedded tutorials and videos'], icon: '📚' },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>The Final IQ Experience: Four Interconnected Pillars</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            The final IQ experience breaks down into four interconnected pillars, each designed to feel like part of the same system with consistent interaction patterns, navigation, and visual language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h4 className={`${t.text} text-xl font-semibold`}>{p.name}</h4>
                    <p className={`${t.textMuted} text-sm mt-1`}>{p.description}</p>
                  </div>
                </div>
                <div>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Key Features</span>
                  <ul className="space-y-2">
                    {p.features.map((f, j) => (
                      <li key={j} className={`${t.text} text-sm flex items-start gap-2`}>
                        <span className={`${t.textAccent} mt-1`}>•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: t.accentVar }}>
          <p className={`${t.text} text-sm leading-relaxed`}>
            <span className={`font-semibold ${t.textAccent}`}>Consistent mental models:</span> All four pillars use the same interaction patterns, navigation, and visual language — making IQ feel like one cohesive system, not four separate tools.
          </p>
        </div>
      </div>
    </div>
  )
}
