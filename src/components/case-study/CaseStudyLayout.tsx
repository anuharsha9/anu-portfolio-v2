'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { CaseStudyData } from '@/types/caseStudy'
import MotionSection from '@/components/ui/MotionSection'
import QuickOverview from './QuickOverview'
import HeroMeta from './HeroMeta'
import UXPrinciples from './UXPrinciples'
import SectionBlock from './SectionBlock'
import PrototypeBlock from './PrototypeBlock'
import PasswordGate from './PasswordGate'
import FinalSummary from './FinalSummary'
import CaseStudySignatureBadge from '@/components/brand/CaseStudySignatureBadge'
import SignatureLogo from '@/components/brand/SignatureLogo'
import SectionDivider from '@/components/brand/SectionDivider'
import SocialShareButtons from '@/components/sharing/SocialShareButtons'
import RelatedCaseStudies from './RelatedCaseStudies'
import SectionNav from './SectionNav'
import CaseStudyNav from './CaseStudyNav'
import StructuredData from '@/components/structured-data/StructuredData'
import FrameworkConnection from './FrameworkConnection'
import LockedContent from './LockedContent'
import LetsTalkCTA from './LetsTalkCTA'
import DesignSystemShowcase from './DesignSystemShowcase'

import LoadingSpinner from '@/components/ui/LoadingSpinner'

