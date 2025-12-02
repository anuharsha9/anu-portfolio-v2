'use client'

interface LayeredDisclosureVisualProps {
  isLightBackground?: boolean
}

export default function LayeredDisclosureVisual({ isLightBackground = false }: LayeredDisclosureVisualProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const layers = [
    {
      level: 'Default',
      user: 'Non-technical users',
      features: [
        'Guided, safe, error-proof flow',
        'Clear steps, clear terminology',
        'Tooltips, wizards, onboarding text',
        'Inline explanations',
        'Progressive disclosure',
      ],
      color: accentColor,
    },
    {
      level: 'Advanced',
      user: 'Technical users',
      features: [
        'Expandable sections for parameters',
        'Ability to adjust algorithms',
        'Feature selection options',
        'Training configuration',
      ],
      color: accentColor + '80',
    },
    {
      level: 'Expert',
      user: 'Data scientists',
      features: [
        'Full control available but not required',
        'Advanced tuning options',
        'Hyperparameter presets',
        'All within the same unified experience',
      ],
      color: accentColor + '60',
    },
  ]

  const edgeCases = [
    'Incompatible datasets blocked early (Step 1)',
    'Inline warnings in plain language',
    'Standardized error patterns from design system',
    'Users always have a way out: go back, change input, or safely cancel',
  ]

  const deferred = [
    'Auto-suggesting best model type based on dataset',
    'Deep hyperparameter presets and advanced tuning',
    'Unified Train+Run single-screen concept',
    'Heavier onboarding overlays / carousels',
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className={`${textColor} text-xl md:text-2xl font-serif`}>
            Balancing Model Control with Simplicity
          </h3>
          <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
            Too much control = intimidating. Too little = limiting. Solution: Layered disclosure that serves multiple user types within a single experience.
          </p>
        </div>

        {/* Compact Layered Disclosure - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {layers.map((layer, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: layer.color }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: layer.color }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h4 className={`${textColor} text-base font-semibold`}>{layer.level}</h4>
                    <p className={`${mutedColor} text-xs`}>For {layer.user}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {layer.features.map((feature, featIdx) => (
                    <li key={featIdx} className={`${mutedColor} text-xs flex items-start gap-1.5`}>
                      <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Edge Case Handling - Compact */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 mt-4`} style={{ borderColor: accentColor + '60' }}>
          <h4 className={`${textColor} text-sm font-semibold mb-3`} style={{ color: accentColor }}>Edge Case Handling</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {edgeCases.map((edgeCase, idx) => (
              <div key={idx} className={`${bgColor} rounded p-2 border ${borderColor}`}>
                <p className={`${mutedColor} text-xs flex items-start gap-1.5`}>
                  <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">✓</span>
                  <span className="leading-tight">{edgeCase}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Didn't Ship - Compact */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 mt-4`} style={{ borderColor: mutedColor.replace('text-', '').includes('666') ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)' }}>
          <h4 className={`${textColor} text-sm font-semibold mb-2`}>What We Deferred to v2</h4>
          <ul className="space-y-1">
            {deferred.map((item, idx) => (
              <li key={idx} className={`${mutedColor} text-xs flex items-start gap-1.5`}>
                <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

