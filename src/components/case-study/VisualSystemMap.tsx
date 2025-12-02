'use client'

interface VisualSystemMapProps {
  isLightBackground?: boolean
}

export default function VisualSystemMap({ isLightBackground = false }: VisualSystemMapProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const subsystems = [
    { id: 1, name: 'Scheduling Workflow', description: 'Core job creation and management' },
    { id: 2, name: 'Distribution List', description: 'Who receives the reports' },
    { id: 3, name: 'Access List', description: 'Who can manage schedules' },
    { id: 4, name: 'RC Explorer', description: 'Asset viewer for schedules' },
    { id: 5, name: 'RC Status (Admin)', description: 'System configuration & dashboards' },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            The Transformation: 5 Subsystems → 1 Unified Model
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            ReportCaster wasn&apos;t a feature — it was a product inside a product. The redesign unified five independent subsystems into one coherent mental model.
          </p>
        </div>

        {/* Visual Flow */}
        <div className="relative">
          {/* Before: 5 Separate Systems */}
          <div className="space-y-6 mb-12">
            <div className="text-center">
              <span className={`${mutedColor} text-sm font-mono uppercase tracking-wider`}>Before</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {subsystems.map((subsystem, index) => (
                <div
                  key={subsystem.id}
                  className={`${bgColor} rounded-lg border ${borderColor} p-4 text-center transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: accentColor }}
                    >
                      {subsystem.id}
                    </div>
                  </div>
                  <h4 className={`${textColor} text-sm font-semibold mb-1`}>{subsystem.name}</h4>
                  <p className={`${mutedColor} text-xs leading-relaxed`}>{subsystem.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className={`${mutedColor} text-sm italic`}>
                Scattered across the product • Different entry points • Separate mental models
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center my-8">
            <div className="flex items-center gap-4">
              <div className={`h-px flex-1 ${borderColor}`}></div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: accentColor }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={`h-px flex-1 ${borderColor}`}></div>
            </div>
          </div>

          {/* After: 1 Unified System */}
          <div className="space-y-6">
            <div className="text-center">
              <span className={`${mutedColor} text-sm font-mono uppercase tracking-wider`}>After</span>
            </div>
            <div className="flex justify-center">
              <div
                className={`${bgColor} rounded-lg border-2 p-8 md:p-12 text-center max-w-2xl transition-all duration-300 hover:scale-105`}
                style={{ borderColor: accentColor }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl"
                    style={{ backgroundColor: accentColor }}
                  >
                    1
                  </div>
                </div>
                <h4 className={`${textColor} text-xl md:text-2xl font-serif mb-3`}>
                  Unified ReportCaster
                </h4>
                <p className={`${mutedColor} text-base leading-relaxed mb-4`}>
                  One coherent system with predictable entry points, consistent patterns, and a single mental model
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-6">
                  {subsystems.map((subsystem) => (
                    <div
                      key={subsystem.id}
                      className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded px-2 py-1`}
                    >
                      <p className={`${textColor} text-xs font-medium`}>{subsystem.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className={`${mutedColor} text-sm italic`}>
                Platform-native • Modal-based workflows • Unified mental model
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

