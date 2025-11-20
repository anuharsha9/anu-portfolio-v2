'use client'

import { CaseStudyData } from '@/types/caseStudy'
import MotionSection from '@/components/ui/MotionSection'
import QuickOverview from './QuickOverview'
import HeroMeta from './HeroMeta'
import VersionTimeline from './VersionTimeline'
import SectionBlock from './SectionBlock'
import PrototypeBlock from './PrototypeBlock'
import ImpactBlock from './ImpactBlock'
import ReflectionBlock from './ReflectionBlock'

interface CaseStudyLayoutProps {
  data: CaseStudyData
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  // Find the index of the version-3 section to insert PrototypeBlock after it
  const versionThreeIndex = data.sections.findIndex(
    (section) => section.id === 'version-3'
  )

  return (
    <>
      <MotionSection>
        <HeroMeta
          heroTitle={data.heroTitle}
          heroSubtitle={data.heroSubtitle}
          role={data.role}
          company={data.company}
          timeframe={data.timeframe}
          scope={data.scope}
        />
      </MotionSection>

      <MotionSection>
        <QuickOverview data={data.quickOverview} />
      </MotionSection>

      <MotionSection>
        <VersionTimeline versionTimeline={data.versionTimeline} />
      </MotionSection>

      {data.sections.map((section, index) => {
        const isVersionThree = section.id === 'version-3'
        return (
          <div key={section.id}>
            <MotionSection>
              <SectionBlock section={section} />
            </MotionSection>
            {/* Insert PrototypeBlock immediately after version-3 section */}
            {isVersionThree && (
              <PrototypeBlock prototypeMedia={data.prototypeMedia} />
            )}
          </div>
        )
      })}

      <MotionSection>
        <ImpactBlock impactSummary={data.impactSummary} />
      </MotionSection>

      <MotionSection>
        <ReflectionBlock reflectionSummary={data.reflectionSummary} />
      </MotionSection>
    </>
  )
}

