'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { CaseStudyData } from '@/types/caseStudy'
import MotionSection from '@/components/ui/MotionSection'
import QuickOverview from './QuickOverview'
import HeroMeta from './HeroMeta'
import UXPrinciples from './UXPrinciples'
import SectionBlock from './SectionBlock'
import PrototypeBlock from './PrototypeBlock'
import PasswordGate from './PasswordGate'
import FinalSummary from './FinalSummary'
import { CaseStudySignatureBadge, SignatureLogo, SectionDivider } from '@/components/brand'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import SocialShareButtons from '@/components/sharing/SocialShareButtons'
import RelatedCaseStudies from './RelatedCaseStudies'
import SectionNav from './SectionNav'
import CaseStudyNav from './CaseStudyNav'
import StructuredData from '@/components/structured-data/StructuredData'

// Dynamic imports for heavy components - loaded on demand
const ProcessTimelineNav = dynamic(() => import('./ProcessTimelineNav'), { ssr: false })
const ImpactVisual = dynamic(() => import('./ImpactVisual'), { ssr: false })
const ResearchMethods = dynamic(() => import('./ResearchMethods'), { ssr: false })
const PersonaCards = dynamic(() => import('./PersonaCards'), { ssr: false })
const ChallengeBreakdown = dynamic(() => import('./ChallengeBreakdown'), { ssr: false })
const TeamOnboardingProcess = dynamic(() => import('./TeamOnboardingProcess'), { ssr: false })
const SystemMappingBreakdown = dynamic(() => import('./SystemMappingBreakdown'), { ssr: false })
const LearningAndTransformation = dynamic(() => import('./LearningAndTransformation'), { ssr: false })
const VersionIteration = dynamic(() => import('./VersionIteration'), { ssr: false })
const TestimonialCard = dynamic(() => import('./TestimonialCard'), { ssr: false })
const PatternConnections = dynamic(() => import('./PatternConnections'), { ssr: false })
const ReadingProgress = dynamic(() => import('./ReadingProgress'), { ssr: false })
const MLChallengeBreakdown = dynamic(() => import('./MLChallengeBreakdown'), { ssr: false })
const MLLearningJourney = dynamic(() => import('./MLLearningJourney'), { ssr: false })
const CompetitiveAnalysisBreakdown = dynamic(() => import('./CompetitiveAnalysisBreakdown'), { ssr: false })
const MLWorkflowMapping = dynamic(() => import('./MLWorkflowMapping'), { ssr: false })
const ThreeCriticalPivots = dynamic(() => import('./ThreeCriticalPivots'), { ssr: false })
const MLTeamCollaboration = dynamic(() => import('./MLTeamCollaboration'), { ssr: false })
const LayeredDisclosureVisual = dynamic(() => import('./LayeredDisclosureVisual'), { ssr: false })
const FourStepFlowBreakdown = dynamic(() => import('./FourStepFlowBreakdown'), { ssr: false })
const EntryPointTransformation = dynamic(() => import('./EntryPointTransformation'), { ssr: false })
const MLImpactMetrics = dynamic(() => import('./MLImpactMetrics'), { ssr: false })
const SMEValidationQuotes = dynamic(() => import('./SMEValidationQuotes'), { ssr: false })
const MLLearningTransformation = dynamic(() => import('./MLLearningTransformation'), { ssr: false })
const MLPatternConnections = dynamic(() => import('./MLPatternConnections'), { ssr: false })
const MLPersonaCards = dynamic(() => import('./MLPersonaCards'), { ssr: false })
const MLRecommendations = dynamic(() => import('./MLRecommendations'), { ssr: false })
const IQChallengeBreakdown = dynamic(() => import('./IQChallengeBreakdown'), { ssr: false })
const IQPersonaCards = dynamic(() => import('./IQPersonaCards'), { ssr: false })
const IQCompetitiveAnalysis = dynamic(() => import('./IQCompetitiveAnalysis'), { ssr: false })
const IQDualPersonaJourney = dynamic(() => import('./IQDualPersonaJourney'), { ssr: false })
const IQFourPillarsBreakdown = dynamic(() => import('./IQFourPillarsBreakdown'), { ssr: false })
const IQChallengesBreakdown = dynamic(() => import('./IQChallengesBreakdown'), { ssr: false })
const IQLearningTransformation = dynamic(() => import('./IQLearningTransformation'), { ssr: false })
const IQValidationSources = dynamic(() => import('./IQValidationSources'), { ssr: false })
const IQPatternConnections = dynamic(() => import('./IQPatternConnections'), { ssr: false })

