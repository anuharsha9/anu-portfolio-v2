import { ReactNode } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SkipToContent from '@/components/accessibility/SkipToContent'
import ReadingProgress from '@/components/case-study/ReadingProgress'
import BackToTop from '@/components/navigation/BackToTop'
import LandingPageSectionNav from '@/components/navigation/LandingPageSectionNav'
import URLHashSync from '@/components/navigation/URLHashSync'

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SkipToContent />
      <ReadingProgress />
      <SiteHeader />
      <LandingPageSectionNav />
      <URLHashSync />
      <main id="main-content">
        {children}
      </main>
      <BackToTop />
      <SiteFooter />
    </>
  )
}
