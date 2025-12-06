'use client'

import { getTheme } from '@/lib/design-system'

interface CompetitiveAnalysisBreakdownProps {
  isLightBackground?: boolean
}

export default function CompetitiveAnalysisBreakdown({ isLightBackground = false }: CompetitiveAnalysisBreakdownProps) {
  const t = getTheme(isLightBackground)
  const subtleBorder = isLightBackground ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'

  const insights = {
    studied: [
      { tool: 'Power BI', note: 'Strong Azure ML integration, but layered and menu-heavy' },
      { tool: 'Tableau', note: 'Powerful Python/R integration, but ML workflows feel bolted-on' },
      { tool: 'Qlik Sense', note: 'Very powerful analytics, but expert-first with steep learning curve' },
    ],
    adopted: ['Strong visuals', 'Keeping ML inside the main analytics workflow'],
    avoided: ['Script-first setups', 'Jargon-heavy defaults', 'Overloaded control-heavy screens'],
    different: ['Right-click dataset entry (natural WebFOCUS pattern)', 'A guided 4-step flow (progressive disclosure)', 'Progressive disclosure of hyperparameters (optional Step 4)', 'Inline teaching text (educate while enabling)'],
  }

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-6 md:p-8`}>
      <div className="space-y-3">
        <div className="text-center space-y-1">
          <h3 className={`${t.text} text-xl md:text-2xl font-serif`}>Competitive Analysis: What We Learned</h3>
          <p className={`${t.textMuted} text-sm md:text-base max-w-2xl mx-auto`}>
            Deep study of Power BI, Tableau, and Qlik Sense revealed what worked, what failed, and where we could differentiate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className={`${t.cardBg} rounded-lg border-2 p-3`} style={{ borderColor: `${t.accentVar}40` }}>
            <h4 className={`${t.text} text-sm font-semibold mb-2`}>What We Studied</h4>
            <div className="space-y-1">
              {insights.studied.map((item, i) => (
                <div key={i} className={`${t.bg} rounded p-2 border ${t.border}`}>
                  <p className={`${t.text} text-xs font-semibold mb-0.5`}>{item.tool}</p>
                  <p className={`${t.textMuted} text-xs leading-tight`}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${t.cardBg} rounded-lg border-2 p-3`} style={{ borderColor: `${t.accentVar}60` }}>
            <h4 className={`text-sm font-semibold mb-2 ${t.textAccent}`}>What We Adopted</h4>
            <ul className="space-y-1">
              {insights.adopted.map((item, i) => (
                <li key={i} className={`${t.textMuted} text-xs flex items-start gap-1.5`}>
                  <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${t.cardBg} rounded-lg border-2 p-3`} style={{ borderColor: subtleBorder }}>
            <h4 className={`${t.text} text-sm font-semibold mb-2`}>What We Avoided</h4>
            <ul className="space-y-1">
              {insights.avoided.map((item, i) => (
                <li key={i} className={`${t.textMuted} text-xs flex items-start gap-1.5`}>
                  <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${t.cardBg} rounded-lg border-2 p-3`} style={{ borderColor: `${t.accentVar}60` }}>
            <h4 className={`text-sm font-semibold mb-2 ${t.textAccent}`}>What We Did Differently</h4>
            <ul className="space-y-1">
              {insights.different.map((item, i) => (
                <li key={i} className={`${t.textMuted} text-xs flex items-start gap-1.5`}>
                  <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
