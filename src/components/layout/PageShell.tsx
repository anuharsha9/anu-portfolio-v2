import { ReactNode } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24 pt-12 pb-24">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}

