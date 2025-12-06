'use client'

import { getTheme } from '@/lib/design-system'

interface ScheduleWorkflowComparisonProps {
  isLightBackground?: boolean
}

export default function ScheduleWorkflowComparison({ isLightBackground = false }: ScheduleWorkflowComparisonProps) {
  const t = getTheme(isLightBackground)

  const scheduleWorkflow = {
    old: [
      { step: 'Go into hub', clicks: 1 },
      { step: 'Navigate to workspaces', clicks: 1 },
      { step: 'Click plus content button', clicks: 1 },
      { step: 'Drill down in context menu', clicks: 1 },
      { step: 'Select create schedule', clicks: 1 },
      { step: 'Scheduler opens in new tab', clicks: 0 },
      { step: 'Configure properties', clicks: 1 },
      { step: 'Add task, set distribution, recurrence', clicks: 3 },
      { step: 'Check other settings', clicks: 1 },
    ],
    new: [
      { step: '+ menu → Create Schedule', clicks: 1 },
      { step: 'Add task', clicks: 1 },
      { step: 'Select distribution method', clicks: 1 },
      { step: 'Set recurrence', clicks: 1 },
    ],
    reduction: '83% fewer clicks, no new tabs',
  }

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-6 md:p-8 mt-6`}>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h4 className={`${t.text} text-lg md:text-xl font-serif`}>Workflow Transformation: From 5–9 Clicks to 4 Clicks</h4>
          <p className={`${t.textMuted} text-sm max-w-2xl mx-auto`}>
            The old workflow required navigating through the hub, drilling down menus, opening a new tab, and configuring multiple properties. The new workflow is a streamlined modal experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>Before</span>
              <span className={`${t.text} text-base font-bold`}>5–9 Clicks + New Tab</span>
            </div>
            <div className="space-y-2">
              {scheduleWorkflow.old.map((item, idx) => (
                <div key={idx} className={`${t.cardBg} rounded-lg border ${t.border} p-3 transition-all duration-300 hover:scale-[1.01]`}>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ backgroundColor: '#999999' }}>
                      {item.step === 'Scheduler opens in new tab' ? '→' : idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`${t.text} text-sm font-medium`}>{item.step}</p>
                        {item.clicks > 0 && <span className={`${t.textMuted} text-xs font-mono`}>{item.clicks} click</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${t.cardBg} rounded-lg border-2 p-3 mt-4`} style={{ borderColor: '#999' }}>
              <p className={`${t.textMuted} text-xs text-center`}>New tab opens • Menu drilling • Properties required • Context switching</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>After</span>
              <span className={`text-base font-bold ${t.textAccent}`}>4 Clicks in Modal</span>
            </div>
            <div className="space-y-2">
              {scheduleWorkflow.new.map((item, idx) => (
                <div key={idx} className={`${t.cardBg} rounded-lg border-2 p-3 transition-all duration-300 hover:scale-[1.01]`} style={{ borderColor: t.accentVar }}>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ backgroundColor: t.accentVar }}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`${t.text} text-sm font-medium`}>{item.step}</p>
                        <span className={`text-xs font-mono ${t.textAccent}`}>{item.clicks} click</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${t.cardBg} rounded-lg border-2 p-3 mt-4`} style={{ borderColor: t.accentVar }}>
              <p className={`${t.text} text-xs text-center font-medium`}>{scheduleWorkflow.reduction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
