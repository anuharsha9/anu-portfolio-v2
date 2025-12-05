'use client'

import { motion } from 'framer-motion'
import SignatureLogo from '@/components/brand/SignatureLogo'

const frameworkItems = [
  {
    letter: 'D',
    title: 'Discover Deeply',
    mainText: 'Before touching pixels, I listen. I learn the system, talk to everyone — support, QA, PMs, engineers, even that one person who knows everything.',
    lastSentence: 'Building context and empathy before creating solutions means we\'re all on the same page before making decisions.',
  },
  {
    letter: 'E',
    title: 'Empathize with the Ecosystem',
    mainText: 'I understand not just users, but builders. I recognize every role — PM, engineer, QA — as part of the design equation.',
    lastSentence: 'Creating shared understanding across functions results in alignment instead of conflict.',
  },
  {
    letter: 'S',
    title: 'Simplify the Chaos',
    mainText: 'Enterprise systems are complex and noisy. I map, cluster, and prioritize until patterns appear.',
    lastSentence: 'Making complexity digestible for everyone means complexity becomes clarity.',
  },
  {
    letter: 'I',
    title: 'Iterate with Inclusion',
    mainText: 'I don\'t design alone. I prototype together, invite feedback early, and listen to dissent.',
    lastSentence: 'Building ownership and momentum through collaboration creates cross-team buy-in.',
  },
  {
    letter: 'G',
    title: 'Grow Through Constraints',
    mainText: 'Constraints aren\'t blockers — they\'re design\'s greatest teachers. Each limit sharpens creativity and pushes clarity.',
    lastSentence: 'Letting every constraint refine, not restrict, your solution means solutions are shaped by reality, not idealism.',
  },
  {
    letter: 'N',
    title: 'Navigate Forward',
    mainText: 'Once I\'ve learned the currents, I lead with confidence. I adapt to change, maintain balance, and carry my lessons wherever I go next.',
    lastSentence: 'Keeping moving with intention means transformation sticks and scales.',
  },
]

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="surface-light py-8 xs:py-10 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 md:space-y-8"
        >
          {/* Signature Wordmark - Name and Tagline */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              {/* Signature Logo - smaller than watermark */}
              <div className="w-16 h-16 md:w-20 md:h-20">
                <SignatureLogo className="w-full h-full text-[var(--text-primary-light)]" />
              </div>
              {/* Name and Tagline */}
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-serif text-[var(--text-primary-light)] leading-tight">
                  Anuja Harsha Nimmagadda
                </h1>
                <p className="text-sm md:text-base text-[var(--text-muted-light)] font-sans">
                  Designer · Product Strategist · AI-Driven Systems Thinker
                </p>
              </div>
            </div>
          </div>

          {/* Header - Simplified */}
          <div className="text-center space-y-2 max-w-4xl mx-auto mb-8">
            <h2 className="text-[var(--text-primary-light)] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight">
              D.E.S.I.G.N. Framework
            </h2>
            <p className="text-[var(--text-muted-light)] text-sm md:text-base font-bold leading-relaxed pt-2">
              It&apos;s how I think, lead, and deliver impact and become a valuable asset to any team.
            </p>
            <p className="text-[var(--text-muted-light)] text-sm md:text-base font-light leading-relaxed">
              This framework distills 13 years of my design career — the insights and process I&apos;ve found myself returning to, because it works.
            </p>
          </div>

          {/* Framework Items - 2 Column Grid (3 Rows) with Drop Caps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {frameworkItems.map((item, index) => {
              const firstLetter = item.title.charAt(0)
              const restOfTitle = item.title.slice(1)

              return (
                <motion.div
                  key={item.letter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group space-y-3 p-5 md:p-6 rounded-lg border border-refined-light bg-white/50 hover:bg-white/70 cursor-pointer hover:shadow-lg hover:border-[var(--accent-teal)]/30"
                  whileHover={{
                    y: -4,
                    scale: 1.01
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Title with Drop Cap */}
                  <h3 className="text-[var(--text-primary-light)] text-xl md:text-2xl font-serif font-medium leading-snug flex items-baseline relative">
                    <span className="text-[var(--accent-teal)] text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-none mr-2 opacity-90 group-hover:opacity-100 transition-opacity duration-normal tracking-tight">
                      {firstLetter}
                    </span>
                    <span className="group-hover:text-[var(--accent-teal)] transition-colors duration-normal">{restOfTitle}</span>
                  </h3>

                  {/* Description with integrated outcome */}
                  <p className="text-[var(--text-muted-light)] text-sm md:text-base leading-relaxed clear-left">
                    {item.mainText}
                  </p>
                  {/* Key takeaway - visually distinct but not teal */}
                  <div className="mt-3 pt-3">
                    <p className="text-[var(--text-primary-light)] text-sm md:text-base leading-relaxed italic font-light">
                      {item.lastSentence}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Final Punchline - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center pt-4 md:pt-6 mt-4 md:mt-6"
          >
            <p className="text-[var(--text-primary-light)] text-base xs:text-lg sm:text-xl md:text-2xl font-serif leading-tight italic max-w-4xl mx-auto">
              I don&apos;t just design; I make clarity operational — across people, systems, and products.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

