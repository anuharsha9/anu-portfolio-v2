'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import SignatureLogo from '@/components/brand/SignatureLogo'
import { getTheme, spacing } from '@/lib/design-system'

export default function SiteFooter() {
  const pathname = usePathname()
  const router = useRouter()
  const currentYear = new Date().getFullYear()
  const t = getTheme(true)

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (pathname === '/') {
      // First scroll to top instantly to avoid "stuck at bottom" feeling
      window.scrollTo({ top: 0, behavior: 'instant' })

      // Then smoothly scroll to the section
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          const mainNavHeight = 72
          const sectionNavHeight = 48
          const sectionNavVisible = document.querySelector('[aria-label="Landing page section navigation"]')?.getBoundingClientRect().height || 0
          const totalNavHeight = mainNavHeight + (sectionNavVisible > 0 ? sectionNavHeight : 0)
          const offset = totalNavHeight + 20

          const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = Math.max(0, elementPosition - offset)

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })

          window.history.pushState(null, '', `#${sectionId}`)
        }
      }, 50)
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <footer className={`${t.monitor.bg} border-t ${t.monitor.border}`}>
      <div className={`${spacing.containerFull} py-space-6 sm:py-space-8`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Signature & Name */}
          <Link
            href="/"
            className="flex items-center gap-space-3 md:gap-space-4 hover:opacity-80 transition-opacity duration-300 group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
              <SignatureLogo className={`w-full h-full ${t.monitor.text} group-hover:text-[var(--accent-teal)] transition-colors duration-300`} />
            </div>
            <span className={`${t.monitor.text} font-medium text-sm md:text-base group-hover:text-[var(--accent-teal)] transition-colors duration-300`}>
              Anuja Harsha Nimmagadda
            </span>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Navigation Links */}
            <nav className="hidden md:flex flex-wrap items-center justify-center gap-space-6">
              <Link
                href="/#work-overview"
                onClick={(e) => {
                  e.preventDefault()
                  if (pathname === '/') {
                    handleSectionClick(e, 'work-overview')
                  } else {
                    router.push('/#work-overview')
                  }
                }}
                className={`${t.monitor.textMuted} hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium`}
              >
                Work
              </Link>
              <Link
                href="/me"
                onClick={(e) => {
                  if (pathname !== '/me') {
                    e.preventDefault()
                    router.push('/me')
                  }
                }}
                className={`${t.monitor.textMuted} hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium`}
              >
                About Me
              </Link>
              <Link
                href="/#lets-talk"
                onClick={(e) => handleSectionClick(e, 'lets-talk')}
                className={`${t.monitor.textMuted} hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium`}
              >
                Contact
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-space-4">
              <a
                href="https://www.linkedin.com/in/anu159"
                target="_blank"
                rel="noopener noreferrer"
                className={`${t.monitor.textMuted} hover:text-[var(--accent-teal)] transition-colors duration-300`}
                aria-label="LinkedIn"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://medium.com/@anu.anuja"
                target="_blank"
                rel="noopener noreferrer"
                className={`${t.monitor.textMuted} hover:text-[var(--accent-teal)] transition-colors duration-300`}
                aria-label="Medium"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>

            {/* Separator & Copyright */}
            <span className={`hidden md:inline ${t.monitor.border}`}>·</span>
            <div className="flex items-center gap-space-3">
              <p className={`${t.monitor.textDim} text-xs md:text-sm`} suppressHydrationWarning>
                Engineered and orchestrated with AI agents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
