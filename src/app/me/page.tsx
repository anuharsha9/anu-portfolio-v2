'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import MotionSection from '@/components/ui/MotionSection'
import { SignatureWordmark } from '@/components/brand'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'

// Note: Metadata must be exported from a server component
// Since this is a client component, we'll handle SEO via layout or a wrapper

export default function AboutPage() {
  const textTileRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [imageHeight, setImageHeight] = useState<number | null>(null)

  useEffect(() => {
    const updateImageHeight = () => {
      if (textTileRef.current) {
        const textHeight = textTileRef.current.offsetHeight
        setImageHeight(textHeight)
      }
    }

    // Initial measurement
    updateImageHeight()

    // Use ResizeObserver for more accurate measurements
    const resizeObserver = new ResizeObserver(() => {
      updateImageHeight()
    })

    if (textTileRef.current) {
      resizeObserver.observe(textTileRef.current)
    }

    // Also listen to window resize
    window.addEventListener('resize', updateImageHeight)
    
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateImageHeight)
    }
  }, [])
  return (
    <main className="min-h-screen">
      {/* SECTION 1 — HERO WITH SIGNATURE */}
      <MotionSection className="surface-dark py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
        {/* Animated Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[500px] md:w-[500px] md:h-[600px]">
            <AnimatedSignatureLogo
              className="w-full h-full text-white opacity-[0.05]"
              duration={50000}
              pauseDuration={4000}
              autoPlay={true}
            />
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="space-y-8"
          >
            {/* Signature Brand Section */}
            <section className="flex flex-col items-center gap-6 pt-0 pb-6">
              <SignatureWordmark />
            </section>

            {/* Intro Video */}
            <div className="max-w-md mx-auto" style={{ width: '80%', maxWidth: '358px' }}>
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-[var(--bg-dark-alt)] shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                <CustomVideoPlayer
                  src="/videos/intro-video.mp4"
                  poster="/images/intro-video-poster.jpg"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 2 — ORIGIN STORY */}
      <MotionSection className="surface-dark-alt py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: '4%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="space-y-4 text-center">
              <div className="flex items-baseline gap-4 justify-center">
                <span className="text-white/40 text-sm font-mono uppercase tracking-wider">01</span>
                <div className="h-px flex-1 bg-white/10 max-w-md"></div>
                <div className="h-px w-12 bg-[var(--accent-teal)]"></div>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-serif leading-tight">
                Where it started
              </h2>
            </div>

            {/* Content Grid */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
              {/* Photo - Left Side */}
              <div ref={imageContainerRef} style={imageHeight ? { maxHeight: `${imageHeight}px` } : {}}>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center" style={imageHeight ? { maxHeight: `${imageHeight}px`, height: `${imageHeight}px`, width: 'fit-content' } : { width: 'fit-content' }}>
                  <Image
                    src="/images/anu-photo.jpeg"
                    alt="Anuja Harsha Nimmagadda"
                    width={400}
                    height={600}
                    className="object-contain"
                    style={imageHeight ? { 
                      maxHeight: `${imageHeight}px`, 
                      width: 'auto', 
                      height: 'auto', 
                      display: 'block',
                      aspectRatio: 'auto'
                    } : {
                      width: 'auto',
                      height: 'auto'
                    }}
                    priority
                  />
                </div>
              </div>

              {/* Content - Right Side */}
              <div ref={textTileRef} style={{ width: '70%', maxWidth: '600px' }}>
                <div className="bg-white/5 rounded-lg p-6 md:p-8 border border-white/10">
                  <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                    <p>
                      I discovered design at age 15. What started as early curiosity around visual storytelling quickly evolved into a deeper fascination with problem-solving — how to make complex systems understandable, how to bring order to chaos, and how to help people feel confident in tools that seemed overwhelming at first.
                    </p>
                    <p>
                      Over the past 13+ years, I&apos;ve worked across startups, design agencies, enterprise products, and freelance consulting. I&apos;ve always been drawn to complexity, messy systems, and places where clarity doesn&apos;t exist yet — because that&apos;s where I do my best work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 3 — WHAT I'M KNOWN FOR & HOW I THINK */}
      <MotionSection className="surface-light py-24 md:py-32 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: '4%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
            className="space-y-12 md:space-y-16"
          >
            {/* Section Header */}
            <div className="space-y-4 text-center">
              <div className="flex items-baseline gap-4 justify-center">
                <span className="text-[#666666] text-sm font-mono uppercase tracking-wider">02</span>
                <div className="h-px flex-1 bg-black/10 max-w-md"></div>
                <div className="h-px w-12 bg-[var(--accent-teal)]"></div>
              </div>
              <h2 className="text-[var(--text-primary-light)] text-3xl md:text-4xl font-serif">
                What I&apos;m known for
              </h2>
            </div>

            {/* Key Traits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'Builder',
                  description: 'If nobody\'s doing it, I\'ll do it. I learn what I need to learn and execute—bridging gaps between design, engineering, and product.',
                },
                {
                  title: 'Systems Thinker + Creative',
                  description: 'I decompose chaos and architect flows, while also designing, animating, and writing. Both sides of the brain in one person.',
                },
                {
                  title: 'High-Output Operator',
                  description: 'I operate at top velocity. Built this portfolio in less than two weeks, redesigned 3 enterprise systems end-to-end alone.',
                },
                {
                  title: 'Leader Without Title',
                  description: 'I take initiative before being asked. I onboard teams, align engineers, and make decisions when others freeze. Bold and fearless.',
                },
                {
                  title: 'Multi-Disciplinary',
                  description: 'I blend UX, product thinking, data science, engineering logic, animation, and branding. Usually 3–5 people—I do all of it.',
                },
                {
                  title: 'Survivor With Vision',
                  description: 'I navigate complexity and uncertainty while building for the future. I convert challenges into forward motion and maintain momentum under pressure.',
                },
              ].map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.1,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="bg-black/5 rounded-2xl p-6 md:p-8 border border-black/10 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[#666666] text-xs font-mono uppercase tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-black/10"></div>
                      <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
                    </div>
                    <h3 className="text-[var(--text-primary-light)] text-xl md:text-2xl font-serif group-hover:text-[var(--accent-teal)] transition-colors">
                      {trait.title}
                    </h3>
                    <p className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 4 — DESIGN WRITING & ARTICLES */}
      <MotionSection className="surface-light py-24 md:py-32 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: '4%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="space-y-4 text-center">
              <div className="flex items-baseline gap-4 justify-center">
                <span className="text-[#666666] text-sm font-mono uppercase tracking-wider">04</span>
                <div className="h-px flex-1 bg-black/10 max-w-md"></div>
                <div className="h-px w-12 bg-[var(--accent-teal)]"></div>
              </div>
              <h2 className="text-[var(--text-primary-light)] text-3xl md:text-4xl font-serif">
                Design writing & essays
              </h2>
              <p className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
                I write about my design journeys, the complex problems I&apos;ve tackled, and the insights I&apos;ve learned along the way. 
                These articles explore the thinking behind my work, the challenges of enterprise UX, and how I approach systems thinking in practice.
              </p>
              <p className="text-[var(--text-muted-light)] text-sm md:text-base leading-relaxed italic">
                Featured below are articles I authored for the WebFOCUS community, sharing design insights and UX principles with the broader platform ecosystem.
              </p>
            </div>

            {/* Article Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Article 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
                className="group"
              >
                <a
                  href="https://community.ibi.com/articles/the-secret-behind-better-bi-who's-your-business-user-r44/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-white/50 rounded-xl border border-black/10 p-6 md:p-8 hover:bg-white/70 hover:border-[var(--accent-teal)]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#666666] text-xs font-mono uppercase tracking-wider">Published on IBI Community</span>
                      <svg
                        className="w-4 h-4 text-[#666666] group-hover:text-[var(--accent-teal)] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-serif leading-tight group-hover:text-[var(--accent-teal)] transition-colors">
                      The secret behind better BI: Who&apos;s your business user?
                    </h3>
                    <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                      Exploring how understanding your actual business users—not just your technical users—transforms how you design enterprise BI experiences. 
                      This article dives into user personas, workflows, and the gap between what users need and what we assume they need.
                    </p>
                    <div className="pt-2">
                      <span className="text-[var(--accent-teal)] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read article
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>

              {/* Article 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
                className="group"
              >
                <a
                  href="https://community.ibi.com/forums/topic/16161-enhancing-user-experience-in-webfocus-dsml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-white/50 rounded-xl border border-black/10 p-6 md:p-8 hover:bg-white/70 hover:border-[var(--accent-teal)]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#666666] text-xs font-mono uppercase tracking-wider">Published on IBI Community</span>
                      <svg
                        className="w-4 h-4 text-[#666666] group-hover:text-[var(--accent-teal)] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-serif leading-tight group-hover:text-[var(--accent-teal)] transition-colors">
                      Enhancing user experience in WebFOCUS DSML
                    </h3>
                    <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                      A deep dive into making data science and machine learning accessible in enterprise tools. 
                      This piece covers the design challenges of DSML, how to balance power with simplicity, and the UX principles that guide 
                      making advanced capabilities approachable for non-technical users.
                    </p>
                    <div className="pt-2">
                      <span className="text-[var(--accent-teal)] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read article
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Medium Button */}
            <div className="text-center pt-8">
              <a
                href="https://medium.com/@anu.anuja"
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--accent-teal)] text-[var(--accent-teal)] font-medium hover:bg-[var(--accent-teal)] hover:text-white transition-all duration-300 group"
              >
                <span>View all articles on Medium</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 5 — OUTSIDE OF WORK */}
      <MotionSection className="surface-light py-24 md:py-32 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: '4%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="space-y-4 text-center">
              <div className="flex items-baseline gap-4 justify-center">
                <span className="text-[#666666] text-sm font-mono uppercase tracking-wider">05</span>
                <div className="h-px flex-1 bg-black/10 max-w-md"></div>
                <div className="h-px w-12 bg-[var(--accent-teal)]"></div>
              </div>
              <h2 className="text-[var(--text-primary-light)] text-3xl md:text-4xl font-serif">
                Outside of work
              </h2>
            </div>

            {/* Paragraph above tiles */}
            <div className="max-w-3xl mx-auto mb-8 md:mb-12">
              <p className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed text-center">
                I&apos;m a parent of two, a 4 year-old boy and 1 year-old girl, with the most supportive husband. My family plays a very important role in my life. Motherhood shapes my discipline, resilience, empathy, and systems thinking more than anything else. I enjoy slow evenings, quiet rituals, and hobbies that balance the intensity of design work.
              </p>
            </div>

            {/* Hobby Tiles - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'Painting',
                  description: 'I do digital and canvas painting. Focusing on Indian mythology.',
                  image: '/assets/painting.jpg',
                  alt: 'Painting'
                },
                {
                  title: 'Baking',
                  description: 'I bake everything there is to bake. Cakes, muffins, pastries.',
                  image: '/assets/baking.jpg',
                  alt: 'Baking'
                },
                {
                  title: 'Cooking',
                  description: 'I cook more than 400 dishes learned over the years.',
                  image: '/assets/cooking.jpg',
                  alt: 'Cooking'
                },
                {
                  title: 'Poetry & Writing',
                  description: 'I write poetry and long-form essays.',
                  image: '/assets/poetry.jpg',
                  alt: 'Poetry'
                },
              ].map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.1,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="bg-black/5 rounded-2xl p-6 md:p-8 border border-black/10 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    {/* Image */}
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-black/10 bg-white/50">
                      <Image
                        src={hobby.image}
                        alt={hobby.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#666666] text-xs font-mono uppercase tracking-wider">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1 bg-black/10"></div>
                        <div className="h-px w-6 bg-[var(--accent-teal)]"></div>
                      </div>
                      <h3 className="text-[var(--text-primary-light)] text-lg md:text-xl font-serif group-hover:text-[var(--accent-teal)] transition-colors">
                        {hobby.title}
                      </h3>
                      <p className="text-[var(--text-muted-light)] text-sm md:text-base leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* SECTION 6 — CONTACT / CTA */}
      <MotionSection className="surface-dark py-40 md:py-[12.5rem] border-t border-white/5 relative overflow-hidden">
        {/* Animated Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[500px] md:w-[500px] md:h-[600px]">
            <AnimatedSignatureLogo
              className="w-full h-full text-white opacity-[0.05]"
              duration={50000}
              pauseDuration={4000}
              autoPlay={true}
            />
          </div>
        </div>
        {/* Subtle white glow behind content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-4xl h-full bg-gradient-radial from-white/5 via-white/2 to-transparent blur-3xl opacity-50" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: '4%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.1,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4 text-center">
              <div className="flex items-baseline gap-4 justify-center">
                <span className="text-white/40 text-sm font-mono uppercase tracking-wider">06</span>
                <div className="h-px flex-1 bg-white/10 max-w-md"></div>
                <div className="h-px w-12 bg-[var(--accent-teal)]"></div>
              </div>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
                Let&apos;s build something meaningful together.
              </h2>
            </div>

            {/* Contact Links Strip - Matching TalkSection */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-4 text-white pt-2">
              <a
                href="tel:+17813547394"
                className="text-white text-base md:text-lg font-medium transition-all duration-300 hover:text-[var(--accent-teal)]"
              >
                +1 781-354-7394
              </a>
              <span className="text-white/40">·</span>
              <a
                href="mailto:anu.anuja@outlook.com"
                className="text-white text-base md:text-lg font-medium transition-all duration-300 hover:text-[var(--accent-teal)]"
              >
                anu.anuja@outlook.com
              </a>
              <span className="text-white/40">·</span>
              <a
                href="https://www.linkedin.com/in/anu159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base md:text-lg font-medium transition-all duration-300 hover:text-[var(--accent-teal)]"
              >
                LinkedIn
              </a>
              <span className="text-white/40">·</span>
              <a
                href="https://calendly.com/anu-anuja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base md:text-lg font-medium transition-all duration-300 hover:text-[var(--accent-teal)]"
              >
                Schedule a Conversation
              </a>
            </div>
          </motion.div>
        </div>
      </MotionSection>
    </main>
  )
}
