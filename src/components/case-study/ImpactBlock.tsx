interface ImpactBlockProps {
  impactSummary: {
    heading: string
    bullets: string[]
  }
}

export default function ImpactBlock({ impactSummary }: ImpactBlockProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-text text-3xl font-serif">{impactSummary.heading}</h2>
      <ul className="list-disc list-inside space-y-2 text-muted">
        {impactSummary.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