// Dynamic imports for heavy components - loaded on demand with loading states
// Note: Next.js requires options to be object literals, not variables
const ProcessTimelineNav = dynamic(() => import('./ProcessTimelineNav'), {
  ssr: false
})
const ImpactVisual = dynamic(() => import('./ImpactVisual'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const ResearchMethods = dynamic(() => import('./ResearchMethods'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const PersonaCards = dynamic(() => import('./PersonaCards'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const DiscoveryVisual = dynamic(() => import('./DiscoveryVisual'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const TeamOnboardingProcess = dynamic(() => import('./TeamOnboardingProcess'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const SystemMappingBreakdown = dynamic(() => import('./SystemMappingBreakdown'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const LearningAndTransformation = dynamic(() => import('./LearningAndTransformation'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const VersionIteration = dynamic(() => import('./VersionIteration'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const ScheduleWorkflowComparison = dynamic(() => import('./ScheduleWorkflowComparison'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const TestimonialCard = dynamic(() => import('./TestimonialCard'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const PatternConnections = dynamic(() => import('./PatternConnections'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const ReadingProgress = dynamic(() => import('./ReadingProgress'), { ssr: false }) // No loading state needed for progress bar
const MLChallengeBreakdown = dynamic(() => import('./MLChallengeBreakdown'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const MLLearningJourney = dynamic(() => import('./MLLearningJourney'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const CompetitiveAnalysisBreakdown = dynamic(() => import('./CompetitiveAnalysisBreakdown'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const MLWorkflowMapping = dynamic(() => import('./MLWorkflowMapping'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const ThreeCriticalPivots = dynamic(() => import('./ThreeCriticalPivots'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const MLTeamCollaboration = dynamic(() => import('./MLTeamCollaboration'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const LayeredDisclosureVisual = dynamic(() => import('./LayeredDisclosureVisual'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const EntryPointTransformation = dynamic(() => import('./EntryPointTransformation'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const MLImpactMetrics = dynamic(() => import('./MLImpactMetrics'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const MLPatternConnections = dynamic(() => import('./MLPatternConnections'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const MLPersonaCards = dynamic(() => import('./MLPersonaCards'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const UnifiedSubsystemsVisual = dynamic(() => import('./UnifiedSubsystemsVisual'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const MLRecommendations = dynamic(() => import('./MLRecommendations'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQChallengeBreakdown = dynamic(() => import('./IQChallengeBreakdown'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQPersonaCards = dynamic(() => import('./IQPersonaCards'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQCompetitiveAnalysis = dynamic(() => import('./IQCompetitiveAnalysis'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQDualPersonaJourney = dynamic(() => import('./IQDualPersonaJourney'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQFourPillarsBreakdown = dynamic(() => import('./IQFourPillarsBreakdown'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQChallengesBreakdown = dynamic(() => import('./IQChallengesBreakdown'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
// IQLearningTransformation removed - content integrated into section body
const IQValidationSources = dynamic(() => import('./IQValidationSources'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const ReportCasterTimeline = dynamic(() => import('./ReportCasterTimeline'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const ReportCasterArchitecture = dynamic(() => import('./ReportCasterArchitecture'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const MLFunctionsTimeline = dynamic(() => import('./MLFunctionsTimeline'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQPluginTimeline = dynamic(() => import('./IQPluginTimeline'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQPluginArchitecture = dynamic(() => import('./IQPluginArchitecture'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const VideoEmbed = dynamic(() => import('./VideoEmbed'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})
const IQPatternConnections = dynamic(() => import('./IQPatternConnections'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})

interface CaseStudyLayoutProps {
  data: CaseStudyData
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  // Initialize based on passwordGate - if passwordGate exists, start locked (false)
  // If no passwordGate, start unlocked (true)
  // FOR IQ PLUGIN: Always start locked, only unlock via useEffect after checking sessionStorage
  const [showPasswordContent, setShowPasswordContent] = useState(() => {
    // Always start locked if passwordGate exists (especially for IQ Plugin)
    if (data.passwordGate) {
      // IQ Plugin: Always start locked, never check sessionStorage in initial state
      if (data.slug === 'iq-plugin') {
        return false
      }
      // Other case studies: Check sessionStorage on client side
      if (typeof window !== 'undefined') {
        try {
          const storageKey = `case-study-unlocked-${data.slug}`
          const caseUnlocked = sessionStorage.getItem(storageKey) === 'true'
          const globalUnlocked = sessionStorage.getItem('portfolio-globally-unlocked') === 'true'
          return !!(globalUnlocked || caseUnlocked)
        } catch (e) {
          return false
        }
      }
      // On server side, always start locked
      return false
    }
    // No password gate, always show content
    return true
  })
  const pathname = usePathname()

  // Scroll to top when case study loads or pathname changes
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
  }, [pathname, data.slug])

  // Check if case study is already unlocked in sessionStorage
  // IQ Plugin requires its own specific unlock (doesn't respect global unlock)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (data.passwordGate) {
        const storageKey = `case-study-unlocked-${data.slug}`
        const caseUnlocked = sessionStorage.getItem(storageKey) === 'true'

        // IQ Plugin requires its own specific unlock (doesn't respect global unlock)
        if (data.slug === 'iq-plugin') {
          setShowPasswordContent(caseUnlocked)
        } else {
          // Other case studies respect both global and case-specific unlock
          const globalUnlocked = sessionStorage.getItem('portfolio-globally-unlocked') === 'true'
          setShowPasswordContent(globalUnlocked || caseUnlocked)
        }
      } else {
        // If no password gate, always show content
        setShowPasswordContent(true)
      }

      // Update ML/RC unlock status
      if (data.slug === 'ml-functions' || data.slug === 'reportcaster') {
        const storageKey = 'portfolio-globally-unlocked'
        const caseKey = `case-study-unlocked-${data.slug}`
        const globalUnlocked = sessionStorage.getItem(storageKey) === 'true'
        const caseUnlocked = sessionStorage.getItem(caseKey) === 'true'
        setMlRcUnlocked(globalUnlocked || caseUnlocked)
      }
    }
  }, [data.slug, data.passwordGate])

  // Listen for unlock events for ML/RC
  useEffect(() => {
    if ((data.slug === 'ml-functions' || data.slug === 'reportcaster') && typeof window !== 'undefined') {
      const handleUnlock = () => {
        const storageKey = 'portfolio-globally-unlocked'
        const caseKey = `case-study-unlocked-${data.slug}`
        const globalUnlocked = sessionStorage.getItem(storageKey) === 'true'
        const caseUnlocked = sessionStorage.getItem(caseKey) === 'true'
        setMlRcUnlocked(globalUnlocked || caseUnlocked)
      }

      window.addEventListener('storage', handleUnlock)
      window.addEventListener('portfolio-unlocked', handleUnlock)

      // Poll less frequently for better performance (reduced from 500ms to 2000ms)
      const interval = setInterval(handleUnlock, 2000)

      return () => {
        window.removeEventListener('storage', handleUnlock)
        window.removeEventListener('portfolio-unlocked', handleUnlock)
        clearInterval(interval)
      }
    }
  }, [data.slug])

  // Password state for IQ Plugin inline input
  const [iqPassword, setIqPassword] = useState('')
  const [iqError, setIqError] = useState('')

  // Password state for ML and RC case studies
  const [mlRcPassword, setMlRcPassword] = useState('')
  const [mlRcError, setMlRcError] = useState('')
  const [mlRcUnlocked, setMlRcUnlocked] = useState(() => {
    if (typeof window !== 'undefined' && (data.slug === 'ml-functions' || data.slug === 'reportcaster')) {
      const storageKey = 'portfolio-globally-unlocked'
      const caseKey = `case-study-unlocked-${data.slug}`
      const globalUnlocked = sessionStorage.getItem(storageKey) === 'true'
      const caseUnlocked = sessionStorage.getItem(caseKey) === 'true'
      return globalUnlocked || caseUnlocked
    }
    return false
  })

  const handlePasswordCorrect = () => {
    if (typeof window !== 'undefined') {
      const storageKey = `case-study-unlocked-${data.slug}`

      // IQ Plugin only sets its own unlock (doesn't set global unlock)
      if (data.slug === 'iq-plugin') {
        sessionStorage.setItem(storageKey, 'true')
      } else {
        // Other case studies set both global unlock and case-specific unlock
        sessionStorage.setItem('portfolio-globally-unlocked', 'true')
        sessionStorage.setItem(storageKey, 'true')
      }

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

  const handleIqPasswordSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }

    const trimmedPassword = iqPassword.trim().toLowerCase()
    const correctPassword = data.passwordGate?.password || 'anu-access'

    if (trimmedPassword === correctPassword.toLowerCase()) {
      setIqError('')
      handlePasswordCorrect()
    } else {
      setIqError('Incorrect password. Please try again.')
    }
  }

  const handleMlRcPasswordSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }

    const trimmedPassword = mlRcPassword.trim().toLowerCase()
    const correctPassword = 'anu-access'

    if (trimmedPassword === correctPassword.toLowerCase()) {
      setMlRcError('')
      handlePasswordCorrect()
    } else {
      setMlRcError('Incorrect password. Please try again.')
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

  return (
    <>
      <StructuredData type="caseStudy" data={data} />
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Case Studies',
                item: `${siteUrl}/#work-overview`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: data.heroTitle,
                item: `${siteUrl}/work/${data.slug}/`,
              },
            ],
          }),
        }}
      />
      {/* Reading Progress Indicator */}
      <ReadingProgress />

      {/* Table of Contents - Sticky Navigation */}
      {/* Section Navigation - shows on all case study pages */}
      {data.sections && data.sections.length > 0 && (
        <SectionNav sections={data.sections} />
      )}

      {/* ============================================
          PUBLIC SECTION (Visible by default)
          ============================================ */}

      {/* Hero - Dark Immersive Background */}
      {/* Show locked hero if passwordGate exists AND content is not unlocked */}
      {data.passwordGate && !showPasswordContent ? (
        /* Locked Hero View - Custom for IQ Plugin to match home page style */
        data.slug === 'iq-plugin' ? (
          <section className="relative surface-light overflow-hidden min-h-[80vh] flex items-center">
            <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
              <div className="max-w-2xl mx-auto text-center space-y-8 py-16 md:py-24">
                {/* Lock Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <svg
                    className="w-16 h-16 md:w-20 md:h-20 text-[var(--text-muted-light)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-[var(--text-primary-light)] text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
                >
                  {data.heroTitle || 'IQ Plugin Case Study'}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed"
                >
                  {data.passwordGate?.description || 'This case study contains confidential company information and cannot be made public. Enter the password to view the full case study.'}
                </motion.p>

                {/* Password Input with Circular Button - Same as home page */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="pt-6 w-full max-w-md mx-auto"
                >
                  <form onSubmit={handleIqPasswordSubmit} className="w-full">
                    <div className="flex items-center gap-3">
                      <input
                        type="password"
                        value={iqPassword}
                        onChange={(e) => {
                          setIqPassword(e.target.value)
                          setIqError('')
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleIqPasswordSubmit()
                          }
                        }}
                        placeholder="Enter password"
                        className="flex-1 px-4 py-3 rounded-full border border-black/20 text-[var(--text-primary-light)] bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:border-transparent placeholder:text-[var(--text-muted-light)] shadow-sm"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent-teal)] text-white flex items-center justify-center hover:bg-[var(--accent-teal-soft)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:ring-offset-2 shadow-md"
                        aria-label="Submit password"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                    {iqError && (
                      <p className="mt-2 text-sm text-red-600 text-center">{iqError}</p>
                    )}
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        ) : (
          /* Default Locked Hero View for other case studies */
          <section className="relative surface-light overflow-hidden min-h-[80vh] flex items-center">
            <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">

              <div className="max-w-2xl mx-auto text-center space-y-8 py-16 md:py-24">
                {/* Lock Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <svg
                    className="w-16 h-16 md:w-20 md:h-20 text-[var(--text-muted-light)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-[var(--text-primary-light)] text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
                >
                  Unification of all ML and AI features project.
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed"
                >
                  This case study is locked due to confidential company information and can&apos;t be made public. Please enter password to view this case study.
                </motion.p>
              </div>
            </div>
          </section>
        )
      ) : (
        /* Normal Hero View */
        <section className="relative surface-light overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-20">
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
              testimonialName={
                data.slug === 'reportcaster' ? 'Yingchun Chen' :
                  data.slug === 'ml-functions' ? 'Marcus Horbach' :
                    data.slug === 'iq-plugin' ? 'Anita George' : undefined
              }
              demoVideoUrl={data.quickOverview.demoVideoUrl}
              demoVideoLabel={data.quickOverview.demoVideoLabel}
              demoVideoUrl2={data.quickOverview.demoVideoUrl2}
              demoVideoLabel2={data.quickOverview.demoVideoLabel2}
              dataSheetUrl={data.quickOverview.dataSheetUrl}
              status={data.status}
              dataSheetLabel={data.quickOverview.dataSheetLabel}
              publicDemoUrl={data.quickOverview.publicDemoUrl}
              publicDemoLabel={data.quickOverview.publicDemoLabel}
              shareUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/work/${data.slug}`}
            />
          </div>
        </section>
      )}

      {/* ============================================
          PASSWORD GATE (Show first if case study is locked)
          ============================================ */}
      {!showPasswordContent && data.passwordGate && (
        <PasswordGate
          onPasswordCorrect={handlePasswordCorrect}
          password={data.passwordGate.password}
          description={data.passwordGate.description}
          learnItems={data.passwordGate.learnItems}
          caseStudySlug={data.slug}
          redirectToPrototype={typeof window !== 'undefined' && sessionStorage.getItem(`redirect-to-prototype-${data.slug}`) === 'true'}
        />
      )}

      {/* ============================================
          PASSWORD UNLOCK SECTION FOR ML AND RC (Before Quick Overview)
          ============================================ */}
      {(data.slug === 'ml-functions' || data.slug === 'reportcaster') && (() => {
        // Check if unlocked in sessionStorage - show password UI if NOT unlocked
        if (typeof window !== 'undefined') {
          const storageKey = 'portfolio-globally-unlocked'
          const caseKey = `case-study-unlocked-${data.slug}`
          const globalUnlocked = sessionStorage.getItem(storageKey) === 'true'
          const caseUnlocked = sessionStorage.getItem(caseKey) === 'true'
          const isUnlocked = globalUnlocked || caseUnlocked
          return !isUnlocked
        }
        return true // Show on server side (SSR) - will be hidden by useEffect if unlocked
      })() && (
          <MotionSection className="surface-light py-8 md:py-12">
            <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-[var(--text-primary-light)] text-base md:text-lg leading-relaxed">
                    Parts of the case study are locked due to sensitive company data and NDA restrictions. To unlock them all enter password here or continue scrolling to see the public version.
                  </p>
                </div>

                {/* Password Input with Circular Button */}
                <form onSubmit={handleMlRcPasswordSubmit} className="w-full max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <input
                      type="password"
                      value={mlRcPassword}
                      onChange={(e) => {
                        setMlRcPassword(e.target.value)
                        setMlRcError('')
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleMlRcPasswordSubmit()
                        }
                      }}
                      placeholder="Enter password"
                      className="flex-1 px-4 py-3 rounded-full border border-black/20 text-[var(--text-primary-light)] bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:border-transparent placeholder:text-[var(--text-muted-light)] shadow-sm"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent-teal)] text-white flex items-center justify-center hover:bg-[var(--accent-teal-soft)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:ring-offset-2 shadow-md"
                      aria-label="Submit password"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                  {mlRcError && (
                    <p className="mt-2 text-sm text-red-600 text-center">{mlRcError}</p>
                  )}
                </form>

                {/* Contact link */}
                <div className="pt-4 text-center">
                  <a
                    href="/#lets-talk"
                    className="text-[var(--text-muted-light)] hover:text-[var(--accent-teal)] text-sm transition-colors underline"
                  >
                    Contact me for password
                  </a>
                </div>
              </div>
            </div>
          </MotionSection>
        )}

      {/* ============================================
          CASE STUDY CONTENT (Only visible when unlocked)
          ============================================ */}
      {(showPasswordContent || !data.passwordGate) && (
        <>
          {/* Quick Overview - light background */}
          <MotionSection className="surface-light py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 relative">
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

          {/* Prototype Block - Transformation in Motion (Before Framework) */}
          {data.prototypeMedia && (
            <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <PrototypeBlock
                prototypeMedia={data.prototypeMedia}
                caseStudySlug={data.slug}
                isLightBackground={false}
                password={data.passwordGate?.password || 'anu-access'}
              />
            </div>
          )}
        </>
      )}

      {/* D.E.S.I.G.N. Framework Navigation - REMOVED: Now using SectionNav instead */}

      {/* ============================================
          CASE STUDY CONTENT (Only visible when unlocked)
          ============================================ */}
      {(showPasswordContent || !data.passwordGate) && (
        <>

          {/* D.E.S.I.G.N. Framework Connection - surface-light */}
          {data.frameworkConnection && (
            <MotionSection id="framework-connection" className="surface-light py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
              <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <FrameworkConnection
                  data={data.frameworkConnection}
                  isLightBackground={true}
                  sectionMappings={(() => {
                    // Create mapping: framework letter -> sectionId
                    const mapping: Record<string, string> = {}
                    data.frameworkConnection.principles.forEach((principle) => {
                      let sectionId = ''
                      if (data.slug === 'reportcaster') {
                        if (principle.letter === 'D') sectionId = 'section-01'
                        else if (principle.letter === 'E') sectionId = 'section-02'
                        else if (principle.letter === 'S') sectionId = 'section-03'
                        else if (principle.letter === 'I') sectionId = 'version-iteration'
                        else if (principle.letter === 'G') sectionId = 'section-05'
                        else if (principle.letter === 'N') sectionId = 'section-06'
                      } else if (data.slug === 'ml-functions') {
                        if (principle.letter === 'D') sectionId = 'section-01'
                        else if (principle.letter === 'E') sectionId = 'section-02'
                        else if (principle.letter === 'S') sectionId = 'section-03'
                        else if (principle.letter === 'I') sectionId = 'section-04'
                        else if (principle.letter === 'G') sectionId = 'section-05'
                        else if (principle.letter === 'N') sectionId = 'section-06'
                      } else if (data.slug === 'iq-plugin') {
                        if (principle.letter === 'D') sectionId = 'section-01'
                        else if (principle.letter === 'E') sectionId = 'section-02'
                        else if (principle.letter === 'S') sectionId = 'section-03'
                        else if (principle.letter === 'I') sectionId = 'section-04'
                        else if (principle.letter === 'G') sectionId = 'section-05'
                        else if (principle.letter === 'N') sectionId = 'section-06'
                      }
                      if (sectionId) {
                        mapping[principle.letter] = sectionId
                      }
                    })
                    return mapping
                  })()}
                />
              </div>
            </MotionSection>
          )}

          {/* Public Sections - if explicitly defined */}
          {data.publicSections &&
            data.publicSections.map((section, index) => {
              const isDiscoverySection = section.id === 'section-01' || section.id === 'section-02'
              const sectionBg = 'surface-light'
              const borderClass = sectionBg.includes('dark') ? 'border-refined-dark' : 'border-refined-light'

              return (
                <div key={section.id}>
                  <MotionSection
                    className={`${sectionBg} py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 border-t ${borderClass}`}
                  >
                    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                      <SectionBlock
                        section={section}
                        isLightBackground={sectionBg === 'surface-light'}
                        caseStudySlug={data.slug}
                        isUnlocked={showPasswordContent}
                        password={data.passwordGate?.password || 'anu-access'}
                      />
                    </div>
                  </MotionSection>

                </div>
              )
            })}
        </>
      )}

      {/* ============================================
          ALL SECTIONS (Only visible when unlocked)
          ============================================ */}
      {(showPasswordContent || !data.passwordGate) && data.frameworkConnection && (
        <>
          {/* Gated Header */}
          <MotionSection className="surface-light py-8 md:py-12">
            <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="space-y-4 text-center">
                <h2 className="text-[var(--text-primary-light)] text-3xl md:text-4xl font-serif">
                  Full in-depth Case study
                </h2>
                <p className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
                  Full narrative, step-by-step story, and reflections.
                </p>
              </div>
            </div>
          </MotionSection>

          {/* All Sections (always visible, sensitive content locked) */}
          {data.sections.map((section, index) => {
            const isVersionSection = section.id?.startsWith('version-')
            const isDiscoverySection = section.id === 'section-01' || section.id === 'section-02'
            const isOutcomeSection = section.id === 'section-06' // All case studies now have 6 sections
            const isSectionTwo = section.id === 'section-02'

            // Determine if this is the last section (N - Navigate Forward)
            const isLastSection =
              (data.slug === 'reportcaster' && section.id === 'section-06') ||
              (data.slug === 'ml-functions' && section.id === 'section-06') ||
              (data.slug === 'iq-plugin' && section.id === 'section-06')

            // All sections are light now
            let sectionBg = 'surface-light'

            // Remove top borders for cleaner look - only keep if transitioning from different background
            const borderClass = '' // Removed borders for cleaner separation
            const paddingClass = 'py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20'

            return (
              <div key={section.id}>
                {/* Special handling for section-04 (version iteration) for ReportCaster */}
                {section.id === 'section-04' && data.slug === 'reportcaster' && (section as any).v1Data && (section as any).v2Data && (section as any).v3Data ? (
                  <>
                    {/* Render as proper section with header */}
                    <MotionSection
                      id={section.id}
                      className={`${sectionBg} ${paddingClass} border-t ${borderClass}`}
                    >
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        {/* Section Header */}
                        <div className="space-y-4 mb-8">
                          <div className="flex items-baseline gap-4">
                            <span className={`${sectionBg === 'surface-light' ? 'bg-black/5' : 'bg-white/10'} ${sectionBg === 'surface-light' ? 'text-[#1A1A1A]' : 'text-white'} text-base md:text-lg font-mono uppercase tracking-wider font-bold px-3 py-1.5`}>
                              {section.index}
                            </span>
                          </div>
                          <h2 className={`${sectionBg === 'surface-light' ? 'text-[#1A1A1A]' : 'text-white'} text-3xl md:text-4xl font-serif leading-snug tracking-tight`}>
                            {section.title}
                          </h2>
                          {section.summary && (
                            <div className={`${sectionBg === 'surface-light' ? 'bg-[var(--accent-teal)]/10' : 'bg-[var(--accent-teal)]/20'} p-4 md:p-5`}>
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-0.5">
                                  <svg className="w-5 h-5 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <div className={`${sectionBg === 'surface-light' ? 'text-[#666666]' : 'text-white/70'} text-xs font-mono uppercase tracking-wider mb-1`}>TL;DR</div>
                                  <p className={`${sectionBg === 'surface-light' ? 'text-[#1A1A1A]' : 'text-white'} text-sm md:text-base leading-relaxed font-medium`}>{section.summary}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Workflow Transformation Visual - Show separately (not locked) */}
                        <ScheduleWorkflowComparison isLightBackground={sectionBg === 'surface-light'} />

                        {/* Version Iteration Details - Locked */}
                        <div className="mt-8">
                          <LockedContent
                            isUnlocked={showPasswordContent}
                            password="anu-access"
                            caseStudySlug={data.slug}
                            unlockMessage="Password required to view architectural iteration details (V1, V2, V3)"
                            isLightBackground={sectionBg === 'surface-light'}
                          >
                            <VersionIteration
                              v1={(section as any).v1Data}
                              v2={(section as any).v2Data}
                              v3={(section as any).v3Data}
                              isLightBackground={sectionBg === 'surface-light'}
                            />
                          </LockedContent>
                        </div>
                      </div>
                    </MotionSection>
                  </>
                ) : (
                  <>
                    {/* Each section */}
                    <MotionSection
                      id={section.id}
                      className={`${sectionBg} ${paddingClass} border-t ${borderClass}`}
                    >
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        {/* Lock entire section-04 (Iterate) for ML Functions */}
                        {data.slug === 'ml-functions' && section.id === 'section-04' ? (
                          <LockedContent
                            password={data.passwordGate?.password || 'anu-access'}
                            caseStudySlug={data.slug}
                            unlockMessage="Password required to view iteration details and new workflow designs"
                            isLightBackground={sectionBg === 'surface-light'}
                          >
                            <SectionBlock
                              section={section}
                              isLightBackground={sectionBg === 'surface-light'}
                              caseStudySlug={data.slug}
                              isUnlocked={showPasswordContent}
                              password={data.passwordGate?.password || 'anu-access'}
                              frameworkMapping={data.frameworkConnection ? (() => {
                                // Create reverse mapping: sectionId -> framework letter
                                const mapping: Record<string, string> = {}
                                data.frameworkConnection.principles.forEach((principle) => {
                                  let sectionId = ''
                                  if (data.slug === 'reportcaster') {
                                    if (principle.letter === 'D') sectionId = 'section-01'
                                    else if (principle.letter === 'E') sectionId = 'section-02'
                                    else if (principle.letter === 'S') sectionId = 'section-03'
                                    else if (principle.letter === 'I') sectionId = 'version-iteration'
                                    else if (principle.letter === 'G') sectionId = 'section-05'
                                    else if (principle.letter === 'N') sectionId = 'section-06'
                                  } else if (data.slug === 'ml-functions') {
                                    if (principle.letter === 'D') sectionId = 'section-01'
                                    else if (principle.letter === 'E') sectionId = 'section-02'
                                    else if (principle.letter === 'S') sectionId = 'section-03'
                                    else if (principle.letter === 'I') sectionId = 'section-04'
                                    else if (principle.letter === 'G') sectionId = 'section-05'
                                    else if (principle.letter === 'N') sectionId = 'section-06'
                                  } else if (data.slug === 'iq-plugin') {
                                    if (principle.letter === 'D') sectionId = 'section-01'
                                    else if (principle.letter === 'E') sectionId = 'section-02'
                                    else if (principle.letter === 'S') sectionId = 'section-03'
                                    else if (principle.letter === 'I') sectionId = 'section-04'
                                    else if (principle.letter === 'G') sectionId = 'section-05'
                                    else if (principle.letter === 'N') sectionId = 'section-06'
                                  }
                                  // For sections that map to multiple principles, use the first one found
                                  if (sectionId && !mapping[sectionId]) {
                                    mapping[sectionId] = principle.letter
                                  }
                                })
                                return mapping
                              })() : undefined}
                            />
                          </LockedContent>
                        ) : (
                          <SectionBlock
                            section={section}
                            isLightBackground={sectionBg === 'surface-light'}
                            caseStudySlug={data.slug}
                            isUnlocked={showPasswordContent}
                            password={data.passwordGate?.password || 'anu-access'}
                            frameworkMapping={data.frameworkConnection ? (() => {
                              // Create reverse mapping: sectionId -> framework letter
                              const mapping: Record<string, string> = {}
                              data.frameworkConnection.principles.forEach((principle) => {
                                let sectionId = ''
                                if (data.slug === 'reportcaster') {
                                  if (principle.letter === 'D') sectionId = 'section-01'
                                  else if (principle.letter === 'E') sectionId = 'section-02'
                                  else if (principle.letter === 'S') sectionId = 'section-03'
                                  else if (principle.letter === 'I') sectionId = 'version-iteration'
                                  else if (principle.letter === 'G') sectionId = 'section-05'
                                  else if (principle.letter === 'N') sectionId = 'section-06'
                                } else if (data.slug === 'ml-functions') {
                                  if (principle.letter === 'D') sectionId = 'section-01'
                                  else if (principle.letter === 'E') sectionId = 'section-02'
                                  else if (principle.letter === 'S') sectionId = 'section-03'
                                  else if (principle.letter === 'I') sectionId = 'section-04'
                                  else if (principle.letter === 'G') sectionId = 'section-05'
                                  else if (principle.letter === 'N') sectionId = 'section-06'
                                } else if (data.slug === 'iq-plugin') {
                                  if (principle.letter === 'D') sectionId = 'section-01'
                                  else if (principle.letter === 'E') sectionId = 'section-02'
                                  else if (principle.letter === 'S') sectionId = 'section-03'
                                  else if (principle.letter === 'I') sectionId = 'section-04'
                                  else if (principle.letter === 'G') sectionId = 'section-05'
                                  else if (principle.letter === 'N') sectionId = 'section-06'
                                }
                                // For sections that map to multiple principles, use the first one found
                                if (sectionId && !mapping[sectionId]) {
                                  mapping[sectionId] = principle.letter
                                }
                              })
                              return mapping
                            })() : undefined}
                          />
                        )}
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* System Mapping Breakdown - Inside Section 03 (S - Simplify) - ReportCaster only */}
                {section.id === 'section-03' && data.slug === 'reportcaster' && (
                  <MotionSection className={`${sectionBg} py-8 md:py-12`}>
                    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                      <LockedContent
                        password={data.passwordGate?.password || 'anu-access'}
                        caseStudySlug={data.slug}
                        unlockMessage="Password required to view internal system mapping details"
                        isLightBackground={sectionBg === 'surface-light'}
                      >
                        <SystemMappingBreakdown isLightBackground={sectionBg === 'surface-light'} />
                      </LockedContent>
                    </div>
                  </MotionSection>
                )}

                {/* ReportCaster Timeline - Inside Section 01 (D - Discover Deeply) - ReportCaster only */}
                {section.id === 'section-01' && data.slug === 'reportcaster' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <ReportCasterTimeline isLightBackground={true} />
                  </MotionSection>
                )}

                {/* Discovery Visual - Inside Section 01 (D - Discover Deeply) - ReportCaster only */}
                {section.id === 'section-01' && data.slug === 'reportcaster' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                      <LockedContent
                        password="anu-access"
                        caseStudySlug={data.slug}
                        unlockMessage="Password required to view internal discovery details"
                        isLightBackground={true}
                      >
                        <DiscoveryVisual isLightBackground={true} />
                      </LockedContent>
                    </div>
                  </MotionSection>
                )}


                {/* Insert Research Methods and Persona Cards after Five Subsystems - ReportCaster only */}
                {isSectionTwo && data.slug === 'reportcaster' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LockedContent
                          password={data.passwordGate?.password || 'anu-access'}
                          caseStudySlug={data.slug}
                          unlockMessage="Password required to view internal research methods and company information"
                          isLightBackground={true}
                        >
                          <ResearchMethods isLightBackground={true} />
                        </LockedContent>
                      </div>
                    </MotionSection>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LockedContent
                          password="anu-access"
                          caseStudySlug={data.slug}
                          unlockMessage="Password required to view user personas"
                          isLightBackground={true}
                        >
                          <PersonaCards isLightBackground={true} />
                        </LockedContent>
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* ML Functions Timeline - Inside Section 01 */}
                {section.id === 'section-01' && data.slug === 'ml-functions' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <MLFunctionsTimeline isLightBackground={true} />
                  </MotionSection>
                )}

                {/* ML Functions Visuals - Section 01 */}
                {section.id === 'section-01' && data.slug === 'ml-functions' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                      <MLChallengeBreakdown isLightBackground={true} />
                    </div>
                  </MotionSection>
                )}

                {/* ML Functions Visuals - Section 02 */}
                {isSectionTwo && data.slug === 'ml-functions' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <MLLearningJourney isLightBackground={true} />
                      </div>
                    </MotionSection>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <CompetitiveAnalysisBreakdown isLightBackground={true} />
                      </div>
                    </MotionSection>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LockedContent
                          password="anu-access"
                          caseStudySlug={data.slug}
                          unlockMessage="Password required to view user personas"
                          isLightBackground={true}
                        >
                          <MLPersonaCards isLightBackground={true} />
                        </LockedContent>
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* ML Functions Visuals - Section 03 */}
                {section.id === 'section-03' && data.slug === 'ml-functions' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <MLWorkflowMapping isLightBackground={true} />
                      </div>
                    </MotionSection>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LockedContent
                          password={data.passwordGate?.password || 'anu-access'}
                          caseStudySlug={data.slug}
                          unlockMessage="Password required to view design pivot details"
                          isLightBackground={true}
                        >
                          <ThreeCriticalPivots isLightBackground={true} />
                        </LockedContent>
                      </div>
                    </MotionSection>
                    {/* UX Principles - In Simplify section (S) */}
                    {data.uxPrinciples && (
                      <MotionSection className="surface-light py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <UXPrinciples
                            title={data.uxPrinciples.title}
                            intro={data.uxPrinciples.intro}
                            principles={data.uxPrinciples.principles}
                            isLightBackground={true}
                          />
                        </div>
                      </MotionSection>
                    )}
                  </>
                )}

                {/* ML Functions Visuals - Section 04 */}
                {section.id === 'section-04' && data.slug === 'ml-functions' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LockedContent
                          password={data.passwordGate?.password || 'anu-access'}
                          caseStudySlug={data.slug}
                          unlockMessage="Password required to view layered disclosure strategy"
                          isLightBackground={true}
                        >
                          <LayeredDisclosureVisual isLightBackground={true} />
                        </LockedContent>
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* ML Functions Visuals - Section 05 (G - Grow Through Constraints) */}
                {section.id === 'section-05' && data.slug === 'ml-functions' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <MLTeamCollaboration isLightBackground={true} />
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* Note: FourStepFlowBreakdown content is integrated into section subsections */}
                {/* Note: Challenge Breakdown is integrated into Section 01 */}
                {/* Note: Team Onboarding Process is integrated into Section 06 */}

                {/* Insert Impact Visual after Section 06 - ReportCaster only */}
                {section.id === 'section-06' && data.slug === 'reportcaster' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <ImpactVisual isLightBackground={true} />
                      </div>
                    </MotionSection>
                    {/* Testimonials - ReportCaster only */}
                    <MotionSection className="surface-light py-8 md:py-12">
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

                {/* ML Functions Visuals - Section 06 (N - Navigate) */}
                {section.id === 'section-06' && data.slug === 'ml-functions' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <MLImpactMetrics isLightBackground={true} />
                      </div>
                    </MotionSection>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <MLRecommendations isLightBackground={true} />
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* Learning and Transformation integrated into Section 06 - ReportCaster only */}
                {/* Note: This content is now part of section-06 body */}
                {data.slug === 'reportcaster' && section.id === 'section-06' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LearningAndTransformation isLightBackground={true} />
                      </div>
                    </MotionSection>
                    {/* Pattern Connections Visual - ReportCaster only */}
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <PatternConnections isLightBackground={true} />
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* ML Functions Visuals - Section 06 (N - Navigate) */}
                {/* Note: This content is now part of section-06 body */}
                {data.slug === 'ml-functions' && section.id === 'section-06' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <MLPatternConnections isLightBackground={true} />
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* IQ Plugin Timeline - Inside Section 01 */}
                {section.id === 'section-01' && data.slug === 'iq-plugin' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <IQPluginTimeline isLightBackground={true} />
                  </MotionSection>
                )}

                {/* IQ Plugin Architecture - Inside Section 02 */}
                {section.id === 'section-02' && data.slug === 'iq-plugin' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <IQPluginArchitecture isLightBackground={true} />
                  </MotionSection>
                )}

                {/* IQ Plugin Visuals - Section 01 */}
                {section.id === 'section-01' && data.slug === 'iq-plugin' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                      <LockedContent
                        isUnlocked={showPasswordContent}
                        password="access"
                        caseStudySlug={data.slug}
                        unlockMessage="Password required to view persona and challenge details"
                        isLightBackground={true}
                      >
                        <IQChallengeBreakdown isLightBackground={true} />
                      </LockedContent>
                    </div>
                  </MotionSection>
                )}

                {/* IQ Plugin Visuals - Section 02 */}
                {section.id === 'section-02' && data.slug === 'iq-plugin' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                      <IQCompetitiveAnalysis isLightBackground={true} />
                    </div>
                  </MotionSection>
                )}

                {/* IQ Plugin Visuals - Section 03 */}
                {section.id === 'section-03' && data.slug === 'iq-plugin' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LockedContent
                          isUnlocked={showPasswordContent}
                          password="anu-access"
                          caseStudySlug={data.slug}
                          unlockMessage="Password required to view user personas"
                          isLightBackground={true}
                        >
                          <IQPersonaCards isLightBackground={true} />
                        </LockedContent>
                      </div>
                    </MotionSection>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LockedContent
                          isUnlocked={showPasswordContent}
                          password="anu-access"
                          caseStudySlug={data.slug}
                          unlockMessage="Password required to view persona journey maps"
                          isLightBackground={true}
                        >
                          <IQDualPersonaJourney isLightBackground={true} />
                        </LockedContent>
                      </div>
                    </MotionSection>
                    {/* UX Principles - In Simplify section (S) */}
                    {data.uxPrinciples && (
                      <MotionSection className="surface-light py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
                        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                          <UXPrinciples
                            title={data.uxPrinciples.title}
                            intro={data.uxPrinciples.intro}
                            principles={data.uxPrinciples.principles}
                            isLightBackground={true}
                          />
                        </div>
                      </MotionSection>
                    )}
                  </>
                )}

                {/* UX Principles - In Simplify section (S) - For ReportCaster and any case study without section-03 visuals */}
                {section.id === 'section-03' && data.uxPrinciples &&
                  !(section.id === 'section-03' && (data.slug === 'ml-functions' || data.slug === 'iq-plugin')) && (
                    <MotionSection className="surface-dark-alt py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <UXPrinciples
                          title={data.uxPrinciples.title}
                          intro={data.uxPrinciples.intro}
                          principles={data.uxPrinciples.principles}
                          isLightBackground={false}
                        />
                      </div>
                    </MotionSection>
                  )}

                {/* IQ Plugin Visuals - Section 05 */}
                {section.id === 'section-05' && data.slug === 'iq-plugin' && (
                  <MotionSection className="surface-light py-8 md:py-12">
                    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                      <LockedContent
                        isUnlocked={showPasswordContent}
                        password="access"
                        caseStudySlug={data.slug}
                        unlockMessage="Password required to view IQ four pillars breakdown"
                        isLightBackground={true}
                      >
                        <IQFourPillarsBreakdown isLightBackground={true} />
                      </LockedContent>
                    </div>
                  </MotionSection>
                )}

                {/* IQ Plugin Visuals - Section 06 (N - Navigate) */}
                {section.id === 'section-06' && data.slug === 'iq-plugin' && (
                  <>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <LockedContent
                          isUnlocked={showPasswordContent}
                          password="access"
                          caseStudySlug={data.slug}
                          unlockMessage="Password required to view persona and challenge details"
                          isLightBackground={true}
                        >
                          <IQChallengesBreakdown isLightBackground={true} />
                        </LockedContent>
                      </div>
                    </MotionSection>
                    <MotionSection className="surface-light py-8 md:py-12">
                      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <IQValidationSources isLightBackground={true} />
                      </div>
                    </MotionSection>
                  </>
                )}

                {/* IQ Plugin Visuals - Section 06 (N - Navigate) */}
                {/* Note: Learning and Pattern Connections content is now part of section-06 body */}

              </div>
            )
          })}

          {/* Process Timeline removed - redundant with ProcessTimelineNav */}

          {/* Final Summary Section */}
          {/* FinalSummary is now combined with Section 08 */}

          {/* Design System Showcase - Subtle, Not Prominent */}
          <MotionSection className="surface-light py-8 md:py-12">
            <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <DesignSystemShowcase isLightBackground={true} caseStudySlug={data.slug} />
            </div>
          </MotionSection>

          {/* Related Case Studies */}
          <RelatedCaseStudies currentSlug={data.slug} />

          {/* Let's Talk CTA */}
          <LetsTalkCTA />

          {/* Case Study Signature Badge */}
          <MotionSection className="surface-light py-8 md:py-12">
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