interface CaseStudyLayoutProps {
  data: CaseStudyData
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  const [showPasswordContent, setShowPasswordContent] = useState(false)
  const pathname = usePathname()

  // Scroll to top when case study loads or pathname changes
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
  }, [pathname, data.slug])

  // Check if case study is already unlocked in sessionStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageKey = `case-study-unlocked-${data.slug}`
      const isUnlocked = sessionStorage.getItem(storageKey) === 'true'
      if (isUnlocked) {
        setShowPasswordContent(true)
      }
    }
  }, [data.slug])

  const handlePasswordCorrect = () => {
    if (typeof window !== 'undefined') {
      const storageKey = `case-study-unlocked-${data.slug}`
      sessionStorage.setItem(storageKey, 'true')

      // Check if user wants to go to prototype after unlocking
      const redirectToPrototype = sessionStorage.getItem(`redirect-to-prototype-${data.slug}`) === 'true'
      if (redirectToPrototype) {
        // Clear the flag
        sessionStorage.removeItem(`redirect-to-prototype-${data.slug}`)
        // Wait a bit for content to render, then scroll to prototype
        setTimeout(() => {
          const prototypeSection = document.getElementById('prototype')
          if (prototypeSection) {
            prototypeSection.scrollIntoView({ behavior: 'smooth' })
          }
        }, 300)
      }
    }
    setShowPasswordContent(true)
  }

  return (
    <>
      <StructuredData type="caseStudy" data={data} />
      {/* Reading Progress Indicator */}
      <ReadingProgress />

      {/* Table of Contents - Sticky Navigation */}
      {/* Only show SectionNav if ProcessTimelineNav is not configured (i.e., not for RC, ML, or IQ) */}
      {data.sections && data.sections.length > 3 &&
        data.slug !== 'reportcaster' &&
        data.slug !== 'ml-functions' &&
        data.slug !== 'iq-plugin' && (
          <SectionNav sections={data.sections} />
        )}

      {/* ============================================
          PUBLIC SECTION (Visible by default)
          ============================================ */}

      {/* Hero - Dark Immersive Background */}
      <section className="relative surface-dark border-t border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Breadcrumbs */}
          <div className="pt-8 pb-4">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Work', href: '/#work-overview' },
                { label: data.heroTitle },
              ]}
            />
          </div>

          {/* Social Share Buttons */}
          <div className="pb-4">
            <SocialShareButtons
              title={data.heroTitle}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/work/${data.slug}`}
              description={data.heroSubtitle}
            />
          </div>

          <HeroMeta
            heroTitle={data.heroTitle}
            heroSubheading={data.heroSubheading}
            heroSubtitle={data.heroSubtitle}
            coverImage={data.coverImage}
            role={data.role}
            company={data.company}
            timeframe={data.timeframe}
            scope={data.scope}
            hasPrototype={!!data.prototypeMedia}
            caseStudySlug={data.slug}
            demoVideoUrl={data.quickOverview.demoVideoUrl}
            demoVideoLabel={data.quickOverview.demoVideoLabel}
            demoVideoUrl2={data.quickOverview.demoVideoUrl2}
            demoVideoLabel2={data.quickOverview.demoVideoLabel2}
            publicDemoUrl={data.quickOverview.publicDemoUrl}
            publicDemoLabel={data.quickOverview.publicDemoLabel}
          />
        </div>
      </section>

      {/* Quick Overview - light background */}
      <MotionSection className="surface-light py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 border-t border-black/5 relative">
        {/* Subtle Logo Watermark - Top Left Corner */}
        <div className="absolute top-8 left-8 opacity-[0.02] pointer-events-none hidden lg:block">
          <div className="w-24 h-24">
            <SignatureLogo className="w-full h-full text-black" />
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
          <QuickOverview data={data.quickOverview} heroSubtitle={data.heroSubtitle} caseStudySlug={data.slug} />
        </div>
      </MotionSection>

      {/* UX Principles - surface-dark-alt */}
      {data.uxPrinciples && (
        <>
          <SectionDivider isLightBackground={false} />
          <MotionSection className="surface-dark-alt py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <UXPrinciples
                title={data.uxPrinciples.title}
                intro={data.uxPrinciples.intro}
                principles={data.uxPrinciples.principles}
              />
            </div>
          </MotionSection>
        </>
      )}

      {/* Public Sections - if explicitly defined */}
      {data.publicSections &&
        data.publicSections.map((section, index) => {
          const isDiscoverySection = section.id === 'section-01' || section.id === 'section-02'
          const sectionBg =
            isDiscoverySection
              ? 'surface-light'
              : index % 2 === 0
                ? 'surface-light'
                : 'surface-dark-alt'
          const borderClass = sectionBg.includes('dark') ? 'border-white/5' : 'border-black/5'

          return (
            <div key={section.id}>
              <MotionSection
                className={`${sectionBg} py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 border-t ${borderClass}`}
              >
                <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                  <SectionBlock section={section} isLightBackground={sectionBg === 'surface-light'} caseStudySlug={data.slug} />
                </div>
              </MotionSection>

            </div>
          )
        })}

      {/* ============================================
          PASSWORD GATE
          ============================================ */}
      {!showPasswordContent && (
        <PasswordGate
          onPasswordCorrect={handlePasswordCorrect}
          password={data.passwordGate?.password}
          description={data.passwordGate?.description}
          learnItems={data.passwordGate?.learnItems}
          caseStudySlug={data.slug}
          redirectToPrototype={typeof window !== 'undefined' && sessionStorage.getItem(`redirect-to-prototype-${data.slug}`) === 'true'}
        />
      )}

      {/* ============================================
          PASSWORD-GATED SECTION (Hidden until password entered)
          ============================================ */}
      {showPasswordContent && (
        <>
          {/* Process Timeline Navigation - ReportCaster */}
          {data.slug === 'reportcaster' && (
            <ProcessTimelineNav
              phases={[
                { id: 'phase-1', phase: 'Research & Discovery', sectionId: 'section-02', duration: 'Months' },
                { id: 'phase-2', phase: 'Architecture Exploration', sectionId: 'version-iteration', duration: 'Months' },
                { id: 'phase-3', phase: 'Design & Prototyping', sectionId: 'version-iteration', duration: 'Months' },
                { id: 'phase-4', phase: 'Team Alignment', sectionId: 'section-06', duration: 'Months' },
                { id: 'phase-5', phase: 'Shipping & Impact', sectionId: 'section-07', duration: 'Launch' },
              ]}
              isLightBackground={false}
            />
          )}
          {/* Process Timeline Navigation - ML Functions */}
          {data.slug === 'ml-functions' && (
            <ProcessTimelineNav
              phases={[
                { id: 'phase-1', phase: 'Project & Learning', sectionId: 'section-01', duration: 'Months' },
                { id: 'phase-2', phase: 'Discovery & Mapping', sectionId: 'section-02', duration: 'Months' },
                { id: 'phase-3', phase: 'Architecture & Design', sectionId: 'section-03', duration: 'Months' },
                { id: 'phase-4', phase: 'Team Alignment', sectionId: 'section-04', duration: 'Months' },
                { id: 'phase-5', phase: 'Execution & Impact', sectionId: 'section-07', duration: 'Launch' },
              ]}
              isLightBackground={false}
            />
          )}
          {/* Process Timeline Navigation - IQ Plugin */}
          {data.slug === 'iq-plugin' && (
            <ProcessTimelineNav
              phases={[
                { id: 'phase-1', phase: 'Discovery & Research', sectionId: 'section-02', duration: 'Months' },
                { id: 'phase-2', phase: 'Ideation & Journeys', sectionId: 'section-03', duration: 'Months' },
                { id: 'phase-3', phase: 'Design & Prototyping', sectionId: 'section-04', duration: 'Months' },
                { id: 'phase-4', phase: 'Four Pillars', sectionId: 'section-05', duration: 'Months' },
                { id: 'phase-5', phase: 'Challenges & Alignment', sectionId: 'section-06', duration: 'Months' },
                { id: 'phase-6', phase: 'Impact & Validation', sectionId: 'section-07', duration: 'Pre-Launch' },
              ]}
              isLightBackground={false}
            />
          )}

          {/* Gated Header */}
          <MotionSection className="surface-dark py-16 md:py-24 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="space-y-4 text-center">
                <h2 className="text-white text-3xl md:text-4xl font-serif">
                  Full in-depth Case study
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Full narrative, step-by-step story, and reflections.
                </p>
              </div>
            </div>
          </MotionSection>

          {/* Password-Protected Sections (all sections except public ones) */}
          {data.sections
            .filter((section) => {
              // Exclude sections that are in publicSections
              if (data.publicSections) {
                return !data.publicSections.some((publicSection) => publicSection.id === section.id)
              }
              // If no publicSections defined, all sections are gated (backward compatibility)
              return true
            })
            .map((section, index) => {
              const isVersionSection = section.id?.startsWith('version-')
              const isDiscoverySection = section.id === 'section-01' || section.id === 'section-02'
              const isOutcomeSection = section.id === 'section-06' || section.id === 'section-07' || section.id === 'section-08'
              const isSectionTwo = section.id === 'section-02'

              // Group sections by theme for better visual flow
              let sectionBg = 'surface-light'
              if (isVersionSection) {
                sectionBg = 'surface-dark-alt'
              } else if (isDiscoverySection || isOutcomeSection) {
                sectionBg = 'surface-light'
              } else {
                sectionBg = index % 2 === 0 ? 'surface-light' : 'surface-dark-alt'
              }

              const borderClass = sectionBg.includes('dark') ? 'border-white/5' : 'border-black/5'
              const paddingClass = 'py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24'

              return (
                <div key={section.id}>
                  {/* Special handling for version-iteration section */}
                  {section.id === 'version-iteration' && (section as any).v1Data && (section as any).v2Data && (section as any).v3Data ? (
                    <MotionSection
                      id={section.id}
                      className={`${sectionBg} ${paddingClass} border-t ${borderClass}`}
                    >
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <VersionIteration
                          v1={(section as any).v1Data}
                          v2={(section as any).v2Data}
                          v3={(section as any).v3Data}
                          isLightBackground={sectionBg === 'surface-light'}
                        />
                      </div>
                    </MotionSection>
                  ) : (
                    <>
                      {/* Each section */}
                      <MotionSection
                        id={section.id}
                        className={`${sectionBg} ${paddingClass} border-t ${borderClass}`}
                      >
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <SectionBlock section={section} isLightBackground={sectionBg === 'surface-light'} caseStudySlug={data.slug} />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* Insert System Mapping Breakdown after section 2 - ReportCaster only */}
                  {isSectionTwo && data.slug === 'reportcaster' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <SystemMappingBreakdown isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* Insert Research Methods and Persona Cards after Five Subsystems - ReportCaster only */}
                  {isSectionTwo && data.slug === 'reportcaster' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <ResearchMethods isLightBackground={true} />
                        </div>
                      </MotionSection>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <PersonaCards isLightBackground={true} />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* ML Functions Visuals - Section 01 */}
                  {section.id === 'section-01' && data.slug === 'ml-functions' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <MLChallengeBreakdown isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* ML Functions Visuals - Section 02 */}
                  {isSectionTwo && data.slug === 'ml-functions' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <MLLearningJourney isLightBackground={true} />
                        </div>
                      </MotionSection>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <CompetitiveAnalysisBreakdown isLightBackground={true} />
                        </div>
                      </MotionSection>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <IQPersonaCards
                            isLightBackground={true}
                            title="User Personas"
                            description="Four distinct personas with different needs drove the design. The central tension: How do you keep the depth technical users need without overwhelming everyone else?"
                          />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* ML Functions Visuals - Section 03 */}
                  {section.id === 'section-03' && data.slug === 'ml-functions' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <MLWorkflowMapping isLightBackground={true} />
                        </div>
                      </MotionSection>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <ThreeCriticalPivots isLightBackground={true} />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* ML Functions Visuals - Section 04 */}
                  {section.id === 'section-04' && data.slug === 'ml-functions' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <MLTeamCollaboration isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* ML Functions Visuals - Section 05 */}
                  {section.id === 'section-05' && data.slug === 'ml-functions' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LayeredDisclosureVisual isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* ML Functions Visuals - Section 06 - FourStepFlowBreakdown now integrated into "The main step workflow UI" subsection */}

                  {/* Challenge Breakdown is now integrated into Section 01 */}


                  {/* Team Onboarding Process is now integrated into Section 06 */}

                  {/* Insert Impact Visual after Section 07 - ReportCaster only */}
                  {section.id === 'section-07' && data.slug === 'reportcaster' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <ImpactVisual isLightBackground={true} />
                        </div>
                      </MotionSection>
                      {/* Testimonials - ReportCaster only */}
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <div className="space-y-6">
                            <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-serif text-center">
                              Validation from the Team
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <TestimonialCard
                                quote="She impressed everyone with how quickly she grasped all aspects of a highly intricate system and translated that understanding into a clear, modern, and user-centered design. Beyond her technical and design talent, she's a collaborative, thoughtful teammate who makes every project better."
                                name="Yingchun Chen"
                                role="Principal System Software Engineer"
                                company="Cloud Software Group"
                                isLightBackground={true}
                              />
                              <TestimonialCard
                                quote="Anuja brings energy and determination to tackling complex design challenges. She approaches her work with a fearless attitude and is never afraid to explore new ideas or directions. Her enthusiasm for design and willingness to engage with stakeholders made her a valuable part of the team."
                                name="Dave Pfeiffer"
                                role="Director of Design"
                                company="Cloud Software Group"
                                isLightBackground={true}
                              />
                            </div>
                          </div>
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* ML Functions Visuals - Section 07 */}
                  {section.id === 'section-07' && data.slug === 'ml-functions' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <MLImpactMetrics isLightBackground={true} />
                        </div>
                      </MotionSection>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <MLRecommendations isLightBackground={true} />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* Insert Learning and Transformation after Section 08 - ReportCaster only */}
                  {section.id === 'section-08' && data.slug === 'reportcaster' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <LearningAndTransformation isLightBackground={true} />
                        </div>
                      </MotionSection>
                      {/* Pattern Connections Visual - ReportCaster only */}
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <PatternConnections isLightBackground={true} />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* ML Functions Visuals - Section 08 */}
                  {section.id === 'section-08' && data.slug === 'ml-functions' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <MLLearningTransformation isLightBackground={true} />
                        </div>
                      </MotionSection>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <MLPatternConnections isLightBackground={true} />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* IQ Plugin Visuals - Section 01 */}
                  {section.id === 'section-01' && data.slug === 'iq-plugin' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <IQChallengeBreakdown isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* IQ Plugin Visuals - Section 02 */}
                  {section.id === 'section-02' && data.slug === 'iq-plugin' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <IQCompetitiveAnalysis isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* IQ Plugin Visuals - Section 03 */}
                  {section.id === 'section-03' && data.slug === 'iq-plugin' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <IQPersonaCards isLightBackground={true} />
                        </div>
                      </MotionSection>
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <IQDualPersonaJourney isLightBackground={true} />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* IQ Plugin Visuals - Section 05 */}
                  {section.id === 'section-05' && data.slug === 'iq-plugin' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <IQFourPillarsBreakdown isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* IQ Plugin Visuals - Section 06 */}
                  {section.id === 'section-06' && data.slug === 'iq-plugin' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <IQChallengesBreakdown isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* IQ Plugin Visuals - Section 07 */}
                  {section.id === 'section-07' && data.slug === 'iq-plugin' && (
                    <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <IQValidationSources isLightBackground={true} />
                      </div>
                    </MotionSection>
                  )}

                  {/* IQ Plugin Visuals - Section 08 */}
                  {section.id === 'section-08' && data.slug === 'iq-plugin' && (
                    <>
                      <MotionSection className="surface-light py-16 md:py-24">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <IQLearningTransformation isLightBackground={true} />
                        </div>
                      </MotionSection>
                      {/* Pattern Connections Visual - IQ Plugin */}
                      <MotionSection className="surface-light py-16 md:py-24 border-t border-black/5">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <IQPatternConnections isLightBackground={true} />
                        </div>
                      </MotionSection>
                    </>
                  )}

                  {/* Insert PrototypeBlock after version-iteration (ReportCaster) */}
                  {section.id === 'version-iteration' && data.slug === 'reportcaster' && (
                    <MotionSection className="surface-dark py-16 md:py-24 border-t border-white/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <PrototypeBlock prototypeMedia={data.prototypeMedia} caseStudySlug={data.slug} />
                      </div>
                    </MotionSection>
                  )}

                  {/* Insert PrototypeBlock after Section 05 (IQ Plugin) */}
                  {section.id === 'section-05' && data.slug === 'iq-plugin' && data.prototypeMedia && (
                    <MotionSection id="prototype" className="surface-dark py-16 md:py-24 border-t border-white/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <PrototypeBlock prototypeMedia={data.prototypeMedia} caseStudySlug={data.slug} />
                      </div>
                    </MotionSection>
                  )}

                  {/* Insert PrototypeBlock after Section 06 (ML Functions) */}
                  {section.id === 'section-06' && data.slug === 'ml-functions' && data.prototypeMedia && (
                    <MotionSection id="prototype" className="surface-dark py-16 md:py-24 border-t border-white/5">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <PrototypeBlock prototypeMedia={data.prototypeMedia} caseStudySlug={data.slug} />
                      </div>
                    </MotionSection>
                  )}
                </div>
              )
            })}

          {/* Process Timeline removed - redundant with ProcessTimelineNav */}

          {/* Final Summary Section */}
          {/* FinalSummary is now combined with Section 08 */}

          {/* Related Case Studies */}
          <RelatedCaseStudies currentSlug={data.slug} />

          {/* Case Study Signature Badge */}
          <MotionSection className="surface-light py-8 md:py-12 border-t border-black/5">
            <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="flex justify-center">
                <CaseStudySignatureBadge />
              </div>
            </div>
          </MotionSection>
        </>
      )}

    </>
  )
}
