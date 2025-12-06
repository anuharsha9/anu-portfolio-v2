'use client'

import { getTheme } from '@/lib/design-system'

interface LayeredDisclosureVisualProps {
  isLightBackground?: boolean
}

export default function LayeredDisclosureVisual({ isLightBackground = false }: LayeredDisclosureVisualProps) {
  const t = getTheme(isLightBackground)
  const subtleBorder = isLightBackground ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'

  const layers = [
    { level: 'Default', user: 'Non-technical users', features: ['Guided, safe, error-proof flow', 'Clear steps, clear terminology', 'Tooltips, wizards, onboarding text', 'Inline explanations', 'Progressive disclosure'], color: t.accentVar },
    { level: 'Advanced', user: 'Technical users', features: ['Expandable sections for parameters', 'Ability to adjust algorithms', 'Feature selection options', 'Training configuration'], color: `${t.accentVar}80` },
    { level: 'Expert', user: 'Data scientists', features: ['Full control available but not required', 'Advanced tuning options', 'Hyperparameter presets', 'All within the same unified experience'], color: `${t.accentVar}60` },
  ]

  const edgeCases = ['Incompatible datasets blocked early (Step 1)', 'Inline warnings in plain language', 'Standardized error patterns from design system', 'Users always have a way out: go back, change input, or safely cancel']

  const deferred = ['Auto-suggesting best model type based on dataset', 'Deep hyperparameter presets and advanced tuning', 'Unified Train+Run single-screen concept', 'Heavier onboarding overlays / carousels']

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-6 md:p-8`}>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className={`${t.text} text-xl md:text-2xl font-serif`}>Balancing Model Control with Simplicity</h3>
          <p className={`${t.textMuted} text-sm md:text-base max-w-2xl mx-auto`}>
            Too much control = intimidating. Too little = limiting. Solution: Layered disclosure that serves multiple user types within a single experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {layers.map((l, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`} style={{ borderColor: l.color }}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ backgroundColor: l.color }}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 className={`${t.text} text-base font-semibold`}>{l.level}</h4>
                    <p className={`${t.textMuted} text-xs`}>For {l.user}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {l.features.map((f, j) => (
                    <li key={j} className={`${t.textMuted} text-xs flex items-start gap-1.5`}>
                      <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={`${t.cardBg} rounded-lg border-2 p-4 mt-4`} style={{ borderColor: `${t.accentVar}60` }}>
          <h4 className={`text-sm font-semibold mb-3 ${t.textAccent}`}>Edge Case Handling</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {edgeCases.map((e, i) => (
              <div key={i} className={`${t.bg} rounded p-2 border ${t.border}`}>
                <p className={`${t.textMuted} text-xs flex items-start gap-1.5`}>
                  <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>✓</span>
                  <span className="leading-tight">{e}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${t.cardBg} rounded-lg border-2 p-4 mt-4`} style={{ borderColor: subtleBorder }}>
          <h4 className={`${t.text} text-sm font-semibold mb-2`}>What We Deferred to v2</h4>
          <ul className="space-y-1">
            {deferred.map((d, i) => (
              <li key={i} className={`${t.textMuted} text-xs flex items-start gap-1.5`}>
                <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>→</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
