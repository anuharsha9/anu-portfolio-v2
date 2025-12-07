'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SkipToContent from '@/components/accessibility/SkipToContent'
import ReadingProgress from '@/components/case-study/ReadingProgress'
import BackToTop from '@/components/navigation/BackToTop'
import AboutMeSectionNav from '@/components/navigation/AboutMeSectionNav'
import URLHashSync from '@/components/navigation/URLHashSync'
import { ErrorBoundary } from '@/components/error/ErrorBoundary'

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  const pathname = usePathname()

  return (
    <ErrorBoundary>
      <SkipToContent />
      <ReadingProgress />
      <SiteHeader />
      {(pathname === '/me' || pathname === '/me/') && <AboutMeSectionNav />}
      <URLHashSync />
      <main id="main-content">
        {children}
      </main>
      <BackToTop />
      <SiteFooter />
    </ErrorBoundary>
  )
}
