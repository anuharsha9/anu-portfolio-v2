'use client'

import { getTheme } from '@/lib/design-system'

interface TeamOnboardingProcessProps {
  isLightBackground?: boolean
}

export default function TeamOnboardingProcess({ isLightBackground = false }: TeamOnboardingProcessProps) {
  const t = getTheme(isLightBackground)

  const stakeholders = ['Lead Architect', 'Lead Engineer', 'Engineering Squad', 'New PM', 'QA Team', 'Documentation', 'SMEs', 'Support', 'Leadership']

  const activities = [
    { phase: 'Discovery', items: ['Dozens of demos (old vs new)', 'Legacy quirks walkthroughs', 'Failure logic explanations'] },
    { phase: 'Alignment', items: ['IA & structural decisions', 'Interactive prototypes', 'Workflow documentation'] },
    { phase: 'Execution', items: ['Mediate engineer conflicts', 'Edge case documentation', 'Team handoff'] },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Onboarding 9 Stakeholder Groups</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-2xl mx-auto`}>
            Most had never seen RC end-to-end. I became the person who could explain it all.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className={`${t.text} text-lg font-semibold mb-4`}>Stakeholders Brought Up to Speed</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {stakeholders.map((s, i) => (
                <div key={i} className={`${t.cardBg} rounded-lg border ${t.border} p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md`}>
                  <p className={`${t.text} text-sm font-medium`}>{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className={`${t.text} text-lg font-semibold`}>Onboarding Activities</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.map((a, i) => (
                <div key={i} className={`${t.cardBg} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ backgroundColor: t.accentVar }}>
                        {i + 1}
                      </div>
                      <h5 className={`${t.text} font-semibold`}>{a.phase}</h5>
                    </div>
                    <ul className="space-y-2">
                      {a.items.map((item, j) => (
                        <li key={j} className={`${t.textMuted} text-sm leading-relaxed flex items-start gap-2`}>
                          <span className={`${t.textAccent} font-bold flex-shrink-0 mt-0.5`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border ${t.border} mt-8`}>
          <p className={`${t.text} text-base leading-relaxed text-center`}>
            <span className={`font-semibold ${t.textAccent}`}>Result:</span> Engineers who initially intimidated me became collaborators I respected — and who respected me. I became the youngest in the room with unspoken authority on the experience of RC.
          </p>
        </div>
      </div>
    </div>
  )
}
