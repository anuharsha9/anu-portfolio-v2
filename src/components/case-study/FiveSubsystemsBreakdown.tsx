'use client'

interface FiveSubsystemsBreakdownProps {
  isLightBackground?: boolean
}

export default function FiveSubsystemsBreakdown({ isLightBackground = false }: FiveSubsystemsBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const subsystems = [
    {
      id: 1,
      name: 'Scheduling Workflow',
      description: 'The core job creation and management',
      location: 'Buried under 4 clicks',
      icon: '📅',
    },
    {
      id: 2,
      name: 'Distribution List Creation',
      description: 'Who receives the reports',
      location: 'Buried under 4 clicks',
      icon: '📋',
    },
    {
      id: 3,
      name: 'Access List Creation',
      description: 'Who can manage schedules',
      location: 'Buried under 4 clicks',
      icon: '🔐',
    },
    {
      id: 4,
      name: 'RC Explorer',
      description: 'Asset viewer for viewing and filtering existing schedules',
      location: 'Hamburger menu of main product header',
      icon: '🔍',
    },
    {
      id: 5,
      name: 'RC Status (Admin)',
      description: 'Admin settings panel with dashboards and configuration options',
      location: 'Management center > admin console',
      icon: '⚙️',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Aha Moment — Discovering the Five Subsystems
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            As I documented workflows, I realized RC wasn&apos;t a feature. It was a product inside a product, made of five independent subsystems that users had to navigate separately.
          </p>
        </div>

        {/* Subsystems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsystems.map((subsystem, index) => (
            <div
              key={subsystem.id}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-4">
                {/* Icon and Number */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: accentColor + '20' }}
                  >
                    {subsystem.icon}
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: accentColor }}
                  >
                    {subsystem.id}
                  </div>
                </div>

                {/* Name */}
                <h4 className={`${textColor} text-lg font-semibold`}>{subsystem.name}</h4>

                {/* Description */}
                <p className={`${mutedColor} text-sm leading-relaxed`}>{subsystem.description}</p>

                {/* Location */}
                <div className="pt-2 border-t" style={{ borderColor: isLightBackground ? '#0000001A' : '#FFFFFF1A' }}>
                  <p className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-1`}>Location</p>
                  <p className={`${textColor} text-xs italic`}>{subsystem.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
          <p className={`${textColor} text-base leading-relaxed text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>The problem:</span> They were all scattered throughout the product. Creation of schedules and lists were buried under 4 clicks. Explorer was in the hamburger menu of the main product header. Status was buried inside management center &gt; admin console. Each subsystem had its own entry point, its own navigation, its own mental model. Users had to understand five different systems to use one product. This wasn&apos;t a UI facelift — this was structural redesign.
          </p>
          <p className={`${textColor} text-base leading-relaxed text-center mt-4`}>
            <span className="font-semibold" style={{ color: accentColor }}>The foundation:</span> This realization became the foundation for everything that followed: instead of redesigning five separate tools, I needed to unify them into one coherent system.
          </p>
        </div>
      </div>
    </div>
  )
}

