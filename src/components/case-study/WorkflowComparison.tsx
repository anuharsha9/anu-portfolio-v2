'use client'

interface WorkflowComparisonProps {
  isLightBackground?: boolean
}

export default function WorkflowComparison({ isLightBackground = false }: WorkflowComparisonProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const oldWorkflow = [
    { step: 1, action: 'Go into hub', clicks: 1, context: 'Enter workspace' },
    { step: 2, action: 'Navigate to workspaces', clicks: 1, context: 'Find workspace area' },
    { step: 3, action: 'Click plus content button', clicks: 1, context: 'Open content menu' },
    { step: 4, action: 'Drill down in context menu', clicks: 1, context: 'Navigate nested menu' },
    { step: 5, action: 'Select create schedule', clicks: 1, context: 'Final menu option' },
    { step: 6, action: 'Scheduler opens in new tab', clicks: 0, context: 'New browser tab opens' },
    { step: 7, action: 'Configure properties', clicks: 1, context: 'Required step' },
    { step: 8, action: 'Add task, set distribution, recurrence', clicks: 3, context: 'Multiple steps' },
    { step: 9, action: 'Check other settings', clicks: 1, context: 'Additional configuration' },
  ]

  const newWorkflow = [
    { step: 1, action: '+ menu → Create Schedule', clicks: 1, context: 'Modal opens immediately' },
    { step: 2, action: 'Add task', clicks: 1, context: 'Within modal' },
    { step: 3, action: 'Select distribution method', clicks: 1, context: 'Within modal' },
    { step: 4, action: 'Set recurrence', clicks: 1, context: 'Done — no properties needed' },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Workflow Transformation: 5–9 Clicks + New Tab → 4 Clicks in Modal
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            The old workflow required navigating through the hub, drilling down menus, opening a new tab, and configuring multiple properties. The new workflow is a streamlined modal experience with no new tabs.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Old Workflow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className={`${mutedColor} text-sm font-mono uppercase tracking-wider`}>Before</span>
              <span className={`${textColor} text-lg font-bold`}>5–9 Clicks + New Tab</span>
            </div>
            <div className="space-y-3">
              {oldWorkflow.map((item, index) => (
                <div
                  key={index}
                  className={`${bgColor} rounded-lg border ${borderColor} p-4 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: mutedColor.replace('text-', '').includes('666') ? '#666666' : '#999' }}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`${textColor} text-sm font-medium`}>{item.action}</p>
                        <span className={`${mutedColor} text-xs font-mono`}>{item.clicks} click</span>
                      </div>
                      <p className={`${mutedColor} text-xs italic`}>{item.context}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${bgColor} rounded-lg border-2 p-4 mt-4`} style={{ borderColor: '#999' }}>
              <p className={`${mutedColor} text-xs text-center`}>
                New tab opens • Menu drilling • Properties required • Context switching
              </p>
            </div>
          </div>

          {/* New Workflow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className={`${mutedColor} text-sm font-mono uppercase tracking-wider`}>After</span>
              <span className={`${textColor} text-lg font-bold`} style={{ color: accentColor }}>
                4 Clicks in Modal
              </span>
            </div>
            <div className="space-y-3">
              {newWorkflow.map((item, index) => (
                <div
                  key={index}
                  className={`${bgColor} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02]`}
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`${textColor} text-sm font-medium`}>{item.action}</p>
                        <span className={`${textColor} text-xs font-mono`} style={{ color: accentColor }}>
                          {item.clicks} click
                        </span>
                      </div>
                      <p className={`${mutedColor} text-xs italic`}>{item.context}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${bgColor} rounded-lg border-2 p-4 mt-4`} style={{ borderColor: accentColor }}>
              <p className={`${textColor} text-xs text-center font-medium`}>
                No new tabs • Streamlined steps • No properties needed • All in modal
              </p>
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className={`${textColor} text-3xl font-bold mb-2`} style={{ color: accentColor }}>
                44–56%
              </p>
              <p className={`${mutedColor} text-sm`}>Fewer clicks</p>
            </div>
            <div>
              <p className={`${textColor} text-3xl font-bold mb-2`} style={{ color: accentColor }}>
                0
              </p>
              <p className={`${mutedColor} text-sm`}>New tabs</p>
            </div>
            <div>
              <p className={`${textColor} text-3xl font-bold mb-2`} style={{ color: accentColor }}>
                0
              </p>
              <p className={`${mutedColor} text-sm`}>Properties to configure</p>
            </div>
            <div>
              <p className={`${textColor} text-3xl font-bold mb-2`} style={{ color: accentColor }}>
                1
              </p>
              <p className={`${mutedColor} text-sm`}>Unified modal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

