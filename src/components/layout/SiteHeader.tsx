import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="border-b border-surface bg-transparent sticky top-0 z-50 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-4 flex items-center justify-between">
        <Link href="/" className="text-text hover:text-accent transition-colors font-medium">
          Anuja Harsha Nimmagadda
        </Link>
        <div className="flex gap-6 md:gap-8">
          <Link href="/work" className="text-text hover:text-accent transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-text hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-text hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

