'use client'

import { getTheme } from '@/lib/design-system'

interface ThreeCriticalPivotsProps {
  isLightBackground?: boolean
}

export default function ThreeCriticalPivots({ isLightBackground = false }: ThreeCriticalPivotsProps) {
  const t = getTheme(isLightBackground)

  const pivots = [
    { number: 1, title: 'Split Train vs Run', before: 'Unified Train+Run experience', after: 'Separate tabs for distinct mental models', reason: 'We were mixing two different mental models — creating models vs applying them. Splitting them simplified both UX and implementation.' },
    { number: 2, title: 'Remove Data Flow from ML UI', before: 'Engineering wanted data flow visible inside ML UI', after: 'Data flow accessible elsewhere, ML UI stays focused', reason: 'After training models hundreds of times myself, I concluded the data flow was adding noise and risking users losing progress.' },
    { number: 3, title: 'Model Cards vs Tables', before: 'Legacy UI used tables for everything, including models', after: 'Model cards for better scanning and comparison', reason: 'Despite initial pushback, cards became the primary way to choose a model, with tables reserved for dense tabular data like training logs.' },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-6 md:p-8`}>
      <div className="space-y-3">
        <div className="text-center space-y-1">
          <h3 className={`${t.text} text-xl md:text-2xl font-serif`}>Three Critical Design Pivots</h3>
          <p className={`${t.textMuted} text-sm md:text-base max-w-2xl mx-auto`}>
            The mapping revealed the problems, but solving them required multiple iterations. Three critical pivots shaped the final design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {pivots.map((p, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ backgroundColor: t.accentVar }}>
                    {p.number}
                  </div>
                  <h4 className={`${t.text} text-base font-semibold`}>{p.title}</h4>
                </div>

                <div className="space-y-1">
                  <div className={`${t.bg} rounded p-2 border ${t.border}`}>
                    <p className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-0.5`}>Before</p>
                    <p className={`${t.textMuted} text-xs leading-tight`}>{p.before}</p>
                  </div>
                  <div className={`${t.bg} rounded p-2 border-2`} style={{ borderColor: `${t.accentVar}60` }}>
                    <p className={`text-xs font-mono uppercase tracking-wider mb-0.5 ${t.textAccent}`}>After</p>
                    <p className={`${t.text} text-xs font-medium leading-tight`}>{p.after}</p>
                  </div>
                </div>

                <div className={`${t.bg} rounded p-2 border-l-2`} style={{ borderLeftColor: t.accentVar }}>
                  <p className={`${t.textMuted} text-xs leading-relaxed`}>{p.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
