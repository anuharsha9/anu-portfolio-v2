'use client'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8" aria-label="Loading content">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 border-2 border-[var(--accent-teal)]/20 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-[var(--accent-teal)] rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

