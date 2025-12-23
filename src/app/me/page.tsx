'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import MotionSection from '@/components/ui/MotionSection'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import ScrollGear from '@/components/ui/ScrollGear'
import { recommendations } from '@/data/home'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: THE INVITATION
          Video-first. Personal. "52 seconds. That's all I ask."
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection id="profile" className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Logo mark at top */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-12 h-12 text-[var(--accent-teal)]">
                <AnimatedSignatureLogo
                  className="w-full h-full"
                  duration={10000}
                  pauseDuration={5000}
                />
              </div>
            </motion.div>

            {/* Main headline */}
            <h1 className="font-serif text-slate-900 text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6 px-4">
              52 seconds.<br />
              <span className="text-slate-600">That&apos;s all I ask.</span>
            </h1>

            {/* Video - THE HERO (compact) */}
            <div className="max-w-[280px] xs:max-w-[320px] sm:max-w-sm mx-auto mb-6 sm:mb-8 px-4">
              <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl">
                {/* Window Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-100 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="font-mono text-slate-500 text-[10px]">
                      meet_anuja.mp4
                    </span>
                  </div>
                  <span className="font-mono text-[var(--accent-teal)] text-[10px] tracking-widest">
                    52s
                  </span>
                </div>

                {/* Video */}
                <CustomVideoPlayer
                  src="/videos/intro-video.mp4"
                  className="w-full"
                />
              </div>
            </div>

            {/* Text block - narrative flow */}
            <div className="max-w-4xl mx-auto mb-4 sm:mb-6 space-y-3 px-4">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed lg:whitespace-nowrap">
                Principal Product Designer with 13 years of experience. I specialize in <span className="text-slate-900 font-semibold">untangling the world&apos;s most complex enterprise systems</span>.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <span className="text-slate-900 font-medium">The Mission?</span> <span className="text-slate-500">Build a high-performance portfolio website in 4 weeks with zero coding team.</span>
                <br className="hidden sm:block" />
                <span className="text-slate-900 font-medium">The Strategy?</span> <span className="text-slate-500">Treating AI as a specialized engineering team.</span>
                <br className="hidden sm:block" />
                <span className="text-slate-900 font-medium">The Result?</span> <span className="text-slate-500">Version 5.0 is live. Delivered an MVP in week 1.</span>
              </p>
            </div>

            {/* Tool pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-6 sm:mb-8 px-4"
            >
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { name: 'ChatGPT', desc: 'Strategy & Data' },
                  { name: 'Claude', desc: 'Architecture' },
                  { name: 'Gemini', desc: 'Visual Polish' },
                  { name: 'Cursor', desc: 'Build Engine' },
                  { name: 'Antigravity', desc: 'Advanced Logic' },
                  { name: 'AWS', desc: 'Global Scale' },
                ].map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono hover:border-[var(--accent-teal)]/50 hover:text-slate-900 transition-colors"
                  >
                    <span className="text-slate-900">{tool.name}</span>
                    <span className="text-[var(--accent-teal)] text-[10px] tracking-tight">{tool.desc}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA - Let's Talk */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a
                href="mailto:anujanimmagadda@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-teal-800)] text-white text-sm font-medium hover:bg-[var(--accent-teal-900)] transition-all hover:scale-105 shadow-lg"
              >
                <span>Let&apos;s Talk</span>
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2.5: IMPACT GRID (ENTERPRISE PRINCIPAL)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection animate={true} className="pb-10 md:pb-14">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1: Velocity */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="text-[var(--accent-teal)] font-mono text-xs uppercase tracking-widest mb-4">
                01_Velocity
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-2">1 Architect. 6 Weeks. 5 Versions.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Deployed a functional MVP in 7 days. Iterated through 5 full architectural pivots to reach this level of fidelity. I don&apos;t get stuck; I deliver.
              </p>
            </div>

            {/* Metric 2: Legacy */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl group">
              <div className="text-[var(--accent-teal)] font-mono text-xs uppercase tracking-widest mb-4">
                02_Modernization
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">13 Years of Complexity Untangled.</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specializing in enterprise-scale digital transformation. Bridging the gap between 50-year-old legacy systems and modern AI/ML user experiences.
              </p>
            </div>

            {/* Metric 3: Orchestration */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="text-[var(--accent-teal)] font-mono text-xs uppercase tracking-widest mb-4">
                03_Orchestration
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-2">Design-Engineering Bridge.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Architected a custom Design Token system to ensure pixel-perfect consistency across a multi-agent automated build. I speak the language of code.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: THE TRANSFORMATION
          "WebFOCUS transformed me."
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection animate={true} className="py-10 md:py-14 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30" />

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-8 lg:gap-16 items-start">

            {/* Left: The Statement */}
            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-teal)] via-[var(--accent-teal)]/60 to-transparent rounded-full" />

              <div className="pl-4">
                <span className="inline-block text-xs font-mono uppercase tracking-wider text-[var(--accent-teal)] mb-3">
                  The Turning Point
                </span>
                <h2 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
                  WebFOCUS<br />
                  <span className="text-[var(--accent-teal)]">transformed</span><br />
                  me.
                </h2>
              </div>
            </div>

            {/* Right: The Story */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="group relative bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium mb-1">Out of my depth → Radical curiosity</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Legacy systems. Data science. Machine learning. Enterprise scale.
                      My instinct wasn&apos;t to fake it—it was to learn obsessively.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium mb-1">Relationships → A seat at the table</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      I talked to everyone. Engineers, PMs, data scientists. Built trust in the process.
                      That earned me influence—where my voice actually mattered.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - highlighted */}
              <div className="group relative bg-gradient-to-br from-[var(--accent-teal-soft)] to-white border border-[var(--accent-teal)]/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-teal-soft)] flex items-center justify-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-[var(--accent-teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium mb-1">Mentorship → Paying it forward</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Daily mentorship taught me to lead, present, and carry myself with confidence.
                      That transformation is why I mentor others now—I want everyone to experience it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: SOCIAL PROOF (Curated 6)
      ═══════════════════════════════════════════════════════════════════════ */}
      <MotionSection animate={true} id="social-proof" className="py-10 md:py-14 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="space-y-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-slate-900 text-2xl md:text-3xl leading-tight mb-3">
                Voices from the Trenches
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Engineers, PMs, data scientists, and leaders I&apos;ve partnered with.
              </p>
            </div>

            {/* Featured - Origin Story (Vikram Patel) */}
            <div>
              {recommendations.filter(r => r.source === 'origin').map((review) => (
                <div
                  key={review.name}
                  className="relative group"
                >
                  <div className="relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all">
                    <div className="absolute top-6 right-8 text-purple-500/10 text-6xl font-serif leading-none hidden md:block">&ldquo;</div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-600 text-xs font-mono uppercase tracking-wider">
                        <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                </div>
              ))}
            </div>

            {/* Curated 4 Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {recommendations
                .filter(r => ['Marcus Horbach, Ph.D.', 'Yingchun Chen', 'Karishma Khadge', 'Anita George'].includes(r.name))
                .map((review, index) => {
                  const isDataScience = review.role.toLowerCase().includes('data') || review.role.toLowerCase().includes('scientist')
                  const isEngineering = review.role.toLowerCase().includes('engineer') || review.role.toLowerCase().includes('software')
                  const isCustomer = review.role.toLowerCase().includes('account') || review.role.toLowerCase().includes('strategist')

                  const accentColor = isDataScience ? 'purple' : isEngineering ? 'teal' : isCustomer ? 'emerald' : 'amber'
                  const colorClasses = {
                    purple: 'text-purple-400',
                    teal: 'text-[var(--accent-teal)]',
                    amber: 'text-amber-400',
                    emerald: 'text-emerald-400',
                  }
                  const textColor = colorClasses[accentColor as keyof typeof colorClasses]

                  return (
                    <div
                      key={review.name}
                      className="group relative"
                    >
                      <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all h-full flex flex-col">
                        <div className="mb-3">
                          <span className={`font-mono ${textColor} text-xs uppercase tracking-widest`}>
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
                    </div>
                  )
                })}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/anu159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-[var(--accent-teal)] transition-colors group"
              >
                <span className="font-mono text-xs">More on LinkedIn</span>
                <svg aria-hidden="true" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://adplist.org/mentors/anuja-harsha-nimmagadda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-[var(--accent-teal)] transition-colors group"
              >
                <span className="font-mono text-xs">ADPList Reviews</span>
                <svg aria-hidden="true" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <MotionSection animate={true} className="py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Left - Context */}
            <div className="lg:col-span-1 space-y-4">
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
                  className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200"
                >
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="font-mono text-[10px] text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
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
      <MotionSection animate={true} className="py-10 md:py-14 pb-safe">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center space-y-6">
          <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
            Let&apos;s connect.
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-sm md:text-base">
            <a href="mailto:anujanimmagadda@gmail.com" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors min-h-[44px] flex items-center">
              anujanimmagadda@gmail.com
            </a>
            <span className="text-slate-300 hidden md:inline">·</span>
            <a href="https://www.linkedin.com/in/anu159" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors min-h-[44px] flex items-center">
              LinkedIn
            </a>
            <span className="text-slate-300 hidden md:inline">·</span>
            <a href="tel:+17813547394" className="text-slate-700 font-mono hover:text-[var(--accent-teal)] transition-colors min-h-[44px] flex items-center">
              +1 781-354-7394
            </a>
          </div>

          <p className="text-slate-400 text-xs pt-4">
            Designed by Anuja. Orchestrated via Multi-Agent AI.
          </p>

          {/* Safe area for iPhone home indicator */}
          <div className="h-safe-area-inset-bottom" />
        </div>
      </MotionSection>

      {/* Scroll-linked rotating gear */}
      <ScrollGear />
    </main >
  )
}
