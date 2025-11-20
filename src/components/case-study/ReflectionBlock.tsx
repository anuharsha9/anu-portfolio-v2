interface ReflectionBlockProps {
  reflectionSummary: {
    heading: string
    paragraphs: string[]
  }
}

export default function ReflectionBlock({
  reflectionSummary,
}: ReflectionBlockProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-text text-3xl font-serif">{reflectionSummary.heading}</h2>
      <div className="space-y-4 text-muted leading-relaxed">
        {reflectionSummary.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

