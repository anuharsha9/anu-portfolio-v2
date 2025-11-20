import Link from 'next/link'
import MotionSection from '@/components/ui/MotionSection'

export default function Home() {
  return (
    <MotionSection className="min-h-[60vh] flex flex-col justify-center">
      <div className="space-y-6">
        <h1 className="text-text text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
          I redesign systems people said couldn't be fixed.
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
          Specializing in enterprise UX and AI workflows that transform complex
          systems into intuitive experiences.
        </p>
        <div className="pt-4">
          <Link
            href="/work/reportcaster"
            className="inline-block bg-accent text-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View ReportCaster case study
          </Link>
        </div>
      </div>
    </MotionSection>
  )
}

