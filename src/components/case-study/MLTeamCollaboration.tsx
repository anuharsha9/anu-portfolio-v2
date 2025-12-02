'use client'

interface MLTeamCollaborationProps {
  isLightBackground?: boolean
}

export default function MLTeamCollaboration({ isLightBackground = false }: MLTeamCollaborationProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const team = [
    { role: 'Me', responsibility: 'Sole UX owner for ML Functions' },
    { role: 'Product Manager', responsibility: 'Scope, roadmap, prioritization' },
    { role: 'Principal Data Scientist', responsibility: 'ML logic, evaluation metrics, domain correctness' },
    { role: 'Engineers', responsibility: 'Core ML/analytics squad — implemented UI and backend behavior' },
    { role: 'QA Representative', responsibility: 'Edge cases, regression, error-state coverage' },
    { role: '5 SMEs', responsibility: 'Customer-facing — usability testing and realistic scenarios' },
  ]

  const timeline = [
    { phase: 'Early Phase', activities: ['Mapping legacy experience', 'Hand-drawn wireframes', 'Competitive analysis'] },
    { phase: 'Middle Phase', activities: ['Iterating on 4-step workflow', 'Resolving Train vs Run separation', 'Confusion matrix iterations', 'Weekly UX+ML meetings'] },
    { phase: 'Late Phase', activities: ['SME usability tests (5 sessions)', 'Refining error states', 'Preparing org-wide demos'] },
  ]

  const constraints = [
    { type: 'Technical', items: ['Existing WebFOCUS design system', 'Older architecture', 'Non-negotiable backend behaviors'] },
    { type: 'Resourcing', items: ['Limited engineering capacity', 'Realistic sprint constraints', 'Two ML projects simultaneously'] },
    { type: 'Product', items: ['Keep ML inside WebFOCUS', 'Demo-ready for customer conversations', 'Not just technically correct'] },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Aligning and Leading the Team
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            This wasn&apos;t just a design project — it was a cross-functional collaboration that I effectively led over 6–8 months of iterative work.
          </p>
        </div>

        {/* Team Composition */}
        <div>
          <h4 className={`${textColor} text-lg font-semibold mb-4`}>Team Composition</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, idx) => (
              <div
                key={idx}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                style={{ borderColor: accentColor + '40' }}
              >
                <h5 className={`${textColor} text-sm font-semibold mb-2`}>{member.role}</h5>
                <p className={`${mutedColor} text-xs leading-relaxed`}>{member.responsibility}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h4 className={`${textColor} text-lg font-semibold mb-4`}>Timeline (6–8 months)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {timeline.map((phase, idx) => (
              <div
                key={idx}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5`}
                style={{ borderColor: accentColor + '40' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {idx + 1}
                  </div>
                  <h5 className={`${textColor} text-sm font-semibold`}>{phase.phase}</h5>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, actIdx) => (
                    <li key={actIdx} className={`${mutedColor} text-xs flex items-start gap-2`}>
                      <span className="text-[var(--accent-teal)] mt-1">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Constraints */}
        <div>
          <h4 className={`${textColor} text-lg font-semibold mb-4`}>Constraints I Worked Within</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {constraints.map((constraint, idx) => (
              <div
                key={idx}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5`}
                style={{ borderColor: accentColor + '40' }}
              >
                <h5 className={`${textColor} text-sm font-semibold mb-3`}>{constraint.type}</h5>
                <ul className="space-y-2">
                  {constraint.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={`${mutedColor} text-xs flex items-start gap-2`}>
                      <span className="text-[var(--accent-teal)] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Note */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: accentColor }}>
          <p className={`${textColor} text-sm leading-relaxed`}>
            <span className="font-semibold" style={{ color: accentColor }}>Weekly UX + ML meetings:</span> I led these sessions — asking why certain behaviors were necessary, pushing back when suggestions added complexity without real user value, and clarifying what we would ship now versus what would move to a future release.
          </p>
        </div>

        {/* Aha Moment */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border-2 mt-6`} style={{ borderColor: accentColor + '60' }}>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <h5 className={`${textColor} text-sm font-semibold mb-2`} style={{ color: accentColor }}>Aha moment — realizing I&apos;d crossed from &quot;outsider&quot; to &quot;owner&quot;</h5>
              <p className={`${mutedColor} text-sm leading-relaxed`}>
                At some point, I stopped just asking questions and started saying: &quot;No, we&apos;re not doing that in this release — it adds complexity without value. Let&apos;s park it for v2.&quot; That&apos;s when it shifted from &quot;designer executing tickets&quot; to &quot;designer leading an ML initiative.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

