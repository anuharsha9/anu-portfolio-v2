'use client'

interface ScheduleWorkflowComparisonProps {
  isLightBackground?: boolean
}

export default function ScheduleWorkflowComparison({ isLightBackground = false }: ScheduleWorkflowComparisonProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

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
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8 mt-6`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h4 className={`${textColor} text-lg md:text-xl font-serif`}>
            Workflow Transformation: From 5–9 Clicks to 4 Clicks
          </h4>
          <p className={`${mutedColor} text-sm max-w-2xl mx-auto`}>
            The old workflow required navigating through the hub, drilling down menus, opening a new tab, and configuring multiple properties. The new workflow is a streamlined modal experience.
          </p>
        </div>

        {/* Schedule Creation Workflow Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Old Workflow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Before</span>
              <span className={`${textColor} text-base font-bold`}>5–9 Clicks + New Tab</span>
            </div>
            <div className="space-y-2">
              {scheduleWorkflow.old.map((item, idx) => (
                <div
                  key={idx}
                  className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border ${borderColor} p-3 transition-all duration-300 hover:scale-[1.01]`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                      style={{ backgroundColor: '#999999' }}
                    >
                      {item.step === 'Scheduler opens in new tab' ? '→' : idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`${textColor} text-sm font-medium`}>{item.step}</p>
                        {item.clicks > 0 && (
                          <span className={`${mutedColor} text-xs font-mono`}>{item.clicks} click</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-3 mt-4`} style={{ borderColor: '#999' }}>
              <p className={`${mutedColor} text-xs text-center`}>
                New tab opens • Menu drilling • Properties required • Context switching
              </p>
            </div>
          </div>

          {/* New Workflow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>After</span>
              <span className={`${textColor} text-base font-bold`} style={{ color: accentColor }}>
                4 Clicks in Modal
              </span>
            </div>
            <div className="space-y-2">
              {scheduleWorkflow.new.map((item, idx) => (
                <div
                  key={idx}
                  className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-3 transition-all duration-300 hover:scale-[1.01]`}
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    >
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`${textColor} text-sm font-medium`}>{item.step}</p>
                        <span className={`${textColor} text-xs font-mono`} style={{ color: accentColor }}>
                          {item.clicks} click
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-3 mt-4`} style={{ borderColor: accentColor }}>
              <p className={`${textColor} text-xs text-center font-medium`}>
                {scheduleWorkflow.reduction}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

