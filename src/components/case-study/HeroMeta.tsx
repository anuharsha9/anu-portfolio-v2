interface HeroMetaProps {
  heroTitle: string
  heroSubtitle: string
  role: string
  company: string
  timeframe: string
  scope: string[]
}

export default function HeroMeta({
  heroTitle,
  heroSubtitle,
  role,
  company,
  timeframe,
  scope,
}: HeroMetaProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-text text-4xl md:text-5xl font-serif mb-2">
          {heroTitle}
        </h1>
        <p className="text-muted text-lg">{heroSubtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="text-muted">Role:</span>{' '}
          <span className="text-text">{role}</span>
        </div>
        <div>
          <span className="text-muted">Company:</span>{' '}
          <span className="text-text">{company}</span>
        </div>
        <div>
          <span className="text-muted">Timeframe:</span>{' '}
          <span className="text-text">{timeframe}</span>
        </div>
        <div>
          <span className="text-muted">Scope:</span>{' '}
          <span className="text-text">{scope.join(', ')}</span>
        </div>
      </div>
    </div>
  )
}

