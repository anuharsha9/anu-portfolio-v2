'use client'

import { getTheme } from '@/lib/design-system'

interface ImpactVisualProps {
  isLightBackground?: boolean
}

export default function ImpactVisual({ isLightBackground = false }: ImpactVisualProps) {
  const t = getTheme(isLightBackground)
  const subtleBorder = isLightBackground ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'

  const entryPoints = {
    old: [
      { feature: 'Create Schedule', location: 'Buried 4 clicks deep' },
      { feature: 'Create Distribution List', location: 'Separate menu path' },
      { feature: 'Create Access List', location: 'Another separate path' },
      { feature: 'RC Explorer', location: 'Hamburger menu → hidden' },
      { feature: 'RC Admin', location: 'Management Center → Admin Console' },
    ],
    new: [
      { feature: 'Create Schedule', location: '+ menu → Create Schedule' },
      { feature: 'Create Distribution List', location: '+ menu → Create Distribution List' },
      { feature: 'Create Access List', location: '+ menu → Create Access List' },
      { feature: 'RC Explorer', location: 'Home → RC assets filter' },
      { feature: 'RC Admin', location: 'Management Center → RC Admin' },
    ],
  }

  const clickReductions = [
    { task: 'Create Schedule', old: '5–6 clicks + new tab', new: '1 click', reduction: '83%' },
    { task: 'Complete Schedule Setup', old: 'Multiple steps', new: '3 clicks', reduction: 'Simplified' },
    { task: 'Access Job Log', old: '1 click (new tab)', new: '1 click (in modal)', reduction: 'No new tab' },
    { task: 'Access Explorer', old: '3 clicks', new: '1 click', reduction: '67%' },
    { task: 'Access Admin', old: '3 clicks', new: '2 clicks', reduction: '33%' },
  ]

  const validations = [
    { icon: '👥', title: 'Internal Feedback', text: 'Engineers and PMs who had never understood RC could now explain it to others.' },
    { icon: '💬', title: 'Customer Feedback', text: 'Long-time enterprise customer praised the redesign and said he was excited for what was coming next.' },
    { icon: '🎯', title: 'Support Team', text: 'Fewer "how do I..." questions and more "can I do..." questions — a shift from confusion to capability.' },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Impact: Entry Points, Workflows & Validation</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-2xl mx-auto`}>
            Unified entry points, streamlined workflows, and validation from multiple sources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`${t.cardBg} rounded-lg border-2 p-5`} style={{ borderColor: subtleBorder }}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>Before: Scattered</span>
                <div className="h-px flex-1" style={{ backgroundColor: subtleBorder }}></div>
              </div>
              <div className="space-y-2">
                {entryPoints.old.map((p, i) => (
                  <div key={i} className={`${t.bg} rounded-lg border ${t.border} p-3 transition-all duration-200 hover:scale-[1.02]`}>
                    <p className={`${t.text} text-sm font-semibold mb-1`}>{p.feature}</p>
                    <p className={`${t.textMuted} text-xs italic`}>{p.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${t.cardBg} rounded-lg border-2 p-5`} style={{ borderColor: `${t.accentVar}60` }}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${t.textAccent}`}>After: Unified</span>
                <div className="h-px flex-1" style={{ backgroundColor: `${t.accentVar}30` }}></div>
              </div>
              <div className="space-y-2">
                {entryPoints.new.map((p, i) => (
                  <div key={i} className={`${t.bg} rounded-lg border-2 p-3 transition-all duration-200 hover:scale-[1.02]`} style={{ borderColor: `${t.accentVar}60` }}>
                    <p className={`${t.text} text-sm font-semibold mb-1`}>{p.feature}</p>
                    <p className={`text-xs font-medium ${t.textAccent}`}>{p.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <h4 className={`${t.text} text-lg font-semibold mb-1`}>Click Reduction Breakdown</h4>
            <p className={`${t.textMuted} text-sm`}>Measurable improvements across key workflows</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {clickReductions.map((item, i) => (
              <div key={i} className={`${t.cardBg} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
                <h4 className={`${t.text} text-sm font-semibold mb-3`}>{item.task}</h4>
                <div className="space-y-2">
                  <div className="pb-2 border-b" style={{ borderColor: subtleBorder }}>
                    <p className={`${t.textMuted} text-xs mb-1`}>Before</p>
                    <p className={`${t.text} text-xs`}>{item.old}</p>
                  </div>
                  <div>
                    <p className={`${t.textMuted} text-xs mb-1`}>After</p>
                    <p className={`text-sm font-bold mb-2 ${t.textAccent}`}>{item.new}</p>
                    <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold text-white" style={{ backgroundColor: t.accentVar }}>
                      {item.reduction}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t-2" style={{ borderColor: `${t.accentVar}40` }}>
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h4 className={`${t.text} text-xl font-semibold`}>Validation Sources</h4>
              <p className={`${t.textMuted} text-sm`}>Feedback from multiple stakeholders confirms the impact</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {validations.map((v, i) => (
                <div key={i} className={`${t.cardBg} rounded-lg border-2 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: `${t.accentVar}50` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: `${t.accentVar}20` }}>
                      {v.icon}
                    </div>
                    <h5 className={`${t.text} text-base font-semibold`}>{v.title}</h5>
                  </div>
                  <p className={`${t.textMuted} text-sm leading-relaxed`}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
