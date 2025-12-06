'use client'

import { getTheme } from '@/lib/design-system'

interface ResearchMethodsProps {
  isLightBackground?: boolean
}

export default function ResearchMethods({ isLightBackground = false }: ResearchMethodsProps) {
  const t = getTheme(isLightBackground)

  const methods = [
    { category: 'Existing Research', description: 'Inherited foundational work from previous researcher', items: ['User personas', 'User journey maps', 'Initial research findings'], icon: '📚' },
    { category: 'User Research (Proxy)', description: "Customer Support team and customer reps — primary sources for user pain points when direct research wasn't allowed", items: ['Customer Support insights (Gold A7 team)', 'Customer rep 1:1s', 'Support ticket analysis', 'Real-world usage patterns', 'Workaround behaviors'], icon: '👥' },
    { category: 'System Investigation', description: 'Black-box reverse engineering of the undocumented legacy system', items: ['Sandbox exploration', 'Hundreds of screenshots', 'Workflow mapping', 'Dialog and state documentation', 'Mind map creation'], icon: '🔍' },
    { category: 'Technical Understanding', description: 'Tribal knowledge from the original engineer and subject matter experts', items: ['Legacy engineer conversations (Yingchun Chen)', 'QA & SME interviews', 'System behavior rationale', 'Legacy logic explanation', 'Technical constraints', 'Edge case behaviors', 'Failure patterns'], icon: '⚙️' },
    { category: 'Competitive Analysis', description: 'Studying how other enterprise schedulers handled similar complexity', items: ['Industry scheduler study', 'Pattern identification', 'Opportunity mapping'], icon: '📊' },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Research Methods & Tools</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-2xl mx-auto`}>
            How I reconstructed an undocumented 40-year-old system when direct user research with customers wasn&apos;t allowed. I built understanding through existing research, support teams, customer reps, system investigation, and competitive analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((m, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border ${t.border} p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{m.icon}</span>
                <h4 className={`${t.text} text-lg font-serif`}>{m.category}</h4>
              </div>
              <p className={`${t.textMuted} text-sm mb-4 leading-relaxed`}>{m.description}</p>
              <ul className="space-y-2">
                {m.items.map((item, j) => (
                  <li key={j} className={`${t.textMuted} text-xs flex items-start gap-2`}>
                    <span className={`${t.textAccent} mt-1`}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border ${t.border} mt-8`}>
          <p className={`${t.text} text-sm leading-relaxed`}>
            <span className="font-semibold">Note:</span> Customer Support and customer reps became proxies for understanding user pain points — they were the voice of customers who couldn&apos;t speak directly to design. This approach, combined with existing research and system investigation, provided a comprehensive understanding despite enterprise research constraints.
          </p>
        </div>
      </div>
    </div>
  )
}
