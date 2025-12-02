'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-2 text-sm text-white/60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-white/40" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="text-white/80 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)] rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

