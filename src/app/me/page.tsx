'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MotionSection from '@/components/ui/MotionSection'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import { recommendations } from '@/data/home'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: THE INVITATION
          Video-first. Personal. "53 seconds. That's all I ask."
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection id="profile" className="bg-slate-900 py-12 md:py-16 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-5"
          >
            {/* Pre-headline */}
            <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
              // MEET_ANUJA
            </span>

            {/* Main headline */}
            <h1 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
              53 seconds.<br />
              <span className="text-slate-400">That&apos;s all I ask.</span>
            </h1>

            {/* Video - THE HERO (compact) */}
            <div className="max-w-sm mx-auto">
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                {/* Window Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <span className="font-mono text-slate-500 text-[10px]">
                      meet_anuja.mp4
                    </span>
                  </div>
                  <span className="font-mono text-[var(--accent-teal)] text-[10px] tracking-widest">
                    53s
                  </span>
                </div>

                {/* Video */}
                <CustomVideoPlayer
                  src="/videos/intro-video.mp4"
                  className="w-full"
                />
              </div>
            </div>

            {/* Post-video hook */}
            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
              I&apos;m a Principal Product Designer who builds, not just designs.<br />
              <span className="text-white font-medium">This portfolio is my proof.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/#work-overview"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-teal)] text-white text-sm font-medium hover:bg-[var(--accent-teal-700)] transition-all hover:scale-105 shadow-lg"
              >
                <span>See the Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <a
                href="mailto:anujanimmagadda@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 text-white text-sm font-medium hover:border-slate-400 hover:bg-slate-800/50 transition-all"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Built with AI - Side Project */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-8 space-y-4"
            >
              <p className="text-slate-500 text-sm">
                This portfolio is my AI side project — designed and shipped in 30 days.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { name: 'Cursor', icon: '⌨️' },
                  { name: 'Claude', icon: '🧠' },
                  { name: 'v0', icon: '▲' },
                  { name: 'Figma', icon: '🎨' },
                  { name: 'Vercel', icon: '●' },
                ].map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono hover:border-[var(--accent-teal)]/50 hover:text-white transition-colors"
                  >
                    <span>{tool.icon}</span>
                    <span>{tool.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Personal Signature */}
            <motion.div
              className="pt-4 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="w-10 h-10 text-slate-600 hover:text-[var(--accent-teal)] transition-colors duration-500">
                <AnimatedSignatureLogo
                  className="w-full h-full"
                  duration={10000}
                  pauseDuration={5000}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: THE TRANSFORMATION
          "WebFOCUS transformed me."
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection className="bg-slate-50 py-20 md:py-28 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-8">
            <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
              // THE_ORIGIN_STORY
            </span>

            <h2 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
              WebFOCUS transformed me.
            </h2>

            <div className="max-w-2xl mx-auto space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                When I joined, I was out of my depth. Legacy systems. Data science. Machine learning.
                Enterprise scale. My first instinct was <span className="font-semibold text-slate-900">radical curiosity</span>.
              </p>
              <p>
                I talked to everyone. Learned obsessively. Built relationships in the process.
                That earned me a seat at the table—where my voice and opinion mattered.
              </p>
              <p>
                Through daily mentorship, I learned how to lead, to present, and carry myself with confidence.
                That transformation is why I mentor others now. The growth I experienced—I want everyone to experience it.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: SOCIAL PROOF (Curated 6)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection id="social-proof" className="bg-slate-50 py-20 md:py-24 relative overflow-hidden border-t border-slate-200">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
                // TRUST_NETWORK
              </span>
              <h2 className="font-serif text-slate-900 text-3xl md:text-4xl leading-tight">
                Voices from the Trenches
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Engineers, PMs, data scientists, and leaders I&apos;ve partnered with.
              </p>
            </div>

            {/* Featured - Origin Story (Vikram Patel) */}
            <div>
              {recommendations.filter(r => r.source === 'origin').map((review) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 hover:shadow-lg transition-all">
                    <div className="absolute top-6 right-8 text-purple-500/10 text-6xl font-serif leading-none hidden md:block">&ldquo;</div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-600 text-xs font-mono uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        My First Boss — Where It All Started
                      </span>
                    </div>

                    <blockquote className="font-serif text-slate-700 text-lg md:text-xl leading-relaxed mb-4 relative z-10">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-start justify-between gap-4 pt-4 border-t border-slate-100">
                      <div>
                        <p className="font-semibold text-slate-900">{review.name}</p>
                        <p className="font-mono text-purple-600 text-sm">{review.role}</p>
                        <p className="text-slate-500 text-xs mt-1">{review.company}</p>
                      </div>
                      <div className="text-right max-w-[200px] hidden md:block">
                        <p className="text-slate-500 text-xs leading-relaxed italic">
                          {review.relationship}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Curated 4 Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {recommendations
                .filter(r => ['Marcus Horbach, Ph.D.', 'Yingchun Chen', 'Karishma Khadge', 'Anita George'].includes(r.name))
                .map((review, index) => {
                  const isDataScience = review.role.toLowerCase().includes('data') || review.role.toLowerCase().includes('scientist')
                  const isEngineering = review.role.toLowerCase().includes('engineer') || review.role.toLowerCase().includes('software')
                  const isProduct = review.role.toLowerCase().includes('product')
                  const isCustomer = review.role.toLowerCase().includes('account') || review.role.toLowerCase().includes('strategist')

                  const accentColor = isDataScience ? 'purple' : isEngineering ? 'teal' : isProduct ? 'amber' : isCustomer ? 'emerald' : 'slate'
                  const colorClasses = {
                    purple: { border: 'hover:border-purple-500/50', text: 'text-purple-600', bg: 'bg-purple-50' },
                    teal: { border: 'hover:border-[var(--accent-teal)]/50', text: 'text-[var(--accent-teal)]', bg: 'bg-teal-50' },
                    amber: { border: 'hover:border-amber-500/50', text: 'text-amber-600', bg: 'bg-amber-50' },
                    emerald: { border: 'hover:border-emerald-500/50', text: 'text-emerald-600', bg: 'bg-emerald-50' },
                    slate: { border: 'hover:border-slate-500/50', text: 'text-slate-600', bg: 'bg-slate-100' },
                  }
                  const colors = colorClasses[accentColor as keyof typeof colorClasses]

                  return (
                    <motion.div
                      key={review.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group relative"
                    >
                      <div className={`relative bg-white border border-slate-200 rounded-xl p-5 ${colors.border} hover:shadow-lg transition-all h-full flex flex-col`}>

                        <div className="mb-3">
                          <span className={`font-mono ${colors.text} text-xs uppercase tracking-widest`}>
                            {review.role}
                          </span>
                        </div>

                        <blockquote className="font-serif text-slate-700 text-sm leading-relaxed mb-4 flex-grow">
                          &ldquo;{review.quote}&rdquo;
                        </blockquote>

                        <div className="pt-3 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                            <p className="text-slate-500 text-xs">{review.company}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/anu159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-[var(--accent-teal)] transition-colors font-medium text-sm min-h-[44px]"
              >
                <span>More on LinkedIn</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href="https://adplist.org/mentors/anuja-harsha-nimmagadda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-[var(--accent-teal)] transition-colors font-medium text-sm min-h-[44px]"
              >
                <span>ADPList Reviews</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6: THE HUMAN (Compact)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection className="bg-slate-50 py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Left - Context */}
            <div className="lg:col-span-1 space-y-4">
              <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest">
                // PARALLEL_PROCESSES
              </span>
              <h2 className="font-serif text-slate-900 text-2xl md:text-3xl leading-tight">
                Life Outside the Terminal
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Parent of two — a 4-year-old boy and 1-year-old girl — with the most supportive husband.
                Motherhood shapes my discipline, resilience, and systems thinking more than anything else.
              </p>
            </div>

            {/* Right - Hobbies Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'PAINTING', title: 'Painting', image: '/assets/painting.jpg' },
                { id: 'BAKING', title: 'Baking', image: '/assets/baking.jpg' },
                { id: 'COOKING', title: 'Cooking', image: '/assets/cooking.jpg' },
                { id: 'POETRY', title: 'Poetry', image: '/assets/poetry.jpg' },
              ].map((hobby) => (
                <div
                  key={hobby.id}
                  className="group relative aspect-square rounded-xl overflow-hidden"
                >
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="font-mono text-[10px] text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      {hobby.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7: CONTACT (Simplified)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection className="bg-slate-100 py-12 md:py-16 pb-safe">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="font-serif text-slate-900 text-xl md:text-2xl">
            Let&apos;s connect.
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-sm md:text-base">
            <a href="mailto:anujanimmagadda@gmail.com" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors min-h-[44px] flex items-center">
              anujanimmagadda@gmail.com
            </a>
            <span className="text-slate-400 hidden md:inline">·</span>
            <a href="https://www.linkedin.com/in/anu159" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors min-h-[44px] flex items-center">
              LinkedIn
            </a>
            <span className="text-slate-400 hidden md:inline">·</span>
            <a href="tel:+17813547394" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors min-h-[44px] flex items-center">
              +1 781-354-7394
            </a>
          </div>

          <p className="text-slate-400 text-xs pt-4">
            Designed in Figma. Built with Cursor + AI. © 2025
          </p>
          
          {/* Safe area for iPhone home indicator */}
          <div className="h-safe-area-inset-bottom" />
        </div>
      </MotionSection>
    </main>
  )
}
