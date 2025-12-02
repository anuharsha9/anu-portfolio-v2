interface ImpactBlockProps {
  impactSummary: {
    heading: string
    bullets: string[]
  }
}

export default function ImpactBlock({ impactSummary }: ImpactBlockProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-[#1A1A1A] text-3xl font-serif">{impactSummary.heading}</h2>
      <ul className="list-disc list-inside space-y-2 text-[#666666]">
        {impactSummary.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

