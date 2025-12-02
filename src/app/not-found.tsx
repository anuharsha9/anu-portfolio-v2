import Link from 'next/link'
import { SignatureLogo } from '@/components/brand'

export default function NotFound() {
  return (
    <main className="min-h-screen surface-dark flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16">
            <SignatureLogo className="w-full h-full text-white" />
          </div>
        </div>

        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-serif text-white font-bold">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-white/80">
            Page not found
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/me"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            About Me
          </Link>
        </div>
      </div>
    </main>
  )
}


