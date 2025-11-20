import { VersionNode } from '@/types/caseStudy'

interface VersionTimelineProps {
  versionTimeline: VersionNode[]
}

export default function VersionTimeline({
  versionTimeline,
}: VersionTimelineProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-text text-3xl font-serif">Version Timeline</h2>
      <div className="space-y-6">
        {versionTimeline.map((version) => (
          <div key={version.id} className="border-l-2 border-surface pl-6 py-2">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-accent font-mono text-sm">{version.label}</span>
              <h3 className="text-text text-xl font-medium">{version.title}</h3>
            </div>
            <p className="text-muted">{version.description}</p>
            <p className="text-muted text-sm mt-1">
              Target: {version.targetSectionId}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

