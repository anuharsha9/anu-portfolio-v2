'use client'

interface CompetitiveAnalysisBreakdownProps {
  isLightBackground?: boolean
}

export default function CompetitiveAnalysisBreakdown({ isLightBackground = false }: CompetitiveAnalysisBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const insights = {
    studied: [
      { tool: 'Power BI', note: 'Strong Azure ML integration, but layered and menu-heavy' },
      { tool: 'Tableau', note: 'Powerful Python/R integration, but ML workflows feel bolted-on' },
      { tool: 'Qlik Sense', note: 'Very powerful analytics, but expert-first with steep learning curve' },
    ],
    adopted: [
      'Strong visuals',
      'Keeping ML inside the main analytics workflow',
    ],
    avoided: [
      'Script-first setups',
      'Jargon-heavy defaults',
      'Overloaded control-heavy screens',
    ],
    different: [
      'Right-click dataset entry (natural WebFOCUS pattern)',
      'A guided 4-step flow (progressive disclosure)',
      'Progressive disclosure of hyperparameters (optional Step 4)',
      'Inline teaching text (educate while enabling)',
    ],
  }

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className={`${textColor} text-xl md:text-2xl font-serif`}>
            Competitive Analysis: What We Learned
          </h3>
          <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
            Deep study of Power BI, Tableau, and Qlik Sense revealed what worked, what failed, and where we could differentiate.
          </p>
        </div>

        {/* Compact Grid Layout - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* What We Studied */}
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4`} style={{ borderColor: accentColor + '40' }}>
            <h4 className={`${textColor} text-sm font-semibold mb-3`}>What We Studied</h4>
            <div className="space-y-2">
              {insights.studied.map((item, idx) => (
                <div key={idx} className={`${bgColor} rounded p-2 border ${borderColor}`}>
                  <p className={`${textColor} text-xs font-semibold mb-0.5`}>{item.tool}</p>
                  <p className={`${mutedColor} text-xs leading-tight`}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Adopted */}
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4`} style={{ borderColor: accentColor + '60' }}>
            <h4 className={`${textColor} text-sm font-semibold mb-3`} style={{ color: accentColor }}>What We Adopted</h4>
            <ul className="space-y-1.5">
              {insights.adopted.map((item, idx) => (
                <li key={idx} className={`${mutedColor} text-xs flex items-start gap-1.5`}>
                  <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Avoided */}
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4`} style={{ borderColor: mutedColor.replace('text-', '').includes('666') ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)' }}>
            <h4 className={`${textColor} text-sm font-semibold mb-3`}>What We Avoided</h4>
            <ul className="space-y-1.5">
              {insights.avoided.map((item, idx) => (
                <li key={idx} className={`${mutedColor} text-xs flex items-start gap-1.5`}>
                  <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Did Differently */}
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4`} style={{ borderColor: accentColor + '60' }}>
            <h4 className={`${textColor} text-sm font-semibold mb-3`} style={{ color: accentColor }}>What We Did Differently</h4>
            <ul className="space-y-1.5">
              {insights.different.map((item, idx) => (
                <li key={idx} className={`${mutedColor} text-xs flex items-start gap-1.5`}>
                  <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">→</span>
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

