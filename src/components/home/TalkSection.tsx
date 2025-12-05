'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import Link from 'next/link'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'

interface ContactLink {
  label: string
  href: string
  isExternal?: boolean
}

const contactLinks: ContactLink[] = [
  { label: '+1 781-354-7394', href: 'tel:+17813547394' },
  { label: 'anu.anuja@outlook.com', href: 'mailto:anu.anuja@outlook.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anu159', isExternal: true },
]

export default function TalkSection() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="lets-talk"
      className="surface-dark relative overflow-visible py-20 xs:py-24 sm:py-32 md:py-40 lg:py-[12.5rem] border-t border-white/5"
    >
      {/* Animated Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[250px] h-[300px] xs:w-[300px] xs:h-[350px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px]">
          <AnimatedSignatureLogo
            className="w-full h-full text-white opacity-[0.05]"
            duration={100000}
            pauseDuration={4000}
            autoPlay={true}
          />
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex flex-col items-center justify-center space-y-8"
        >
          {/* Headline */}
          <div className="text-center">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center leading-tight px-2">
              Let&apos;s talk about what clarity could look like for you.
            </h2>
          </div>

          {/* Horizontal contact links */}
          <div
            ref={linksRef}
            className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 text-white pt-2 px-4"
          >
            {contactLinks.map((link, index) => {
              const isExternal = link.isExternal
              const linkProps = isExternal
                ? {
                  href: link.href,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
                : { href: link.href }

              return (
                <div key={index} className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-6">
                  <motion.div
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative z-10"
                  >
                    {isExternal ? (
                      <a
                        {...linkProps}
                        className="text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 relative group hover:text-[var(--accent-teal)] whitespace-nowrap"
                        style={{
                          textShadow: hoveredLink === index
                            ? '0 0 20px rgba(32, 170, 188, 0.6)'
                            : 'none',
                          color: hoveredLink === index ? 'var(--accent-teal)' : 'white',
                        }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        {...linkProps}
                        className="text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 relative group hover:text-[var(--accent-teal)] whitespace-nowrap"
                        style={{
                          textShadow: hoveredLink === index
                            ? '0 0 20px rgba(32, 170, 188, 0.6)'
                            : 'none',
                          color: hoveredLink === index ? 'var(--accent-teal)' : 'white',
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>

                  {/* Separator dot (except last item) */}
                  {index < contactLinks.length - 1 && (
                    <span className="text-white/40 hidden sm:inline">·</span>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

