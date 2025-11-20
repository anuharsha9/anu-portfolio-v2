import { QuickOverview as QuickOverviewType } from '@/types/caseStudy'

interface QuickOverviewProps {
  data: QuickOverviewType
}

export default function QuickOverview({ data }: QuickOverviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-text text-2xl font-serif">{data.title}</h2>
        <p className="text-muted mt-2">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-text font-medium mb-2">What the system was</h3>
          <p className="text-muted">{data.whatTheSystemWas}</p>
        </div>
        <div>
          <h3 className="text-text font-medium mb-2">My role</h3>
          <p className="text-muted">{data.myRole}</p>
        </div>
      </div>
      <div>
        <h3 className="text-text font-medium mb-2">Key actions</h3>
        <ul className="list-disc list-inside space-y-1 text-muted">
          {data.keyActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-text font-medium mb-2">Impact metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.impactMetrics.map((metric, index) => (
            <div key={index}>
              <div className="text-accent text-2xl font-medium">{metric.value}</div>
              <div className="text-muted text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

