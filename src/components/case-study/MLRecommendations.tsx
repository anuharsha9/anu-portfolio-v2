'use client'

import { getTheme } from '@/lib/design-system'

interface MLRecommendationsProps {
  isLightBackground?: boolean
}

export default function MLRecommendations({ isLightBackground = false }: MLRecommendationsProps) {
  const t = getTheme(isLightBackground)
  const subtleBorder = isLightBackground ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'

  const recommendations = [
    { name: 'Marcus Horbach', role: 'Principal Data Scientist', company: 'Cloud Software Group', quote: 'The clarity of her designs, in spite of the underlying data science and machine learning complexity, is impressive and has greatly contributed to the success of our products. Her design solutions are rooted in a deep understanding of the purpose of the product, always leading to clean designs and products that are a genuine joy to use.' },
    { name: 'Karishma Khadge', role: 'Senior Product Manager', company: 'Cloud Software Group', quote: 'Anuja led UX design initiatives with remarkable creativity, empathy, and precision. She consistently demonstrated a deep understanding of user-centered design and the ability to translate complex product requirements into intuitive and visually engaging experiences. What truly stands out is her collaborative spirit and problem-solving mindset.' },
    { name: 'Vijay Raman', role: 'VP of Product Management', company: 'Cloud Software Group', quote: 'Anuja made a significant impact modernizing UX across our legacy enterprise products. She brings a rare combination of strategic thinking, design intuition, and the ability to work seamlessly across product, engineering, and business teams. Anuja is bold in her ideas and consistently proactive in turning complex problems into practical, user-centered solutions.' },
    { name: 'Anita George', role: 'Principal Account Technology Strategist', company: 'Cloud Software Group', quote: "During a User Acceptance Test session, Anuja observed me navigating the screen, asking targeted questions about my workflow choices and tracking my visual focus. I was highly impressed with Anuja's approach. Her design was clean, intuitive, and clearly addressed the needs of users across different skill levels." },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Validation from Cross-Functional Team</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            Recommendations and feedback from key stakeholders who worked closely on ML Functions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((r, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-l-4 p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg`} style={{ borderLeftColor: t.accentVar }}>
              <p className={`${t.text} text-base leading-relaxed mb-4 italic`}>&quot;{r.quote}&quot;</p>
              <div className="border-t pt-3" style={{ borderColor: subtleBorder }}>
                <p className={`${t.text} text-sm font-semibold`}>{r.name}</p>
                <p className={`${t.textMuted} text-xs`}>{r.role}</p>
                <p className={`${t.textMuted} text-xs`}>{r.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
