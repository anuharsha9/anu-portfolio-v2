'use client'

import { getTheme } from '@/lib/design-system'

interface IQValidationSourcesProps {
  isLightBackground?: boolean
}

export default function IQValidationSources({ isLightBackground = false }: IQValidationSourcesProps) {
  const t = getTheme(isLightBackground)

  const sources = [
    { source: 'Internal Usability Tests', description: 'Internal usability tests highlighted how much easier it was to find and understand DSML features when everything lived in one place. Users who had to navigate between three different systems could now access everything from a single entry point.', icon: '🧪' },
    { source: 'Stakeholder Feedback', description: 'Stakeholders and internal teams called out the clarity of the workflows and the balance between depth and simplicity. The dual-persona approach resonated — technical users felt empowered, non-technical users felt supported.', icon: '💬' },
    { source: 'Learning Curve Reduction', description: 'The learning curve dropped: new users needed fewer explanations to get started, and non-technical users were more willing to try features they previously avoided. IQ demonstrated that DSML features could be both powerful and approachable.', icon: '📉' },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Impact & Validation</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            Even before full production rollout (scheduled for summer 2026), IQ showed strong promise. The validation came from multiple sources, demonstrating that thoughtful UX architecture could serve both technical experts and everyday business users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sources.map((s, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: `${t.accentVar}20` }}>
                    {s.icon}
                  </div>
                  <h4 className={`${t.text} text-lg font-semibold`}>{s.source}</h4>
                </div>
                <p className={`${t.textMuted} text-sm leading-relaxed`}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: t.accentVar }}>
          <p className={`${t.text} text-base leading-relaxed text-center`}>
            <span className={`font-semibold ${t.textAccent}`}>The result:</span> IQ demonstrated that we didn&apos;t have to choose between depth and simplicity — we could design for both through thoughtful UX architecture. The patterns I developed became part of my design vocabulary and directly influenced how I approach complex, multi-persona design challenges.
          </p>
        </div>
      </div>
    </div>
  )
}
