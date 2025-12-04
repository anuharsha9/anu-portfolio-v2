'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SkipToContent from '@/components/accessibility/SkipToContent'
import ReadingProgress from '@/components/case-study/ReadingProgress'
import BackToTop from '@/components/navigation/BackToTop'
import LandingPageSectionNav from '@/components/navigation/LandingPageSectionNav'
import AboutMeSectionNav from '@/components/navigation/AboutMeSectionNav'
import URLHashSync from '@/components/navigation/URLHashSync'
import { ErrorBoundary } from '@/components/error/ErrorBoundary'

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  const pathname = usePathname()
  const isAboutMePage = pathname === '/me'
  const isLandingPage = pathname === '/'

  return (
    <ErrorBoundary>
      <SkipToContent />
      <ReadingProgress />
      <SiteHeader />
      {isLandingPage && <LandingPageSectionNav />}
      {isAboutMePage && <AboutMeSectionNav />}
      <URLHashSync />
      <main id="main-content">
        {children}
      </main>
      <BackToTop />
      <SiteFooter />
    </ErrorBoundary>
  )
}
